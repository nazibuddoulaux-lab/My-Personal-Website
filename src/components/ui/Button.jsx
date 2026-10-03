import './Button.css'

function Button({ children, variant = 'gradient', href, className: extraClassName }) {
  const className = `btn btn--${variant}${extraClassName ? ` ${extraClassName}` : ''}`

  if (href) {
    const external = /^https?:\/\//.test(href)
    return (
      <a
        className={className}
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={className}>
      {children}
    </button>
  )
}

export default Button
