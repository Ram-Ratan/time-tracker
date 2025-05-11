import { z } from 'zod';
import { createPrivateEndpointWithZod, createHTTPResponse } from '@talent-monk/utils';
import timePrisma from 'utils/prisma/time-tracker';
import openai from 'utils/openAi';

const insertSchema = z.object({
  body: z.object({
    pairs: z.array(
      z.object({
        nlq: z.string().min(5, 'NLQ must be at least 5 characters'),
        sql: z.string().min(5, 'SQL must be at least 5 characters'),
      })
    ).min(1, 'At least one pair is required'),
  }),
});

export const insertMultipleNLQSqlEndpoint = createPrivateEndpointWithZod(
  'POST INSERT MULTIPLE NLQ-SQL',
  insertSchema,
  z.object({
    success: z.boolean(),
    insertedCount: z.number(),
    skippedCount: z.number(),
  }),
  async ({ data }) => {
    const pairs = data.body.pairs;

    let insertedCount = 0;
    let skippedCount = 0;

    for (const { nlq, sql } of pairs) {
      try {
        const embeddingResponse = await openai.embeddings.create({
          input: nlq,
          model: '',
        });

        const vector = embeddingResponse.data[0].embedding;
        const embeddingBuffer = Buffer.from(Float32Array.from(vector).buffer);

        await timePrisma.nlqSqlMapping.create({
          data: { nlq, sql, embedding: embeddingBuffer },
        });

        insertedCount++;
      } catch (err) {
        console.error(`Skipping due to error on "${nlq}":`, err);
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
    createHTTPResponse(res, 200, 'NLQ-SQL pairs processed', output);
  }
);
