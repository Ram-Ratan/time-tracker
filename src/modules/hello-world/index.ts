import { createHTTPResponse } from '@talent-monk/utils';
import { createPublicEndpointWithZod, createPrivateEndpointWithZod } from '@talent-monk/utils';
import { z } from 'zod';
import { helloWorldService } from './services';
import { StatusCodes } from 'http-status-codes';

export const helloWorldEndpoint = createPrivateEndpointWithZod(
    'HELLO WORLD',
    z.object({}),
    z.string(),
    async (input) => {
        try {
            return await helloWorldService(input);
        } catch (error) {
            throw error;
        }
    },
    async (res, output) => {
        try {
            createHTTPResponse(res, StatusCodes.OK, 'Successful!', output);
        } catch (error) {
            throw error;
        }
    }
);
