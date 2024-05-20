import { type BlogPostProps } from '@/models/blog'
import { cloudCaseStudyMetadata } from './cloud-case-study.mdx'
import { dfirCaseStudyMetadata } from './dfir-case-study.mdx'

const postMetadata: BlogPostProps[] = [
  cloudCaseStudyMetadata,
  dfirCaseStudyMetadata,
]

export default postMetadata
