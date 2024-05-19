import { ComponentType } from 'react'

export interface StatsBubbleProps {
  Icon: ComponentType<React.ComponentPropsWithoutRef<'svg'>>
  text: string
}

export interface BubbleProps {
  text: string
}

export interface BulletListProps {
  title: string
  data: { Icon?: React.ElementType; text: string }[]
}
