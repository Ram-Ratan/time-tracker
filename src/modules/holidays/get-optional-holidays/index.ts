import { z } from 'zod';
import { createPrivateEndpointWithZod, createHTTPResponse } from '@talent-monk/utils';
import { StatusCodes } from 'http-status-codes';
import { startOfYear, endOfYear } from 'date-fns';
import timePrisma from 'utils/prisma/time-tracker';
import prismaFactory from 'utils/prisma';

export const getOptionalHolidaysForUserThisYearEndpoint = createPrivateEndpointWithZod(
  'GET OPTIONAL HOLIDAYS FOR USER THIS YEAR',
  z.object({}),
  z.array(z.object({
    id: z.string(),
    name: z.string(),
    date: z.string(),
  })),
  async ({ userAuthId }) => {

    const prisma = prismaFactory.get();
    const user = await prisma.user.findUnique({
      where: { uid: userAuthId },
      select: { id: true },
    });
    if (!user) throw new Error('User not found');

    const userCategoryLink = await timePrisma.userCategoryLinkUp.findUnique({
      where: { userId: user.id },
      select: { categoryId: true },
    });
    if (!userCategoryLink) throw new Error('User category not found');

    const holidays = await timePrisma.holiday.findMany({
      where: {
        type: 'OPTIONAL',
        date: {
          gte: startOfYear(new Date()),
          lte: endOfYear(new Date()),
        },
        userCategories: {
          some: {
            id: userCategoryLink.categoryId,
          },
        },
      },
      select: {
        id: true,
        name: true,
        date: true,
      },
    });

    return holidays.map(h => ({
      id: h.id,
      name: h.name,
      date: h.date.toISOString(),
    }));
  },
  async (res, output) => {
    createHTTPResponse(res, StatusCodes.OK, 'Optional holidays for user fetched', output);
  }
);
