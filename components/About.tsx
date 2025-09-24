'use client'

import { motion } from 'framer-motion'
import { Code2, Brain, Database, Globe, Award, Clock } from 'lucide-react'

const About = () => {
  const teamMembers = [
    {
      name: 'Team Lead',
      role: 'Senior Full-Stack Developer',
      experience: '8+ years',
      skills: ['React', 'Next.js', 'Node.js', 'Python', 'AWS'],
      description: 'Passionate about creating scalable web applications and leading development teams to deliver exceptional results.',
    },
    {
      name: 'AI/ML Specialist',
      role: 'Senior AI/ML Engineer',
      experience: '6+ years',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'],
      description: 'Expert in machine learning algorithms, deep learning, and building intelligent systems that solve real-world problems.',
    },
    {
      name: 'Backend Engineer',
      role: 'Senior Backend Developer',
      experience: '7+ years',
      skills: ['Python', 'PostgreSQL', 'Redis', 'Docker', 'Microservices'],
      description: 'Specializes in building robust, scalable backend systems and optimizing database performance for high-traffic applications.',
    },
    {
      name: 'Frontend Expert',
      role: 'Senior Frontend Developer',
      experience: '5+ years',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
      description: 'Creates beautiful, responsive user interfaces with focus on performance and exceptional user experience.',
    },
  ]

  const capabilities = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'End-to-end web application development using modern technologies like React, Next.js, Node.js, and Python.',
    },
    {
      icon: Brain,
      title: 'AI/ML Solutions',
      description: 'Custom machine learning models, data analysis, natural language processing, and computer vision applications.',
    },
    {
      icon: Database,
      title: 'Backend Architecture',
      description: 'Scalable backend systems, APIs, microservices, and database optimization for high-performance applications.',
    },
    {
      icon: Globe,
      title: 'Cloud & DevOps',
      description: 'AWS cloud infrastructure, containerization with Docker, CI/CD pipelines, and automated deployment strategies.',
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
    <section id="about" className="section-padding bg-white dark:bg-slate-900">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-1">
                    {member.role}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {member.experience} experience
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                    {member.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
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
