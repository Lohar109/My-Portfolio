import { Check, Copy, Mail, MessageCircle, Send } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const emailAddress = 'vaibhavlohar109@gmail.com'

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vaibhav-lohar-ba7824315',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Lohar109',
    icon: 'github',
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/VaibhavL/',
    icon: 'leetcode',
  },
  {
    label: 'Resume',
    href: '/resume.pdf',
    icon: 'resume',
  },
]

function SocialIcon({ icon }) {
  if (icon === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          fill="#0A66C2"
          d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.93v5.68H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.33 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.11 20.45H3.55V9h3.56v11.45Z"
        />
      </svg>
    )
  }

  if (icon === 'github') {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          fill="#111827"
          d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.48.09.65-.2.65-.46v-1.62c-2.67.58-3.23-1.13-3.23-1.13-.44-1.1-1.07-1.4-1.07-1.4-.87-.6.07-.58.07-.58.96.07 1.47.99 1.47.99.85 1.46 2.23 1.04 2.78.8.09-.62.33-1.04.6-1.28-2.13-.24-4.37-1.07-4.37-4.74 0-1.05.37-1.9.98-2.58-.1-.24-.43-1.22.1-2.55 0 0 .8-.26 2.62.98a9.1 9.1 0 0 1 4.78 0c1.82-1.24 2.62-.98 2.62-.98.53 1.33.2 2.31.1 2.55.62.68.98 1.53.98 2.58 0 3.68-2.24 4.5-4.38 4.73.34.3.65.88.65 1.78v2.64c0 .26.17.56.66.46A9.5 9.5 0 0 0 12 2.5Z"
        />
      </svg>
    )
  }

  if (icon === 'leetcode') {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          fill="#FFA116"
          d="M16.1 4.2 9 11.3a2.4 2.4 0 0 0 0 3.4l2.2 2.2a2.4 2.4 0 0 0 3.4 0l1.9-1.9-1.4-1.4-1.9 1.9a.4.4 0 0 1-.56 0l-2.2-2.2a.4.4 0 0 1 0-.56l7.1-7.1-1.4-1.44Z"
        />
        <path fill="#B3B3B3" d="M4 12a1 1 0 0 1 1-1h7v2H5a1 1 0 0 1-1-1Z" />
      </svg>
    )
  }

  if (icon === 'whatsapp') {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          fill="#25D366"
          d="M12 2.2A9.8 9.8 0 0 0 3.6 17l-1.2 4.3 4.4-1.1A9.8 9.8 0 1 0 12 2.2Zm0 17.8a8 8 0 0 1-4.1-1.1l-.3-.2-2.6.7.7-2.5-.2-.3A8 8 0 1 1 12 20Zm4.4-6c-.24-.12-1.44-.7-1.67-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06a6.57 6.57 0 0 1-1.94-1.2 7.21 7.21 0 0 1-1.34-1.66c-.14-.24-.02-.37.1-.49.1-.1.24-.26.36-.39.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.31.98 2.47c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.51.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28Z"
        />
      </svg>
    )
  }

  if (icon === 'mail') {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <defs>
          <linearGradient id="mail-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <path
          fill="url(#mail-gradient)"
          d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z"
        />
      </svg>
    )
  }

  if (icon === 'resume') {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          fill="#EF4444"
          d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-8v-2h8v2zm0-4h-8v-2h8v2zm-3-5V3.5L18.5 9H13z"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        fill="#2563EB"
        d="M6 3h9l4 4v14H6V3Zm2 2v14h9V8h-4V5H8Zm2 5h6v1.5h-6V10Zm0 3h6v1.5h-6V13Zm0 3h4v1.5h-4V16Z"
      />
      <path fill="#16A34A" d="m15.2 15.5 1.1 1.1 2-2 .9.9-2.9 2.9-2-2 .9-.9Z" />
    </svg>
  )
}

