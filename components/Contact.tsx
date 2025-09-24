'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, Calendar, MapPin, Phone, Send, Clock, Globe } from 'lucide-react'
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get in touch via email',
      value: 'team@kazakhdev.pro',
      link: 'mailto:team@kazakhdev.pro',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp/Telegram',
      description: 'Quick messaging',
      value: '+7 (XXX) XXX-XXXX',
      link: 'https://wa.me/XXXXXXXXXX',
    },
    {
      icon: Calendar,
      title: 'Schedule a Call',
      description: 'Book a consultation',
      value: 'calendly.com/kazakhdev',
      link: 'https://calendly.com/kazakhdev',
    },
  ]

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM (GMT+6)' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM (GMT+6)' },
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
    <section id="contact" className="section-padding bg-slate-50 dark:bg-slate-800">
      <div className="container-max">
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
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </motion.button>
            </form>
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
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
                🇰🇿 Based in Kazakhstan
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Serving clients globally across different time zones
              </p>
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
      </div>
    </section>
  )
}

export default Contact
