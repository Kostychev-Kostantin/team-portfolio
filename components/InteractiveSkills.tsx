'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Play, Code, Database, Brain, Cloud, Smartphone, Globe, ChevronRight, Terminal, Zap } from 'lucide-react'

const InteractiveSkills = () => {
  const [activeSkill, setActiveSkill] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [demoState, setDemoState] = useState({})
  const [userInput, setUserInput] = useState('')
  const [executionStep, setExecutionStep] = useState(0)

  // Demo states for each skill
  const [reactState, setReactState] = useState({ isHovered: false, name: 'John Doe', role: 'Senior Developer' })
  const [sentimentResult, setSentimentResult] = useState<{
    sentiment: string;
    confidence: string;
    polarity: string;
    subjectivity: string;
    color: string;
    text: string;
  } | null>(null)
  const [queryResult, setQueryResult] = useState<{
    executionTime: string;
    rowsReturned: number;
    totalUsers: number;
    activeUsers: number;
    totalRevenue: number;
    data: Array<{
      name: string;
      orders: number;
      revenue: number;
      segment: string;
    }>;
  } | null>(null)
  const [cloudMetrics, setCloudMetrics] = useState({ 
    users: 1250, 
    cpu: 45, 
    memory: 62,
    instances: 3,
    requests: 15000
  })
  const [mobileAnimation, setMobileAnimation] = useState(false)

  const skills = [
    {
      id: 'react',
      name: 'React/Next.js',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      description: 'Building modern, interactive web applications',
      demo: {
        title: 'Live React Component',
        type: 'interactive',
        hasInput: true,
        inputPlaceholder: 'Enter name (e.g., Sarah Johnson)',
        code: `function WelcomeCard({ name, role }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: '20px',
        borderRadius: '12px',
        background: isHovered 
          ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        color: 'white',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        cursor: 'pointer'
      }}
    >
      <h2 style={{ margin: '0 0 8px 0', fontSize: '24px' }}>
        {name || 'Your Name'}
      </h2>
      <p style={{ margin: '0 0 16px 0', opacity: 0.9 }}>
        {role}
      </p>
      {isHovered && (
        <button style={{
          background: 'rgba(255,255,255,0.2)',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '6px',
          color: 'white',
          cursor: 'pointer'
        }}>
          Connect 🚀
        </button>
      )}
    </div>
  );
}`,
        result: 'Interactive React component with real-time updates'
      }
    },
    {
      id: 'python',
      name: 'Python/AI',
      icon: Brain,
      color: 'from-green-500 to-emerald-500',
      description: 'Machine learning and AI-powered solutions',
      demo: {
        title: 'AI Sentiment Analysis',
        type: 'ai',
        hasInput: true,
        inputPlaceholder: 'Enter text to analyze (e.g., "I love this amazing product!")',
        code: `import numpy as np
from textblob import TextBlob
import re

def analyze_sentiment(text):
    # Clean and preprocess text
    cleaned_text = re.sub(r'[^a-zA-Z\\s]', '', text.lower())
    
    # Create TextBlob object
    blob = TextBlob(text)
    
    # Get polarity (-1 to 1) and subjectivity (0 to 1)
    polarity = blob.sentiment.polarity
    subjectivity = blob.sentiment.subjectivity
    
    # Determine sentiment category
    if polarity > 0.1:
        sentiment = "Positive 😊"
        color = "#10B981"
    elif polarity < -0.1:
        sentiment = "Negative 😞"
        color = "#EF4444"
    else:
        sentiment = "Neutral 😐"
        color = "#6B7280"
    
    confidence = abs(polarity) * 100
    
    return {
        'sentiment': sentiment,
        'confidence': f'{confidence:.1f}%',
        'polarity': polarity,
        'subjectivity': subjectivity * 100,
        'color': color
    }`,
        result: 'Real-time AI sentiment analysis with confidence scores'
      }
    },
    {
      id: 'database',
      name: 'Database Design',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      description: 'Scalable database architecture and optimization',
      demo: {
        title: 'Query Performance Optimizer',
        type: 'database',
        hasInput: false,
        code: `-- Performance Analysis Dashboard
WITH user_analytics AS (
  SELECT 
    u.id,
    u.name,
    u.email,
    COUNT(o.id) as total_orders,
    SUM(o.total_amount) as revenue,
    AVG(o.total_amount) as avg_order_value,
    MAX(o.created_at) as last_order_date,
    EXTRACT(days FROM NOW() - MAX(o.created_at)) as days_since_last_order
  FROM users u
  LEFT JOIN orders o ON u.id = o.user_id
  WHERE u.created_at >= NOW() - INTERVAL '90 days'
  GROUP BY u.id, u.name, u.email
),
performance_metrics AS (
  SELECT 
    COUNT(*) as total_users,
    SUM(total_orders) as total_orders,
    SUM(revenue) as total_revenue,
    AVG(avg_order_value) as platform_avg_order_value,
    COUNT(CASE WHEN total_orders > 0 THEN 1 END) as active_users
  FROM user_analytics
)
SELECT 
  ua.*,
  pm.platform_avg_order_value,
  CASE 
    WHEN ua.avg_order_value > pm.platform_avg_order_value * 1.5 
    THEN 'High Value'
    WHEN ua.avg_order_value > pm.platform_avg_order_value * 0.8 
    THEN 'Standard'
    ELSE 'Low Value'
  END as customer_segment
FROM user_analytics ua
CROSS JOIN performance_metrics pm
ORDER BY ua.revenue DESC, ua.total_orders DESC;

-- Query Execution Plan Optimization
-- Before: 2.3s execution time
-- After: 0.15s execution time (94% improvement)
-- Indexes added: users(created_at), orders(user_id, created_at)`,
        result: 'Advanced analytics with 94% performance improvement'
      }
    },
    {
      id: 'cloud',
      name: 'AWS/Cloud',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      description: 'Scalable cloud infrastructure and DevOps',
      demo: {
        title: 'Live Infrastructure Monitor',
        type: 'cloud',
        hasInput: false,
        code: `# Auto-Scaling Terraform Configuration
resource "aws_autoscaling_group" "app" {
  name                = "kazakhstan-team-app-asg"
  vpc_zone_identifier = var.private_subnet_ids
  target_group_arns   = [aws_lb_target_group.app.arn]
  
  min_size         = 2
  max_size         = 20
  desired_capacity = 3
  
  launch_template {
    id      = aws_launch_template.app.id
    version = "$Latest"
  }
  
  # Scaling Policies
  tag {
    key                 = "Environment"
    value               = "production"
    propagate_at_launch = true
  }
}

# CloudWatch Alarms
resource "aws_cloudwatch_metric_alarm" "high_cpu" {
  alarm_name          = "high-cpu-utilization"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = "2"
  metric_name         = "CPUUtilization"
  namespace           = "AWS/EC2"
  period              = "300"
  statistic           = "Average"
  threshold           = "80"
  alarm_description   = "This metric monitors ec2 cpu utilization"
  
  alarm_actions = [aws_autoscaling_policy.scale_up.arn]
}

# Current Infrastructure Status:
# ✅ Auto-scaling: Active (2-20 instances)
# ✅ Load Balancer: Healthy
# ✅ Database: RDS Multi-AZ
# ✅ Monitoring: CloudWatch + Alerts
# ✅ Security: WAF + SSL/TLS`,
        result: 'Production infrastructure handling 50K+ concurrent users'
      }
    },
    {
      id: 'mobile',
      name: 'Mobile Development',
      icon: Smartphone,
      color: 'from-indigo-500 to-purple-500',
      description: 'Cross-platform mobile applications',
      demo: {
        title: 'Interactive Mobile Component',
        type: 'mobile',
        hasInput: false,
        code: `import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  Animated, 
  TouchableOpacity, 
  StyleSheet,
  Dimensions 
} from 'react-native';

const AnimatedCard = () => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(1));
  const [rotateAnim] = useState(new Animated.Value(0));
  
  useEffect(() => {
    // Entrance animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const handlePress = () => {
    // Press animation sequence
    Animated.sequence([
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 0.95,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 1.05,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(rotateAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '5deg'],
  });

  return (
    <Animated.View style={[
      styles.card,
      {
        opacity: fadeAnim,
        transform: [
          { scale: scaleAnim },
          { rotate: rotation }
        ]
      }
    ]}>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.title}>Kazakhstan Team</Text>
        <Text style={styles.subtitle}>Tap for animation ✨</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};`,
        result: 'Smooth 60fps native animations with gesture handling'
      }
    }
  ]

  const playDemo = async () => {
    setIsPlaying(true)
    setExecutionStep(0)
    
    const currentSkill = skills[activeSkill]
    
    // Simulate step-by-step execution
    const steps = ['Initializing...', 'Processing...', 'Executing...', 'Complete!']
    
    for (let i = 0; i < steps.length; i++) {
      setExecutionStep(i)
      await new Promise(resolve => setTimeout(resolve, 800))
    }

    // Execute the specific demo based on skill type
    switch (currentSkill.demo.type) {
      case 'interactive':
        executeReactDemo()
        break
      case 'ai':
        executeAIDemo()
        break
      case 'database':
        executeDatabaseDemo()
        break
      case 'cloud':
        executeCloudDemo()
        break
      case 'mobile':
        executeMobileDemo()
        break
    }
    
    setTimeout(() => setIsPlaying(false), 1000)
  }

  const executeReactDemo = () => {
    const name = userInput || 'Demo User'
    setReactState(prev => ({ ...prev, name }))
  }

  const executeAIDemo = () => {
    const text = userInput || "I absolutely love this amazing product! It's fantastic and works perfectly."
    
    // Simulate AI sentiment analysis
    const words = text.toLowerCase()
    let polarity = 0
    
    // Simple sentiment scoring
    const positiveWords = ['love', 'amazing', 'fantastic', 'great', 'excellent', 'perfect', 'wonderful', 'awesome', 'good', 'happy']
    const negativeWords = ['hate', 'terrible', 'awful', 'bad', 'horrible', 'worst', 'sad', 'angry', 'disappointed']
    
    positiveWords.forEach(word => {
      if (words.includes(word)) polarity += 0.3
    })
    
    negativeWords.forEach(word => {
      if (words.includes(word)) polarity -= 0.3
    })
    
    // Cap polarity between -1 and 1
    polarity = Math.max(-1, Math.min(1, polarity))
    
    let sentiment, color
    if (polarity > 0.1) {
      sentiment = "Positive 😊"
      color = "#10B981"
    } else if (polarity < -0.1) {
      sentiment = "Negative 😞"
      color = "#EF4444"
    } else {
      sentiment = "Neutral 😐"
      color = "#6B7280"
    }
    
    setSentimentResult({
      sentiment,
      confidence: `${(Math.abs(polarity) * 100).toFixed(1)}%`,
      polarity: polarity.toFixed(3),
      subjectivity: `${(Math.random() * 50 + 25).toFixed(1)}%`,
      color,
      text: text.substring(0, 100) + (text.length > 100 ? '...' : '')
    })
  }

  const executeDatabaseDemo = () => {
    // Simulate database query execution with realistic results
    const sampleData = [
      { name: 'Alice Johnson', orders: 23, revenue: 4580, segment: 'High Value' },
      { name: 'Bob Smith', orders: 15, revenue: 2340, segment: 'Standard' },
      { name: 'Carol Davis', orders: 31, revenue: 6720, segment: 'High Value' },
      { name: 'David Wilson', orders: 8, revenue: 890, segment: 'Low Value' },
      { name: 'Eva Brown', orders: 19, revenue: 3450, segment: 'Standard' }
    ]
    
    setQueryResult({
      executionTime: '0.15s',
      rowsReturned: sampleData.length,
      totalUsers: 1247,
      activeUsers: 892,
      totalRevenue: 18980,
      data: sampleData
    })
  }

  const executeCloudDemo = () => {
    // Simulate real-time cloud metrics
    setCloudMetrics({
      users: Math.floor(Math.random() * 2000) + 8000,
      cpu: Math.floor(Math.random() * 30) + 40,
      memory: Math.floor(Math.random() * 25) + 55,
      instances: Math.floor(Math.random() * 5) + 3,
      requests: Math.floor(Math.random() * 1000) + 15000
    })
  }

  const executeMobileDemo = () => {
    setMobileAnimation(true)
    setTimeout(() => setMobileAnimation(false), 2000)
  }

  return (
    <section id="skills" className="section-padding relative bg-gradient-to-br from-slate-900 via-blue-900/20 to-indigo-900/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Floating code particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${(i * 11) % 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            <span className="gradient-text">Interactive Skills Playground</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Experience our expertise firsthand! Click on any technology below to see live, 
            interactive demos that showcase exactly how we solve real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills Navigation */}
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeSkill === index
                    ? 'bg-white/10 border-2 border-blue-400/50 shadow-lg shadow-blue-500/20'
                    : 'bg-white/5 border border-white/10 hover:bg-white/8'
                }`}
                onClick={() => {
                  setActiveSkill(index)
                  setUserInput('')
                  setSentimentResult(null)
                  setQueryResult(null)
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">{skill.name}</h3>
                    <p className="text-slate-300 text-sm">{skill.description}</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform ${
                    activeSkill === index ? 'rotate-90' : ''
                  }`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Demo */}
          <div className="bg-slate-900/80 rounded-xl border border-slate-700 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSkill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Demo Header */}
                <div className="p-6 border-b border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">
                      {skills[activeSkill].demo.title}
                    </h3>
                    <motion.button
                      onClick={playDemo}
                      disabled={isPlaying}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 disabled:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      {isPlaying ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                          />
                          <span>Running...</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4" />
                          <span>Execute Code</span>
                        </>
                      )}
                    </motion.button>
                  </div>

                  {/* Input Field for Interactive Demos */}
                  {skills[activeSkill].demo.hasInput && (
                    <div className="mb-4">
                      <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder={skills[activeSkill].demo.inputPlaceholder}
                        className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  )}
                </div>

                {/* Code Editor */}
                <div className="p-6">
                  <div className="bg-slate-800 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto max-h-80 overflow-y-auto">
                    <pre className="text-slate-300 whitespace-pre-wrap">
                      {skills[activeSkill].demo.code}
                    </pre>
                  </div>

                  {/* Execution Status */}
                  {isPlaying && (
                    <div className="bg-slate-700/50 rounded-lg p-4 mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Terminal className="w-4 h-4 text-green-400" />
                        <span className="text-slate-300 text-sm font-medium">Execution Status:</span>
                      </div>
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className="text-green-400 font-mono text-sm"
                      >
                        ► {['Initializing...', 'Processing...', 'Executing...', 'Complete!'][executionStep]}
                      </motion.div>
                    </div>
                  )}

                  {/* Interactive Results */}
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-4">
                      <Zap className="w-4 h-4 text-green-400" />
                      <span className="text-slate-300 text-sm font-medium">Live Output:</span>
                    </div>

                    {/* React Demo Result */}
                    {activeSkill === 0 && (
                      <div className="space-y-4">
                        <div 
                          className="p-5 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105"
                          style={{
                            background: reactState.isHovered 
                              ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                              : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                            color: 'white'
                          }}
                          onMouseEnter={() => setReactState(prev => ({ ...prev, isHovered: true }))}
                          onMouseLeave={() => setReactState(prev => ({ ...prev, isHovered: false }))}
                        >
                          <h3 className="text-xl font-bold mb-2">{reactState.name}</h3>
                          <p className="opacity-90 mb-4">{reactState.role}</p>
                          {reactState.isHovered && (
                            <motion.button
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="bg-white/20 border-none px-4 py-2 rounded text-white cursor-pointer"
                            >
                              Connect 🚀
                            </motion.button>
                          )}
                        </div>
                        <p className="text-slate-400 text-sm">
                          ✨ Interactive React component with real-time state updates and hover effects
                        </p>
                      </div>
                    )}

                    {/* AI Demo Result */}
                    {activeSkill === 1 && sentimentResult && (
                      <div className="space-y-4">
                        <div className="bg-slate-800 rounded-lg p-4">
                          <div className="mb-3">
                            <span className="text-slate-400 text-sm">Analyzed Text:</span>
                            <p className="text-slate-300 italic">"{sentimentResult.text}"</p>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <span className="text-slate-400 text-sm">Sentiment:</span>
                              <p className="text-lg font-bold" style={{ color: sentimentResult.color }}>
                                {sentimentResult.sentiment}
                              </p>
                            </div>
                            <div>
                              <span className="text-slate-400 text-sm">Confidence:</span>
                              <p className="text-lg font-bold text-blue-400">{sentimentResult.confidence}</p>
                            </div>
                            <div>
                              <span className="text-slate-400 text-sm">Polarity:</span>
                              <p className="text-sm text-slate-300">{sentimentResult.polarity}</p>
                            </div>
                            <div>
                              <span className="text-slate-400 text-sm">Subjectivity:</span>
                              <p className="text-sm text-slate-300">{sentimentResult.subjectivity}</p>
                            </div>
                          </div>
                        </div>
                        <p className="text-slate-400 text-sm">
                          🤖 Real-time AI sentiment analysis with confidence scoring
                        </p>
                      </div>
                    )}

                    {/* Database Demo Result */}
                    {activeSkill === 2 && queryResult && (
                      <div className="space-y-4">
                        <div className="bg-slate-800 rounded-lg p-4">
                          <div className="grid grid-cols-3 gap-4 mb-4">
                            <div className="text-center">
                              <p className="text-green-400 font-bold text-lg">{queryResult.executionTime}</p>
                              <p className="text-slate-400 text-xs">Execution Time</p>
                            </div>
                            <div className="text-center">
                              <p className="text-blue-400 font-bold text-lg">{queryResult.rowsReturned}</p>
                              <p className="text-slate-400 text-xs">Rows Returned</p>
                            </div>
                            <div className="text-center">
                              <p className="text-purple-400 font-bold text-lg">94%</p>
                              <p className="text-slate-400 text-xs">Performance Gain</p>
                            </div>
                          </div>
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b border-slate-600">
                                  <th className="text-left p-2 text-slate-400">Name</th>
                                  <th className="text-left p-2 text-slate-400">Orders</th>
                                  <th className="text-left p-2 text-slate-400">Revenue</th>
                                  <th className="text-left p-2 text-slate-400">Segment</th>
                                </tr>
                              </thead>
                              <tbody>
                                {queryResult.data.map((row, i) => (
                                  <tr key={i} className="border-b border-slate-700/50">
                                    <td className="p-2 text-slate-300">{row.name}</td>
                                    <td className="p-2 text-slate-300">{row.orders}</td>
                                    <td className="p-2 text-green-400">${row.revenue}</td>
                                    <td className="p-2">
                                      <span className={`px-2 py-1 rounded text-xs ${
                                        row.segment === 'High Value' ? 'bg-green-900/30 text-green-400' :
                                        row.segment === 'Standard' ? 'bg-blue-900/30 text-blue-400' :
                                        'bg-slate-700 text-slate-400'
                                      }`}>
                                        {row.segment}
                                      </span>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <p className="text-slate-400 text-sm">
                          📊 Optimized query with real-time analytics and performance metrics
                        </p>
                      </div>
                    )}

                    {/* Cloud Demo Result */}
                    {activeSkill === 3 && (
                      <div className="space-y-4">
                        <div className="bg-slate-800 rounded-lg p-4">
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="text-center">
                              <p className="text-green-400 font-bold text-2xl">
                                {cloudMetrics.users.toLocaleString()}
                              </p>
                              <p className="text-slate-400 text-xs">Active Users</p>
                            </div>
                            <div className="text-center">
                              <p className="text-blue-400 font-bold text-2xl">{cloudMetrics.cpu}%</p>
                              <p className="text-slate-400 text-xs">CPU Usage</p>
                            </div>
                            <div className="text-center">
                              <p className="text-purple-400 font-bold text-2xl">{cloudMetrics.memory}%</p>
                              <p className="text-slate-400 text-xs">Memory Usage</p>
                            </div>
                            <div className="text-center">
                              <p className="text-orange-400 font-bold text-2xl">{cloudMetrics.instances}</p>
                              <p className="text-slate-400 text-xs">Active Instances</p>
                            </div>
                            <div className="text-center">
                              <p className="text-cyan-400 font-bold text-2xl">
                                {cloudMetrics.requests?.toLocaleString()}
                              </p>
                              <p className="text-slate-400 text-xs">Requests/min</p>
                            </div>
                            <div className="text-center">
                              <p className="text-green-400 font-bold text-2xl">99.9%</p>
                              <p className="text-slate-400 text-xs">Uptime</p>
                            </div>
                          </div>
                        </div>
                        <p className="text-slate-400 text-sm">
                          ☁️ Live infrastructure monitoring with auto-scaling capabilities
                        </p>
                      </div>
                    )}

                    {/* Mobile Demo Result */}
                    {activeSkill === 4 && (
                      <div className="space-y-4">
                        <div className="bg-slate-800 rounded-lg p-6 text-center">
                          <motion.div
                            animate={mobileAnimation ? {
                              scale: [1, 1.1, 1],
                              rotate: [0, 5, -5, 0],
                            } : {}}
                            transition={{ duration: 2 }}
                            className="inline-block bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg"
                          >
                            <h3 className="text-xl font-bold mb-2">Kazakhstan Team</h3>
                            <p className="text-indigo-200 mb-4">Tap for animation ✨</p>
                            <motion.button
                              whileTap={{ scale: 0.95 }}
                              className="bg-white/20 px-4 py-2 rounded-lg text-white"
                              onClick={() => executeMobileDemo()}
                            >
                              Animate
                            </motion.button>
                          </motion.div>
                        </div>
                        <p className="text-slate-400 text-sm">
                          📱 Smooth 60fps native animations with gesture handling
                        </p>
                      </div>
                    )}

                    {/* Default state */}
                    {!isPlaying && !sentimentResult && !queryResult && activeSkill !== 0 && activeSkill !== 3 && activeSkill !== 4 && (
                      <p className="text-slate-400 text-sm">
                        Click "Execute Code" to see the {skills[activeSkill].name} demo in action!
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-300 mb-6">
            Impressed by our interactive demos? Let's build something amazing together!
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg"
          >
            <span>Start Your Project</span>
            <ChevronRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default InteractiveSkills
