function SiteFooter() {
  return (
    <footer className="mt-20 flex w-full flex-col items-center justify-center gap-2 border-t border-gray-200/50 py-8">
      <p className="font-sans text-sm font-medium tracking-wide text-gray-500">
        © 2026{' '}
        <span className="cursor-default text-gray-500 transition-colors hover:text-gray-800">
          Vaibhav Lohar
        </span>
        . All rights reserved.
      </p>
      <p className="font-sans text-xs text-gray-400">
        Built with React.js & Tailwind CSS
      </p>
    </footer>
  )
}

export default SiteFooter