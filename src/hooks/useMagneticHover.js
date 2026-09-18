import { useEffect, useRef } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/** Nudges the element a little toward the cursor while it's hovered, then eases back to rest. */
export function useMagneticHover({ strength = 24 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect()
      const relX = (e.clientX - rect.left) / rect.width - 0.5
      const relY = (e.clientY - rect.top) / rect.height - 0.5
      el.style.transform = `translate(${relX * strength}px, ${relY * strength}px)`
    }

    const handleMouseLeave = () => {
      el.style.transform = 'translate(0, 0)'
    }

    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [strength])

  return ref
}
