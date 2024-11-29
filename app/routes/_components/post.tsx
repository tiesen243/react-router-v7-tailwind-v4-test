import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'
import { api } from '@/lib/api'

export const Post: React.FC = () => {
  const latestPost = api.post.getLatestPost.useQuery()
  const createPost = api.post.createPost.useMutation({ onSuccess: () => latestPost.refetch() })

  return (
    <section className="mt-4 flex flex-col items-start">
      <Typography>
        Latest post:{' '}
        {latestPost.isLoading ? 'Loading...' : (latestPost.data?.title ?? 'No posts yet')}
      </Typography>

      <form
        className="mt-4 flex items-center gap-4"
        onSubmit={(e) => {
          e.preventDefault()
          createPost.mutate({ title: String(new FormData(e.currentTarget).get('title')) })
          e.currentTarget.reset()
        }}
      >
        <Input name="title" placeholder="What's on your mind?" />
        <Button size="sm" disabled={createPost.isPending}>
          Post
        </Button>
      </form>
    </section>
  )
}
