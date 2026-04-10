import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, School, BookOpen, Briefcase, X } from 'lucide-react';

const education = [
  { 
    id: 1, 
    degree: 'B.E Computer Science & Engineering', 
    school: 'Sasurie College of Engineering (Autonomous), Tiruppur', 
    period: '2023 – 2027', 
    status: 'CGPA: 7.5',
    icon: <GraduationCap className="w-10 h-10" />,
    description: 'Expected Graduation: 2027. Developing strong foundations in data structures, algorithms, and full-stack development.'
  },
  { 
    id: 2, 
    degree: 'Higher Secondary (12th)', 
    school: 'Government Higher Secondary School, Morattupalayam', 
    period: 'Year: 2023', 
    status: 'Percentage: 86.6%',
    icon: <School className="w-10 h-10" />,
    description: 'Focused on Mathematics and Physics, laying the groundwork for technical problem-solving.'
  },
  {
    id: 3,
    degree: 'SSLC (10th)',
    school: 'Government Higher Secondary School, Morattupalayam',
    period: '',
    status: 'All Pass',
    icon: <BookOpen className="w-10 h-10" />,
    description: 'Successfully completed secondary education with all subjects passed.'
  }
];

const internships = [
  {
    id: 1,
    role: 'Full Stack Developer Intern',
    company: 'Novitech Private Limited, Coimbatore',
    duration: '1 Month',
    certFile: '/certificates/VIJAY R (5).pdf',
    points: [
      'Developed responsive web pages for live projects.',
      'Worked on frontend & backend integration.',
      'Learned and implemented REST APIs in production.'
    ]
  },
  {
    id: 2,
    role: 'UI/UX Design Intern',
    company: 'Novitech Private Limited, Coimbatore',
    duration: '1 Month',
    certFile: '/certificates/B55 FSD Combo UIUX VIP Certificate  (1).pdf',
    points: [
      'Designed user-friendly UI for web applications.',
      'Created wireframes and design mockups.',
      'Collaborated closely with developers for seamless implementation.'
    ]
  }
];

