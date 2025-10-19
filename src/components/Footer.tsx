import React from 'react';

export function Footer(): JSX.Element {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="f-col">
          <div className="logo">PEAK STUDIOS</div>
          <div className="tagline">Peak-Level Sound.</div>
        </div>

        <div className="f-col">
          <h4>Links</h4>
          <nav className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="f-col">
          <h4>Contact</h4>
          <div>hello@peakstudios.io</div>
          <div>Cairo, Egypt</div>
        </div>
      </div>

      <div className="copyright">© <span>{year}</span> Peak Studios · All Rights Reserved</div>
    </footer>
  );
}

export default Footer;


