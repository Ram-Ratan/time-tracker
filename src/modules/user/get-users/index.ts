import { createHTTPResponse } from '@talent-monk/utils';
import { createPrivateEndpointWithZod } from '@talent-monk/utils';
import { z } from 'zod';
import { StatusCodes } from 'http-status-codes';
import prismaFactory from 'utils/prisma';
import { EmployeeHandler } from '@talent-monk/client-shared';

export const getUsersUnderManagerEndpoint = createPrivateEndpointWithZod(
    'GET USERS UNDER MANAGER',
    z.object({
    }),
    z.array(z.object({
        userId: z.string().uuid(),
        userName: z.string().nullable()
    })),
    async (input) => {
        const prisma = prismaFactory.get();

        const currentUser = await prisma.user.findUnique({
            where: {
                uid: input.userAuthId
            },
            select: {
                id: true
            }
        })

        if (!currentUser) {
            throw new Error('User not found');
        }

        // Find all entries where this manager is listed as reporting manager
        const employees = await prisma.employeeFieldData.findMany({
            where: {
                field: { name: 'reportingManager' },
                value: currentUser.id
            },
            select: {
                userId: true
            }
        });

        const employeesDetails = await EmployeeHandler.getUserDataForMultiple({
            userIds: employees.map(emp => emp.userId)
        })

        return employees.map(emp => ({
            userId: emp.userId,
            userName: employeesDetails.find(user => user.userId === emp.userId)?.fullName?.value ?? null
        }));
    },
    async (res, output) => {
        createHTTPResponse(res, StatusCodes.OK, 'Fetched employees under manager', output);
    }
);
