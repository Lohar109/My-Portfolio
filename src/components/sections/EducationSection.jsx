import { motion } from 'framer-motion'
import { Building2, GraduationCap } from 'lucide-react'

const educationItems = [
  {
    degree: 'Master of Computer Applications (M.C.A.)',
    institute:
      'R.C. Patel Institute of Management Research and Development, Shirpur',
    timeline: 'Final Semester (2024 - 2026)',
    performance: '9.30 CGPA',
    grade: 'Ongoing',
    icon: GraduationCap,
    performanceClass:
      'border-pink-200/70 bg-pink-50 text-pink-700 shadow-[0_0_0_1px_rgba(244,114,182,0.12)]',
  },
  {
    degree: 'Bachelor of Science (Computer Science)',
    institute:
      "J.D.M.V.P. Co-Op Samaj's Arts, Commerce & Science College, Jalgaon",
    timeline: 'Graduated in 2023',
    performance: '9.08 CGPA',
    grade: 'A+ Grade',
    icon: Building2,
    performanceClass: 'border-gray-200/70 bg-gray-50 text-gray-700',
  },
]

function EducationSection() {
  return (
    <motion.section
      id="education"
      className="relative px-6 py-16 sm:px-10 lg:px-16"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight leading-tight text-gray-900">
            Education and academic consistency.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600">
            A focused academic journey in computer science fundamentals,
            software engineering, and practical problem-solving.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {educationItems.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.article
                key={item.degree}
                className={`relative rounded-3xl border border-gray-200/50 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                  index === 0 ? 'lg:col-span-7' : 'lg:col-span-5'
                }`}
                initial={{ opacity: 0, scale: 0.97, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
              >
                <span className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200/60 bg-gray-50 text-gray-700">
                  <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                </span>

                {item.grade === 'Ongoing' ? (
                  <div className="flex flex-wrap items-center gap-2 pr-14">
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-700">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                      </span>
                      Status: Live
                    </span>

                    <span className="inline-flex items-center rounded-full border border-gray-200/70 bg-gray-100/50 px-3 py-1 text-[11px] font-medium text-gray-500">
                      Expected Graduation: June 2026
                    </span>
                  </div>
                ) : (
                  <p className="text-xs font-semibold tracking-[0.24em] text-gray-500">
                    {item.grade}
                  </p>
                )}

                <h3 className="mt-4 pr-14 text-xl font-bold leading-tight text-gray-900">
                  {item.degree}
                </h3>

                <p className="mt-3 pr-14 text-base font-bold leading-7 text-gray-900">
                  {item.institute}
                </p>

                <p
                  className={`mt-3 text-sm text-gray-500 ${
                    item.grade === 'Ongoing' ? 'font-semibold text-gray-700' : 'font-medium'
                  }`}
                >
                  {item.timeline}
                </p>

                {item.grade === 'Ongoing' && (
                  <div className="mt-10 flex justify-end">
                    <span
                      className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-semibold ${item.performanceClass}`}
                    >
                      {item.performance}
                    </span>
                  </div>
                )}

                {item.grade !== 'Ongoing' && (
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-semibold ${item.performanceClass}`}
                    >
                      {item.performance}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-gray-200/70 bg-white px-3.5 py-1.5 text-xs font-semibold text-gray-600">
                      {item.grade}
                    </span>
                  </div>
                )}
              </motion.article>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

export default EducationSection