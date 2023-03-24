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

  getLatest: publicProcedure
    .input(
      z.object({
        take: z.number(),
      })
    )
    .query(({ ctx, input }) => {
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
        take: input.take,
      });
    }),

  getCatNews: publicProcedure
    .input(
      z.object({
        cat: z.string(),
        take: z.number(),
        exclude: z.string().optional(),
      })
    )
    .query(({ input, ctx }) => {
      if (input.exclude) {
        return ctx.prisma.post.findMany({
          where: {
            tags: {
              has: input.cat,
            },
            NOT: {
              id: input.exclude,
            },
          },
          orderBy: [
            {
              createAt: "desc",
            },
          ],
          take: input.take,
        });
      }

      return ctx.prisma.post.findMany({
        where: {
          tags: {
            has: input.cat,
          },
        },
        orderBy: [
          {
            createAt: "desc",
          },
        ],
        take: input.take,
      });
    }),

  getOne: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.post.findUnique({ where: { id: input.id } });
    }),
});
