'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, TrendingUp, Users, Zap } from 'lucide-react'
import Image from 'next/image'

const CaseStudies = () => {
  const projects = [
    {
      id: 1,
      title: 'Supercog AI (SCp-AI) - AI Junior Analyst',
      category: 'AI/ML • Enterprise SaaS',
      client: 'Investment Management Platform',
      description: 'Built an enterprise-grade AI agent platform that acts as a virtual team member, automating operational, research, and administrative workflows for investment teams using LLMs and modular backend services.',
      problem: 'Investment teams spent 70% of their time on repetitive manual tasks like deal triage, CRM data entry, due diligence research, and meeting preparation instead of strategic decision-making.',
      solution: 'Developed a comprehensive AI agent platform using FastAPI, LangChain, and GPT-4 with microservices architecture, real-time streaming via Redis, and enterprise integrations (Salesforce, HubSpot, Slack).',
      result: 'Automated 85% of routine analyst tasks, reduced deal processing time from hours to minutes, and enabled teams to focus on high-value strategic decisions with 94% accuracy in data extraction.',
      techStack: ['Python', 'FastAPI', 'LangChain', 'GPT-4', 'PostgreSQL', 'pgvector', 'Redis', 'MinIO', 'Docker', 'Reflex.dev'],
      image: '/project-1.png',
      liveUrl: 'https://supercog.ai/',
      metrics: [
        { label: 'Task Automation', value: '85%', icon: Zap },
        { label: 'Processing Speed', value: '90x', icon: TrendingUp },
        { label: 'Data Accuracy', value: '94%', icon: TrendingUp },
      ],
    },
    {
      id: 2,
      title: 'Compliance Audit Copilot',
      category: 'AI/ML • Healthcare Compliance',
      client: 'Pharmaceutical Company (Confidential)',
      description: 'Built an AI-powered compliance audit review system for clinical trial documents that automates regulatory violation detection and suggests corrections using advanced NLP and GPT-4 integration.',
      problem: 'Compliance officers spent weeks manually reviewing clinical trial documents against complex regulatory standards (ICH, FDA guidelines), leading to delays in drug approvals and potential compliance violations.',
      solution: 'Developed a sophisticated AI pipeline using FastAPI, GPT-4, and semantic embeddings with intelligent document chunking, two-phase analysis approach, and collaborative review workflow with exact position tracking.',
      result: 'Reduced compliance review time by 80%, achieved 95% accuracy in violation detection, and enabled faster regulatory submissions while maintaining comprehensive audit trails for pharmaceutical compliance.',
      techStack: ['Python', 'FastAPI', 'GPT-4', 'OpenAI Embeddings', 'PostgreSQL', 'React', 'TypeScript', 'Tailwind CSS', 'Docker', 'GCP'],
      image: '/project-2.png',
      metrics: [
        { label: 'Review Time Reduction', value: '80%', icon: Zap },
        { label: 'Detection Accuracy', value: '95%', icon: TrendingUp },
        { label: 'Processing Speed', value: '50x', icon: Zap },
      ],
    },
    {
      id: 3,
      title: 'NeuroTrader: The Construct™',
      category: 'AI/ML • FinTech Trading',
      client: 'Autonomous Trading Platform (In Development)',
      description: 'Built an AI-powered autonomous trading engine using reinforcement learning agents with risk-first framework for cryptocurrency markets, featuring real-time execution, monitoring dashboard, and comprehensive safety controls.',
      problem: 'Traditional trading requires constant human monitoring and is prone to emotional decisions, while existing automated systems lack sophisticated AI decision-making and proper risk management integration.',
      solution: 'Developed a modular AI trading system combining reinforcement learning agents, real-time signal processing, strict risk management, and live market data integration with comprehensive monitoring and emergency controls.',
      result: 'Created a fully autonomous trading prototype with disciplined AI decision-making, real-time execution capabilities, and comprehensive safety controls, currently running successful paper trading simulations.',
      techStack: ['Python', 'Reinforcement Learning', 'TensorFlow', 'Real-time APIs', 'WebSocket', 'React', 'Next.js', 'PostgreSQL', 'Docker'],
      image: '/project-3.png',
      // liveUrl: 'https://neurotrader.vercel.app/',
      metrics: [
        { label: 'AI Decision Speed', value: '<1s', icon: Zap },
        { label: 'Risk Controls', value: '100%', icon: TrendingUp },
        { label: 'Market Coverage', value: '24/7', icon: Zap },
      ],
    },
    {
      id: 4,
      title: 'Taskade – Real-Time Collaboration Platform',
      category: 'Full-Stack • SaaS Platform',
      client: 'Distributed Teams Workspace',
      description: 'Built a comprehensive real-time collaboration platform combining multiplayer document editing, integrated video conferencing, and project management features into a unified workspace for distributed teams.',
      problem: 'Remote teams relied on multiple disconnected tools for chat, task management, and document editing, creating context switching, productivity loss, and communication gaps between team members.',
      solution: 'Developed an all-in-one workspace with real-time multiplayer editing, WebRTC-powered video/voice communication, flexible project management views (lists, boards, calendars), and cross-platform synchronization.',
      result: 'Reduced tool overhead by 50% for remote teams, achieved 99.9% uptime, and successfully scaled to support thousands of simultaneous users in real-time collaborative sessions.',
      techStack: ['React', 'Node.js', 'WebRTC', 'Socket.io', 'MongoDB', 'Redis', 'TypeScript', 'Docker', 'Kubernetes', 'WebSocket'],
      image: '/project-4.png',
      liveUrl: 'https://www.taskade.com/',
      metrics: [
        { label: 'Tool Overhead Reduction', value: '50%', icon: Zap },
        { label: 'System Uptime', value: '99.9%', icon: TrendingUp },
        { label: 'Concurrent Users', value: '1000+', icon: Users },
      ],
    },
  ]

  return (
    <section id="projects" className="section-padding relative bg-slate-50 dark:bg-slate-800 overflow-hidden">
      {/* Epic Tech Background */}
      <div className="absolute inset-0">
        {/* Matrix-style rain effect */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-blue-500 font-mono text-xs"
              style={{ left: `${i * 5}%` }}
              animate={{
                y: [-100, 1000],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 10 + (i % 10),
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear"
              }}
            >
              {['01', '10', '11', '00', 'AI', 'ML', 'JS', 'PY', 'TS'][i % 9]}
            </motion.div>
          ))}
        </div>
        
        {/* Floating tech icons */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-16 h-16 border-2 border-blue-300/30 rounded-lg flex items-center justify-center text-blue-400/40 text-2xl font-bold"
        >
          ⚛️
        </motion.div>
        
        <motion.div
          animate={{
            rotate: [360, 0],
            y: [0, -40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-16 w-12 h-12 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full flex items-center justify-center text-green-400/60 text-lg"
        >
          🐍
        </motion.div>
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 80, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/4 w-14 h-14 border border-purple-400/30 rounded-full flex items-center justify-center text-purple-400/50 text-xl"
        >
          🤖
        </motion.div>
        
        {/* Neural network visualization */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 600">
          {/* Nodes */}
          {[
            { x: 100, y: 150 }, { x: 200, y: 100 }, { x: 200, y: 200 },
            { x: 300, y: 50 }, { x: 300, y: 150 }, { x: 300, y: 250 },
            { x: 400, y: 100 }, { x: 400, y: 200 }, { x: 500, y: 150 }
          ].map((node, i) => (
            <motion.circle
              key={i}
              cx={node.x}
              cy={node.y}
              r="4"
              fill="rgb(59, 130, 246)"
              animate={{
                r: [3, 6, 3],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
          
          {/* Connections */}
          <motion.path
            d="M100,150 L200,100 L300,50 L400,100 L500,150"
            stroke="rgb(59, 130, 246)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="3,3"
            animate={{ strokeDashoffset: [0, 12] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M100,150 L200,200 L300,250 L400,200 L500,150"
            stroke="rgb(147, 197, 253)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="2,4"
            animate={{ strokeDashoffset: [12, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </svg>
        
        {/* Glowing orbs */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.3],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-r from-purple-400/15 to-pink-500/15 rounded-full blur-2xl"
        />
        
        {/* Additional tech elements */}
        <motion.div
          animate={{
            rotate: [0, -360],
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 right-10 w-20 h-20 border border-green-400/30 rounded-full flex items-center justify-center text-green-400/50 text-3xl"
        >
          💾
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, -35, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-10 text-orange-400/40 text-4xl"
        >
          ⚡
        </motion.div>
        
        <motion.div
          animate={{
            rotate: [0, 360],
            x: [0, 60, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-3/4 right-1/4 text-purple-400/40 text-3xl"
        >
          🔮
        </motion.div>
        
        {/* Data flow visualization */}
        <svg className="absolute inset-0 w-full h-full opacity-8" viewBox="0 0 1200 800">
          <motion.path
            d="M50,400 Q200,200 400,400 Q600,600 800,400 Q1000,200 1150,400"
            stroke="url(#dataGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="12,6"
            animate={{ strokeDashoffset: [0, 36] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M1150,100 Q1000,300 800,100 Q600,300 400,100 Q200,300 50,100"
            stroke="url(#dataGradient2)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="8,8"
            animate={{ strokeDashoffset: [36, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          <defs>
            <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
              <stop offset="50%" stopColor="rgb(147, 51, 234)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="dataGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.4" />
              <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.7" />
              <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Floating code blocks */}
        {['function()', 'class {}', 'const =>', 'import', 'export', 'async'].map((code, i) => (
          <motion.div
            key={code}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 5, -5, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 10 + (i % 5),
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
            className="absolute text-blue-400/20 text-sm font-mono font-bold px-2 py-1 bg-slate-200/10 rounded"
            style={{
              left: `${15 + (i * 12) % 70}%`,
              top: `${15 + (i * 8) % 70}%`,
            }}
          >
            {code}
          </motion.div>
        ))}
        
        {/* Pulsing tech rings */}
        <motion.div
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-3/4 w-24 h-24 border-2 border-blue-400/30 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.2, 0, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 1,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 left-1/5 w-32 h-32 border border-purple-400/25 rounded-full"
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
            <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Explore our recent projects that showcase our expertise in Full-Stack development and AI/ML solutions. 
            Each project represents our commitment to delivering exceptional results for our clients.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              {/* Project Image */}
              <div className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl group"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20 flex items-center justify-center overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </div>

              {/* Project Details */}
              <div className="flex-1 space-y-6">
                <div>
                  <div className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-4">
                    {project.category}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
                    {project.client}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Problem, Solution, Result */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Problem</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Solution</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Result</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.result}
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center p-4 bg-white dark:bg-slate-700 rounded-lg">
                      <div className="inline-flex items-center justify-center w-8 h-8 bg-primary-500 rounded-lg mb-2">
                        <metric.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-lg font-bold gradient-text">{metric.value}</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Project Link */}
                {project.liveUrl && (
                  <div>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Live Project</span>
                    </motion.a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Ready to start your next project with us?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Let's Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudies
