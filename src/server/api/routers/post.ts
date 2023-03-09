import { z } from "zod";

import {
    createTRPCRouter,
    publicProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({

    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.post.findMany()
    }),

    getLatest: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.post.findMany({
            orderBy: [{
                createAt: 'desc'
            }],
            take: 10,
        })
    }),

    getOne: publicProcedure
        .input(z.object({ id: z.string() }))
        .query(({ ctx, input }) => {
            return ctx.prisma.post.findUnique({ where: { id: input.id } })
        }),
});