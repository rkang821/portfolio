// import nextMDX from '@next/mdx'
import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  // other configurations
}

export default withMDX(nextConfig)
