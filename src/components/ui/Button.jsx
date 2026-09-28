import './Button.css'

function Button({ children, variant = 'gradient', href, className: extraClassName }) {
  const className = `btn btn--${variant}${extraClassName ? ` ${extraClassName}` : ''}`

  if (href) {
    return (
      <a className={className} href={href}>
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
