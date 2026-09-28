import { useEffect } from 'react'
import './CaseStudyAI.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CloseButton from '../components/ui/CloseButton'

function CaseStudyAI() {
  useScrollReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page">
      <Header />
      <CloseButton />

      <article className="case-study">
        <section className="container case-study__intro">
          <h1 className="display-heading case-study__title reveal">
            AI Driven Advanced Analytics Platform
          </h1>
        </section>

        <img
          className="case-study__image reveal"
          src="/images/case-study-ai-hero.png"
          alt="AI driven advanced analytics platform - about UBIX Labs"
        />

        <img
          className="case-study__image reveal"
          src="/images/case-study-ai-meta.png"
          alt="Project details and UBIX dashboard screenshots"
        />

        {Array.from({ length: 6 }).map((_, index) => (
          <img
            key={index}
            className="case-study__image reveal"
            style={{ transitionDelay: `${Math.min(index * 0.08, 0.24)}s` }}
            src="/images/case-study-ai-mockup.png"
            alt="Laptop mockup placeholder"
          />
        ))}
      </article>

      <Footer />
    </div>
  )
}

export default CaseStudyAI
