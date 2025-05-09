import { createServiceWithZod, logger } from '@talent-monk/utils';
import prismaFactory from 'utils/prisma';

import { z } from 'zod';

export const getUserIdWithUserAuthId = createServiceWithZod(
    z.object({ userAuthId: z.string() }),
    z.any(),
    async ({ userAuthId }) => {
        try {
            const prisma = prismaFactory.get();
            logger.pushContext('GET USER WITH AUTH ID').log.info('STARTED');

            const result = await prisma.user.findUniqueOrThrow({
                where: {
                    uid: userAuthId
                }
            });
            logger.log.info('FINISHED');

            return result;
        } catch (error) {
            throw error;
        } finally {
            logger.popContext();
        }
    }
);
