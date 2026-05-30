import { useRef, useState, useEffect } from 'react'
import { useInView } from 'framer-motion'
import { Users, Package, MapPin, Recycle } from 'lucide-react'

const iconMap = {
  Users, Package, MapPin, Recycle,
}

export default function Counter({ label, value, suffix, icon }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [count, setCount] = useState(0)
  const Icon = iconMap[icon] || Users

  const useK = value >= 1000
  const target = useK ? value / 1000 : value
  const displaySuffix = useK ? 'K' + suffix : suffix

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const end = target
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <div ref={ref} className="h-full text-center p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-b from-primary-800/90 to-primary-900/90 border border-primary-600/20
      shadow-lg shadow-primary-900/50 transition-all duration-500 hover:from-primary-700/90 hover:to-primary-800/90">
      <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-lg sm:rounded-xl bg-primary-600/30 flex items-center justify-center">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-300" />
      </div>
      <div className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-0.5">
        {count}{displaySuffix}
      </div>
      <div className="text-primary-300/80 text-xs sm:text-sm font-medium leading-tight">{label}</div>
    </div>
  )
}
