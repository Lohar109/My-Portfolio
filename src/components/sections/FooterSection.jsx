import { Check, Copy, Mail, Send } from 'lucide-react'
import { useState } from 'react'

const emailAddress = 'hello@vaibhav.dev'

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/',
    icon: 'github',
  },
  {
    label: 'X',
    href: 'https://twitter.com/',
    icon: 'twitter',
  },
]

const socialIconPaths = {
  github:
    'M12 2.5a9.5 9.5 0 0 0-3 18.5c.48.09.65-.2.65-.46v-1.62c-2.67.58-3.23-1.13-3.23-1.13-.44-1.1-1.07-1.4-1.07-1.4-.87-.6.07-.58.07-.58.96.07 1.47.99 1.47.99.85 1.46 2.23 1.04 2.78.8.09-.62.33-1.04.6-1.28-2.13-.24-4.37-1.07-4.37-4.74 0-1.05.37-1.9.98-2.58-.1-.24-.43-1.22.1-2.55 0 0 .8-.26 2.62.98a9.1 9.1 0 0 1 4.78 0c1.82-1.24 2.62-.98 2.62-.98.53 1.33.2 2.31.1 2.55.62.68.98 1.53.98 2.58 0 3.68-2.24 4.5-4.38 4.73.34.3.65.88.65 1.78v2.64c0 .26.17.56.66.46A9.5 9.5 0 0 0 12 2.5Z',
  linkedin:
    'M5 8.5h3v10H5v-10Zm1.5-4a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Zm4.5 4h2.85v1.37h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.56 1.98 3.56 4.55v5.62h-3v-4.98c0-1.19-.02-2.72-1.65-2.72-1.66 0-1.91 1.3-1.91 2.63v5.07H11v-10Z',
  twitter:
    'M4 4.5h4.15l4.26 5.72 4.9-5.72H20l-6.28 7.33 6.59 8.67h-4.14l-4.68-6.2-5.32 6.2H3.5l6.66-7.77L4 4.5Zm2.08 1.42 10.8 13.16h1.35L7.45 5.92H6.08Z',
}

function SocialIcon({ icon }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={socialIconPaths[icon]} />
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
                className="inline-flex items-center gap-2 rounded-full border border-gray-100 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:text-gray-900"
              >
                {isCopied ? (
                  <Check size={16} aria-hidden="true" />
                ) : (
                  <Copy size={16} aria-hidden="true" />
                )}
                {isCopied ? 'Copied' : 'Copy'}
              </button>

              <a
                href={`mailto:${emailAddress}`}
                className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-semibold !text-white transition hover:bg-gray-800"
              >
                <Send size={16} aria-hidden="true" />
                Send
              </a>
            </div>
          </article>

          <article className="rounded-[2rem] border border-gray-100 bg-white p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gray-900">
              Socials
            </p>

            <div className="mt-5 space-y-3">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-gray-100 bg-white px-4 py-3 text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:text-gray-900 hover:shadow-md"
                >
                  <span className="flex items-center gap-3 text-sm font-medium">
                    <SocialIcon icon={icon} />
                    {label}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                    Open
                  </span>
                </a>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-gray-100 bg-white px-6 py-4 shadow-sm">
            <div className="flex items-center gap-3">
              <span
                className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"
                aria-hidden="true"
              />
              <p className="text-sm font-medium text-gray-700">
                Available for new projects
              </p>
            </div>
          </article>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
