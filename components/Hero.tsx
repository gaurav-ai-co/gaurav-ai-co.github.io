import React from 'react';
import { SectionId, HERO_DATA } from '../constants';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.HERO} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600/10 dark:bg-purple-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-cyan-600/10 dark:bg-cyan-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-pink-600/10 dark:bg-pink-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-4 tracking-wide animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Hi, my name is
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {HERO_DATA.name}.
            <span className="block text-slate-500 dark:text-slate-400 mt-2">{HERO_DATA.title}.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {HERO_DATA.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a 
              href={`#${SectionId.PROJECTS}`}
              className="group flex items-center justify-center gap-2 px-8 py-3 bg-cyan-500 text-white dark:text-slate-950 font-semibold rounded-lg hover:bg-cyan-600 dark:hover:bg-cyan-400 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-cyan-500/20"
            >
              Check out my work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/resume.pdf"
              download="Gaurav_Kumar_Dhorajiya_Resume.pdf"
              className="flex items-center justify-center gap-2 px-8 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300"
            >
              Download Resume
              <Download className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;