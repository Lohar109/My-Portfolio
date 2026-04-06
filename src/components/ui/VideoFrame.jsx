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

      <div className={`flex items-center justify-center p-8 ${aspectClass} ${toneClass}`}>
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
          <div className="flex h-full w-full flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-white/30 bg-black/15 px-6 text-center backdrop-blur-sm">
            <div className="flex h-18 w-18 items-center justify-center rounded-full border border-amber-300/40 bg-amber-300/10 text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
              Play
            </div>

            <p className="mt-6 text-lg font-medium text-white">{title}</p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-white/80">
              {description}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default VideoFrame
