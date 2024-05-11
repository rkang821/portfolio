//DFIR Overview
export function DFIRPost() {
  return (
    <div className="prose dark:prose-invert">
      <h4>{'DF vs IR'}</h4>
      <p>
        Digital Forensics and Incident Response is a highly specialized branch
        of cybersecurity that involves identifying, remediating and
        investigating security incidents breaches. Combined together, DFIR
        services two major components that work together to achieve the desired
        outcome:{' '}
      </p>
      <ul>
        <li>
          Digital forensics or DF entails uncovering facts about what occurred
          on a computer system, network device, or phone/tablet, often involved
          in litigation, regulatory investigations, internal company
          investigations, or criminal charges against cybercriminals.{' '}
        </li>
        <li>
          {' '}
          Incident response or IR is a complementary process to that of DF, but
          specifically occurs in the context of a cyber intrusion. Experts
          gather and investigate vasts amount of data to fill in gaps of
          information about a cyber attack, including how the attacker broke in,
          what exact actions were taken, among other activities conducted.
          Additionally, while the investigation aspect is very crucial, other
          considerations such as containment and recovery are weighed equally in
          response to an incident.
        </li>
      </ul>
      <p>
        {' '}
        Although they might be referred to as separate practices, DF and IR work
        together to help answer the following questions after a security
        incident:{' '}
      </p>
      <ol>
        <li> Who caused this incident? </li>
        <li> What is the full scope and impact of the compromise? </li>
        <li> How did the attacker get in? </li>
        <li>
          {' '}
          How did the attacker escalate their operation? (ex. Credential theft,
          lateral movement, etc.){' '}
        </li>
        <li>
          {' '}
          Did the attacker obtain access to any sensitive data/PII/PHI? (ex.
          Data exfiltration){' '}
        </li>
        <li> How do we ensure a similar incident won’t happen again? </li>
        <li>
          {' '}
          How do we remediate and restore the business back to operation?{' '}
        </li>
      </ol>
      <div className="grid grid-cols-1 gap-4">
        {/* IR Frameworks */}
        <div className="flex flex-col">
          <h4>{'IR Frameworks'}</h4>
          <p>
            On a day-to-day basis, I lead the response to a security incident or
            data breach, coordinating and overseeing all facets of the incident
            response effort. But, of course, no two responses will be the same.
            Each investigation entails a unique and tailored approach in the IR
            plan, depending on the scope and severity of the incident. Below is
            a popular 6-step IR framework developed by{' '}
            <a href="https://www.sans.org/white-papers/33901/">SANS</a> that I
            use often in my investigations:{' '}
          </p>
          <ol>
            <li>
              <strong>Step #1: Preparation</strong> – Codify an organizational
              security policy that include detailed actions accounting for a
              wide range of incidents. This plan should be prepared in advance,
              thoroughly understood by the team, and regularly adjusted to
              incorporate new threats and access vectors.{' '}
            </li>
            <li>
              <strong>Step #2: Identification</strong> -- monitor IT systems and
              Gather information via security monitoring tools, intrusion
              detection systems, and log analysis to detect potential incidents.
              Assess severity and potential impact of incidents, prioritize
              based on risk, and initiate appropriate response actions. For
              extensive invesitgations, Incident responders may conduct in-depth
              forensic analysis to determine the root cause, extent of
              compromise, and the attacker&apos;s methods and motives. They
              collect and analyze evidence, including network logs, system
              artifacts, and malware samples, to understand the incident&apos;s
              scope and gather intelligence for further protection and
              prevention.{' '}
            </li>
            <li>
              <strong>Step #3: Containment</strong> -- perform short-term
              containment, for example by isolating the network segment that is
              under attack to prevent lateral movement. Then focus on long-term
              containment, which involves temporary fixes to allow systems to be
              used in production, while rebuilding clean systems.
            </li>
            <li>
              <strong>Step #4: Eradication</strong> - remove malware from all
              affected systems, identify the root cause of the attack, and take
              action to prevent similar attacks in the future.
            </li>
            <li>
              <strong>Step #5: Recovery</strong> – bring affected production
              systems back online carefully, to prevent additional attacks.
              Test, verify and monitor affected systems to ensure they are back
              to normal activity.
            </li>
            <li>
              <strong>Step #6: Lessons Learned</strong> - Document incident
              details including chronology, adversary TTPs, findings etc.,
              providing a detailed account of the incident, its impact, and the
              response efforts. Identify gaps in preparation, detection, and
              response to strengthen capabilities. Update response plans with
              new learnings to improve incident response processes and enhance
              overall security.
            </li>
          </ol>
          <p>
            {' '}
            Another popular framework is offered by{' '}
            <a href="https://www.nist.gov/cyberframework">
              National Institute of Standards and Technology (NIST)
            </a>
            , which entails a shorter, but nearly identical process.
            Additionally, huge shoutout to MITRE ATT&CK, a curated knowledge
            base and model for cyber adversary behavior, reflecting the various
            phases of an adversary&apos;s lifecycle and the platforms they are
            known to target
          </p>
        </div>
      </div>
    </div>
  )
}

