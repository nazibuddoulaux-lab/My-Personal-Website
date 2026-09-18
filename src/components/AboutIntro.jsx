import './AboutIntro.css'

function AboutIntro() {
  return (
    <section className="about-intro">
      <div className="container">
        <h2 className="display-heading about-intro__line reveal">
          9 years experienced product designer &amp; problem solver, focused
          on turning ideas into meaningful products and intuitive user
          experiences.
        </h2>
        <h2
          className="display-heading about-intro__line reveal"
          style={{ transitionDelay: '0.1s' }}
        >
          If you&apos;re building something new and want the best balance of
          UX and visual design, let&apos;s talk
        </h2>
      </div>
    </section>
  )
}

export default AboutIntro
