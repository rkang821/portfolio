import Container from '@/components/shared/container'
import Section from '@/components/shared/section'
import { MicrosoftTag, PhishingTag, BECTag, AITag } from '@/components/shared/tags'
import Event from './event'
import CertSection from './certification'

export default function ExperienceSection() {
  const eventSection = (
    <>
      <Section className="space-y-2" title="Publications">
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
      </Section>
      <Section className="space-y-2" title="Speaking Engagements">
        <Event
          href="/documents/20240413_WiCyS_Phishing.pdf"
          title="Phishing 2.0: The Rise of Artifical Intelligence"
          description="Discusses the evolution of phishing attacks as threat actors weaponize artificial intelligence capabilities to broaden the reaches of their phishing campaigns."
          event="WiCyS 2024 - Nashville, TN"
          linkdescription="View Slides"
          tags={[MicrosoftTag, PhishingTag, AITag]}
        />
      </Section>
    </>
  )

  return (
    <>
      <Container className="pb-10 pt-14 max-sm:pt-24">
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
          <div className="flex-auto pl-5 pr-3">{eventSection}</div>
          <div className="w-[22rem] shrink-0 max-lg:w-full">
            <CertSection />
          </div>
        </div>
      </Container>
    </>
  )
}
