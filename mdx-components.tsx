import { type MDXComponents } from 'mdx/types'
import Image, { type ImageProps } from 'next/image'

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    // eslint-disable-next-line
    Image: (props: ImageProps) => <Image {...props} />,
  }
}
