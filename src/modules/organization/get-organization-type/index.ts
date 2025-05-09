import { z } from 'zod';
import { createPrivateEndpointWithZod, createHTTPResponse } from '@talent-monk/utils';
import timePrisma from 'utils/prisma/time-tracker'; 

export const getOrganizationTypeEndpoint = createPrivateEndpointWithZod(
  'GET ORGANIZATION TYPE',
  z.object({}),
  z.object({
    success: z.boolean(),
    type: z.string().optional(),
    message: z.string(),
  }),
  async ({ orgId }) => {

    const org = await timePrisma.organisation.findUnique({  
      where: { orgId },
      select: { type: true },
    });

    if (!org) {
      const newOrg = await timePrisma.organisation.create({
        data: {
          orgId,
          type: 'GOOD',
        },
      });

      return {
        success: true,
        type: newOrg.type,
        message: `Organization type is ${newOrg.type}`,
      };
    }

    return {
      success: true,
      type: org.type,
      message: `Organization type is ${org.type}`,
    };
  },
  async (res, output) => {
    createHTTPResponse(res, 200, output.message, output);
  }
);
