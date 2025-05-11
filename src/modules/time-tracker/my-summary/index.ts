import { createHTTPResponse, logger } from '@talent-monk/utils';
import { createPrivateEndpointWithZod } from '@talent-monk/utils';
import { StatusCodes } from 'http-status-codes';
import { z } from 'zod';
import { getUserSummaryService } from './query';
import prismaFactory from 'utils/prisma';

export const mySummaryEndpoint = createPrivateEndpointWithZod(
    'MY SUMMARY',
    z.object({
        query: z.object({
            startDate: z.string().transform((st)=> new Date(st)).optional(),
            endDate: z.string().transform((ed)=> new Date(ed)).optional()
        })
    }),
    z.any(),
    async (input) => {
        try{
            const prisma = prismaFactory.get();
            const user = await prisma.user.findUniqueOrThrow({
                where: {
                    uid: input.userAuthId
                }
            });
            const res = await getUserSummaryService({
                query: {
                    startDate: input.data.query.startDate,
                    endDate: input.data.query.endDate
                },
                body: {
                    userId: user.id
                }
            })

            return res;

        }catch (error) {
            logger.log.error(`Error in mySummaryEndpoint: ${error}`);
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
