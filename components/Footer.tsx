'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, Github, Linkedin, Twitter, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/kazakhdev',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/company/kazakhdev',
      label: 'LinkedIn',
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/kazakhdev',
      label: 'Twitter',
    },
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    'Full-Stack Development',
    'AI/ML Solutions',
    'Mobile Development',
    'Cloud Architecture',
    'Data Analytics',
    'API Development',
  ]

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-indigo-900/20" />
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-max px-4 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">KZ</span>
                </div>
                <span className="text-xl font-bold gradient-text">DevTeam</span>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
                Elite development team from Kazakhstan specializing in Full-Stack development and AI/ML solutions. 
                We transform ideas into powerful digital experiences for clients worldwide.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-slate-400">
                  <Mail className="w-4 h-4" />
                  <span>team@kazakhdev.pro</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-400">
                  <MessageCircle className="w-4 h-4" />
                  <span>+7 (XXX) XXX-XXXX</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-slate-300 text-sm">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-slate-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-slate-400 text-sm"
              >
                © {new Date().getFullYear()} Kazakhstan DevTeam. All rights reserved.
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center space-x-6 text-sm"
              >
                <span className="text-slate-400">🇰🇿 Made with ❤️ in Kazakhstan</span>
                <button
                  onClick={scrollToTop}
                  className="flex items-center space-x-1 text-slate-400 hover:text-primary-400 transition-colors duration-300"
                >
                  <span>Back to top</span>
                  <ArrowUp className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  )
}

export default Footer
