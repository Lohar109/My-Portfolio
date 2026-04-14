import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // If there is no hash, scroll to top on page change
    if (!hash) {
      window.scrollTo(0, 0)
    } else {
      // If there is a hash, let's wait a tiny bit for the page to render
      // before trying to scroll to the element.
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''))
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [pathname, hash])

  return null
}

export default ScrollToTop
