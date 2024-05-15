import dfirdark from '/public/images/DFIRPost-SANS_dark.png'
import dfirlight from '/public/images/DFIRPost-SANS_light.png'
import Image from 'next/image'
import {
  MicrosoftTag,
  AWSTag,
  GCPTag,
  PhishingTag,
  BECTag,
  APTTag,
  RWTag,
  ITTag,
} from '@/components/tags'
import { StarIcon } from '@/components/icons'

//DFIR Overview
export function DFIRPost() {
  return (
    <div className="prose dark:prose-invert">
      <h4 className="border-l-2 border-zinc-600 border-opacity-50 pl-3">
        {'DF vs IR'}
      </h4>
      <p>
        <strong>Digital Forensics and Incident Response</strong> (DFIR) is a
        highly specialized branch of cybersecurity that combines the
        investigative and analytical aspects of digital forensics with the
        proactive and reactive measures of incident response. It aims to provide
        a comprehensive approach to cybersecurity, enabling organizations to
        effectively detect, investigate, and respond to cyber threats and
        incidents. Both DF and IR play crucial roles in cybersecurity,
        complementing each other to ensure effective incident management and
        response.
      </p>
      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1 max-sm:gap-0">
        <div>
          <h5>
            <strong>Digital Forensics (DF):</strong>
          </h5>
          <ul>
            <li>
              Digital forensics involves the collection, preservation, analysis,
              and presentation of digital evidence to investigate cybercrimes or
              security incidents.{' '}
            </li>
            <li>
              It focuses on uncovering and understanding past events by
              examining digital artifacts such as files, logs, metadata, and
              network traffic.
            </li>
            <li>
              Digital forensics techniques are used to identify evidence of
              malicious activity, track the actions of threat actors, and
              support legal proceedings or internal investigations.
            </li>
          </ul>
        </div>
        <div>
          <h5>
            <strong>Incident Response (IR):</strong>
          </h5>
          <ul>
            <li>
              Incident response is the process of detecting, analyzing, and
              responding to cybersecurity incidents in real-time to minimize
              their impact and restore normal operations.{' '}
            </li>
            <li>
              It involves the coordinated effort of identifying security
              breaches, containing the incident, eradicating threats, and
              recovering affected systems or data.
            </li>
            <li>
              Incident response teams follow predefined procedures and use tools
              and technologies to effectively manage security incidents,
              mitigate risks, and prevent future incidents.
            </li>
          </ul>
        </div>
      </div>
      <p>
        Although they might be referred to as separate practices, DF and IR work
        together to help answer the following questions after a security
        incident:
      </p>
      <ol className="ml-5">
        <li>
          {' '}
          Who <strong>caused</strong> this incident?{' '}
        </li>
        <li>
          {' '}
          What is the <strong>full scope</strong> and <strong>impact</strong> of
          the compromise?{' '}
        </li>
        <li>
          {' '}
          How did the attacker <strong>get in</strong>?{' '}
        </li>
        <li>
          {' '}
          How did the attacker <strong>escalate</strong> their operation? (ex.
          Credential theft, lateral movement, etc.){' '}
        </li>
        <li>
          {' '}
          Did the attacker obtain access to any{' '}
          <strong>sensitive data/PII/PHI</strong>? (ex. Data exfiltration){' '}
        </li>
        <li>
          {' '}
          How do we ensure a <strong>similar incident</strong> won’t happen
          again?{' '}
        </li>
        <li>
          {' '}
          How do we <strong>remediate</strong> and <strong>restore</strong> the
          business back to operation?{' '}
        </li>
      </ol>

      <h4 className="border-l-2 border-zinc-600 border-opacity-50 pl-3">
        {'IR Frameworks'}
      </h4>
      <p>
        On a day-to-day basis, I lead the response to a security incident or
        data breach, coordinating and overseeing all facets of the incident
        response effort. But of course, no two responses will be the same. Each
        investigation entails a unique and tailored approach in the IR plan,
        depending on the scope and severity of the incident. Below is a popular
        6-step IR framework developed by{' '}
        <a
          href="https://www.sans.org/white-papers/33901/"
          target="_blank"
          rel="noreferrer noopener"
        >
          SANS
        </a>{' '}
        that I use often in my investigations:
      </p>
      <Image
        src={dfirlight}
        alt=""
        className="-my-12 -mb-20 dark:hidden max-sm:my-2 max-sm:-ml-1"
        unoptimized
      />
      <Image
        src={dfirdark}
        alt=""
        className="-my-12 -mb-20 hidden dark:block max-sm:my-2 max-sm:-ml-1"
        unoptimized
      />
      <p>
        {' '}
        Another popular framework is offered by{' '}
        <a
          href="https://www.nist.gov/cyberframework"
          target="_blank"
          rel="noreferrer noopener"
        >
          National Institute of Standards and Technology (NIST)
        </a>
        , which entails a shorter, but nearly identical process. Additionally,
        huge shoutout to{' '}
        <a
          href="https://attack.mitre.org/"
          target="_blank"
          rel="noreferrer noopener"
        >
          MITRE ATT&CK
        </a>
        . This curated knowledge base and model for cyber adversary behavior
        reflects the various phases of an adversary&apos;s lifecycle and the
        platforms they&apos;re known to target.
      </p>

      <h4 className="border-l-2 border-zinc-600 border-opacity-50 pl-3">
        {'Considerations for IR work '}
      </h4>
      <p>
        Proliferation of cyberattacks and data breaches make DFIR more essential
        than ever. While success in cybersecurity requires a certain level of
        technical prowess, the strongest incident responders possess a diverse
        skill set that goes beyond textbook knowledge.
      </p>
      <ul>
        <li>
          <strong>Navigating High-Stress Environments</strong>: I operate in a
          high-stress environment characterized by time-sensitive and critical
          situations. Managing multiple incidents simultaneously and making
          quick decisions under pressure are challenges I encounter daily.
          Additionally, conducting risk assessments to proioritize incident
          response efforts based on potential impact is a critical first step to
          navigate an active situation.
        </li>
        <li>
          <strong>Leadership in Incident Response</strong>: Leading a team of
          skilled professionals is crucial for orchestrating an effective
          response to security incidents. From identifying and containing
          threats to implementing remediation measures, I orchestrate the
          response with precision and efficiency, ensuring that every incident
          is comprehensively addressed to minimize damage and maintain
          operational continuity.{' '}
        </li>
        <li>
          <strong>Fostering Cross-Functional Collaboration</strong>: A
          comprehensive response to an incident requires collaborating closely
          with cross-functional teams, including IT, legal, and law enforcement.
          Additionally, providing regular updates to executive leadership, board
          members, and external stakeholders is necessary. By fostering
          collaboration and information sharing, I ensure seamless coordination
          and communication throughout the incident response process.
        </li>
        <li>
          <strong>Continuous Learning and Improvement Initiatives</strong>: In a
          constantly evolving threat landscape, staying vigilant and proactive
          is essential. I invest in ongoing training, adopt emerging
          technologies, and implement best practices to stay ahead of cyber
          adversaries and maintain a resilient security posture.{' '}
        </li>
      </ul>
    </div>
  )
}

