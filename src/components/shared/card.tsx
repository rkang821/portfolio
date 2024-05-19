import Link from 'next/link'
import clsx from 'clsx'
import { ChevronRightIcon } from './icons'

export default function Card<T extends React.ElementType = 'div'>({
  as,
  className,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className'> & {
  as?: T
  className?: string
}) {
  let Component = as ?? 'div'

  return (
    <Component
      className={clsx(
        className,
        'group relative flex flex-col items-start rounded-2xl px-5 pb-5 pt-3 transition hover:bg-zinc-300/50 dark:hover:bg-zinc-800/50',
      )}
    >
      {children}
    </Component>
  )
}

Card.Link = function CardLink({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
  return <Link {...props}>{children}</Link>
}

Card.Title = function CardTitle<T extends React.ElementType = 'h2'>({
  as,
  href,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'href'> & {
  as?: T
  href?: string
}) {
  let Component = as ?? 'h2'
  return (
    <Component className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 max-sm:text-lg">
      {children}
    </Component>
  )
}

Card.Description = function CardDescription({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{children}</p>
  )
}

Card.LinkDescription = function CardLinkDescription({
  href,
  target,
  children,
}: {
  href: string
  target: string
  children: React.ReactNode
}) {
  return (
    <Card.Link
      href={href}
      target={target ?? '_blank'}
      rel="noreferrer noopener"
    >
      <div
        aria-hidden="true"
        className="mt-2 flex items-center text-sm font-medium text-blue-500 dark:text-blue-300"
      >
        {children}
        <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
      </div>
    </Card.Link>
  )
}

Card.Tags = function CardTags({ children }: { children: JSX.Element[] }) {
  return (
    <p className="my-2 flex flex-wrap text-sm text-zinc-600 dark:text-zinc-400">
      {children.map((child, index) => (
        <span key={index} className="mb-1 mr-2">
          {child}
        </span>
      ))}
    </p>
  )
}

Card.Eyebrow = function CardEyebrow<T extends React.ElementType = 'p'>({
  as,
  decorate = false,
  className,
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'decorate'> & {
  as?: T
  decorate?: boolean
}) {
  let Component = as ?? 'p'

  return (
    <Component
      className={clsx(
        className,
        'relative order-first mb-2 flex items-center text-sm text-zinc-400 dark:text-zinc-500',
        decorate && 'pl-3.5',
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
        </span>
      )}
      {children}
    </Component>
  )
}
