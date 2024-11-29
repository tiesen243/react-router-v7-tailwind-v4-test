import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'

export const postRouter = createTRPCRouter({
  hello: publicProcedure.query(async () => {
    return 'Hello World'
  }),

  getLatestPost: publicProcedure.query(async ({ ctx }) => {
    const post = await ctx.db.post.findFirst({
      orderBy: { createdAt: 'desc' },
    })

    return post ?? null
  }),

  createPost: publicProcedure
    .input(z.object({ title: z.string().min(1) }))
    .mutation(async ({ input, ctx }) => {
      return await ctx.db.post.create({ data: input })
    }),
})
