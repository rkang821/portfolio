import Image from 'next/image'
import SANSIcon from '/public/images/certs/giaccert.png'
import MicrosoftCertIcon from '/public/images/certs/microsoftcert.png'
import SplunkCert from '/public/images/certs/splunkcert.png'
import { AcademicCapIcon, ArrowDownTray } from '../../shared/icons'
import { Button } from '../../shared/buttons'
import { type CertProps } from '@/models/experience'

function Cert({ role }: { role: CertProps }) {
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
              aria-label={`${role.issued}${
                role.expired ? ` until ${role.expired}` : ''
              }`}
            >
              <span>{role.issued}</span>
              {role.expired ? <span>{` — ${role.expired}`}</span> : null}
            </dd>
          </dl>
        </div>
      </div>
    </a>
  )
}

export default function CertSection() {
  const cert: CertProps[] = [
    {
      certcompany: 'GIAC Certifications',
      certname: 'GIAC Certified Intrusion Analyst (GCIA)',
      logo: SANSIcon,
      issued: 'In Progress',
    },
    {
      certcompany: 'Microsoft',
      certname: 'Azure Fundamentals (AZ-900)',
      logo: MicrosoftCertIcon,
      issued: 'Feb 2024',
      expired: '∞',
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
