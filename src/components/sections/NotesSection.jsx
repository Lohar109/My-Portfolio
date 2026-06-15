import { motion } from 'framer-motion';
import subjectsIllustration from '../../assets/subjects_illustration.png';

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
      </div>
    </motion.section>
  );
}

export default NotesSection;
