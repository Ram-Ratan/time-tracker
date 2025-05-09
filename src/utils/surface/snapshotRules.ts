import prismaFactory from 'utils/prisma';

export const snapshotRules = async (planId: string) => {
    const prisma = prismaFactory.get();

    const snapshotRules = await prisma.compensationSnapshotRules.findFirst({
        where: {
            planId: planId
        },
        select: {
            id: true,
            rules: true
        }
    })

    return snapshotRules
};
