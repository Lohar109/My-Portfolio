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
      <div className="absolute right-20 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-pink-100 whitespace-nowrap">
          <p className="text-sm font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Hi! I'm Vaibhav's AI ✨
          </p>
        </div>
      </div>

      <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-xl opacity-40 group-hover:opacity-80 animate-pulse transition-opacity duration-500"></div>

      <div className="relative bg-white/10 backdrop-blur-xl rounded-full p-1 border border-white/30 shadow-2xl cursor-pointer hover:scale-110 transition-transform duration-500 overflow-hidden">
        {View}
      </div>
    </div>
  )
}

export default FloatingAssistant