import { Router } from 'express';
import { helloWorldEndpoint } from 'modules/hello-world';
import timeTrackerServiceRouter from 'modules/time-tracker/timeTracker.router';

const myServiceRouter = Router();

myServiceRouter.get('/hello-world', helloWorldEndpoint);

myServiceRouter.use('/time-tracker', timeTrackerServiceRouter);



//Coooment to restart

export default myServiceRouter;
