import './GalleryRow.css'
import PlaceholderImage from './ui/PlaceholderImage'

const items = [
  {
    label: 'Healio online healthcare platform',
    src: '/images/gallery-1.jpg',
    caption: 'Healio - Online Healthcare Platform Design',
    href: 'https://www.behance.net/gallery/255781473/Healio-Online-Healthcare-Platform-Design',
  },
  {
    label: 'Medtech brand identity, UI and user experience',
    src: '/images/gallery-2.jpg',
    caption: 'Medtech Brand Identity, UI and User Experience Design',
    href: 'https://www.behance.net/gallery/255728149/Medtech-Brand-Identity-UI-and-User-Experience-Design',
  },
  {
    label: 'Dot. branding',
    src: '/images/gallery-3.jpg',
    caption: 'Dot. Branding',
    href: 'https://www.behance.net/gallery/69466931/dot-Branding',
  },
  {
    label: 'Blue Mandarin style guidelines',
    src: '/images/BM.jpg',
    caption: 'Blue Mandarin style guidelines',
    href: 'https://www.behance.net/gallery/210075703/Blue-Mandarin-Brand-Guidelines',
  },
]

function GalleryRow() {
  return (
    <section className="gallery">
      <div className="gallery__grid">
        {items.map((item, index) => (
          <figure
            className="gallery__item reveal"
            key={item.caption}
            style={{ transitionDelay: `${Math.min(index * 0.08, 0.24)}s` }}
          >
            <a
              className="gallery__link"
              href={item.href}
              aria-label={item.caption}
              {...(/^https?:\/\//.test(item.href)
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              <PlaceholderImage label={item.label} src={item.src} ratio="384 / 500" />
            </a>
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default GalleryRow