export function CloudIRPost() {
  return (
    <div className="prose dark:prose-invert">
      <h4 className="border-l-2 border-zinc-600 border-opacity-50 pl-3">
        {'Cloud IR'}
      </h4>
      <p>
        Cloud Incident Response is an emerging and booming subset of IR that
        refers to responding to security incidents that occur within cloud
        environments, such as across cloud infrastructure, platforms, or
        services.
      </p>
      <p>
        Cloud IR requires a deep understanding of cloud computing architectures,
        security controls, and compliance requirements, along with proficiency
        in traditional DFIR methodologies adapted to the cloud environment.
        Effective cloud IR strategies prioritize proactive threat detection,
        rapid incident triage, and coordinated response efforts between cloud
        customers, cloud service providers (CSPs), and other stakeholders.
      </p>
      <h5>What&apos;s Changing? </h5>
      <p>
        {' '}
        Cloud-based incidents are reshaping traditional DFIR work by
        necessitating a shift in investigative practices, tools, and expertise
        to effectively address the complexities of cloud environments and
        mitigate its risks. Organizations and DFIR practitioners must adapt and
        evolve their approaches to keep pace with the changing landscape of
        cybersecurity in the cloud.
      </p>
      <ol>
        <li>
          {' '}
          <strong>Shift in Data Sources</strong>: Traditional DFIR
          investigations relied heavily on data collected from on-premises
          systems, such as servers, workstations, and network logs. With the
          adoption of cloud services, investigators now need to collect and
          analyze data from cloud platforms, APIs, logs, and audit trails
          provided by CSPs.
        </li>
        <li>
          <strong>Complexity of Investigations</strong>: Cloud-based incidents
          introduce additional complexity to DFIR investigations due to the
          distributed nature of cloud environments, shared responsibility
          models, and multi-tenant architectures. Investigating incidents
          involving cloud services requires coordination and collaboration
          between the cloud customer, CSPs, and potentially other third-party
          service providers. This complexity can impact the speed and efficiency
          of incident response efforts.
        </li>
        <li>
          <strong>Challenges in Data Collection and Preservation</strong>:
          Collecting and preserving digital evidence in cloud environments
          presents unique challenges compared to traditional on-premises
          systems. Cloud-based data may be dispersed across multiple geographic
          regions, stored in shared storage systems, or subject to automated
          data lifecycle management by CSPs. Ensuring the integrity and
          admissibility of digital evidence collected from cloud environments
          requires specialized techniques and tools tailored to cloud forensics.
        </li>
        <li>
          <strong>Adaptation of Investigative Techniques</strong>: Investigators
          need to adapt their investigative techniques and methodologies to
          address the nuances of cloud-based incidents. This includes
          understanding cloud-specific artifacts, logging mechanisms, encryption
          practices, and access controls implemented by CSPs. Traditional DFIR
          methodologies may need to be modified or supplemented with
          cloud-specific approaches to effectively investigate incidents in
          cloud environments (i.e., lateral movement)
        </li>
        <li>
          <strong>Integration with Cloud Security Tools</strong>: Cloud-based
          incidents necessitate the integration of traditional DFIR workflows
          with cloud-native security tools and technologies. This includes
          leveraging CSP-provided security services, such as cloud monitoring,
          threat detection, and incident response automation. Integrating these
          tools into DFIR workflows enables faster detection, analysis, and
          response to cloud-based threats and security incidents.
        </li>
      </ol>
      <h4 className="border-l-2 border-zinc-600 border-opacity-50 pl-3">
        {'Case Studies'}
      </h4>
      <div>
        <h5>
          Microsoft Azure <MicrosoftTag />
        </h5>
        <p></p>
        <h5>
          Google Cloud Platform <GCPTag />
        </h5>
        <p></p>
        <h5>
          Amazon Web Services <AWSTag />
        </h5>
        <p></p>
        <h5>
          Multi-Cloud Compromise <MicrosoftTag />
          <GCPTag />
          <AWSTag />
        </h5>
        <p></p>
      </div>
    </div>
  )
}

