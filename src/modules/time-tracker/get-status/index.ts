import { createHTTPResponse, logger } from '@talent-monk/utils';
import { createPrivateEndpointWithZod } from '@talent-monk/utils';
import { StatusCodes } from 'http-status-codes';
import { date, z } from 'zod';
import prismaFactory from 'utils/prisma';
import timePrisma from 'utils/prisma/time-tracker';
import { getDay } from 'date-fns';
import { EmployeeHandler } from '@talent-monk/client-shared';
import { convertDayNumberToString } from 'utils/time-tracker';
import { UserSchedule } from '../../../generated/prisma';
// import openai from 'utils/openAi';

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
    z.object({
        query: z.object({
            date: z
                .string()
                .transform((st) => new Date(st))
                .optional()
        })
    }),
    z.any(),
    async (input) => {
        try {
            const prisma = prismaFactory.get();

            const user = await prisma.user.findUniqueOrThrow({
                where: {
                    uid: input.userAuthId
                }
            });

            const now = input.data.query.date ? new Date(input.data.query.date) : new Date();

            // check for working day from userSchedule table

            const todayDayInNum = getDay(now);
            // conver today day 0 to 6 to string
            const todayDay = convertDayNumberToString(todayDayInNum);
            logger.log.info(`todayDay: ${todayDay}`);

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

            logger.log.info(`userSchedule: ${JSON.stringify(userSchedule)}`);

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

            let streak = await timePrisma.userStreak.findUnique({
                where: {
                    userId: user.id
                }
            });
            if (!timeEntry) {
                // user has not punched in yet
                status = 'NOT_PUNCHED_IN';

                logger.log.info(`streak: ${JSON.stringify(streak)}`);

                if (streak) {
                    const lastLoginDate = new Date(streak.lastLoginDate);
                    // from last login date to till today check is there any valid working day??
                    // loop through the last login date to today not i= 0 to 7
                    let isValid = true;
                    logger.log.info(`lastLoginDate: ${lastLoginDate}`);

                    const allLeave = await getAllLeave(lastLoginDate, now, user.id);
                    logger.log.info(`allLeave: ${JSON.stringify(allLeave)}`);
                    const allLeaveDates = allLeave.map((leave) => {
                        const startDate = new Date(leave.startDate);
                        const endDate = new Date(leave.endDate);
                        const dates = [];
                        for (
                            let date = startDate;
                            date <= endDate;
                            date.setDate(date.getDate() + 1)
                        ) {
                            dates.push(new Date(date));
                        }
                        return dates;
                    });
                    const allLeaveDatesFlat = allLeaveDates.flat();
                    const allLeaveDatesSet = new Set(
                        allLeaveDatesFlat.map((date) => date.toDateString())
                    );
                    const allLeaveDatesSetString = Array.from(allLeaveDatesSet).map(
                        (date) => new Date(date)
                    );
                    logger.log.info(
                        `allLeaveDatesSetString: ${JSON.stringify(allLeaveDatesSetString)}`
                    );
                    const allHoliday = await getAllHoliday(lastLoginDate, user.id);
                    const allHolidayDates = allHoliday.map((holiday) => {
                        const startDate = new Date(holiday.startDate);
                        const endDate = new Date(holiday.endDate);
                        const dates = [];
                        for (
                            let date = startDate;
                            date <= endDate;
                            date.setDate(date.getDate() + 1)
                        ) {
                            dates.push(new Date(date));
                        }
                        return dates;
                    });
                    const allHolidayDatesFlat = allHolidayDates.flat();
                    const allHolidayDatesSet = new Set(
                        allHolidayDatesFlat.map((date) => date.toDateString())
                    );
                    const allHolidayDatesSetString = Array.from(allHolidayDatesSet).map(
                        (date) => new Date(date)
                    );
                    logger.log.info(
                        `allHolidayDatesSetString: ${JSON.stringify(allHolidayDatesSetString)}`
                    );

                    for (let date = lastLoginDate; date <= now; date.setDate(date.getDate() + 1)) {
                        isValid =
                            allLeaveDatesSetString.some(
                                (leaveDate) => leaveDate.toDateString() === date.toDateString()
                            ) ||
                            allHolidayDatesSetString.some(
                                (holidayDate) => holidayDate.toDateString() === date.toDateString()
                            );
                        if (isValid) {
                            continue;
                        }
                        if (isValidWorkingDay(date, userSchedule)) {
                            isValid = false;
                            break;
                        }
                    }
                    logger.log.info(`isValid: ${isValid}`);

                    if (isValid) {
                        if(streak.currentStreak >= 10) {
                            streak = await timePrisma.userStreak.update({
                                where: { userId: user.id },
                                data: {
                                    currentStreak: 1,
                                    lastLoginDate: now
                                }
                            });
                            await prisma.walletEmployee.create({
                                    data: {
                                        userId: user.id,
                                        walletId: '3069f1af-253a-4cd8-883c-c9ea67b3320d',
                                        points:10,
                                        expiryDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 30),
                                        lapsed: 0,
                                        createdById: user.id,
                                        modifiedById: user.id,
                                        status: '5bd66c2e-8c73-4927-9797-2cf6fe2affb2',
                                        comments: 'Streak reward',
                                    }
                                });
                        }
                        streak = await timePrisma.userStreak.update({
                            where: { userId: user.id },
                            data: {
                                currentStreak: streak.streakCount + 1,
                                lastLoginDate: now
                            }
                        });
                    } else {
                        streak = await timePrisma.userStreak.update({
                            where: { userId: user.id },
                            data: {
                                currentStreak: 0,
                                lastLoginDate: now
                            }
                        });
                    }
                } else {
                    try {
                        streak = await timePrisma.userStreak.create({
                            data: {
                                userId: user.id,
                                currentStreak: 1,
                                lastLoginDate: now
                            }
                        });
                    } catch (error) {
                        logger.log.error(`Error creating streak: ${error}`);
                    }
                }

                return {
                    ...user,
                    status,
                    employeeData,
                    streak
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

            logger.log.info(`breakEntry: ${JSON.stringify(breakEntry)}`);

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

            const punchIn = new Date(timeEntry.loginTime);
            const punchOut = timeEntry.logoutTime ? new Date(timeEntry.logoutTime) : new Date();
            const workDurationMinutes = (punchOut.getTime() - punchIn.getTime()) / (1000 * 60);
            logger.log.info(`workDurationMinutes: ${workDurationMinutes}`);
            const burnOutRisk = calculateBurnoutRisk(allBreaks, workDurationMinutes);
            logger.log.info(`burnOutRisk: ${burnOutRisk}`);

            // const feedback = await generateFeedback(timeEntry, allBreaks);
            const feedbackOptions = [
                'Great job taking regular breaks!',
                'Consider taking more frequent breaks to stay productive.',
                'Your work rhythm looks balanced today.',
                'Remember to stretch and move around during your breaks.',
                "You're maintaining a healthy work pattern."
            ];
            const feedback = feedbackOptions[Math.floor(Math.random() * feedbackOptions.length)];
            logger.log.info(`feedback: ${JSON.stringify(feedback)}`);

            return {
                ...user,
                status,
                breaks: allBreaks,
                timeEntry,
                employeeData,
                burnOutRisk,
                streak,
                feedback
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

const isValidWorkingDay = (date: Date, userSchedule: UserSchedule) => {
    const day = getDay(date);
    const dayString = convertDayNumberToString(day);
    if (userSchedule.workingDay === dayString) {
        return true;
    }
    return false;
};

const getAllHoliday = async (date: Date, userId: string) => {
    try {
        const holidays = await timePrisma.userHoliday.findMany({
            where: {
                userId: userId,
                holiday: {
                    date: {
                        gte: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
                        lte: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
                    }
                }
            }
        });
        return holidays;
    } catch (error) {
        logger.log.error(`Error in allHoliday: ${error}`);
    }
};

const getAllLeave = async (startDate: Date, endDate: Date, userId: string) => {
    try {
        const leave = await timePrisma.leave.findMany({
            where: {
                userId: userId,
                startDate: {
                    gte: startDate
                },
                endDate: {
                    lte: endDate
                }
            }
        });
        return leave;
    } catch (error) {
        logger.log.error(`Error in allLeave: ${error}`);
    }
};

function calculateBurnoutRisk(
    breaks: { breakStart: Date; breakEnd: Date | null }[],
    workDurationMinutes: number
): 'LOW' | 'MODERATE' | 'HIGH' {
    const totalBreakMinutes = breaks.reduce((acc, brk) => {
        if (!brk.breakEnd) return acc; // Ignore incomplete breaks
        const diff =
            (new Date(brk.breakEnd).getTime() - new Date(brk.breakStart).getTime()) / (1000 * 60);
        return acc + diff;
    }, 0);

    // Heuristics
    if (breaks.length === 0 || totalBreakMinutes < 15) {
        return 'HIGH'; // No or very little break
    }

    if (totalBreakMinutes < 30 && workDurationMinutes >= 480) {
        return 'MODERATE'; // Too little break for full workday
    }

    if (totalBreakMinutes > 120) {
        return 'MODERATE'; // Overbreaking might indicate stress too
    }

    return 'LOW';
}

export const generateFeedback = async (timeEntries: any, breaks: any) => {
    const gptResponse = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
            {
                role: 'system',
                content: `You are feedback genearte that generate feedback based on login, logout and break time.`
            },
            {
                role: 'user',
                content: `
                Here is the time entries: ${JSON.stringify(timeEntries)}
                Here is the break entries: ${JSON.stringify(breaks)}
                User prompt: ${userQuery}
            `
            }
        ]
    });
    return gptResponse.choices[0].message.content;
};
