import { logger } from '@talent-monk/utils';
import { appConstants } from 'appConstants/index';
import axios from 'axios';
import { createServiceWithZod } from '@talent-monk/utils';
import { z } from 'zod';

export const sendEmailService = createServiceWithZod(
    z.object({
        to: z.array(z.object({ email: z.string() })),
        subject: z.string(),
        template_id: z.string().optional(),
        dynamic_template_data: z.any().optional(),
        attachments: z.any().optional()
    }),
    z.undefined(),
    async (emailData) => {
        try {
            logger.log.info('SEND EMAIL STARTED');

            const reqURL = `${appConstants.COMMUNICATIONS_SERVICE_URL}/send-email`;
            await axios.post(reqURL, emailData);

            logger.log.info('SEND EMAIL FINISHED');
        } catch (error) {
            throw error;
        } finally {
            logger.popContext();
        }
    }
);
