import { motion } from 'framer-motion';
import {
  FileText,
  BrainCircuit,
  Code2,
  Database,
  Server,
  Cloud,
  FileDown
} from 'lucide-react';
import subjectsIllustration from '../../assets/subjects_illustration.png';
import { notesData } from '../../data/notes.js';

const iconMap = {
  brain: BrainCircuit,
  code: Code2,
  database: Database,
  server: Server,
  cloud: Cloud,
};

function NotesSection() {

  return (
    <motion.section
      id="notes"
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
              My Technical Notes <br className="hidden sm:block" />
              <span className="flex items-center gap-2 mt-1 flex-wrap">
                &amp; <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Shared Knowledge.</span>
              </span>
            </motion.h2>

            {/* Subtitle Description */}
            <motion.p
              className="max-w-xl text-base sm:text-lg text-gray-500 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              A curated selection of technical references, notebooks, and quick cheat sheets detailing key engineering concepts and system designs.
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
                src={subjectsIllustration}
                alt="Technical Notes Illustration"
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
            <FileText size={16} strokeWidth={2.2} className="stroke-[2.2]" />
          </div>
          <h3 className="text-lg font-bold text-slate-800 tracking-tight">Reference Notebooks</h3>
        </motion.div>

        {/* Timeline Card Stack */}
        <div className="relative pr-2">
          <div className="space-y-6">
            {notesData.map((item, index) => {
              const IconComponent = iconMap[item.icon] || FileText;

              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Horizontal Card Element */}
                  <a
                    href={item.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white border border-gray-150/40 rounded-3xl p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.015)] hover:shadow-[0_12px_36px_rgba(139,92,246,0.06)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 cursor-pointer"
                  >
                    {/* Left & Center Information */}
                    <div className="flex items-start gap-4 sm:gap-5 flex-1 text-left">
                      {/* Left icon wrapper */}
                      <div className={`flex-shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center shadow-sm select-none border ${item.bgClass} ${item.borderClass} ${item.iconColor}`}>
                        <IconComponent size={20} className="stroke-[2] transition-transform duration-300 group-hover:scale-110" />
                      </div>

                      {/* Main note texts */}
                      <div className="space-y-1">
                        <h4 className="text-lg sm:text-xl font-bold text-slate-800 group-hover:text-violet-700 transition-colors duration-250 leading-tight">
                          {item.title}
                        </h4>
                        {item.subject && (
                          <p className="text-sm font-semibold text-gray-500">
                            {item.subject}
                          </p>
                        )}
                        <p className="text-xs font-semibold text-gray-455">
                          {item.category}
                        </p>
                      </div>
                    </div>

                    {/* Middle Dates & Status Stack */}
                    <div className="flex md:flex-col items-center md:items-end justify-start md:justify-center gap-3.5 flex-wrap">
                      <span className="inline-flex items-center rounded-full bg-violet-50 border border-violet-100 px-3.5 py-1 text-xs font-bold text-violet-600 shadow-sm transition-all duration-300 group-hover:bg-violet-100/60">
                        {item.timeline}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold shadow-sm transition-all duration-300 bg-emerald-50 border border-emerald-100 text-emerald-600 group-hover:bg-emerald-100/60">
                        <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 bg-emerald-400"></span>
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        </span>
                        {item.status}
                      </span>
                    </div>

                    {/* Right-most Metric Column */}
                    <div className="flex items-center md:self-stretch">
                      {/* Vertical line divider */}
                      <div className="hidden md:block w-px bg-gray-100 mx-8 self-stretch" />
                      
                      {/* Column block for File Size */}
                      <div className="flex flex-col items-start md:items-center min-w-[110px] w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-gray-100 text-left md:text-center">
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-gray-500">
                          {item.metric}
                        </span>
                        <span className="text-xl sm:text-2xl font-bold text-black mt-1 sm:mt-1.5 tracking-tight group-hover:scale-105 transition-transform duration-300 flex items-center gap-1.5">
                          {item.grade}
                          <FileDown size={18} className="text-slate-400 group-hover:text-violet-600 transition-colors" />
                        </span>
                      </div>
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>


      </div>
    </motion.section>
  );
}

export default NotesSection;
