import { Link, useParams } from 'react-router-dom'
import SiteHeader from '../components/layout/SiteHeader.jsx'
import CaseStudySection from '../components/ui/CaseStudySection.jsx'
import VideoFrame from '../components/ui/VideoFrame.jsx'
import { projects } from '../data/projects.js'

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((entry) => entry.slug === slug)

  if (!project) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-20 text-gray-900">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Project Not Found
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">
            This case study does not exist yet.
          </h1>
          <Link
            to="/"
            className="mt-8 inline-flex rounded-full border border-stone-700 px-5 py-3 text-sm font-semibold text-gray-900 transition hover:border-gray-400"
          >
            &lt;- Back
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <SiteHeader isDetailPage />
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
        <Link
          to="/"
          className="inline-flex rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-gray-300 hover:bg-gray-50"
        >
          &lt;- Back
        </Link>

        <section className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-gray-500">
              {project.category} / {project.year}
            </p>
            <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              {project.detailIntro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <VideoFrame
            eyebrow="Project Video"
            caption="Placeholder for the project demo or walkthrough"
            title="Project video placeholder"
            description="Later we can replace this area with a real video sourced from `public/videos/projects/`."
            toneClass='bg-stone-950'
          />
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gray-500">
              Role
            </p>
            <p className="mt-4 text-base leading-7 text-gray-600">
              {project.role}
            </p>
          </article>

          <article className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gray-500">
              Challenge
            </p>
            <p className="mt-4 text-base leading-7 text-gray-600">
              {project.challenge}
            </p>
          </article>

          <article className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gray-500">
              Outcome
            </p>
            <p className="mt-4 text-base leading-7 text-gray-600">
              {project.outcome}
            </p>
          </article>
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-3">
          {project.stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
                {stat.label}
              </p>
              <p className="mt-3 text-lg font-semibold text-gray-900">
                {stat.value}
              </p>
            </article>
          ))}
        </section>

        <section id="case-study" className="mt-16 grid gap-6">
          <CaseStudySection eyebrow="Case Study" title="Overview">
            <p>{project.caseStudy.overview}</p>
          </CaseStudySection>

          <CaseStudySection eyebrow="Problem" title="What Needed To Improve">
            <p>{project.caseStudy.problem}</p>
          </CaseStudySection>

          <CaseStudySection eyebrow="Approach" title="How The Product Was Shaped">
            {project.caseStudy.approach.map((step) => (
              <p key={step}>{step}</p>
            ))}
          </CaseStudySection>

          <CaseStudySection eyebrow="Result" title="What The Direction Achieved">
            <p>{project.caseStudy.result}</p>
          </CaseStudySection>
        </section>
      </div>
    </main>
  )
}

export default ProjectDetail
