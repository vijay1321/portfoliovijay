import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Cursor from './components/Cursor';
import Loading from './components/Loading';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Studies from './components/Studies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { X, Menu as MenuIcon } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); 
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Academic', href: '#academic' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loading key="loading" />
      ) : (
        <motion.div 
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="scroll-smooth selection:bg-accent selection:text-black"
        >
          <div className="noise-overlay"></div>
          <Cursor />
          
          {/* Floating Header */}
          <header className="fixed top-0 left-0 w-full z-50 p-6 md:px-20 md:py-8 flex justify-between items-center pointer-events-none">
            <a 
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="font-display font-bold text-xl uppercase tracking-widest mix-blend-difference pointer-events-auto flex flex-col cursor-pointer"
            >
              <span className="text-white">VIJAY R</span>
              <span className="text-[10px] text-accent tracking-[0.3em]">MERN STACK DEVELOPER</span>
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8 pointer-events-auto mix-blend-difference">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-sans text-[10px] uppercase tracking-[0.4em] font-black text-white hover:text-accent transition-colors cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
              className="md:hidden font-sans text-sm tracking-widest pointer-events-auto cursor-pointer hover:text-accent transition-colors uppercase bg-transparent border-none outline-none mix-blend-difference z-[11000] flex items-center gap-2"
            >
              {isMenuOpen ? <X className="w-5 h-5 font-bold" /> : <MenuIcon className="w-5 h-5 font-bold" />}
              <span className="font-black text-[10px] tracking-[0.3em]">{isMenuOpen ? 'CLOSE' : 'MENU'}</span>
            </button>
          </header>

          {/* Fullscreen Mobile Menu Overlay */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="fixed inset-0 bg-background/98 backdrop-blur-3xl z-[10500] flex flex-col items-center justify-center p-10"
              >
                <div className="absolute top-20 left-10 md:left-20 opacity-10 pointer-events-none">
                  <span className="text-[20vw] font-display font-black text-white uppercase leading-none italic">MENU</span>
                </div>

                <nav className="flex flex-col gap-5 md:gap-8 text-center relative z-10">
                  {navItems.map((item, idx) => (
                    <motion.a 
                      key={item.name} 
                      href={item.href} 
                      onClick={(e) => handleNavClick(e, item.href)}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + idx * 0.08, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                      className="text-4xl sm:text-6xl font-display font-black uppercase text-white hover:text-accent transition-all tracking-tighter hover:italic hover:pl-4"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </nav>

                <div className="absolute bottom-10 left-0 w-full flex flex-col items-center gap-2 opacity-30 text-[9px] uppercase tracking-widest font-sans font-bold text-gray-500">
                   <span>Vijay R × MERN Stack Developer × 2025</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>


          <main className={isMenuOpen ? 'blur-md transition-all duration-700' : 'transition-all duration-700'}>
            <Hero />
            <Skills />
            <Studies />
            <Projects />
            <Certificates />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </AnimatePresence>

  );
}

export default App;
