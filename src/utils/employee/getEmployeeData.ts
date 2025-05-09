import { ZUserDataOutput } from '@talent-monk/client-shared';
import { createServiceWithZod } from '@talent-monk/utils';
import prismaFactory from 'utils/prisma';
import { z } from 'zod';

export const getMultipleuseridsQuery = createServiceWithZod(
    z.object({
        userIds: z.array(z.string())
    }),
    z.any(),
    async ({ userIds }) => {
        try {
            const prisma = prismaFactory.get();

            const userDataFields = await prisma.employeeFieldData.findMany({
                where: {
                    userId: {
                        in: userIds
                    },
                    field: {
                        name: {
                            in: ['fullName', 'businessEmail']
                        }
                    }
                },
                select: {
                    field: true,
                    value: true,
                    userId: true
                }
            });

            const userData = userDataFields.reduce((prev, curr) => {
                if (curr.userId in prev) {
                    return {
                        ...prev,
                        [curr.userId]: {
                            ...prev[curr.userId],
                            [curr.field.name]: {
                                value: curr.value
                            }
                        }
                    };
                }
                return {
                    ...prev,
                    [curr.userId]: {
                        userId: curr.userId,
                        [curr.field.name]: {
                            value: curr.value
                        }
                    }
                };
            }, {} as { [key: string]: z.infer<typeof ZUserDataOutput> });

            const userKeys = Object.keys(userData);

            return userKeys.map((key) => userData[key]);
        } catch (error) {
            throw error;
        }
    }
);
