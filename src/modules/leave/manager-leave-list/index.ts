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
            const employeesUnderMe = await prisma.employeeFieldData.findMany({
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

            const empIds = employeesUnderMe.map((emp: { userId: string }) => emp.userId);

            const leaves = await prisma.leave.findMany({
                where: {
                    uid: {
                        in: empIds
                    }
                }
            })
        } catch (error) {
            console.error('Leave policy upsert error:', error);
            throw new Error('Failed to upsert leave policy');
        }
    },
    async (res, output) => {
        createHTTPResponse(res, StatusCodes.OK, output.message, output);
    }
);
