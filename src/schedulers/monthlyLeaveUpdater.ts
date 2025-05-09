import cron from 'node-cron';
import prisma from 'utils/prisma/time-tracker'; // adjust path to your prisma client
import { Decimal } from '@prisma/client/runtime/library';

// Runs at midnight on the 1st of every month
cron.schedule('0 0 1 * *', async () => {
  console.log('Running monthly leave updater...');

  const userLinks = await prisma.userCategoryLinkUp.findMany({
    include: {
      category: {
        include: {
          leavePolicy: true,
        },
      },
    },
  });

  for (const user of userLinks) {
    const { userId, category } = user;
    const policy = category.leavePolicy;

    if (!policy) continue; 

    const existing = await prisma.userLeaves.findUnique({
      where: { userId }
    });

    if (!existing) {
      await prisma.userLeaves.create({
        data: {
          userId,
          sickLeaves: policy.sickLeaves,
          vacationLeaves: policy.vacationLeaves,
          parentalLeaves: policy.parentalLeaves,
          maternityLeaves: policy.maternityLeaves,
        },
      });
    } else {
      await prisma.userLeaves.update({
        where: { userId },
        data: {
          sickLeaves: new Decimal(existing.sickLeaves).plus(policy.sickLeaves),
          vacationLeaves: new Decimal(existing.vacationLeaves).plus(policy.vacationLeaves),
          parentalLeaves: new Decimal(existing.parentalLeaves).plus(policy.parentalLeaves),
          maternityLeaves: new Decimal(existing.maternityLeaves).plus(policy.maternityLeaves),
        },
      });
    }
  }

  console.log('Monthly leave updater complete.');
});
