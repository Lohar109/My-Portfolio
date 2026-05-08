import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Lottie from 'lottie-react'; 
import animationData from '../../assets/lottie/AI Assistent.json'; 

const FloatingAssistant = () => {
  // Safe-check logic
  const LottieComponent = Lottie?.default || Lottie;
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="fixed bottom-12 right-12 z-[9999] overflow-visible">
      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="pointer-events-none absolute bottom-full left-1/2 mb-5 -translate-x-1/2 origin-center whitespace-nowrap"
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            <div className="rounded-full border border-slate-200 bg-slate-50/80 px-3 py-1.5 shadow-sm backdrop-blur-md">
              <p className="text-sm font-medium text-slate-900">Ask me regarding Vaibhav</p>
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
