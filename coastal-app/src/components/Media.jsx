import lockup from '../assets/lockup-rev.png'
import { nav, contact } from '../content.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap top">
        <div>
          <img src={lockup} alt="Coastal Renovation and Construction Solutions" />
          <div className="tag">Built Around Your Vision.</div>
        </div>
        <div>
          <h4>Contact</h4>
          <address>{contact.phone}<br />{contact.email}<br />{contact.address}</address>
        </div>
        <nav aria-label="Footer">
          <h4>Explore</h4>
          {nav.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
        </nav>
      </div>
      <div className="wrap legal">
        <span>© {new Date().getFullYear()} Coastal Renovation and Construction Solutions LLC</span>
        <span>Privacy Policy &nbsp;·&nbsp; Opt-out preferences</span>
      </div>
    </footer>
  )
}
