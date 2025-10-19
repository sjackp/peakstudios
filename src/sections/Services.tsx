export function Services() {
  return (
    <section id="services" className="section dark">
      <div className="container">
        <h2 className="section-title">What We Do</h2>
        <p className="section-sub">Every story deserves the right sound.</p>

        <div className="grid three">
          <div className="card">
            <div className="card-icon">🎬</div>
            <h3>Film & TV Post</h3>
            <p>Sound design, dialogue edit, foley, and immersive mixing for cinematic productions.</p>
          </div>
          <div className="card">
            <div className="card-icon">🔊</div>
            <h3>Advertising & Branding</h3>
            <p>Sonic logos, ad mixes, and product soundscapes that define your brand voice.</p>
          </div>
          <div className="card">
            <div className="card-icon">🎧</div>
            <h3>Music Production & Mixing</h3>
            <p>Mixing, mastering and production designed to make music hit with clarity and emotion.</p>
          </div>
        </div>

        <div className="grid three mt-medium">
          <div className="card">
            <div className="card-icon">🎮</div>
            <h3>Game & Interactive Audio</h3>
            <p>Adaptive sound systems, ambience design and engine integration (FMOD/Wwise/Unity/Unreal).</p>
          </div>
          <div className="card">
            <div className="card-icon">🎙️</div>
            <h3>Voice & Podcasts</h3>
            <p>Broadcast-level dialogue editing and mastering for podcasts, docs and narration.</p>
          </div>
          <div className="card">
            <div className="card-icon">🤖</div>
            <h3>AI & Restoration</h3>
            <p>AI-assisted noise removal, dialogue separation and fast, accurate restoration workflows.</p>
          </div>
        </div>

        <div className="cta-row">
          <a href="#contact" className="btn btn-primary">Request a Quote</a>
        </div>
      </div>
    </section>
  );
}

export default Services;


