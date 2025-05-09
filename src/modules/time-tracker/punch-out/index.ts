

import { createHTTPResponse } from '@talent-monk/utils';
import { createPrivateEndpointWithZod } from '@talent-monk/utils';
import { StatusCodes } from 'http-status-codes';
import { z } from 'zod';
import prismaFactory from 'utils/prisma';

export const punchOutEndpoint = createPrivateEndpointWithZod(
    'PUNCH OUT',
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

            const todayDay = getDay(now);
            // conver today day 0 to 6 to string
            const todayDayString = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const todayDay = todayDayString[todayDay];
            // check if today day in there in userSchedule or not

            const userSchedule = await prisma.userSchedule.findFirst({
                where: {
                    userId: user.id,
                    dayOfWeek: todayDay
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
                throw new Error('You can only punch out between your working hours!');
            }
            // find todays time entry

            const timeEntry = await prisma.timeEntry.findFirst({
                where: {
                    userId: user.id,
                    date: {
                        gte: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
                        lt: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
                    }
                }
            });
            if (!timeEntry) {
                throw new Error('You have not punched in today!');
            }

            // check if user already punched out
            if (timeEntry.endTime) {
                throw new Error('You have already punched out today!');
            }

            // check if user is on break

            const breakEntry = await prisma.break.findFirst({
                where: {
                    timeEntryId: timeEntry.id,
                    breakEnd: null
                }
            });
            if (breakEntry) {
                throw new Error('You are on break! Please end your break before punching out.');
            }
            // update time entry with end time
            await prisma.timeEntry.update({
                where: {
                    id: timeEntry.id
                },
                data: {
                    endTime: now
                }
            });
        } catch (error) {
            throw error;
        }
    },
    async (res, output) => {
        try {
            createHTTPResponse(res, StatusCodes.OK, 'Punch Out Successful!', output);
        } catch (error) {
            throw error;
        }
    }
);
