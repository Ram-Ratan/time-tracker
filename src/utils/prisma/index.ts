import { PrismaClient } from '@prisma/client';
import { PrismaSingletonFactory } from '@talent-monk/utils';
import { copyPrismaFactory } from '@talent-monk/client-shared';
// import { SharedWorkflow } from '@talent-monk/shared-workflow';

const prismaFactory = PrismaSingletonFactory.getSingleton<PrismaClient>();
copyPrismaFactory(PrismaSingletonFactory);
// SharedWorkflow.copyPrismaFactory(PrismaSingletonFactory);
prismaFactory.init(PrismaClient);

export default prismaFactory;
