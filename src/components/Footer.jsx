import './Footer.css'
import Button from './ui/Button'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__bg" aria-hidden="true" />
      <div className="container site-footer__inner">
        <div className="site-footer__top reveal">
          <h2 className="display-heading site-footer__heading">
            Available for remote, hybrid, and relocation opportunities.
          </h2>
          <Button variant="black">Contact Me</Button>
        </div>

        <div className="site-footer__links">
          <a href="#instagram">Instagram</a>
          <a href="#linkedin">Linkedin</a>
          <a href="#pinterest">Pinterest</a>
          <a href="#medium">Medium</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
