import prismaFactory from 'utils/prisma';

export const getDropDownData = async (masterName: string) => {
    const prisma = prismaFactory.get();

    const result = await prisma.masterValue.findMany({
        where: {
            column: {
                master: {
                    name: masterName
                }
            }
        },
        orderBy: {
            rowId: 'asc'
        },
        select: {
            id: true,
            rowId: true,
            value: true,
            column: {
                select: {
                    name: true
                }
            }
        }
    });

    // Combine the data from CompensationColumnValues and CompensationMasterColumn
    const combinedResult = result.map((row) => {
        return {
            id: row.id,
            rowId: row.rowId,
            value: row.value,
            key: row.column.name,
            master: masterName
        };
    });

    const finalDropdownData = await combinedResult.reduce((result: any, obj: any) => {
        if (!result[obj.rowId]) {
            result[obj.rowId] = {};
        }
        result[obj.rowId][obj.key] = obj.value;
        if (obj.key == 'code') {
            result[obj.rowId]['codeId'] = obj.id;
            result[obj.rowId]['master'] = obj.master;
        }
        if (!result[obj.rowId]['rowId']) {
            result[obj.rowId]['rowId'] = obj.rowId;
        }
        return result;
    }, {});

    const finalData: any = [];

    await Object.entries(finalDropdownData).map(([key, value]: any) => {
        finalData.push(value);
    });

    return finalData;

    // const mstData = await prisma.$queryRaw`SELECT b.id id, b."rowId" rowid,b.value value,(select c.name from public."CompensationMasterColumn" c where b."columnId" = c.id) key FROM
    // public."CompensationColumnValues" b where  b."columnId" in (SELECT a."id" FROM public."CompensationMasterColumn" a where a."compMasterId" =
    // (SELECT d.id FROM public."CompensationMaster" d where d."name"=${masterName})) order by b."rowId"`
};

export const getAllDropDownData = async () => {
    const prisma = prismaFactory.get();

    const result = await prisma.masterValue.findMany({
        where: {},
        orderBy: {
            rowId: 'asc'
        },
        select: {
            id: true,
            rowId: true,
            value: true,
            column: {
                select: {
                    name: true,
                    master: {
                        select: {
                            name: true
                        }
                    }
                }
            }
        }
    });

    // Combine the data from CompensationColumnValues and CompensationMasterColumn
    const combinedResult = result.map((row) => {
        return {
            id: row.id,
            rowId: row.rowId,
            value: row.value,
            key: row.column.name,
            master: row.column.master.name
        };
    });

    const finalDropdownData = await combinedResult.reduce((result: any, obj: any) => {
        if (!result[obj.rowId]) {
            result[obj.rowId] = {};
        }
        result[obj.rowId][obj.key] = obj.value;
        if (obj.key == 'code') {
            result[obj.rowId]['codeId'] = obj.id;
            result[obj.rowId]['master'] = obj.master;
        }
        if (!result[obj.rowId]['rowId']) {
            result[obj.rowId]['rowId'] = obj.rowId;
        }
        return result;
    }, {});

    const finalData: any = [];

    await Object.entries(finalDropdownData).map(([key, value]: any) => {
        finalData.push(value);
    });

    return finalData;
};

export const getDataFromUserId = async (id: string, fieldName: string) => {
    const prisma = prismaFactory.get();

    const masterId = await prisma.employeeFieldData.findFirst({
        where: {
            userId: id,
            field: {
                name: fieldName
            }
        },
        select: {
            value: true
        }
    });

    if (masterId != null) {
        return await getDataFromId(masterId?.value);
    } else {
        return {};
    }
};

export const getDataFromId = async (id: string) => {
    const prisma = prismaFactory.get();

    const rowid = await prisma.masterValue.findFirst({
        where: {
            id: id
        },
        select: {
            rowId: true
        }
    });

    const data = await prisma.masterValue.findMany({
        where: {
            rowId: rowid?.rowId
        },
        select: {
            id: true,
            value: true,
            column: {
                select: {
                    name: true
                }
            }
        }
    });

    const finalData = await data.reduce((result: any, obj: any) => {
        result[obj.column.name] = obj.value;
        if (obj.key == 'code') {
            result[obj.rowId]['codeId'] = obj.id;
            result[obj.rowId]['master'] = obj.master;
        }
        return result;
    }, {});

    return finalData;
};

export const getPayRangeFromUser = async (id: string, payType: string) => {
    const prisma = prismaFactory.get();

    const masterId = await prisma.employeeFieldData.findFirst({
        where: {
            userId: id,
            field: {
                name: 'jobCode'
            }
        },
        select: {
            value: true
        }
    });

    const rowid = await prisma.masterValue.findFirst({
        where: {
            id: masterId?.value
        },
        select: {
            rowId: true,
            value: true
        }
    });

    const data = await prisma.masterValue.findMany({
        where: {
            rowId: rowid?.rowId
        },
        select: {
            id: true,
            value: true,
            column: {
                select: {
                    name: true
                }
            }
        }
    });

    const jobCodeids = await data.map((el) => {
        if (el.column.name == 'code' || el.column.name == 'name') return el.id;
    });

    const filteredJobCodeids = jobCodeids.reduce((acc: any, item) => {
        if (item !== undefined) {
            acc.push(item);
        }
        return acc;
    }, []);

    const payRangeRow = await prisma.masterValue.findFirst({
        where: {
            column: {
                master: {
                    name: payType
                },
                name: 'jobCode'
            },
            value: {
                in: filteredJobCodeids
            }
        },
        select: {
            rowId: true
        }
    });

    if (payRangeRow) {
        const payRange = await prisma.masterValue.findMany({
            where: {
                rowId: payRangeRow.rowId
            },
            select: {
                id: true,
                value: true,
                column: {
                    select: {
                        name: true
                    }
                }
            }
        });

        const finalData = await payRange.reduce((result: any, obj: any) => {
            result[obj.column.name] = obj.value;
            if (obj.key == 'code') {
                result['codeId'] = obj.id;
                result['master'] = obj.master;
            }
            return result;
        }, {});

        return { ...finalData, jobCode: rowid?.value };
    } else {
        return {
            jobCode: rowid?.value,
            min: 0,
            mid: 0,
            max: 0,
            name: ''
        };
    }
};

export const getDataFromCode = async (masterName: string, value: string) => {
    const prisma = prismaFactory.get();

    const rowid = await prisma.masterValue.findFirst({
        where: {
            column: {
                name: 'code',
                master: {
                    name: masterName
                }
            },
            value: value
        },
        select: {
            rowId: true
        }
    });

    const data = await prisma.masterValue.findMany({
        where: {
            rowId: rowid?.rowId
        },
        select: {
            id: true,
            value: true,
            column: {
                select: {
                    name: true
                }
            }
        }
    });

    const finalData = await data.reduce((result: any, obj: any) => {
        result[obj.column.name] = obj.value;
        if (obj.column.name == 'code') {
            result['codeId'] = obj.id;
            result['master'] = obj.master;
        }
        return result;
    }, {});

    return finalData;
};
