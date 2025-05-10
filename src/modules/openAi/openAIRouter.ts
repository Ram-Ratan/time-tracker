import { Router } from 'express';
import { insertMultipleNLQSqlEndpoint } from './createMapping';
import { getClosestSQLForNLQEndpoint } from './query';

const openAIRouter = Router();

openAIRouter.post('/insert-multiple-nlq-sql', insertMultipleNLQSqlEndpoint);
// openAIRouter.post('/get-closest-sql-for-nlq', getClosestSQLForNLQEndpoint);

export default openAIRouter;