import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { env } from "~/env.mjs";

export const postRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany({
      where: {
        tags: {
          // CATEGORY MAIN
          has: env.NEXT_PUBLIC_CAT_MAIN,
        },
      },
    });
  }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany({
      where: {
        tags: {
          // CATEGORY MAIN
          has: env.NEXT_PUBLIC_CAT_MAIN,
        },
      },
      orderBy: [
        {
          createAt: "desc",
        },
      ],
      take: 10,
    });
  }),

  getCat1News: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany({
      where: {
        tags: {
          // CATEGORY 1
          has: env.NEXT_PUBLIC_CAT_1,
        },
      },
      orderBy: [
        {
          createAt: "desc",
        },
      ],
      take: 10,
    });
  }),

  getCat2News: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany({
      where: {
        tags: {
          // CATEGORY 2
          has: env.NEXT_PUBLIC_CAT_2,
        },
      },
      orderBy: [
        {
          createAt: "desc",
        },
      ],
      take: 10,
    });
  }),

  getCat3News: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany({
      where: {
        tags: {
          // CATEGORY 3
          has: env.NEXT_PUBLIC_CAT_3,
        },
      },
      orderBy: [
        {
          createAt: "desc",
        },
      ],
      take: 10,
    });
  }),

  getOne: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.post.findUnique({ where: { id: input.id } });
    }),
});
