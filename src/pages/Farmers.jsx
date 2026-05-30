import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Users, BookOpen, CheckCircle, ChevronDown, ArrowRight, Sprout } from 'lucide-react'
import Reveal from '../components/Reveal'
import StaggerGrid, { StaggerItem } from '../components/StaggerGrid'
import { faqItems } from '../data/products'

export default function Farmers() {
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 300], [0, 80])
  const [openFaq, setOpenFaq] = useState(null)
  const [form, setForm] = useState({ name: '', village: '', crop: '', landSize: '', phone: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `New Farmer Registration:\nName: ${form.name}\nVillage: ${form.village}\nCrop: ${form.crop}\nLand: ${form.landSize}\nPhone: ${form.phone}`
    )
    window.open(`https://wa.me/94773288897?text=${msg}`, '_blank')
  }

  return (
    <>
      {/* HERO */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1746106388675-4a5cb72db549?w=1920&q=80" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-green-950/90" />
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 40% 30%, #22C55E 0%, transparent 50%), radial-gradient(circle at 70% 70%, #15803D 0%, transparent 50%)' }}
          />
        </motion.div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-6">
              <Users className="w-4 h-4" />
              Farmer Network
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">Farmer Network Portal</h1>
            <p className="text-primary-100/80 text-lg md:text-xl max-w-2xl mx-auto">
              Empowering Sri Lankan farmers with organic knowledge, quality inputs, and a supportive community
            </p>
          </Reveal>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="section-title mb-4">Why Join Our Network?</h2>
            <p className="section-subtitle mx-auto">Free support for farmers transitioning to organic and sustainable practices</p>
          </Reveal>
          <StaggerGrid className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Sprout, title: 'Organic Guidance', desc: 'Expert advice on organic farming methods and best practices' },
              { icon: BookOpen, title: 'Training Resources', desc: 'Workshops, guides, and seasonal planting calendars' },
              { icon: CheckCircle, title: 'Fertilizer Recommendations', desc: 'Custom fertilizer plans based on your soil and crops' },
              { icon: Users, title: 'Community Support', desc: 'Connect with other farmers and share experiences' },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="card text-center p-6">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-primary-100 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary-700" />
                  </div>
                  <h3 className="font-heading font-bold text-primary-900 mb-1">{item.title}</h3>
                  <p className="text-primary-600 text-xs">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* REGISTRATION FORM + RESOURCES */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* FORM */}
            <Reveal>
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg">
                <h3 className="font-heading text-2xl font-bold text-primary-900 mb-2">Register as a Farmer</h3>
                <p className="text-primary-600 text-sm mb-6">Fill in your details and we'll connect with you on WhatsApp within 48 hours.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-1">Full Name *</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-primary-200 bg-primary-50/50 text-primary-900 placeholder-primary-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-1">Village / Area *</label>
                    <input
                      required
                      value={form.village}
                      onChange={(e) => setForm({ ...form, village: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-primary-200 bg-primary-50/50 text-primary-900 placeholder-primary-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="e.g., Addalaichenai, Ampara"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-1">Main Crop *</label>
                      <input
                        required
                        value={form.crop}
                        onChange={(e) => setForm({ ...form, crop: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-primary-200 bg-primary-50/50 text-primary-900 placeholder-primary-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="e.g., Rice"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-1">Land Size (acres)</label>
                      <input
                        value={form.landSize}
                        onChange={(e) => setForm({ ...form, landSize: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-primary-200 bg-primary-50/50 text-primary-900 placeholder-primary-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="e.g., 2"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-1">Phone Number *</label>
                    <input
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-primary-200 bg-primary-50/50 text-primary-900 placeholder-primary-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="e.g., 077 123 4567"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center text-base">
                    Submit via WhatsApp <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-primary-500 text-center">We respect your privacy. Your data is shared only with our team.</p>
                </form>
              </div>
            </Reveal>

            {/* TRAINING RESOURCES */}
            <Reveal delay={0.15}>
              <div>
                <h3 className="font-heading text-2xl font-bold text-primary-900 mb-2">Training Resources</h3>
                <p className="text-primary-600 text-sm mb-6">Learn organic farming practices from our guides and workshops.</p>
                <div className="space-y-4">
                  {[
                    { title: 'Introduction to Organic Composting', desc: 'Learn how to turn farm waste into nutrient-rich compost' },
                    { title: 'Natural Pest Management', desc: 'Organic methods to protect your crops without chemicals' },
                    { title: 'Seasonal Planting Guide', desc: 'What to plant and when — optimized for Eastern Sri Lanka' },
                    { title: 'Soil Health & Fertility', desc: 'Understanding your soil and how to improve it naturally' },
                    { title: 'Water Conservation Techniques', desc: 'Efficient irrigation and water management for small farms' },
                  ].map((resource, i) => (
                    <div key={i} className="card p-5 !cursor-default hover:!shadow-lg">
                      <h4 className="font-heading font-bold text-primary-900 text-sm mb-1">{resource.title}</h4>
                      <p className="text-primary-600 text-xs">{resource.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-primary-600 text-sm font-medium">
                  More resources coming soon. Register to get notified.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <h2 className="section-title mb-3">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto">Everything you need to know about our farmer network</p>
          </Reveal>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="bg-cream rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                  >
                    <span className="font-medium text-primary-900 text-sm pr-4">{item.q}</span>
                    <ChevronDown className={`w-5 h-5 text-primary-500 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? 'max-h-40 pb-5 px-5' : 'max-h-0'
                  }`}>
                    <p className="text-primary-600 text-sm leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-900 to-green-950" />
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 50% 30%, #22C55E 0%, transparent 50%), radial-gradient(circle at 30% 70%, #15803D 0%, transparent 50%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-3">Success Stories</h2>
            <p className="text-primary-200 max-w-xl mx-auto">Farmers who transformed their land with organic practices</p>
          </Reveal>
          <Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: 'Mohamed Rishad',
                  village: 'Batticaloa',
                  story: 'After switching to Serendib\'s organic compost, his rice yield increased by 60% while input costs dropped by 40%. His soil is healthier than ever.',
                  crop: 'Rice Farmer',
                },
                {
                  name: 'S. Tharani',
                  village: 'Ampara',
                  story: 'Started with our soil consultation service and a custom organic plan. Now runs a thriving vegetable garden supplying local markets with chemical-free produce.',
                  crop: 'Vegetable Grower',
                },
              ].map((story, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary-600/30 flex items-center justify-center text-white font-bold">
                      {story.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{story.name}</div>
                      <div className="text-primary-300 text-xs">{story.crop}, {story.village}</div>
                    </div>
                  </div>
                  <p className="text-primary-200 text-sm leading-relaxed">&ldquo;{story.story}&rdquo;</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
