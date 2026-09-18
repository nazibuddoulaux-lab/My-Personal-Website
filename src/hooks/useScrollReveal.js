import { useEffect } from 'react'

// Watches every `.reveal` element on the page with a single shared
// IntersectionObserver and adds `.is-visible` the first time each one
// enters the viewport, driving the fade-up scroll animation in index.css.
export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return undefined
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )

    els.forEach((el) => io.observe(el))

    return () => io.disconnect()
  }, [])
}
