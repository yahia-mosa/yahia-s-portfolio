import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, X, Layers, Lightbulb, Code2, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS_DATA, PERSONAL_INFO } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentIdx(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsFullscreen(false);
    setCurrentIdx(0);
    document.body.style.overflow = 'unset';
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const nextScreenshot = () => {
    if (selectedProject?.screenshots) {
      setCurrentIdx((prev) => (prev + 1) % selectedProject.screenshots!.length);
    }
  };

  const prevScreenshot = () => {
    if (selectedProject?.screenshots) {
      setCurrentIdx((prev) => (prev - 1 + selectedProject.screenshots!.length) % selectedProject.screenshots!.length);
    }
  };

  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-32 bg-white/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-4 sm:gap-6">
          <div className="animate-fade-in-up">
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3 block">Case Studies</span>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-900 font-outfit">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Architecture</span> Projects</h2>
          </div>
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border border-slate-200 text-slate-600 hover:text-white hover:bg-slate-900 hover:border-slate-900 transition-all flex items-center gap-2 group shadow-sm hover:shadow-md animate-fade-in-up text-sm sm:text-base"
            style={{ animationDelay: '0.1s' }}
          >
            <Github size={16} /> Explore GitHub
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 lg:gap-10">
          {PROJECTS_DATA.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="group relative rounded-2xl sm:rounded-[2rem] bg-white border border-slate-100 overflow-hidden hover:border-indigo-200 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-4 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] animate-fade-in-up cursor-pointer h-full flex flex-col"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="relative h-52 sm:h-72 overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                />

                <div className="absolute inset-0 z-20 flex items-center justify-center gap-3 sm:gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-6 group-hover:translate-y-0">
                  <span className="px-5 sm:px-8 py-2.5 sm:py-3 bg-white text-slate-900 font-bold rounded-full shadow-2xl transform active:scale-95 transition-transform text-sm">
                    Read Case Study
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-8 relative z-20 bg-white flex flex-grow flex-col">
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-4 group-hover:text-indigo-600 transition-colors flex justify-between items-center font-outfit">
                  {project.title}
                  <ArrowUpRight size={18} className="text-indigo-500" />
                </h4>
                <p className="text-slate-600 text-sm mb-6 sm:mb-8 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2.5 sm:px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-slate-100 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-colors">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2.5 sm:px-3 py-1 bg-slate-50 text-slate-400 text-[10px] font-bold rounded-lg border border-slate-100">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-3 sm:px-4 py-4 sm:py-8" onClick={closeModal}>
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"></div>

          <div
            className="bg-white w-full max-w-5xl max-h-[90vh] rounded-2xl sm:rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] overflow-hidden relative z-10 flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-6 lg:p-8 flex justify-between items-center border-b border-slate-100 bg-white sticky top-0 z-30">
              <div className="min-w-0 flex-1 mr-4">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-outfit truncate">{selectedProject.title}</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-indigo-50 text-indigo-600 text-[8px] sm:text-[9px] font-bold uppercase tracking-widest rounded-md border border-indigo-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={closeModal}
                className="p-2.5 sm:p-3 bg-slate-50 rounded-xl sm:rounded-2xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all shadow-sm flex-shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            <div className="overflow-y-auto flex-grow">
              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8">
                  <div className="space-y-3 sm:space-y-4">
                    <div
                      className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 h-[250px] sm:h-[300px] md:h-[400px] cursor-zoom-in relative group/img"
                      onClick={toggleFullscreen}
                    >
                      <div className="absolute inset-0 bg-slate-900/0 group-hover/img:bg-slate-900/10 transition-colors z-10 flex items-center justify-center">
                        <div className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-white/90 p-2.5 sm:p-3 rounded-full shadow-xl">
                          <Layers className="text-indigo-600" size={18} />
                        </div>
                      </div>
                      <img
                        src={selectedProject.screenshots ? selectedProject.screenshots[currentIdx] : selectedProject.imageUrl}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover/img:scale-105"
                      />
                    </div>

                    {/* Thumbnails */}
                    {selectedProject.screenshots && selectedProject.screenshots.length > 1 && (
                      <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 px-0.5 scrollbar-hide">
                        {selectedProject.screenshots.map((src, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentIdx(idx)}
                            className={`relative flex-shrink-0 w-16 h-10 sm:w-20 sm:h-14 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all ${currentIdx === idx ? 'border-indigo-500 ring-2 ring-indigo-500/20 scale-105' : 'border-slate-100 grayscale hover:grayscale-0'
                              }`}
                          >
                            <img src={src} className="w-full h-full object-cover" alt={`Screenshot ${idx + 1}`} />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
                  {/* Actions Column */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 bg-slate-900 text-white rounded-xl sm:rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-xl shadow-indigo-600/20 active:scale-95 text-sm"
                      >
                        <ExternalLink size={18} /> Live System
                      </a>
                    )}
                    <a
                      href={selectedProject.githubUrl || PERSONAL_INFO.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 bg-white border-2 border-slate-100 text-slate-800 rounded-xl sm:rounded-2xl font-bold hover:bg-slate-50 hover:border-slate-200 transition-all active:scale-95 text-sm"
                    >
                      <Github size={18} /> Repository
                    </a>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    {selectedProject.problem && (
                      <div>
                        <h4 className="flex items-center gap-2 text-[10px] font-bold text-red-500 uppercase tracking-[0.2em] mb-2 sm:mb-3">
                          The Problem
                        </h4>
                        <p className="text-slate-600 leading-relaxed text-base sm:text-lg italic">
                          "{selectedProject.problem}"
                        </p>
                      </div>
                    )}

                    {selectedProject.solution && (
                      <div>
                        <h4 className="flex items-center gap-2 text-[10px] font-bold text-green-600 uppercase tracking-[0.2em] mb-2 sm:mb-3">
                          The Solution
                        </h4>
                        <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                          {selectedProject.solution}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6 lg:p-8 lg:p-12 bg-slate-50/50 border-t border-slate-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  {selectedProject.architectureApproach && (
                    <div>
                      <h4 className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em] mb-4 sm:mb-6">
                        <div className="p-1 px-3 sm:px-4 bg-indigo-50 rounded-full border border-indigo-100 inline-block">System Architecture</div>
                      </h4>
                      <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                        <p className="text-slate-600 leading-relaxed relative z-10 text-sm sm:text-lg">
                          {selectedProject.architectureApproach}
                        </p>
                      </div>
                    </div>
                  )}

                  {selectedProject.impact && (
                    <div>
                      <h4 className="text-[10px] font-bold text-cyan-600 uppercase tracking-[0.2em] mb-4 sm:mb-6">
                        <div className="p-1 px-3 sm:px-4 bg-cyan-50 rounded-full border border-cyan-100 inline-block">Project Impact</div>
                      </h4>
                      <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                        <p className="text-slate-600 leading-relaxed relative z-10 text-sm sm:text-lg">
                          {selectedProject.impact}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Image Lightbox */}
      {isFullscreen && selectedProject && (
        <div
          className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-4 lg:p-12 animate-in fade-in zoom-in duration-300"
          onClick={toggleFullscreen}
        >
          <button
            className="absolute top-4 sm:top-8 right-4 sm:right-8 p-2.5 sm:p-4 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all z-[110]"
            onClick={toggleFullscreen}
          >
            <X size={24} />
          </button>

          {selectedProject.screenshots && selectedProject.screenshots.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevScreenshot(); }}
                className="absolute left-3 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 p-2.5 sm:p-4 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all z-[110]"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextScreenshot(); }}
                className="absolute right-3 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 p-2.5 sm:p-4 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all z-[110]"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          <img
            src={selectedProject.screenshots ? selectedProject.screenshots[currentIdx] : selectedProject.imageUrl}
            alt={selectedProject.title}
            className="max-w-full max-h-full object-contain rounded-xl sm:rounded-2xl shadow-2xl border border-white/10"
            onClick={e => e.stopPropagation()}
          />

          <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 px-4 sm:px-8 py-2 sm:py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/80 font-medium text-xs sm:text-sm">
            {selectedProject.title} — {selectedProject.screenshots ? `Preview ${currentIdx + 1} of ${selectedProject.screenshots.length}` : 'Full Preview'}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
