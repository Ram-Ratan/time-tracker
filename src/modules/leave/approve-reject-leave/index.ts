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

      const currentUser = await prisma.user.findUnique({
        where: { uid: userAuthId },
        select: { id: true },
      });

      if (!currentUser) {
        throw new Error('User not found');
      }

      const isManager = await isManagerOfEmployee(leave.userId, currentUser.id);
      if (!isManager) {
        throw new Error('Only the reporting manager can approve/reject this leave');
      }

      const updatedLeave = await timePrisma.leave.update({
        where: { id: leaveId },
        data: {
          status: action === 'APPROVE' ? 'APPROVED' : 'REJECTED',
        },
      });

      return {
        success: true,
        message: `Leave ${action.toLowerCase()}d successfully`,
      };
    } catch (error) {
      console.error('Error approving/rejecting leave:', error);
      throw new Error('Failed to approve/reject leave');
    }
  },
  async (res, output) => {
    createHTTPResponse(res, StatusCodes.OK, output.message, output);
  }
);
