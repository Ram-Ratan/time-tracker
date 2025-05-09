import { Router } from 'express';
import { helloWorldEndpoint } from 'modules/hello-world';
import { getCommonHolidaysEndpoint } from 'modules/holidays/get-common-holidays';
import { upsertHolidayEndpoint } from 'modules/holidays/upsert-holidays';
import timeTrackerServiceRouter from 'modules/time-tracker/timeTracker.router';

const myServiceRouter = Router();

myServiceRouter.get('/hello-world', helloWorldEndpoint);
myServiceRouter.get('/get-common-holidays', getCommonHolidaysEndpoint);
myServiceRouter.post('/upsert-holidays', upsertHolidayEndpoint)

myServiceRouter.use('/time-tracker', timeTrackerServiceRouter);



//Coooment to restart

export default myServiceRouter;
