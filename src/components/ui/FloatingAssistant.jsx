import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingAssistant() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <AnimatePresence>
        <motion.button
          key="fab"
          onClick={() => setOpen(true)}
          initial={{ scale: 0 }}
          animate={{ scale: 1, y: [0, -6, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
          whileHover={{ scale: 1.08, boxShadow: '0 8px 30px rgba(236,72,153,0.12)' }}
          className="fixed bottom-10 right-10 z-50 flex h-16 w-16 items-center justify-center rounded-full border border-transparent backdrop-blur-md bg-gradient-to-br from-[#ff7aa2]/70 to-[#ff6b81]/65 p-1 shadow-md"
          aria-label="Open assistant"
        >
          <span className="absolute -inset-1 rounded-full opacity-30 assistant-pulse" aria-hidden="true" />

          <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 2l1.8 3.8L18 7l-3 2.6L15.6 13 12 11l-3.6 2 0.6-3.4L6 7l4.2-1.2L12 2z" fill="white" opacity="0.95"/>
          </svg>
        </motion.button>
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.aside
            key="chat"
            initial={{ x: 360, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 360, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed right-6 bottom-24 z-50 w-80 max-w-xs rounded-2xl bg-white/95 backdrop-blur-sm border border-gray-100 shadow-2xl"
          >
            <div className="flex items-center justify-between gap-2 p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 flex-none rounded-lg bg-gradient-to-br from-[#ff7aa2] to-[#ff6b81] flex items-center justify-center text-white font-semibold">AI</div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Assistant</div>
                  <div className="text-xs text-gray-500">How can I help you today?</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setOpen(false)} aria-label="Close chat" className="text-sm text-gray-500 hover:text-gray-700">Close</button>
              </div>
            </div>

            <div className="h-64 overflow-y-auto border-t border-gray-100 p-4 text-sm text-gray-700">
              <div className="space-y-3">
                <div className="rounded-lg bg-gray-50 p-3">Hello — I can help with portfolio edits, code, or copy.</div>
                <div className="rounded-lg bg-[#fff7ed] p-3">Try: "Show more projects" or "Upgrade header"</div>
              </div>
            </div>

            <form className="flex items-center gap-2 p-3 border-t border-gray-100">
              <input placeholder="Type a message..." className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none" />
              <button type="button" className="rounded-lg bg-[#ff6b81] px-3 py-2 text-sm font-semibold text-white">Send</button>
            </form>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}
