import { db } from '@/lib/db'
import { Route } from './+types/prisma'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { useFetcher } from 'react-router'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const loader = async ({ }: Route.LoaderArgs) => {
  const posts = await db.post.findMany()
  return { posts }
}

export const action = async ({ request }: Route.ActionArgs) => {
  const formData = await request.formData()
  await new Promise((resolve) => setTimeout(resolve, 1000))
  await db.post.create({
    data: { title: String(formData.get('title')) },
  })
}

export default ({ loaderData }: Route.ComponentProps) => {
  const fetcher = useFetcher()

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        {loaderData.posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>

      <fetcher.Form method="post" className="col-span-2 flex items-center gap-4">
        <Input name="title" />
        <Button size="sm" disabled={fetcher.state === 'submitting'} className='cursor-pointer'>
          Post
        </Button>
      </fetcher.Form>
    </div>
  )
}
