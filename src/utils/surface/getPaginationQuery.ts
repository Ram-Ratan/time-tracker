export const paginationPrismaQuery = (query: any) => ({
    skip: query.pageIndex && query.pageSize ? query.pageIndex * query.pageSize : undefined,
    take: query.pageSize
});
