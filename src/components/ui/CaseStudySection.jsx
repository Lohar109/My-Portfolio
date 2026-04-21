function CaseStudySection({ eyebrow, title, children }) {
  return (
    <section className="rounded-3xl border border-gray-200/50 bg-white p-7 shadow-sm sm:p-8">
      <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-900">
        {eyebrow}
      </p>
      {title ? (
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {title}
        </h2>
      ) : null}
      <div className={`${title ? 'mt-5' : 'mt-4'} space-y-4 text-base leading-7 text-gray-600`}>
        {children}
      </div>
    </section>
  )
}

export default CaseStudySection
