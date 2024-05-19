import Card from '@/components/shared/card'
import { type BlogPostProps } from '@/models/blog'
import { formatDate } from '@/lib/config'
import postMetadata from '@/pages/blogs/index'

export function BlogPost({ post }: { post: BlogPostProps }) {
  return (
    <div className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/blogs/${post.slug}`}>{post.title}</Card.Title>

        <Card.Eyebrow
          as="time"
          dateTime={post.date}
          className="md:hidden"
          decorate
        >
          {formatDate(post.date)}
        </Card.Eyebrow>
        <Card.Description>{post.description}</Card.Description>
        <Card.LinkDescription
          href={`/blogs/${encodeURIComponent(post.slug)}`}
          target="_self"
        >
          Read post
        </Card.LinkDescription>
        <Card.Tags>
          {post.tags.map((Tag, index) => (
            <Tag key={index} />
          ))}
        </Card.Tags>
      </Card>

      <Card.Eyebrow
        as="time"
        dateTime={post.date}
        className="mt-1 hidden md:block"
      >
        <span className="hidden h-3 w-3 rounded-full border border-zinc-200 bg-blue-500 dark:border-zinc-100 dark:bg-blue-300 md:absolute md:-ml-[26.5px] md:mt-[6px] md:block"></span>
        {formatDate(post.date)}
      </Card.Eyebrow>
    </div>
  )
}

export default function BlogPostList() {
  return (
    <div className="md:ml-5 md:border-l-[0.125rem] md:border-blue-500/40 md:pl-5 md:dark:border-blue-300/40">
      <div className="flex max-w-3xl flex-col space-y-10">
        {postMetadata.map((post) => (
          <BlogPost key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
