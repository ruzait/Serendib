import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ShieldCheck, Sprout, ArrowRight, Award, Leaf, MapPin } from 'lucide-react'
import Reveal from '../components/Reveal'

const milestones = [
  { year: '2019', title: 'Company Founded', desc: 'Serendib Organic Holdings registered as a private limited company in Addalaichenai, Ampara.' },
  { year: '2020', title: 'First Compost Production', desc: 'Began small-scale organic compost production using local farm waste.' },
  { year: '2021', title: 'Farmer Network Established', desc: 'Launched a structured network connecting local farmers to organic farming initiatives and market access.' },
  { year: '2022', title: 'SL Enterprise Verification', desc: 'Officially registered on Sri Lanka\'s government enterprise portal as a verified agro-industry company.' },
  { year: '2023', title: 'Product Portfolio Expansion', desc: 'Introduced liquid bio-fertilizers and professional soil consultation services to complement existing compost products.' },
  { year: '2024', title: 'Digital Outreach & Brand Growth', desc: 'Established digital presence to expand market reach and connect with the farming community across Sri Lanka.' },
]

const badges = [
  { icon: ShieldCheck, label: 'SL Enterprise Registered', desc: 'Officially listed on Sri Lanka\'s government enterprise portal' },
  { icon: Leaf, label: 'Organic Farming Supplier', desc: 'Certified organic fertilizer and agricultural product supplier' },
  { icon: Award, label: 'Agro Industry Verified', desc: 'Recognized agro-based industry in the compost and organic sector' },
]

