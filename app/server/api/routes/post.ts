import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '../trpc'

export const postRouter = createTRPCRouter({
  getLatestPost: publicProcedure.query(async ({ ctx }) => {
    const post = ctx.db.post.findFirst({
      orderBy: { createdAt: 'desc' },
    })
    return post ?? null
  }),
  createPost: publicProcedure
    .input(z.object({ title: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.post.create({ data: input })
    }),
})
