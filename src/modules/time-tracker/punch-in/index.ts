

import { createHTTPResponse } from '@talent-monk/utils';
import { createPrivateEndpointWithZod } from '@talent-monk/utils';
import { StatusCodes } from 'http-status-codes';
import { z } from 'zod';
import prismaFactory from 'utils/prisma';
import timePrisma from 'utils/prisma/time-tracker';
import { getDay } from 'date-fns';
import { convertDayNumberToString } from 'utils/time-tracker';

export const punchInEndpoint = createPrivateEndpointWithZod(
    'PUNCH IN',
    z.any(),
    z.any(),
    async (input) => {
        try {
            const prisma = prismaFactory.get();

            const user = await prisma.user.findUniqueOrThrow({
                where: {
                    uid: input.userAuthId
                }
            });

            const now = new Date();

            const todayDayInNum = getDay(now);
            // conver today day 0 to 6 to string
            const todayDay = convertDayNumberToString(todayDayInNum);

            // check if today day in there in userSchedule or not
            // user schedule contains day of week and start time and end time

            const userSchedule = await timePrisma.userSchedule.findFirst({
                where: {
                    userId: user.id,
                    workingDay: todayDay
                }
            });     

            if (!userSchedule) {
                throw new Error('Today is not a working day for you!');
            }

            // parse and build work time range give flexibility of two hours
            const startTime = new Date(userSchedule.startTime);
            const endTime = new Date(userSchedule.endTime);
            const startTimeRange = new Date(startTime.getTime() - 2 * 60 * 60 * 1000);
            const endTimeRange = new Date(endTime.getTime() + 2 * 60 * 60 * 1000);
            // check if now is in the range of start time and end time
            if (now < startTimeRange || now > endTimeRange) {
                throw new Error('You can only punch in between your working hours!');
            }

            // toDo: @Ram check for leave and holiday

            // check if user already punched in

            const timeEntry = await timePrisma.timeEntry.findFirst({
                where: {
                    userId: user.id,
                    date: {
                        gte: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
                        lt: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
                    }
                }
            });

            if (timeEntry) {
                throw new Error('You have already punched in today!');
            }
            // create time entry

            await timePrisma.timeEntry.create({
                data: {
                    userId: user.id,
                    date: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
                    loginTime: now
                }
            });
        } catch (error) {
            throw error;
        }
    },
    async (res, output) => {
        try {
            createHTTPResponse(res, StatusCodes.OK, 'Punch In Successful!', output);
        } catch (error) {
            throw error;
        }
    }
);
