//get all the holidays for a category

import { z } from 'zod';
import { createHTTPResponse, createPrivateEndpointWithZod } from '@talent-monk/utils';
import { StatusCodes } from 'http-status-codes';
import timePrisma from 'utils/prisma/time-tracker';

export const getHolidaysAndLeavesForCategoriesEndpoint = createPrivateEndpointWithZod(
  'GET HOLIDAYS AND LEAVES FOR CATEGORIES',
  z.object({
    query: z.object({
      categoryId: z.string().uuid(),
    })
  }),
  z.any(),
  async ({ data }) => {
    try {
      const category = await timePrisma.userCategory.findUnique({
        where: {
          id: data.query.categoryId
        },
        include: {
          holidays: true,
          leavePolicy: true
        }
      });
      if (!category) throw new Error('Category not found');
      const holidays = category.holidays;
      const leavePolicy = category.leavePolicy;
      return {
        holidays,
        leavePolicy
      };
    } catch (error) {
      console.log(error);
      throw new Error('Error fetching holidays and leaves');
    }
  },
  async (res, output) => {
    createHTTPResponse(res, StatusCodes.OK, 'Successfully fetched holidays and leaves', output);
  }
);
