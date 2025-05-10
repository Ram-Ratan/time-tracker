import { parseEnv } from '@talent-monk/utils';
import { config } from 'dotenv';
import { z } from 'zod';

config({ path: '.env' });

export const appConstants = parseEnv(
    z.object({
        SURFACE_SERVICE_URL: z.string().url(),
        MONK_SERVICE_URL: z.string().url(),
        COMMUNICATIONS_SERVICE_URL: z.string().url(),
        WORKFLOW_SERVICE_URL: z.string().url(),
        STORAGE_CONTAINER: z.string(),
    })
);
