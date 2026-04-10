import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 bg-background z-[20000] flex flex-col items-center justify-center p-10 overflow-hidden"
    >
      <div className="relative flex flex-col items-center">
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <h1 className="text-4xl md:text-6xl font-display font-medium uppercase tracking-tighter text-white">
            VIJAY <span className="text-accent underline decoration-white/20 underline-offset-[1vw]">R</span>
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="w-48 h-[2px] bg-accent mt-6 origin-left"
        />
        
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-500 font-sans text-xs uppercase tracking-[0.4em] mt-4"
        >
          Portfolio 2026
        </motion.span>
      </div>

      {/* Background Animated Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-10"
      />
    </motion.div>
  );
};

export default Loading;
