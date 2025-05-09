import { z } from 'zod';
import { createPrivateEndpointWithZod } from '@talent-monk/utils';
import { createHTTPResponse } from '@talent-monk/utils';
import { StatusCodes } from 'http-status-codes';
import timePrisma from 'utils/prisma/time-tracker';
import { EmployeeHandler } from '@talent-monk/client-shared';

export const managerLeaveListEndpoint = createPrivateEndpointWithZod(
  'MANAGER LEAVE LIST',
  z.object({
  }),
  z.any(),
  async (input) => {
    try {
        const prisma = new Pri
      const employeesUnderMe = await prisma.employeeFieldData.findMany({
        where: {
            value: user.id,
            field: {
                name: 'reportingManager'
            }
        }
    })

    const empIds = empData.map((emp) => emp.userId);;
    } catch (error) {
      console.error('Leave policy upsert error:', error);
      throw new Error('Failed to upsert leave policy');
    }
  },
  async (res, output) => {
    createHTTPResponse(res, StatusCodes.OK, output.message, output);
  }
);
