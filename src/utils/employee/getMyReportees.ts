import prismaFactory from 'utils/prisma';

export const getMyReportees = async (userId: string) => {
    const prisma = prismaFactory.get();
    return await prisma.employeeFieldData.findMany({
        where: {
            value: userId,
            field: {
                name: 'reportingManager'
            }
        },
        select: {
            userId: true,
            value: true
        }
    });
};
