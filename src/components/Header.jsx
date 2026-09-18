import { useEffect, useState } from 'react'
import './Header.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container site-header__pill">
        <div className="site-header__inner">
          <p className="site-header__name">
            {scrolled ? "Hello, I'm Nayeem" : "Hello, I'm a Product and Brand designer"}
          </p>
          <nav className="site-header__nav">
            <a href="#case-studies">Case Studies</a>
            <a href="#about">About</a>
            <a href="#explorations">Explorations</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
