export function Contact() {
  const SITE_EMAIL = 'hello@peakstudios.io';
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const name = (formData.get('name') as string || '').trim();
    const email = (formData.get('email') as string || '').trim();
    const type = (formData.get('type') as string) || 'Film';
    const message = (formData.get('message') as string || '').trim();
    const subject = encodeURIComponent(`Peak Studios Inquiry: ${type} — ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nProject Type: ${type}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${SITE_EMAIL}?subject=${subject}&body=${body}`;
  }
  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        <div className="contact-left">
          <h2 className="section-title">Start your next project with Peak-Level Sound.</h2>
          <p className="section-sub">Tell us about your vision. We’ll respond within 24 hours with a tailored plan and quote.</p>
          <ul className="contact-info">
            <li><strong>Location:</strong> Cairo, Egypt — Working Worldwide</li>
            <li><strong>Email:</strong> <a id="siteEmail" href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a></li>
            <li className="socials">
              <a href="#" target="_blank" rel="noopener">Vimeo</a> ·
              <a href="#" target="_blank" rel="noopener">Instagram</a> ·
              <a href="#" target="_blank" rel="noopener">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className="contact-right">
          <form id="contactForm" className="contact-form" autoComplete="off" onSubmit={onSubmit}>
            <label>
              <span className="label">Name</span>
              <input type="text" name="name" id="name" required />
            </label>
            <label>
              <span className="label">Email</span>
              <input type="email" name="email" id="email" required />
            </label>
            <label>
              <span className="label">Project Type</span>
              <select name="type" id="type">
                <option>Film</option>
                <option>Ad</option>
                <option>Music</option>
                <option>Game</option>
                <option>Voice / Podcast</option>
                <option>Other</option>
              </select>
            </label>
            <label>
              <span className="label">Message</span>
              <textarea name="message" id="message" rows={6} required></textarea>
            </label>
            <label>
              <span className="label">Upload (optional)</span>
              <input type="file" id="file" name="file" />
            </label>
            <div className="form-row">
              <button type="submit" className="btn btn-primary">Get a Quote</button>
              <div id="formStatus" className="form-status" aria-live="polite"></div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;


