import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Phone, Linkedin, Github } from 'lucide-react';

import profileImg from '../assets/images/profile.png';

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

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center px-6 md:px-20 overflow-hidden pt-32 md:pt-20">
      
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
        className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
      >
        
        {/* Left Side: Content */}
        <motion.div variants={splitVariantLeft} className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="overflow-hidden mb-6 w-full">
            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-medium uppercase tracking-tight leading-[0.9] text-white"
            >
              MERN Stack<br />
              <span className="text-accent italic">Developer.</span>
            </motion.h1>
          </div>

          <motion.div variants={itemVariants} className="max-w-xl mb-8 md:mb-10">
            <p className="font-sans text-sm md:text-base text-white/50 font-light leading-relaxed mb-6 px-4 md:px-0">
              To launch my career as a <span className="text-white font-medium">MERN Stack Developer</span> in a reputed organization that fosters continuous learning and professional growth. I aim to leverage my skills in web development to build efficient, scalable, and user-friendly applications while continuously enhancing my technical expertise.
            </p>
            <div className="flex justify-center md:justify-start w-full px-6 md:px-0">
              <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed border-l-2 border-accent pl-6 italic mb-6 text-left">
                "Building ideas into reality through code."
              </p>
            </div>
          </motion.div>

          {/* Quick contact links */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center md:justify-start gap-3 mb-8 px-4 md:px-0">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[10px] text-white/40 hover:text-accent transition-colors font-sans uppercase tracking-wider border border-white/10 hover:border-accent/40 px-3 py-2 rounded-full"
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-4 md:gap-6 w-full px-6 md:px-0">
            <a 
              href="#projects"
              className="group flex items-center justify-center gap-4 bg-white text-black px-12 py-5 md:px-10 rounded-full font-sans font-bold hover:bg-accent transition-all duration-500 uppercase tracking-widest text-[10px] md:text-xs"
            >
              View Projects 
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
            <a 
              href="/resume.pdf" 
              download="Vijay_R_Resume.pdf"
              className="flex items-center justify-center gap-4 px-12 py-5 md:px-10 rounded-full font-sans font-bold border border-white/20 hover:bg-white/10 transition-all duration-500 backdrop-blur-sm uppercase tracking-widest text-[10px] md:text-xs text-white"
            >
              Download Resume
              <Download className="w-3 h-3 md:w-4 md:h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Image Reveal */}
        <motion.div 
          variants={splitVariantRight}
          className="order-1 md:order-2 flex flex-col items-center justify-center mt-10 md:mt-0"
        >
          <div className="relative w-full max-w-[320px] sm:max-w-[420px] aspect-square group mb-8">
            <motion.div 
               initial={{ scale: 1.1 }}
               whileInView={{ scale: 1 }}
               transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
               className="w-full h-full bg-surface overflow-hidden rounded-full border border-white/10 relative shadow-2xl"
            >
              <img 
                src={profileImg} 
                alt="Vijay R" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-1000 ease-in-out" 
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-sans">Scroll Down</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-accent to-transparent"></div>
      </motion.div>
    </section>
  );
}
