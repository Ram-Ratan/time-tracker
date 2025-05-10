import { z } from 'zod';
import { createPrivateEndpointWithZod, createHTTPResponse } from '@talent-monk/utils';
import { StatusCodes } from 'http-status-codes';
import timePrisma from 'utils/prisma/time-tracker';

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
  async ({ data }) => {
    let { employeeId } = data.query;
    const prisma = prismaFactory.get();

    if (!employeeId) {
      const currentUser = await prisma.user.findUnique({
        where: { uid: data.userAuthId },
        select: { id: true },
      });
      if (!currentUser) throw new Error('User not found');

      employeeId = currentUser.id;
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
