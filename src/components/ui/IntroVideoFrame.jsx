import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, Volume2, VolumeX } from 'lucide-react'

function IntroVideoFrame() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  const videoUrl = 'https://assets.mixkit.co/videos/preview/mixkit-developer-working-on-his-computer-34282-large.mp4'

  return (
    <div className="relative w-full">
      {/* Absolute Decorative Dot Grid Behind the Mockup (matches top-right in image) */}
      <div 
        className="absolute -right-4 -top-4 -z-10 h-32 w-32 opacity-25 sm:opacity-35"
        style={{
          backgroundImage: 'radial-gradient(#6366f1 1.5px, transparent 1.5px)',
          backgroundSize: '12px 12px',
        }}
      />

      {/* Main macOS Mockup Card Container */}
      <div className="overflow-hidden rounded-3xl border border-gray-200/80 bg-white p-4.5 sm:p-5 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_32px_64px_-10px_rgba(0,0,0,0.12)]">
        {/* Top Window Bar */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
          {/* macOS window control buttons (Red, Yellow, Green) */}
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/40 transition hover:bg-[#ff5f56]/90" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e] border border-[#dfa123]/40 transition hover:bg-[#ffbd2e]/90" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f] border border-[#1aab29]/40 transition hover:bg-[#27c93f]/90" />
          </div>

          {/* Centered "• INTRO VIDEO" badge */}
          <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#6366f1] select-none pr-8">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6366f1] animate-pulse" />
            Intro Video
          </div>

          {/* Empty spacer for alignment */}
          <div className="w-4" />
        </div>

        {/* Video Player Display Screen */}
        <div className="relative aspect-[4/5] sm:aspect-square md:aspect-[4/5] lg:aspect-[1/1.05] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-[#0f0a30] via-[#0d0725] to-[#060314] border border-white/5 shadow-inner">
          <AnimatePresence mode="wait">
            {!isPlaying ? (
              // Cover / Preview Screen (exactly like the mockup)
              <motion.div
                key="preview-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex flex-col justify-between p-6 cursor-default"
              >
                {/* Tech Pills (top-left) */}
                <div className="flex gap-2 self-start z-10">
                  <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/95 backdrop-blur-md shadow-sm transition hover:bg-white/10">
                    Web Solutions
                  </span>
                  <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/95 backdrop-blur-md shadow-sm transition hover:bg-white/10">
                    Innovative
                  </span>
                </div>

                {/* Gorgeous SVG Glowing Wave lines (background layer) */}
                <div className="absolute inset-0 pointer-events-none opacity-45 overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M-50,220 C100,120 120,380 250,230 C380,80 320,300 480,180"
                      stroke="url(#wave-gradient-1)"
                      strokeWidth="2.5"
                      strokeDasharray="4 6"
                    />
                    <path
                      d="M-20,260 C120,160 150,420 280,270 C410,120 350,340 510,220"
                      stroke="url(#wave-gradient-2)"
                      strokeWidth="1.5"
                      opacity="0.75"
                    />
                    <path
                      d="M-80,180 C70,80 90,340 220,190 C350,40 290,260 450,140"
                      stroke="url(#wave-gradient-2)"
                      strokeWidth="1"
                      opacity="0.4"
                    />
                    <defs>
                      <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#818cf8" />
                        <stop offset="50%" stopColor="#c084fc" />
                        <stop offset="100%" stopColor="#fb7185" />
                      </linearGradient>
                      <linearGradient id="wave-gradient-2" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#818cf8" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Soft glowing ambient light spots in the background */}
                <div className="absolute -left-10 top-1/4 h-32 w-32 rounded-full bg-indigo-500/10 blur-[50px] pointer-events-none" />
                <div className="absolute -right-10 bottom-1/4 h-32 w-32 rounded-full bg-purple-500/10 blur-[50px] pointer-events-none" />

                {/* Large Centered Glowing Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="relative group">
                    {/* Ring Halo (glowing background ring) */}
                    <div className="absolute -inset-4 rounded-full border border-white/10 bg-white/5 opacity-60 transition duration-300 group-hover:scale-105 group-hover:opacity-90 animate-pulse" />
                    
                    {/* Main play button disc */}
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="relative flex h-16 w-16 md:h-18 md:w-18 items-center justify-center rounded-full bg-white text-[#0f0a30] transition duration-300 group-hover:scale-105 shadow-[0_0_35px_rgba(99,102,241,0.5)] active:scale-95 cursor-pointer hover:bg-gray-50 focus:outline-none"
                      aria-label="Play intro video"
                    >
                      <Play className="ml-1 h-6.5 w-6.5 fill-current text-[#0f0a30]" />
                    </button>
                  </div>
                </div>

                {/* Title & Caption Bottom Overlay */}
                <div className="z-10 mt-auto text-left pl-1">
                  <h3 className="text-xl font-bold text-white tracking-tight font-sans">
                    Full Stack Showcase
                  </h3>
                  <p className="mt-2 text-xs md:text-sm text-gray-300/80 leading-relaxed font-normal">
                    Watch how I build, deploy, and scale web applications that solve real-world problems.
                  </p>
                </div>
              </motion.div>
            ) : (
              // Active Video Player Screen
              <motion.div
                key="player-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black flex items-center justify-center"
              >
                <video
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  src={videoUrl}
                  className="h-full w-full object-cover"
                />

                {/* Video controls Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 z-20">
                  {/* Top Control row */}
                  <div className="flex justify-between items-center w-full">
                    <span className="text-white/95 text-xs font-semibold tracking-wide bg-black/40 backdrop-blur-md px-3 py-1 rounded-md border border-white/15">
                      Playing Showreel
                    </span>
                    <button
                      onClick={() => setIsPlaying(false)}
                      className="h-8 w-8 rounded-full bg-black/50 border border-white/20 hover:bg-black/70 hover:border-white/30 text-white flex items-center justify-center transition focus:outline-none"
                      title="Close video"
                    >
                      <X size={15} />
                    </button>
                  </div>

                  {/* Bottom Control row */}
                  <div className="flex justify-between items-center w-full">
                    {/* Custom Mute Toggle */}
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="h-9 w-9 rounded-full bg-black/50 border border-white/20 hover:bg-black/70 hover:border-white/30 text-white flex items-center justify-center transition focus:outline-none"
                      title={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    </button>

                    <div className="text-[10px] font-bold text-white/80 uppercase tracking-widest bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                      Showcase
                    </div>
                  </div>
                </div>

                {/* Floating click to focus / indicator for non-hover states */}
                <div className="absolute right-4 bottom-4 md:hidden z-10">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="h-8 w-8 rounded-full bg-black/60 border border-white/25 text-white flex items-center justify-center shadow-lg focus:outline-none"
                  >
                    {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default IntroVideoFrame
