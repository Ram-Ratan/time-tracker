import { z } from 'zod';
import { createPrivateEndpointWithZod, createHTTPResponse } from '@talent-monk/utils';
import { StatusCodes } from 'http-status-codes';
import timePrisma from 'utils/prisma/time-tracker';
import prismaFactory from 'utils/prisma';

export const getEmployeeLeaveHistoryEndpoint = createPrivateEndpointWithZod(
  'GET EMPLOYEE LEAVE HISTORY',
  z.object({
    query: z.object({
      employeeId: z.string().min(1, 'Employee ID is required').optional(),
    }),
  }),
  z.array(
    z.object({
      id: z.string(),
      type: z.string(),
      startDate: z.date(),
      endDate: z.date(),
      status: z.string(),
    })
  ),
  async ({ data, userAuthId }) => {
    let { employeeId } = data.query;
    const prisma = prismaFactory.get();

    if (!employeeId) {
      const currentUser = await prisma.user.findUnique({
        where: { uid: userAuthId },
        select: { id: true },
      });
      if (!currentUser) throw new Error('User not found');

      employeeId = currentUser.id;
    }
    else {
      // check is manager of employee
      const isManager = await isManagerOfEmployee(employeeId, currentUser.id);
      if (!isManager) {
        throw new Error('You are not authorized to view this user\'s leave data');
      }
    }

    // Fetch all leaves for the given employee
    const leaves = await timePrisma.leave.findMany({
      where: { userId: employeeId },
      select: {
        id: true,
        type: true,
        startDate: true,
        endDate: true,
        status: true,
      },
      orderBy: { startDate: 'desc' },
    });

    return leaves;
  },
  async (res, output) => {
    createHTTPResponse(res, StatusCodes.OK, 'Leave history fetched successfully', output);
  }
);
