import { logger, utilsConstants } from '@talent-monk/utils';
import { createServiceWithZod } from '@talent-monk/utils';
import prismaFactory from 'utils/prisma';

import { z } from 'zod';
import timePrisma from '../../utils/prisma/time-tracker';

export const helloWorldService = createServiceWithZod(z.object({}), z.string(), async () => {
    try {
        logger.pushContext('SERVICE');
        logger.log.info('STARTED');

        const devPrisma = prismaFactory.get();
        try{
            const user = await devPrisma.user.findFirst({
                where: {
                    email: {
                        not: null
                    }
                }
            });

            const userSchedule = await timePrisma.userSchedule.findFirst({
            });
            logger.log.info(`userSchedule: ${JSON.stringify(userSchedule)}`);
            logger.log.info(`user: ${JSON.stringify(user)}`);
        } catch (error) {
            logger.log.error(`Error fetching user: ${error}`);
        }

        logger.log.info('FINISHED');

        return `Hello from ${utilsConstants.PKG_UTILS_APP_NAME}`;
    } catch (error) {
        throw error;
    } finally {
        logger.popContext();
    }
});
