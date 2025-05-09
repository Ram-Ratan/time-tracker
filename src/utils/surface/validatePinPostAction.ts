import { createServiceWithZod } from '@talent-monk/utils';
import prismaFactory from 'utils/prisma';
import { z } from 'zod';

export const validatePinPostActionQuery = createServiceWithZod(
    z.object({
        sourceType: z.string(),
        sourceId: z.string(),
        user: z.any(),
        action: z.enum(['pin', 'unpin'])
    }),
    z.any(),
    async ({ sourceType, sourceId, user, action }) => {
        try {
            const prisma = prismaFactory.get();
            switch (sourceType) {
                case 'post': {
                    const post = await prisma.post.findUniqueOrThrow({
                        where: {
                            id: sourceId
                        },
                        select: {
                            sourceType: true,
                            sourceTypeId: true
                        }
                    });

                    if (post?.sourceType === 'COMMUNITY') {
                        if (!post.sourceTypeId) {
                            throw new Error(
                                "This post can't be pinned in a community as no community id found"
                            );
                        }
                        const communityActionMember = await prisma.communityMembers.findUnique({
                            where: {
                                userId_communityId: {
                                    userId: user.id,
                                    communityId: post.sourceTypeId
                                }
                            }
                        });

                        // TODO Will change it to prisma based on the relations in table which is missing as of now

                        const pinnedPostCount: { count: string }[] = await prisma.$queryRaw`
                            SELECT COUNT(*)
                            FROM "PinPost" AS pp
                            INNER JOIN "Post" AS p ON pp."sourceId" = p."id"
                            WHERE p."sourceType" = 'COMMUNITY' AND p."sourceTypeId" = CAST(${post.sourceTypeId} AS UUID)
                            AND pp."isActive" = true
                         `;
                        const count = Number(pinnedPostCount[0]?.count ?? 0);

                        if (!communityActionMember) {
                            throw new Error('The users does not belong to the community');
                        }
                        if (communityActionMember.communityRole !== 'ADMIN') {
                            throw new Error('Only admin are allowed to pin post');
                        }
                        if (count > 2 && action === 'pin') {
                            throw new Error('Only three post can be pinned in a community');
                        }
                    } else {
                        throw new Error('No community found for post to be pinned');
                    }
                    break;
                }
                case 'poll': {
                    const poll = await prisma.poll.findUniqueOrThrow({
                        where: {
                            id: sourceId
                        },
                        select: {
                            sourceTypeId: true
                        }
                    });

                    if (!poll.sourceTypeId) {
                        throw new Error(
                            "This post can't be pinned in a community as no community id found"
                        );
                    }
                    const communityActionMember = await prisma.communityMembers.findUnique({
                        where: {
                            userId_communityId: {
                                userId: user.id,
                                communityId: poll.sourceTypeId
                            }
                        }
                    });

                    // TODO Will change it to prisma based on the relations in table which is missing as of now

                    const pinnedPostCount: { count: string }[] = await prisma.$queryRaw`
                            SELECT COUNT(*)
                            FROM "PinPost" AS pp
                            INNER JOIN "Poll" AS p ON pp."sourceId" = p."id"
                            WHERE p."sourceTypeId" = CAST(${poll.sourceTypeId} AS UUID)
                            AND pp."isActive" = true
                         `;
                    const count = Number(pinnedPostCount[0]?.count ?? 0);

                    if (!communityActionMember) {
                        throw new Error('The users does not belong to the community');
                    }
                    // if (communityActionMember.communityRole !== 'ADMIN') {
                    //     throw new Error('Only admin are allowed to pin post');
                    // }
                    // if (count > 2 && action === 'pin') {
                    //     throw new Error('Only three post can be pinned in a community');
                    // }

                    break;
                }
                default:
                    throw new Error('Invalid membership action!!');
            }
        } catch (error) {
            throw error;
        }
    }
);
