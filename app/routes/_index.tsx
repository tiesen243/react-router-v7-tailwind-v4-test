import { Typography } from '@/components/ui/typography'
import { Post } from './_components/post'

export default () => (
  <main className="container mx-auto flex min-h-dvh max-w-screen-lg flex-col items-center justify-center overflow-x-hidden">
    <div className="pointer-events-none relative flex place-items-center before:absolute before:h-[700px] before:w-[140px] before:translate-x-1 before:translate-y-[-10px] before:rotate-[-32deg] before:rounded-full before:bg-gradient-to-r before:from-[#AB1D1C] before:to-[#E18317] before:opacity-30 before:blur-[100px] before:content-[''] lg:before:h-[700px] lg:before:w-[240px] lg:before:translate-x-[-100px]" />

    <img src="https://tiesen.id.vn/assets/tiesen.png" width={2500} height={400} alt="tiesen" />

    <Typography level="h1" className="text-center text-balance brightness-150">
      A Next.js template with{' '}
      <span className="to-foreground/10 bg-gradient-to-r from-[#3178C6] bg-clip-text text-transparent">
        TypeScript
      </span>
      ,{' '}
      <span className="to-foreground/10 bg-gradient-to-r from-[#06B6D4] bg-clip-text text-transparent">
        Tailwind CSS
      </span>
      ,{' '}
      <span className="to-foreground/10 bg-gradient-to-r from-[#4B32C3] bg-clip-text text-transparent">
        ESLint
      </span>{' '}
      and{' '}
      <span className="to-foreground/10 bg-gradient-to-r from-[#F7B93E] bg-clip-text text-transparent">
        Prettier
      </span>
    </Typography>

    <Post />
  </main>
)
