import { createHTTPResponse } from '@talent-monk/utils';
import { createPrivateEndpointWithZod } from '@talent-monk/utils';
import { StatusCodes } from 'http-status-codes';
import { z } from 'zod';
import prismaFactory from 'utils/prisma';
import timePrisma from 'utils/prisma/time-tracker';
import { getDay } from 'date-fns';
import { EmployeeHandler } from '@talent-monk/client-shared';
import { convertDayNumberToString } from 'utils/time-tracker';

type status =
    | 'NOT_PUNCHED_IN'
    | 'PUNCHED_IN'
    | 'ON_BREAK'
    | 'PUNCHED_OUT'
    | 'LEAVE'
    | 'NON_WORKING_DAY'
    | 'HOLIDAY';

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

            const employeeData = await EmployeeHandler.getUserDataForOne({ userId: user.id });
            let status: status = 'NOT_PUNCHED_IN';

            if (!userSchedule) {
                // user is not working today
                status = 'NON_WORKING_DAY';
                return {
                    ...user,
                    status,
                    employeeData
                };
            }

            // toDo: @Ram check for leave and holiday

            // check if user already punched in
            const timeEntry = await timePrisma.timeEntry.findFirst({
                where: {
                    userId: user.id,
                    loginTime: {
                        gte: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
                        lt: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
                    }
                }
            });
            if (!timeEntry) {
                // user has not punched in yet
                status = 'NOT_PUNCHED_IN';
                return {
                    ...user,
                    status,
                    employeeData
                };
            }
            status = 'PUNCHED_IN';
            // check if user is on break
            const breakEntry = await timePrisma.break.findFirst({
                where: {
                    timeEntryId: timeEntry.id,
                    breakEnd: null
                }
            });

            const allBreaks = await timePrisma.break.findMany({
                where: {
                    timeEntryId: timeEntry.id
                }
            });
            if (breakEntry) {
                // user is on break
                status = 'ON_BREAK';
            }
            if (timeEntry.logoutTime && !breakEntry) {
                // user has punched out
                status = 'PUNCHED_OUT';
            }

            return {
                ...user,
                status,
                breaks: allBreaks,
                timeEntry,
                employeeData
            };
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
