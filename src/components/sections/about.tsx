import Image from 'next/image'
import clsx from 'clsx'
import { Container } from '../shared/container'
import { ComponentType } from 'react'
import image1 from '/public/images/photos/image1.png'
import image2 from '/public/images/photos/image2.png'
import image3 from '/public/images/photos/image3.png'
import image4 from '/public/images/photos/image4.png'
import image5 from '/public/images/photos/image5.png'
import {
  MapPin,
  UserIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  BuildingIcon,
} from '../shared/icons'
import SEO from '@/components/shared/SEO'

export function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', '-rotate-2', 'rotate-2']
  return (
    <div className="py-5 sm:py-10">
      <div className="flex justify-center gap-2 overflow-hidden sm:gap-5">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[10/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AboutSection() {
  interface StatsBubbleProps {
    Icon: ComponentType<React.ComponentPropsWithoutRef<'svg'>>
    text: string
  }

  interface BubbleProps {
    text: string
  }

  interface BulletListProps {
    title: string
    data: { Icon?: React.ElementType; text: string }[]
  }

  const statsbubblesData: StatsBubbleProps[] = [
    { Icon: MapPin, text: 'Chicago, IL' },
    { Icon: UserIcon, text: '26' },
    { Icon: AcademicCapIcon, text: '6+ Certifications' },
    { Icon: BriefcaseIcon, text: '5+ Yrs in Industry' },
    { Icon: BuildingIcon, text: 'Hybrid + Remote' },
  ]

  const ssbubblesData: BubbleProps[] = [
    { text: 'High-Stress Adaptability' },
    { text: 'Cross-Functional Collaboration' },
    { text: 'Creativity + Innovation' },
    { text: 'Continuous Learning + Training' },
    { text: 'Problem-Solving + Analytics' },
  ]

  const interestbubblesData: BubbleProps[] = [
    { text: 'Microsoft Azure Investigations' },
    { text: 'Cloud Platform Forensics' },
    { text: 'Identify + Access Management' },
    { text: 'Operating System Security' },
    { text: 'Vulnerability Assessment' },
    { text: 'Data Privacy + Compliance' },
  ]

  const BulletList: React.FC<BulletListProps> = ({ title, data }) => (
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

  return (
    <>
      <SEO title="About Me" description="Background on my journey to DFIR." />
      <Container className="pt-14 max-sm:pt-24">
        <div className="prose flex flex-col items-center gap-6 dark:prose-invert">
          {/* Top Level Heading */}
          <header>
            <h2>
              <span className="text-blue-500 dark:text-blue-300">{'>'}</span>{' '}
              About Me
            </h2>
            <h3>
              {' '}
              I&apos;m a Digital Forensics + Incident Response Manager at Stroz
              Friedberg, an Aon company. Here&apos;s a bit about my path to how
              I got here today, as well as my interests both inside and outside
              of cybersecurity.
            </h3>
          </header>
        </div>
      </Container>
      <Container>
        <div className="my-4 flex">
          {/* About Me blurb */}
          <div className="flex items-start max-lg:flex-col-reverse">
            <div className="prose ml-10 mr-5 dark:prose-invert *:px-3 *:pt-3 max-sm:mx-2 lg:basis-2/3  lg:pr-5">
              <p>
                My journey in cybersecurity began as a junior cyber associate,
                and through dedication and passion over the last five years,
                I&apos;ve advanced to a DFIR manager.
              </p>
              <p className="border-b border-dashed border-blue-500 border-opacity-50 pb-3 dark:border-blue-300">
                I graduated from{' '}
                <a
                  href="https://www.middlebury.edu/#"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Middlebury College
                </a>{' '}
                in 2019 with a B.A. in <span className="font-semibold">Computer Science</span> and{' '}
                <span className="font-semibold">Political Science</span>. This interdisciplinary
                background laid the foundation for my career, providing me with
                a deep understanding of both{' '}
                <span className="font-semibold">technical intricacies</span> and the broader{' '}
                <span className="font-semibold">socio-political landscape</span> in which they
                operate.
              </p>
              <p>
                At{' '}
                <a
                  href="https://www.aon.com/cyber-solutions"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Stroz Friedberg
                </a>
                , I&apos;m on the frontline of the cyber battlefield, leading
                responses to complex <span className="font-semibold">security incidents</span>,
                conducting <span className="font-semibold">forensics investigations</span>, and
                implementing proactive <span className="font-semibold">risk mitigation</span>{' '}
                measures. When I’m not actively fending off the bad guys, I also
                specialize in preserving, collecting, and analyzing{' '}
                <span className="font-semibold">digital evidence</span>.
              </p>
              <p className="border-b border-dashed border-blue-500 border-opacity-50 pb-3 dark:border-blue-300">
                Outside of the office, you can find me indulging in my other
                passions that keep me energized and inspired. Whether{' '}
                <span className="font-semibold">building</span> the latest LEGO set,{' '}
                <span className="font-semibold">training</span> my Aussie companion Archer, or{' '}
                <span className="font-semibold">coding</span> very amateur things, a balanced
                lifestyle fuels both my personal and professional success.
              </p>
              <p>
                I&apos;m constantly seeking to deepen my understanding of the{' '}
                <span className="font-semibold">ever-evolving</span> cybersecurity landscape and eager
                to connect with like-minded individuals who share my interests.
                Whether it&apos;s delving into the latest cybersecurity trends
                or swapping LEGO-building tips, connect with me to chat more!
              </p>
            </div>
            {/* Timeline */}
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
          </div>
        </div>
      </Container>
      <Photos />
    </>
  )
}
