import './PlaceholderImage.css'

function PlaceholderImage({ label, ratio = '4 / 3', className = '', src, style }) {
  if (src) {
    return (
      <img
        className={`placeholder-image placeholder-image--real ${className}`.trim()}
        style={{ aspectRatio: ratio, ...style }}
        src={src}
        alt={label}
      />
    )
  }

  return (
    <div
      className={`placeholder-image ${className}`.trim()}
      style={{ aspectRatio: ratio, ...style }}
    >
      <span>{label}</span>
    </div>
  )
}

export default PlaceholderImage
