import { z } from 'zod';
import { createPrivateEndpointWithZod, createHTTPResponse } from '@talent-monk/utils';
import timePrisma from 'utils/prisma/time-tracker';
import openai from 'utils/openAi';
import { extractSchemaMetadata } from '../support/schemaInterpretor';

export const testEndpoint = createPrivateEndpointWithZod(
  'POST TEST',
  z.object({}),
  z.any(),
  async ({ data }) => {
    console.log(extractSchemaMetadata(), 'extractSchemaMetadata')
    return {
      success: true,
      message: 'Test successful',
    }
  },
  async (res, output) => {
    createHTTPResponse(res, 200, 'Test successful', output);
  }
);
