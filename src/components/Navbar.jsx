import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sprout } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/farmers', label: 'Farmers' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary-700 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <Sprout className="w-6 h-6 text-white" />
          </div>
          <span className={`font-heading font-bold text-lg transition-colors duration-300 ${
            scrolled ? 'text-primary-900' : 'text-white'
          }`}>
            Serendib<span className="text-primary-500">Organic</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? scrolled
                      ? 'bg-primary-100 text-primary-800'
                      : 'bg-white/20 text-white'
                    : scrolled
                      ? 'text-primary-700 hover:bg-primary-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <Link to="/contact" className="btn-primary text-sm ml-2">
            Get in Touch
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 rounded-2xl transition-colors ${
            scrolled ? 'text-primary-900' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className={`md:hidden transition-all duration-400 overflow-hidden ${
        mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-md mx-4 mt-2 rounded-3xl shadow-xl p-4 border border-gray-100">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-primary-100 text-primary-800'
                    : 'text-primary-700 hover:bg-primary-50'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <Link to="/contact" className="btn-primary text-sm w-full justify-center mt-3">
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  )
}