export default function About() {
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 300], [0, 80])

  return (
    <>
      {/* HERO */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <div className="absolute inset-0">
<img src="https://images.unsplash.com/photo-1520052203542-d3095f1b6cf0?w=1920&q=80" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-green-950/90" />
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, #22C55E 0%, transparent 50%), radial-gradient(circle at 30% 80%, #15803D 0%, transparent 50%)' }}
          />
        </motion.div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-6">
              <Sprout className="w-4 h-4" />
              Our Story
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">About Serendib Organic</h1>
            <p className="text-primary-100/80 text-lg md:text-xl max-w-2xl mx-auto">
              From a vision of sustainable agriculture to a growing movement in Eastern Sri Lanka.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STORY + VERIFIED DATA */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <Reveal>
              <div>
                <h2 className="section-title mb-6">Growing Nature, Empowering Farmers</h2>
                <div className="space-y-4 text-primary-700 leading-relaxed">
                  <p>
                    Serendib Organic Holdings Pvt Ltd was founded in Addalaichenai, Ampara with a clear mission —
                    to reduce Sri Lanka's dependency on chemical fertilizers and support local farmers with
                    sustainable, organic alternatives.
                  </p>
                  <p>
                    Starting as a small compost production unit, we have grown into a trusted name in organic
                    agriculture across Eastern Sri Lanka. Our work spans compost and bio-fertilizer production,
                    organic farming guidance, and a growing network of farmers committed to sustainable practices.
                  </p>
                  <p>
                    We believe that healthy soil leads to healthy food, healthy communities, and a healthier planet.
                    Every product we make and every farmer we support brings us closer to that vision.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-primary-50 rounded-3xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck className="w-6 h-6 text-primary-700" />
                  <h3 className="font-heading text-xl font-bold text-primary-900">Verified Company Data</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Company Type', value: 'Private Limited (PVT Ltd)' },
                    { label: 'Registration', value: 'SL Enterprise Registered' },
                    { label: 'Location', value: 'Addalaichenai, Ampara' },
                    { label: 'Sector', value: 'Agro-based Industry + Trading' },
                    { label: 'Category', value: 'Compost Fertilizer & Organic Products' },
                    { label: 'Status', value: 'Active' },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between border-b border-primary-200 pb-3 last:border-0 last:pb-0">
                      <span className="text-primary-600 text-sm">{row.label}</span>
                      <span className="text-primary-900 font-medium text-sm">{row.value}</span>
                    </div>
                  ))}
                </div>
                <a href="https://www.slenterprises.gov.lk/industry-detail/eyJpdiI6IkhvSGdwdkswWU1ibHZpaHE0bHFOMXc9PSIsInZhbHVlIjoiMWNvL1dJMk1OdjdibmpnNm5SSmFhZz09IiwibWFjIjoiZTkwMDhkMjQxMzg4ZGRlZWZjMDM4OTVlZWJjNjQwNGQwMWQ0YWM5M2UxYzE5MDdkZjFkNjVlNDg3YThiYTA5NyIsInRhZyI6IiJ9" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-700 text-sm font-medium hover:underline mt-4">
                  View on SL Enterprises <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="section-title mb-4">Our Credentials</h2>
            <p className="section-subtitle mx-auto">Verified and recognized in Sri Lanka's agricultural industry</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {badges.map((badge, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="card text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-100 flex items-center justify-center">
                    <badge.icon className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary-900 mb-2">{badge.label}</h3>
                  <p className="text-primary-600 text-sm">{badge.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CEO MESSAGE */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              <Leaf className="w-4 h-4" />
              Leadership
            </div>
            <h2 className="section-title mb-4">Message from the CEO</h2>
            <p className="section-subtitle mx-auto">A word from our founder on the vision behind Serendib Organic</p>
          </Reveal>
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <Reveal className="md:col-span-2">
              <div className="relative">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80"
                    alt="CEO of Serendib Organic Holdings"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-primary-700 text-white rounded-2xl px-5 py-3 shadow-xl">
                  <div className="font-heading font-bold text-lg">CEO</div>
                  <div className="text-primary-200 text-xs">Serendib Organic</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15} className="md:col-span-3">
              <div>
                <blockquote className="text-primary-700 text-lg md:text-xl leading-relaxed mb-6 italic border-l-4 border-primary-400 pl-6">
                  "Sri Lanka's agricultural heritage runs deep. At Serendib Organic, we are committed to restoring that legacy 
                  by providing farmers with the tools, knowledge, and organic solutions they need to cultivate healthy crops 
                  while protecting our land for future generations. Every bag of compost we produce represents a step toward 
                  a more sustainable and prosperous Sri Lanka."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary-800 text-white flex items-center justify-center font-heading font-bold">MM</div>
                  <div>
                    <div className="font-heading font-bold text-primary-900 text-lg">M. M. Muzahir</div>
                    <div className="text-sm text-primary-500">Chief Executive Officer</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY ORGANIC */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1609412058473-c199497c3c5d?w=1920&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-green-950/95" />
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 40%, #22C55E 0%, transparent 50%), radial-gradient(circle at 70% 60%, #15803D 0%, transparent 50%)' }}
        />
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-primary-500/10 blur-3xl max-sm:hidden" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-green-500/10 blur-3xl max-sm:hidden" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-primary-200 text-sm mb-6">
              <Leaf className="w-4 h-4" />
              Our Mission
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-green-300">Organic</span> Matters
            </h2>
            <p className="text-primary-200 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Chemical fertilizers have damaged Sri Lanka's soil health for decades. We're working to reverse that —
              one farm at a time. Organic farming isn't just better for the earth — it's better for farmers,
              families, and the future of agriculture.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-primary-200 text-sm">
                <ShieldCheck className="w-4 h-4 text-green-400" /> Restores Soil Health
              </div>
              <div className="flex items-center gap-2 text-primary-200 text-sm">
                <ShieldCheck className="w-4 h-4 text-green-400" /> Chemical-Free Farming
              </div>
              <div className="flex items-center gap-2 text-primary-200 text-sm">
                <ShieldCheck className="w-4 h-4 text-green-400" /> Sustainable Future
              </div>
            </div>
            <Link to="/contact" className="btn-primary text-base bg-white text-primary-700 hover:bg-primary-50 shadow-xl">
              Join Our Mission <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-padding bg-gradient-to-b from-white to-primary-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              <Sprout className="w-4 h-4" />
              Milestones
            </div>
            <h2 className="section-title mb-4">Our Journey</h2>
            <p className="section-subtitle mx-auto">From humble beginnings to a growing organic movement</p>
          </Reveal>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-300 via-primary-500 to-primary-300 -translate-x-0.5 rounded-full" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className={`relative flex flex-col md:flex-row gap-6 md:gap-10 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="absolute left-6 md:left-1/2 w-5 h-5 rounded-full bg-primary-700 border-[3px] border-primary-300 -translate-x-2.5 mt-2 z-10 shadow-lg shadow-primary-300/50" />
                    <div className={`md:w-1/2 ${i % 2 === 1 ? 'md:text-right md:pr-10' : 'md:pl-10'} pl-14 md:pl-0`}>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${i % 2 === 0 ? 'from-primary-600 to-primary-800' : 'from-green-600 to-primary-700'} mb-2`}>
                        {m.year}
                      </div>
                      <div className="bg-white rounded-2xl p-5 shadow-lg shadow-primary-900/5 border border-primary-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300">
                        <h3 className="font-heading text-lg font-bold text-primary-900">{m.title}</h3>
                        <p className="text-primary-600 text-sm mt-1.5 leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                    <div className="md:w-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
