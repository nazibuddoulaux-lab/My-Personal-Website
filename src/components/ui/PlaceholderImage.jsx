import './PlaceholderImage.css'

function PlaceholderImage({ label, ratio = '4 / 3', className = '' }) {
  return (
    <div
      className={`placeholder-image ${className}`.trim()}
      style={{ aspectRatio: ratio }}
    >
      <span>{label}</span>
    </div>
  )
}

export default PlaceholderImage
