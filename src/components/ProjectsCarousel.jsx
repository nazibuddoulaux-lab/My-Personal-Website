import { useEffect, useState } from 'react'
import './ProjectsCarousel.css'
import {
  projectSlides,
  SLIDE_HOLD_MS,
  SLIDE_TRAVEL_MS,
} from '../data/projectSlides'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

function ProjectsCarousel() {
  const [state, setState] = useState({ current: 0, leaving: null })
  const count = projectSlides.length

  useEffect(() => {
    projectSlides.forEach(({ src }) => {
      const img = new Image()
      img.src = src
      img.decode?.().catch(() => {})
    })
  }, [])

  useEffect(() => {
    if (count < 2) return undefined

    const advance = setInterval(() => {
      setState((s) => ({ current: (s.current + 1) % count, leaving: s.current }))
    }, SLIDE_HOLD_MS + SLIDE_TRAVEL_MS)

    return () => clearInterval(advance)
  }, [count])

  useEffect(() => {
    if (state.leaving === null) return undefined
    const done = setTimeout(
      () => setState((s) => ({ ...s, leaving: null })),
      prefersReducedMotion() ? 0 : SLIDE_TRAVEL_MS,
    )
    return () => clearTimeout(done)
  }, [state.leaving, state.current])

  const entering = state.leaving !== null

  return (
    <div className="projects-carousel" style={{ '--travel': `${SLIDE_TRAVEL_MS}ms` }}>
      {state.leaving !== null && (
        <div className="projects-carousel__slide projects-carousel__slide--out" key={`out-${state.leaving}`}>
          <img src={projectSlides[state.leaving].src} alt="" />
        </div>
      )}
      <div
        className={`projects-carousel__slide${entering ? ' projects-carousel__slide--in' : ''}`}
        key={`in-${state.current}`}
      >
        <img src={projectSlides[state.current].src} alt={projectSlides[state.current].alt} />
      </div>
    </div>
  )
}

export default ProjectsCarousel
