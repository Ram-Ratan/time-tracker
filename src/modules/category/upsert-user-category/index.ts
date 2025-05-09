import { z } from 'zod';
import { createHTTPResponse } from '@talent-monk/utils';
import { createPrivateEndpointWithZod } from '@talent-monk/utils';
import { StatusCodes } from 'http-status-codes';
import timePrisma from 'utils/prisma/time-tracker';

export const upsertUserCategoryEndpoint = createPrivateEndpointWithZod(
  'UPSERT USER CATEGORY',
  z.object({
    body: z.object({
      id: z.string().uuid().optional(), 
      name: z.string().optional(),    
    }).refine(
      (data) => {
        if (!data.id && !data.name) return false;
        return true;
      },
      { message: 'Name is required if id is not provided' }
    )
  }),
  z.object({
    success: z.boolean(),
    message: z.string(),
    id: z.string().uuid()
  }),
  async (input) => {
    const { id, name } = input.data.body;

    let userCategory;

    if (id) {
      userCategory = await timePrisma.userCategory.update({
        where: { id },
        data: {
          ...(name && { name })
        }
      });
    } else {
      userCategory = await timePrisma.userCategory.create({
        data: { name: name! }
      });
    }

    return {
      success: true,
      message: id ? 'User category updated successfully' : 'User category created successfully',
      id: userCategory.id
    };
  },
  async (res, output) => {
    createHTTPResponse(res, StatusCodes.OK, output.message, output);
  }
);
