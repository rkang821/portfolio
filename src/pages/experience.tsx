import { type Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/container'
import Section from '@/components/section'
import Card from '@/components/card'
import Button from '@/components/buttons'
import { StaticImageData } from 'next/image'
import { MicrosoftTag, PhishingTag, BECTag, AITag } from '@/components/tags'
import SANSIcon from '/public/images/certs/giaccert.png'
import MicrosoftCertIcon from '/public/images/certs/microsoftcert.png'
import SplunkCert from '/public/images/certs/splunkcert.png'
import { AcademicCapIcon, ArrowDownTray } from '@/components/icons'

//Publications and Speaking Engagements (aka "Event")
function EventLayout({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-2">{children}</div>
    </Section>
  )
}

function Event({
  title,
  description,
  event,
  linkdescription,
  href,
  tags,
}: {
  title: string
  description: string
  event: string
  linkdescription: string
  href: string
  tags: ((props: React.ComponentPropsWithoutRef<'svg'>) => JSX.Element)[]
}) {
  return (
    <Card>
      <Card.Title>{title}</Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.LinkDescription href={href}>{linkdescription}</Card.LinkDescription>
      <Card.Tags>
        {tags.map((Tag, index) => (
          <Tag key={index} />
        ))}
      </Card.Tags>
    </Card>
  )
}

function EventSection() {
  return (
    <>
      <EventLayout title="Publications">
        <Event
          href="https://www.aon.com/cyber-solutions/aon_cyber_labs/the-evolution-of-phishing-campaigns/"
          title="The Evolution of Phishing Campaigns"
          description="Explores emering trends observed in 2023 phishing campaigns, including advanced social engineering tactics across email platforms, a rise in 'phishing-as-a-service' (PhaaS), and shifts from attacks on email platforms to mobile phones."
          event="Aon Cyber Labs"
          linkdescription="Read Article"
          tags={[MicrosoftTag, PhishingTag, BECTag]}
        />
        <Event
          href="https://www.aon.com/cyber-solutions/aon_cyber_labs/microsoft-365-identifying-mailbox-access/"
          title="Microsoft 365: Identifying Mailbox Access"
          description="Discusses various metholodies to accurately quantify mailbox data accessed by malicious actors in the event of a business email compromise. "
          event="Aon Cyber Labs"
          linkdescription="Read Article"
          tags={[MicrosoftTag, BECTag]}
        />
      </EventLayout>
      <EventLayout title="Speaking Engagements">
        <Event
          href="/documents/20240413_WiCyS_Phishing.pdf"
          title="Phishing 2.0: The Rise of Artifical Intelligence"
          description="Discussed the evolution of phishing attacks as threat actors weaponize artificial intelligence capabilities to broaden the reaches of their phishing campaigns."
          event="WiCyS 2024 - Nashville, TN"
          linkdescription="View Slides"
          tags={[MicrosoftTag, PhishingTag, AITag]}
        />
      </EventLayout>
    </>
  )
}

{
  /* -- Certification Section --  */
}
interface Certification {
  certcompany: string
  certname: string
  logo: StaticImageData
  issued: string | { label: string; dateTime: string }
  expired: string | { label: string; dateTime: string }
  link?: string
}

function Cert({ role }: { role: Certification }) {
  const issuedLabel =
    typeof role.issued === 'string' ? role.issued : role.issued.label
  const issuedDate =
    typeof role.issued === 'string' ? role.issued : role.issued.dateTime
  const expiredLabel =
    typeof role.expired === 'string' ? role.expired : role.expired.label
  const expiredDate =
    typeof role.expired === 'string' ? role.expired : role.expired.dateTime

  return (
    <a href={role.link} rel="noopener noreferrer" target="_blank">
      <div>
        <div className="flex gap-4">
          <div className="relative my-2 flex h-9 w-9 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
          </div>

          <dl className="flex flex-auto flex-wrap">
            <dt className="sr-only">Certification Name</dt>
            <dd className="w-full flex-none text-xs text-zinc-900 dark:text-zinc-100">
              {role.certname}
            </dd>

            <dt className="sr-only">Issuing Organization</dt>
            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
              {role.certcompany}
            </dd>

            <dt className="sr-only">Dates Active</dt>
            <dd
              className="ml-auto pb-5 text-xs text-zinc-400 dark:text-zinc-500"
              aria-label={`${issuedLabel} until ${expiredLabel}`}
            >
              <time dateTime={issuedDate}>{issuedLabel}</time>{' '}
              <span aria-hidden="true">—</span>{' '}
              <time dateTime={expiredDate}>{expiredLabel}</time>
            </dd>
          </dl>
        </div>
      </div>
    </a>
  )
}

function CertSection() {
  const cert: Certification[] = [
    {
      certcompany: 'GIAC Certifications',
      certname: 'GIAC Certified Intrusion Analyst (GCIA)',
      logo: SANSIcon,
      issued: 'In Progress',
      expired: {
        label: 'N/A',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      certcompany: 'Microsoft',
      certname: 'Azure Fundamentals (AZ-900)',
      logo: MicrosoftCertIcon,
      issued: 'Feb 2024',
      expired: {
        label: 'N/A',
        dateTime: new Date().getFullYear().toString(),
      },
      link: 'https://learn.microsoft.com/en-us/users/rachelkang-9289/credentials/751b773597a327b9?ref=https%3A%2F%2Fwww.linkedin.com%2F',
    },
    {
      certcompany: 'GIAC Certifications',
      certname: 'GIAC Cloud Forensics Responder (GCFR)',
      logo: SANSIcon,
      issued: 'Apr 2023',
      expired: '2027',
      link: 'https://www.credly.com/badges/4c96c6a6-f46e-4ce0-a32b-af8109e47674',
    },
    {
      certcompany: 'Microsoft + Coursera',
      certname: 'Azure Management Tools + Security Solutions',
      logo: MicrosoftCertIcon,
      issued: 'Jan 2023',
      expired: '2027',
      link: 'https://www.coursera.org/account/accomplishments/certificate/3YFAW8XGFK2N',
    },
    {
      certcompany: 'GIAC Certifications',
      certname: 'GIAC Certified Forensic Analyst (GCFA)',
      logo: SANSIcon,
      issued: 'Mar 2021',
      expired: '2029',
      link: 'https://www.credly.com/badges/31159c6e-23aa-4852-be9c-181553c97afb',
    },
    {
      certcompany: 'GIAC Certifications',
      certname: 'GIAC Certified Forensic Examiner (GCFE)',
      logo: SANSIcon,
      issued: 'Jun 2020',
      expired: '2028',
      link: 'https://www.credly.com/badges/74dc9436-a146-42c3-bfbe-707ac0748ff4',
    },
    {
      certcompany: 'Splunk',
      certname: 'Splunk Certified User',
      logo: SplunkCert,
      issued: 'Aug 2018',
      expired: '2023',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-300 p-5 dark:border-zinc-700/40">
      <h2 className="flex text-base font-semibold text-zinc-600 dark:text-zinc-100 sm:text-lg">
        <AcademicCapIcon className="h-6 w-6 flex-none opacity-50" />
        <span className="ml-3">Certifications</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {cert.map((role, roleIndex) => (
          <Cert key={roleIndex} role={role} />
        ))}
      </ol>
      <Button
        href="/documents/RK_Resume2024.pdf"
        target="_blank"
        rel="noreferrer noopener"
        variant="secondary"
        className="group w-full"
      >
        Download Resume
        <ArrowDownTray className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'My Experience',
  description: 'My experience in the industry',
}

export default function ExperienceSection() {
  return (
    <>
      <Container className="pb-14 pt-14 max-sm:pt-24">
        <div className="prose flex flex-col items-center  gap-6 dark:prose-invert">
          <header>
            <h2>
              <span className="text-blue-500 dark:text-blue-300">{'>'}</span> My
              Experience
            </h2>
            <h3>
              {' '}
              In my investigations, I often encounter fascinating concepts that
              spark my curiosity. Here, you&apos;ll find a rolling collection of
              my written and verbal insights as a subject matter expert, and
              several certifications I&apos;ve pursued to deepen my expertise in
              areas of cybersecurity.
            </h3>
          </header>
        </div>
      </Container>
      <Container>
        <div className="flex max-lg:flex-col">
          <div className="flex-auto sm:pr-5">
            <EventSection />
          </div>
          <div className="w-[25rem] shrink-0 max-lg:w-full ">
            <CertSection />
          </div>
        </div>
      </Container>
    </>
  )
}
