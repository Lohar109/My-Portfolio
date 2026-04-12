import { Check, Copy, Mail, Send } from 'lucide-react'
import { useState } from 'react'

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
  {
    label: 'WhatsApp',
    href: 'https://wa.me/9172491660',
    icon: 'whatsapp',
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
    <footer id="contact" className="bg-[#F9F9FB] px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-24">
        <div className="max-w-3xl">
          <h2 className="max-w-2xl text-3xl font-bold text-gray-900 tracking-tight leading-tight">
            Let&apos;s build something great together.
          </h2>

          <p className="mt-7 max-w-2xl text-lg font-normal leading-8 text-gray-700">
            I&apos;m currently available for new projects. Whether you have an idea
            to discuss or need a reliable developer to ship it, I&apos;d love to
            connect.
          </p>
        </div>

        <div className="space-y-5">
          <article className="rounded-[2rem] border border-gray-100 bg-white p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 bg-gray-50 text-gray-700">
                <Mail size={18} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gray-900">
                Email
              </p>
            </div>

            <p className="mt-5 text-base font-medium text-gray-800">{emailAddress}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 rounded-full bg-black px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-gray-800"
              >
                {isCopied ? (
                  <Check size={14} aria-hidden="true" />
                ) : (
                  <Copy size={14} aria-hidden="true" />
                )}
                {isCopied ? 'Copied' : 'Copy'}
              </button>

              <a
                href={`mailto:${emailAddress}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-black px-3 py-1.5 text-xs font-semibold !text-white transition hover:bg-gray-800"
              >
                <Send size={14} aria-hidden="true" />
                Send
              </a>
            </div>
          </article>

          <article className="rounded-[2rem] border border-gray-100 bg-white p-7 shadow-sm">
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
          </article>
        </div>
      </div>

      <p className="mt-10 text-center text-[10px] uppercase tracking-widest text-gray-400">
        Built with passion by Vaibhav Lohar © 2026
      </p>
    </footer>
  )
}

export default FooterSection
