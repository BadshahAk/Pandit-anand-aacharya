import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-40 p-3.5 rounded-full bg-[#350A16] hover:bg-[#24060D] text-[#D6AD55] shadow-2xl transition-all hover:scale-105 cursor-pointer border border-[#D6AD55]/60"
      aria-label="Scroll to top"
      title="ऊपर जाएं / Back to top"
    >
      <ArrowUp className="w-5 h-5 text-[#D6AD55]" />
    </button>
  );
};
