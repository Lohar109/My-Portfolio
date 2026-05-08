import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Lottie from 'lottie-react'; 
import animationData from '../../assets/lottie/AI Assistent.json'; 

const FloatingAssistant = () => {
  // Safe-check logic
  const LottieComponent = Lottie?.default || Lottie;
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="fixed bottom-12 right-12 z-[9999]">
      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="pointer-events-none absolute bottom-full left-1/2 mb-4 -translate-x-1/2 whitespace-nowrap"
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            <div className="relative rounded-2xl border border-white/10 bg-slate-950/90 px-4 py-2 shadow-2xl backdrop-blur-xl">
              <p className="text-sm font-medium text-cyan-400">Ask me Regarding Vaibhav</p>
              <div
                className="absolute -bottom-2 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-b border-white/10 bg-slate-950/90"
                aria-hidden="true"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Transparent icon with hover scale only */}
      <div
        className="cursor-pointer transition-transform duration-500 hover:scale-110 active:scale-95"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
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
