import { Router } from 'express';
import { helloWorldEndpoint } from 'modules/hello-world';
import { getCommonHolidaysEndpoint } from 'modules/holidays/get-common-holidays';
import { upsertHolidayEndpoint } from 'modules/holidays/upsert-holidays';

const surfaceServiceRouter = Router();

surfaceServiceRouter.get('/hello-world', helloWorldEndpoint);
surfaceServiceRouter.get('/get-common-holidays', getCommonHolidaysEndpoint);
surfaceServiceRouter.post('/upsert-holidays', upsertHolidayEndpoint)

//Coooment to restart

export default surfaceServiceRouter;
