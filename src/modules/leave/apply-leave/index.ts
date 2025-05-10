import { z } from 'zod';
import { createPrivateEndpointWithZod, createHTTPResponse } from '@talent-monk/utils';
import { isWeekend, eachDayOfInterval } from 'date-fns';
import timePrisma from 'utils/prisma/time-tracker';
import { Prisma } from '../../../generated/prisma';
import prismaFactory from 'utils/prisma';

const dateString = z
  .string()
  .refine((val) => !isNaN(Date.parse(val)), { message: 'Invalid date' })
  .transform((val) => new Date(val));

const applyLeaveSchema = z.object({
  body: z.object({
    type: z.enum(['SICK', 'VACATION', 'PARENTAL', 'MATERNITY']),
    startDate: dateString,
    endDate: dateString,
    message: z.string().optional(),
    halfDay: z.boolean().optional().default(false),
  }),
});

export const applyLeaveEndpoint = createPrivateEndpointWithZod(
  'POST APPLY LEAVE',
  applyLeaveSchema,
  z.object({
    success: z.boolean(),
    message: z.string(),
    id: z.string().optional(),
  }),
  async ({ data, orgId, userAuthId }) => {
    const { type, startDate, endDate, message, halfDay } = data.body;

    const prisma = prismaFactory.get();

    if (startDate > endDate) {
      throw new Error('Start date must be before end date');
    }

    if (halfDay && startDate.getTime() !== endDate.getTime()) {
      throw new Error('Half-day leave must be on the same date');
    }

    const organisation = await timePrisma.organisation.findUnique({
      where: {
        orgId,
      },
      select: { type: true },
    });

    const isEvilOrg = organisation?.type === 'EVIL';

    const currentUser = await prisma.user.findUnique({
      where: { uid: userAuthId },
      select: { id: true },
    });

    const userCategory = await timePrisma.userCategoryLinkUp.findUnique({
      where: { userId: currentUser?.id },
      include: { category: { include: { holidays: true } } },
    });

    if (!userCategory) throw new Error('User category not found');

    const mandatoryHolidayDates = userCategory.category.holidays
      .filter((h) => h.type === 'MANDATORY')
      .map((h) => h.date.toISOString().split('T')[0]);

    let effectiveDays = 0;

    if (halfDay) {
      const isWeekendDay = isWeekend(startDate);
      const isHoliday = mandatoryHolidayDates.includes(startDate.toISOString().split('T')[0]);
      if (isWeekendDay || isHoliday) {
        throw new Error('Cannot apply half-day leave on weekends or holidays');
      }
      effectiveDays = 0.5;
    } else {
        const days = eachDayOfInterval({ start: startDate, end: endDate });
        let workingDays = days.filter((d) => {
          return !isWeekend(d) && !mandatoryHolidayDates.includes(d.toISOString().split('T')[0]);
        });
      
        if (isEvilOrg && days.length === 1) {
          const day = days[0];
          const isFriday = day.getDay() === 5;
          const isMonday = day.getDay() === 1;
      
          if (isFriday || isMonday) {
            // check if sandwich condition applies
            const sandwichDates = isFriday
              ? [day, new Date(day.getTime() + 1 * 86400000), new Date(day.getTime() + 2 * 86400000)]
              : [new Date(day.getTime() - 2 * 86400000), new Date(day.getTime() - 1 * 86400000), day];
      
            // Ensure those are not holidays
            const isSandwich = sandwichDates.every((d) =>
              !mandatoryHolidayDates.includes(d.toISOString().split('T')[0])
            );
      
            if (isSandwich) {
              effectiveDays = 3;
            } else {
              effectiveDays = 1;
            }
          } else {
            effectiveDays = workingDays.length;
          }
        } else {
          effectiveDays = workingDays.length;
        }
      
        if (workingDays.length === 0) {
          throw new Error('No working days to apply leave in the selected range');
        }
      }

    let userLeaveRecord = await timePrisma.userLeaves.findUnique({ where: { userId: currentUser.id } });
    if (!userLeaveRecord) {
      const leavePolicy = await timePrisma.leavePolicy.findUnique({
        where: {
          categoryId: userCategory.category.id
        }
      })
      if(!leavePolicy) throw new Error('Leave policy not found');
      userLeaveRecord = await timePrisma.userLeaves.create({
        data: {
          userId: currentUser.id,
          sickLeaves: leavePolicy.sickLeaves,
          vacationLeaves: leavePolicy.vacationLeaves,
          parentalLeaves: leavePolicy.parentalLeaves,
          maternityLeaves: leavePolicy.maternityLeaves
        }
      })
    }

    const balanceKey = type.toLowerCase() + 'Leaves';
    const currentBalance = userLeaveRecord[balanceKey] as Prisma.Decimal;

    const effectiveDecimal = new Prisma.Decimal(effectiveDays);
    if (currentBalance.lessThan(effectiveDecimal)) {
      throw new Error(`Insufficient ${type.toLowerCase()} leave balance`);
    }

    const existingLeave = await timePrisma.leave.findFirst({
      where: {
        userId: currentUser.id,
        startDate: { lte: endDate },
        endDate: { gte: startDate },
        status: { in: ['PENDING', 'APPROVED'] },
      },
    });

    if (existingLeave) {
      throw new Error('Leave already exists for the selected dates');
    }

    const leave = await timePrisma.leave.create({
      data: {
        userId: currentUser.id,
        type,
        startDate,
        endDate,
        status: 'PENDING',
        message: data.body.message
      },
    });


    await timePrisma.userLeaves.update({
      where: { userId: currentUser.id },
      data: {
        [balanceKey]: currentBalance.sub(effectiveDecimal),
      },
    });

    return {
      success: true,
      message: halfDay ? 'Half-day leave applied successfully' : 'Leave applied successfully',
      id: leave.id,
    };
  },
  async (res, output) => {
    createHTTPResponse(res, 200, output.message, output);
  }
);
