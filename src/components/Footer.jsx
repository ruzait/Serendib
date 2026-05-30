import { Link } from 'react-router-dom'
import { Sprout, Phone, Mail, MapPin, ChevronRight } from 'lucide-react'

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/farmers', label: 'Farmer Network' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-2xl flex items-center justify-center">
                <Sprout className="w-6 h-6" />
              </div>
              <span className="font-heading font-bold text-lg">
                Serendib<span className="text-primary-400">Organic</span>
              </span>
            </div>
            <p className="text-primary-200 text-sm leading-relaxed mb-6">
              Growing Nature. Empowering Farmers. Sustaining the Future.<br />
              A Sri Lankan agro-based company delivering organic fertilizers and sustainable farming solutions.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/serendib_organic_hpl/" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-800 rounded-2xl flex items-center justify-center
                  transition-all duration-300 hover:bg-primary-600 hover:scale-105">
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}
                    className="text-primary-200 text-sm hover:text-white transition-colors inline-flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-2.5">
              <li><Link to="/products" className="text-primary-200 text-sm hover:text-white transition-colors">Organic Fertilizers</Link></li>
              <li><Link to="/products" className="text-primary-200 text-sm hover:text-white transition-colors">Liquid Bio Fertilizer</Link></li>
              <li><Link to="/products" className="text-primary-200 text-sm hover:text-white transition-colors">Soil Enrichment</Link></li>
              <li><Link to="/products" className="text-primary-200 text-sm hover:text-white transition-colors">Farm Produce</Link></li>
              <li><Link to="/farmers" className="text-primary-200 text-sm hover:text-white transition-colors">Farmer Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" />
                <span className="text-primary-200 text-sm">Addalaichenai, Ampara, Sri Lanka</span>
              </li>
              <li>
                <a href="tel:+94773288897" className="flex items-center gap-3 text-primary-200 hover:text-white transition-colors text-sm">
                  <Phone className="w-4 h-4 text-primary-400 shrink-0" />
                  <span>077 328 8897</span>
                </a>
              </li>
              <li>
                <a href="mailto:farzan1st@yahoo.com" className="flex items-center gap-3 text-primary-200 hover:text-white transition-colors text-sm">
                  <Mail className="w-4 h-4 text-primary-400 shrink-0" />
                  <span>farzan1st@yahoo.com</span>
                </a>
              </li>
            </ul>
            <a href="https://wa.me/94773288897" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-5 py-2.5 rounded-2xl text-sm font-medium
                transition-all duration-300 hover:bg-primary-500 mt-5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.801.926 5.384 2.49 7.454L1.7 23.4l4.075-1.772A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.6c-2.193 0-4.242-.621-5.975-1.692l-3.404 1.48 1.098-3.359A9.534 9.534 0 012.4 12c0-5.304 4.296-9.6 9.6-9.6S21.6 6.696 21.6 12c0 5.304-4.296 9.6-9.6 9.6z"/></svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-300 text-xs">
            &copy; {new Date().getFullYear()} Serendib Organic Holdings (PVT) Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-800 rounded-full text-xs text-primary-300">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4"/><path d="M12 2a10 10 0 1 0 10 10"/></svg>
              SL Enterprise Registered
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
