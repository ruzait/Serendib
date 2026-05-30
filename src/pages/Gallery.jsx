import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Image } from 'lucide-react'

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)
import Reveal from '../components/Reveal'
import StaggerGrid, { StaggerItem } from '../components/StaggerGrid'
import { galleryImages } from '../data/products'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'farm', label: 'Farm' },
  { id: 'products', label: 'Products' },
  { id: 'team', label: 'Team' },
  { id: 'events', label: 'Events' },
]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightbox, setLightbox] = useState(null)
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 300], [0, 80])

  const filtered = activeFilter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter)

  return (
    <>
      {/* HERO */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1677147269347-45efc61d242a?w=1920&q=80" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-green-950/90" />
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 60% 40%, #22C55E 0%, transparent 50%), radial-gradient(circle at 30% 70%, #15803D 0%, transparent 50%)' }}
          />
        </motion.div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-6">
              <Image className="w-4 h-4" />
              Gallery
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">Our Story in Photos</h1>
            <p className="text-primary-100/80 text-lg md:text-xl max-w-2xl mx-auto">
              Real moments from our farms, production, and community
            </p>
          </Reveal>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="section-padding bg-white pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {categories.map((cat) => {
              const isActive = activeFilter === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-5 py-2.5 rounded-2xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-primary-700 text-white shadow-lg shadow-primary-700/25 scale-105'
                      : 'bg-primary-50 text-primary-700 hover:bg-primary-100'
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>

          {/* MASONRY GRID */}
          <StaggerGrid key={activeFilter} className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((img) => (
              <StaggerItem key={img.id} className="break-inside-avoid">
                <div
                  onClick={() => setLightbox(img)}
                  className="rounded-2xl overflow-hidden group cursor-pointer relative"
                >
                  <img src={img.src} alt={img.alt}
                    className="w-full object-cover transition-all duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/40 transition-all duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                      {img.alt}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* INSTAGRAM FEED */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 text-pink-600 text-sm font-medium mb-4">
              <InstagramIcon className="w-4 h-4" />
              @serendib_organic_hpl
            </div>
            <h2 className="section-title mb-3">Follow Our Journey</h2>
            <p className="section-subtitle mx-auto">More photos and updates on Instagram</p>
          </Reveal>
          <Reveal className="text-center">
            <a href="https://www.instagram.com/serendib_organic_hpl/" target="_blank" rel="noopener noreferrer"
              className="btn-secondary">
              <InstagramIcon className="w-4 h-4" />
              Follow on Instagram
            </a>
          </Reveal>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            ✕
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-[85vh] object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 text-sm bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
            {lightbox.alt}
          </p>
        </div>
      )}
    </>
  )
}
