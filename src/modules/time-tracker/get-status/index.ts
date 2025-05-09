

import { createHTTPResponse } from '@talent-monk/utils';
import { createPrivateEndpointWithZod } from '@talent-monk/utils';
import { StatusCodes } from 'http-status-codes';
import { z } from 'zod';
import prismaFactory from 'utils/prisma';

type status = NOT_PUNCHED_IN | PUNCHED_IN | ON_BREAK | PUNCHED_OUT | LEAVE | NON_WORKING_DAY | HOLIDAY;


export const getStatusEndpoint = createPrivateEndpointWithZod(
    'GET STATUS',
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

            // check for working day from userSchedule table

            const todayDay = getDay(now);
            // conver today day 0 to 6 to string
            const todayDayString = [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
            ];
            const todayDay = todayDayString[todayDay];

            // check if today day in there in userSchedule or not
            // user schedule contains day of week and start time and end time

            const userSchedule = await prisma.userSchedule.findFirst({
                where: {
                    userId: user.id,
                    dayOfWeek: todayDay
                }
            });   

            if (!userSchedule) {
                // user is not working today
                user.status = 'NON_WORKING_DAY';
                return user;
            }

            // toDo: @Ram check for leave and holiday

            // check if user already punched in
            const timeEntry = await prisma.timeEntry.findFirst({
                where: {
                    userId: user.id,
                    startTime: {
                        gte: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
                        lt: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
                    }
                }
            });
            if (!timeEntry) {
                // user has not punched in yet
                user.status = 'NOT_PUNCHED_IN';
                return user;
            };
            user.status = 'PUNCHED_IN';
            // check if user is on break
            const breakEntry = await prisma.break.findFirst({
                where: {
                    timeEntryId: timeEntry.id,
                    endTime: null
                }
            });

            const allBreaks = await prisma.break.findMany({
                where: {
                    timeEntryId: timeEntry.id
                }
            });
            if (breakEntry) {
                // user is on break
                user.status = 'ON_BREAK';
                user.breaks = allBreaks;
            }
            if(timeEntry.endTime && !breakEntry) {
                // user has punched out
                user.status = 'PUNCHED_OUT';
            }

            user.timeEntry = timeEntry;

            return user;
        } catch (error) {
            throw error;
        }
    },
    async (res, output) => {
        try {
            createHTTPResponse(res, StatusCodes.OK, 'Get Status Successful!', output);
        } catch (error) {
            throw error;
        }
    }
);
