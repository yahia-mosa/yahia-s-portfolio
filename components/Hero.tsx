import React from 'react';
import { Sparkles } from 'lucide-react';
import { PERSONAL_INFO, EXECUTIVE_SUMMARY } from '../constants';

const Hero: React.FC = () => {
  const paragraphs = EXECUTIVE_SUMMARY.split('\n\n');
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full bg-white">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-indigo-200/30 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-200/30 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 brightness-100 contrast-150 mix-blend-soft-light"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">



          {/* Name */}
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 tracking-tighter mb-4 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            {PERSONAL_INFO.name}
          </h2>

          {/* Main headline */}

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.2] mb-4 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
            {PERSONAL_INFO.title.split(' | ').map((part, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span className="text-slate-300 mx-2">|</span>}
                <span className={i % 2 === 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400" : ""}>
                  {part}
                </span>
              </React.Fragment>
            ))}
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-medium tracking-wide mb-8 animate-fade-in-up" style={{ animationDelay: '0.28s' }}>
            {PERSONAL_INFO.tagline}
          </p>

          {/* Three-paragraph description */}
          <div className="space-y-4 mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {paragraphs.map((para, idx) => (
              idx === paragraphs.length - 1 ? (
                <div key={idx} className="flex items-start gap-3 mt-2 pt-4 border-t border-slate-100">
                  <div className="w-1 h-full min-h-[20px] bg-gradient-to-b from-indigo-500 to-cyan-400 rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-base font-bold text-slate-800 italic leading-relaxed">{para}</p>
                </div>
              ) : (
                <p key={idx} className="text-slate-600 leading-relaxed text-base">{para}</p>
              )
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-slate-900 text-white rounded-full font-bold overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-slate-900/30"
            >
              <span className="relative z-10">Explore Case Studies</span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-full font-semibold hover:bg-slate-50 hover:border-cyan-500/50 transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              Let's Build Together
            </a>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end animate-float">
          <div className="relative w-full max-w-md aspect-[3/4]">
            {/* Decorative Elements (Rectangular for portrait) */}
            <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[2rem] border-2 border-violet-200/60 z-0"></div>
            <div className="absolute inset-0 -translate-x-4 -translate-y-4 rounded-[2rem] bg-gradient-to-br from-violet-100 to-cyan-100 opacity-60 z-0"></div>

            {/* Profile Image Container */}
            <div className="relative h-full w-full rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl shadow-indigo-500/10 bg-white group z-10">
              <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
              <img
                src="/profile.jpg"
                alt="Yahia Mohamed Profile"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-all duration-1000"
              />
            </div>

            {/* Tech Badge */}
            <div className="absolute -left-4 bottom-8 bg-white/90 backdrop-blur-xl border border-white/40 p-4 rounded-2xl shadow-xl flex items-center gap-4 z-20 hover:scale-105 transition-transform cursor-default ring-1 ring-slate-100 hover:ring-violet-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-violet-500/30">
                CS
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Class of</p>
                <p className="text-xl font-bold text-slate-900">2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        <span className="text-xs tracking-widest uppercase text-slate-500">Scroll</span>
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-slate-400 rounded-full animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;