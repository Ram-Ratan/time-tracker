import { createHTTPResponse } from '@talent-monk/utils';
import { createPrivateEndpointWithZod } from '@talent-monk/utils';
import { StatusCodes } from 'http-status-codes';
import { z } from 'zod';
import timePrisma from 'utils/prisma/time-tracker';

export const uploadAttendanceEndpoint = createPrivateEndpointWithZod(
    'UPLOAD ATTENDANCE',
    z.object({
        body: z.object({
            userId: z.string(),
            date: z.string().transform((d) => new Date(d)),
            loginTime: z.string(),
            logoutTime: z.string()
        })
    }),
    z.any(),
    async (input) => {
        try {
            const { userId, date, loginTime, logoutTime } = input.data.body;

            // Check if entry exists for the given date and userId
            const existingEntry = await timePrisma.timeEntry.findFirst({
                where: {
                    userId,
                    date
                }
            });

            if (existingEntry) {
                // Update existing entry
                const updatedEntry = await timePrisma.timeEntry.update({
                    where: {
                        id: existingEntry.id
                    },
                    data: {
                        loginTime,
                        logoutTime
                    }
                });
                return updatedEntry;
            } else {
                // Create new entry
                const newEntry = await timePrisma.timeEntry.create({
                    data: {
                        userId,
                        date,
                        loginTime,
                        logoutTime
                    }
                });
                return newEntry;
            }
        } catch (error) {
            throw error;
        }
    },
    async (res, output) => {
        try {
            createHTTPResponse(res, StatusCodes.OK, 'Attendance uploaded successfully!', output);
        } catch (error) {
            throw error;
        }
    }
);
