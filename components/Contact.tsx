import React from 'react';
import { Mail, Linkedin, Github, MessageCircle, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32 relative bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3 block">Get In Touch</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
            Let's build something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">extraordinary</span>.
          </h2>
          <p className="text-slate-600 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto">
            I'm always open to discussing system architecture, AI integrations, or exploring new enterprise-grade development opportunities.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="group flex flex-col items-center gap-3 sm:gap-4 p-5 sm:p-8 bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-indigo-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
              <Mail size={20} />
            </div>
            <div className="text-center">
              <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 break-all">{PERSONAL_INFO.email}</p>
            </div>
          </a>

          <a
            href={PERSONAL_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 sm:gap-4 p-5 sm:p-8 bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
              <MessageCircle size={20} />
            </div>
            <div className="text-center">
              <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">WhatsApp</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-800">{PERSONAL_INFO.phone}</p>
            </div>
          </a>

          <div className="group flex flex-col items-center gap-3 sm:gap-4 p-5 sm:p-8 bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cyan-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
              <MapPin size={20} />
            </div>
            <div className="text-center">
              <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Location</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-800">{PERSONAL_INFO.location}</p>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest">Connect with me</p>
          <div className="flex gap-3 sm:gap-4 flex-wrap justify-center">
            {[
              { icon: Linkedin, href: PERSONAL_INFO.socials.linkedin, label: 'LinkedIn', color: 'hover:bg-blue-600 hover:border-blue-600' },
              { icon: Github, href: PERSONAL_INFO.socials.github, label: 'GitHub', color: 'hover:bg-slate-900 hover:border-slate-900' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-white rounded-xl sm:rounded-2xl border border-slate-200 text-slate-600 font-semibold text-xs sm:text-sm shadow-sm transition-all duration-300 hover:text-white hover:-translate-y-1 hover:shadow-lg ${social.color}`}
              >
                <social.icon size={16} />
                {social.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
