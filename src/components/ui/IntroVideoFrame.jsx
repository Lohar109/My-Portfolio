import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react'



function IntroVideoFrame() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const videoRef = useRef(null)
  const playerRef = useRef(null)

  const videoUrl = '/videos/intro/intro.mp4'

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
    }
  }, [isMuted])

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      setIsMuted(false)
      videoRef.current.play().then(() => {
        setIsPlaying(true)
      }).catch(err => console.log("Play failed: ", err))
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration || 88) // fallback to 1:28 (88s) if not loaded
    }
  }

  const handleVideoEnded = () => {
    setIsPlaying(false)
    setCurrentTime(0)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
    }
  }

  const handleSeekChange = (e) => {
    const time = parseFloat(e.target.value)
    if (videoRef.current) {
      videoRef.current.currentTime = time
      setCurrentTime(time)
    }
  }

  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds)) return '0:00'
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleFullscreen = () => {
    if (playerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        playerRef.current.requestFullscreen().catch(err => {
          console.error("Fullscreen failed:", err)
        })
      }
    }
  }

  return (
    <div className="relative w-full max-w-[640px] lg:max-w-none">
      {/* Decorative background blur glow */}
      <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-45 blur-2xl -z-10" />

      {/* Main Borderless Video Player Container */}
      <div 
        ref={playerRef}
        className="group relative aspect-video w-full overflow-hidden rounded-[2rem] border border-gray-150 bg-black shadow-[0_32px_64px_-12px_rgba(0,0,0,0.12)] transition-all duration-500 hover:shadow-[0_40px_80px_-10px_rgba(99,102,241,0.15)]"
      >
        {/* Actual Video Element */}
        <video
          ref={videoRef}
          src={videoUrl}
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleVideoEnded}
          className="h-full w-full object-cover cursor-pointer"
          onClick={togglePlay}
        />

        {/* Custom Poster / Thumbnail Overlay */}
        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center"
              onClick={togglePlay}
            >
              {currentTime === 0 && (
                <>
                  <img 
                    src="/thumbnail.png" 
                    alt="Vaibhav Lohar" 
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay shadow gradient to make controls pop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                </>
              )}
              
              {/* Center Play Button like the screenshot */}
              <div className="relative flex h-18 w-18 items-center justify-center rounded-full bg-white shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                {/* Outer glowing pulsing circle */}
                <div className="absolute inset-0 rounded-full bg-indigo-500/20 animate-ping opacity-75" />
                
                {/* Custom Play Inner Button - matches screenshot shape but using established indigo */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white shadow-md hover:bg-indigo-700 transition">
                  <Play className="ml-1 h-5.5 w-5.5 fill-current text-white" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Video Player Custom Control Bar Overlay */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4.5 transition-opacity duration-300 flex flex-col gap-2 z-20">
          
          {/* Seeker / Timeline Progress Slider */}
          <div className="flex items-center w-full gap-2 group/slider">
            <input
              type="range"
              min="0"
              max={duration || 88}
              value={currentTime}
              onChange={handleSeekChange}
              className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-indigo-500 focus:outline-none transition group-hover/slider:h-1.5"
              style={{
                background: `linear-gradient(to right, #6366f1 0%, #6366f1 ${(currentTime / (duration || 88)) * 100}%, rgba(255,255,255,0.3) ${(currentTime / (duration || 88)) * 100}%, rgba(255,255,255,0.3) 100%)`
              }}
            />
          </div>

          {/* Lower Control Row: Play/Pause, Timer, Seeker, Vol, Settings, Fullscreen */}
          <div className="flex items-center justify-between">
            {/* Left Controls */}
            <div className="flex items-center gap-3">
              <button 
                onClick={togglePlay}
                className="text-white hover:text-indigo-400 transition focus:outline-none cursor-pointer"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
              </button>
              
              <span className="text-xs font-semibold text-white/95 select-none">
                {formatTime(currentTime)} / {formatTime(duration || 88)}
              </span>
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleMute}
                className="text-white hover:text-indigo-400 transition focus:outline-none cursor-pointer"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>


              <button
                onClick={handleFullscreen}
                className="text-white hover:text-indigo-400 transition focus:outline-none cursor-pointer"
                aria-label="Fullscreen"
              >
                <Maximize size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroVideoFrame
