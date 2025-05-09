import { userSchema } from '@talent-monk/client-schema';
import { createServiceWithZod, logger } from '@talent-monk/utils';
import prismaFactory from 'utils/prisma';
import { z } from 'zod';

export const whoCreatedAnnouncementQuery = createServiceWithZod(
    z.object({ sourceId: z.string() }),
    userSchema,
    async ({ sourceId }) => {
        try {
            const prisma = prismaFactory.get();
            logger.pushContext('WHO CREATED ANNOUNCEMENT QUERY').log.info('STARTED');

            const result = await prisma.announcement.findUniqueOrThrow({
                where: {
                    id: sourceId
                },
                select: {
                    createdBy: true,
                    message: true
                }
            });

            logger.log.info('FINISHED');

            return result.createdBy;
        } catch (error) {
            throw error;
        } finally {
            logger.popContext();
        }
    }
);
