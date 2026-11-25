import Media from './Media.jsx'
import { projects } from '../content.js'

export default function Work() {
  return (
    <section id="work" className="wrap sec">
      <div className="head-row">
        <div className="stack">
          <p className="eyebrow">Selected work</p>
          <h2>The details make <em>the difference.</em></h2>
        </div>
        <a className="link-arrow rule" href="#work">View all projects →</a>
      </div>
      <div className="grid g-work">
        {projects.map((p, i) => (
          <a key={i} className="card-project" href="#contact">
            <Media src={p.image} alt={p.alt} label="Real project photo goes here" />
            <div className="label">{p.label}</div>
            <h3>{p.name} <span aria-hidden="true">↗</span></h3>
          </a>
        ))}
      </div>
      <div className="feature">
        <Media label="Before photo" />
        <div className="copy">
          <div className="label">In progress · [LOCATION]</div>
          <h3>[Featured project name]</h3>
          <p>Follow the transformation from first walkthrough to finished home, with same-angle before and after photos of real work.</p>
          <a className="link-arrow" href="#contact">Follow the project ↗</a>
        </div>
      </div>
    </section>
  )
}
