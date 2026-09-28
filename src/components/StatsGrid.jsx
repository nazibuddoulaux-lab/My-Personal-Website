import './StatsGrid.css'
import { industries } from '../data/industries'
import PlaceholderImage from './ui/PlaceholderImage'
import Button from './ui/Button'

function StatsGrid() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        <div className="stats__card stats__card--experience reveal">
          <h3>9+ years of professional experience</h3>
          <PlaceholderImage
            label="experience chart"
            src="/images/9+.jpg"
            ratio="384 / 262"
          />
        </div>

        <div
          className="stats__card stats__card--tags reveal"
          style={{ transitionDelay: '0.05s' }}
        >
          <h3>20+ diverse industries</h3>
          <ul className="stats__tags">
            {industries.map((industry) => (
              <li key={industry}>{industry}</li>
            ))}
          </ul>
        </div>

        <div
          className="stats__card stats__card--contact reveal"
          style={{ transitionDelay: '0.1s' }}
        >
          <PlaceholderImage
            className="stats__card-icon"
            label="icon"
            src="/images/Contact%20Me.png"
            ratio="106 / 78"
          />
          <div className="stats__card-text">
            <h3>Contact me for projects.</h3>
            <p>
              Synergistically conceptualize optimal channels whereas scalable
              partnerships.
            </p>
          </div>
          <Button variant="black">Set a 15 Min Meeting</Button>
        </div>

        <div
          className="stats__card stats__card--projects reveal"
          style={{ transitionDelay: '0.15s' }}
        >
          <h3>40+ projects done</h3>
          <PlaceholderImage
            className="stats__card-inset"
            label="project mockup"
            ratio="162 / 194"
          />
        </div>

        <div
          className="stats__card stats__card--image stats__card--icon-packs reveal"
          style={{ transitionDelay: '0.2s' }}
        >
          <PlaceholderImage
            className="stats__card-bg"
            label="decorative"
            src="/images/Icons.jpg"
            ratio="384 / 310"
          />
          <div className="stats__card-overlay">
            <div className="stats__card-text">
              <h3>Download my icon packs</h3>
              <p>
                Synergistically conceptualize optimal channels whereas
                scalable partnerships.
              </p>
            </div>
            <Button variant="outline">Get a Invite Link</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsGrid
