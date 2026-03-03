import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import USP from './components/USP';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Courses from './components/Courses';
import Contact from './components/Contact';
function App() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 overflow-hidden relative selection:bg-indigo-100 selection:text-indigo-900">
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <USP />
        <Experience />
        <Projects />
        <Courses />
        <Contact />
      </main>

      {/* Premium Light Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-indigo-100/40 rounded-full blur-[120px] opacity-60 mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-cyan-100/40 rounded-full blur-[120px] opacity-60 mix-blend-multiply"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none"></div>
      </div>
    </div >
  );
}

export default App;