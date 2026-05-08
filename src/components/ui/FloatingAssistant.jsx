import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import Lottie from 'lottie-react'; 
import animationData from '../../assets/lottie/AI Assistent.json'; 

const FloatingAssistant = () => {
  // Safe-check logic
  const LottieComponent = Lottie?.default || Lottie;
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [typedText, setTypedText] = useState('');

  const fullText = 'Ask me regarding Vaibhav ✨';

  useEffect(() => {
    if (!isHovering || isOpen) {
      setTypedText('');
      return;
    }

    let charIndex = 0;
    const typingTimer = setInterval(() => {
      charIndex += 1;
      setTypedText(fullText.slice(0, charIndex));

      if (charIndex >= fullText.length) {
        clearInterval(typingTimer);
      }
    }, 35);

    return () => clearInterval(typingTimer);
  }, [isHovering, isOpen, fullText]);

  const handleToggleChat = () => {
    setIsOpen((currentOpen) => !currentOpen);
  };

  return (
    <div className="fixed bottom-12 right-12 z-[9999] overflow-visible">
      <AnimatePresence>
        {isHovering && !isOpen && (
          <motion.div
            className="pointer-events-none absolute bottom-full left-1/2 mb-6 -translate-x-1/2 origin-center overflow-visible whitespace-nowrap"
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            <div className="flex w-max items-center gap-2 rounded-full border-[0.5px] border-black/5 bg-white/80 px-3 py-1.5 shadow-lg shadow-black/5 backdrop-blur-2xl">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" aria-hidden="true" />
              <p className="text-[12px] font-medium text-slate-900 whitespace-nowrap">{typedText}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-28 right-0 h-[500px] w-[350px] overflow-hidden rounded-[2rem] border border-white/20 bg-white/70 shadow-2xl backdrop-blur-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-black/5 px-5 py-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Vaibhav&apos;s Agent</p>
                  <p className="mt-0.5 text-xs font-medium text-slate-500">Ready when you are</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/5 bg-white/60 text-slate-900 transition hover:bg-white"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-5">
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-[1.4rem] rounded-bl-md bg-slate-100 px-4 py-3 text-sm leading-6 text-slate-700 shadow-sm">
                    Hi! I&apos;m currently being configured. You can chat with me soon!
                  </div>
                </div>
              </div>

              <div className="border-t border-black/5 p-4">
                <div className="flex items-center gap-2 rounded-full bg-slate-100/50 px-4 py-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                    disabled
                  />
                  <button
                    type="button"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white transition hover:bg-slate-800"
                    aria-label="Send message"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Transparent icon with hover scale only */}
      <div
        className="cursor-pointer overflow-visible transition-transform duration-500 hover:scale-110 active:scale-95"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={handleToggleChat}
      >
        <LottieComponent 
          animationData={animationData} 
          loop={true} 
          style={{ width: 100, height: 100 }}
        />
      </div>
    </div>
  )
}

export default FloatingAssistant;
