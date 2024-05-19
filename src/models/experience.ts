import { StaticImageData } from 'next/image'

export interface EventProps {
  title: string
  description: string
  event: string
  linkdescription: string
  href: string
  tags: ((props: React.ComponentPropsWithoutRef<'svg'>) => JSX.Element)[]
}

export interface CertProps {
  certcompany: string
  certname: string
  logo: StaticImageData
  issued: string
  expired?: string
  link?: string
}