//Incident Types Post
export function ITPost() {
  return (
    <div className="prose dark:prose-invert">
      <h4>{'Incident Types'}</h4>
      <p>
        While I have experience leading and conducting all types of DF and IR
        incidents, lately I&apos;ve been spending more of my time leading
        fast-paced, complex IR cases that involve at least one or more
        compromises within a cloud platform. That being said, below are a list
        of the the different types of DF and IR cases I have experience leading,
        with examples of real-world experiences.
      </p>
      <blockquote>
        {' '}
        Due to NDA restrictions and confidentiality, specifics on some incidents
        have been redacted.{' '}
      </blockquote>
      <h5>{'Common Digital Forensics Cases'}</h5>
      <ul>
        <li>
          {' '}
          <strong>Departed employee</strong> – investigation into a departing or
          departed employee, particularly due to the circumstances of the
          departure from the company, specific evidence of wrongdoing, or out of
          a due diligence check. Can also be conducted for “arriving employees”
          with similar contexts. May involve litigation component.
        </li>
        <li>
          {' '}
          <strong>Theft of trade secrets/IP</strong> – Investigation into
          unauthorized use, distribution, or copying of individual or
          company&apos;s intellectual property, such as trade secrets,
          copyrights, patents, and trademarks. May involve litigation component.
        </li>
        <li>
          {' '}
          <strong>Fraud detection</strong> – investigation into financial
          records, digital transactions, communication logs to identify patterns
          indicative of fraud or financial misconduct. May involve litigation
          component.
        </li>
      </ul>
      <h5>{'Common Incident Response Cases'}</h5>
      <ul>
        <li>
          {' '}
          <strong>Advanced Persistent Threat (APT)</strong> – sophisticated,
          highly targeted and often long-term cyberattack orchestrated by
          well-funded and highly skilled threat actors. Often backed by
          nation-states such as Russia, North Korea, and China. APTs are
          typically targeted at specific organizations, industries or
          governments and are more persistent, targeted and sophisticated in
          comparison to other common types of cyber attacks.
        </li>
        <li>
          {' '}
          <strong>Ransomwares</strong> - cyberattack involving infiltration of
          victim environment, encrypting of files via malicious software
          (malware) and restricting access to files, servers, and network in
          exchange for a specified monetary ransom payment. Often includes an
          additional payment fee for decryption and shame sites to leak
          exfiltrated data for those who don&apos;t pay within alotted
          timeframe. Ransomwares can affect industries and companies of all
          shapes and sizes, ranging from enterprise organizations to even local
          mom and pop shops.{' '}
        </li>
        <li>
          {' '}
          <strong> Business Email Compromise</strong> – Cyberattack where
          attackers gain unauthorized access to an email account or impersonates
          a trusted individual, such as a service provider or a senior
          executive, for the purpose of carrying out fraudlent actions such as
          wire transfers or obtaining seneitvive information or passwords
          through social eingeering tactics.{' '}
        </li>
        <li>
          {' '}
          <strong>Supply chain attack</strong> – Cyberattack where attackers
          gain unauthorized access to a company&apos;s system or network by
          targeting the company&apos;s trusted, third party vendors that provide
          services or software vital to the chain. also known as “value-chain”
          or “third-party” attacks. particularly damaging attack because it can
          bypass traditional security measures and give the attacker deep access
          to sensitive data and intellectual property. Can be used against
          enterprise organzations or even govenments.{' '}
        </li>
        <li>
          {' '}
          <strong>Insider threat</strong> – cyberattack where security threats
          originate from within the organization. These may come from both
          careless and disgruntled employees, contractors, or anyone else who
          has been granted insider access to the company&apos;s network and
          data.
        </li>
      </ul>
    </div>
  )
}

//DFIR Toolkit Overview
export function TKPost() {
  return (
    <div className="prose dark:prose-invert">
      <h4>{'DFIR Toolkit'}</h4>
      <p>
        DFIR is a massive industry with new tools and platforms emerging as the
        needs change and evolve. While there are many out there, here’s some
        that I use regularly through my investigations.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* hard skills Section */}
      </div>
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
        {/* hard skills Section */}
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
