import { z } from 'zod';
import { createPrivateEndpointWithZod } from '@talent-monk/utils';
import { createHTTPResponse } from '@talent-monk/utils';
import { StatusCodes } from 'http-status-codes';
import prismaFactory from 'utils/prisma';
import timePrisma from 'utils/prisma/time-tracker';
import { isManagerOfEmployee } from 'utils/checkManager';

const approveRejectLeaveSchema = z.object({
  body: z.object({
    leaveId: z.string().uuid(),
    action: z.enum(['APPROVE', 'REJECT']),
  }),
});

export const approveRejectLeaveEndpoint = createPrivateEndpointWithZod(
  'APPROVE/REJECT LEAVE',
  approveRejectLeaveSchema,
  z.object({
    success: z.boolean(),
    message: z.string(),
  }),
  async ({ data, userAuthId }) => {
    try {
      const prisma = prismaFactory.get();
      const { leaveId, action } = data.body;

      const leave = await timePrisma.leave.findUnique({
        where: { id: leaveId }
      });

      if (!leave) {
        throw new Error('Leave record not found');
      }
      
      if (leave.status !== 'PENDING') {
        throw new Error(`Leave request has already been ${leave.status.toLowerCase()}`);
      }

      const currentUser = await prisma.user.findUnique({
        where: { uid: userAuthId },
        select: { id: true },
      });

      if (!currentUser) {
        throw new Error('User not found');
      }

      // const isManager = await isManagerOfEmployee(leave.userId, currentUser.id);
      // if (!isManager) {
      //   throw new Error('Only the reporting manager can approve/reject this leave');
      // }

      // Execute in a transaction to ensure consistency
      return await timePrisma.$transaction(async (tx) => {
        // Update leave status
        const updatedLeave = await tx.leave.update({
          where: { id: leaveId },
          data: {
            status: action === 'APPROVE' ? 'APPROVED' : 'REJECTED',
          },
        });
        
        // Only update leave balance if the leave is approved
        if (action === 'APPROVE') {
          const userLeaveRecord = await tx.userLeaves.findUnique({
            where: { userId: leave.userId },
          });
          
          if (!userLeaveRecord) {
            throw new Error('User leave record not found');
          }
          
          const balanceKey = leave.type.toLowerCase() + 'Leaves';
          const currentBalance = userLeaveRecord[balanceKey] as Prisma.Decimal;
          const effectiveDays = leave.effectiveDays as Prisma.Decimal;

          if(currentBalance < effectiveDays) {
            throw new Error('Insufficient leave balance');
          }
          
          // Update user's leave balance
          await tx.userLeaves.update({
            where: { userId: leave.userId },
            data: {
              [balanceKey]: currentBalance.sub(effectiveDays),
            },
          });
        }
        
        return {
          success: true,
          message: `Leave ${action.toLowerCase()}d successfully`,
        };
      });
    } catch (error) {
      console.error('Error approving/rejecting leave:', error);
      throw new Error('Failed to approve/reject leave');
    }
  },
  async (res, output) => {
    createHTTPResponse(res, StatusCodes.OK, output.message, output);
  }
);

