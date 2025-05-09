import { Prisma, PrismaClient } from 'generated/dev/prisma/client/index.js';
import { MiddlewareHelper, PrismaSingletonFactory } from '@talent-monk/utils';
import { copyPrismaFactory } from '@talent-monk/client-shared';
import { SharedWorkflow } from '@talent-monk/shared-workflow';
import { fieldLevelRbacMiddleware, masterRowLevelRbacMiddleware } from '@talent-monk/rbac';

const prismaFactory = PrismaSingletonFactory.getSingleton<PrismaClient>();
copyPrismaFactory(PrismaSingletonFactory);

SharedWorkflow.copyPrismaFactory(PrismaSingletonFactory);


const prismaModels = Prisma.dmmf.datamodel;

const modelMap: {
    [key: string]: any;
} = prismaModels.models.reduce((acc, model) => {
    acc[model.name] = model;
    return acc;
}, {});

prismaFactory.init(PrismaClient, [
    //fieldLevelRbacMiddleware(MiddlewareHelper.middlewareHelperObject as MiddlewareHelper.TMiddlewareHelper, modelMap),
    //masterRowLevelRbacMiddleware(MiddlewareHelper.middlewareHelperObject as MiddlewareHelper.TMiddlewareHelper),
]);

//prismaFactory.init(PrismaClient);

export default prismaFactory;
