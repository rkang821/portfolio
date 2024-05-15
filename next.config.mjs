import nextMDX from '@next/mdx';

const withMDX = nextMDX({
  extension: /\.mdx?$/
});

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  // other configurations
};

export default withMDX(nextConfig);
