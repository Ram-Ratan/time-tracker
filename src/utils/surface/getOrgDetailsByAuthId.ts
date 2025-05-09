import { logger } from '@talent-monk/utils';
import { appConstants } from 'appConstants/index';
import axios from 'axios';
import { createServiceWithZod } from '@talent-monk/utils';
import { z } from 'zod';

export const getOrgDetailsByOrgAuthIdService = createServiceWithZod(
    z.string(),
    z.any(),
    async (orgAuthId, req) => {
        try {
            logger.pushContext('GET ORG DETAILS BY AUTH ID FROM MONK SERVICE').log.info('STARTED');

            const reqURL = `${appConstants.MONK_SERVICE_URL}/get-org-details-by-org-auth-id/${orgAuthId}`;
            const response = await axios.get(reqURL, {
                headers: {
                    ['x-access-token']: req?.headers?.['x-access-token'],
                    ['x-id-token']: req?.headers?.['x-id-token']
                }
            });

            return response.data.data;
        } catch (error) {
            throw error;
        } finally {
            logger.popContext();
        }
    }
);
