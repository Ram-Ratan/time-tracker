import { z } from 'zod';
import { createHTTPResponse, createPublicEndpointWithZod } from '@talent-monk/utils';
import { StatusCodes } from 'http-status-codes';
import timePrisma from 'utils/prisma/time-tracker';

export const getUserCategoriesEndpoint = createPublicEndpointWithZod(
  'GET USER CATEGORIES',
  z.object({}),
  z.array(
    z.object({
      id: z.string().uuid(),
      name: z.string(),
      createdAt: z.date(), 
    })
  ),
  async () => {
    try {
      const userCategories = await timePrisma.userCategory.findMany({
        select: {
          id: true,
          name: true,
          createdAt: true,
        },
      });

      return userCategories;
    } catch (error) {
      throw new Error('Error fetching user categories');
    }
  },
  async (res, output) => {
    createHTTPResponse(res, StatusCodes.OK, 'Successfully fetched user categories', output);
  }
);
