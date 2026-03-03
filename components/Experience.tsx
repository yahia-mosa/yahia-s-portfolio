import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 relative bg-white/20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-3 block">Career Path</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-outfit">Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Journey</span></h2>
        </div>

        <div className="relative">
          {/* Vertical Line Gradient */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-200 via-cyan-100 to-transparent transform md:-translate-x-1/2"></div>

          <div className="space-y-16">
            {EXPERIENCE_DATA.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}
              >
                {/* Glowing Node */}
                <div className="absolute left-6 md:left-1/2 w-5 h-5 rounded-full bg-white border-4 border-indigo-600 transform -translate-x-1/2 mt-8 z-10 shadow-lg shadow-indigo-600/30 transition-all duration-500 group-hover:scale-125 group-hover:shadow-indigo-600/50">
                  <div className="absolute inset-0 bg-indigo-400 rounded-full animate-ping opacity-20"></div>
                </div>

                <div className="flex-1 hidden md:block"></div>

                <div className="flex-1 pl-16 md:pl-0 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className={`glass-card p-10 rounded-[2.5rem] border border-slate-100 hover:border-indigo-200 transition-all duration-500 group hover:-translate-y-2 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] bg-white/70 backdrop-blur-xl ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className={`flex items-center gap-3 text-indigo-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                      <Calendar size={14} className="text-cyan-500" />
                      {item.period}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors font-outfit leading-tight">{item.role}</h3>
                    <div className={`flex items-center gap-2 text-slate-500 mb-6 font-bold text-sm ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                      <Briefcase size={16} className="text-indigo-400" />
                      {item.company}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {item.details && (
                      <ul className="space-y-3 mb-8 text-left">
                        {item.details.map((detail, i) => (
                          <li key={i} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.techStack && (
                      <div className={`flex flex-wrap gap-2 mb-8 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                        {item.techStack.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold rounded-full border border-slate-100 uppercase tracking-wider">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {item.impact && (
                      <div className="p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 group-hover:bg-indigo-50 transition-colors">
                        <p className="text-indigo-900 text-xs font-medium italic leading-relaxed">
                          "{item.impact}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;