import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './sections/Hero';
import WhyHireMe from './sections/WhyHireMe';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <div className="bg-blob bg-blob-1"></div>
      <div className="bg-blob bg-blob-2"></div>
      <div className="data-grid"></div>

      <Navbar />
      <main>
        <Hero />
        <WhyHireMe />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
