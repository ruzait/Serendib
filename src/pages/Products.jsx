import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sprout, Wheat, Leaf, ArrowRight, Check, ShoppingCart, ShieldCheck } from 'lucide-react'
import Reveal from '../components/Reveal'
import StaggerGrid, { StaggerItem } from '../components/StaggerGrid'
import { productCategories } from '../data/products'

const iconMap = { Sprout, Wheat, Leaf }

const tabs = productCategories.map(c => ({ id: c.id, label: c.title, icon: c.icon }))

export default function Products() {
  const [activeTab, setActiveTab] = useState(productCategories[0].id)
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 300], [0, 80])

  const activeCategory = productCategories.find(c => c.id === activeTab)

  return (
    <>
      {/* HERO */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1505471768190-275e2ad7b3f9?w=1920&q=80" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-green-950/90" />
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #22C55E 0%, transparent 50%), radial-gradient(circle at 70% 30%, #15803D 0%, transparent 50%)' }}
          />
        </motion.div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-6">
              <Sprout className="w-4 h-4" />
              Our Products
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">Products & Services</h1>
            <p className="text-primary-100/80 text-lg md:text-xl max-w-2xl mx-auto">
              Complete organic solutions — from soil enrichment to farm-to-market produce
            </p>
          </Reveal>
        </div>
      </section>

      {/* CATEGORY TABS */}
      <section className="section-padding bg-cream pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {tabs.map((tab) => {
              const Icon = iconMap[tab.icon] || Leaf
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-primary-700 text-white shadow-lg shadow-primary-700/25 scale-105'
                      : 'bg-primary-50 text-primary-700 hover:bg-primary-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {activeCategory && (
            <div>
              <Reveal className="text-center mb-10">
                <h2 className="section-title mb-3">{activeCategory.title}</h2>
                <p className="section-subtitle mx-auto">{activeCategory.description}</p>
              </Reveal>

              <StaggerGrid className="grid md:grid-cols-3 gap-6">
                {activeCategory.items.map((item, i) => (
                  <StaggerItem key={i}>
                    <div className="card h-full flex flex-col">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${activeCategory.color} flex items-center justify-center mb-4`}>
                        {(activeCategory.icon === 'Sprout' && <Sprout className="w-6 h-6 text-white" />) ||
                          (activeCategory.icon === 'Wheat' && <Wheat className="w-6 h-6 text-white" />) ||
                          (activeCategory.icon === 'Leaf' && <Leaf className="w-6 h-6 text-white" />)}
                      </div>
                      <h3 className="font-heading text-xl font-bold text-primary-900 mb-2">{item.name}</h3>
                      <p className="text-primary-600 text-sm leading-relaxed mb-4 flex-1">{item.description}</p>
                      <div className="space-y-1.5 mb-4">
                        {item.benefits.map((b, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                            <span className="text-xs text-primary-600">{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </div>
          )}
        </div>
      </section>

      {/* INQUIRY CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1651981350249-6173caeeb660?w=1920&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-green-950/95" />
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 40% 50%, #22C55E 0%, transparent 50%), radial-gradient(circle at 70% 40%, #15803D 0%, transparent 50%)' }}
        />
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-primary-500/10 blur-3xl max-sm:hidden" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-green-500/10 blur-3xl max-sm:hidden" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-primary-200 text-sm mb-6">
              <ShoppingCart className="w-4 h-4" />
              Bulk Orders & Pricing
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
              Need a Quote or <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-green-300">Bulk Order</span>?
            </h2>
            <p className="text-primary-200 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Contact us for competitive pricing, bulk orders, or custom organic solutions tailored to your farm or business. 
              We supply across Sri Lanka with flexible delivery options.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-primary-200 text-sm">
                <ShieldCheck className="w-4 h-4 text-green-400" /> Bulk Discounts Available
              </div>
              <div className="flex items-center gap-2 text-primary-200 text-sm">
                <ShieldCheck className="w-4 h-4 text-green-400" /> Island-wide Delivery
              </div>
              <div className="flex items-center gap-2 text-primary-200 text-sm">
                <ShieldCheck className="w-4 h-4 text-green-400" /> Custom Orders Welcome
              </div>
            </div>
            <Link to="/contact" className="btn-primary text-base bg-white text-primary-700 hover:bg-primary-50 shadow-xl">
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* INSTAGRAM PRODUCT SHOWCASE */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <h2 className="section-title mb-4">See Our Products in Action</h2>
            <p className="section-subtitle mx-auto">Real photos from our farm and production — as featured on Instagram</p>
          </Reveal>
          <StaggerGrid className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&q=80',
              'https://images.unsplash.com/photo-1546845776-dcdf70fd09e3?w=300&q=80',
              'https://images.unsplash.com/photo-1520052203542-d3095f1b6cf0?w=300&q=80',
              'https://images.unsplash.com/photo-1651981350249-6173caeeb660?w=300&q=80',
              'https://images.unsplash.com/photo-1505935428862-770b6f24f629?w=300&q=80',
              'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=300&q=80',
              'https://images.unsplash.com/photo-1557703913-d2b0cbf82722?w=300&q=80',
              'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&q=80',
            ].map((src, i) => (
              <StaggerItem key={i}>
                <div className="aspect-square rounded-2xl overflow-hidden group cursor-pointer">
                  <img src={src} alt="Product showcase" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" />
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>
    </>
  )
}
