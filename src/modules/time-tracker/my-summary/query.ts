import { createServiceWithZod, logger } from '@talent-monk/utils';
import { LeaveStatus } from 'generated/prisma';
import prismaFactory from 'utils/prisma';
import timePrisma from 'utils/prisma/time-tracker';
import { z } from 'zod';

export const getUserSummaryService = createServiceWithZod(
    z.object({
        query: z.object({
            startDate: z
                .date().optional(),
            endDate: z
                .date().optional()
        }),
        body: z.object({
            userId: z.string()
        })
    }),
    z.any(),
    async (input) => {
        try {
            logger.log.info(`input: ${JSON.stringify(input)}`);
            const endDate = input.query.endDate ?? new Date();
            const startDate =
                input.query.startDate ??
                new Date(new Date(endDate).setDate(new Date(endDate).getDate() - 30));

            logger.log.info(`startDate: ${startDate}`);
            logger.log.info(`endDate: ${endDate}`);

            const prisma = prismaFactory.get();
            const user = await prisma.user.findUniqueOrThrow({
                where: {
                    id: input.body.userId
                }
            });

            // get working days from the userSchedule table

            const userSchedule = await timePrisma.userSchedule.findMany({
                where: {
                    userId: user.id
                }
            });

            const workingDays = userSchedule.map((schedule) => {
                return schedule.workingDay.toLowerCase();
            });
            logger.log.info(`workingDays: ${workingDays}`);
            // find total working days in given date range by checking the day on particular date include in working days or not

            const totalWorkingDays = [];
            const start = new Date(startDate);
            const end = new Date(endDate);
            for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
                logger.log.info(`d: ${d}`);
                const day = d.toLocaleString('en-US', { weekday: 'long' }).toLocaleLowerCase();
                logger.log.info(`day: ${day}`);
                if (workingDays.includes(day)) {
                    totalWorkingDays.push(new Date(d));
                }
            }
            logger.log.info(`totalWorkingDays: ${totalWorkingDays}`);
            const totalWorkingDaysCount = totalWorkingDays.length;
            let timeEntries = [];
            try {
                timeEntries = await timePrisma.timeEntry.findMany({
                    where: {
                        userId: user.id,
                        createdAt: {
                            gte: new Date(startDate),
                            lte: new Date(endDate)
                        }
                    },
                    include: {
                        breaks: true
                    }
                });
            } catch (error) {
                logger.log.error(`Error fetching time entries: ${error}`);
                throw error;
            }

            const presentDays = timeEntries.length;
            logger.log.info(`presentDays: ${presentDays}`);
            let leaveDays = [];
            try {
                leaveDays = await timePrisma.leave.findMany({
                    where: {
                        startDate: {
                            gte: new Date(startDate),
                            lte: new Date(endDate)
                        },
                        status: LeaveStatus.APPROVED
                    },
                    select: {
                        startDate: true,
                        endDate: true
                    }
                });
            } catch (error) {
                logger.log.error(`Error fetching leave days: ${error}`);
                throw error;
            }
            // toDo: @Ram check for leave and holiday
            logger.log.info(`leaveDays: ${leaveDays}`);
            const absentDays = totalWorkingDaysCount - presentDays - leaveDays.length;
            // calculate total hours including break hours
            let totalWorkHours = 0;
            let totalBreakHours = 0;
            timeEntries.forEach((entry) => {
                if (!entry.logoutTime) return;
                const startTime = new Date(entry.loginTime);
                const endTime = new Date(entry.logoutTime);
                const workHours = Math.max(
                    0,
                    (endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60)
                );
                totalWorkHours += workHours;
                entry.breaks.forEach((breakEntry) => {
                    const breakStartTime = new Date(breakEntry.breakStart);
                    const breakEndTime = new Date(breakEntry.breakEnd);
                    const breakHours =
                        (breakEndTime.getTime() - breakStartTime.getTime()) / (1000 * 60 * 60);
                    totalBreakHours += breakHours;
                });
            });

            const totalWorkHoursInHours = Math.floor(totalWorkHours);
            const totalWorkHoursInMinutes = Math.floor(
                (totalWorkHours - totalWorkHoursInHours) * 60
            );
            const totalBreakHoursInHours = Math.floor(totalBreakHours);
            const totalBreakHoursInMinutes = Math.floor(
                (totalBreakHours - totalBreakHoursInHours) * 60
            );
            const totalWorkHoursString = `${totalWorkHoursInHours}:${
                totalWorkHoursInMinutes < 10
                    ? '0' + totalWorkHoursInMinutes
                    : totalWorkHoursInMinutes
            }`;
            const totalBreakHoursString = `${totalBreakHoursInHours}:${
                totalBreakHoursInMinutes < 10
                    ? '0' + totalBreakHoursInMinutes
                    : totalBreakHoursInMinutes
            }`;
            // calculate average login and logout time
            const averageLoginTime = new Date();
            const averageLogoutTime = new Date();
            let averageLoginHours = 0;
            let averageLoginMinutes = 0;
            let averageLogoutHours = 0;
            let averageLogoutMinutes = 0;
            timeEntries.forEach((entry) => {
                const startTime = new Date(entry.loginTime);
                const endTime = new Date(entry.logoutTime);
                const loginHours = startTime.getHours();
                const loginMinutes = startTime.getMinutes();
                const logoutHours = endTime.getHours();
                const logoutMinutes = endTime.getMinutes();
                averageLoginHours += loginHours;
                averageLoginMinutes += loginMinutes;
                averageLogoutHours += logoutHours;
                averageLogoutMinutes += logoutMinutes;
            });
            averageLoginHours = Math.floor(averageLoginHours / presentDays);
            averageLoginMinutes = Math.floor(averageLoginMinutes / presentDays);
            averageLogoutHours = Math.floor(averageLogoutHours / presentDays);
            averageLogoutMinutes = Math.floor(averageLogoutMinutes / presentDays);
            const averageLoginString = `${averageLoginHours}:${
                averageLoginMinutes < 10 ? '0' + averageLoginMinutes : averageLoginMinutes
            }`;
            const averageLogoutString = `${averageLogoutHours}:${
                averageLogoutMinutes < 10 ? '0' + averageLogoutMinutes : averageLogoutMinutes
            }`;
            return {
                workingDays: totalWorkingDaysCount,
                presentDays: presentDays,
                absentDays: absentDays,
                totalWorkHours: totalWorkHoursString,
                totalBreakHours: totalBreakHoursString,
                averageLogin: averageLoginString,
                averageLogout: averageLogoutString
            };
        } catch (error) {
            throw error;
        }
    }
);
