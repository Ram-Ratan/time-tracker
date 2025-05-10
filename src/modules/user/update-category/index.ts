import { createHTTPResponse } from '@talent-monk/utils';
import { createPrivateEndpointWithZod } from '@talent-monk/utils';
import { z } from 'zod';
import { StatusCodes } from 'http-status-codes';
import timePrisma from 'utils/prisma/time-tracker';
import { isManagerOfEmployee } from 'utils/checkManager';
import prismaFactory from 'utils/prisma';
import { EmployeeHandler } from '@talent-monk/client-shared';

export const upsertUserCategoryLinkUpEndpoint = createPrivateEndpointWithZod(
    'UPSERT USER CATEGORY LINKUP',
    z.object({
        body: z.object({
            userId: z.string().uuid(),
            userCategoryId: z.string().uuid(),
        })
    }),
    z.object({
        success: z.boolean(),
        message: z.string(),
    }),
    async (input) => {
        const { userId, userCategoryId } = input.data.body;

        try {

            //check if the logged in user is manager
            const prisma = prismaFactory.get();

            const currentUser = await prisma.user.findUnique({
                where: {
                    uid: input.userAuthId
                },
                select: {
                    id: true
                }
            })


            if (!currentUser) {
                throw new Error('User not found');
            }

            const isManager = await isManagerOfEmployee(currentUser.id, userId);
            if (!isManager) {
                throw new Error('Only manager can update user category');
            }

            const userDetails = await EmployeeHandler.getFieldsDataForOne({
                userId: userId
            })

            console.log(userDetails, 'userDetails');

            await timePrisma.userCategoryLinkUp.upsert({
                where: {
                    userId: userId
                },
                create: {
                    userId: userId,
                    userName: userDetails.fullName.value,
                    categoryId: userCategoryId,
                },
                update: {
                    userName: userDetails.fullName.value,
                    categoryId: userCategoryId,
                }
            });

            return {
                success: true,
                message: 'User category updated successfully',
            };
        } catch (error) {
            console.error('Error updating user category linkup:', error);
            throw new Error('Failed to update user category link');
        }
    },
    async (res, output) => {
        createHTTPResponse(res, StatusCodes.OK, output.message, output);
    }
);