//Incident Types Post
export function ITPost() {
  return (
    <div className="prose dark:prose-invert">
      <h4 className="border-l-2 border-zinc-600 border-opacity-50 pl-3">
        {'Incident Types'}
      </h4>
      <p>
        While I have experience leading and conducting all types of DF and IR
        incidents, lately I&apos;ve been spending more of my time leading
        fast-paced, complex IR cases that involve at least one or more
        compromises within a cloud platform. That being said, below are a list
        of the the different types of DF and IR cases I have experience leading,
        with examples of real-world experiences.
      </p>

      <h5>{'Types of Digital Forensics Cases'}</h5>
      <ul>
        <li>
          {' '}
          <strong>Data Breach Investigation</strong>: Investigating unauthorized
          access to sensitive data, such as customer records or financial
          information, to determine the extent of the breach and identify the
          responsible party.
        </li>
        <li>
          {' '}
          <strong>Intellectual Property Theft</strong>: Analyzing digital
          evidence to uncover instances of intellectual property theft, such as
          trade secrets, patents, or proprietary information stolen by insiders
          or external adversaries.
        </li>
        <li>
          {' '}
          <strong>Employee Misconduct</strong>: Examining digital devices and
          communications to gather evidence of employee misconduct, including
          unauthorized access to company resources, data theft, or policy
          violations. Also includes departed employees{' '}
        </li>
        <li>
          {' '}
          <strong>Fraud Investigations</strong>: Investigating digital evidence
          related to financial fraud, identity theft, or online scams to
          identify perpetrators, trace fraudulent transactions, and gather
          evidence for legal proceedings.
        </li>
      </ul>
      <h5>{'Types of Incident Response Cases'}</h5>
      <ul>
        <li>
          {' '}
          <strong>Advanced Persistent Threat (APT)</strong>: Sophisticated,
          often long-term cyberattack orchestrated by well-funded and highly
          skilled threat actors, such as nation-states (China, Russia, North
          Korea) or organized cybercriminal groups. APT attacks are
          characterized by their stealthy, long-term nature, where attackers
          gain unauthorized access to target networks or systems, remain
          undetected for extended periods, and exfiltrate sensitive information
          or disrupt operations.
        </li>
        <li>
          {' '}
          <strong>Ransomwares</strong>: Designed to encrypt files or block
          access to computer systems until a ransom is paid by the victim.
          Ransomware attacks often involve threat actors encrypting critical
          data on infected devices and demanding payment, usually in
          cryptocurrency, in exchange for a decryption key to restore access.
          Some groups operate shame sites to leak exfiltrated data for victims
          who don&apos;t pay within an alotted timeframe. Ransomwares can affect
          industries and companies of all shapes and sizes, ranging from
          enterprise organizations to even local mom-and-pop shops.{' '}
        </li>
        <li>
          {' '}
          <strong> Business Email Compromise (BEC)</strong>: Cyberattack where
          threat actors gain unauthorized access to a business email account,
          typically through phishing or social engineering tactics, and use it
          to conduct fraudulent activities. BEC attacks can take various forms,
          including email spoofing, invoice fraud, and CEO impersonation, with
          the goal of tricking employees into transferring funds, disclosing
          sensitive information, or initiating unauthorized transactions.{' '}
        </li>
        <li>
          {' '}
          <strong>Supply chain attack</strong>: Cyberattack where attackers
          compromise or gain unauthorized access to a company&apos;s
          system/network by targeting vulnerabilities in the supply chain of an
          organization. Also known as “value-chain” or “third-party” attacks.
          Supply chain attacks often involve exploiting weaknesses in
          third-party vendors, contractors, or service providers to infiltrate
          the target organization&apos;s infrastructure and carry out malicious
          activities, such as data theft, espionage, or sabotage.{' '}
        </li>
        <li>
          {' '}
          <strong>Insider threat</strong>: Refers to the risk posed to an
          organization&apos;s security and data integrity by individuals within
          the organization who misuse their access privileges or intentionally
          engage in malicious activities. Insider threats can include current or
          former employees, contractors, or business partners who exploit their
          insider knowledge and access to commit fraud, data theft, sabotage, or
          espionage against the organization. Insider threats can be
          unintentional, such as negligence or accidental data breaches, or
          deliberate, involving malicious intent.
        </li>
      </ul>
      <h4 className="border-l-2 border-zinc-600 border-opacity-50 pl-3">
        {'Case Studies'}
      </h4>
      <div>
        <h5>
          Advanced Persistent Threat (APT) <APTTag />
        </h5>
        <p></p>
        <h5>
          Ransomware <RWTag />
        </h5>
        <p></p>
        <h5>
          Business Email Compromise <BECTag /> <PhishingTag />
        </h5>
        <p></p>
        <h5>
          Insider Threat <ITTag />
        </h5>
      </div>
    </div>
  )
}

