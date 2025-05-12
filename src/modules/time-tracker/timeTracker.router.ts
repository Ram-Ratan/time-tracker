import { Router } from 'express';
import { getStatusEndpoint } from './get-status';
import { punchInEndpoint } from './punch-in';
import { punchOutEndpoint } from './punch-out';
import { toggleBreakEndpoint } from './break';
import { mySummaryEndpoint } from './my-summary';
import { myReporterSummaryEndpoint } from './get-my-reporter-summary';
import { requestAdjustmentEndpoint } from './request-adjustment';
import { getRequestAdjustmentEndpoint} from './request-adjustment';
import { takeActionEndpoint} from './request-adjustment';


const timeTrackerServiceRouter = Router();



timeTrackerServiceRouter.get('/status', getStatusEndpoint);

timeTrackerServiceRouter.post('/punch-in', punchInEndpoint);

timeTrackerServiceRouter.post('/punch-out', punchOutEndpoint);

timeTrackerServiceRouter.post('/toggle-break', toggleBreakEndpoint);

timeTrackerServiceRouter.get('/my-summary', mySummaryEndpoint);

timeTrackerServiceRouter.post('/my-reporter-summary', myReporterSummaryEndpoint);

timeTrackerServiceRouter.post('/request-adjustment', requestAdjustmentEndpoint);

timeTrackerServiceRouter.get('/request-adjustment/:id', getRequestAdjustmentEndpoint);

timeTrackerServiceRouter.post('/take-action', takeActionEndpoint);




export default timeTrackerServiceRouter;
