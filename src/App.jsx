import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecruiterSnapshot from './components/RecruiterSnapshot';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Backend from './components/Backend';
import Github from './components/Github';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <RecruiterSnapshot />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Backend />
        <Github />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
