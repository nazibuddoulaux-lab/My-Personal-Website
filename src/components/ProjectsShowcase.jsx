import { Link } from 'react-router-dom'
import './ProjectsShowcase.css'
import { projectRows } from '../data/projects'
import PlaceholderImage from './ui/PlaceholderImage'
import Button from './ui/Button'
import { use3DTilt } from '../hooks/use3DTilt'

function ImageCell({ image, src, caption, href = '#case-study', delay }) {
  const LinkComponent = href.startsWith('/') ? Link : 'a'
  const linkProp = href.startsWith('/') ? { to: href } : { href }

  return (
    <figure
      className="project-cell project-cell--image reveal"
      style={{ transitionDelay: `${delay}s` }}
    >
      <LinkComponent className="project-cell__link" {...linkProp} aria-label={caption}>
        <PlaceholderImage label={image} src={src} ratio="384 / 500" />
      </LinkComponent>
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

function IllustrationCell({ cell, delay }) {
  const tiltRef = use3DTilt({ maxTilt: 8, scale: 1.03 })

  return (
    <div
      className="project-cell project-cell--illustration reveal"
      style={{ transitionDelay: `${delay}s` }}
      ref={tiltRef}
    >
      <div className="project-cell__illustration-content">
        <span className="project-cell__badge">{cell.label}</span>
        <p>{cell.paragraph}</p>
      </div>
      <PlaceholderImage
        className="project-cell__illustration-hover"
        label="illustration"
        src="/images/Illustration.jpg"
        ratio="384 / 500"
      />
      <Button
        variant="black"
        href="#illustrations"
        className="project-cell__illustration-button"
      >
        Check My Illustrations
      </Button>
    </div>
  )
}

function ProjectCell({ cell, delay }) {
  if (cell.type === 'image') {
    return (
      <ImageCell
        image={cell.image}
        src={cell.src}
        caption={cell.caption}
        href={cell.href}
        delay={delay}
      />
    )
  }

  if (cell.type === 'image-pair') {
    return (
      <div className="project-cell project-cell--pair">
        {cell.items.map((item, itemIndex) => (
          <ImageCell
            key={item.image}
            image={item.image}
            src={item.src}
            caption={item.caption}
            href={item.href}
            delay={delay + itemIndex * 0.08}
          />
        ))}
      </div>
    )
  }

  if (cell.type === 'text') {
    return (
      <div
        className="project-cell project-cell--text reveal"
        style={{ transitionDelay: `${delay}s` }}
      >
        {cell.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    )
  }

  if (cell.type === 'illustration') {
    return <IllustrationCell cell={cell} delay={delay} />
  }

  if (cell.type === 'cta') {
    return (
      <div
        className="project-cell project-cell--cta reveal"
        style={{ transitionDelay: `${delay}s` }}
      >
        <p>{cell.paragraph}</p>
        <Button variant="black">{cell.button}</Button>
      </div>
    )
  }

  return null
}

export function ProjectsHeading() {
  return (
    <h2 className="display-heading projects__heading">
      <span>UI/UX</span>
      <span>Branding</span>
      <span>Graphics</span>
    </h2>
  )
}

function ProjectsShowcase() {
  return (
    <section className="projects">
      <div className="container">
        {projectRows.map((row, rowIndex) => (
          <div
            className={`projects__row projects__row--${row.layout}`}
            key={`row-${rowIndex}`}
            style={{
              gap: row.gap ? `${row.gap / 16}rem` : undefined,
              justifyContent: row.justify,
            }}
          >
            {row.cells.map((cell, cellIndex) => (
              <ProjectCell
                cell={cell}
                delay={Math.min(cellIndex * 0.08, 0.24)}
                key={`row-${rowIndex}-cell-${cellIndex}`}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsShowcase
