import symbolRev from '../assets/symbol-rev.png'
import { contact, checklist } from '../content.js'

export default function Contact() {
  return (
    <section id="contact" className="on-navy contact">
      <img className="motif" src={symbolRev} alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="left">
          <p className="eyebrow light">Start a project</p>
          <h2>Your vision. <em>Our next conversation.</em></h2>
          <p>Tell us about your home and what you want to change. We will respond with clear next steps.</p>
          <a className="btn btn-white" href={`mailto:${contact.email}`}>Contact our team</a>
        </div>
        <div className="checklist">
          <p className="eyebrow light">A good place to start</p>
          <ul>{checklist.map((c) => <li key={c}>{c}</li>)}</ul>
        </div>
      </div>
    </section>
  )
}
