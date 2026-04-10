import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: <Github className="w-6 h-6 md:w-7 md:h-7" />, 
      href: 'https://github.com/vijay1321' 
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin className="w-6 h-6 md:w-7 md:h-7" />, 
      href: 'https://www.linkedin.com/in/vijay13072005' 
    },
    { 
      name: 'Email', 
      icon: <Mail className="w-6 h-6 md:w-7 md:h-7" />, 
      href: 'mailto:vrvijay2005@gmail.com' 
    },
    { 
      name: 'Instagram', 
      icon: <Instagram className="w-6 h-6 md:w-7 md:h-7" />, 
      href: 'https://www.instagram.com/_mr.vijay_143_?igsh=MTNleHFwdzV4bDB3cw==' 
    },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-accent flex flex-col justify-between p-6 md:p-20 overflow-hidden relative border-t border-white/5">
      <motion.div style={{ y }} className="w-full pointer-events-none select-none opacity-10">
        <h2 className="text-[18vw] leading-none font-display font-black uppercase tracking-tighter text-white w-full text-center mt-10">
          BUILD
        </h2>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full z-10 relative mt-auto pt-20 gap-16">
        <div className="flex flex-col gap-6 max-w-lg text-left">
          <span className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white leading-none">Vijay R</span>
          <p className="text-gray-500 font-sans text-xs md:text-sm tracking-wide leading-relaxed italic border-l border-accent/20 pl-6">
            "Building ideas into reality through code.<br/>Open to internships & collaborations."
          </p>
          {/* Contact at-a-glance */}
          <div className="flex flex-col gap-2 mt-2">
            <a href="mailto:vrvijay2005@gmail.com" className="flex items-center gap-2 text-gray-500 hover:text-accent transition-colors font-sans text-xs">
              <Mail className="w-3.5 h-3.5" /> vrvijay2005@gmail.com
            </a>
            <a href="tel:+919361372454" className="flex items-center gap-2 text-gray-500 hover:text-accent transition-colors font-sans text-xs">
              <Phone className="w-3.5 h-3.5" /> +91 9361372454
            </a>
          </div>
        </div>
        
        <div className="flex gap-8 md:gap-12 font-sans uppercase tracking-[0.3em] text-xs font-black text-white">
          {socialLinks.map((link) => (
            <motion.a 
              key={link.name}
              href={link.href} 
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer" 
              whileHover={{ 
                scale: 1.25, 
                color: '#D4FF00', 
                filter: 'drop-shadow(0 0 18px rgba(212,255,0,0.5))' 
              }}
              className="flex flex-col items-center gap-3 transition-all"
            >
              {link.icon}
              <span className="text-[9px] opacity-40 tracking-[0.3em]">{link.name}</span>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full z-10 relative mt-20 md:mt-32 opacity-30 text-[9px] uppercase tracking-[0.4em] font-sans font-bold text-gray-500 border-t border-white/5 pt-10 gap-4">
        <div className="flex gap-8">
           <span>Vijay R</span>
           <span>MERN Stack Developer</span>
        </div>
        <span>© 2025 × ALL RIGHTS RESERVED</span>
      </div>
    </footer>
  );
}
