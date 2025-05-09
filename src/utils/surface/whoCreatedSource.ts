import { userSchema } from '@talent-monk/client-schema';
import { createServiceWithZod, logger } from '@talent-monk/utils';
import prismaFactory from 'utils/prisma';
import { z } from 'zod';

export const whoCreatedSourceQuery = createServiceWithZod(
    z.object({
        sourceId: z.string(),
        sourceType: z.enum(['post', 'announcement'])
    }),
    userSchema,
    async ({ sourceId, sourceType }) => {
        try {
            const prisma = prismaFactory.get();
            logger.pushContext('WHO CREATED POST QUERY').log.info('STARTED');

            let result: any;
            if (sourceType === 'post') {
                result = await prisma.post.findUniqueOrThrow({
                    where: {
                        id: sourceId
                    },
                    select: {
                        createdBy: true,
                        message: true
                    }
                });
            } else if (sourceType === 'announcement') {
                result = await prisma.announcement.findUniqueOrThrow({
                    where: {
                        id: sourceId
                    },
                    select: {
                        createdBy: true,
                        message: true
                    }
                });
            }

            logger.log.info('FINISHED');

            return result.createdBy;
        } catch (error) {
            throw error;
        } finally {
            logger.popContext();
        }
    }
);
