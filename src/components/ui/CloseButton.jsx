import { useNavigate } from 'react-router-dom'
import './CloseButton.css'

function CloseButton() {
  const navigate = useNavigate()

  const handleClose = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1)
    } else {
      navigate('/')
    }
  }

  return (
    <button
      type="button"
      className="close-button"
      onClick={handleClose}
      aria-label="Close and go back"
    >
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6 6L18 18M18 6L6 18"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  )
}

export default CloseButton
