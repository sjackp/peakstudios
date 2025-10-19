import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import ThemeMessage from './components/ThemeMessage';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Contact from './sections/Contact';

function App() {
  return (
    <main>
      <Navbar />
      <ThemeToggle />
      <ThemeMessage />

      <Hero />
      <Services />

      <section id="work" className="section">
        <div className="container">
          <h2 className="section-title">Recent Projects</h2>
          <p className="section-sub">Showcase coming in Phase 5.</p>
        </div>
      </section>

      <About />

      <Contact />

      <Footer />
    </main>
  );
}

export default App;
