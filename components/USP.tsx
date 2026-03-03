import React from 'react';
import { Brain, Target, Zap, Globe, LucideIcon } from 'lucide-react';
import { USP_ITEMS } from '../constants';

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Target,
  Zap,
  Globe
};

const USP: React.FC = () => {
  return (
    <section id="usp" className="py-32 relative overflow-hidden bg-white/30">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4 block">Unique Value Proposition</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-outfit">
            What Sets Me <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Apart</span>
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Unlike developers who focus only on features, <span className="text-slate-900 font-semibold">I approach every project with a system architecture mindset.</span> I design complete, scalable, and AI-integrated solutions that connect every layer of the stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {USP_ITEMS.map((item, idx) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.id}
                className="group relative p-px rounded-2xl bg-gradient-to-b from-slate-200 to-transparent hover:from-indigo-500/50 hover:to-cyan-500/50 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10"
              >
                <div className="bg-white h-full p-8 rounded-[15px] relative overflow-hidden group-hover:bg-slate-50 transition-colors">
                  {/* Background Glow on Hover */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl transform translate-x-10 -translate-y-10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  <div className="relative z-10 text-center md:text-left">
                    <div className="w-14 h-14 bg-indigo-50 rounded-xl border border-indigo-100 flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform duration-300 shadow-sm group-hover:shadow-indigo-500/20">
                      <Icon className="text-indigo-600" size={28} />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors uppercase tracking-tight">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Powerful Value Statement Card */}
        <div className="relative p-px rounded-[2.5rem] bg-gradient-to-r from-indigo-500/20 via-cyan-500/20 to-blue-500/20 shadow-2xl shadow-indigo-500/10">
          <div className="bg-white/90 backdrop-blur-2xl rounded-[2.4rem] p-8 md:p-16 relative overflow-hidden text-slate-900 border border-white/50">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '3s' }}></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 max-w-4xl leading-tight text-slate-900">
                "I transform complex requirements into <span className="text-indigo-600">intelligent, production-ready systems</span> that combine disciplined software engineering with applied artificial intelligence."
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl mt-8">
                {[
                  "Complete System Design",
                  "AI & Clean Architecture",
                  "Scalability First",
                  "98%+ AI Accuracy",
                  "Seamless Integration",
                  "Strategic Thinking"
                ].map((point, i) => (
                  <div key={i} className="flex items-center justify-center gap-3 py-3 px-6 bg-slate-50 rounded-2xl border border-slate-200 hover:bg-white hover:border-indigo-500/30 transition-all shadow-sm hover:shadow-md">
                    <Target size={16} className="text-indigo-600" />
                    <span className="font-semibold text-slate-700 text-sm tracking-wide">{point}</span>
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

export default USP;