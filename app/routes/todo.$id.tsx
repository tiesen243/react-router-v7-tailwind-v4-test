import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Route } from './+types/todo.$id'

export const loader = async ({ params }: Route.LoaderArgs) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
  const data = (await res.json()) as { id: number; title: string; completed: boolean }
  return { data }
}

export default ({ loaderData }: Route.ComponentProps) => (
  <Card>
    <CardHeader>
      <CardTitle>{loaderData.data.title}</CardTitle>
      <CardDescription>
        Statis: {loaderData.data.completed ? 'Completed' : 'Uncomplete'}
      </CardDescription>
    </CardHeader>
  </Card>
)
