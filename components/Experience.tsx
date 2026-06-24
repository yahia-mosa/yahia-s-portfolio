import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-24 lg:py-32 relative bg-white/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20 animate-fade-in-up">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3 block">Career Path</span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-900 font-outfit">Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Journey</span></h2>
        </div>

        <div className="relative">
          {/* Vertical Line Gradient */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-200 via-cyan-100 to-transparent transform md:-translate-x-1/2"></div>

          <div className="space-y-10 sm:space-y-12 lg:space-y-16">
            {EXPERIENCE_DATA.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row gap-6 sm:gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}
              >
                {/* Glowing Node */}
                <div className="absolute left-6 sm:left-8 md:left-1/2 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-white border-3 sm:border-4 border-indigo-600 transform -translate-x-1/2 mt-6 sm:mt-8 z-10 shadow-lg shadow-indigo-600/30 transition-all duration-500 group-hover:scale-125 group-hover:shadow-indigo-600/50">
                  <div className="absolute inset-0 bg-indigo-400 rounded-full animate-ping opacity-20"></div>
                </div>

                <div className="flex-1 hidden md:block"></div>

                <div className="flex-1 pl-12 sm:pl-16 md:pl-0 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className={`glass-card p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-[2.5rem] border border-slate-100 hover:border-indigo-200 transition-all duration-500 group hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] bg-white/70 backdrop-blur-xl`}>
                    <div className={`flex items-center gap-2 sm:gap-3 text-indigo-600 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-3 sm:mb-4 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                      <Calendar size={12} className="text-cyan-500" />
                      {item.period}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1 sm:mb-2 group-hover:text-indigo-600 transition-colors font-outfit leading-tight">{item.role}</h3>
                    <div className={`flex items-center gap-1.5 sm:gap-2 text-slate-500 mb-4 sm:mb-6 font-bold text-xs sm:text-sm ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                      <Briefcase size={14} className="text-indigo-400" />
                      {item.company}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 sm:mb-6">
                      {item.description}
                    </p>

                    {item.details && (
                      <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-left">
                        {item.details.map((detail, i) => (
                          <li key={i} className="flex gap-2 sm:gap-3 text-slate-600 text-sm leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.techStack && (
                      <div className={`flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                        {item.techStack.map((tech, i) => (
                          <span key={i} className="px-2.5 sm:px-3 py-1 bg-slate-50 text-slate-600 text-[10px] sm:text-xs font-bold rounded-full border border-slate-100 uppercase tracking-wider">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {item.impact && (
                      <div className="p-4 sm:p-6 bg-indigo-50/50 rounded-xl sm:rounded-2xl border border-indigo-100 group-hover:bg-indigo-50 transition-colors">
                        <p className="text-indigo-900 text-xs sm:text-sm font-medium italic leading-relaxed">
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
