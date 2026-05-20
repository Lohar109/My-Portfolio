import { motion } from 'framer-motion'
import { GraduationCap, Building2, BookOpen } from 'lucide-react'
import educationIllustration from '../../assets/education_illustration.png'

const educationItems = [
  {
    degree: 'Master of Computer Applications (M.C.A.)',
    stream: 'Computer Applications & Software Engineering',
    institute: 'R.C. Patel Educational Trust Institute of Management Research and Development, Shirpur',
    timeline: '2024 - 2026',
    status: 'Ongoing',
    metric: 'CGPA',
    grade: '9.30 / 10',
    icon: GraduationCap,
  },
  {
    degree: 'Bachelor of Science (Computer Science)',
    stream: 'Computer Science',
    institute: 'Nutan Maratha College, North Maharashtra University, Jalgaon',
    timeline: '2020 - 2023',
    status: 'Completed',
    metric: 'CGPA',
    grade: '9.08 / 10',
    icon: GraduationCap,
  },
  {
    degree: 'Intermediate (12th)',
    stream: 'Science',
    institute: 'Baba Nanak Sindhi Hindi Jr College',
    timeline: '2016 - 2018',
    status: 'Completed',
    metric: 'Percentage',
    grade: '52.62%',
    icon: Building2,
  },
  {
    degree: 'High School (10th)',
    stream: '',
    institute: 'Baba Nanak Sindhi Hindi High School',
    timeline: '2015 - 2016',
    status: 'Completed',
    metric: 'Percentage',
    grade: '72.00%',
    icon: BookOpen,
  },
]

function EducationSection() {
  return (
    <motion.section
      id="education"
      className="relative px-6 pt-6 pb-16 sm:px-12 lg:px-24 bg-transparent overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Premium background decorative shapes */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-violet-100/40 blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-indigo-100/40 blur-3xl opacity-60 pointer-events-none" />

      <div className="mx-auto max-w-6xl">
        {/* Two-Column Header Section */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 mb-2">
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Main Title */}
            <motion.h2
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-tight font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              My Academic Journey <br className="hidden sm:block" />
              <span className="flex items-center gap-2 mt-1 flex-wrap">
                &amp; <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Continuous Learning.</span>
              </span>
            </motion.h2>

            {/* Subtitle Description */}
            <motion.p
              className="max-w-xl text-base sm:text-lg text-gray-500 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              A strong educational foundation that fuels my passion for building innovative technologies and solving real-world problems.
            </motion.p>
          </div>

          {/* Right Column: Premium 3D-like Illustration */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <motion.div
              className="relative w-full max-w-[420px] md:max-w-[460px] aspect-[4/3] flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Soft purple radial halo glow in background */}
              <div className="absolute inset-0 bg-radial from-violet-300/40 via-violet-100/10 to-transparent blur-3xl rounded-full scale-110 pointer-events-none animate-pulse duration-[6s]" />
              
              <motion.img
                src={educationIllustration}
                alt="My Academic Journey Visual"
                className="w-full h-full object-contain relative z-10 mix-blend-multiply drop-shadow-[0_12px_36px_rgba(139,92,246,0.18)]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </div>

        {/* Timeline Subsection Header */}
        <motion.div
          className="flex items-center gap-2.5 mb-10 px-2"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600 border border-violet-100 shadow-sm">
            <BookOpen size={16} strokeWidth={2.2} className="stroke-[2.2]" />
          </div>
          <h3 className="text-lg font-bold text-slate-800 tracking-tight">Education Timeline</h3>
        </motion.div>

        {/* Timeline Card Stack */}
        <div className="relative pl-12 sm:pl-20 pr-2">
          {/* Vertical Timeline Track Line (Dashed, perfectly aligned with dots) */}
          <div className="absolute left-[12px] sm:left-[32px] top-6 bottom-6 w-0 border-l border-dashed border-violet-300" />

          <div className="space-y-6">
            {educationItems.map((item, index) => {
              const IconComponent = item.icon

              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Timeline Connection Indicator Dot */}
                  <div className="absolute -left-[45px] sm:-left-[57px] top-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      {/* Lighter violet halo outline */}
                      <span className="absolute inline-flex h-8 w-8 rounded-full bg-violet-100/70 border border-violet-200 animate-ping opacity-45 pointer-events-none" />
                      <div className="h-4.5 w-4.5 rounded-full bg-violet-600 border-[3.5px] border-white shadow-md z-10" />
                    </div>
                  </div>

                  {/* Horizontal Connector Line (Dashed, extending from dot center to card) */}
                  <div className="absolute -left-[36px] sm:-left-[48px] top-1/2 -translate-y-1/2 w-[36px] sm:w-[48px] h-px border-t border-dashed border-violet-300 pointer-events-none" />

                  {/* Horizontal Card Element */}
                  <motion.div
                    className="group bg-white border border-gray-150/40 rounded-3xl p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.015)] hover:shadow-[0_12px_36px_rgba(139,92,246,0.06)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6"
                  >
                    {/* Left & Center Information */}
                    <div className="flex items-start gap-4 sm:gap-5 flex-1 text-left">
                      {/* Left icon wrapper */}
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-indigo-50/50 border border-indigo-100 flex items-center justify-center text-indigo-600 transition-colors duration-300 group-hover:bg-indigo-100/60">
                        <IconComponent size={24} className="stroke-[2] transition-transform duration-300 group-hover:scale-110" />
                      </div>

                      {/* Main education texts */}
                      <div className="space-y-1">
                        <h4 className="text-lg sm:text-xl font-bold text-slate-800 group-hover:text-violet-700 transition-colors duration-250 leading-tight">
                          {item.degree}
                        </h4>
                        {item.stream && (
                          <p className="text-sm font-semibold text-gray-500">
                            {item.stream}
                          </p>
                        )}
                        <p className="text-xs font-semibold text-gray-450">
                          {item.institute}
                        </p>
                      </div>
                    </div>

                    {/* Middle Dates & Status Stack */}
                    <div className="flex md:flex-col items-center md:items-end justify-start md:justify-center gap-3.5 flex-wrap">
                      <span className="inline-flex items-center rounded-full bg-violet-50 border border-violet-100 px-3.5 py-1 text-xs font-bold text-violet-600 shadow-sm transition-all duration-300 group-hover:bg-violet-100/60">
                        {item.timeline}
                      </span>
                      <span className={`inline-flex items-center rounded-full px-3.5 py-1 text-xs font-bold shadow-sm transition-all duration-300 ${
                        item.status === 'Completed'
                          ? 'bg-emerald-50 border border-emerald-100 text-emerald-600 group-hover:bg-emerald-100/60'
                          : 'bg-blue-50 border border-blue-100 text-blue-600 group-hover:bg-blue-100/60'
                      }`}>
                        {item.status}
                      </span>
                    </div>

                    {/* Right-most Metric Column */}
                    <div className="flex items-center md:self-stretch">
                      {/* Vertical line divider */}
                      <div className="hidden md:block w-px bg-gray-100 mx-8 self-stretch" />
                      
                      {/* Column block for CGPA/Percentage */}
                      <div className="flex flex-col items-start md:items-center min-w-[110px] w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-gray-100 text-left md:text-center">
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-gray-500">
                          {item.metric}
                        </span>
                        <span className="text-xl sm:text-2xl font-bold text-black mt-1 sm:mt-1.5 tracking-tight group-hover:scale-105 transition-transform duration-300">
                          {item.grade}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default EducationSection