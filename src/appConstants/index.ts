import { parseEnv } from '@talent-monk/utils';
import { config } from 'dotenv';
import { z } from 'zod';

config({ path: '.env' });

export const appConstants = parseEnv(
    z.object({
        SURFACE_SERVICE_URL: z.string().url(),
        MONK_SERVICE_URL: z.string().url(),
        COMMUNICATIONS_SERVICE_URL: z.string().url(),
        LIKE_MAIL_TEMPLATE: z.string(),
        COMMENT_MAIL_TEMPLATE: z.string(),
        WORKFLOW_SERVICE_URL: z.string().url(),
        STORAGE_CONTAINER: z.string(),
        LINKEDIN_CLIENTID: z.string(),
        LINKEDIN_CLIENTSECRET: z.string(),
        LINKEDIN_URL: z.string().url(),
        LINKEDIN_ACCESS_TOKEN_URL: z.string().url()
    })
);
