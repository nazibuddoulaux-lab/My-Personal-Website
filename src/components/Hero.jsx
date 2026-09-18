import './Hero.css'
import { ProjectsHeading } from './ProjectsShowcase'
import { useTypewriter } from '../hooks/useTypewriter'
import { useMagneticHover } from '../hooks/useMagneticHover'

const DESCRIPTION =
  'I’m an independent product designer helping teams around the world with UX, UI, branding, vibe coding and digital product design.'

function Hero() {
  const line1 = useTypewriter('Nazibuddoula', { speed: 55 })
  const line2 = useTypewriter('Nayeem', { speed: 55, start: line1.done })
  const description = useTypewriter(DESCRIPTION, {
    speed: 14,
    startDelay: 250,
    start: line2.done,
  })
  const nameRef = useMagneticHover({ strength: 20 })

  return (
    <section className="hero">
      <div className="container hero__inner">
        <h1 className="hero__name" ref={nameRef}>
          <span className={line1.done ? '' : 'typewriter-cursor'}>
            {line1.output}
          </span>
          <span className={line2.done ? '' : 'typewriter-cursor'}>
            {line2.output}
          </span>
        </h1>
        <div className="hero__content">
          <p
            className={`hero__description${
              description.done ? '' : ' typewriter-cursor'
            }`}
          >
            {description.output}
          </p>
          <a className="hero__resume" href="#resume">
            Download resume
          </a>
          <ProjectsHeading />
        </div>
      </div>
    </section>
  )
}

export default Hero
