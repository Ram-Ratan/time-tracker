import { createHTTPResponse, logger } from '@talent-monk/utils';
import { createPrivateEndpointWithZod } from '@talent-monk/utils';
import { StatusCodes } from 'http-status-codes';
import { z } from 'zod';
import prismaFactory from 'utils/prisma';
import { EmployeeHandler } from '@talent-monk/client-shared';
import { getUserSummaryService } from '../my-summary/query';

export const myReporterSummaryEndpoint = createPrivateEndpointWithZod(
    'MY REPORTER SUMMARY',
    z.object({
        query: z.object({
            startDate: z.string().transform((st)=> new Date(st)).optional(),
            endDate: z.string().transform((ed)=> new Date(ed)).optional()
        }),
        body: z.object({
            userIds: z.array(z.string())
        })
    }),
    z.any(),
    async (input) => {
        try {
            let userIds = input.data.body.userIds;
            const prisma = prismaFactory.get();
            const user = await prisma.user.findUniqueOrThrow({
                where: {
                    uid: input.userAuthId
                }
            });
            if (userIds.length === 0) {
                const managerObject = await prisma.employeeFieldData.findMany({
                    where: {
                        value: user.id,
                        field: {
                            name: 'reportingManager'
                        }
                    },
                    select: {
                        userId: true,
                        value: true
                    }
                });

                userIds = managerObject.map((user) => {
                    return user.userId;
                });
            }

            const res = await Promise.all(
                userIds.map(async(userId)=> {
                    const userSummary = await getUserSummaryService({
                        query: {
                            startDate: input.data.query.startDate,
                            endDate: input.data.query.endDate
                        },
                        body: {
                            userId
                        }
                    });
                    const empDetails = await EmployeeHandler.getUserDataForOne({ userId });
                    return {
                        userId,
                        userSummary,
                        empDetails
                    };
                })
            );

            return res;
        } catch (error) {
            throw error;
        }
    },
    async (res, output) => {
        try {
            createHTTPResponse(res, StatusCodes.OK, 'Punch In Successful!', output);
        } catch (error) {
            throw error;
        }
    }
);
