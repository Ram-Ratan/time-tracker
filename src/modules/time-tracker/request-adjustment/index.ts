import { createHTTPResponse, logger } from '@talent-monk/utils';
import { createPrivateEndpointWithZod } from '@talent-monk/utils';
import { StatusCodes } from 'http-status-codes';
import { z } from 'zod';
import timePrisma from 'utils/prisma/time-tracker';
import prismaFactory from 'utils/prisma';
import { v4 } from 'uuid';
import { EmployeeHandler } from '@talent-monk/client-shared';



export const requestAdjustmentEndpoint = createPrivateEndpointWithZod(
    'REQUEST ADJUSTMENT',
    z.object({
        body: z.object({
            timeEntryId: z.string(),
            newLoginTime: z.string(),
            newLogoutTime: z.string(),
            reason: z.string().optional(),
        })
    }),
    z.any(),
    async (input) => {
        try {
            const timeEntry = await timePrisma.timeEntry.findUniqueOrThrow({
                where: {
                    id: input.data.body.timeEntryId
                }
            });

            const requestAdjustment = await timePrisma.requestAdjustment.create({
                data: {
                    timeEntryId: timeEntry.id,
                    updateLoginTime: input.data.body.newLoginTime,
                    updateLogoutTime: input.data.body.newLogoutTime,
                    reason: input.data.body.reason??'',
                }
            });

            const taskId = v4();

            const manager = await prismaFactory.get().employeeFieldData.findFirstOrThrow({
                where: {
                    userId: timeEntry.userId,
                    field: {
                        name: 'reportingManager'
                    }
                }
            });


            const task = await prismaFactory.get().userTasks.create({
                data: {
                    id: taskId,
                    employeeId: manager.value,
                    taskType: 'REDIRECT',
                    moduleId: '3757ffaf-d82c-413d-a63c-c3daec8fa72e',
                    sourceName: 'requestAdjustment',
                    sourceId: requestAdjustment.id,
                    status: 'Pending',
                    name: 'Request Adjustment',
                    url: `/request-adjustment/${taskId}/${requestAdjustment.id}`,
                    createdById: timeEntry.userId,
                    modifiedById: timeEntry.userId,
                }
            })

            logger.log.info(`Task created with ID: ${JSON.stringify(task)}`);
        } catch (error) {
            console.error('Error in request adjustment endpoint:', error);
            throw error;
        }
    },
    async (res, output) => {
        try {
            createHTTPResponse(res, StatusCodes.OK, 'request adjustemnt successfully!', output);
        } catch (error) {
            throw error;
        }
    }
);

export const getRequestAdjustmentEndpoint = createPrivateEndpointWithZod(
    'Get REQUEST ADJUSTMENT',
    z.object({
        params: z.object({
            id: z.string(),
        }),
    }),
    z.any(),
    async (input) => {
        try {

            const requestAdjustment = await timePrisma.requestAdjustment.findUniqueOrThrow({
                where: {
                    id: input.data.params.id
                }
            });

            const timeEntry = await timePrisma.timeEntry.findUniqueOrThrow({
                where: {
                    id: requestAdjustment.timeEntryId
                }
            });
            const empDetails = await EmployeeHandler.getUserDataForOne({ userId: timeEntry.userId });


            return {
                requestAdjustment,
                empDetails,
                timeEntry
            }
        } catch (error) {
            console.error('Error in request adjustment endpoint:', error);
            throw error;
        }
    },
    async (res, output) => {
        try {
            createHTTPResponse(res, StatusCodes.OK, 'Get adjustment successfully!', output);
        } catch (error) {
            throw error;
        }
    }
);

export const takeActionEndpoint = createPrivateEndpointWithZod(
    'Take Action on REQUEST ADJUSTMENT',
    z.object({
        body: z.object({
            id: z.string(),
            taskId: z.string(),
            action: z.enum(['APPROVE', 'REJECT']),
        }),
    }),
    z.any(),
    async (input) => {
        try {
            logger.log.info(`${JSON.stringify(input.data.body)}`);
            const requestAdjustment = await timePrisma.requestAdjustment.findUniqueOrThrow({
                where: {
                    id: input.data.body.id
                }
            });


            const task = await prismaFactory.get().userTasks.update({
                where: {
                    id: input.data.body.taskId
                },
                data: {
                    status: input.data.body.action === 'APPROVE' ? 'Approved' : 'Rejected'
                }
            })

            if(input.data.body.action === 'APPROVE') {
                await timePrisma.timeEntry.update({
                    where: {
                        id: requestAdjustment.timeEntryId
                    },
                    data: {
                        loginTime: requestAdjustment.updateLoginTime,
                        logoutTime: requestAdjustment.updateLogoutTime,
                    }
                })
            }

            return {
                task
            }
        } catch (error) {
            console.error('Error in request adjustment endpoint:', error);
            throw error;
        }
    },
    async (res, output) => {
        try {
            createHTTPResponse(res, StatusCodes.OK, 'Action taken successfully!', output);
        } catch (error) {
            throw error;
        }
    }
);