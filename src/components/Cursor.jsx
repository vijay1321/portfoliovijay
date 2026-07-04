import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function hasFinePointer() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia?.('(pointer: fine)').matches ?? true;
}

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isCursorActive, setIsCursorActive] = useState(false);

  useEffect(() => {
    const updateCursorState = () => {
      setIsCursorActive(hasFinePointer() && window.innerWidth >= 768);
    };

    updateCursorState();
    window.addEventListener('resize', updateCursorState);

    if (!hasFinePointer() || window.innerWidth < 768) {
      return () => window.removeEventListener('resize', updateCursorState);
    }

    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', updateCursorState);
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isCursorActive) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent/50 pointer-events-none z-[100000] hidden md:flex items-center justify-center mix-blend-screen"
        style={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? 'rgba(212, 255, 0, 0.2)' : 'rgba(255, 255, 255, 0.05)',
          opacity: 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white shadow-[0_0_15px_rgba(212,255,0,0.8)] pointer-events-none z-[100001] hidden md:block mix-blend-screen"
        style={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    </>
  );
}
