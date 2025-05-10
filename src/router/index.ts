import { Router } from 'express';
import { helloWorldEndpoint } from 'modules/hello-world';
import holidaysRouter from 'modules/holidays/holidaysRouter';
import categoryRouter from 'modules/category/categoryRouter';
import leaveRouter from 'modules/leave/leaveRouter';
import organizationRouter from 'modules/organization/organizationRouter';
import userRouter from 'modules/user/userRouter';

const surfaceServiceRouter = Router();

surfaceServiceRouter.get('/hello-world', helloWorldEndpoint);
surfaceServiceRouter.use('/category', categoryRouter);
surfaceServiceRouter.use('/holidays', holidaysRouter);
surfaceServiceRouter.use('/leave', leaveRouter);
surfaceServiceRouter.use('/organization', organizationRouter);
surfaceServiceRouter.use('/user', userRouter);

export default myServiceRouter;
