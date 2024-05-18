import { Container } from '../shared/container'
import Card from '../shared/card'
import { formatDate } from '../../lib/config'
import SEO from '@/components/shared/SEO'
import { blog as cloudCaseStudy } from '@/pages/blogs/cloud-case-study.mdx'
import { blog as dfirCaseStudy } from '@/pages/blogs/dfir-case-study.mdx'

export interface BlogPost {
  title: string
  description: string
  author: string
  date: string
  slug: string
}

export const blogPosts: BlogPost[] = [cloudCaseStudy, dfirCaseStudy]

export function Blog({ post }: { post: BlogPost }) {
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
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={post.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(post.date)}
      </Card.Eyebrow>
    </div>
  )
}

export default function BlogSection() {
  return (
    <>
      <SEO title="My Blogs" description="My thoughts" />
      <Container className="pb-14 pt-14 max-sm:pt-24">
        <div className="prose flex flex-col items-center  gap-6 dark:prose-invert">
          <header>
            <h2>
              <span className="text-blue-500 dark:text-blue-300">{'>'}</span>{' '}
              Blog Posts
            </h2>
            <h3>
              {' '}
              Dive into my ongoing collection of reflections and narratives,
              where I share real-world experiences, lessons learned from various
              cases, and my evolving thoughts on the dynamic field of incident
              response. This section serves as a living diary of my journey and
              discoveries in the realm of DFIR.
            </h3>
          </header>
        </div>
      </Container>
      <Container>
        <div className="md:ml-5 md:border-l-[0.125rem] md:border-blue-500/40 md:pl-5 md:dark:border-blue-300/40">
          <div className="flex max-w-3xl flex-col space-y-10">
            {blogPosts.map((post) => (
              <Blog key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}
