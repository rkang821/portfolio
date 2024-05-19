import { type SocialLinkProps } from '@/models/home'
import Link from 'next/link'

export default function SocialLink({ icon: Icon, ...props }: SocialLinkProps) {
  return (
    <Link
      className="group -m-1 p-1"
      {...props}
      target="_blank"
      rel="noreferrer noopener"
    >
      <Icon className="h-7 w-7 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}
