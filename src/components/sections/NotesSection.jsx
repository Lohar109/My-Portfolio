import { motion } from 'framer-motion';
import { ArrowDown, BookOpen } from 'lucide-react';
import subjectsIllustration from '../../assets/subjects_illustration.png';
import { notesData } from '../../data/notes.js';

function NotesSection() {
  return (
    <motion.section
      id="notes"
      className="relative px-6 pt-6 pb-20 sm:px-12 lg:px-24 bg-transparent overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Premium background decorative shapes */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-violet-100/40 blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-indigo-100/40 blur-3xl opacity-60 pointer-events-none" />

      <div className="mx-auto max-w-6xl">
        {/* Two-Column Header Section */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 mb-16">
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
              Click below to view, read, or download the comprehensive PDF notes covering essential computer science subjects and technologies.
            </motion.p>
          </div>

          {/* Right Column: Premium Illustration */}
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

        {/* Section Header */}
        <motion.div
          className="flex items-center gap-3 mb-8 px-2 text-left"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600 border border-violet-100 shadow-sm">
            <BookOpen size={16} strokeWidth={2.2} className="stroke-[2.2]" />
          </div>
          <h3 className="text-lg font-bold text-slate-800 tracking-tight">Available PDF Notes</h3>
        </motion.div>

        {/* Grid stack for the PDF items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {notesData.map((item, index) => {
            return (
              <motion.div
                key={index}
                className="group relative bg-white border border-slate-200 rounded-2xl p-6.5 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.015)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.035)] transition-all duration-300 flex flex-col justify-between text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {/* Behind Page 2 (Medium offset) */}
                <div className="absolute inset-0 bg-white border border-slate-200 rounded-2xl shadow-sm translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 ease-out" />
                
                {/* Behind Page 3 (Deepest offset) */}
                <div className="absolute inset-0 bg-white border border-slate-150 rounded-2xl shadow-xs translate-x-2 translate-y-2 -z-20 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300 ease-out" />

                {/* Inner background layer for grid paper and decorative glow */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none -z-[5]">
                  {/* Lined Grid Paper Pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:20px_20px] opacity-60" />
                  
                  {/* Decorative glow inside card */}
                  <div className="absolute top-0 right-0 -mr-12 -mt-12 h-32 w-32 rounded-full bg-gradient-to-br from-violet-200/10 to-indigo-200/10 blur-xl group-hover:scale-125 transition-transform duration-500" />
                </div>

                {/* Spine crease line to look like a bound book/manual */}
                <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-slate-50/50 border-r border-slate-200/30 pointer-events-none rounded-l-2xl -z-[5]" />
                <div className="absolute left-[5px] top-0 bottom-0 w-[1px] bg-slate-200/10 pointer-events-none -z-[5]" />

                {/* PDF Tag at top-left corner */}
                <div className="absolute -top-2 left-6 bg-red-600 text-white text-[9px] font-black tracking-widest px-2 py-0.5 rounded shadow-xs uppercase select-none z-10">
                  PDF
                </div>

                {/* Main Card Content */}
                <div className="relative z-10 pl-2">
                  {/* Category Badge & Size */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={`inline-flex items-center rounded-lg px-2.5 py-1 text-[11px] font-bold tracking-wide ${item.bgClass} ${item.borderClass} ${item.iconColor}`}>
                      {item.category}
                    </span>
                    <span className="text-xs font-bold text-gray-400">
                      {item.grade}
                    </span>
                  </div>

                  {/* Title & Subject */}
                  <h4 className="text-xl font-bold text-slate-800 group-hover:text-violet-700 transition-colors duration-250 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-sm font-semibold text-gray-500 mt-2 leading-relaxed">
                    {item.subject}
                  </p>
                </div>

                {/* Footer and action buttons */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-end relative z-10 pl-2">
                  <div className="flex items-center gap-3">
                    {/* View/Read button */}
                    <div className="thick-black-border-wrapper no-hover-lift h-10 active:scale-[0.98]">
                      <a
                        href={item.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-9 px-5 rounded-[10px] bg-white flex items-center justify-center gap-2 text-xs md:text-sm font-bold text-gray-700 hover:text-violet-600 transition-all duration-205 cursor-pointer select-none"
                        title="Read PDF"
                      >
                        <span>Read PDF</span>
                      </a>
                    </div>

                    {/* Download button */}
                    <div className="thick-black-border-wrapper no-hover-lift h-10 w-10 active:scale-[0.98]">
                      <a
                        href={item.pdfUrl}
                        download
                        className="h-9 w-9 rounded-[10px] bg-white flex items-center justify-center text-gray-700 hover:text-violet-600 transition-all duration-205 cursor-pointer select-none"
                        title="Download PDF"
                      >
                        <ArrowDown size={16} className="stroke-[3]" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

export default NotesSection;
