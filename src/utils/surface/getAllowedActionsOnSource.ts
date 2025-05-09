import { createServiceWithZod } from '@talent-monk/utils';
import prismaFactory from 'utils/prisma';
import { z } from 'zod';

export const getAllowedActionsOnSourceQuery = createServiceWithZod(
    z.object({
        sourceId: z.string(),
        sourceType: z.enum(['post', 'announcement', 'praise', 'nominate', 'celebrate', 'poll'])
    }),
    z.object({
        canLike: z.boolean(),
        canShare: z.boolean(),
        canComment: z.boolean(),
        canSave: z.boolean()
    }),
    async ({ sourceId, sourceType }) => {
        try {
            const prisma = prismaFactory.get();

            let source: any;
            if (sourceType === 'post') {
                source = await prisma.post.findUniqueOrThrow({
                    where: {
                        id: sourceId
                    },
                    select: {
                        allowedAction: {
                            select: {
                                value: true
                            }
                        }
                    }
                });
            } else if (sourceType === 'announcement') {
                source = await prisma.announcement.findUniqueOrThrow({
                    where: {
                        id: sourceId
                    },
                    select: {
                        allowedAction: {
                            select: {
                                value: true
                            }
                        }
                    }
                });
            } else if (sourceType === 'poll') {
                source = await prisma.poll.findUniqueOrThrow({
                    where: {
                        id: sourceId
                    },
                    select: {
                        allowedAction: {
                            select: {
                                value: true
                            }
                        }
                    }
                });
            } else source = { allowedAction: { value: 'like/share/comment/save' } };

            const allowedActionValue = source.allowedAction.value;

            return {
                canLike: allowedActionValue.includes('like'),
                canShare: allowedActionValue.includes('share'),
                canComment: allowedActionValue.includes('comment'),
                canSave: allowedActionValue.includes('save')
            };
        } catch (error) {
            throw error;
        }
    }
);
