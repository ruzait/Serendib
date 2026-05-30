import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, Send, ArrowRight, Globe } from 'lucide-react'
import Reveal from '../components/Reveal'

export default function Contact() {
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 300], [0, 80])
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [exportForm, setExportForm] = useState({ name: '', email: '', country: '', product: '', quantity: '', message: '' })

  const handleInquiry = (e) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Inquiry from ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nSubject: ${form.subject}\nMessage: ${form.message}`
    )
    window.open(`https://wa.me/94773288897?text=${msg}`, '_blank')
  }

  const handleExport = (e) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Export Inquiry from ${exportForm.name}\nEmail: ${exportForm.email}\nCountry: ${exportForm.country}\nProduct: ${exportForm.product}\nQuantity: ${exportForm.quantity}\nMessage: ${exportForm.message}`
    )
    window.open(`https://wa.me/94773288897?text=${msg}`, '_blank')
  }

  return (
    <>
      {/* HERO */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1544644181-af0e1e14916f?w=1920&q=80" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-green-950/90" />
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 30% 40%, #22C55E 0%, transparent 50%), radial-gradient(circle at 70% 60%, #15803D 0%, transparent 50%)' }}
          />
        </motion.div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-6">
              <MessageCircle className="w-4 h-4" />
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">Contact Us</h1>
            <p className="text-primary-100/80 text-lg md:text-xl max-w-2xl mx-auto">
              Have a question, need a quote, or want to partner with us? We'd love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="section-padding bg-cream pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: MapPin, label: 'Address', value: 'Addalaichenai, Ampara, Sri Lanka', action: null },
              { icon: Phone, label: 'Phone', value: '077 328 8897', action: 'tel:+94773288897' },
              { icon: Mail, label: 'Email', value: 'farzan1st@yahoo.com', action: 'mailto:farzan1st@yahoo.com' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                {item.action ? (
                  <a href={item.action} className="card flex items-center gap-4 p-5 no-underline">
                    <div className="w-12 h-12 rounded-2xl bg-primary-100 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary-700" />
                    </div>
                    <div>
                      <div className="text-xs text-primary-600 font-medium">{item.label}</div>
                      <div className="text-primary-900 font-medium text-sm">{item.value}</div>
                    </div>
                  </a>
                ) : (
                  <div className="card flex items-center gap-4 p-5 !cursor-default">
                    <div className="w-12 h-12 rounded-2xl bg-primary-100 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary-700" />
                    </div>
                    <div>
                      <div className="text-xs text-primary-600 font-medium">{item.label}</div>
                      <div className="text-primary-900 font-medium text-sm">{item.value}</div>
                    </div>
                  </div>
                )}
              </Reveal>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* INQUIRY FORM */}
            <Reveal>
              <div className="bg-primary-50/70 rounded-3xl p-6 md:p-8 border border-primary-100/50">
                <h3 className="font-heading text-2xl font-bold text-primary-900 mb-2">Send an Inquiry</h3>
                <p className="text-primary-600 text-sm mb-6">We'll respond within 24 hours via WhatsApp or email.</p>
                <form onSubmit={handleInquiry} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-1">Name *</label>
                      <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-2xl border border-primary-200 bg-white text-primary-900 placeholder-primary-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-1">Email *</label>
                      <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-2xl border border-primary-200 bg-white text-primary-900 placeholder-primary-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-1">Phone</label>
                      <input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-2xl border border-primary-200 bg-white text-primary-900 placeholder-primary-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="077 123 4567" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-1">Subject *</label>
                      <input required value={form.subject} onChange={e => setForm({...form, subject: e.target.value})}
                        className="w-full px-4 py-3 rounded-2xl border border-primary-200 bg-white text-primary-900 placeholder-primary-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="How can we help?" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-1">Message *</label>
                    <textarea required rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-2xl border border-primary-200 bg-white text-primary-900 placeholder-primary-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us more about your inquiry..." />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </Reveal>

            {/* WHATSAPP + MAP */}
            <Reveal delay={0.15}>
              <div className="space-y-6">
                <div className="bg-primary-700 rounded-3xl p-6 md:p-8 text-white text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.801.926 5.384 2.49 7.454L1.7 23.4l4.075-1.772A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.6c-2.193 0-4.242-.621-5.975-1.692l-3.404 1.48 1.098-3.359A9.534 9.534 0 012.4 12c0-5.304 4.296-9.6 9.6-9.6S21.6 6.696 21.6 12c0 5.304-4.296 9.6-9.6 9.6z"/></svg>
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">Prefer WhatsApp?</h3>
                  <p className="text-primary-200 text-sm mb-6">
                    Chat directly with our team. Fastest response time.
                  </p>
                  <a href="https://wa.me/94773288897" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-primary-700 px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:bg-primary-50 hover:shadow-lg">
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </div>

                <div className="rounded-3xl overflow-hidden shadow-lg h-[250px]">
                  <iframe
                    title="Serendib Organic Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126628.71980355176!2d81.5386963!3d7.4169462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3af598701a1ce6f9%3A0x89a19ff09f782018!2sAddalaichenai!5e0!3m2!1sen!2slk!4v1"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* EXPORT INQUIRY */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              <Globe className="w-4 h-4" />
              International Orders
            </div>
            <h2 className="section-title mb-3">Export Inquiry</h2>
            <p className="section-subtitle mx-auto">Interested in importing our organic products? Send us your requirements.</p>
          </Reveal>
          <Reveal>
            <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 md:p-8 shadow-lg">
              <form onSubmit={handleExport} className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-1">Full Name *</label>
                  <input required value={exportForm.name} onChange={e => setExportForm({...exportForm, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-2xl border border-primary-200 bg-primary-50/50 text-primary-900 placeholder-primary-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-1">Email *</label>
                  <input required type="email" value={exportForm.email} onChange={e => setExportForm({...exportForm, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-2xl border border-primary-200 bg-primary-50/50 text-primary-900 placeholder-primary-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="your@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-1">Country *</label>
                  <input required value={exportForm.country} onChange={e => setExportForm({...exportForm, country: e.target.value})}
                    className="w-full px-4 py-3 rounded-2xl border border-primary-200 bg-primary-50/50 text-primary-900 placeholder-primary-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="e.g., UAE, Maldives" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-1">Product Interest *</label>
                  <select required value={exportForm.product} onChange={e => setExportForm({...exportForm, product: e.target.value})}
                    className="w-full px-4 py-3 rounded-2xl border border-primary-200 bg-primary-50/50 text-primary-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all">
                    <option value="">Select product</option>
                    <option value="Compost Fertilizer">Compost Fertilizer</option>
                    <option value="Liquid Bio Fertilizer">Liquid Bio Fertilizer</option>
                    <option value="Soil Enrichment">Soil Enrichment Solutions</option>
                    <option value="Organic Vegetables">Organic Vegetables</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-1">Estimated Quantity</label>
                  <input value={exportForm.quantity} onChange={e => setExportForm({...exportForm, quantity: e.target.value})}
                    className="w-full px-4 py-3 rounded-2xl border border-primary-200 bg-primary-50/50 text-primary-900 placeholder-primary-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="e.g., 10 tons" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-1">Message</label>
                  <input value={exportForm.message} onChange={e => setExportForm({...exportForm, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-2xl border border-primary-200 bg-primary-50/50 text-primary-900 placeholder-primary-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Additional details" />
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="btn-accent w-full justify-center text-base">
                    <Send className="w-4 h-4" />
                    Submit Export Inquiry
                  </button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
