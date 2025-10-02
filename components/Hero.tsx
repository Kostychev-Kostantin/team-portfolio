'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Users, Code, Brain } from 'lucide-react'

const Hero = () => {
  const stats = [
    { icon: Users, label: 'Team Members', value: '5+' },
    { icon: Code, label: 'Projects Delivered', value: '20+' },
    { icon: Brain, label: 'Years Experience', value: '8+' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-indigo-900/20" />
      
      {/* Animated Particle Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.4],
            rotate: [360, 180, 0],
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-r from-indigo-400/30 to-cyan-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
            x: [0, 150, 0, -100, 0],
            y: [0, -100, 50, 0, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-pink-400/25 to-blue-500/25 rounded-full blur-3xl"
        />
        
        {/* Floating geometric shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-16 h-16 border-2 border-blue-300/40 rotate-45"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 left-1/3 w-12 h-12 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [0, 180, 360],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 right-20 w-8 h-8 border border-purple-400/50 rounded-full"
        />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent"
               style={{
                 backgroundImage: `
                   linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                   linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                 `,
                 backgroundSize: '100px 100px',
               }} />
        </div>
        
        {/* Sparkle effects */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            style={{
              left: `${10 + (i * 7) % 80}%`,
              top: `${15 + (i * 11) % 70}%`,
            }}
          />
        ))}
      </div>

      <div className="container-max relative z-10 text-center px-4">
        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 shadow-lg"
        >
          <MapPin className="w-4 h-4 text-primary-600" />
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Based in Kazakhstan 🇰🇿
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="gradient-text">Elite Development</span>
          <br />
          <span className="text-slate-800 dark:text-slate-200">Team</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          We're a passionate team of Senior Full-Stack and AI/ML developers from Kazakhstan, 
          delivering cutting-edge software solutions for global clients. From complex web applications 
          to intelligent AI systems, we transform ideas into reality.
        </motion.p>

        {/* Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {['Python', 'FastAPI', 'GPT-4', 'LangChain', 'React', 'Next.js', 'Node.js', 'Golang', 'Angular', 'C#', 'C++', 'Java', 'TypeScript', 'TensorFlow', 'PostgreSQL', 'Docker', 'WebRTC', 'PyTorch', 'AWS'].map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="px-4 py-2 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 shadow-md hover:shadow-lg transition-shadow"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center space-x-2 shadow-xl"
          >
            <span>View Our Work</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            Let's Talk
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
              className="glass-effect rounded-xl p-6 text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500 rounded-lg mb-4 group-hover:bg-primary-600 transition-colors">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
