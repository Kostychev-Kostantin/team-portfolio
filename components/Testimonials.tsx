'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useState } from 'react'

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'UNICAL FinTech Innovations LLC',
      location: 'Tashkent, Uzbekistan',
      rating: 5,
      quote: "Kostychev's team exceeded all our expectations. Their AI trading engine not only met our technical requirements but delivered results that transformed our business. The 94% accuracy rate and 340% revenue increase speak for themselves. Their communication was excellent throughout the project, and they delivered on time despite the complexity.",
      project: 'AI-Powered Trading Engine',
      avatar: 'SJ',
    },
    {
      id: 2,
      name: 'Marcus Weber',
      role: 'Head of Digital',
      company: 'PROMODO',
      location: 'Lincoln, United Kingdom',
      rating: 5,
      quote: "Working with this team was a game-changer for our e-commerce platform. They completely rebuilt our legacy system and the results were immediate - 75% faster load times and 45% better conversion rates. Their expertise in modern web technologies and attention to user experience is outstanding.",
      project: 'E-Commerce Platform Rebuild',
      avatar: 'MW',
    },
    {
      id: 3,
      name: 'Dr. Emily Chen',
      role: 'Research Director',
      company: 'KSPr',
      location: 'Astana, Kazakhstan',
      rating: 5,
      quote: "The healthcare analytics platform they built has revolutionized how we process patient data. What used to take days now takes hours, with 32% better diagnostic accuracy. Their understanding of both the technical requirements and healthcare domain was impressive.",
      project: 'Healthcare Data Analytics',
      avatar: 'EC',
    },
    {
      id: 4,
      name: 'Alex Thompson',
      role: 'Founder & CEO',
      company: 'CollabSpace',
      location: 'Toronto, Canada',
      rating: 5,
      quote: "They delivered exactly what we needed - a robust collaboration platform that scales beautifully. Supporting 50,000+ users with 99.9% uptime is no small feat. The team's expertise in real-time technologies and scalable architecture is world-class.",
      project: 'Real-Time Collaboration Tool',
      avatar: 'AT',
    },
  ]

  const stats = [
    { label: 'Client Satisfaction', value: '100%' },
    { label: 'Projects Completed', value: '20+' },
    { label: 'Average Rating', value: '5.0' },
    { label: 'Repeat Clients', value: '85%' },
  ]

  return (
    <section id="testimonials" className="section-padding bg-white dark:bg-slate-900">
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
            <span className="gradient-text">What Our Clients Say</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with our team 
            and the results we've delivered for their businesses.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Testimonial Content */}
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="pt-8"
            >
              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8 font-medium">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">
                    {testimonials[activeTestimonial].avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonials[activeTestimonial].role} at {testimonials[activeTestimonial].company}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-500">
                    {testimonials[activeTestimonial].location} • {testimonials[activeTestimonial].project}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonial Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-4 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveTestimonial(index)}
              className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                index === activeTestimonial
                  ? 'bg-primary-500 text-white scale-110'
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-600'
              }`}
            >
              {testimonial.avatar}
            </button>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={`grid-${testimonial.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-sm mb-4 line-clamp-4">
                "{testimonial.quote.substring(0, 120)}..."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
