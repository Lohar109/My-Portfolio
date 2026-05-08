import React from 'react'
import { useLottie } from 'lottie-react'
import animationData from '../../assets/lottie/AI Assistent.json'

const FloatingAssistant = () => {
  const { View } = useLottie(
    {
      animationData,
      loop: true,
      autoplay: true,
    },
    {
      width: 85,
      height: 85,
    }
  )

  return (
    <div className="fixed bottom-8 right-8 z-[9999] group">
      <div className="pointer-events-none absolute bottom-full left-1/2 mb-4 -translate-x-1/2 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="whitespace-nowrap rounded-2xl border border-blue-100 bg-white/90 px-4 py-2 shadow-xl backdrop-blur-md">
          <p className="bg-gradient-to-r from-blue-900 to-cyan-900 bg-clip-text text-sm font-bold text-transparent">
            Hi! I'm Vaibhav's AI ✨
          </p>
        </div>
      </div>

      <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-600/30 blur-xl opacity-50 transition-opacity duration-500 group-hover:opacity-85 animate-pulse"></div>

      <div className="relative bg-white/10 backdrop-blur-xl rounded-full p-1 border border-white/30 shadow-2xl cursor-pointer hover:scale-110 transition-transform duration-500 overflow-hidden">
        {View}
      </div>
    </div>
  )
}

export default FloatingAssistant