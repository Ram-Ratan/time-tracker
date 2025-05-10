import { createHTTPResponse } from '@talent-monk/utils';
import { createPrivateEndpointWithZod } from '@talent-monk/utils';
import { z } from 'zod';
import { StatusCodes } from 'http-status-codes';
import timePrisma from 'utils/prisma/time-tracker';

const upsertHolidaySchema = z.object({
    body: z.object({
        id: z.string().uuid().optional(),
        name: z.string().optional(),
        date: z.string().optional(),
        type: z.enum(['MANDATORY', 'OPTIONAL']).optional().default('MANDATORY'),
        userCategoryIds: z.array(z.string().uuid()).optional(),
    }).refine((data) => {
        if (!data.id) {
            return !!data.name && !!data.date;
        }
        return true;
    }, {
        message: 'Name and date are required when creating a holiday',
        path: ['name'],
    })
});

export const upsertHolidayEndpoint = createPrivateEndpointWithZod(
    'UPSERT HOLIDAY',
    upsertHolidaySchema,
    z.object({
        success: z.boolean(),
        message: z.string(),
        id: z.string().uuid(),
    }),
    async (input) => {
        const { id, name, date, type, userCategoryIds = [] } = input.data.body;

        try {
            if (id) {
                const updated = await timePrisma.holiday.update({
                    where: { id },
                    data: {
                        ...(name && { name }),
                        ...(date && { date: new Date(date) }),
                        ...(type && { type }),
                        ...(userCategoryIds && {
                            userCategories: {
                                set: userCategoryIds.map((id) => ({ id })),
                            },
                        }),
                    },
                });

                return {
                    success: true,
                    message: 'Holiday updated successfully',
                    id: updated.id,
                };
            } else {
                const created = await timePrisma.holiday.create({
                    data: {
                        name: name!,
                        date: new Date(date!),
                        type,
                        userCategories: {
                            connect: userCategoryIds.map((id) => ({ id }))
                        },
                    },
                });

                return {
                    success: true,
                    message: 'Holiday created successfully',
                    id: created.id,
                };
            }
        } catch (error) {
            console.error(error);
            return {
                success: false,
                message: 'Error occurred while upserting holiday',
            };
        }
    },
    async (res, output) => {
        createHTTPResponse(res, StatusCodes.OK, output.message, output);
    }
);
