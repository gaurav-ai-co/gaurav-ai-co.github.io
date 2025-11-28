import React from 'react';
import { SectionId, SOCIAL_LINKS } from '../constants';
import { Github, Linkedin, Twitter, Mail, Phone, Instagram, Facebook } from 'lucide-react';

const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <h2 className="text-cyan-600 dark:text-cyan-400 font-mono mb-4 text-sm">03. What's Next?</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">Let's Connect</h3>
        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10">
          I'm currently seeking challenging and growth-driven opportunities with a reputed IT MNC. 
          If your organization values innovation, performance, and a security-first approach — I'd love to chat.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <a 
            href={`mailto:${SOCIAL_LINKS.email}`} 
            className="flex items-center gap-2 px-8 py-3 border-2 border-cyan-500 text-cyan-600 dark:text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-colors duration-300"
            >
            <Mail size={18} />
            Email Me
            </a>
            <a 
            href={`tel:${SOCIAL_LINKS.phone}`} 
            className="flex items-center gap-2 px-8 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
            >
            <Phone size={18} />
            {SOCIAL_LINKS.phone}
            </a>
        </div>

        <div className="mt-20 pt-10 border-t border-slate-300 dark:border-slate-800 flex flex-col items-center gap-6">
           <div className="flex gap-6 flex-wrap justify-center">
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-700 dark:hover:text-cyan-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-cyan-400 transition-colors">
                <Github size={20} />
              </a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 dark:hover:text-cyan-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-green-600 dark:hover:text-cyan-400 transition-colors">
                <WhatsAppIcon size={20} />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-pink-600 dark:hover:text-cyan-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                <Facebook size={20} />
              </a>
           </div>
           <p className="text-slate-500 dark:text-slate-600 text-sm">
             Designed & Built by Gaurav Kumar Dhorajiya.
           </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;