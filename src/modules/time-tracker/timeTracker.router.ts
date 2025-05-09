import { Router } from 'express';
import { getStatusEndpoint } from './get-status';
import { punchInEndpoint } from './punch-in';
import { punchOutEndpoint } from './punch-out';
import { toggleBreakEndpoint } from './break';

const timeTrackerServiceRouter = Router();



timeTrackerServiceRouter.get('/status', getStatusEndpoint);

timeTrackerServiceRouter.post('punch-in', punchInEndpoint);

timeTrackerServiceRouter.post('punch-out', punchOutEndpoint);

timeTrackerServiceRouter.post('/toggle-break', toggleBreakEndpoint);




export default timeTrackerServiceRouter;
