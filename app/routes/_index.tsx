import { Link } from 'react-router'
import type { Route } from './+types/_index'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'

export const loader = async ({}: Route.LoaderArgs) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
  const data = (await res.json()) as Array<{ id: number; title: string; completed: boolean }>
  return {
    data,
  }
}

export default ({ loaderData }: Route.ComponentProps) => (
  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
    {loaderData.data.map((todo) => (
      <Link key={todo.id} to={`/todo/${todo.id}`}>
        <Card className="hover:bg-secondary h-full transition-colors">
          <CardHeader>
            <CardTitle>{todo.title}</CardTitle>
          </CardHeader>
        </Card>
      </Link>
    ))}
  </div>
)
