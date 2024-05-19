import { type BlogPostProps } from '@/models/blog'
import { blog as cloudCaseStudyMetadata } from './cloud-case-study.mdx'
import { blog as dfirCaseStudyMetadata } from './dfir-case-study.mdx'

const postMetadata: BlogPostProps[] = [
  cloudCaseStudyMetadata,
  dfirCaseStudyMetadata,
]

export default postMetadata
