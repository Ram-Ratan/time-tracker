import { Router } from 'express';
import { insertMultipleNLQMappingEndpoint } from './createMapping';
import { getClosestSQLForNLQEndpoint } from './query';
import { testEndpoint } from './test';

const openAIRouter = Router();

openAIRouter.post('/insert-multiple-nlq-sql', insertMultipleNLQMappingEndpoint);
openAIRouter.post('/get-closest-sql-for-nlq', getClosestSQLForNLQEndpoint);
openAIRouter.get('/test', testEndpoint);   

export default openAIRouter;