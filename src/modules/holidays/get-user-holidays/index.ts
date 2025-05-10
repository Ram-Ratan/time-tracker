import { z } from 'zod';
import { createPrivateEndpointWithZod, createHTTPResponse } from '@talent-monk/utils';
import { StatusCodes } from 'http-status-codes';
import prismaFactory from 'utils/prisma';
import timePrisma from 'utils/prisma/time-tracker';

export const getAllHolidaysForUserEndpoint = createPrivateEndpointWithZod(
  'GET ALL HOLIDAYS FOR USER CATEGORY',
  z.object({}),
  z.array(z.object({
    id: z.string(),
    name: z.string(),
    date: z.string(),
    type: z.enum(['OPTIONAL', 'MANDATORY']),
  })),
  async ({ userAuthId }) => {
    try {
      const prisma = prismaFactory.get();

      const user = await prisma.user.findUnique({
        where: { uid: userAuthId },
        select: { id: true },
      });
      if (!user) throw new Error('User not found');

      let userCategoryLink;
      try {
        userCategoryLink = await timePrisma.userCategoryLinkUp.findUnique({
          where: { userId: user.id },
          select: { categoryId: true },
        });

        if (!userCategoryLink){
          const defaultCategory = await timePrisma.userCategory.findFirst({
            where: {
              name: 'DEFAULT'
            }
          })
          if (!defaultCategory) throw new Error('Default category not found');  
          userCategoryLink = await timePrisma.userCategoryLinkUp.create({
            data: {
              userId: user.id,
              categoryId: defaultCategory.id
            }
          })
        }
      } catch (error) {
        throw new Error('User category not found');
      }
      

      const holidays = await timePrisma.holiday.findMany({
        where: {
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
          type: true,
        },
        orderBy: {
          date: 'asc',
        },
      });

      return holidays.map(h => ({
        id: h.id,
        name: h.name,
        date: h.date.toISOString(),
        type: h.type,
      }));
    } catch (error) {
      throw error;
    }
  },
  async (res, output) => {
    createHTTPResponse(res, StatusCodes.OK, 'All holidays fetched for user category', output);
  }
);
