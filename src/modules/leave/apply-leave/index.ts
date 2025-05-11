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
    try {
    const { type, startDate, endDate, message, halfDay } = data.body;

    const prisma = prismaFactory.get();

    if (startDate > endDate) {
      throw new Error('Start date must be before end date');
    }

    if (halfDay && startDate.getTime() !== endDate.getTime()) {
      throw new Error('Half-day leave must be on the same date');
    }

    const organisation = await timePrisma.organisation.findUnique({
      where: { orgId },
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

    const appliedOptionalHoliday = await timePrisma.userHoliday.findMany({
      where: {
        userId: currentUser.id,
      },
      include: {
        holiday: true
      }
    });

    const approvedLeaves = await timePrisma.leave.findMany({
      where: {
        userId: currentUser.id,
        status: 'APPROVED',
        startDate: { lte: endDate },
        endDate: { gte: startDate },
      },
    });

    const approvedLeavesDates = approvedLeaves.map((l) => {
      const leaveDays = eachDayOfInterval({
        start: l.startDate,
        end: l.endDate,
      });
      return leaveDays.map((d) => d.toISOString().split('T')[0]);
    });

    const appliedOptionalHolidayDates = appliedOptionalHoliday.map((h) => h.holiday.date.toISOString().split('T')[0]);

    let effectiveDays = 0;

    if (halfDay) {
      const isWeekendDay = isWeekend(startDate);
      const isHoliday = mandatoryHolidayDates.includes(startDate.toISOString().split('T')[0]);
      const isAppliedOptionalHoliday = appliedOptionalHolidayDates.includes(startDate.toISOString().split('T')[0]);
      const isApprovedLeave = approvedLeavesDates.includes(startDate.toISOString().split('T')[0]);
      if (isAppliedOptionalHoliday) {
        throw new Error('You have already applied for this optional holiday')
      }
      if (isApprovedLeave) {
        throw new Error('You have already applied for this leave')
      }
      if (isWeekendDay || isHoliday) {
        throw new Error('Cannot apply half-day leave on weekends or holidays');
      }
      effectiveDays = 0.5;
    } else {
      const days = eachDayOfInterval({ start: startDate, end: endDate });
      let nonWorkingDaysWeekdays = days.filter((d) => {
        return mandatoryHolidayDates.includes(d.toISOString().split('T')[0]) || appliedOptionalHolidayDates.includes(d.toISOString().split('T')[0]) || approvedLeavesDates.includes(d.toISOString().split('T')[0]);
      });

      let weekendDays = days.filter((d) => {
        return isWeekend(d);
      });

      console.log(days, 'days');
      console.log(weekendDays, 'weekendDays')

      // Exclude days from approved overlapping leaves
      const overlappingApprovedLeaves = await timePrisma.leave.findMany({
        where: {
          userId: currentUser.id,
          status: 'APPROVED',
          startDate: { lte: endDate },
          endDate: { gte: startDate },
        },
      });

      const excludedDays = new Set<string>();
      for (const leave of overlappingApprovedLeaves) {
        const leaveDays = eachDayOfInterval({
          start: leave.startDate,
          end: leave.endDate,
        });
        leaveDays.forEach(day => {
          excludedDays.add(day.toISOString().split('T')[0]);
        });
      }

      for (const day of nonWorkingDaysWeekdays) {
        excludedDays.add(day.toISOString().split('T')[0]);
      }

      if (isEvilOrg) {
        // sandwich leaves are there
        effectiveDays = days.length - excludedDays.size;

      } else {
        weekendDays.forEach(day => {
          excludedDays.add(day.toISOString().split('T')[0]);
        });
        effectiveDays = days.length - excludedDays.size;
      }

      if (effectiveDays === 0) {
        throw new Error('No available working days after excluding approved leaves');
      }
    }

    let userLeaveRecord = await timePrisma.userLeaves.findUnique({
      where: { userId: currentUser.id }
    });

    if (!userLeaveRecord) {
      const leavePolicy = await timePrisma.leavePolicy.findUnique({
        where: { categoryId: userCategory.category.id }
      });
      if (!leavePolicy) throw new Error('Leave policy not found');

      userLeaveRecord = await timePrisma.userLeaves.create({
        data: {
          userId: currentUser.id,
          sickLeaves: leavePolicy.sickLeaves,
          vacationLeaves: leavePolicy.vacationLeaves,
          parentalLeaves: leavePolicy.parentalLeaves,
          maternityLeaves: leavePolicy.maternityLeaves
        }
      });
    }

    const balanceKey = `${type.toLowerCase()}Leaves`;
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
        status: 'PENDING', // Only check for pending overlaps
      },
    });

    if (existingLeave) {
      throw new Error('Pending leave already exists for these dates');
    }

    let leave;

    try {
      leave = await timePrisma.leave.create({
        data: {
          userId: currentUser.id,
          type,
          startDate,
          endDate,
          status: 'PENDING',
          message,
          effectiveDays: effectiveDecimal,
        },
      });
    } catch (error) {
      console.error(error);
      throw new Error('Failed to create leave');
    }

    return {
      success: true,
      message: halfDay ? 'Half-day leave applied successfully' : 'Leave applied successfully',
      id: leave.id,
    };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: error.message,
      };
    }
  },
  async (res, output) => {
    createHTTPResponse(res, 200, output.message, output);
  }
);
