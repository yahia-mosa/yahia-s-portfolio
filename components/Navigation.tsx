import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Courses', href: '#courses' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled
        ? 'bg-white/80 backdrop-blur-xl border-slate-200 py-3 shadow-lg shadow-slate-200/50'
        : 'bg-transparent border-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="group relative text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-1">
          <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-2 shadow-md shadow-indigo-500/20 text-white transition-all">
            {PERSONAL_INFO.name.charAt(0)}
          </span>
          {PERSONAL_INFO.name}<span className="text-cyan-500">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 relative group overflow-hidden rounded-lg transition-colors"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute inset-0 bg-slate-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
          ))}
          <a
            href={PERSONAL_INFO.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-6 py-2 bg-slate-900 text-white text-sm font-bold rounded-full hover:shadow-lg hover:shadow-slate-900/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Resume
          </a>
        </div>

        {/* Mobile Nav Button */}
        <button
          className="md:hidden text-slate-700 p-2 hover:bg-slate-100 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 hover:text-slate-900 font-medium py-3 border-b border-slate-50 hover:border-cyan-500/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href={PERSONAL_INFO.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center mt-2 px-6 py-3 bg-slate-900 text-white font-bold rounded-lg shadow-lg shadow-slate-900/10"
          >
            Open Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;