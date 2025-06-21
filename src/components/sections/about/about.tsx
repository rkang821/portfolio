import Container from '@/components/shared/container'
import BubbleSection from './bubbles'
import PhotoReel from './photos'

export default function AboutSection() {
  return (
    <>
      <Container className="pt-14 max-sm:pt-24">
        <div className="prose flex flex-col items-center gap-6 dark:prose-invert">
          <header>
            <h2>
              <span className="text-blue-500 dark:text-blue-300">{'>'}</span>{' '}
              About Me
            </h2>
            <h3>
              {' '}
              Here&apos;s a bit about my path to how I got here today, as well as my interests 
              both inside and outside of the security domain.
            </h3>
          </header>
        </div>
      </Container>
      <Container>
        <div className="my-4 flex">
          <div className="flex items-start max-lg:flex-col-reverse">
            <div className="prose ml-10 mr-5 dark:prose-invert *:px-3 *:pt-3 max-sm:mx-2 lg:basis-2/3  lg:pr-5">
              <p>
                My journey in in this field began as a junior cyber associate,
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
                in 2019 with a B.A. in{' '}
                <span className="font-semibold">Computer Science</span> and{' '}
                <span className="font-semibold">Political Science</span>. This
                interdisciplinary background laid the foundation for my career,
                providing me with a deep understanding of both{' '}
                <span className="font-semibold">technical intricacies</span> and
                the broader{' '}
                <span className="font-semibold">socio-political landscape</span>{' '}
                in which they operate.
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
                responses to complex{' '}
                <span className="font-semibold">security incidents</span>,
                conducting{' '}
                <span className="font-semibold">forensics investigations</span>,
                and implementing proactive{' '}
                <span className="font-semibold">risk mitigation</span> measures.
                When I’m not actively fending off the bad guys, I also
                specialize in preserving, collecting, and analyzing{' '}
                <span className="font-semibold">digital evidence</span>.
              </p>
              <p className="border-b border-dashed border-blue-500 border-opacity-50 pb-3 dark:border-blue-300">
                Outside of the office, you can find me indulging in my other
                passions that keep me energized and inspired. Whether{' '}
                <span className="font-semibold">building</span> the latest LEGO
                set, <span className="font-semibold">training</span> my Aussie
                companion Archer, or{' '}
                <span className="font-semibold">coding</span> very amateur
                things, a balanced lifestyle fuels both my personal and
                professional success.
              </p>
              <p>
                I&apos;m constantly seeking to deepen my understanding of the{' '}
                <span className="font-semibold">ever-evolving</span>{' '}
                cybersecurity landscape and eager to connect with like-minded
                individuals who share my interests. Whether it&apos;s delving
                into the latest cybersecurity trends or swapping LEGO-building
                tips, connect with me to chat more!
              </p>
            </div>
            <BubbleSection />
          </div>
        </div>
      </Container>
      <PhotoReel />
    </>
  )
}
