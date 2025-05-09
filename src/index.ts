import { App, logger, utilsConstants } from '@talent-monk/utils';
import './utils/prisma';
import surfaceServiceRouter from './router';

logger.pushContext(utilsConstants.PKG_UTILS_APP_NAME);
const app = new App(surfaceServiceRouter);
app.start();
