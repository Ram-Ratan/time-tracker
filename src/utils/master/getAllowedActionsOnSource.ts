import { createServiceWithZod } from '@talent-monk/utils';
import prismaFactory from 'utils/prisma';
import { z } from 'zod';

export const getAllMasterValuesQuery = createServiceWithZod(
    z.object({
        masterIds: z.array(z.string())
    }),
    z.any(),
    async ({ masterIds }) => {
        try {
            const prisma = prismaFactory.get();

            const uniqueIds = [... new Set(masterIds)]

            const rowData = await prisma.masterValue.findMany({
                where: {
                    id: {
                        in: uniqueIds
                    }
                }
            });

            const rowIds = rowData.map((el) => {
                return el.rowId;
            });

            const combinedResult = await prisma.masterValue.findMany({
                where: {
                    rowId: {
                        in: rowIds
                    }
                },
                include:{
                    column: {
                        select: {
                            name: true
                        }
                    }
                }
            });

            const finalDropdownData = await combinedResult.reduce((result: any, obj) => {
                if (!result[obj.rowId]) {
                    result[obj.rowId] = {};
                }
                result[obj.rowId][obj.column.name] = obj.value;
                if (obj.column.name == 'code') {
                    result[obj.rowId]['codeId'] = obj.id;
                }
                if(!result[obj.rowId]['rowId']){
        
                    result[obj.rowId]['rowId'] = obj.rowId;
        
                  }
                return result;
            }, {});

            let finalData: any = [];

   await Promise.all(Object.entries(finalDropdownData).map(([key, value]: any) => {
        finalData.push(value);
    })
    )

    await Promise.all(finalData.map((el:any)=>{

        const idData =  rowData.filter(eq=>{
            return el.rowId == eq.rowId
        })

        el['dataId'] = idData[0]?.id
    }))

            return finalData;
        } catch (error) {
            throw error;
        }
    }
);
