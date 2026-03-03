import React from 'react';
import { Award, BookOpen, Calendar, CheckCircle } from 'lucide-react';
import { COURSES_DATA } from '../constants';

const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-32 relative bg-white/50 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-indigo-50 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-3 block">Continuous Learning</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-outfit">Courses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Certifications</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES_DATA.map((course, idx) => (
            <div
              key={course.id}
              className="group relative bg-white rounded-[2rem] p-8 border border-slate-100 hover:border-indigo-200 transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-3 flex flex-col h-full animate-fade-in-up shadow-sm"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-indigo-500/20">
                  <Award size={28} />
                </div>
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-wider border border-slate-100 group-hover:bg-cyan-50 group-hover:text-cyan-600 group-hover:border-cyan-100 transition-colors">
                  <Calendar size={12} className="text-cyan-500" />
                  {course.year}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors font-outfit leading-tight">
                {course.title}
              </h3>

              <div className="flex items-center gap-2 mb-6 text-indigo-600/70 font-bold text-xs uppercase tracking-widest">
                <BookOpen size={14} className="text-cyan-500" />
                {course.provider}
              </div>

              <p className="text-slate-600 mb-8 leading-relaxed flex-grow text-sm">
                {course.description}
              </p>

              <div className="pt-8 border-t border-slate-50 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {course.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 group-hover:border-indigo-100 group-hover:bg-white transition-all">
                      <CheckCircle size={10} className="text-indigo-400" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;