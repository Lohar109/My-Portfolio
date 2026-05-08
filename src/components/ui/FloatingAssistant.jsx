import React from 'react';
import Lottie from 'lottie-react'; 
import animationData from '../../assets/lottie/AI Assistent.json'; 

const FloatingAssistant = () => {
  // Safe-check logic
  const LottieComponent = Lottie?.default || Lottie;

  return (
    /* 1. Fixed Positioning: Isse assistant hamesha corner mein rahega */
    <div className="fixed bottom-12 right-12 z-[9999] pointer-events-auto">
      
      {/* 2. Tooltip (Optionally keep it for better UX) */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
         {/* Tooltip content if needed */}
      </div>

      {/* 3. Main Animation - NO BACKGROUND NO BORDERS */}
      <div className="cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-500">
        <LottieComponent 
          animationData={animationData} 
          loop={true} 
          style={{ width: 100, height: 100 }} // Explicit size ensures visibility
        />
      </div>
    </div>
  );
};

export default FloatingAssistant;
