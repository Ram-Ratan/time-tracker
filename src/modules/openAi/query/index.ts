import { z } from 'zod';
import { createPrivateEndpointWithZod, createHTTPResponse } from '@talent-monk/utils';
import timePrisma from 'utils/prisma/time-tracker';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const querySchema = z.object({
  body: z.object({
    query: z.string().min(5, 'Query must be at least 5 characters long'),
  }),
});

export const getClosestSQLForNLQEndpoint = createPrivateEndpointWithZod(
  'POST GET SQL FOR NLQ',
  querySchema,
  z.object({
    matchedNLQ: z.string(),
    matchedSQL: z.string(),
  }),
  async ({ data }) => {
    const userQuery = data.body.query;

    // Use the free embedding model text-embedding-ada-002
    const userEmbedding = await openai.embeddings.create({
      model: 'text-embedding-ada-002',
      input: userQuery,
    });

    const floatVector = userEmbedding.data[0].embedding;
    const embeddingBuffer = Buffer.from(Float32Array.from(floatVector).buffer);

    // Execute the similarity query using pgvector (PostgreSQL)
    const result = await timePrisma.$queryRawUnsafe(
      `SELECT id, nlq, sql FROM "NlqSqlMapping" ORDER BY embedding <-> $1 LIMIT 1`,
      embeddingBuffer
    );

    if (!result || result.length === 0) {
      throw new Error('No similar query found');
    }

    return {
      matchedNLQ: result[0].nlq,
      matchedSQL: result[0].sql,
    };
  },
  async (res, output) => {
    createHTTPResponse(res, 200, 'Closest query found successfully', output);
  }
);
