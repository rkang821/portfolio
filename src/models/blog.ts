export interface BlogPostProps {
  title: string
  description: string
  author: string
  date: string
  slug: string
  tags: ((props: React.ComponentPropsWithoutRef<'svg'>) => JSX.Element)[]
}
