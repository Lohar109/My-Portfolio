function VideoFrame({
  eyebrow,
  caption,
  title,
  description,
  toneClass,
  aspectClass = 'aspect-video',
  src,
}) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-stone-300/80 bg-stone-950 shadow-[0_28px_70px_rgba(28,25,23,0.18)]">
      <div className="flex items-center justify-between border-b border-stone-800 px-5 py-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/90">
            {eyebrow}
          </p>
          <p className="mt-1 text-sm text-stone-400">{caption}</p>
        </div>

        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400/70" />
          <span className="h-3 w-3 rounded-full bg-amber-300/70" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
        </div>
      </div>

      <div className={`group relative flex items-center justify-center p-8 ${aspectClass} ${toneClass}`}>
        {src ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            controls
            src={src}
            className="h-full w-full rounded-[1.5rem] object-cover"
          />
        ) : (
          <div className="relative flex h-full w-full overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-gray-900 via-stone-900 to-black border border-white/10 shadow-2xl">
            {/* Soft background glow */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[80px]" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-purple-500/10 blur-[80px]" />

            {/* Badges / Header overlay */}
            <div className="absolute left-6 top-6 z-10 flex gap-2">
              <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-gray-300 backdrop-blur-md">
                Tech Stack
              </span>
              <span className="inline-flex items-center rounded-md border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-amber-300 backdrop-blur-md">
                Showreel
              </span>
            </div>

            {/* Centered Play Button */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <div className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all hover:bg-white/20 hover:shadow-[0_8px_32px_rgba(255,255,255,0.2)]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-6 w-6">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Title / Description overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-10 text-left">
              <p className="text-xl font-bold text-white tracking-tight">Full Stack Showreel</p>
              <p className="mt-1.5 text-sm text-gray-400">Watch me build, deploy, and scale web applications.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default VideoFrame


