'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calculator, Clock, DollarSign, Users, Zap, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'

const ProjectEstimator = () => {
  const [formData, setFormData] = useState({
    projectType: '',
    complexity: '',
    features: [] as string[],
    timeline: '',
    budget: '',
    teamSize: ''
  })
  const [estimate, setEstimate] = useState<{
    cost: {
      min: number;
      max: number;
      average: number;
    };
    timeline: {
      weeks: number;
      phases: Array<{
        name: string;
        weeks: number;
      }>;
    };
    team: {
      size: number;
      roles: string[];
    };
    techStack: string[];
    roi: {
      timeframe: string;
      expectedReturn: number;
      paybackPeriod: string;
    };
    nextSteps: string[];
  } | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const projectTypes = [
    { id: 'web-app', name: 'Web Application', multiplier: 1.0, icon: '🌐' },
    { id: 'mobile-app', name: 'Mobile App', multiplier: 1.1, icon: '📱' },
    { id: 'ai-ml', name: 'AI/ML Solution', multiplier: 1.4, icon: '🤖' },
    { id: 'ecommerce', name: 'E-commerce Platform', multiplier: 1.2, icon: '🛒' },
    { id: 'saas', name: 'SaaS Platform', multiplier: 1.3, icon: '☁️' },
    { id: 'api', name: 'API Development', multiplier: 0.7, icon: '🔗' }
  ]

  const complexityLevels = [
    { id: 'simple', name: 'Simple', multiplier: 0.6, description: 'Basic functionality, minimal integrations' },
    { id: 'medium', name: 'Medium', multiplier: 0.85, description: 'Standard features, some integrations' },
    { id: 'complex', name: 'Complex', multiplier: 1.2, description: 'Advanced features, multiple integrations' },
    { id: 'enterprise', name: 'Enterprise', multiplier: 1.6, description: 'High-scale, security, compliance' }
  ]

  const featureOptions = [
    { id: 'auth', name: 'User Authentication', cost: 1200, time: 0.8 },
    { id: 'payment', name: 'Payment Integration', cost: 1800, time: 1.0 },
    { id: 'admin', name: 'Admin Dashboard', cost: 2500, time: 1.5 },
    { id: 'api', name: 'REST API', cost: 2000, time: 1.2 },
    { id: 'realtime', name: 'Real-time Features', cost: 3000, time: 2.0 },
    { id: 'ai', name: 'AI Integration', cost: 4500, time: 2.5 },
    { id: 'mobile', name: 'Mobile Responsive', cost: 1500, time: 0.8 },
    { id: 'analytics', name: 'Analytics Dashboard', cost: 2800, time: 1.5 }
  ]

  const calculateEstimate = () => {
    setIsCalculating(true)
    
    setTimeout(() => {
      const projectType = projectTypes.find(p => p.id === formData.projectType)
      const complexity = complexityLevels.find(c => c.id === formData.complexity)
      const selectedFeatures = featureOptions.filter(f => formData.features.includes(f.id))
      
      if (!projectType || !complexity) {
        setIsCalculating(false)
        return
      }

      // Base cost calculation - More competitive for startup
      const baseCost = 8000 // Reduced from 15000
      const featureCost = selectedFeatures.reduce((sum, feature) => sum + feature.cost, 0)
      const totalCost = (baseCost + featureCost) * projectType.multiplier * complexity.multiplier

      // Time calculation - Faster delivery
      const baseTime = 4 // weeks - Reduced from 8
      const featureTime = selectedFeatures.reduce((sum, feature) => sum + feature.time, 0)
      const totalTime = Math.ceil((baseTime + featureTime) * projectType.multiplier * complexity.multiplier)

      // Team size recommendation - Efficient team sizes
      const teamSize = complexity.id === 'simple' ? 2 : complexity.id === 'medium' ? 2 : complexity.id === 'complex' ? 3 : 4

      // Technology recommendations
      const techStack = getTechRecommendations(formData.projectType, selectedFeatures)

      setEstimate({
        cost: {
          min: Math.round(totalCost * 0.8),
          max: Math.round(totalCost * 1.2),
          average: Math.round(totalCost)
        },
        timeline: {
          weeks: totalTime,
          phases: getProjectPhases(totalTime)
        },
        team: {
          size: teamSize,
          roles: getTeamRoles(formData.projectType, selectedFeatures)
        },
        techStack,
        roi: calculateROI(totalCost, formData.projectType),
        nextSteps: getNextSteps()
      })
      
      setIsCalculating(false)
    }, 2000)
  }

  const getTechRecommendations = (projectType: string, features: Array<{id: string}>) => {
    const base: { [key: string]: string[] } = {
      'web-app': ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
      'mobile-app': ['React Native', 'TypeScript', 'Firebase', 'Redux'],
      'ai-ml': ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL', 'Redis'],
      'ecommerce': ['Next.js', 'Stripe', 'PostgreSQL', 'Redis', 'AWS'],
      'saas': ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
      'api': ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'JWT']
    }

    let tech = base[projectType] || base['web-app']
    
    if (features.some(f => f.id === 'ai')) tech.push('OpenAI API', 'Python')
    if (features.some(f => f.id === 'realtime')) tech.push('Socket.io', 'WebRTC')
    if (features.some(f => f.id === 'payment')) tech.push('Stripe', 'PayPal')
    
    return tech
  }

  const getProjectPhases = (totalWeeks: number) => [
    { name: 'Planning & Design', weeks: Math.ceil(totalWeeks * 0.2) },
    { name: 'Development', weeks: Math.ceil(totalWeeks * 0.6) },
    { name: 'Testing & Launch', weeks: Math.ceil(totalWeeks * 0.2) }
  ]

  const getTeamRoles = (projectType: string, features: Array<{id: string}>) => {
    const baseRoles = ['Project Manager', 'Full-Stack Developer']
    
    if (projectType === 'ai-ml' || features.some(f => f.id === 'ai')) {
      baseRoles.push('AI/ML Engineer')
    }
    if (projectType === 'mobile-app') {
      baseRoles.push('Mobile Developer')
    }
    if (features.some(f => f.id === 'admin' || f.id === 'analytics')) {
      baseRoles.push('Frontend Specialist')
    }
    
    return baseRoles
  }

  const calculateROI = (cost: number, projectType: string) => {
    const roiMultipliers: { [key: string]: number } = {
      'web-app': 4.2,
      'mobile-app': 5.1,
      'ai-ml': 7.8,
      'ecommerce': 6.5,
      'saas': 8.2,
      'api': 3.8
    }
    
    return {
      timeframe: '12 months',
      expectedReturn: Math.round(cost * (roiMultipliers[projectType] || 4.0)),
      paybackPeriod: '4-6 months'
    }
  }

  const getNextSteps = () => [
    'Schedule a free consultation call',
    'Detailed requirements analysis',
    'Technical architecture planning',
    'Project timeline finalization',
    'Development kickoff'
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const toggleFeature = (featureId: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter(id => id !== featureId)
        : [...prev.features, featureId]
    }))
  }

  return (
    <section id="estimator" className="section-padding relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full mb-6">
            <Calculator className="w-4 h-4" />
            <span className="text-sm font-medium">Startup-Friendly Pricing 🚀</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Get Instant Project Estimate</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-4">
            Our AI analyzes your requirements and provides accurate cost, timeline, and technology recommendations 
            in seconds. <strong>Competitive startup pricing</strong> with enterprise-quality delivery.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>50% faster delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>40% cost savings</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span>Premium quality</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Project Type */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
                What type of project do you need?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {projectTypes.map((type) => (
                  <motion.button
                    key={type.id}
                    onClick={() => handleInputChange('projectType', type.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formData.projectType === type.id
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">{type.icon}</div>
                    <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {type.name}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Complexity */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
                Project complexity level?
              </h3>
              <div className="space-y-3">
                {complexityLevels.map((level) => (
                  <motion.button
                    key={level.id}
                    onClick={() => handleInputChange('complexity', level.id)}
                    whileHover={{ scale: 1.01 }}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                      formData.complexity === level.id
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-medium text-slate-800 dark:text-slate-200 mb-1">
                      {level.name}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {level.description}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
                Required features (select all that apply)
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {featureOptions.map((feature) => (
                  <motion.button
                    key={feature.id}
                    onClick={() => toggleFeature(feature.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-3 rounded-lg border-2 text-left transition-all ${
                      formData.features.includes(feature.id)
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {feature.name}
                      </span>
                      {formData.features.includes(feature.id) && (
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Calculate Button */}
            <motion.button
              onClick={calculateEstimate}
              disabled={!formData.projectType || !formData.complexity || isCalculating}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-slate-400 disabled:to-slate-500 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              {isCalculating ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  <span>Calculating...</span>
                </>
              ) : (
                <>
                  <Calculator className="w-5 h-5" />
                  <span>Get My Estimate</span>
                </>
              )}
            </motion.button>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8"
          >
            {estimate ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                  Your Project Estimate
                </h3>

                {/* Cost */}
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-800 dark:text-green-300">Investment Range</span>
                  </div>
                  <div className="text-2xl font-bold text-green-700 dark:text-green-400">
                    ${estimate.cost.min.toLocaleString()} - ${estimate.cost.max.toLocaleString()}
                  </div>
                  <div className="text-sm text-green-600 dark:text-green-400 mt-1">
                    Average: ${estimate.cost.average.toLocaleString()}
                  </div>
                </div>

                {/* Timeline */}
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-blue-800 dark:text-blue-300">Timeline</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">
                    {estimate.timeline.weeks} weeks
                  </div>
                  <div className="space-y-1 mt-2">
                    {estimate.timeline.phases.map((phase, index) => (
                      <div key={index} className="flex justify-between text-sm text-blue-600 dark:text-blue-400">
                        <span>{phase.name}</span>
                        <span>{phase.weeks}w</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Team */}
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="w-5 h-5 text-purple-600" />
                    <span className="font-semibold text-purple-800 dark:text-purple-300">Team Size</span>
                  </div>
                  <div className="text-2xl font-bold text-purple-700 dark:text-purple-400">
                    {estimate.team.size} developers
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {estimate.team.roles.map((role, index) => (
                      <span key={index} className="text-xs bg-purple-200 dark:bg-purple-800 text-purple-700 dark:text-purple-300 px-2 py-1 rounded">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ROI */}
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-orange-600" />
                    <span className="font-semibold text-orange-800 dark:text-orange-300">Expected ROI</span>
                  </div>
                  <div className="text-2xl font-bold text-orange-700 dark:text-orange-400">
                    ${estimate.roi.expectedReturn.toLocaleString()}
                  </div>
                  <div className="text-sm text-orange-600 dark:text-orange-400 mt-1">
                    in {estimate.roi.timeframe} • Payback: {estimate.roi.paybackPeriod}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Recommended Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {estimate.techStack.map((tech, index) => (
                      <span key={index} className="text-xs bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Next Steps */}
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">Next Steps</h4>
                  <div className="space-y-2">
                    {estimate.nextSteps.map((step, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                        <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold">
                          {index + 1}
                        </div>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Let's Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            ) : (
              <div className="text-center py-12">
                <Calculator className="w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-600 dark:text-slate-400 mb-2">
                  Ready to Calculate
                </h3>
                <p className="text-slate-500 dark:text-slate-500">
                  Fill out the form on the left to get your instant project estimate
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProjectEstimator
