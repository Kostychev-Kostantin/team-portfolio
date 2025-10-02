'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, Calendar, MapPin, Phone, Send, Clock, Globe, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // For now, let's use a simple mailto approach that actually works
      // Create email content
      const subject = `New Project Inquiry from ${formData.name}`
      const body = `
Hello Kazakhstan Team,

New project inquiry received:

Contact Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Company: ${formData.company || 'Not specified'}

Project Information:
- Project Type: ${formData.project}
- Budget Range: ${formData.budget}

Message:
${formData.message}

Best regards,
${formData.name}
      `.trim()
      
      // Create mailto link
      const mailtoLink = `mailto:kostychev0902@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      
      // Simulate processing time for better UX
      setTimeout(() => {
        // Open email client
        window.open(mailtoLink, '_blank')
        
        // Show success message
        setSubmitStatus('success')
        setIsSubmitting(false)
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            company: '',
            project: '',
            budget: '',
            message: '',
          })
          setSubmitStatus('idle')
        }, 5000)
      }, 1000)
      
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get in touch via email',
      value: 'kostychev0902@gmail.com',
      link: 'mailto:kostychev0902@gmail.com',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp/Telegram',
      description: 'Quick messaging',
      value: '+1(762) 920-7702',
      link: 'https://wa.me/XXXXXXXXXX',
    },
    {
      icon: Calendar,
      title: 'Schedule a Call',
      description: 'Book a consultation',
      value: 'calendly.com/kazakhdev',
      link: 'https://calendly.com/kostychev0902/30min',
    },
  ]

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM (EST, PST, CST)' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM (EST, PST, CST)' },
    { day: 'Sunday', hours: 'Closed' },
  ]

  const projectTypes = [
    'Web Application Development',
    'AI/ML Solutions',
    'Mobile App Development',
    'E-commerce Platform',
    'Data Analytics',
    'API Development',
    'Other',
  ]

  const budgetRanges = [
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+',
    'Let\'s Discuss',
  ]

  return (
    <section id="contact" className="section-padding relative bg-slate-50 dark:bg-slate-800 overflow-hidden">
      {/* Beautiful Collaboration Background */}
      <div className="absolute inset-0">
        {/* Aurora gradient background */}
        <div className="absolute inset-0 aurora-bg"></div>
        
        {/* Floating collaboration elements */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-16 text-blue-400/30 text-6xl"
        >
          💬
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-20 text-purple-400/30 text-5xl"
        >
          📧
        </motion.div>
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/4 text-cyan-400/30 text-4xl"
        >
          🌐
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-2/3 right-1/3 text-green-400/30 text-4xl"
        >
          🤝
        </motion.div>
        
        {/* Connection lines between elements */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 800">
          <motion.path
            d="M200,200 Q400,100 600,200 T900,300"
            stroke="rgb(59, 130, 246)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,4"
            animate={{ strokeDashoffset: [0, 24] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M100,400 Q300,300 500,400 T800,500"
            stroke="rgb(147, 197, 253)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="6,6"
            animate={{ strokeDashoffset: [24, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M150,600 Q400,500 650,600 T950,700"
            stroke="rgb(99, 102, 241)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4,8"
            animate={{ strokeDashoffset: [0, 36] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        </svg>
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
            style={{
              left: `${10 + (i * 6) % 80}%`,
              top: `${15 + (i * 7) % 70}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 6 + (i % 4),
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Large gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 60, 0],
            y: [0, -40, 0],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-2xl"
        />
        
        <motion.div
          animate={{
            scale: [1.2, 1, 1.3],
            x: [0, -50, 0],
            y: [0, 30, 0],
            rotate: [0, -120, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-r from-indigo-400/15 to-pink-500/15 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-1/2 w-48 h-48 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl"
        />
      </div>
      
      <div className="container-max relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Let's Work Together</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Ready to bring your ideas to life? We'd love to hear about your project and discuss how our team 
            can help you achieve your goals. Get in touch and let's start building something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">
              Tell Us About Your Project
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-colors"
                  placeholder="Your Company Name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-colors"
                  >
                    <option value="">Select Project Type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-colors"
                  >
                    <option value="">Select Budget Range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Project Description *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-colors resize-none"
                  placeholder="Tell us about your project requirements, timeline, and any specific technologies you'd like us to use..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  submitStatus === 'success'
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : submitStatus === 'error'
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : isSubmitting
                    ? 'bg-slate-400 text-white cursor-not-allowed'
                    : 'btn-primary'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Sending...</span>
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-4 h-4"
                    >
                      ✓
                    </motion.div>
                    <span>Message Sent!</span>
                  </>
                ) : submitStatus === 'error' ? (
                  <>
                    <span>❌</span>
                    <span>Try Again</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-800 dark:text-green-200">
                        Email Client Opened Successfully!
                      </h4>
                      <p className="text-sm text-green-600 dark:text-green-300">
                        Your message has been prepared with all details. Please click "Send" in your email client to complete the process.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-4"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">❌</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-800 dark:text-red-200">
                        Failed to Send Message
                      </h4>
                      <p className="text-sm text-red-600 dark:text-red-300">
                        Please try again or contact us directly at kostychev0902@gmail.com
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </form>

            {/* Additional Content Below Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 space-y-6"
            >
              {/* Quick Response Promise */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-4 border border-green-200 dark:border-green-700">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                      ⚡ Quick Response Guaranteed
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      We'll get back to you within 4 hours during business hours
                    </p>
                  </div>
                </div>
              </div>

              {/* What Happens Next */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3 text-sm">
                  🎯 What happens next?
                </h4>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      We review your project details and requirements
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Schedule a free 30-minute consultation call
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Receive detailed proposal with timeline & pricing
                    </p>
                  </div>
                </div>
              </div>

              {/* Alternative Contact Methods */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3 text-sm">
                  💬 Prefer instant messaging?
                </h4>
                <div className="flex flex-wrap gap-2">
                  <motion.a
                    href="https://wa.me/XXXXXXXXXX"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 bg-green-500 text-white px-3 py-2 rounded-lg text-xs font-medium hover:bg-green-600 transition-colors"
                  >
                    <span>📱</span>
                    <span>WhatsApp</span>
                  </motion.a>
                  <motion.a
                    href="https://t.me/snowman1019"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 bg-blue-500 text-white px-3 py-2 rounded-lg text-xs font-medium hover:bg-blue-600 transition-colors"
                  >
                    <span>✈️</span>
                    <span>Telegram</span>
                  </motion.a>
                  <motion.a
                    href="https://calendly.com/kostychev0902/30min"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 bg-purple-500 text-white px-3 py-2 rounded-lg text-xs font-medium hover:bg-purple-600 transition-colors"
                  >
                    <span>📅</span>
                    <span>Schedule Call</span>
                  </motion.a>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-3 text-center border border-slate-200 dark:border-slate-700">
                  <div className="text-lg font-bold text-green-600 dark:text-green-400">50+</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Happy Clients</div>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-3 text-center border border-slate-200 dark:border-slate-700">
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400">100%</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Success Rate</div>
                </div>
              </div>

              {/* Security & Privacy */}
              <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center space-x-2 mb-1">
                  <span className="text-green-500">🔒</span>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Your information is secure & confidential
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  We respect your privacy and never share your details with third parties
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 bg-white dark:bg-slate-900 rounded-xl hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-slate-200">
                        {info.title}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                        {info.description}
                      </p>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 rounded-xl p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                  Working Hours
                </h4>
              </div>
              <div className="space-y-2">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-400 text-sm">
                      {schedule.day}
                    </span>
                    <span className="text-slate-800 dark:text-slate-200 text-sm font-medium">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 rounded-xl p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                  Our Location
                </h4>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                🇰🇿 Based in Almaty, Kazakhstan
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                Serving clients globally across different time zones
              </p>
              
              {/* Google Map */}
              <div className="w-full h-48 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.2543516346843!2d76.85128731549815!3d43.23810007913678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836e7d16c5cbab%3A0x3d44668a2be000b4!2sAlmaty%2C%20Kazakhstan!5e0!3m2!1sen!2s!4v1635789234567!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Almaty, Kazakhstan Location"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              
              <div className="mt-3 text-center">
                <a
                  href="https://www.google.com/maps/place/Almaty,+Kazakhstan/@43.2220146,76.8512119,11z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  View larger map →
                </a>
              </div>
            </motion.div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl p-6"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                  Quick Response
                </h4>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                We typically respond to all inquiries within 4 hours during business hours. 
                For urgent projects, we're available for immediate consultation.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Contact Information & CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join 50+ satisfied clients who have transformed their ideas into successful digital products. 
            Let's discuss how we can help you achieve your goals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold mb-1">24-48h</div>
              <div className="text-blue-100 text-sm">Response Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold mb-1">100%</div>
              <div className="text-blue-100 text-sm">Client Satisfaction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold mb-1">Free</div>
              <div className="text-blue-100 text-sm">Initial Consultation</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#estimator"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Instant Quote</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.button
              onClick={() => {
                const email = 'kostychev0902@gmail.com'
                const subject = 'Project Inquiry from Portfolio'
                const body = 'Hi Kazakhstan Dev Team,\n\nI visited your portfolio and I\'m interested in discussing a project. Could we schedule a call?\n\nBest regards,'
                window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Send Email</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: '🚀',
              title: 'Fast Delivery',
              description: '50% faster than industry average'
            },
            {
              icon: '💎',
              title: 'Premium Quality',
              description: 'Enterprise-level code standards'
            },
            {
              icon: '🌍',
              title: 'Global Experience',
              description: 'Clients across US, Europe & Asia'
            },
            {
              icon: '🔧',
              title: 'Full Support',
              description: 'Ongoing maintenance & updates'
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                {feature.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Have questions? We're here to help! Reach out and let's create something amazing together.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <span>🕐 Available Mon-Fri 9AM-6PM (GMT+6)</span>
            <span>📧 kostychev0902@gmail.com</span>
            <span>📞 +1(762) 920-7702</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
