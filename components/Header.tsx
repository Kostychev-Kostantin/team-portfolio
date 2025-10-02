'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about', icon: null },
    { name: 'Skills', href: '#skills', icon: null },
    { name: 'Projects', href: '#projects', icon: null },
    { name: 'Testimonials', href: '#testimonials', icon: null },
    { name: '🧠 IQ Game', href: '#iq-game', icon: null, special: 'game' },
    { name: '💡 Estimator', href: '#estimator', icon: null, special: 'tool' },
    { name: 'Contact', href: '#contact', icon: null },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.a
            href="#hero"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">KZ</span>
            </div>
            <span className="text-xl font-bold gradient-text">DevTeam</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`transition-all duration-300 font-medium ${
                  item.special === 'game' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25' 
                    : item.special === 'tool'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-2 rounded-full hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25'
                    : 'text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:hidden p-2 text-slate-700 dark:text-slate-300 hover:text-primary-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-lg mt-2 py-4"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`block mx-4 my-2 transition-all duration-300 ${
                  item.special === 'game' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 shadow-lg text-center font-medium' 
                    : item.special === 'tool'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-3 rounded-full hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 shadow-lg text-center font-medium'
                    : 'px-6 py-3 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header
