import React from 'react';

export function About(): JSX.Element {
  return (
    <section id="about" className="section dark">
      <div className="container about-grid">
        <div className="about-left">
          <img src="https://images.unsplash.com/photo-1515177549874-6b3dbb1d3f29?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=b0aeb6f0f0c6e6d5f2b1a2c7ea12345" alt="Basel Aly portrait" className="founder-photo" />
        </div>
        <div className="about-right">
          <h2 className="section-title">Built on Precision. Driven by Emotion.</h2>
          <p className="lead">Peak Studios was founded by <strong>Basel Aly</strong>, a sound designer and mix engineer with 15+ years of experience across film, television, advertising, and music. Our mission is simple — deliver world-class audio that elevates every frame, every performance, and every emotion.</p>
          <div className="grid two mt-medium">
            <div className="mini-card">
              <h4>Craft</h4>
              <p>Decades of hands-on experience with cutting-edge tools — Pro Tools, iZotope RX, Dolby & more.</p>
            </div>
            <div className="mini-card">
              <h4>Precision</h4>
              <p>From dialogue to dynamic range, every element is tuned and referenced across platforms.</p>
            </div>
            <div className="mini-card">
              <h4>Emotion</h4>
              <p>We mix with story in mind, shaping sound to match narrative rhythm and intent.</p>
            </div>
            <div className="mini-card">
              <h4>Speed</h4>
              <p>AI-augmented workflows deliver faster turnarounds without sacrificing quality.</p>
            </div>
          </div>
          <div className="mt-medium">
            <a className="btn btn-primary" href="#contact">Start Your Project</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;


