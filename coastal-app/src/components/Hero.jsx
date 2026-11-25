import symbolRev from '../assets/symbol-rev.png'

export default function Hero() {
  return (
    <section id="top" className="on-navy hero">
      <img className="motif" src={symbolRev} alt="" aria-hidden="true" />
      <div className="wrap">
        <p className="eyebrow light">Serving South Florida</p>
        <h1>Your home.<br /><em>Your next chapter.</em></h1>
        <p className="lead">A clear plan. Careful workmanship. A home shaped around the way you live. Full home renovations and custom home construction.</p>
        <div className="actions">
          <a className="btn btn-white" href="#expertise">Explore Coastal</a>
          <a className="btn btn-ghost" href="#contact">Start a project</a>
        </div>
      </div>
      <div className="strip">
        <div className="wrap">
          <span>Built Around Your Vision.</span>
          <span>Full Home Renovations &nbsp;/&nbsp; Custom Homes</span>
        </div>
      </div>
    </section>
  )
}
