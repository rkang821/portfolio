import { type Metadata } from 'next'
import { Container } from '@/components/container'
import Card from '@/components/card'
import Section from '@/components/section'
import { MicrosoftTag, PhishingTag, BECTag, AITag } from '@/components/tags'
import { type BlogWithSlug, getAllBlogs } from '@/lib/blogs'
import { formatDate } from '@/lib/config'

function Blog({ blog }: { blog: BlogWithSlug }) {
  return (
    <div className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/blogs/${blog.slug}`}>{blog.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={blog.date}
          className="md:hidden"
          decorate
        >
          {formatDate(blog.date)}
        </Card.Eyebrow>
        <Card.Description>{blog.description}</Card.Description>
        <Card.LinkDescription href={`/blogs/${blog.slug}`}>
          Read post
        </Card.LinkDescription>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={blog.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(blog.date)}
      </Card.Eyebrow>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'My thoughts',
}

export default async function BlogSection() {
  let blogs = await getAllBlogs()
  return (
    <>
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
            {blogs.map((blog) => (
              <Blog key={blog.slug} blog={blog} />
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}
