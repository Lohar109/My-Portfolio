import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Calendar,
  Award,
  RefreshCw,
  Eye,
  Layers,
  ChevronDown,
  Percent,
  CheckCircle,
  Activity,
  Flame
} from 'lucide-react'
import { SiLeetcode } from 'react-icons/si'

function LeetcodeSection() {
  const username = 'VaibhavL'
  const [profile, setProfile] = useState(null)
  const [solved, setSolved] = useState(null)
  const [contest, setContest] = useState(null)
  const [badges, setBadges] = useState(null)
  const [submissions, setSubmissions] = useState([])
  const [calendar, setCalendar] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [activeTooltip, setActiveTooltip] = useState(null)
  const [showProblems, setShowProblems] = useState(false)

  // Fallbacks in case unofficial API is slow or offline
  const fallbackProfile = {
    username: 'VaibhavL',
    name: 'VaibhavLohar',
    avatar: 'https://assets.leetcode.com/users/VaibhavL/avatar_1770435598.png',
    ranking: 118083
  }
  const fallbackSolved = {
    solvedProblem: 623,
    easySolved: 196,
    mediumSolved: 333,
    hardSolved: 94,
    totalSubmissionNum: [
      { difficulty: 'All', count: 629, submissions: 941 },
      { difficulty: 'Easy', count: 196, submissions: 262 },
      { difficulty: 'Medium', count: 336, submissions: 499 },
      { difficulty: 'Hard', count: 97, submissions: 180 }
    ]
  }
  const fallbackContest = {
    contestAttend: 12,
    contestRating: 2009.7567617198652,
    contestGlobalRanking: 20314,
    totalParticipants: 874287,
    contestTopPercentage: 2.42,
    contestBadges: { name: 'Knight' }
  }
  const fallbackBadges = {
    badgesCount: 14,
    badges: [
      { id: '10301958', displayName: 'Knight', icon: '/static/images/badges/knight.png', creationDate: '2026-05-06' },
      { id: '10252754', displayName: '100 Days Badge 2026', icon: 'https://assets.leetcode.com/static_assets/others/100_1080_1080.png', creationDate: '2026-05-03' },
      { id: '9776130', displayName: '50 Days Badge 2026', icon: 'https://assets.leetcode.com/static_assets/others/50_1080_1080.png', creationDate: '2026-03-14' },
      { id: '10222620', displayName: 'Apr LeetCoding Challenge', icon: '/static/images/badges/dcc-2026-4.png', creationDate: '2026-04-30' },
      { id: '9894700', displayName: 'Mar LeetCoding Challenge', icon: '/static/images/badges/dcc-2026-3.png', creationDate: '2026-03-31' },
      { id: '9601296', displayName: 'Feb LeetCoding Challenge', icon: '/static/images/badges/dcc-2026-2.png', creationDate: '2026-02-28' },
      { id: '10311803', displayName: 'Top Interview 150', icon: 'https://assets.leetcode.com/static_assets/others/Top_100_Liked-1.png', creationDate: '2026-05-11' },
      { id: '10223039', displayName: 'Top 100 Liked', icon: 'https://assets.leetcode.com/static_assets/others/Top_100_Liked.png', creationDate: '2026-04-30' },
      { id: '10168125', displayName: 'Data Navigator Badge', icon: 'https://assets.leetcode.com/static_assets/others/Quest_Data_Large.png', creationDate: '2026-04-25' },
      { id: '10031087', displayName: 'Algorithm Deconstructor Badge', icon: 'https://assets.leetcode.com/static_assets/others/Quest_Algorithm_Large.png', creationDate: '2026-04-11' },
      { id: '9833103', displayName: 'LeetCode 75', icon: 'https://assets.leetcode.com/static_assets/others/LeetCode_75.png', creationDate: '2026-03-22' },
      { id: '9534240', displayName: 'Architecture Builder Badge', icon: 'https://assets.leetcode.com/static_assets/others/Quest_Architecture_Large.png', creationDate: '2026-02-22' },
      { id: '9458841', displayName: 'Mathematical Insight Badge', icon: 'https://assets.leetcode.com/static_assets/others/Quest_Math_Large.png', creationDate: '2026-02-18' },
      { id: '9458421', displayName: 'Top SQL 50', icon: 'https://assets.leetcode.com/static_assets/others/Top_SQL_50.png', creationDate: '2026-02-17' }
    ]
  }
  const fallbackCalendar = {
    activeYears: [2026],
    streak: 119,
    totalActiveDays: 119,
    submissionCalendar: '{"1769212800": 5, "1769299200": 32, "1769385600": 4, "1769472000": 5, "1769558400": 6, "1769644800": 5, "1769731200": 5, "1769817600": 17, "1769904000": 8, "1769990400": 5, "1770076800": 5, "1770163200": 5, "1770249600": 6, "1770336000": 11, "1770422400": 6, "1770508800": 15, "1770595200": 5, "1770681600": 5, "1770768000": 8, "1770854400": 5, "1770940800": 5, "1771027200": 8, "1771113600": 9, "1771200000": 5, "1771286400": 7, "1771372800": 7, "1771459200": 1, "1771545600": 10, "1771632000": 5, "1771718400": 19, "1771804800": 3, "1771891200": 4, "1771977600": 5, "1772064000": 8, "1772150400": 13, "1772236800": 11, "1772323200": 15, "1772409600": 9, "1772496000": 17, "1772582400": 2, "1772668800": 1, "1772755200": 1, "1772841600": 1, "1772928000": 6, "1773014400": 2, "1773100800": 12, "1773187200": 7, "1773273600": 5, "1773360000": 8, "1773446400": 5, "1773532800": 5, "1773619200": 5, "1773705600": 7, "1773792000": 17, "1773878400": 42, "1773964800": 5, "1774051200": 8, "1774137600": 19, "1774224000": 35, "1774310400": 15, "1774396800": 11, "1774483200": 14, "1774569600": 9, "1774656000": 12, "1774742400": 8, "1774828800": 10, "1774915200": 8, "1775001600": 36, "1775088000": 7, "1775174400": 6, "1775260800": 4, "1775347200": 9, "1775433600": 10, "1775520000": 10, "1775606400": 10, "1775692800": 14, "1775779200": 12, "1775865600": 18, "1775952000": 14, "1776038400": 10, "1776124800": 5, "1776211200": 4, "1776297600": 5, "1776384000": 11, "1776470400": 1, "1776556800": 5, "1776643200": 1, "1776729600": 5, "1776816000": 3, "1776902400": 1, "1776988800": 16, "1777075200": 11, "1777161600": 1, "1777248000": 1, "1777334400": 14, "1777420800": 6, "1777507200": 6, "1777593600": 8, "1777680000": 4, "1777766400": 7, "1777852800": 6, "1777939200": 6, "1778025600": 2, "1778112000": 7, "1778198400": 7, "1778284800": 6, "1778371200": 8, "1778457600": 6, "1778544000": 1, "1778630400": 1, "1778716800": 1, "1778803200": 1, "1778889600": 1, "1778976000": 1, "1779062400": 1, "1779148800": 1, "1779235200": 1, "1779321600": 1, "1779408000": 4}'
  }
  const fallbackBadgeMap = new Map(fallbackBadges.badges.map((badge) => [badge.displayName, badge]))
  const fallbackSubmissions = [
    { title: 'Reverse Integer', titleSlug: 'reverse-integer', timestamp: '1779415374', statusDisplay: 'Accepted', lang: 'java' },
    { title: 'Search in Rotated Sorted Array', titleSlug: 'search-in-rotated-sorted-array', timestamp: '1779414220', statusDisplay: 'Accepted', lang: 'javascript' },
    { title: 'Find the Length of the Longest Common Prefix', titleSlug: 'find-the-length-of-the-longest-common-prefix', timestamp: '1779356664', statusDisplay: 'Accepted', lang: 'javascript' },
    { title: 'Find the Prefix Common Array of Two Arrays', titleSlug: 'find-the-prefix-common-array-of-two-arrays', timestamp: '1779274580', statusDisplay: 'Accepted', lang: 'javascript' },
    { title: 'Minimum Common Value', titleSlug: 'minimum-common-value', timestamp: '1779153262', statusDisplay: 'Accepted', lang: 'javascript' },
    { title: 'Jump Game IV', titleSlug: 'jump-game-iv', timestamp: '1779068871', statusDisplay: 'Accepted', lang: 'javascript' },
    { title: 'Jump Game III', titleSlug: 'jump-game-iii', timestamp: '1778980833', statusDisplay: 'Accepted', lang: 'javascript' },
    { title: 'Find Minimum in Rotated Sorted Array II', titleSlug: 'find-minimum-in-rotated-sorted-array-ii', timestamp: '1778894430', statusDisplay: 'Accepted', lang: 'javascript' },
    { title: 'Find Minimum in Rotated Sorted Array', titleSlug: 'find-minimum-in-rotated-sorted-array', timestamp: '1778809603', statusDisplay: 'Accepted', lang: 'javascript' },
    { title: 'Check if Array is Good', titleSlug: 'check-if-array-is-good', timestamp: '1778721239', statusDisplay: 'Accepted', lang: 'javascript' },
    { title: 'Minimum Moves to Make Array Complementary', titleSlug: 'minimum-moves-to-make-array-complementary', timestamp: '1778634668', statusDisplay: 'Accepted', lang: 'javascript' },
    { title: 'Minimum Initial Energy to Finish Tasks', titleSlug: 'minimum-initial-energy-to-finish-tasks', timestamp: '1778551944', statusDisplay: 'Accepted', lang: 'javascript' },
    { title: 'Best Time to Buy and Sell Stock IV', titleSlug: 'best-time-to-buy-and-sell-stock-iv', timestamp: '1778463344', statusDisplay: 'Accepted', lang: 'javascript' },
    { title: 'Best Time to Buy and Sell Stock III', titleSlug: 'best-time-to-buy-and-sell-stock-iii', timestamp: '1778463262', statusDisplay: 'Accepted', lang: 'javascript' },
    { title: 'Unique Paths II', titleSlug: 'unique-paths-ii', timestamp: '1778463141', statusDisplay: 'Accepted', lang: 'javascript' },
    { title: 'Triangle', titleSlug: 'triangle', timestamp: '1778463032', statusDisplay: 'Accepted', lang: 'javascript' },
    { title: 'Bitwise AND of Numbers Range', titleSlug: 'bitwise-and-of-numbers-range', timestamp: '1778462946', statusDisplay: 'Accepted', lang: 'javascript' },
    { title: 'Separate the Digits in an Array', titleSlug: 'separate-the-digits-in-an-array', timestamp: '1778462856', statusDisplay: 'Accepted', lang: 'javascript' },
    { title: 'IPO', titleSlug: 'ipo', timestamp: '1778376791', statusDisplay: 'Accepted', lang: 'javascript' },
    { title: 'Maximum Sum Circular Subarray', titleSlug: 'maximum-sum-circular-subarray', timestamp: '1778376350', statusDisplay: 'Accepted', lang: 'javascript' }
  ]

  useEffect(() => {
    let refreshTimer = null
    let isMounted = true
    const cacheKey = `leetcode_cache_${username}`
    const cacheTimeKey = `leetcode_cache_time_${username}`

    const hydrateCachedData = () => {
      try {
        const cachedRaw = localStorage.getItem(cacheKey)
        if (!cachedRaw) return null

        const cachedData = JSON.parse(cachedRaw)
        if (cachedData?.profile) setProfile(cachedData.profile)
        if (cachedData?.solved) setSolved(cachedData.solved)
        if (cachedData?.contest) setContest(cachedData.contest)
        if (cachedData?.badges) setBadges(cachedData.badges)
        if (cachedData?.submissions) setSubmissions(cachedData.submissions)
        if (cachedData?.calendar) setCalendar(cachedData.calendar)
        return cachedData
      } catch (error) {
        console.warn('Unable to read cached LeetCode data:', error)
        return null
      }
    }

    const cachedData = hydrateCachedData()

    const normalizeBadges = (payload) => {
      const apiBadges = Array.isArray(payload?.badges) ? payload.badges : []
      const mergedBadges = [...apiBadges]

      for (const fallbackBadge of fallbackBadges.badges) {
        if (!mergedBadges.some((badge) => badge?.displayName === fallbackBadge.displayName)) {
          mergedBadges.push(fallbackBadge)
        }
      }

      return {
        badgesCount: Math.max(payload?.badgesCount || 0, fallbackBadges.badgesCount),
        badges: mergedBadges,
        upcomingBadges: payload?.upcomingBadges || [],
        activeBadge: payload?.activeBadge || fallbackBadges.badges[0] || null
      }
    }

    async function fetchLeetcodeData() {
      try {
        setLoading(true)
        setError(false)

        const response = await fetch('/api/stats?source=leetcode', { cache: 'no-store' })
        if (!response.ok) throw new Error('Failed to load LeetCode stats from local API')

        const data = await response.json()
        if (!isMounted) return

        setProfile(data.profile || fallbackProfile)
        setSolved(data.solved || fallbackSolved)
        setContest(data.contest || fallbackContest)
        setBadges(normalizeBadges(data.badges || fallbackBadges))
        setSubmissions(data.submissions || fallbackSubmissions)
        setCalendar(data.calendar || fallbackCalendar)

        localStorage.setItem(cacheKey, JSON.stringify(data))
        localStorage.setItem(cacheTimeKey, Date.now().toString())

      } catch (err) {
        console.error('Unexpected error loading LeetCode data from local API.', err)
        if (!isMounted) return
        if (cachedData) {
          setProfile(cachedData.profile || fallbackProfile)
          setSolved(cachedData.solved || fallbackSolved)
          setContest(cachedData.contest || fallbackContest)
          setBadges(cachedData.badges || fallbackBadges)
          setSubmissions(cachedData.submissions || fallbackSubmissions)
          setCalendar(cachedData.calendar || fallbackCalendar)
        } else {
          setError(true)
          setProfile(fallbackProfile)
          setSolved(fallbackSolved)
          setContest(fallbackContest)
          setBadges(fallbackBadges)
          setSubmissions(fallbackSubmissions)
          setCalendar(fallbackCalendar)
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchLeetcodeData()

    refreshTimer = setInterval(() => {
      fetchLeetcodeData()
    }, 10 * 60 * 1000)

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        fetchLeetcodeData()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      isMounted = false
      if (refreshTimer) {
        clearInterval(refreshTimer)
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  // Helper date formatting
  function getLocalDateStringFromUnix(unixSec) {
    const d = new Date(unixSec * 1000)
    const y = d.getFullYear()
    const m = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    return `${y}-${m}-${day}`
  }

  function getLocalDateString(date) {
    const y = date.getFullYear()
    const m = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${y}-${m}-${day}`
  }

  function formatTooltipDate(dateStr) {
    const [year, month, day] = dateStr.split('-')
    const date = new Date(Number(year), Number(month) - 1, Number(day))
    return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
  }

  // Submission calendar squares builder
  const buildCalendarDays = () => {
    const days = []
    const today = new Date()

    // Determine calendar data
    let submissionLookup = {}
    const calendarSource = calendar?.submissionCalendar || fallbackCalendar.submissionCalendar
    if (calendarSource) {
      try {
        const calendarObj = JSON.parse(calendarSource)
        Object.entries(calendarObj).forEach(([unixStr, count]) => {
          const dateStr = getLocalDateStringFromUnix(Number(unixStr))
          submissionLookup[dateStr] = (submissionLookup[dateStr] || 0) + count
        })
      } catch (e) {
        console.error('Error parsing calendar string', e)
      }
    }

    // Generate 371 days ending today
    for (let i = 370; i >= 0; i--) {
      const d = new Date(today)
      d.setDate(today.getDate() - i)
      const dateStr = getLocalDateString(d)
      const count = submissionLookup[dateStr] || 0

      let level = 0
      if (count > 0 && count <= 2) level = 1
      else if (count > 2 && count <= 5) level = 2
      else if (count > 5 && count <= 10) level = 3
      else if (count > 10) level = 4

      days.push({
        date: dateStr,
        count,
        level
      })
    }

    return days
  }

  // Get color representing LeetCode submission counts (Emerald green & amber accent theme)
  const getSubmissionColor = (level) => {
    switch (level) {
      case 0: return 'bg-slate-100 hover:bg-slate-200/80'
      case 1: return 'bg-emerald-100 hover:bg-emerald-200 hover:shadow-[0_0_8px_rgba(16,185,129,0.3)]'
      case 2: return 'bg-emerald-300 hover:bg-emerald-400 hover:shadow-[0_0_12px_rgba(16,185,129,0.5)]'
      case 3: return 'bg-emerald-500 hover:bg-emerald-600 hover:shadow-[0_0_16px_rgba(16,185,129,0.7)]'
      case 4: return 'bg-amber-500 hover:bg-amber-600 hover:shadow-[0_0_20px_rgba(245,158,11,0.9)]'
      default: return 'bg-slate-100'
    }
  }

  // Language tags helper for Solved DSA Problems
  const getProblemLanguageColor = (lang) => {
    const colors = {
      java: 'bg-orange-50 text-orange-600 border border-orange-100',
      javascript: 'bg-yellow-50 text-yellow-700 border border-yellow-100',
      typescript: 'bg-blue-50 text-blue-600 border border-blue-100',
      python: 'bg-sky-50 text-sky-600 border border-sky-100',
      cpp: 'bg-indigo-50 text-indigo-600 border border-indigo-100',
      default: 'bg-amber-50 text-amber-700 border border-amber-100'
    }
    return colors[lang?.toLowerCase()] || colors.default
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  }

  // Renders beautiful loading skeleton state
  if (loading && !profile) {
    return (
      <section className="mx-auto max-w-6xl px-6 pt-6 pb-24 sm:px-10 lg:px-12 relative overflow-hidden">
        <div className="text-left mb-10">
          <div className="h-8 w-64 bg-slate-200 rounded animate-pulse" />
          <div className="h-4 w-96 bg-slate-100 rounded animate-pulse mt-2" />
        </div>
        <div className="w-full bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col gap-6 animate-pulse">
          <div className="flex flex-col sm:flex-row items-center gap-5 pb-6 border-b border-slate-100">
            <div className="h-20 w-20 rounded-full bg-slate-200" />
            <div className="flex-1 space-y-2.5">
              <div className="h-6 w-48 bg-slate-200 rounded" />
              <div className="h-4 w-32 bg-slate-150 rounded" />
              <div className="h-4 w-64 bg-slate-100 rounded" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-40 bg-slate-100 rounded-2xl" />
            <div className="h-40 bg-slate-100 rounded-2xl" />
          </div>
        </div>
      </section>
    )
  }

  const calendarDays = buildCalendarDays()

  // Dynamic values
  const solvedProblem = solved?.solvedProblem || 623
  const easySolved = solved?.easySolved || 196
  const mediumSolved = solved?.mediumSolved || 333
  const hardSolved = solved?.hardSolved || 94
  const easyTotal = 944
  const mediumTotal = 2057
  const hardTotal = 934
  const rating = contest?.contestRating ? Math.round(contest.contestRating) : 2010
  const globalRanking = contest?.contestGlobalRanking || 20314
  const totalParticipants = contest?.totalParticipants || 874287
  const attended = contest?.contestAttend || 12
  const topPercentage = contest?.contestTopPercentage || 2.42
  const userRank = profile?.ranking || 118083

  return (
    <motion.section
      className="mx-auto max-w-6xl px-6 pt-6 pb-24 sm:px-10 lg:px-12 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {/* Title */}
      <div className="text-left mb-10 select-none">
        <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-gray-900 font-sans flex items-center gap-3">
          <SiLeetcode className="h-7 w-7 text-amber-500 animate-pulse shrink-0" />
          Problem Solving & DSA
        </h2>
        <p className="mt-2 text-xs sm:text-sm font-semibold text-gray-400">
          A real-time overview of algorithm challenges solved, rating, and badges from LeetCode.
        </p>
      </div>

      {/* LeetCode Profile Widget */}
      <motion.div
        variants={itemVariants}
        className="w-full bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.015)] hover:shadow-[0_16px_40px_rgba(245,158,11,0.04)] transition-all duration-500 mb-10 flex flex-col gap-8 relative overflow-hidden group/leetcode"
      >
        {/* Subtle accent corner glow */}
        <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-amber-500/5 blur-3xl transition-opacity duration-500" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-500 transform scale-x-0 group-hover/leetcode:scale-x-100 transition-transform duration-500 origin-left" />

        {/* Profile Card Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left w-full">
            {/* Avatar wrapper matching GitHub's visual treatment */}
            <a
              href={`https://leetcode.com/u/${username}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group cursor-pointer block shrink-0"
            >
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 opacity-80 group-hover:opacity-100 blur-[2px] transition duration-300" />
              <img
                src={profile?.avatar || fallbackProfile.avatar}
                alt={profile?.name || username}
                className="relative h-20 w-20 rounded-full border-2 border-white object-cover select-none"
              />
            </a>

            {/* Profile Meta info */}
            <div className="flex-1">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h3 className="text-xl font-black text-gray-900 tracking-tight font-sans">
                  {profile?.name || 'Vaibhav Lohar'}
                </h3>
                <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-amber-50 border border-amber-100 text-amber-600 uppercase tracking-wide">
                  Knight
                </span>
              </div>
              <p className="text-xs font-bold text-amber-500 font-sans tracking-wide">
                @{profile?.username || username}
              </p>
              <p className="mt-1 text-xs font-semibold text-gray-500 max-w-md leading-relaxed">
                Full-Stack Developer | Solving complex algorithmic patterns and optimizing structures.
              </p>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-6 sm:gap-10 select-none bg-slate-50/50 px-6 py-4 rounded-2xl border border-slate-100 shrink-0">
            <div className="text-center">
              <div className="text-base sm:text-lg font-black text-gray-900 font-sans">
                {userRank.toLocaleString()}
              </div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">
                Global Rank
              </div>
            </div>
            <div className="h-8 w-[1px] bg-slate-200" />
            <div className="text-center">
              <div className="text-base sm:text-lg font-black text-gray-900 font-sans">
                {badges?.badgesCount || fallbackBadges.badgesCount}
              </div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">
                Badges
              </div>
            </div>
          </div>
        </div>

        {/* Stats and Rating Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Solved Stats Circular SVG (lg:col-span-5) */}
          <div className="lg:col-span-5 bg-slate-50/30 border border-slate-100/50 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
            <div className="relative flex-shrink-0">
              {/* Circular progress bar */}
              <svg className="w-32 h-32 transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="52"
                  className="stroke-slate-100"
                  strokeWidth="8"
                  fill="transparent"
                />
                <motion.circle
                  cx="64"
                  cy="64"
                  r="52"
                  className="stroke-amber-500"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={2 * Math.PI * 52}
                  initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 52 * (1 - solvedProblem / (easyTotal + mediumTotal + hardTotal)) }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  strokeLinecap="round"
                />
              </svg>
              {/* Text inside circle */}
              <div className="absolute inset-0 flex flex-col items-center justify-center select-none pt-1">
                <span className="text-2xl font-black text-gray-900 tracking-tight font-sans">
                  {solvedProblem}
                </span>
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">
                  / {easyTotal + mediumTotal + hardTotal}
                </span>
                <span className="text-[8px] font-extrabold text-emerald-500 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded-full mt-1.5 tracking-wide">
                  SOLVED
                </span>
              </div>
            </div>

            {/* Easy / Medium / Hard Progress bars */}
            <div className="flex-1 flex flex-col gap-3.5 w-full">
              {/* Easy */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between text-xs font-bold font-sans">
                  <span className="text-emerald-500 uppercase tracking-wider text-[9px] font-extrabold flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" /> Easy
                  </span>
                  <span className="text-gray-900 text-[11px]">{easySolved}<span className="text-gray-400">/{easyTotal}</span></span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-emerald-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(easySolved / easyTotal) * 100}%` }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                  />
                </div>
              </div>

              {/* Medium */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between text-xs font-bold font-sans">
                  <span className="text-amber-500 uppercase tracking-wider text-[9px] font-extrabold flex items-center gap-1">
                    <Activity className="h-3 w-3" /> Medium
                  </span>
                  <span className="text-gray-900 text-[11px]">{mediumSolved}<span className="text-gray-400">/{mediumTotal}</span></span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-amber-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(mediumSolved / mediumTotal) * 100}%` }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                  />
                </div>
              </div>

              {/* Hard */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between text-xs font-bold font-sans">
                  <span className="text-rose-500 uppercase tracking-wider text-[9px] font-extrabold flex items-center gap-1">
                    <Percent className="h-3 w-3" /> Hard
                  </span>
                  <span className="text-gray-900 text-[11px]">{hardSolved}<span className="text-gray-400">/{hardTotal}</span></span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-rose-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(hardSolved / hardTotal) * 100}%` }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Rating Level Contest Details Widget (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-slate-50/30 border border-slate-100/50 rounded-2xl p-6 flex flex-col justify-between gap-6">
            <div className="flex items-start justify-between flex-wrap gap-4 select-none">
              <div>
                <span className="text-[9px] font-extrabold text-amber-500 uppercase tracking-widest">Contest Standing</span>
                <h4 className="text-2xl font-black text-gray-900 font-sans mt-0.5 tracking-tight flex items-baseline gap-1">
                  {rating.toLocaleString()} <span className="text-xs font-bold text-gray-400 uppercase tracking-widest font-sans">Rating</span>
                </h4>
              </div>
              
              <div className="text-right">
                <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-widest">Global Top</span>
                <div className="text-sm font-black text-emerald-500 font-sans mt-0.5">
                  Top {topPercentage}%
                </div>
              </div>
            </div>

            {/* Level & Rankings Split */}
            <div className="grid grid-cols-3 gap-4 border-t border-slate-100/80 pt-4 select-none">
              <div>
                <div className="text-xs font-extrabold text-gray-900 font-sans">
                  Knight
                </div>
                <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">
                  Contest Level
                </div>
              </div>
              <div>
                <div className="text-xs font-extrabold text-gray-900 font-sans">
                  {globalRanking.toLocaleString()}
                </div>
                <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">
                  Rank / {totalParticipants.toLocaleString()}
                </div>
              </div>
              <div>
                <div className="text-xs font-extrabold text-gray-900 font-sans">
                  {attended}
                </div>
                <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">
                  Contests Attended
                </div>
              </div>
            </div>

            {/* Badges showcase bar */}
            <div className="border-t border-slate-100/80 pt-4 flex flex-col gap-2.5">
              <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-widest select-none">LeetCode Badges</span>
              <div className="flex items-center gap-2 flex-wrap justify-start">
                {badges?.badges ? (
                  badges.badges.map((badge, idx) => {
                    const badgeUrl = badge.icon.startsWith('http') ? badge.icon : `https://leetcode.com${badge.icon}`
                    return (
                      <div
                        key={badge.id || idx}
                        className="h-8 w-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center p-1 group/badge relative cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                        title={badge.displayName}
                      >
                        <img
                          src={badgeUrl}
                          alt={badge.displayName}
                          className="h-full w-full object-contain select-none"
                        />
                      </div>
                    )
                  })
                ) : (
                  <div className="h-6 w-32 bg-slate-100 rounded animate-pulse" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Submissions Calendar Widget */}
        <div className="flex flex-col gap-5 relative">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2 select-none">
              <Calendar className="h-4.5 w-4.5 text-amber-500" />
              <h4 className="text-xs sm:text-sm font-black text-gray-900 font-sans uppercase tracking-wider">
                Submission Grid & AC Streak
              </h4>
            </div>

            {/* Total submissions & Active streak badges */}
            <div className="flex items-center gap-3 select-none flex-wrap">
              <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-[11px] font-extrabold">
                <CheckCircle className="h-3.5 w-3.5" />
                {(solved?.totalSubmissionNum?.[0]?.submissions || 941)} Submissions in 12 months
              </div>
              <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-100 text-amber-700 px-3 py-1 rounded-full text-[11px] font-extrabold animate-pulse">
                <Flame className="h-3.5 w-3.5 fill-amber-500 stroke-amber-500" />
                {(calendar?.streak || fallbackCalendar.streak)} Day Streak
              </div>
            </div>
          </div>

          {/* Submission squares grid */}
          <div className="w-full overflow-x-auto pb-2 scrollbar-thin">
            <div className="min-w-[760px] flex flex-col gap-1.5 p-1 select-none">
              <div className="grid grid-flow-col grid-rows-7 gap-[3px]">
                {calendarDays.map((day, idx) => (
                  <div
                    key={day.date + idx}
                    className={`h-[9px] w-[9px] rounded-[2px] transition-all duration-200 cursor-pointer ${getSubmissionColor(day.level)}`}
                    onMouseEnter={(e) => setActiveTooltip({
                      count: day.count,
                      date: day.date,
                      x: e.clientX,
                      y: e.clientY - 12
                    })}
                    onMouseMove={(e) => setActiveTooltip((currentTooltip) => ({
                      ...(currentTooltip || {}),
                      count: day.count,
                      date: day.date,
                      x: e.clientX,
                      y: e.clientY - 12
                    }))}
                    onMouseLeave={() => setActiveTooltip(null)}
                  />
                ))}
              </div>

              {/* Grid labels */}
              <div className="flex justify-between text-[9px] font-bold text-gray-400 font-sans tracking-wide pt-1 px-1">
                <span>12 months ago</span>
                <div className="flex items-center gap-1">
                  <span>Less</span>
                  <span className="h-2 w-2 rounded-[1px] bg-slate-100" />
                  <span className="h-2 w-2 rounded-[1px] bg-emerald-100" />
                  <span className="h-2 w-2 rounded-[1px] bg-emerald-300" />
                  <span className="h-2 w-2 rounded-[1px] bg-emerald-500" />
                  <span className="h-2 w-2 rounded-[1px] bg-amber-500" />
                  <span>More</span>
                </div>
                <span>Today</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tooltip rendered outside the clipped card so hover details remain visible */}
      <AnimatePresence>
        {activeTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed z-[9999] bg-gray-900 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-lg shadow-lg pointer-events-none font-sans"
            style={{
              left: `${activeTooltip.x}px`,
              top: `${activeTooltip.y}px`,
              transform: 'translate(-50%, -100%)'
            }}
          >
            <div className="text-center whitespace-nowrap">
              <span className="text-amber-400">{activeTooltip.count} submissions</span> on {formatTooltipDate(activeTooltip.date)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Recent Solved Problems Title Accordion */}
      <motion.div
        variants={itemVariants}
        className="flex items-center gap-3 mb-6 select-none"
      >
        <Layers className="h-4.5 w-4.5 text-amber-500 shrink-0" />
        <h4 className="text-xs sm:text-sm font-black text-gray-900 font-sans uppercase tracking-wider shrink-0">
          Recent Solved Problems
        </h4>
        
        {/* Accordion Smooth toggle button */}
        <button
          onClick={() => setShowProblems(!showProblems)}
          className="flex items-center justify-center h-7 w-7 rounded-full bg-amber-50 hover:bg-amber-100 border border-amber-100 text-amber-700 hover:text-amber-800 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer shrink-0"
          aria-label="Toggle Solved Problems"
        >
          <motion.div
            animate={{ rotate: showProblems ? 180 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex items-center justify-center"
          >
            <ChevronDown className="h-4.5 w-4.5" />
          </motion.div>
        </button>
      </motion.div>

      {/* Accordion Solved Problems Grid */}
      <AnimatePresence initial={false}>
        {showProblems && (
          <motion.div
            key="leetcode-problems-grid"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-1 pb-1"
            >
              {submissions.slice(0, 6).map((prob, idx) => (
                <motion.div
                  key={prob.title + idx}
                  variants={itemVariants}
                  className="flex flex-col h-full bg-white border border-slate-100 rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(245,158,11,0.04)] hover:border-amber-100/80 transition-all duration-500 hover:-translate-y-1.5 group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  
                  {/* Problem Header */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-start gap-2.5 min-w-0">
                      <BookOpen className="h-5.5 w-5.5 text-amber-500 group-hover:text-orange-500 transition-colors duration-300 shrink-0 mt-0.5" />
                      <a
                        href={`https://leetcode.com/problems/${prob.titleSlug}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base font-black text-gray-900 tracking-tight font-sans hover:text-amber-600 transition-colors duration-200 select-all break-words relative pb-0.5 group/link"
                      >
                        {prob.title}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300 group-hover/link:w-full" />
                      </a>
                    </div>
                  </div>

                  {/* Solved Status & Meta */}
                  <p className="text-xs font-semibold leading-relaxed text-gray-400 flex-1 mb-4 select-text">
                    Successfully solved this algorithm challenge with optimized spacetime complexity.
                  </p>

                  {/* Problem Footer (Accepted indicator + Lang) */}
                  <div className="flex items-center justify-between border-t border-slate-50 pt-4 mt-auto select-none">
                    <span className="text-[9px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 font-sans uppercase tracking-wider">
                      Accepted
                    </span>

                    {/* Language tag */}
                    <span className={`text-[9px] font-extrabold px-2.5 py-0.5 rounded-full font-sans uppercase tracking-wider ${getProblemLanguageColor(prob.lang)}`}>
                      {prob.lang}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}

export default LeetcodeSection
