function CaseStudySection({ eyebrow, title, children }) {
  return (
    <section className="rounded-[2rem] border border-stone-800 bg-white/5 p-7 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-base leading-7 text-stone-300">
        {children}
      </div>
    </section>
  )
}

export default CaseStudySection