export default function Studies() {
  const [previewCert, setPreviewCert] = useState(null);

  return (
    <section id="academic" className="py-24 md:py-32 px-6 md:px-20 bg-surface/30 backdrop-blur-3xl border-t border-white/5 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 md:gap-20">
        
        <div className="lg:w-1/3 relative lg:sticky lg:top-32 h-fit text-left">
          <span className="font-sans text-[10px] md:text-xs text-accent uppercase tracking-[0.4em] font-black border border-accent/20 px-4 py-2 rounded-full mb-6 md:mb-8 inline-block">Career Path</span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-medium uppercase tracking-tighter text-white leading-tight md:leading-none">Education <br className="hidden md:block" />& <br className="hidden md:block" /><span className="text-accent underline decoration-white/10">Experience</span></h2>
        </div>

        <div className="lg:w-2/3 flex flex-col gap-16 md:gap-24">
          
          {/* Education Section */}
          <div className="flex flex-col gap-8 md:gap-12 text-left">
            <h3 className="font-sans text-[10px] uppercase tracking-[0.5em] text-white/40 font-bold">Academic Journey</h3>
            {education.map((edu, idx) => (
              <motion.div 
                key={edu.id}
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: idx * 0.2, duration: 1, ease: [0.76, 0, 0.24, 1] }}
                viewport={{ once: true }}
                className="relative p-8 md:p-12 border border-white/10 bg-background/50 rounded-[2.5rem] md:rounded-[3rem] group overflow-hidden"
              >
                <div className="absolute top-8 right-8 opacity-5 group-hover:opacity-15 transition-opacity text-accent">
                  {edu.icon}
                </div>

                <div className="flex flex-col gap-6 relative z-10 text-left">
                  <div className="flex flex-wrap items-center gap-4 text-[10px] font-sans text-white/40 tracking-[0.3em] uppercase font-bold">
                    {edu.period && <span>{edu.period}</span>}
                    {edu.period && <span className="hidden sm:block w-12 h-[1px] bg-accent/30"></span>}
                    <span className="text-accent">{edu.status}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium uppercase text-white leading-tight">
                      {edu.degree}
                    </h3>
                    <span className="text-base md:text-lg text-gray-500 font-sans tracking-wide">{edu.school}</span>
                  </div>
                  <p className="max-w-lg text-gray-500 font-sans italic opacity-80 leading-relaxed text-xs md:text-sm">
                    "{edu.description}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Internships Section */}
          <div className="flex flex-col gap-8 md:gap-12 text-left">
            <h3 className="font-sans text-[10px] uppercase tracking-[0.5em] text-white/40 font-bold">Industry Experience</h3>
            {internships.map((intern, idx) => (
              <motion.div 
                key={intern.id}
                initial={{ opacity: 0, scale: 0.9, x: -50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: idx * 0.2, duration: 1, ease: [0.76, 0, 0.24, 1] }}
                viewport={{ once: true }}
                className="relative p-8 md:p-12 border border-accent/10 bg-accent/5 rounded-[2.5rem] md:rounded-[3rem] group overflow-hidden"
              >
                <div className="flex flex-col gap-6 relative z-10 text-left">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-accent font-sans text-[10px] uppercase tracking-widest font-black">Internship</span>
                    <span className="text-white/20 text-[10px]">•</span>
                    <span className="text-white/40 font-sans text-[10px] uppercase tracking-widest flex items-center gap-2">
                      <Briefcase className="w-3 h-3" /> {intern.duration}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium uppercase text-white leading-tight">
                      {intern.role}
                    </h3>
                    <span className="text-base md:text-lg text-gray-400 font-sans tracking-wide">{intern.company}</span>
                  </div>
                  <ul className="flex flex-col gap-2 mt-2">
                    {intern.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400 font-sans text-xs md:text-sm leading-relaxed">
                        <span className="text-accent mt-1 text-xs">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  {intern.certFile && (
                    <div className="mt-6">
                      <button
                        onClick={() => setPreviewCert(intern)}
                        className="inline-flex items-center gap-2 font-sans font-bold text-[10px] uppercase tracking-widest bg-accent/10 border border-accent/20 text-accent hover:bg-accent hover:text-black transition-all duration-300 px-5 py-3 rounded-full"
                      >
                         <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
                         View Certificate
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* PDF Preview Modal via Portal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {previewCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100000] flex items-center justify-center p-4 md:p-10 bg-background/95 backdrop-blur-3xl"
            >
              <motion.button
                onClick={() => setPreviewCert(null)}
                className="fixed top-6 right-6 p-4 rounded-full bg-white/10 text-white hover:bg-accent hover:text-black transition-all z-20"
              >
                <X className="w-5 h-5" />
              </motion.button>

              <motion.div
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 60, opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                className="w-full max-w-4xl flex flex-col gap-6"
              >
                <div className="flex flex-col gap-1 text-left">
                  <span className="text-accent font-sans text-[10px] uppercase tracking-widest font-black">{previewCert.company}</span>
                  <h2 className="text-3xl md:text-5xl font-display uppercase text-white tracking-tighter">{previewCert.role}</h2>
                </div>

                <div className="w-full h-[60vh] rounded-[1.5rem] overflow-hidden border border-white/10 bg-surface relative">
                  <object
                    data={`${previewCert.certFile}#toolbar=0&navpanes=0&scrollbar=0`}
                    type="application/pdf"
                    className="w-full h-full relative z-10"
                    aria-label={previewCert.role}
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <p className="text-white/60 font-sans text-sm mb-4">
                        Your browser does not support embedded PDF viewing.
                      </p>
                      <a
                        href={previewCert.certFile}
                        download
                        className="bg-accent text-black font-sans font-bold text-[10px] uppercase tracking-widest px-6 py-3 rounded-full hover:bg-white transition-all"
                      >
                        Download to View
                      </a>
                    </div>
                  </object>
                </div>

                <div className="flex justify-end mt-2">
                  <button
                    onClick={() => setPreviewCert(null)}
                    className="flex items-center gap-3 border border-white/20 text-white font-sans font-bold text-[10px] uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white/10 transition-all"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* Decorative Line */}
      <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-l from-accent/20 to-transparent" />
    </section>
  );
}
