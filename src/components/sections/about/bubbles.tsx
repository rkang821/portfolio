import {
  MapPin,
  UserIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  BuildingIcon,
} from '@/components/shared/icons'
import {
  type StatsBubbleProps,
  BubbleProps,
  BulletListProps,
} from '@/models/about'

export const statsbubblesData: StatsBubbleProps[] = [
  { Icon: MapPin, text: 'San Francisco, IL' },
  { Icon: UserIcon, text: '28' },
  { Icon: AcademicCapIcon, text: '7+ Certifications' },
  { Icon: BriefcaseIcon, text: '6+ YOE' },
  { Icon: BuildingIcon, text: 'In-Person + Hybrid' },
]

export const ssbubblesData: BubbleProps[] = [
  { text: 'High-Stress Adaptability' },
  { text: 'Cross-Functional Collaboration' },
  { text: 'Creativity + Innovation' },
  { text: 'Continuous Learning + Training' },
  { text: 'Problem-Solving + Analytics' },
]

export const interestbubblesData: BubbleProps[] = [
  { text: 'Microsoft Azure Investigations' },
  { text: 'Cloud Platform Forensics' },
  { text: 'Identify + Access Management' },
  { text: 'Operating System Security' },
  { text: 'Vulnerability Assessment' },
  { text: 'Data Privacy + Compliance' },
]

export const BulletList: React.FC<BulletListProps> = ({ title, data }) => (
  <li className="mb-5 ms-5 w-full max-sm:mb-5">
    <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-zinc-200 bg-blue-500 dark:border-zinc-100 dark:bg-blue-300"></div>
    <h2 className="text-base font-semibold text-zinc-600 dark:text-zinc-200 max-lg:mb-2 max-lg:mt-0 max-sm:ml-1 max-sm:text-left sm:text-lg lg:my-2">
      {title}
    </h2>
    {data.map(({ Icon, text }, index) => (
      <div
        key={index}
        className="flex flex-wrap items-center gap-4 pb-2 max-sm:pb-1"
      >
        {Icon && (
          <Icon className="h-6 w-6 text-blue-500 opacity-70 dark:text-blue-300" />
        )}
        <span className="text-sm text-zinc-700 dark:text-zinc-300 max-sm:text-xs">
          {text}
        </span>
      </div>
    ))}
  </li>
)

export default function BubbleSection() {
  return (
    <ol className="prose relative mt-5 border-l border-blue-500 border-opacity-20 dark:prose-invert dark:border-blue-300 max-lg:mx-auto max-lg:flex max-lg:flex-col max-lg:items-center max-sm:mb-5 max-sm:justify-center lg:basis-1/3">
      <BulletList title="Profile" data={statsbubblesData} />
      <BulletList
        title="Soft Skills"
        data={ssbubblesData.map(({ text }) => ({ text }))}
      />
      <BulletList
        title="High-Level Interests"
        data={interestbubblesData.map(({ text }) => ({ text }))}
      />
    </ol>
  )
}
