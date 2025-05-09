import { z } from 'zod';

export const userDataSchema = z.object({
    avatar: z.object({ value: z.string() }),
    fullName: z.object({ value: z.string() }),
    displayName: z.object({ value: z.string() })
});

export const uploadMediaServiceOutput = z.array(
    z
        .object({
            url: z.string(),
            fileType: z.enum(['image/jpeg', 'image/png', 'video/mp4', 'video/mov', 'url']),
            size: z.string()
        })
        .strict()
);

export const uploadMediaCsvServiceOutput = z.array(
    z
        .object({
            url: z.string(),
            fileType: z.enum([
                'application/vnd.ms-excel',
                'text/csv',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            ]),
            size: z.string()
        })
        .strict()
);

// Depricate This : Don;t use this : user paginationObjectSchema Instead

export const basicFetchQueryParams = z.object({
    query: z.object({
        pageIndex: z
            .string()
            .transform((i) => Number(i))
            .optional(),
        pageSize: z
            .string()
            .transform((i) => Number(i))
            .optional()
    })
});

export const basicFetchQueryServiceParams = z.object({
    query: z.object({
        pageIndex: z.number().optional(),
        pageSize: z.number().optional()
    })
});

export const paginationObjectSchema = z.object({
    pageIndex: z
        .string()
        .transform((i) => Number(i))
        .optional(),
    pageSize: z
        .string()
        .transform((i) => Number(i))
        .optional()
});

export const paginationObjectServiceSchema = z.object({
    pageIndex: z.number().optional(),
    pageSize: z.number().optional()
});

export const commonServicePropertiesSchema = z.object({
    orgId: z.string(),
    userAuthId: z.string()
});
