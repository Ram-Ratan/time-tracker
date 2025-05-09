import { Router } from 'express';
import { helloWorldEndpoint } from 'modules/hello-world';

const surfaceServiceRouter = Router();

surfaceServiceRouter.get('/hello-world', helloWorldEndpoint);

//Coooment to restart

export default surfaceServiceRouter;
