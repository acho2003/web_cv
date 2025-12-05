import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark font-sans text-slate-200 selection:bg-white selection:text-black">
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <footer className="py-8 bg-black text-center text-slate-600 text-sm border-t border-slate-900">
        <p>© {new Date().getFullYear()} Chencho Wangdi. Built with React, Tailwind & AI.</p>
      </footer>
    </div>
  );
};

export default App;