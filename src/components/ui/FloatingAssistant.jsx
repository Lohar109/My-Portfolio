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
    <div className="fixed bottom-12 right-12 z-[9999] group">
      <div className="pointer-events-none absolute bottom-full left-1/2 mb-4 -translate-x-1/2 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="relative whitespace-nowrap rounded-2xl border border-blue-100 bg-slate-900/90 px-4 py-2 shadow-xl backdrop-blur-md">
          <p className="text-sm font-semibold text-white">Hello</p>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-slate-900/90" aria-hidden="true" />
        </div>
      </div>

      <div
        className="absolute -inset-2 rounded-full blur-3xl opacity-70 transition-opacity duration-700 group-hover:opacity-95"
        style={{ boxShadow: '0 0 50px -12px rgba(30,58,138,0.5)' }}
        aria-hidden="true"
      />

      <div className="relative bg-slate-950/50 backdrop-blur-2xl rounded-full p-1 border border-white/10 shadow-2xl cursor-pointer hover:scale-110 transition-transform duration-500 overflow-hidden">
        {View}
      </div>
    </div>
  )
}

export default FloatingAssistant