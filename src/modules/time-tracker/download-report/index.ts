import { createHTTPResponse } from '@talent-monk/utils';
import { createPrivateEndpointWithZod } from '@talent-monk/utils';
import { StatusCodes } from 'http-status-codes';
import { z } from 'zod';
import timePrisma from 'utils/prisma/time-tracker';
import { getMyReportees } from 'utils/employee/getMyReportees';
import prismaFactory from 'utils/prisma';

export const downloadReportEndpoint = createPrivateEndpointWithZod(
    'DOWNLOAD REPORT',
    z.object({
        query: z.object({
            startDate: z.string().transform((st)=> new Date(st)),
            endDate: z.string().transform((ed)=> new Date(ed))
        }),
        body: z.object({
            userIds: z.array(z.string())
        })
    }),
    z.any(),
    async (input) => {
        try {
            let userIds = input.data.body.userIds;
            // get all the timeEntry for these userIds in given date range
            if(userIds.length === 0){
                const user = await prismaFactory.get().user.findUniqueOrThrow({
                    where: {
                        uid: input.userAuthId
                    }
                })
                const reportees = await getMyReportees(user.id)
                userIds = reportees.map((user) => {
                    return user.userId;
                });
            }
            
            const timeEntries = await timePrisma.timeEntry.findMany({
                where: {
                    userId: {
                        in: userIds
                    },
                    date: {
                        gte: input.data.query.startDate,
                        lte: input.data.query.endDate
                    }
                },
                orderBy: [
                    {
                        userId: 'asc'
                    },
                    {
                        date: 'asc'
                    }
                ]
            });

            return timeEntries;

        } catch (error) {
            throw error;
        }
    },
    async (res, output) => {
        try {
            createHTTPResponse(res, StatusCodes.OK, 'Download report successfull!', output);
        } catch (error) {
            throw error;
        }
    }
);
