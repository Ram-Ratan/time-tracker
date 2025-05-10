import { z } from 'zod';
import { createPrivateEndpointWithZod, createHTTPResponse } from '@talent-monk/utils';
import { StatusCodes } from 'http-status-codes';
import prismaFactory from 'utils/prisma';
import timePrisma from 'utils/prisma/time-tracker';

export const applyOptionalHolidayEndpoint = createPrivateEndpointWithZod(
  'APPLY OPTIONAL HOLIDAY',
  z.object({
    body: z.object({
      holidayId: z.string().uuid(),
    }),
  }),
  z.object({
    success: z.boolean(),
    message: z.string(),
  }),
  async ({ data, userAuthId }) => {
    const prisma = prismaFactory.get();

    try {
      const user = await prisma.user.findUnique({
        where: { uid: userAuthId },
        select: { id: true },
      });
      if (!user) throw new Error('User not found');

      const userId = user.id;

      const userCategory = await timePrisma.userCategoryLinkUp.findUnique({
        where: { userId },
        include: { category: { include: { holidays: true } } },
      });

      if (!userCategory) throw new Error('User category not found');

      const optionalHoliday = userCategory.category.holidays.find(
        (h) => h.id === data.body.holidayId && h.type === 'OPTIONAL'
      );

      if (!optionalHoliday) {
        throw new Error('Holiday is not optional or not in your category');
      }

      const existing = await timePrisma.userHoliday.findFirst({
        where: {
          userId,
          holidayId: data.body.holidayId,
        },
      });

      if (existing) throw new Error('You have already applied for this holiday');

      // check number of optional holidays taken by user

      const userHolidayCount = await timePrisma.userHoliday.count({
        where: {
          userId,
        },
      });

      if (userHolidayCount >= userCategory.category.optionalHolidays) {
        throw new Error('You have reached the maximum number of optional holidays');
      }

      await timePrisma.userHoliday.create({
        data: {
          userId,
          holidayId: data.body.holidayId,
        },
      });

      return {
        success: true,
        message: 'Optional holiday applied successfully',
      };
    } catch (error) {
      console.error('Error applying optional holiday:', error);
      throw new Error('error applying optional holiday');
    }
  },
  async (res, output) => {
    createHTTPResponse(res, StatusCodes.OK, output.message, output);
  }
);
