import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

export function useTypewriter(text, { speed = 35, startDelay = 0, start = true } = {}) {
  const [output, setOutput] = useState(prefersReducedMotion() ? text : '')
  const [done, setDone] = useState(prefersReducedMotion())
  const indexRef = useRef(0)

  useEffect(() => {
    if (!start || prefersReducedMotion()) return

    indexRef.current = 0
    setOutput('')
    setDone(false)

    let intervalId
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        indexRef.current += 1
        setOutput(text.slice(0, indexRef.current))
        if (indexRef.current >= text.length) {
          clearInterval(intervalId)
          setDone(true)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed, startDelay, start])

  return { output, done }
}
