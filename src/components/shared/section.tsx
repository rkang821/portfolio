import { useId } from 'react'

export default function Section({
  title,
  children,
  className,
}: {
  title: string
  children: React.ReactNode
  className: string
}) {
  let id = useId()

  const sectionClass =
    'md:border-l-[0.125rem] md:border-blue-500/40 md:pl-4 md:dark:border-blue-300/40'
  const titleClass =
    'mr-3 text-lg text-center font-bold text-zinc-600 border-b border-blue-500/50 pb-3 mb-3 dark:text-zinc-200 sm:text-base sm:text-start sm:border-none sm:pb-0 sm:mb-0'

  return (
    <section aria-labelledby={id} className={`${sectionClass} ${className}`}>
      <div className="mb-10 flex max-sm:flex-col">
        <h2 id={id} className={titleClass}>
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </section>
  )
}
