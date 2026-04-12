import VideoFrame from '../ui/VideoFrame.jsx'

function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(circle_at_top,rgba(229,231,235,0.72),transparent_70%)]" />

      <div className="mx-auto grid max-w-6xl items-start gap-16 lg:grid-cols-[1fr_0.95fr] lg:gap-24">
        <div className="max-w-3xl">
          <h1 className="max-w-2xl text-3xl font-bold text-gray-900 tracking-tight leading-tight">
            Turning complex ideas into clean, functional reality.
          </h1>

          <p className="mt-7 max-w-2xl text-lg font-normal leading-8 text-gray-700">
            I enjoy the challenge of building something from scratch. My goal
            is simple: write clean code and create designs that don&apos;t need an
            explanation.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="bg-black !text-white font-semibold rounded-full px-6 py-3 transition hover:bg-gray-800"
            >
              View Projects
            </a>

            <a
              href="#skills"
              className="bg-black !text-white font-semibold rounded-full px-6 py-3 transition hover:bg-gray-800"
            >
              Explore Skills
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-[linear-gradient(135deg,rgba(209,213,219,0.42),rgba(17,24,39,0.08))] blur-2xl" />

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