function FooterSection() {
  const [isCopied, setIsCopied] = useState(false)
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    const checkActiveStatus = () => {
      const hour = parseInt(
        new Date().toLocaleTimeString('en-US', {
          hour12: false,
          hour: 'numeric',
          timeZone: 'Asia/Kolkata',
        }),
        10
      )
      setIsActive(hour >= 7 && hour < 23)
    }

    checkActiveStatus()
    const timer = setInterval(checkActiveStatus, 60000)
    return () => clearInterval(timer)
  }, [])

  const emailButtonClass =
    'inline-flex h-8.5 w-24 items-center justify-center gap-2 rounded-full bg-black px-4 text-[16px] !text-white !no-underline transition-all hover:bg-gray-800 active:scale-95'
  
  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(emailAddress)
      setIsCopied(true)
      window.setTimeout(() => setIsCopied(false), 1500)
    } catch {
      setIsCopied(false)
    }
  }

  return (
    <motion.footer
      id="contact"
      className="relative overflow-hidden bg-[#F9F9FB] px-6 py-24 sm:px-10 lg:px-16"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap');`}</style>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent opacity-80" />

      <div className="mx-auto grid max-w-6xl items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-8 w-full h-full">
          <div className="max-w-3xl">
            <h2 className="max-w-2xl text-3xl font-bold text-gray-900 tracking-tight leading-tight">
              Let’s build products that people actually love.
            </h2>

            <p className="mt-7 max-w-2xl text-lg font-normal leading-8 text-gray-700">
              As a recent graduate with a passion for web development, I focus on building clean, interactive, and user-friendly interfaces. I'm currently expanding my toolkit with DevOps and AI, looking for my first professional role where I can contribute and grow with a great team.
            </p>
          </div>

          <motion.article
            className="flex w-full flex-1 flex-col rounded-[2rem] border border-gray-100 bg-white p-7 shadow-sm sm:p-8"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 bg-gray-50 text-gray-700">
                <Mail size={18} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gray-900">
                Email
              </p>
            </div>

            <div className="mt-5 flex items-center justify-start">
              <p className="text-base font-medium text-gray-800 break-all">
                {emailAddress}&nbsp;&nbsp;
              </p>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="rounded text-gray-400 transition-all hover:text-gray-900"
                aria-label="Copy email address"
                title="Copy email"
              >
                {isCopied ? <Check size={18} strokeWidth={2} className="text-green-600" /> : <Copy size={18} strokeWidth={2} />}
              </button>
            </div>

            <div className="mt-auto pt-6">
              <a
                href={`mailto:${emailAddress}`}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-100 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:text-gray-900 hover:shadow-md"
              >
                <SocialIcon icon="mail" />
                Send Email
              </a>
            </div>
          </motion.article>
        </div>

        <div className="flex flex-col gap-8 w-full h-full">
          <motion.article
            className="flex w-full flex-col rounded-[2rem] border border-gray-100 bg-white p-7 shadow-sm sm:p-8"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 bg-gray-50 text-gray-700">
                  <MessageCircle size={18} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gray-900">
                  DIRECT MESSAGE
                </p>
              </div>
              <div
                className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                  isActive ? 'bg-green-50 text-green-500' : 'bg-red-50 text-red-500'
                }`}
              >
                <span className="relative flex h-2 w-2 items-center justify-center">
                  <span
                    className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${
                      isActive ? 'bg-green-400' : 'bg-red-400'
                    }`}
                  ></span>
                  <span
                    className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
                      isActive ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  ></span>
                </span>
                {isActive ? 'Active Now' : 'Away / Responding Soon'}
              </div>
            </div>

            <p className="mt-5 text-base font-normal leading-relaxed text-gray-700">
              Want to talk about a potential role or just discuss tech? I'm always open to connecting with new teams and professionals. WhatsApp is the fastest way to reach me for a quick conversation.
            </p>

            <a
              href="https://wa.me/9172491660"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-gray-100 bg-white px-5 py-2.5 text-sm font-semibold text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:text-green-600 hover:shadow-md"
            >
              <SocialIcon icon="whatsapp" />
              Message on WhatsApp
            </a>
          </motion.article>

          <motion.article
            className="flex w-full flex-1 flex-col rounded-[2rem] border border-gray-100 bg-white p-7 shadow-sm sm:p-8"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gray-900">
              Socials
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-100 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:text-gray-900 hover:shadow-md"
                >
                  <SocialIcon icon={icon} />
                  {label}
                </a>
              ))}
            </div>
          </motion.article>
        </div>
      </div>

    </motion.footer>
  )
}

export default FooterSection
