//cancel leave api

import { z } from 'zod';
import { createPrivateEndpointWithZod } from '@talent-monk/utils';
import { createHTTPResponse } from '@talent-monk/utils';
import { StatusCodes } from 'http-status-codes';
import prismaFactory from 'utils/prisma';
import timePrisma from 'utils/prisma/time-tracker';
import { isManagerOfEmployee } from 'utils/checkManager';

const cancelLeaveSchema = z.object({
  body: z.object({
    leaveId: z.string().uuid(),
  }),
});

export const cancelLeaveEndpoint = createPrivateEndpointWithZod(
  'CANCEL LEAVE',
  cancelLeaveSchema,
  z.object({
    success: z.boolean(),
    message: z.string()
  }),
  async ({ data, userAuthId }) => {
    try {
      const prisma = prismaFactory.get();
      const { leaveId } = data.body;

      const currentUser = await prisma.user.findUnique({
        where: { uid: userAuthId },
        select: { id: true },
      });

      if (!currentUser) {
        throw new Error('User not found');
      }

      const leave = await timePrisma.leave.findUnique({
        where: { id: leaveId }
      });

      if (!leave) {
        throw new Error('Leave record not found');
      }

      if (leave.userId !== currentUser.id) {
        throw new Error('You are not authorized to cancel this leave');
      }

      if (leave.status === 'PENDING') {
        await timePrisma.leave.delete({
          where: { id: leaveId }
        })
      }
      else if (leave.status === 'APPROVED') {
        const userLeaveRecord = await timePrisma.userLeaves.findUnique({
          where: { userId: leave.userId },
        });

        if (!userLeaveRecord) {
          throw new Error('User leave record not found');
        }

        const balanceKey = leave.type.toLowerCase() + 'Leaves';

        await timePrisma.$transaction(async (tx) => {
          await tx.userLeaves.update({
            where: { userId: leave.userId },
            data: {
              [balanceKey]: userLeaveRecord[balanceKey].add(leave.effectiveDays),
            },
          });

          await tx.leave.delete({
            where: { id: leaveId }
          })
        })

      }
      return {
        success: true,
        message: 'leave cancelled successfully'
      }
    } catch (error) {
      console.error('Error canceling leave:', error);
      throw new Error('Failed to cancel leave');
    }
  },
  async (res, output) => {
    createHTTPResponse(res, StatusCodes.OK, output.message, output);
  }
);

