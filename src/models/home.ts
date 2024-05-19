import React from 'react'
import Link from 'next/link'

export interface SocialLinkProps
  extends React.ComponentPropsWithoutRef<typeof Link> {
  icon: React.ComponentType<{ className?: string }>
}
