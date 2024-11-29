import { fetchRequestHandler } from '@trpc/server/adapters/fetch'

import type { Route } from './+types/api.trpc.$'
import { appRouter } from '@/server/api/root'
import { createTRPCContext } from '@/server/api/trpc'

const handler = (args: Route.LoaderArgs | Route.ActionArgs) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req: args.request,
    createContext: createTRPCContext,
    router: appRouter,
  })

export const loader = (agrs: Route.LoaderArgs) => handler(agrs)
export const action = (agrs: Route.ActionArgs) => handler(agrs)
