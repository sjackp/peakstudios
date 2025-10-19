import React from 'react';

export function Hero(): JSX.Element {
  const VIMEO_VIDEO_ID = 'VIMEO_VIDEO_ID'; // replace later
  return (
    <section id="home" className="hero">
      <div className="hero-video">
        <iframe
          id="heroVimeo"
          src={`https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?background=1&autoplay=1&muted=1&loop=1`}
          frameBorder={0}
          allow="autoplay; fullscreen"
          title="Hero Background"
        />
      </div>
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <h1 className="hero-title">Peak-Level Sound.</h1>
        <p className="hero-sub">Precision-crafted audio for film, television, music, and interactive media. Every mix, every detail — perfectly tuned to tell your story.</p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">Get a Quote</a>
          <a href="#work" className="btn btn-ghost">View Work</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;


