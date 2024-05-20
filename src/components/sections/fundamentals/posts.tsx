import dfirdark from '/public/images/DFIRPost-SANS_dark.png'
import dfirlight from '/public/images/DFIRPost-SANS_light.png'
import Image from 'next/image'
import {
  MicrosoftTag,
  AWSTag,
  GCPTag,
} from '@/components/shared/tags'
import { StarIcon } from '@/components/shared/icons'

//DFIR Overview
export function DFIRPost() {
  return (
    <div className="prose dark:prose-invert">
      <h4 className="border-l-2 border-zinc-600 border-opacity-50 pl-3">
        {'DF vs IR'}
      </h4>
      <p>
        Digital Forensics and Incident Response (DFIR) is a specialized branch
        of cybersecurity that combines the investigative and analytical aspects
        of digital forensics with the reactive measures of incident response. It
        aims to provide a comprehensive approach to incident response, enabling
        organizations to effectively detect, investigate, and respond to cyber
        threats and incidents. Both DF and IR play crucial roles in
        cybersecurity, complementing each other to ensure effective incident
        management and response.
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
        skill set that goes beyond textbook knowledge. Below are some soft
        skills I&apos;ve developed throughout my journey that&apos;s helped me
        in my role today.
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
          is essential. I invest in ongoing training (
          <a
            href="https://www.sans.org/cyber-security-courses/"
            target="_blank"
            rel="noreferrer noopener"
          >
            SANS
          </a>
          , Cloud Provider certifications, etc.), adopt emerging technologies,
          and implement best practices to stay ahead of cyber adversaries and
          maintain a resilient security posture.{' '}
        </li>
      </ul>
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
        While I have experience tackling a broad spectrum of cases, recently
        I&apos;ve focused on leading intricate IR cases, particularly those
        involving a cloud platform compromise. Here&apos;s an overview of the
        types of incidents I&apos;ve responded to. To read more about real-world
        case studies, see my <a href="/blogs/dfir-case-study"> blog post</a>{' '}
        here!
      </p>
      <h5>{'Types of Digital Forensics Cases'}</h5>
      <ul>
        <li>
          {' '}
          <strong>Data Breach Investigation</strong>: Investigating unauthorized
          access to sensitive data, such as customer records or financial
          information, to determine the extent of the breach and identify the
          responsible party, if possible.
        </li>
        <li>
          {' '}
          <strong>Intellectual Property Theft</strong>: Analyzing digital
          evidence to uncover instances of intellectual property theft, such as
          trade secrets, patents, or proprietary information stolen by insider
          or external threats.
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
          identify perpetrators, trace fraudulent transactions, and compile
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
          who don&apos;t pay within an allotted timeframe. Ransomwares can affect
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
        {'Cloud IR'}
      </h4>
      <p>
        Cloud Incident Response is an emerging and booming subset of IR that
        refers to responding to security incidents that occur within cloud
        environments, such as across cloud infrastructure or services across
        platforms such as Microsoft&apos;s Azure, Amazon Web Services (AWS), or
        Google Cloud Platform (GCP). See my{' '}
        <a href="/blogs/cloud-case-study">blog post</a> here for examples of
        real-world cloud compromises across major cloud provider platforms.
      </p>
      <h5>What&apos;s new in Cloud IR? </h5>
      <p>
        {' '}
        Cloud-based incidents are reshaping traditional DFIR work with a shift
        in commonly accepted investigative practices, tools, and expertise to
        effectively address the complexities of cloud environments. Incident
        responders should adapt and evolve their approaches to keep pace with
        the changing landscape of cybersecurity in the cloud. A few of major
        changes I&apos;ve noticed:
      </p>
      <ol>
        <li>
          {' '}
          <strong>Shift in Data Sources</strong>: In 2024, around 87% of Fortune
          500 companies have adopted at least one public cloud platform.
          Incident responders typically collected data from on-premises systems,
          such as servers, workstations, and network (firewall) logs - the
          physical access parameters. As more organizations utilize services
          from a variety of cloud platforms, working with the access parameters
          of each cloud provider requires a deeper level of expertise - such as
          taking logical storage snapshots, understanding log retention, etc.
        </li>
        <li>
          <strong>Complexity of Investigations</strong>: Cloud-based incidents
          introduce additional complexity to DFIR investigations because of its
          efficient, but distributed nature, including shared responsibility
          models and multi-tenant architectures. Investigating incidents
          involving cloud services requires coordination and collaboration
          between the cloud customer, CSPs, and potentially other third-party
          service providers. In my experience,
        </li>
        <li>
          <strong>Challenges in Data Collection and Preservation</strong>:
          Collecting and preserving digital evidence in cloud environments
          presents unique challenges compared to collecting from on-premises
          systems. Cloud-based data may be dispersed across multiple geographic
          regions, stored in shared storage systems, or subject to automated
          data lifecycle management by CSPs. Ensuring the integrity and
          admissibility of digital evidence collected from cloud environments
          requires specialized techniques and tools tailored to cloud forensics.
          Also requires expertise in a variety of cloud platforms.
        </li>
        <li>
          <strong>Adaptation of Investigative Techniques</strong>: Investigators
          should adapt their techniques and methodologies to address
          cloud-specific artifacts, including logging mechanisms, encryption
          practices, and access controls implemented by CSPs. Traditional DFIR
          methodologies may need to be modified or supplemented with
          cloud-specific approaches to effectively investigate incidents in
          cloud environments (i.e., lateral movement across cloud resources,
          data exfiltration from cloud storage, etc.)
        </li>
        <li>
          <strong>Integration with Cloud Security Tools</strong>: Cloud-based
          incidents necessitate the integration of traditional DFIR workflows
          with cloud-native security tools and technologies. This includes
          leveraging CSP-provided security services, such as cloud monitoring,
          threat detection, and incident response automation. Integrating these
          tools into DFIR workflows enables faster detection, analysis, and
          response to cloud-based threats and security incidents. See{' '}
          <a href="#fundamentals">DFIR Toolkit</a> tab for several cloud-native
          tools across major cloud providers.
        </li>
      </ol>
      <p>
        Cloud IR requires a deep understanding of cloud computing architectures,
        security controls, and compliance requirements, along with proficiency
        in traditional DFIR methodologies adapted to the cloud environment.
        Effective cloud IR strategies prioritize proactive threat detection,
        rapid incident triage, and coordinated response efforts between cloud
        customers, cloud service providers (CSPs), and other stakeholders.
      </p>
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
        that I use regularly through my investigations. My preferred tools are
        marked with a <StarIcon />.
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
          <StarIcon /> – A standalone forensics device offering various
          functions such as data acquisition, secure encryption, data
          verification, and disk formatting tailored for forensic applications.{' '}
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
          <StarIcon /> – A free forensic tool used for capturing live data and
          creating forensic images of files, folders, and disk images, while
          supporting live memory acquisition on both 32-bit and 64-bit systems.{' '}
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
          – Free Linux-based imager for forensic acquisition of media drives,
          optimized for full-drive data captures.
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
          – Acquires forensic images from a variety of platforms including
          Windows, macOS, Linux, and mobile devices.
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
            href="https://www.f-response.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            F-Response{' '}
          </a>{' '}
          – Enables remote, secure, and read-only access to target systems for
          real-time data analysis and incident response, ensuring data
          integrity.{' '}
        </li>
        <li>
          <a
            href="https://github.com/gfoss/PSRecon"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            PSRecon{' '}
          </a>{' '}
          – Utilizes PowerShell (v2+) to remotely collect and organize data from
          Windows systems, ensuring data integrity through comprehensive
          hashing.{' '}
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
          – Scans digital media to extract critical information quickly without
          requiring file system parsing, enhancing the efficiency of forensic
          examinations.
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
          – Specializes in collecting data from social media and websites,
          particularly for digital investigations and legal discovery{' '}
        </li>
      </ul>
      <h5>{'Memory Tools'}</h5>
      <ul>
        <li>
          <a
            href="https://belkasoft.com/ram-capturer"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            Belkasoft RAM Capturer{' '}
          </a>{' '}
          – Forensic tool that reliably acquires volatile memory of a running
          computer. Designed to be fail-safe and easy to use, it captures system
          RAM with minimal risk of data corruption.{' '}
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
          – Automates the collection of volatile data from Windows, OS, and *nix
          based operating systems.
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
          - Specializes in extracting artifacts from volatile memory, providing
          crucial insights into the runtime state of systems.{' '}
        </li>
        <li>
          <a
            href="https://github.com/google/rekall"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            ReKall <StarIcon />
          </a>{' '}
          - Open-source tool + library for extraction of digital artifacts from
          volatile memory (RAM) samples.{' '}
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
          <StarIcon /> - A versatile tool for disk cloning, imaging, file
          recovery, and detailed analysis of data, serving as a cornerstone for
          forensic investigations.{' '}
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
          - Open-source endpoint visibility tool developed by Meta, transforming
          device states into queryable databases, enabling real-time visibility
          and analysis across multiple operating systems.{' '}
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
          <StarIcon /> - An advanced tool providing deep endpoint visibility and
          data collection capabilities to enhance investigative and monitoring
          activities. Uses Velocidex Query Language (VQL).{' '}
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
          - Quickly parses and generates timelines from Windows event logs.{' '}
        </li>
        <li>
          <a
            href="https://github.com/keydet89/RegRipper3.0"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            RegRipper{' '}
          </a>{' '}
          - Open source tool written in Perl for extracting/parsing (keys,
          values, data) from registry hives for values of interest.{' '}
        </li>
        <li>
          <a
            href="https://eventlogxp.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            Event Log Explorer{' '}
          </a>{' '}
          - Viewing, analyzing, and monitoring events recorded in Microsoft
          Windows event logs. It provides powerful features to aggregate,
          analyze, and export logs.{' '}
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
          - Python-based scanner leveraging indicators of compromise and YARA
          rules for comprehensive endpoint scanning{' '}
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
          - Extensive IOC and YARA scanning capabilities, equipped with advanced
          modules and signature sets for detailed threat detection. Built upon
          Loki.
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
          - Focuses on email investigation and eDiscovery, offering powerful
          tools for processing and analyzing email data.{' '}
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
          - A suite of open-source forensic tools that provide deep insights and
          cross-validation capabilities in digital investigations.{' '}
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
          - Integrates evidence from mobile, cloud, and computer sources into a
          single case file, streamlining the investigation process.{' '}
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
          - A powerful tool for manipulating metadata in a wide array of file
          types, critical for forensic and investigative purposes.{' '}
        </li>
        <li>
          <a
            href="https://www.openwall.com/john/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            John the Ripper{' '}
          </a>{' '}
          - Fast password cracker, widely used for its ability to automatically
          detect password hash types and support numerous cracking modes.{' '}
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
          - A robust platform that captures, indexes, and correlates real-time
          data in a searchable repository, enabling complex querying, analysis,
          visualization, and monitoring.{' '}
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
          <StarIcon /> - Combines Elasticsearch, Logstash, and Kibana to
          process, search, and visualize large volumes of data in real time,
          providing an integrated solution for log and time-series analytics{' '}
        </li>
        <li>
          <a
            href="https://logrhythm.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            LogRhythm{' '}
          </a>{' '}
          - Security information and event management (SIEM) solution that
          combines log management, machine learning, and advanced analytics to
          help identify and respond to threats quickly.{' '}
        </li>
        <li>
          <a
            href="https://www.sumologic.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            Sumo Logic{' '}
          </a>{' '}
          - A cloud-based log management and analytics service that transforms
          big data into sources for security and operational intelligence. It is
          designed to help with real-time forensics and incident response.{' '}
        </li>
        <li>
          <a
            href="https://www.ibm.com/qradar/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            IBM Security QRadar{' '}
          </a>{' '}
          - SIEM solution that consolidates log events and network flow data
          from thousands of devices, endpoints, and applications across a
          network.{' '}
        </li>
        <li>Other great tools for loose log analysis</li>
        <ul>
          <li>
            <a
              href="https://jupyter.org/"
              target="_blank"
              rel="noreferrer noopener"
            >
              {' '}
              Jupyter Notebook{' '}
            </a>{' '}
            - Provides an interactive computing environment where you can
            combine code execution, rich text, mathematics, plots, and rich
            media.{' '}
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
            - A comprehensive administration tool for PostgreSQL, offering GUI
            for database management, query tooling, and monitoring{' '}
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
            <StarIcon /> - A POSIX-compatible environment that runs natively on
            Microsoft Windows, allowing the running of Linux-based applications
            and tools. An essential tool in my opinion.
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
          - Facilitates advanced network forensics with real-time visibility
          into network traffic, aiding in the detection and investigation of
          security threats.{' '}
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
          <StarIcon /> - Network protocol analyzer for deep inspection of
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
          <StarIcon /> - Command-line packet analyzer used for network
          diagnostics and network traffic monitoring by capturing packet data.
          Isolate packets, sessions, and events of interest for deeper review.{' '}
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
          <StarIcon /> - A specialized search engine for finding specific types
          of internet-connected devices and systems.{' '}
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
          <StarIcon /> - Provides IP geolocation and online fraud prevention
          tools.{' '}
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
          - Offers domain profile information and history.{' '}
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
          <StarIcon /> - Versatile web application for encoding, decoding,
          ciphering, hashing, and data analysis, with numerous operations and
          chainable tools{' '}
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
          - Repository of active phishing sites, offering free phishing
          intelligence feeds.{' '}
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
          - Analyzes suspicious files and URLs to detect malware and other
          threats using multiple antivirus engines and website scanners{' '}
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
          - A sandboxing solution that analyzes suspicious files, malware, and
          URLs across multiple operating systems, providing detailed security
          reports.{' '}
        </li>
        <li>
          <a
            href="https://otx.alienvault.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            AlientVault OTX (Open Threat Exchange){' '}
          </a>{' '}
          - Global open threat intelligence community that shares in real-time,
          aiding in the response to emerging threats, promoting faster incident
          response.{' '}
        </li>
        <li>
          <a
            href="https://github.com/smicallef/spiderfoot"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            SpiderFoot{' '}
          </a>{' '}
          - Open-source intelligence automation tool, automating the process of
          gathering intelligence about a given target (ex. IP address, domain
          name, hostname, network subnet, etc.){' '}
        </li>
      </ul>

      <h5>{'Visualization Software'}</h5>
      <ul>
        <li>
          <a
            href="https://github.com/google/timesketch"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            Timesketch{' '}
          </a>{' '}
          <StarIcon /> - An open-source collaborative forensic timeline analysis
          tool designed to help teams work together on digital investigations.
        </li>
        <li>
          <a
            href="https://github.com/log2timeline/plaso"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            Plaso{' '}
          </a>{' '}
          <StarIcon /> - Python-based backend that extracts timestamps from
          various files found on a system and aggregates them into a single
          timeline.
        </li>
        <li>
          <a
            href="https://www.maltego.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            Maltego by Paterva{' '}
          </a>{' '}
          <StarIcon /> - A powerful visualization tool for understanding and
          displaying the relationships and real-world links between digital
          entities.
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
          - A full-featured mind-mapping and brainstorming tool, enabling the
          structuring of thoughts, complex information, and ideas for projects
          and research.{' '}
        </li>
        <li>
          <a
            href="https://www.metabase.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            Metabase{' '}
          </a>{' '}
          - Interface for creating visualizations and dashboards from various
          databases without requiring extensive technical knowledge{' '}
        </li>
      </ul>
      <h4
        id="cloudtools"
        className="border-l-2 border-zinc-600 border-opacity-50 pl-3"
      >
        {'Cloud Platform tools'}
      </h4>
      <p>
        {' '}
        Unlike traditional DFIR tools, which focus on on-premises
        infrastructure, cloud-native tools are tailored for the scalable,
        dynamic nature of cloud environments. The tools range from real-time
        monitoring to automated security for cloud architectures like serverless
        and containers.{' '}
      </p>
      <h5>
        <strong>Amazon Web Services </strong>
        <AWSTag />
      </h5>
      <ul>
        <li>
          <a
            href="https://aws.amazon.com/cloudtrail/"
            target="_blank"
            rel="noreferrer noopener"
          >
            AWS CloudTrail
          </a>{' '}
          - Provides governance, compliance, operational auditing, and risk
          auditing of your AWS account by logging all account activity.
        </li>
        <li>
          <a
            href="https://aws.amazon.com/guardduty/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Amazon GuardDuty
          </a>{' '}
          - Offers intelligent threat detection that monitors your AWS
          environment for malicious activity and unauthorized behavior.
        </li>
        <li>
          <a
            href="https://aws.amazon.com/security-hub/"
            target="_blank"
            rel="noreferrer noopener"
          >
            AWS Security Hub
          </a>{' '}
          - Aggregates security alerts and findings from various AWS services
          and third-party tools to provide a comprehensive view of your security
          posture.
        </li>
        <li>
          <a
            href="https://aws.amazon.com/inspector/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Amazon Inspector
          </a>{' '}
          - Automatically assesses applications for vulnerabilities or
          deviations from best practices, including those deployed on EC2
          instances.
        </li>
        <li>
          Splunk - Integrating Splunk with AWS services can provide deeper
          insights into the data and more advanced analytics capabilities for
          threat detection and response.
        </li>
      </ul>
      <h5>
        <strong>Microsoft&apos;s Azure </strong> <MicrosoftTag />
      </h5>
      <ul>
        <li>
          <a
            href="https://azure.microsoft.com/en-us/products/defender-for-cloud/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Azure Security Center
          </a>{' '}
          - Provides unified security management and advanced threat protection
          across hybrid cloud workloads. It includes continuous monitoring and
          policy enforcement.
        </li>
        <li>
          <a
            href="https://azure.microsoft.com/en-us/products/microsoft-sentinel/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Azure Sentinel
          </a>{' '}
          - This is Microsoft’s cloud-native SIEM that provides intelligent
          security analytics at cloud scale for enterprises of all sizes and
          workloads.
        </li>
        <li>
          <a
            href="https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id-protection"
            target="_blank"
            rel="noreferrer noopener"
          >
            Azure AD Identity Protection
          </a>{' '}
          - Helps detect potential vulnerabilities affecting your organization’s
          identities, configure automated responses, and investigate incidents.
        </li>
        <li>
          <a
            href="https://www.microsoft.com/en-us/security/business/cloud-security/microsoft-defender-cloud"
            target="_blank"
            rel="noreferrer noopener"
          >
            Microsoft Defender for Cloud
          </a>{' '}
          - Offers tools for navigating to the root cause of a breach or
          verifying that alerts are false positives.
        </li>
      </ul>
      <h5>
        <strong>Google Cloud Platform </strong> <GCPTag />
      </h5>
      <ul>
        <li>
          <a
            href="https://chronicle.security/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Google Chronicle
          </a>{' '}
          <StarIcon /> - As part of Google Cloud, Chronicle provides a powerful
          analytics engine to help enterprises manage their security data at
          scale, including threat hunting and incident investigation.
        </li>
        <li>
          <a
            href="https://cloud.google.com/security/products/security-command-center/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Google Cloud Security Command Center
          </a>{' '}
          - Provides risk assessment and threat identification across your
          Google Cloud data, assets, and services.
        </li>
        <li>
          <a
            href="https://cloud.google.com/products/operations"
            target="_blank"
            rel="noreferrer noopener"
          >
            Google Cloud’s operations suite (formerly Stackdriver)
          </a>{' '}
          - Monitors, logs, and diagnoses cloud applications’ issues on GCP in
          real time
        </li>
        <li>
          <a
            href="https://sysdig.com/products/platform/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Sysdig Secure
          </a>{' '}
          <StarIcon /> - Used for securing containerized environments and can be
          integrated with GCP for monitoring, security, and forensics in a
          Kubernetes environment.
        </li>
      </ul>
      <h5>{'Additional Cloud Security Tools (EDR, SIEMs)'}</h5>
      <ul>
        <li>
          <a
            href="https://www.sophos.com/en-us/products/endpoint-antivirus"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            Orca Security{' '}
          </a>{' '}
          <StarIcon /> - Provides agentless cloud security for AWS, Azure, and
          GCP, utilizing SideScanning technology to assess vulnerabilities,
          malware, misconfigurations, and compliance risks in cloud assets
          without the use of agents.{' '}
        </li>
        <li>
          <a
            href="https://www.crowdstrike.com/cybersecurity-101/what-is-xdr/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            CrowdStrike Falcon Insight XDR{' '}
          </a>{' '}
          <StarIcon /> - Delivers endpoint protection through advanced analysis
          of threat data, offering real-time visibility and proactive threat
          hunting capabilities.{' '}
        </li>
        <li>
          <a
            href="https://www.paloaltonetworks.com/prisma/cloud"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            Palo Alto Networks Prisma Cloud{' '}
          </a>{' '}
          <StarIcon /> - Offers visibility and control over data across all
          cloud environments, providing continuous threat detection, compliance
          monitoring, secure access, and data protection.{' '}
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
          - Provides advanced threat detection and response by analyzing
          endpoint data and offering tools for incident response and defense.{' '}
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
          <StarIcon /> - A unified, AI-powered platform providing prevention,
          detection, response, and hunting across endpoints, containers, cloud
          workloads, and IoT devices.{' '}
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
          - Offers next-gen endpoint protection using deep learning technology
          to block malware, exploits, and ransomware attacks.{' '}
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
