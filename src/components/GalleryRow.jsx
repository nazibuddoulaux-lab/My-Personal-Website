import './GalleryRow.css'
import PlaceholderImage from './ui/PlaceholderImage'

const items = [
  { label: 'macbook mockup', caption: 'Blue Mandarin style guidelines' },
  { label: 'iphone mockup', caption: 'Blue Mandarin style guidelines' },
  { label: 'macbook on easel', caption: 'Blue Mandarin style guidelines' },
  { label: 'mockup detail', caption: 'Blue Mandarin style guidelines' },
]

function GalleryRow() {
  return (
    <section className="gallery">
      <div className="gallery__grid">
        {items.map((item, index) => (
          <figure
            className="gallery__item reveal"
            key={`${item.label}-${index}`}
            style={{ transitionDelay: `${Math.min(index * 0.08, 0.24)}s` }}
          >
            <a className="gallery__link" href="#case-study" aria-label={item.caption}>
              <PlaceholderImage label={item.label} ratio="3 / 4" />
            </a>
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default GalleryRow
