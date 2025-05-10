import { z } from 'zod';
import { createPrivateEndpointWithZod } from '@talent-monk/utils';
import { createHTTPResponse } from '@talent-monk/utils';
import { StatusCodes } from 'http-status-codes';
import timePrisma from 'utils/prisma/time-tracker';
import { EmployeeHandler } from '@talent-monk/client-shared';
import prismaFactory from 'utils/prisma';

export const managerLeaveListEndpoint = createPrivateEndpointWithZod(
    'MANAGER LEAVE LIST',
    z.object({
    }),
    z.any(),
    async (input) => {
        try {
            const prisma = prismaFactory.get();
            const currentUser = await prisma.user.findUnique({
                where: {
                    uid: input.userAuthId
                },
                select: {
                    id: true
                }
            })
            const employees = await prisma.employeeFieldData.findMany({
                where: {
                    value: currentUser?.id,
                    field: {
                        name: 'reportingManager'
                    }
                },
                select: {
                    userId: true
                }
            })

            const empIds = employees.map((emp) => emp.userId);

            const leaves = await timePrisma.leave.findMany({
                where: {
                    userId: { in: empIds },
                    OR: [
                        { endDate: { gte: new Date() } },
                        { startDate: { lte: new Date() }, endDate: { gte: new Date() } }
                    ]
                },
                orderBy: { startDate: 'asc' }
            });


            const usersOnLeave = leaves.map((leave) => leave.userId);

            const employeeOnLeave = await EmployeeHandler.getUserDataForMultiple({
                userIds: usersOnLeave
            })

            const leaveList = employeeOnLeave.map((emp) => {
                const leave = leaves.find((leave) => leave.userId === emp.userId);
                return {
                    ...emp,
                    leave
                }
            })

            return leaveList;

        } catch (error) {
            console.error('Leave policy upsert error:', error);
            throw new Error('Failed to upsert leave policy');
        }
    },
    async (res, output) => {
        createHTTPResponse(res, StatusCodes.OK, output.message, output);
    }
);
