import { AWSTag, MicrosoftTag, GCPTag, ThirdPartyTag, RWTag, BECTag, PhishingTag, ITTag } from '@/components/shared/tags'

export interface BlogPostProps {
  title: string
  description: string
  author: string
  date: string
  slug: string
  tags: ((props: React.ComponentPropsWithoutRef<'svg'>) => JSX.Element)[]
}

export const CloudPostMetadata = {
  author: 'Rachel Kang',
  date: '2024-05-01',
  title: 'Cloud Case Studies',
  description:
    'Case studies for real-world investigations for cloud platform compromises across AWS, Azure, and GCP. Includes unauthorized accesses to cloud storage buckets and kubernetes clusters, as well as cryptomining incidents.',
  slug: 'cloud-case-study',
  tags: [AWSTag, MicrosoftTag, GCPTag],
}

export const DFIRPostMetadata = {
  author: 'Rachel Kang',
  date: '2024-05-15',
  title: 'DFIR Case Studies',
  description:
    'Case studies for real-world incident response investigations, including third-party supply-chain attacks, ransomware incidents, business email compromises, and insider threat investigations.',
  slug: 'dfir-case-study',
  tags: [BECTag, PhishingTag, RWTag, ThirdPartyTag, ITTag],
}
