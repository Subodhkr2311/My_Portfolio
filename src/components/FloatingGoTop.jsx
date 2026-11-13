import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function FloatingGoTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 p-3 sm:px-4 sm:py-3 rounded-full bg-neutral-950/90 hover:bg-[#FFD91A] hover:text-black text-white border border-white/15 hover:border-black shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all flex items-center gap-2 group"
        >
          <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
          <span className="hidden sm:inline text-xs font-medium tracking-tight">Top</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

