import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Background() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Generate random particles
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      tx: (Math.random() - 0.5) * 100,
      ty: (Math.random() - 0.5) * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
      
      {/* 1. Base Dotted Grid (Static, very dim) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at center, white 1.5px, transparent 1.5px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* 2. Interactive Spotlight Grid Reveal (Follows Mouse) */}
      <div 
        className="absolute inset-0 z-0 opacity-80"
        style={{
          backgroundImage: `radial-gradient(circle at center, #D4FF00 1.5px, transparent 1.5px)`,
          backgroundSize: '40px 40px',
          WebkitMaskImage: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
          maskImage: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
        }}
      />

      {/* 3. Interactive Glowing Cursor Orb */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[120px] z-10"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 100,
          mass: 0.5
        }}
      />

      {/* 4. Drifting Ambient Mesh Gradients (with slight parallax & blend mode) */}
      <motion.div
        style={{
          x: mousePosition.x * -0.03,
          y: mousePosition.y * -0.03,
        }}
        className="absolute w-full h-full inset-0 z-10 mix-blend-screen"
      >
        <motion.div
          animate={{ x: ["0%", "10%", "-10%", "0%"], y: ["0%", "-10%", "10%", "0%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-accent/5 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: ["0%", "-15%", "10%", "0%"], y: ["0%", "15%", "-10%", "0%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] -right-[10%] w-[70%] h-[70%] bg-white/5 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ x: ["0%", "20%", "-20%", "0%"], y: ["0%", "-20%", "20%", "0%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute -bottom-[20%] left-[20%] w-[80%] h-[80%] bg-accent/10 rounded-full blur-[180px]"
        />
      </motion.div>

      {/* 5. Floating Glowing Dust Particles */}
      <div className="absolute inset-0 z-20 mix-blend-screen">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bg-accent rounded-full"
            style={{
              left: `${p.x}vw`,
              top: `${p.y}vh`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              boxShadow: `0 0 10px rgba(212, 255, 0, 0.8)`,
            }}
            animate={{
              x: [0, p.tx, 0],
              y: [0, p.ty, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

    </div>
  );
}
