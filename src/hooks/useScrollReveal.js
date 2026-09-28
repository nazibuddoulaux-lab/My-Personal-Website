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

    // Anything already on screen at load (even partially, or below the
    // 0.15 threshold above) should just be there - no waiting for a
    // scroll to trigger it. Only elements starting below the fold get
    // the scroll-triggered fade-up via the observer.
    els.forEach((el) => {
      const rect = el.getBoundingClientRect()
      const onScreen = rect.top < window.innerHeight && rect.bottom > 0
      if (onScreen) {
        el.classList.add('is-visible')
      } else {
        io.observe(el)
      }
    })

    return () => io.disconnect()
  }, [])
}
