import { z } from 'zod';
import { createPrivateEndpointWithZod, createHTTPResponse } from '@talent-monk/utils';
import { StatusCodes } from 'http-status-codes';
import prismaFactory from 'utils/prisma';
import { isManagerOfEmployee } from 'utils/checkManager';
import timePrisma from 'utils/prisma/time-tracker';

export const getAvailableLeavesEndpoint = createPrivateEndpointWithZod(
  'GET AVAILABLE LEAVES',
  z.object({
    query: z.object({
      employeeId: z.string().optional(),
    }),
  }),
  z.object({
    sickLeaves: z.string(),
    vacationLeaves: z.string(),
    parentalLeaves: z.string(),
    maternityLeaves: z.string(),
  }),
  async ({ data, userAuthId }) => {
    const prisma = prismaFactory.get();
    let userId = data.query.employeeId;

    if (!userId) {
      const currentUser = await prisma.user.findUnique({
        where: { uid: userAuthId },
        select: { id: true }
      });
      if (!currentUser) throw new Error('User not found');

      userId = currentUser.id;
    }
    else {
      const currentUser = await prisma.user.findUnique({
        where: { uid: userAuthId },
        select: { id: true },
      });
      if (!currentUser) throw new Error('User not found');

      if (userId !== currentUser.id && !await isManagerOfEmployee(userId, currentUser.id)) {
        throw new Error('You are not authorized to view this user\'s leave data');
      }
    }

    const userLeaves = await timePrisma.userLeaves.findUnique({
      where: { userId },
    });

    if (!userLeaves) {
      throw new Error('Leave data not found for this user');
    }

    return {
      sickLeaves: userLeaves.sickLeaves.toString(),
      vacationLeaves: userLeaves.vacationLeaves.toString(),
      parentalLeaves: userLeaves.parentalLeaves.toString(),
      maternityLeaves: userLeaves.maternityLeaves.toString(),
    };
  },
  async (res, output) => {
    createHTTPResponse(res, StatusCodes.OK, 'Available leaves fetched successfully', output);
  }
);
