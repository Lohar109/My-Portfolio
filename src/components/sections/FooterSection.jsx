function FooterSection() {
  return (
    <footer
      id="contact"
      className="mx-auto max-w-6xl px-6 pb-16 pt-8 sm:px-10 lg:px-16"
    >
      <div className="overflow-hidden rounded-[2.5rem] border border-stone-300/80 bg-[linear-gradient(135deg,#1c1917_0%,#292524_42%,#78350f_100%)] text-stone-50 shadow-[0_24px_70px_rgba(41,37,36,0.22)]">
        <div className="grid gap-10 px-8 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1.2fr_0.8fr] lg:px-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">
              Let&apos;s Work Together
            </p>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Building digital products with clarity, craft, and dependable execution.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-stone-300">
              This is the final CTA area of the portfolio. Later, we can replace
              these placeholders with your real email, LinkedIn, GitHub, and resume
              link.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:hello@vaibhav.dev"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-stone-100"
              >
                hello@vaibhav.dev
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-stone-100"
              >
                View Projects Again
              </a>
            </div>
          </div>

          <div className="grid gap-4 self-end">
            <article className="rounded-[1.75rem] border border-white/10 bg-white/6 p-6 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-300">
                Based In
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                India
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-white/10 bg-white/6 p-6 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-300">
                Profiles
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium text-white">
                <a
                  href="https://github.com/"
                  className="rounded-full border border-white/15 px-4 py-2 transition hover:bg-white/10"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/"
                  className="rounded-full border border-white/15 px-4 py-2 transition hover:bg-white/10"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="rounded-full border border-white/15 px-4 py-2 transition hover:bg-white/10"
                >
                  Resume
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
