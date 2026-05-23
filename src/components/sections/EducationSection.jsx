import { useState } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Building2, BookOpen, Star, Trophy, Award, Rocket, FileText, ArrowRight } from 'lucide-react'
import educationIllustration from '../../assets/education_illustration.png'

const educationItems = [
  {
    degree: 'Master of Computer Applications (M.C.A.)',
    stream: 'Computer Applications & Software Engineering',
    institute: 'R.C. Patel Educational Trust Institute of Management Research and Development, Shirpur',
    timeline: '2024 - 2026',
    status: 'Pursuing',
    metric: 'CGPA',
    grade: '9.30 / 10',
    icon: GraduationCap,
    iconColor: 'text-[#2563EB]',
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
    iconColor: 'text-[#2563EB]',
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
    iconColor: 'text-[#128C7E]',
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
    iconColor: 'text-[#EF4444]',
  },
]

function EducationSection() {
  const [showAllCertifications, setShowAllCertifications] = useState(false);

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
                      <div className={`flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl bg-transparent border-none ${item.iconColor}`}>
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
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold shadow-sm transition-all duration-300 ${
                        item.status === 'Completed'
                          ? 'bg-emerald-50 border border-emerald-100 text-emerald-600 group-hover:bg-emerald-100/60'
                          : 'bg-blue-50 border border-blue-100 text-blue-600 group-hover:bg-blue-100/60'
                      }`}>
                        {item.status === 'Pursuing' && (
                          <span className="relative flex h-2 w-2 flex-shrink-0">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 bg-blue-400"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                          </span>
                        )}
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

        {/* 1. Key Highlights Section */}
        <motion.div
          className="flex items-center gap-3 mt-16 mb-8 px-2"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Star size={20} className="text-violet-600 stroke-[2.2]" />
          <h3 className="text-xl font-bold text-slate-800 tracking-tight font-sans">Key Highlights</h3>
        </motion.div>

        {/* Key Highlights Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: CGPA */}
          <motion.div
            className="group bg-white border border-slate-100 rounded-3xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_36px_rgba(139,92,246,0.05)] transition-all duration-300 hover:-translate-y-1 flex items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-amber-50/50 border border-amber-100 flex items-center justify-center text-[#D97706] shadow-sm transition-colors duration-300">
              <Trophy size={20} className="stroke-[2] transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="space-y-1.5 text-left">
              <h4 className="text-3xl font-bold text-slate-800 leading-none font-sans tracking-tight">9.30</h4>
              <p className="text-sm font-semibold text-[#1E293B] tracking-tight leading-none">CGPA in M.C.A.</p>
              <p className="text-xs font-medium text-gray-400 leading-normal pt-0.5">Consistent academic performance</p>
            </div>
          </motion.div>

          {/* Card 2: Academic Standing */}
          <motion.div
            className="group bg-white border border-slate-100 rounded-3xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_36px_rgba(139,92,246,0.05)] transition-all duration-300 hover:-translate-y-1 flex items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-indigo-50/50 border border-indigo-100 flex items-center justify-center text-[#4F46E5] shadow-sm transition-colors duration-300">
              <Award size={20} className="stroke-[2] transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="space-y-1.5 text-left">
              <h4 className="text-3xl font-bold text-slate-800 leading-none font-sans tracking-tight">Top 10%</h4>
              <p className="text-sm font-semibold text-[#1E293B] tracking-tight leading-none">Academic Standing</p>
              <p className="text-xs font-medium text-gray-400 leading-normal pt-0.5">Among top performers in the university</p>
            </div>
          </motion.div>

          {/* Card 3: Strong Foundation */}
          <motion.div
            className="group bg-white border border-slate-100 rounded-3xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_36px_rgba(139,92,246,0.05)] transition-all duration-300 hover:-translate-y-1 flex items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-teal-50/50 border border-teal-100 flex items-center justify-center text-[#0D9488] shadow-sm transition-colors duration-300">
              <BookOpen size={20} className="stroke-[2] transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="space-y-1 text-left">
              <h4 className="text-base font-semibold text-slate-800 leading-tight font-sans">Strong Foundation</h4>
              <p className="text-xs font-medium text-gray-400 leading-relaxed pt-1">Built strong fundamentals in Computer Science and problem solving</p>
            </div>
          </motion.div>

          {/* Card 4: Continuous Learner */}
          <motion.div
            className="group bg-white border border-slate-100 rounded-3xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_36px_rgba(139,92,246,0.05)] transition-all duration-300 hover:-translate-y-1 flex items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-orange-50/50 border border-orange-100 flex items-center justify-center text-[#EA580C] shadow-sm transition-colors duration-300">
              <Rocket size={20} className="stroke-[2] transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="space-y-1 text-left">
              <h4 className="text-base font-semibold text-slate-800 leading-tight font-sans">Continuous Learner</h4>
              <p className="text-xs font-medium text-gray-400 leading-relaxed pt-1">Always exploring new technologies and frameworks to stay ahead</p>
            </div>
          </motion.div>
        </div>

        {/* 3. Certifications & Courses Section */}
        <motion.div
          className="flex items-center justify-between mt-16 mb-8 px-2"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <FileText size={20} className="text-violet-600 stroke-[2.2]" />
            <h3 className="text-xl font-bold text-slate-800 tracking-tight font-sans">Certifications & Courses</h3>
          </div>
          
          <button
            onClick={() => setShowAllCertifications(!showAllCertifications)}
            className="group flex items-center gap-1.5 text-xs font-bold text-black hover:text-slate-700 transition-colors cursor-pointer select-none"
          >
            {showAllCertifications ? 'Show Less' : 'View All Certifications'}
            <ArrowRight size={14} className={`transition-transform duration-250 ${showAllCertifications ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
          </button>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'AI Powered Cohort 3.0',
              subtitle: 'GenAI / DevOps / Web3 / System Design',
              provider: 'Sheryians',
              year: 'Pursuing',
              iconType: 'sheryians',
            },
            {
              title: 'Node.js Developer',
              subtitle: 'Node.js Basics to Advanced',
              provider: 'Udemy',
              year: '2023',
              iconType: 'node',
            },
            {
              title: 'Go Bootcamp: Master Golang',
              subtitle: 'Master Golang with 1000+ Exercises',
              provider: 'Udemy',
              year: '2025',
              iconType: 'golang',
            },
            {
              title: 'Startup School: Prompt to Prototype',
              subtitle: 'Google for Startups program',
              provider: 'Google',
              year: '2025',
              iconType: 'google-startup',
            },
            {
              title: 'Prompt Engineering for Everyone',
              subtitle: 'IBM Developer Skills Network',
              provider: 'IBM',
              year: '2026',
              iconType: 'ibm',
            },
          ].slice(0, showAllCertifications ? 5 : 4).map((cert, idx) => (
            <motion.div
              key={idx}
              className="group bg-white border border-slate-100 rounded-3xl p-5.5 shadow-[0_4px_24px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_36px_rgba(139,92,246,0.05)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[175px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="flex items-start gap-4 text-left">
                {/* Custom Brand Icons */}
                {cert.iconType === 'node' && (
                  <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-current">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                )}
                {cert.iconType === 'golang' && (
                  <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-cyan-50/50 border border-cyan-100 flex items-center justify-center text-[#00ADD8] font-sans font-black italic tracking-tighter text-[17px] shadow-sm select-none">
                    Go
                  </div>
                )}
                {cert.iconType === 'google-startup' && (
                  <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm relative">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-current">
                      <path d="M12 2L15 5L19 4L18 8L21 11L18 14L19 18L15 17L12 20L9 17L5 18L6 14L3 11L6 8L5 4L9 5Z" />
                      <path d="M9 11L11 13L15 9" stroke="#EC4899" strokeWidth="2.5" />
                    </svg>
                  </div>
                )}
                {cert.iconType === 'ibm' && (
                  <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-sky-50/50 border border-sky-100 flex flex-col items-center justify-center text-sky-700 shadow-sm select-none">
                    <span className="text-[10px] font-black tracking-tighter uppercase font-sans leading-none">ibm</span>
                    <div className="flex flex-col gap-0.5 mt-1 w-6">
                      <div className="h-0.5 bg-sky-600 w-full" />
                      <div className="h-0.5 bg-sky-600 w-full" />
                      <div className="h-0.5 bg-sky-600 w-full" />
                    </div>
                  </div>
                )}
                {cert.iconType === 'sheryians' && (
                  <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 font-sans font-black tracking-tight text-[16px] shadow-sm select-none">
                    S
                  </div>
                )}

                <div className="space-y-0.5">
                  <h5 className="text-xs font-bold text-slate-800 leading-snug group-hover:text-violet-700 transition-colors">{cert.title}</h5>
                  <p className="text-[11px] font-semibold text-gray-500 leading-snug">{cert.subtitle}</p>
                </div>
              </div>

              {/* Card Footer tags */}
              <div className="flex items-center justify-between mt-4">
                <span className="bg-gray-50 border border-gray-150 px-2 py-0.5 rounded-md text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  {cert.provider}
                </span>
                {cert.year === 'Pursuing' ? (
                  <span className="inline-flex items-center gap-1 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md text-[10px] font-bold text-blue-600 shadow-sm animate-pulse">
                    <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 bg-blue-400"></span>
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                    </span>
                    Pursuing
                  </span>
                ) : (
                  <span className="text-[10px] font-bold text-gray-400">
                    {cert.year}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4. Bottom Quote & Signature Block */}
        <motion.div
          className="relative mt-20 bg-gradient-to-br from-white via-violet-50/20 to-indigo-50/30 border border-violet-100/70 rounded-3xl p-8 sm:p-10 shadow-[0_16px_36px_-12px_rgba(139,92,246,0.05)] overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtle Decorative SVGs & Glows in background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-200/10 to-indigo-200/10 rounded-full blur-2xl pointer-events-none" />
          <svg className="absolute right-0 bottom-0 top-0 h-full w-2/3 opacity-25 pointer-events-none" viewBox="0 0 200 100" preserveAspectRatio="none">
            <path d="M0,70 Q50,30 100,70 T200,70" fill="none" stroke="#8B5CF6" strokeWidth="0.4" strokeDasharray="3 3" />
            <path d="M0,50 Q60,10 120,60 T200,40" fill="none" stroke="#6366F1" strokeWidth="0.5" />
          </svg>

          {/* Left Block: Quote Text */}
          <div className="flex-1 flex items-start gap-4 text-left z-10">
            <span className="text-6xl font-serif text-violet-400/40 leading-none select-none -mt-3">“</span>
            <p className="text-base sm:text-lg font-medium text-slate-700 leading-relaxed max-w-2xl font-sans">
              Education is not just about earning a degree, it's about developing the skills to solve problems and create meaningful impact.
            </p>
          </div>

          {/* Right Block: Signature */}
          <div className="flex-shrink-0 flex flex-col items-center md:items-end gap-1.5 z-10 select-none">
            <div className="relative inline-block select-none cursor-default group/signature">
              <span 
                className="text-4xl font-normal tracking-wide text-violet-600 block leading-none transform -rotate-2 hover:scale-105 transition-transform duration-300" 
                style={{ 
                  fontFamily: "'Great Vibes', 'Sacramento', 'Dancing Script', cursive",
                  display: 'inline-block'
                }}
              >
                Vaibhav Lohar
              </span>
              <svg className="w-[130px] sm:w-[150px] h-3 text-violet-400/50 mt-1.5 mx-auto md:mr-1" viewBox="0 0 100 10" preserveAspectRatio="none" fill="none">
                <path d="M5,5 Q35,1 70,7 T95,3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default EducationSection