import { Form } from 'react-router'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { api } from '@/lib/api'

export default () => {
  const { data, isLoading, refetch } = api.post.getLatestPost.useQuery()

  const createPost = api.post.createPost.useMutation({ onSuccess: () => refetch() })

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {isLoading ? 'Loading...' : (data?.title ?? 'no post')}

      <Form
        onSubmit={(e) => {
          e.preventDefault()
          createPost.mutate({ title: String(new FormData(e.currentTarget).get('title')) })
          e.currentTarget.reset()
        }}
      >
        <Input name="title" />
        {JSON.stringify(createPost.error?.data, null, 2)}
        <Button type="submit">Post</Button>
      </Form>
    </div>
  )
}
