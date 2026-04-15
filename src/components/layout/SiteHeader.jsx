import { Link } from 'react-router-dom'

function SiteHeader({ isDetailPage = false }) {
  return (
    <header className="sticky top-0 z-30 border-b border-gray-200/80 bg-[#f5f5f7]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 sm:px-10 lg:px-16">
        <Link to="/" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-stone-950 text-sm font-semibold text-stone-50">
            VL
          </span>
          <div className="space-y-1">
            <p className="text-sm font-semibold tracking-[0.2em] text-stone-950 uppercase">
              Vaibhav Lohar
            </p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <p className="text-[11px] font-medium text-gray-500">
                Full Stack Developer • AI Engineer
              </p>
            </div>
          </div>
        </Link>

        <nav className="flex items-center gap-2 text-sm font-medium text-stone-700">
          {isDetailPage ? (
            <>
              <Link
                to="/"
                className="rounded-full px-4 py-2 transition hover:bg-white/70 hover:text-stone-950"
              >
                Home
              </Link>
              <a
                href="#case-study"
                className="rounded-full px-4 py-2 transition hover:bg-white/70 hover:text-stone-950"
              >
                Case Study
              </a>
            </>
          ) : (
            <>
              <a
                href="#skills"
                className="rounded-full px-4 py-2 transition hover:bg-white/70 hover:text-stone-950"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="rounded-full px-4 py-2 transition hover:bg-white/70 hover:text-stone-950"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="rounded-full px-4 py-2 transition hover:bg-white/70 hover:text-stone-950"
              >
                Contact
              </a>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
