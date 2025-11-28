import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { SectionId } from '../constants';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const heroSection = document.getElementById(SectionId.HERO);
    if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 right-6 z-40 p-3 rounded-full bg-slate-200 dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-300 dark:hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
      }`}
      aria-label="Back to Top"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default ScrollToTop;