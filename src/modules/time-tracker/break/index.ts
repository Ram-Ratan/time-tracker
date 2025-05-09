

import { createHTTPResponse } from '@talent-monk/utils';
import { createPrivateEndpointWithZod } from '@talent-monk/utils';
import { StatusCodes } from 'http-status-codes';
import { z } from 'zod';
import timePrisma from 'utils/prisma/time-tracker';
import prismaFactory from 'utils/prisma';

export const toggleBreakEndpoint = createPrivateEndpointWithZod(
    'TOGGLE BREAK',
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

            // find the time entry(i.e. the user has logged in or not today) for the user
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
                throw new Error('You have not punched in yet!');
            }

            // check if already logged out

            if( timeEntry.logoutTime) {
                throw new Error('You have already logged out!');
            }

            // check if already on break

            const breakEntry = await timePrisma.break.findFirst({
                where: {
                    timeEntryId: timeEntry.id,
                    breakEnd: null
                }
            });
            if (breakEntry) {
                // if already on break, then end the break
                await timePrisma.break.update({
                    where: {
                        id: breakEntry.id
                    },
                    data: {
                        breakEnd: now
                    }
                });
            } else {
                // if not on break, then start a break
                await timePrisma.break.create({
                    data: {
                        timeEntryId: timeEntry.id,
                        breakStart: now
                    }
                });
            }
            // find the time entry again to get the updated break entry
            const updatedTimeEntry = await timePrisma.timeEntry.findUnique({
                where: {
                    id: timeEntry.id
                },
                include: {
                    breaks: true
                }
            });
            return updatedTimeEntry;
        } catch (error) {
            throw error;
        }
    },
    async (res, output) => {
        try {
            createHTTPResponse(res, StatusCodes.OK, 'Toggle Break Successful!', output);
        } catch (error) {
            throw error;
        }
    }
);

