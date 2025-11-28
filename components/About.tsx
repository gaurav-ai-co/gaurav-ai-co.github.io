import React from 'react';
import { SectionId, BIO_DATA, SKILLS_DATA, EXPERIENCE_DATA, EDUCATION_DATA } from '../constants';
import { Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-slate-50/50 dark:bg-slate-950/50 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Bio & Skills & Education */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8 flex items-center">
              <span className="text-cyan-600 dark:text-cyan-400 mr-2">01.</span> About Me
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 text-lg">
              {BIO_DATA}
            </p>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-12">
              {SKILLS_DATA.map((skill) => (
                <div 
                  key={skill.name} 
                  className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 transition-colors shadow-sm"
                >
                  <span className="text-cyan-600 dark:text-cyan-400">{skill.icon}</span>
                  <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-2">
              <GraduationCap className="text-cyan-600 dark:text-cyan-400" size={20} />
              Education
            </h3>
            <div className="space-y-6">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-800/50 shadow-sm">
                  <h4 className="text-slate-800 dark:text-slate-200 font-medium">{edu.degree}</h4>
                  <p className="text-cyan-600 dark:text-cyan-400 text-sm">{edu.institution}</p>
                  <p className="text-slate-500 text-xs mt-1">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Experience Timeline */}
          <div className="lg:w-1/2">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-8 flex items-center gap-2">
              <Briefcase className="text-cyan-600 dark:text-cyan-400" size={20}/>
              Experience
            </h3>
            
            <div className="space-y-12 border-l border-slate-300 dark:border-slate-800 ml-3 pl-8 relative">
              {EXPERIENCE_DATA.map((job) => (
                <div key={job.id} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border border-cyan-500 bg-white dark:bg-slate-950 group-hover:bg-cyan-500 transition-colors"></div>
                  
                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {job.role} <span className="text-cyan-600 dark:text-cyan-500">@ {job.company}</span>
                  </h4>
                  <p className="text-sm font-mono text-slate-500 mb-4 mt-1">{job.period}</p>
                  <ul className="space-y-2">
                    {job.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        <span className="text-cyan-600 dark:text-cyan-500 mr-2 mt-1.5 text-xs">▹</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;