import { z } from 'zod';
import { createPublicEndpointWithZod, createHTTPResponse } from '@talent-monk/utils';
import timePrisma from 'utils/prisma/time-tracker';

const insertSchema = z.object({
  body: z.object({
    type: z.enum(['sql', 'function']),
    pairs: z.array(
      z.object({
        nlq: z.string().min(5, 'NLQ must be at least 5 characters'),
        sql: z.string().min(5, 'SQL must be at least 5 characters'),
        cases: z.any()
      }).optional().or(
        z.object({
          nlq: z.string().min(5, 'NLQ must be at least 5 characters'),
          function: z.string().min(3, 'Function name required'),
          input: z.any(),
          cases: z.any(),
        })
      )
    ).min(1, 'At least one pair is required'),
  }),
});

export const insertMultipleNLQMappingEndpoint = createPublicEndpointWithZod(
  'POST INSERT MULTIPLE NLQ MAPPINGS',
  insertSchema,
  z.object({
    success: z.boolean(),
    insertedCount: z.number(),
    skippedCount: z.number(),
  }),
  async ({ data }) => {
    const { type, pairs } = data.body;

    let insertedCount = 0;
    let skippedCount = 0;

    for (const pair of pairs) {
      try {

        if (type === 'sql') {
          await timePrisma.nlqSqlMapping.create({
            data: {
              nlq: pair.nlq,
              sql: pair.sql,
              cases: pair.cases,
            },
          });
        } else if (type === 'function') {
          await timePrisma.nqlFunctionMapping.create({
            data: {
              nlq: pair.nlq,
              function: pair.function,
              input: pair.input,
              cases: pair.cases,
            },
          });
        } else {
          throw new Error('Invalid pair structure for type: ' + type);
        }

        insertedCount++;
      } catch (err) {
        console.error(`Skipping "${JSON.stringify(pair)}" due to error:`, err);
        skippedCount++;
      }
    }

    return {
      success: true,
      insertedCount,
      skippedCount,
    };
  },
  async (res, output) => {
    createHTTPResponse(res, 200, 'NLQ mappings processed', output);
  }
);