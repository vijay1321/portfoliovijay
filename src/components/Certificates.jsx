import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Award, Brain, Cpu, Download, Eye, X } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: 'Cyber Security Certification',
    issuer: 'Naan Mudhalvan (Google Sponsored)',
    date: '2024',
    icon: <Shield className="w-8 h-8 text-accent" />,
    color: 'from-blue-500/10 to-transparent',
    border: 'border-blue-500/20',
    file: '/certificates/cyber-security.pdf',
    description: 'Comprehensive cybersecurity training covering network security, ethical hacking fundamentals, and digital safety practices, sponsored by Google through the Naan Mudhalvan initiative.'
  },
  {
    id: 2,
    title: 'EBPL Certification',
    issuer: 'Tamil Nadu Skill Development Corporation',
    date: '2024',
    icon: <Award className="w-8 h-8 text-accent" />,
    color: 'from-orange-500/10 to-transparent',
    border: 'border-orange-500/20',
    file: '/certificates/ebpl.pdf',
    description: 'Evidence-Based Problem Learning certification awarded by Tamil Nadu Skill Development Corporation, demonstrating structured analytical and problem-solving capabilities.'
  },
  {
    id: 3,
    title: 'Critical Thinking in the AI Era',
    issuer: 'HP Life',
    date: '2024',
    icon: <Brain className="w-8 h-8 text-accent" />,
    color: 'from-purple-500/10 to-transparent',
    border: 'border-purple-500/20',
    file: '/certificates/critical-thinking.pdf',
    description: 'Certified by HP Life for mastering critical thinking and decision-making strategies specifically in the context of Artificial Intelligence and modern technology.'
  },
  {
    id: 4,
    title: 'AI for Beginners',
    issuer: 'HP Life',
    date: '2024',
    icon: <Cpu className="w-8 h-8 text-accent" />,
    color: 'from-green-500/10 to-transparent',
    border: 'border-green-500/20',
    file: '/certificates/ai-beginners.pdf',
    description: 'Foundational AI course certified by HP Life, covering artificial intelligence concepts, machine learning basics, and practical AI applications in everyday technology.'
  },
];

export default function Certificates() {
  const [previewCert, setPreviewCert] = useState(null);

  return (
    <section id="certificates" className="py-24 md:py-32 px-6 md:px-20 bg-surface/20 relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8">
          <div className="text-left">
            <span className="font-sans text-[10px] md:text-xs text-accent uppercase tracking-[0.4em] font-black mb-4 block">Achievements</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display uppercase tracking-wider">
              Certifi<span className="text-accent underline decoration-white/10 underline-offset-8">cations</span>
            </h2>
          </div>
          <span className="font-sans text-[10px] md:text-sm text-gray-500 uppercase tracking-widest bg-background/50 px-6 py-3 rounded-full border border-white/5 whitespace-nowrap">
            (04) Certificates
          </span>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              viewport={{ once: true }}
              className={`group relative p-8 md:p-10 border ${cert.border} bg-gradient-to-br ${cert.color} bg-background/50 backdrop-blur-sm rounded-[2rem] overflow-hidden`}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-white/[0.02] rounded-[2rem]" />

              <div className="flex flex-col gap-6 relative z-10">
                {/* Icon + Meta */}
                <div className="flex items-start justify-between gap-4">
                  <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-accent/10 transition-colors duration-500">
                    {cert.icon}
                  </div>
                  <span className="font-sans text-[9px] text-white/30 uppercase tracking-widest font-bold border border-white/10 px-3 py-1.5 rounded-full">
                    {cert.date}
                  </span>
                </div>

                {/* Title & Issuer */}
                <div className="flex flex-col gap-2 text-left">
                  <span className="font-sans text-[10px] text-accent uppercase tracking-widest font-black">{cert.issuer}</span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-medium uppercase text-white leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-gray-500 font-sans text-xs md:text-sm leading-relaxed mt-1">{cert.description}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mt-2">
                  <button
                    onClick={() => setPreviewCert(cert)}
                    className="flex items-center gap-2 font-sans font-bold text-[10px] uppercase tracking-widest bg-accent/10 border border-accent/30 text-accent hover:bg-accent hover:text-black transition-all duration-500 px-5 py-3 rounded-full"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    View Certificate
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
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
                  <span className="text-accent font-sans text-[10px] uppercase tracking-widest font-black">{previewCert.issuer}</span>
                  <h2 className="text-3xl md:text-5xl font-display uppercase text-white tracking-tighter">{previewCert.title}</h2>
                </div>

                <div className="w-full h-[60vh] rounded-[1.5rem] overflow-hidden border border-white/10 bg-surface relative">
                  <object
                    data={`${previewCert.file}#toolbar=0&navpanes=0&scrollbar=0`}
                    type="application/pdf"
                    className="w-full h-full relative z-10"
                    aria-label={previewCert.title}
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <p className="text-white/60 font-sans text-sm mb-4">
                        Your browser does not support embedded PDF viewing.
                      </p>
                      <a
                        href={previewCert.file}
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

      {/* Decorative blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/3 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
}
