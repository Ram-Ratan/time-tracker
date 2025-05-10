import { z } from 'zod';
import { createPrivateEndpointWithZod, createHTTPResponse } from '@talent-monk/utils';
import { StatusCodes } from 'http-status-codes';
import timePrisma from 'utils/prisma/time-tracker';

export const getHolidayDetailsEndpoint = createPrivateEndpointWithZod(
  'GET HOLIDAY DETAILS',
  z.object({
    query: z.object({
      holidayId: z.string().uuid(), // expects a valid UUID
    })
  }), 
  z.object({
    id: z.string(),
    name: z.string(),
    date: z.string(),
    type: z.enum(['OPTIONAL', 'MANDATORY']),
    createdAt: z.string(),
  }),
  async ({ data }) => { 

    const holiday = await timePrisma.holiday.findUnique({
      where: { id: data.query.holidayId },
      select: {
        id: true,
        name: true,
        date: true,
        type: true,
        createdAt: true,
      },
    });

    if (!holiday) throw new Error('Holiday not found');

    return {
      ...holiday,
      date: holiday.date.toISOString(),
      createdAt: holiday.createdAt.toISOString(),
    };
  },
  async (res, output) => {
    createHTTPResponse(res, StatusCodes.OK, 'Holiday details fetched successfully', output);
  }
);