//DFIR Toolkit Overview
export function TKPost() {
  return (
    <div className="prose dark:prose-invert">
      <h4 className="border-l-2 border-zinc-600 border-opacity-50 pl-3">
        {'DFIR Toolkit'}
      </h4>
      <p>
        DFIR is a massive industry with new tools and platforms emerging as the
        needs change and evolve. While there are many out there, here’s some
        that I use regularly through my investigations.
      </p>
      <h5>{'Forensic Preservation Tools'}</h5>
      <ul>
        <li>
          <a
            href="https://www.logicube.com/knowledgebase/forensic-falcon/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            Logicube Forensic Falcon{' '}
          </a>{' '}
          <StarIcon /> – A standalone forensics device used for various
          functions such as data acquisition, encryption/verification, and hard
          drive formatting.{' '}
        </li>
        <li>
          <a
            href="https://www.exterro.com/digital-forensics-software/ftk-imager"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            AccessData FTK Imager{' '}
          </a>{' '}
          <StarIcon /> – A free forensic tool used for collecting live content
          on machines and network shares, as well as forensic imaging of files,
          folders, partitions, and physical devices. FTK Imager can also acquire
          live memory and paging file on 32bit and 64bit systems.{' '}
        </li>
        <li>
          <a
            href="https://guymager.sourceforge.io/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            Guymager{' '}
          </a>{' '}
          – Free forensic imager for media acquisition on Linux. Cannot be used
          for targeted collections (network shares, single profile on hard
          drive, etc.)
        </li>
        <li>
          <a
            href="https://www.magnetforensics.com/magnet-acquire/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            Magnet ACQUIRE{' '}
          </a>{' '}
          – ACQUIRE by Magnet Forensics allows various types of disk
          acquisitions to be performed on Windows, Linux, and OS X as well as
          mobile operating systems.
        </li>
        <li>
          <a
            href="https://cellebrite.com/en/home/ "
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            Cellebrite{' '}
          </a>{' '}
          <StarIcon /> – Cellebrite&apos;s Digital Collector (MacQuisition)
          supports imaging of Intel + Apple Silicon (M1, M2) as well as Ventura
          OSes (as of mid-2023). Cellebrite&apos;s UFED is a tool used to
          extract data from mobile devices, SIM cards, removable media (USBs),
          and even drones!{' '}
        </li>
        <li>
          <a
            href="https://www.brimorlabs.com/tools/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            Live Response Collection{' '}
          </a>{' '}
          – Automated tool that collects volatile data from Windows, OSX, and
          *nix based operating systems.
        </li>
        <li>
          <a
            href="https://github.com/simsong/bulk_extractor"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            bulk_extractor{' '}
          </a>{' '}
          – Computer forensics tool that scans a disk image, a file, or a
          directory of files and extracts useful information without parsing the
          file system or file system structures. Because of ignoring the file
          system structure, the program distinguishes itself in terms of speed
          and thoroughness.
        </li>
        <li>
          <a
            href="https://www.f-response.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            F-Response{' '}
          </a>{' '}
          – Software platform allows for performing remote acquisition of
          evidence over a network (no SSH or RDS to remote system needed){' '}
        </li>
        <li>
          <a
            href="https://www.pagefreezer.com/x1-social-discovery/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            X1 Social Discovery{' '}
          </a>{' '}
          – Data collection for social media and websites.{' '}
        </li>
      </ul>
      <h5>{'All-In-One Tools'}</h5>
      <ul>
        <li>
          <a
            href="https://www.x-ways.net/forensics/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            X-Ways Forensics{' '}
          </a>{' '}
          <StarIcon /> - A forensics tool for disk cloning, imaging, file
          carving, and disk analysis.{' '}
        </li>
        <li>
          <a
            href="https://osquery.io/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            OSquery{' '}
          </a>{' '}
          - Open-source endpoint visibility tool developed by Meta, allowing for
          querying of Windows, Mac, and Linux devices as a database, enabling
          real-time analysis of the state of your infrastructure.{' '}
        </li>
        <li>
          <a
            href="https://github.com/Velocidex/velociraptor"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            Velociraptor{' '}
          </a>{' '}
          <StarIcon /> - Endpoint visibility tool{' '}
        </li>
      </ul>
      <h5>{'Host-Based Analysis'}</h5>
      <ul>
        <li>
          <a
            href="https://github.com/Yamato-Security/hayabusa/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            Hayabusa{' '}
          </a>{' '}
          - A Windows event log parser and timeline generator for forensic
          analysis.{' '}
        </li>
        <li>
          <a
            href="https://github.com/Neo23x0/Loki"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            Loki{' '}
          </a>{' '}
          - Open-source IOC and YARA Python Scanner{' '}
        </li>
        <li>
          <a
            href="https://www.nextron-systems.com/thor-lite/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            Thor Lite <StarIcon />
          </a>{' '}
          - Full IOC and YARA Scanner, including modules and signature sets.
        </li>
        <li>
          <a
            href="https://github.com/volatilityfoundation/volatility3"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            Volatility 3 <StarIcon />
          </a>{' '}
          - Extracting digital artifacts from volatile memory (RAM) samples.{' '}
        </li>
        <li>
          <a
            href="https://www.vound-software.com/pro"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            Intella Pro{' '}
          </a>{' '}
          - email investigation and ediscovery software for processing,
          searching and filtering across email data.{' '}
        </li>
        <li>
          <a
            href="https://ericzimmerman.github.io/#!index.md"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            Eric Zimmerman Tools{' '}
          </a>{' '}
          - open source digital forensics tools can be used in a wide variety of
          investigations including cross validation of tools, providing insight
          into technical details not exposed by other tools, and more.{' '}
        </li>
        <li>
          <a
            href="https://www.magnetforensics.com/products/magnet-axiom/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            Magnet AXIOM{' '}
          </a>{' '}
          - Examine digital evidence from mobile, cloud, computer, and vehicle
          sources, alongside third-party extractions all in one case file.{' '}
        </li>
        <li>
          <a
            href="https://github.com/keydet89/RegRipper3.0"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            Regripper{' '}
          </a>{' '}
          - Tool that can be used to quickly extract values of interest from
          within the registry.{' '}
        </li>
        <li>
          <a
            href="https://exiftool.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            Exiftool{' '}
          </a>{' '}
          - Reading, writing and editing meta information in a wide variety of
          files.{' '}
        </li>
      </ul>
      <h5>{'Log Analysis Platforms + Tools'}</h5>
      <ul>
        <li>
          <a
            href="https://www.splunk.com/en_us/products/splunk-enterprise.html"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            Splunk Enterprise{' '}
          </a>{' '}
          -{' '}
        </li>
        <li>
          <a
            href="https://www.elastic.co/elastic-stack"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            Elastic’s ELK Stack{' '}
          </a>{' '}
          <StarIcon /> - ElasticSearch, LogStash + Kibana tools{' '}
        </li>
        <li>Other great tools for loose log analysis</li>
        <ul>
          <li>
            <a
              href="https://www.metabase.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              {' '}
              Metabase{' '}
            </a>{' '}
            -{' '}
          </li>
          <li>
            <a
              href="https://jupyter.org/"
              target="_blank"
              rel="noreferrer noopener"
            >
              {' '}
              Jupyter Notebook{' '}
            </a>{' '}
            -{' '}
          </li>
          <li>
            <a
              href="https://www.pgadmin.org/"
              target="_blank"
              rel="noreferrer noopener"
            >
              {' '}
              PostgreSQL’s pgAdmin{' '}
            </a>{' '}
            -{' '}
          </li>
          <li>
            <a
              href="https://www.cygwin.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              {' '}
              Cygwin{' '}
            </a>
            <StarIcon /> - run native Linux on Windows systems!
          </li>
        </ul>
      </ul>
      <p>
        {' '}
        Shoutout to{' '}
        <a
          href="https://www.microsoft.com/en-us/microsoft-365/excel"
          target="_blank"
          rel="noreferrer noopener"
        >
          Microsoft&apos;s Excel
        </a>{' '}
        and{' '}
        <a
          href="https://notepad-plus-plus.org/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Notepad++
        </a>{' '}
        for all the support through my journey here.{' '}
      </p>
      <h5>{'Endpoint Detection + Response'}</h5>
      <ul>
        <li>
          <a
            href="https://www.crowdstrike.com/cybersecurity-101/what-is-xdr/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            CrowdStrike Falcon Insight XDR{' '}
          </a>{' '}
          <StarIcon /> -{' '}
        </li>
        <li>
          <a
            href="https://www.vmware.com/products/endpoint-detection-and-response.html"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            VMWare Carbon Black EDR{' '}
          </a>{' '}
          -{' '}
        </li>
        <li>
          <a
            href="https://www.sentinelone.com/platform/singularity-complete/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            SentinelOne Singularity{' '}
          </a>{' '}
          <StarIcon /> -{' '}
        </li>
        <li>
          <a
            href="https://www.sophos.com/en-us/products/endpoint-antivirus"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            Sophos Intercept X{' '}
          </a>{' '}
          -{' '}
        </li>
      </ul>
      <h5>{'Network Analysis'}</h5>
      <ul>
        <li>
          <a
            href="https://www.netwitness.com/solutions/netwitness-platform/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            NetWitness Investigator{' '}
          </a>{' '}
          -{' '}
        </li>
        <li>
          <a
            href="https://www.netresec.com/?page=NetworkMiner"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            NetworkMiner{' '}
          </a>{' '}
          - An open-source network forensics tool for extracting artifacts from
          captured network traffic.{' '}
        </li>
        <li>
          <a
            href="https://www.wireshark.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            WireShark{' '}
          </a>
          <StarIcon /> - network protocol analyzer for deep inspection of
          network protocols and payload content.{' '}
        </li>
        <li>
          <a
            href="https://www.tcpdump.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            TCPDump{' '}
          </a>
          <StarIcon /> - powerful, command-line packet analyzer. Isolate
          packets, sessions, and events of interest.{' '}
        </li>
      </ul>

      <h5>{'Open Source Intelligence (OSINT) Tools'}</h5>
      <ul>
        <li>
          <a
            href="https://www.shodan.io/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            Shodan.io{' '}
          </a>{' '}
          <StarIcon /> - A search engine for discovering IoT or
          internet-connected devices.{' '}
        </li>
        <li>
          <a
            href="https://www.maxmind.com/en/home"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            MaxMind{' '}
          </a>{' '}
          - Provides geolocation services.{' '}
        </li>
        <li>
          <a
            href="https://www.domaintools.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            DomainTools{' '}
          </a>{' '}
          - decoding and encoding{' '}
        </li>
        <li>
          <a
            href="https://gchq.github.io/CyberChef/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            CyberChef{' '}
          </a>{' '}
          <StarIcon /> - web app for encryption, encoding, compression, and data
          analysis{' '}
        </li>
        <li>
          <a
            href="https://openphish.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            OpenPhish{' '}
          </a>{' '}
          - Repo of active phishing sites, offering free phishing intelligence
          feeds{' '}
        </li>
        <li>
          <a
            href="https://www.virustotal.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            VirusTotal{' '}
          </a>{' '}
          - Analyzes suspicious files, URLs, and hashes. Facilitates the quick
          detection of viruses, worms, trojans and other malware.{' '}
        </li>
        <li>
          <a
            href="https://www.joesecurity.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            JOE Security{' '}
          </a>{' '}
          - Sandbox for malware analysis{' '}
        </li>
      </ul>

      <h5>{'Visualization Software'}</h5>
      <ul>
        <li>
          <a
            href="https://www.maltego.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            Maltego by Paterva{' '}
          </a>{' '}
          <StarIcon /> - A visualization platform for analyzing relationships
          and links between entities
        </li>
        <li>
          <a
            href="https://xmind.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            XMind{' '}
          </a>{' '}
          - Mind-mapping and brainstorming tool{' '}
        </li>
      </ul>
    </div>
  )
}

