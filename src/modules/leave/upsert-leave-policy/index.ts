import { z } from 'zod';
import { createPrivateEndpointWithZod } from '@talent-monk/utils';
import { createHTTPResponse } from '@talent-monk/utils';
import { StatusCodes } from 'http-status-codes';
import timePrisma from 'utils/prisma/time-tracker';

export const upsertLeavePolicyEndpoint = createPrivateEndpointWithZod(
  'UPSERT LEAVE POLICY',
  z.object({
    body: z.object({
      categoryId: z.string().uuid(),
      sickLeaves: z.number().nonnegative().optional(),
      vacationLeaves: z.number().nonnegative().optional(),
      parentalLeaves: z.number().nonnegative().optional(),
      maternityLeaves: z.number().nonnegative().optional(),
    })
  }),
  z.object({
    success: z.boolean(),
    message: z.string(),
    id: z.string().uuid()
  }),
  async (input) => {
    const {
      categoryId,
      sickLeaves = 0,
      vacationLeaves = 0,
      parentalLeaves = 0,
      maternityLeaves = 0,
    } = input.data.body;

    try {
      const leavePolicy = await timePrisma.leavePolicy.upsert({
        where: { categoryId },
        update: {
          sickLeaves,
          vacationLeaves,
          parentalLeaves,
          maternityLeaves,
        },
        create: {
          categoryId,
          sickLeaves,
          vacationLeaves,
          parentalLeaves,
          maternityLeaves,
        },
      });

      return {
        success: true,
        message: 'Leave policy upserted successfully',
        id: leavePolicy.id,
      };
    } catch (error) {
      console.error('Leave policy upsert error:', error);
      throw new Error('Failed to upsert leave policy');
    }
  },
  async (res, output) => {
    createHTTPResponse(res, StatusCodes.OK, output.message, output);
  }
);
