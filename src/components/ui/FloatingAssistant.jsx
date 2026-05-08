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

      <div className="relative cursor-pointer hover:scale-110 transition-transform duration-500">
        {View}
      </div>
    </div>
  )
}

export default FloatingAssistant