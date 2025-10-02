'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Brain, Database, Globe, Award, Clock, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextMember = () => {
    setActiveIndex((prev) => (prev + 1) % teamMembers.length)
  }

  const prevMember = () => {
    setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
  }

  const teamMembers = [
    {
      name: 'Kostychev Konstantin',
      role: 'Senior Full Stack & AI/ML Developer - Technical Lead',
      experience: '10+ years',
      skills: ['Python', 'Golang', 'React', 'Next.js', 'TensorFlow', 'PyTorch', 'AWS'],
      description: 'Elite developer who passed Arc.dev\'s rigorous vetting process (only 2% acceptance rate). Innovative and results-driven with expertise in AI/ML, microservices architecture, and scalable web applications across FinTech, AI, Blockchain, and Cloud platforms.',
      codementorUrl: 'https://www.codementor.io/@kostychevkonstantin',
    },
    {
      name: 'Sergey Bogdanovich',
      role: 'Senior AI/ML Developer',
      experience: '11+ years',
      skills: ['TensorFlow', 'PyTorch', 'OpenAI GPT', 'Python', 'JavaScript', 'TypeScript', 'React'],
      description: 'AI/ML developer with expertise in AI/ML-driven applications, specializing in integrating intelligent solutions for predictive analytics, recommendation systems, and fraud detection into scalable web applications.',
    },
    {
      name: 'Rinat Galiyev',
      role: 'Senior Backend Developer',
      experience: '9+ years',
      skills: ['Python', 'Golang', 'PostgreSQL', 'Redis', 'Docker', 'Microservices'],
      description: 'Specializes in building robust, scalable backend systems and optimizing database performance for high-traffic applications.',
    },
    {
      name: 'Roman Varaxin',
      role: 'Senior Frontend Developer',
      experience: '10+ years',
      skills: ['React', 'TypeScript', 'WebRTC', 'D3.js', 'Tailwind CSS', 'Next.js'],
      description: 'Creates beautiful, responsive user interfaces with focus on performance and exceptional user experience.',
    },
  ]

  const capabilities = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'End-to-end development with React, Next.js, FastAPI, Node.js, TypeScript, and modern cloud architectures.',
    },
    {
      icon: Brain,
      title: 'AI/ML Solutions',
      description: 'Advanced AI systems using GPT-4, LangChain, TensorFlow, PyTorch, Reinforcement Learning, and Computer Vision.',
    },
    {
      icon: Database,
      title: 'Backend Architecture',
      description: 'Scalable systems with Python, Golang, microservices, PostgreSQL, Redis, and enterprise-grade security.',
    },
    {
      icon: Globe,
      title: 'Cloud & DevOps',
      description: 'AWS infrastructure, Kubernetes, Docker, Terraform, CI/CD pipelines, and automated monitoring solutions.',
    },
  ]

  const achievements = [
    {
      icon: Award,
      title: 'Project Success Rate',
      value: '98%',
      description: 'Delivered on time and within budget',
    },
    {
      icon: Clock,
      title: 'Average Response Time',
      value: '< 4h',
      description: 'Quick communication and support',
    },
    {
      icon: Globe,
      title: 'Global Clients',
      value: '15+',
      description: 'Across US, Europe, and Asia',
    },
  ]

  return (
    <section id="about" className="section-padding relative bg-white dark:bg-slate-900 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Animated wave patterns */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-r from-blue-200/40 to-indigo-300/40 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 -right-32 w-80 h-80 bg-gradient-to-l from-purple-200/30 to-pink-300/30 rounded-full blur-3xl"
        />
        
        {/* Floating code symbols */}
        {['{', '}', '<', '>', '/', '*', '+', '='].map((symbol, i) => (
          <motion.div
            key={symbol}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + (i % 4),
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute text-blue-400/20 text-4xl font-mono font-bold"
            style={{
              left: `${20 + (i * 9) % 60}%`,
              top: `${20 + (i * 7) % 60}%`,
            }}
          >
            {symbol}
          </motion.div>
        ))}
        
        {/* Circuit-like lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1000 1000">
          <motion.path
            d="M100,100 L300,100 L300,300 L500,300 L500,500 L700,500 L700,700 L900,700"
            stroke="rgb(59, 130, 246)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10,5"
            animate={{ strokeDashoffset: [0, 30] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M900,100 L700,100 L700,300 L500,300 L500,500 L300,500 L300,700 L100,700"
            stroke="rgb(147, 197, 253)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="5,10"
            animate={{ strokeDashoffset: [30, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </svg>
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
            <span className="gradient-text">About Our Team</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            We're a close-knit team of experienced developers from Kazakhstan, combining deep technical expertise 
            with a passion for innovation. Our diverse skills and collaborative approach enable us to tackle 
            complex challenges and deliver exceptional results for our global clients.
          </p>
        </motion.div>

        {/* Team Members Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          {/* Carousel Navigation */}
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
              Meet Our Team
            </h3>
            <div className="flex space-x-2">
              <motion.button
                onClick={prevMember}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
              >
                <ChevronLeft className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              </motion.button>
              <motion.button
                onClick={nextMember}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
              >
                <ChevronRight className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              </motion.button>
            </div>
          </div>

          {/* Main Featured Card */}
          <div className="relative mb-8 pt-4 pb-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 300, rotateY: -15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -300, rotateY: 15 }}
                whileHover={{ 
                  y: -10, 
                  rotateX: 5, 
                  rotateY: 5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-full group"
                style={{ perspective: "1000px" }}
              >
                {/* Featured Card */}
                <div className="relative w-full bg-gradient-to-br from-white/90 to-slate-50/90 dark:from-slate-800/90 dark:to-slate-900/90 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/20 dark:border-slate-700/50 shadow-2xl group-hover:shadow-3xl transition-all duration-500 overflow-hidden min-h-[400px] md:min-h-[350px]">
                  
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-110" />
                  
                  {/* Animated border effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse" />
                  </div>
                  
                  {/* Floating particles */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
                        style={{
                          left: `${20 + (i * 8) % 60}%`,
                          top: `${15 + (i * 11) % 70}%`,
                        }}
                        animate={{
                          y: [0, -40, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1.2, 0],
                        }}
                        transition={{
                          duration: 4 + (i % 3),
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Animated background elements */}
                  <div className="absolute inset-0">
                    <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse" />
                    <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
                  </div>

                  <div className="relative z-10 flex items-center py-4 min-h-[350px] md:min-h-[300px]">
                    <div className="flex flex-col md:flex-row items-center w-full gap-6 md:gap-8">
                      {/* Large Photo - Mobile: centered, Desktop: 30% width */}
                      <div className="w-full md:w-[30%] flex-shrink-0 flex justify-center">
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="relative"
                        >
                          {/* Glowing ring */}
                          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-30 group-hover:opacity-70 blur-lg animate-pulse transition-opacity duration-500" />
                          
                          {teamMembers[activeIndex].name === 'Kostychev Konstantin' ? (
                            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-white/70 dark:border-slate-600/70">
                              <Image
                                src="/kostychev.jpg"
                                alt="Kostychev Konstantin"
                                width={224}
                                height={224}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                          ) : teamMembers[activeIndex].name === 'Sergey Bogdanovich' ? (
                            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-white/70 dark:border-slate-600/70">
                              <Image
                                src="/sergey.jpg"
                                alt="Sergey Bogdanovich"
                                width={224}
                                height={224}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                          ) : teamMembers[activeIndex].name === 'Roman Varaxin' ? (
                            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-white/70 dark:border-slate-600/70">
                              <Image
                                src="/roman.jpg"
                                alt="Roman Varaxin"
                                width={224}
                                height={224}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                          ) : teamMembers[activeIndex].name === 'Rinat Galiyev' ? (
                            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-white/70 dark:border-slate-600/70">
                              <Image
                                src="/rinat.jpg"
                                alt="Rinat Galiyev"
                                width={224}
                                height={224}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                          ) : (
                            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/70 dark:border-slate-600/70">
                              <span className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                                {teamMembers[activeIndex].name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                          )}
                          
                          {/* Status indicator */}
                          <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-3 md:-right-3 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-green-500 rounded-full border-4 border-white dark:border-slate-800 shadow-lg">
                            <div className="w-full h-full bg-green-400 rounded-full animate-ping" />
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Content - Mobile: full width, Desktop: 70% width */}
                      <div className="w-full md:w-[70%] text-center md:text-left min-w-0">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        >
                          {/* Name */}
                          <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent mb-2">
                            {teamMembers[activeIndex].name}
                          </h3>
                          
                          {/* Role */}
                          <div className="relative mb-3">
                            <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                              {teamMembers[activeIndex].role}
                            </h4>
                            <motion.div 
                              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 0.8, delay: 0.5 }}
                            />
                          </div>
                          
                          {/* Experience */}
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 px-4 py-2 rounded-full mb-4"
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="font-medium text-green-700 dark:text-green-300">
                              {teamMembers[activeIndex].experience} experience
                            </span>
                          </motion.div>
                          
                          {/* Description */}
                          <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed"
                          >
                            {teamMembers[activeIndex].description}
                          </motion.p>
                          
                          {/* Arc.dev Credential Badge - Only for Kostychev */}
                          {teamMembers[activeIndex].name === 'Kostychev Konstantin' && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.55 }}
                              className="mb-6"
                            >
                              <motion.a
                                href={teamMembers[activeIndex].codementorUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-500/20"
                              >
                                <div className="flex items-center space-x-2">
                                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                    <span className="text-sm font-bold">🏆</span>
                                  </div>
                                  <div className="text-left">
                                    <div className="text-sm font-bold">Arc.dev Certified</div>
                                    <div className="text-xs opacity-90">Top 2% Elite Developer</div>
                                  </div>
                                </div>
                                <div className="w-4 h-4 opacity-70">
                                  <svg fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                                </div>
                              </motion.a>
                            </motion.div>
                          )}
                          
                          {/* Skills */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                          >
                            <h5 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">
                              Core Technologies
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {teamMembers[activeIndex].skills.map((skill, skillIndex) => (
                                <motion.span
                                  key={skill}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  whileHover={{ 
                                    scale: 1.05, 
                                    backgroundColor: "rgb(59 130 246 / 0.2)"
                                  }}
                                  transition={{ 
                                    duration: 0.3, 
                                    delay: 0.7 + skillIndex * 0.05 
                                  }}
                                  className="px-3 py-1.5 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-600 shadow-sm cursor-pointer"
                                >
                                  {skill}
                                </motion.span>
                              ))}
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Reflection effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Preview Cards */}
          <div className="flex justify-center space-x-4 overflow-x-auto mt-10 pb-4 pt-4 px-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`flex-shrink-0 cursor-pointer transition-all duration-300 ${
                  index === activeIndex 
                    ? 'transform scale-105' 
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <div className={`bg-white dark:bg-slate-800 rounded-xl p-4 w-48 border shadow-md transition-all duration-300 ${
                  index === activeIndex
                    ? 'border-blue-500 shadow-blue-500/25 shadow-lg bg-blue-50 dark:bg-blue-900/20'
                    : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                }`}>
                  <div className="flex items-center space-x-3">
                    {/* Small photo */}
                    <div className="flex-shrink-0">
                      {member.name === 'Kostychev Konstantin' ? (
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-600">
                          <Image
                            src="/kostychev.jpg"
                            alt="Kostychev Konstantin"
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : member.name === 'Sergey Bogdanovich' ? (
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-600">
                          <Image
                            src="/sergey.jpg"
                            alt="Sergey Bogdanovich"
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : member.name === 'Roman Varaxin' ? (
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-600">
                          <Image
                            src="/roman.jpg"
                            alt="Roman Varaxin"
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : member.name === 'Rinat Galiyev' ? (
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-600">
                          <Image
                            src="/rinat.jpg"
                            alt="Rinat Galiyev"
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center border-2 border-slate-200 dark:border-slate-600">
                          <span className="text-white font-bold text-sm">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {/* Preview content */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm truncate">
                        {member.name}
                      </h4>
                      <p className="text-xs text-blue-600 dark:text-blue-400 truncate">
                        {member.role.split(' ').slice(0, 2).join(' ')}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {member.experience}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {teamMembers.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-blue-500 shadow-lg' 
                    : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">
            Our Core Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  {capability.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-slate-800 dark:text-slate-200">
            Why Choose Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500 rounded-lg mb-4">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">
                  {achievement.value}
                </div>
                <div className="font-semibold text-slate-800 dark:text-slate-200 mb-1">
                  {achievement.title}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
