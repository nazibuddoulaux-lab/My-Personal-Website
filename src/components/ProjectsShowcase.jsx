import './ProjectsShowcase.css'
import { projectRows } from '../data/projects'
import PlaceholderImage from './ui/PlaceholderImage'
import Button from './ui/Button'

function ImageCell({ image, caption, delay }) {
  return (
    <figure
      className="project-cell project-cell--image reveal"
      style={{ transitionDelay: `${delay}s` }}
    >
      <a className="project-cell__link" href="#case-study" aria-label={caption}>
        <PlaceholderImage label={image} ratio="384 / 500" />
      </a>
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

function ProjectCell({ cell, delay }) {
  if (cell.type === 'image') {
    return <ImageCell image={cell.image} caption={cell.caption} delay={delay} />
  }

  if (cell.type === 'image-pair') {
    return (
      <div className="project-cell project-cell--pair">
        {cell.items.map((item, itemIndex) => (
          <ImageCell
            key={item.image}
            image={item.image}
            caption={item.caption}
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
    return (
      <div
        className="project-cell project-cell--illustration reveal"
        style={{ transitionDelay: `${delay}s` }}
      >
        <span className="project-cell__badge">{cell.label}</span>
        <p>{cell.paragraph}</p>
      </div>
    )
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
