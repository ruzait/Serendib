import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useMotionValue, animate } from 'framer-motion'
import { ArrowRight, ShieldCheck, Sprout, Quote } from 'lucide-react'

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)
import Reveal from '../components/Reveal'
import StaggerGrid, { StaggerItem } from '../components/StaggerGrid'
import Counter from '../components/Counter'
import { impactStats, testimonials } from '../data/products'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function Home() {
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, 150])
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0])
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.15])
  const contentY = useTransform(scrollY, [0, 400], [0, -60])

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen pt-24 sm:pt-28 lg:pt-36 pb-12 md:pb-16 flex flex-col">
        <motion.div style={{ y: heroY, opacity: heroOpacity, scale: heroScale }} className="absolute inset-0">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1664889788538-726f58620607?w=1920&q=80" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/70 to-transparent" />
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, #22C55E 0%, transparent 40%), radial-gradient(circle at 80% 70%, #15803D 0%, transparent 40%), radial-gradient(circle at 50% 50%, #166534 0%, transparent 60%)' }}
          />
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary-500/5 blur-3xl max-sm:hidden" />
          <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-green-500/5 blur-3xl max-sm:hidden" />
          <div className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full bg-primary-400/5 blur-3xl max-sm:hidden" />
        </motion.div>

          <motion.div style={{ y: contentY }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="max-w-2xl text-left space-y-6"
            >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm">
              <ShieldCheck className="w-4 h-4" />
              SL Enterprise Registered | Sri Lanka
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight">
              Sri Lanka's <span className="text-amber-400 font-semibold">Organic</span> Agriculture Solution
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-primary-100/80 max-w-lg leading-relaxed">
              <strong><em>Serendib Organic Holdings Pvt Ltd</em></strong> — A Sri Lankan agro-based company delivering organic fertilizers, sustainable farming solutions, and natural agricultural products.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-start gap-4 pt-2">
              <Link to="/products" className="btn-primary text-base">
                Explore Products <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/farmers" className="btn-secondary text-base border-white/30 text-white hover:bg-white/10">
                Farmer Network
              </Link>
              <Link to="/contact" className="btn-accent text-base">
                Contact Us
              </Link>
            </motion.div>
            </motion.div>
          </motion.div>

      </section>

      {/* IMPACT DASHBOARD */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <StaggerGrid className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StaggerItem><Counter {...impactStats[0]} /></StaggerItem>
            <StaggerItem><Counter {...impactStats[1]} /></StaggerItem>
            <StaggerItem><Counter {...impactStats[2]} /></StaggerItem>
            <StaggerItem><Counter {...impactStats[3]} /></StaggerItem>
          </StaggerGrid>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
                  <Sprout className="w-4 h-4" />
                  About
                </div>
                <h2 className="section-title mb-6">Sri Lanka's Trusted Organic Agriculture Partner</h2>
                <p className="text-primary-600 leading-relaxed mb-6">
                  Headquartered in Addalaichenai, Ampara, <strong>Serendib Organic Holdings Pvt Ltd</strong> is a registered enterprise under SL Enterprises specializing in organic fertilizer production and sustainable farming solutions.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="flex items-center gap-3 bg-primary-50 rounded-xl px-4 py-3">
                    <div className="w-9 h-9 rounded-lg bg-primary-700/10 flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4 text-primary-700" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-primary-900">PVT Ltd</div>
                      <div className="text-xs text-primary-500">Registered Company</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-primary-50 rounded-xl px-4 py-3">
                    <div className="w-9 h-9 rounded-lg bg-primary-700/10 flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4 text-primary-700" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-primary-900">Est. 2019</div>
                      <div className="text-xs text-primary-500">Founded</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-primary-50 rounded-xl px-4 py-3">
                    <div className="w-9 h-9 rounded-lg bg-primary-700/10 flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4 text-primary-700" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-primary-900">Ampara</div>
                      <div className="text-xs text-primary-500">Eastern Province</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-primary-50 rounded-xl px-4 py-3">
                    <div className="w-9 h-9 rounded-lg bg-primary-700/10 flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4 text-primary-700" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-primary-900">Agro-based</div>
                      <div className="text-xs text-primary-500">Industry Sector</div>
                    </div>
                  </div>
                </div>
                <Link to="/about" className="btn-primary">
                  Learn Our Story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1558005530-a7958896ec60?w=700&q=80"
                    alt="Organic farm landscape"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-3xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-primary-700" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Verified Listing</div>
                      <a href="https://www.slenterprises.gov.lk/industry-detail/eyJpdiI6IkhvSGdwdkswWU1ibHZpaHE0bHFOMXc9PSIsInZhbHVlIjoiMWNvL1dJMk1OdjdibmpnNm5SSmFhZz09IiwibWFjIjoiZTkwMDhkMjQxMzg4ZGRlZWZjMDM4OTVlZWJjNjQwNGQwMWQ0YWM5M2UxYzE5MDdkZjFkNjVlNDg3YThiYTA5NyIsInRhZyI6IiJ9" target="_blank" rel="noopener noreferrer"
                        className="text-xs text-primary-600 hover:underline">SL Enterprises</a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="section-title mb-4">Our Vision & Mission</h2>
            <p className="section-subtitle mx-auto">Driving sustainable agriculture across Sri Lanka</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Reveal>
              <div className="card text-center p-8 h-full">
                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-primary-100 flex items-center justify-center">
                  <Sprout className="w-7 h-7 text-primary-700" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary-900 mb-3">Growing Nature</h3>
                <p className="text-primary-600 leading-relaxed">
                  Nurturing the land with organic practices that restore soil health and protect biodiversity for future generations.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="card text-center p-8 h-full">
                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-primary-100 flex items-center justify-center">
                  <Sprout className="w-7 h-7 text-primary-700" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary-900 mb-3">Empowering Farmers</h3>
                <p className="text-primary-600 leading-relaxed">
                  Equipping local farming communities with knowledge, resources, and market access to thrive through sustainable agriculture.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="card text-center p-8 h-full">
                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-primary-100 flex items-center justify-center">
                  <Sprout className="w-7 h-7 text-primary-700" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary-900 mb-3">Sustaining the Future</h3>
                <p className="text-primary-600 leading-relaxed">
                  Building a resilient food system through eco-friendly innovation, waste recycling, and long-term environmental stewardship.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1546845776-dcdf70fd09e3?w=1920&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-green-950/95" />
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 60% 30%, #22C55E 0%, transparent 50%), radial-gradient(circle at 30% 70%, #15803D 0%, transparent 50%)' }}
        />
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-primary-500/10 blur-3xl max-sm:hidden" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-green-500/10 blur-3xl max-sm:hidden" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-primary-200 text-sm mb-6">
              <Sprout className="w-4 h-4" />
              Be Part of the Change
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
              Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-green-300">Organic</span> Revolution
            </h2>
            <p className="text-primary-200 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you're a farmer looking to transition to organic practices, a buyer seeking premium natural produce, 
              or a partner who shares our vision — together we can build a greener, more sustainable Sri Lanka.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-primary-200 text-sm">
                <ShieldCheck className="w-4 h-4 text-green-400" /> Certified Organic
              </div>
              <div className="flex items-center gap-2 text-primary-200 text-sm">
                <ShieldCheck className="w-4 h-4 text-green-400" /> Farmer Network
              </div>
              <div className="flex items-center gap-2 text-primary-200 text-sm">
                <ShieldCheck className="w-4 h-4 text-green-400" /> Free Consultation
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary text-base bg-white text-primary-700 hover:bg-primary-50 shadow-xl">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/farmers" className="btn-secondary text-base border-white/30 text-white hover:bg-white/10">
                Join Farmer Network
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="section-title mb-4">Our Products & Services</h2>
            <p className="section-subtitle mx-auto">Complete organic solutions from soil to harvest</p>
          </Reveal>
          <StaggerGrid className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Organic Fertilizers',
                desc: 'Compost, liquid bio-fertilizers, and soil enrichment solutions for sustainable farming.',
                img: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=400&q=80',
                color: 'from-primary-500 to-primary-700',
              },
              {
                title: 'Farm Produce',
                desc: 'Fresh organic vegetables, seasonal crops, and farm produce distribution across Sri Lanka.',
                img: 'https://images.unsplash.com/photo-1520052203542-d3095f1b6cf0?w=400&q=80',
                color: 'from-accent to-yellow-600',
              },
              {
                title: 'Agricultural Services',
                desc: 'Soil consultation, organic farming guidance, and comprehensive farmer support programs.',
                img: 'https://images.unsplash.com/photo-1505471768190-275e2ad7b3f9?w=400&q=80',
                color: 'from-soil to-soil-light',
              },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <Link to="/products" className="card group overflow-hidden block h-full">
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-4">
                    <img src={item.img} alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${item.color} mb-3`}>
                    {item.title.split(' ')[0]}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary-900 mb-2">{item.title}</h3>
                  <p className="text-primary-600 text-sm leading-relaxed">{item.desc}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
          <Reveal className="text-center mt-10">
            <Link to="/products" className="btn-secondary">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* INSTAGRAM FEED */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 text-pink-600 text-sm font-medium mb-4">
              <InstagramIcon className="w-4 h-4" />
              @serendib_organic_hpl
            </div>
            <h2 className="section-title mb-4">Behind the Farm</h2>
            <p className="section-subtitle mx-auto">Real moments from our organic journey on Instagram</p>
          </Reveal>
          <StaggerGrid className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&q=80',
              'https://images.unsplash.com/photo-1505935428862-770b6f24f629?w=300&q=80',
              'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?w=300&q=80',
              'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=300&q=80',
              'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=300&q=80',
              'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&q=80',
              'https://images.unsplash.com/photo-1557093793-d149a38a1be8?w=300&q=80',
              'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&q=80',
            ].map((src, i) => (
              <StaggerItem key={i}>
                <div className="aspect-square rounded-2xl overflow-hidden group cursor-pointer">
                  <img src={src} alt={`Farm moment ${i + 1}`}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" />
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
          <Reveal className="text-center mt-10">
            <a href="https://www.instagram.com/serendib_organic_hpl/" target="_blank" rel="noopener noreferrer"
              className="btn-secondary">
              <InstagramIcon className="w-4 h-4" />
              Follow on Instagram
            </a>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-20 md:py-24 lg:py-28 overflow-hidden" style={{ backgroundColor: '#F0FDF4' }}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2315803D' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal className="text-center mb-14 md:mb-16">
            <h2 className="font-heading font-bold text-[32px] md:text-[44px] lg:text-[56px] text-primary-900 leading-tight mb-4">
              What Farmers Say
            </h2>
            <p className="text-primary-600 text-base md:text-lg max-w-2xl mx-auto">
              Real stories from our farming community
            </p>
          </Reveal>
          <TestimonialCarousel />
        </div>
      </section>
    </>
  )
}

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(3)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const trackRef = useRef(null)
  const [trackWidth, setTrackWidth] = useState(0)
  const x = useMotionValue(0)
  const prevCurrent = useRef(current)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      let perPage
      if (w >= 1280) perPage = 3
      else if (w >= 768) perPage = 2
      else perPage = 1
      setItemsPerPage(perPage)
      setCurrent(0)
      if (trackRef.current) setTrackWidth(trackRef.current.offsetWidth)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const totalSlides = Math.max(1, Math.ceil(testimonials.length / itemsPerPage))

  useEffect(() => {
    if (prevCurrent.current !== current && trackWidth > 0) {
      const target = -(current * trackWidth)
      animate(x, target, {
        type: 'tween',
        duration: reducedMotion ? 0 : 0.5,
        ease: [0.32, 0.08, 0.24, 1],
      })
      prevCurrent.current = current
    }
  }, [current, x, reducedMotion, trackWidth])

  useEffect(() => {
    if (totalSlides <= 1 || paused) return
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % totalSlides)
    }, 5000)
    return () => clearInterval(timer)
  }, [totalSlides, paused])

  const goTo = (i) => setCurrent(i)
  const prev = () => setCurrent(p => (p - 1 + totalSlides) % totalSlides)
  const next = () => setCurrent(p => (p + 1) % totalSlides)

  const slides = []
  for (let i = 0; i < testimonials.length; i += itemsPerPage) {
    slides.push(testimonials.slice(i, i + itemsPerPage))
  }

  const cardWidth = `${100 / itemsPerPage}%`

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); prev() }
    if (e.key === 'ArrowRight') { e.preventDefault(); next() }
  }

  const handleDragEnd = (_, info) => {
    if (trackWidth === 0) return
    const threshold = trackWidth * 0.15
    if (info.offset.x < -threshold) {
      next()
    } else if (info.offset.x > threshold) {
      prev()
    } else {
      const target = -(current * trackWidth)
      animate(x, target, {
        type: 'tween',
        duration: 0.3,
        ease: 'easeOut',
      })
    }
  }

  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 })
  useEffect(() => {
    if (trackWidth > 0) {
      const currentPos = -(current * trackWidth)
      setDragConstraints({
        left: current < totalSlides - 1 ? currentPos - trackWidth : currentPos,
        right: current > 0 ? currentPos + trackWidth : currentPos,
      })
    }
  }, [trackWidth, current, totalSlides])

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className="outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-4 rounded-2xl"
      role="region"
      aria-label="Testimonial carousel"
      aria-roledescription="carousel"
    >
      <div className="relative">
        <div ref={trackRef} className="overflow-hidden rounded-2xl">
          <motion.div
            className="flex cursor-grab active:cursor-grabbing"
            drag={reducedMotion ? false : 'x'}
            onDragEnd={handleDragEnd}
            dragConstraints={dragConstraints}
            dragElastic={0.05}
            dragMomentum={false}
            style={{ x }}
          >
            {slides.map((group, i) => (
              <div key={i} className="min-w-full flex items-stretch">
                {group.map((t, idx) => (
                <div
                  key={t.id}
                  className="shrink-0"
                  style={{ width: cardWidth, paddingLeft: idx === 0 ? 0 : '14px', paddingRight: idx === group.length - 1 ? 0 : '14px' }}
                >
                  <div
                    className="bg-white rounded-2xl p-8 flex flex-col h-full shadow-md shadow-primary-900/5 border border-primary-100/60 relative overflow-hidden transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-900/10 hover:border-primary-200"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`Testimonial ${i * itemsPerPage + idx + 1} of ${testimonials.length}`}
                  >
                    <Quote className="absolute -top-5 -right-5 w-24 h-24 text-primary-50 rotate-180 pointer-events-none" />
                    <div className="flex gap-1 mb-5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <svg key={j} className={`w-4 h-4 ${j < t.rating ? 'text-accent fill-accent' : 'text-primary-200'}`} viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div className="flex-1">
                      <p className="text-primary-800 text-sm leading-relaxed mb-6">
                        &ldquo;{t.content}&rdquo;
                      </p>
                    </div>
                    <div className="flex items-center gap-3.5 pt-4.5 border-t border-primary-100">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-semibold text-sm shrink-0 shadow-sm">
                        {t.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-sm text-primary-900 truncate">{t.name}</div>
                        <div className="text-sm text-primary-500 truncate mt-0.5">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
        </div>
      </div>

      {totalSlides > 1 && (
        <div className="flex items-center justify-center gap-3 mt-8" role="tablist" aria-label="Slides">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ${
                i === current
                  ? 'bg-primary-700 w-10 h-3'
                  : 'bg-primary-200 hover:bg-primary-300 w-3 h-3'
              }`}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
