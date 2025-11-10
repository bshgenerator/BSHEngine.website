import { motion } from 'framer-motion'
import { Github, Book, Mail, ExternalLink } from 'lucide-react'
import { footerLinks, socialLinks, footerBrand, footerBottomLinks } from '@/data/footer'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="flex items-center space-x-2 mb-4"
            >
              <div className="relative">
                <img 
                  src={footerBrand.logo} 
                  alt={`${footerBrand.name} Logo`} 
                  className="w-8 h-8" 
                />
              </div>
              <span className="text-xl font-bold text-gradient">{footerBrand.name}</span>
            </a>
            <p className="text-gray-600 mb-6 max-w-md">
              {footerBrand.description}
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon === 'github' ? Github : social.icon === 'book' ? Book : Mail
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg glass hover:bg-gray-100 transition-all border border-gray-200"
                    whileHover={{ scale: 1.1, rotate: social.icon === 'book' ? -5 : 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.ariaLabel}
                  >
                    <IconComponent className="w-5 h-5 text-gray-600 hover:text-gray-900 transition-colors" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : '_self'}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center space-x-1"
                  >
                    <span>{link.name}</span>
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : '_self'}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center space-x-1"
                  >
                    <span>{link.name}</span>
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : '_self'}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center space-x-1"
                  >
                    <span>{link.name}</span>
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © {currentYear} {footerBrand.name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              {/* <a href={footerBottomLinks.privacy.href} className="hover:text-gray-900 transition-colors">
                {footerBottomLinks.privacy.name}
              </a>
              <a href={footerBottomLinks.terms.href} className="hover:text-gray-900 transition-colors">
                {footerBottomLinks.terms.name}
              </a> */}
              <span className="text-gray-400">{footerBottomLinks.version}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

