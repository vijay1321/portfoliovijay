import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Phone, Linkedin, Github } from 'lucide-react';

import profileImg from '../assets/images/profile.jpeg';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
    },
  };

  const splitVariantLeft = {
    hidden: { x: '-100%', opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] }
    }
  };

  const splitVariantRight = {
    hidden: { x: '100%', opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] }
    }
  };

  const quickLinks = [
    { icon: <Mail className="w-4 h-4" />, label: 'vrvijay2005@gmail.com', href: 'mailto:vrvijay2005@gmail.com' },
    { icon: <Phone className="w-4 h-4" />, label: '+91 9361372454', href: 'tel:+919361372454' },
    { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/vijay13072005' },
    { icon: <Github className="w-4 h-4" />, label: 'GitHub', href: 'https://github.com/vijay1321' },
  ];

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const section = document.getElementById('projects');
    if (!section) return;

    const offset = 24;
    const start = window.pageYOffset;
    const end = section.getBoundingClientRect().top + start - offset;
    const distance = end - start;
    const duration = 500;
    let startTime = null;

    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const animateScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeInOutQuad(progress);
      window.scrollTo(0, start + distance * easedProgress);
      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <section id="home" className="min-h-screen relative flex items-start justify-center px-4 md:px-20 overflow-hidden pt-14 md:pt-20 pb-8 md:pb-0">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <motion.div 
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 0.3 }}
           transition={{ duration: 3, ease: "easeOut" }}
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180vw] h-[180vw] md:w-[150vw] md:h-[150vw] border-[1px] border-white/5 rounded-full"
         />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-start"
      >
        
        {/* Left Side: Content */}
        <motion.div variants={splitVariantLeft} className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left max-w-xl sm:max-w-2xl">
          <div className="overflow-hidden mb-6 w-full">
            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-medium uppercase tracking-tight leading-[0.9] text-white"
            >
              MERN Stack<br />
              <span className="text-accent italic">Developer.</span>
            </motion.h1>
          </div>

          <motion.div variants={itemVariants} className="max-w-lg sm:max-w-xl mb-6 md:mb-10">
            <p className="font-sans text-sm md:text-base text-white/55 font-light leading-relaxed mb-4 px-4 md:px-0">
              I build efficient, scalable, and user-friendly MERN web applications with clean UI and strong performance.
            </p>
            <p className="hidden sm:block text-xs sm:text-sm text-gray-400 font-sans leading-relaxed border-l-2 border-accent pl-6 italic mb-6 text-left">
              "Building ideas into reality through code."
            </p>
            <p className="block sm:hidden text-[10px] text-gray-400 font-sans leading-relaxed italic mb-4 text-left">
              "Building ideas into reality through code."
            </p>
          </motion.div>

          {/* Quick contact links */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-2 md:flex md:flex-wrap md:gap-3 justify-items-center md:justify-start mb-5 md:mb-8 px-2 md:px-0">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="min-w-0 flex items-center gap-2 text-[8px] sm:text-[9px] text-white/40 hover:text-accent transition-colors font-sans uppercase tracking-wider border border-white/10 hover:border-accent/40 px-2.5 py-1.5 rounded-full truncate"
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-2 sm:grid-cols-2 justify-between w-full px-2 md:px-0">
            <a 
              href="#projects"
              onClick={handleScrollToProjects}
              className="group flex items-center justify-center gap-2 bg-white text-black px-3 py-3 sm:px-5 sm:py-3 md:px-10 rounded-full font-sans font-bold hover:bg-accent transition-all duration-500 uppercase tracking-widest text-[9px] md:text-xs w-full"
            >
              View Projects 
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
            <a 
              href="/resume.pdf" 
              download="Vijay_R_Resume.pdf"
              className="flex items-center justify-center gap-2 px-3 py-3 sm:px-5 sm:py-3 md:px-10 rounded-full font-sans font-bold border border-white/20 hover:bg-white/10 transition-all duration-500 backdrop-blur-sm uppercase tracking-widest text-[9px] md:text-xs text-white w-full"
            >
              Download Resume
              <Download className="w-3 h-3 md:w-4 md:h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Image Reveal */}
        <motion.div 
          variants={splitVariantRight}
          className="order-1 md:order-2 flex flex-col items-center justify-center mt-8 md:mt-0"
        >
          <div className="relative w-full max-w-[220px] sm:max-w-[280px] aspect-square group mb-6">
            <motion.div 
               initial={{ scale: 0.95 }}
               whileInView={{ scale: 1 }}
               transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
               className="w-full h-full overflow-hidden rounded-full border border-white/10 relative shadow-2xl bg-transparent"
            >
              <img 
                src={profileImg} 
                alt="Vijay R" 
                className="w-full h-full object-cover object-center transition-all duration-1000 ease-in-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"></div>
            </motion.div>
            
            {/* Premium Minimalist & Professional Aura */}
            
            {/* Very soft, elegant offset glows */}
            <motion.div 
              animate={{ 
                x: [0, 15, -10, 0], 
                y: [0, -15, 10, 0] 
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-3/4 h-3/4 bg-accent/20 rounded-full blur-[40px] -z-10" 
            />
            <motion.div 
              animate={{ 
                x: [0, -15, 10, 0], 
                y: [0, 15, -10, 0] 
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-3/4 h-3/4 bg-white/10 rounded-full blur-[40px] -z-10" 
            />

            {/* Outer Glassmorphic Frame */}
            <div className="absolute -inset-6 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm -z-10" />

            {/* Minimalist Rotating Trace */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 rounded-full border border-transparent border-t-accent/40 -z-10"
            />

            {/* Clean Inner Border */}
            <div className="absolute -inset-[3px] rounded-full border border-white/10 -z-10" />
            <motion.div 
               animate={{ opacity: [0.3, 0.7, 0.3] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -inset-[3px] rounded-full border border-accent/20 -z-10"
            />
          </div>
          
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
             <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-widest text-accent leading-none">
               Vijay R
             </h2>
             <div className="h-0.5 w-12 bg-accent mt-4 mx-auto opacity-50"></div>
          </motion.div>
        </motion.div>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-sans">Scroll Down</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-accent to-transparent"></div>
      </motion.div>
    </section>
  );
}
