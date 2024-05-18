'use client'

import { Container } from '@/components/shared/container'
import { BlogPost } from '@/components/sections/blogs'
import { formatDate } from '@/lib/config'

export default function ArticleLayout({
  post,
  children,
}: {
  post: BlogPost
  children: React.ReactNode
}) {
  return (
    <Container className="my-16 max-lg:mt-5">
      <div className="max-xl:relative">
        <div className="mx-auto max-w-4xl">
          <header className="flex flex-col">
            <h1 className="my-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 max-sm:text-3xl">
              {post.title}
            </h1>
            <time
              dateTime={post.date}
              className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
            >
              <span className="h-6 w-0.5 rounded-full bg-blue-500/40 dark:bg-blue-300/40" />
              <span className="ml-3">{formatDate(post.date)}</span>
            </time>
          </header>
          <p className="italic text-zinc-600 dark:text-zinc-200">
            {post.description}
          </p>
          <div className="prose dark:prose-invert" data-mdx-content>
            {children}
          </div>
        </div>
      </div>
    </Container>
  )
}
