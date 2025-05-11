import { z } from 'zod';
import { createPrivateEndpointWithZod, createHTTPResponse, HttpException } from '@talent-monk/utils';
import timePrisma from 'utils/prisma/time-tracker'; 
import { organisationType } from '../../../generated/prisma';

const updateOrgTypeSchema = z.object({
  body: z.object({
    type: z.nativeEnum(organisationType),
  }),
});

export const updateOrganizationTypeEndpoint = createPrivateEndpointWithZod(
  'PATCH UPDATE ORGANIZATION TYPE',
  updateOrgTypeSchema,
  z.object({
    success: z.boolean(),
    message: z.string(),
  }),
  async ({ data, orgId }) => {
    const { type } = data.body;

    // todo: only admin should be able to update
    const org = await timePrisma.organisation.findUnique({ where: { orgId } });
    if (!org) {
      throw new HttpException(404, 'Organization not found');
    }

    await timePrisma.organisation.update({
      where: { orgId },
      data: { type },
    });

    return {
      success: true,
      message: `Organization type updated to ${type}`,
    };
  },
  async (res, output) => {
    createHTTPResponse(res, 200, output.message, output);
  }
);
