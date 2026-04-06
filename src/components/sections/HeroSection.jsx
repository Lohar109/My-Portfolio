import VideoFrame from '../ui/VideoFrame.jsx'

function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.28),transparent_70%)]" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-700">
            Full-Stack Developer
          </p>

          <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-stone-950 sm:text-6xl lg:text-7xl">
            I build thoughtful digital products with strong design and clean
            engineering.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
            This portfolio will highlight your intro video, core skills, and
            selected projects with enough polish to feel professional without
            losing personality.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-stone-100"
            >
              View Projects
            </a>

            <a
              href="#skills"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white/70 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:border-stone-400 hover:bg-white"
            >
              Explore Skills
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-sm text-stone-600">
            <div>
              <p className="font-semibold text-stone-900">Frontend</p>
              <p>React, Tailwind, UI systems</p>
            </div>
            <div>
              <p className="font-semibold text-stone-900">Backend</p>
              <p>APIs, auth, databases</p>
            </div>
            <div>
              <p className="font-semibold text-stone-900">Workflow</p>
              <p>Case studies, performance, DX</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-[linear-gradient(135deg,rgba(251,191,36,0.18),rgba(41,37,36,0.08))] blur-2xl" />

          <VideoFrame
            eyebrow="Intro Video"
            caption="Replace this with your showreel or welcome clip"
            title="Portfolio intro video goes here"
            description="Later we can replace this placeholder with an actual video using a file from `public/videos/intro/`."
            toneClass="bg-[linear-gradient(160deg,#1c1917_0%,#292524_45%,#0c0a09_100%)]"
            aspectClass="aspect-[4/5] sm:aspect-video"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
