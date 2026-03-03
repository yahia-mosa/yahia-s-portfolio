import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO, SKILLS_DATA, EXECUTIVE_SUMMARY } from '../constants';
import { Code, Database, Cpu, Wrench, Layers } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simple trigger for animation on mount/scroll
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    { name: 'Engineering', icon: Layers, skills: SKILLS_DATA.software_engineering, color: 'text-violet-500', bg: 'bg-violet-50/10' },
    { name: 'Backend', icon: Database, skills: SKILLS_DATA.backend, color: 'text-cyan-500', bg: 'bg-cyan-50/10' },
    { name: 'Frontend & Full-Stack', icon: Code, skills: SKILLS_DATA.frontend, color: 'text-blue-500', bg: 'bg-blue-50/10' },
    { name: 'AI & Data', icon: Cpu, skills: SKILLS_DATA.ai_data, color: 'text-pink-500', bg: 'bg-pink-50/10' },
    { name: 'Cloud & Tools', icon: Wrench, skills: [...SKILLS_DATA.cloud_devops, ...SKILLS_DATA.tools], color: 'text-amber-500', bg: 'bg-amber-50/10' },
  ];

  return (
    <section id="about" className="py-32 relative bg-white/50">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          <div className="flex-1 animate-fade-in-up">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-12 bg-indigo-600"></div>
              <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Executive Summary</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Full-Stack Engineering for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Intelligent & Scalable Applications.</span>
            </h2>

            <div className="prose prose-lg text-slate-600 leading-loose">
              {EXECUTIVE_SUMMARY.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-6">
                  {paragraph}
                </p>
              ))}
            </div>


          </div>

          <div className="w-full lg:w-5/12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden group border border-slate-200 shadow-xl shadow-slate-200/50">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

              <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3 relative z-10">
                <div className="p-2 bg-indigo-50 rounded-lg"><Wrench size={20} className="text-indigo-600" /></div>
                Technical Arsenal
              </h3>

              <div className="grid grid-cols-1 gap-8 relative z-10">
                {skillCategories.map((cat, idx) => (
                  <div key={idx} className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                      <cat.icon size={14} className="text-indigo-600" /> {cat.name}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-white border border-slate-100 rounded-lg text-xs font-medium text-slate-600 hover:border-indigo-500/50 hover:text-indigo-600 hover:bg-white transition-all cursor-default shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;