import { steps } from '../content.js'

export default function Approach() {
  return (
    <section id="approach" className="on-navy">
      <div className="wrap sec">
        <div className="stack" style={{ marginBottom: 48 }}>
          <p className="eyebrow">Our approach</p>
          <h2>A considered process. <em>A remarkable result.</em></h2>
        </div>
        <div className="grid g-steps">
          {steps.map((s) => (
            <div key={s.n} className="step">
              <div className="num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
        <p style={{ margin: '48px 0 0' }}><a className="btn btn-white" href="#contact">Plan your project</a></p>
      </div>
    </section>
  )
}
