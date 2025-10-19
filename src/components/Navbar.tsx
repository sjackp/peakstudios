import React, { useEffect, useState } from 'react';

export function Navbar(): JSX.Element {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleQuoteClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header id="site-header" className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-inner">
        <a className="logo" href="#home">PEAK STUDIOS</a>
        <nav className="nav-links" style={{ display: mobileOpen ? 'flex' as const : undefined }}>
          <a href="#home" onClick={() => setMobileOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
          <a href="#services" onClick={() => setMobileOpen(false)}>Services</a>
          <a href="#work" onClick={() => setMobileOpen(false)}>Work</a>
          <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
          <button id="quoteBtn" className="btn btn-primary" onClick={handleQuoteClick}>Get a Quote</button>
        </nav>

        <button className="burger" id="burger" aria-label="Menu" onClick={() => setMobileOpen(v => !v)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;


