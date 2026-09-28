import { useEffect, useRef } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/** Tilts the element in 3D toward the cursor while hovered, then eases back flat. */
export function use3DTilt({ maxTilt = 10, scale = 1.03 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    const handleEnter = () => {
      el.style.transition = 'transform 0.1s ease-out'
    }

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect()
      const relX = (e.clientX - rect.left) / rect.width - 0.5
      const relY = (e.clientY - rect.top) / rect.height - 0.5
      const rotateY = relX * maxTilt * 2
      const rotateX = -relY * maxTilt * 2
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`
    }

    const handleLeave = () => {
      el.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
    }

    el.addEventListener('mouseenter', handleEnter)
    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)
    return () => {
      el.removeEventListener('mouseenter', handleEnter)
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [maxTilt, scale])

  return ref
}