export function SCPost() {
  return (
    <div className="prose dark:prose-invert">
      <h4>{'Supply Chain Attacks'}</h4>
      <p>
        As a manager, I oversee all facets of an incident response effort. My
        responsibilities include, but are not limited to, the following:
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex flex-col">
          <h5>{'Platforms Involved'}</h5>
          <ul>
            <li>
              <strong>Incident Detection and Triage:</strong> Incident
              responders are responsible for monitoring and detecting security
              incidents through various means, such as security monitoring
              tools, intrusion detection systems, and log analysis. They assess
              the severity and potential impact of incidents, prioritize them
              based on risk, and initiate appropriate response actions.
            </li>
          </ul>
        </div>
        {/* Tools Leveraged Section */}
        <div className="flex flex-col">
          <h5>{'Tools Leveraged'}</h5>
          <ul>
            <li>
              {' '}
              <strong>Incident Response Leadership:</strong> Leading a team of
              skilled professionals, I orchestrate the response to security
              incidents with precision and efficiency. From identifying and
              containing threats to implementing remediation measures, I ensure
              that every incident is swiftly addressed to minimize damage and
              maintain operational continuity.
            </li>
          </ul>
        </div>
        {/* Players in the game Section */}
        <div className="flex flex-col">
          <h5>{'Familiar Players'}</h5>
          <ul>
            <li>
              {' '}
              <strong>Incident Response Leadership:</strong> Leading a team of
              skilled professionals, I orchestrate the response to security
              incidents with precision and efficiency. From identifying and
              containing threats to implementing remediation measures, I ensure
              that every incident is swiftly addressed to minimize damage and
              maintain operational continuity.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
