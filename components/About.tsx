'use client'

import { motion } from 'framer-motion'
import { Code2, Brain, Database, Globe, Award, Clock } from 'lucide-react'
import Image from 'next/image'

const About = () => {
  const teamMembers = [
    {
      name: 'Kostychev Konstantin',
      role: 'Senior Full Stack & AI/ML Developer',
      experience: '10+ years',
      skills: ['Python', 'Golang', 'React', 'Next.js', 'TensorFlow', 'PyTorch', 'AWS'],
      description: 'Innovative and results-driven developer with expertise in AI/ML, microservices architecture, and scalable web applications across FinTech, AI, Blockchain, and Cloud platforms.',
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
      experience: '7+ years',
      skills: ['Python', 'Golang', 'PostgreSQL', 'Redis', 'Docker', 'Microservices'],
      description: 'Specializes in building robust, scalable backend systems and optimizing database performance for high-traffic applications.',
    },
    {
      name: 'Vladislav Sayenko',
      role: 'Senior Frontend Developer',
      experience: '5+ years',
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

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ 
                y: -10, 
                rotateX: 5, 
                rotateY: 5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
              style={{ perspective: "1000px" }}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-110" />
              
              {/* Main card */}
              <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-slate-700/50 shadow-2xl group-hover:shadow-3xl transition-all duration-500 overflow-hidden">
                
                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse" />
                </div>
                
                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
                      style={{
                        left: `${20 + (i * 10) % 60}%`,
                        top: `${15 + (i * 13) % 70}%`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3 + (i % 3),
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-6">
                    {/* Enhanced Photo Section */}
                    <div className="flex-shrink-0 relative">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                      >
                        {/* Glowing ring */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-70 blur-md transition-opacity duration-500" />
                        
                        {member.name === 'Kostychev Konstantin' ? (
                          <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-2xl border-4 border-white/50 dark:border-slate-600/50">
                            <Image
                              src="/kostychev.jpg"
                              alt="Kostychev Konstantin"
                              width={96}
                              height={96}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        ) : (
                          <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/50 dark:border-slate-600/50">
                            <span className="text-white font-bold text-2xl">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        )}
                        
                        {/* Status indicator */}
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-slate-800 shadow-lg">
                          <div className="w-full h-full bg-green-400 rounded-full animate-ping" />
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Enhanced Content */}
                    <div className="flex-1 min-w-0">
                      {/* Name with typing animation effect */}
                      <motion.h3 
                        className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent mb-2"
                        whileHover={{ scale: 1.02 }}
                      >
                        {member.name}
                      </motion.h3>
                      
                      {/* Role with animated underline */}
                      <div className="relative mb-2">
                        <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                          {member.role}
                        </h4>
                        <motion.div 
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 0.8, delay: index * 0.2 }}
                        />
                      </div>
                      
                      {/* Experience badge */}
                      <motion.div 
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 px-3 py-1 rounded-full mb-4"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-green-700 dark:text-green-300">
                          {member.experience} experience
                        </span>
                      </motion.div>
                      
                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                        {member.description}
                      </p>
                      
                      {/* Enhanced Skills */}
                      <div className="space-y-2 mb-6">
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                          Core Technologies
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              whileHover={{ 
                                scale: 1.1, 
                                backgroundColor: "rgb(59 130 246 / 0.2)",
                                transition: { duration: 0.2 }
                              }}
                              transition={{ 
                                duration: 0.4, 
                                delay: index * 0.1 + skillIndex * 0.05 
                              }}
                              className="px-3 py-1.5 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-600 shadow-sm cursor-pointer"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom accent line */}
                  {/* <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    layoutId={`accent-${index}`}
                  /> */}
                </div>
              </div>
              
              {/* Reflection effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
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
