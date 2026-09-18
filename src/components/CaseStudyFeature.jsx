import './CaseStudyFeature.css'
import PlaceholderImage from './ui/PlaceholderImage'

function CaseStudyFeature() {
  return (
    <section className="case-study">
      <div className="container">
        <div className="case-study__divider" />
        <div className="case-study__inner">
          <a
            className="case-study__media-link reveal"
            href="#case-study"
            aria-label="Read the Kotha case study"
          >
            <PlaceholderImage
              className="case-study__media"
              label="macbook mockup"
              ratio="384 / 348"
            />
          </a>
          <div
            className="case-study__content reveal"
            style={{ transitionDelay: '0.1s' }}
          >
            <div className="case-study__text-group">
              <h3>Kotha - First Bangladeshi social app</h3>
              <p>
                Competently implement multidisciplinary channels without
                dynamic architectures. Credibly engage plug &amp; play
                leadership of principle centered methods of empowerment.
                Holisticly productivate premier processes rather than
                standardized growth strategies.
              </p>
            </div>
            <a className="case-study__link" href="#article">
              read full article
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudyFeature
