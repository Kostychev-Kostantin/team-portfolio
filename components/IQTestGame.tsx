'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Brain, Clock, Trophy, Zap, Target, Star, Play, RotateCcw, Share2, ChevronRight } from 'lucide-react'

const IQTestGame = () => {
  const [gameState, setGameState] = useState('welcome') // welcome, playing, results
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(60)
  const [answers, setAnswers] = useState<number[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [gameStarted, setGameStarted] = useState(false)
  const [playerName, setPlayerName] = useState('')
  const [showExplanation, setShowExplanation] = useState(false)

  // IQ Test Questions - Various types
  const questions = [
    {
      id: 1,
      type: 'pattern',
      question: 'What comes next in this sequence?',
      sequence: ['2', '4', '8', '16', '?'],
      options: ['24', '32', '28', '20'],
      correct: 1,
      explanation: 'Each number is doubled: 2×2=4, 4×2=8, 8×2=16, 16×2=32',
      difficulty: 'easy'
    },
    {
      id: 2,
      type: 'logic',
      question: 'If all Bloops are Razzles and all Razzles are Lazzles, then all Bloops are definitely:',
      options: ['Lazzles', 'Not Lazzles', 'Sometimes Lazzles', 'Cannot be determined'],
      correct: 0,
      explanation: 'This is a logical syllogism: Bloops → Razzles → Lazzles, therefore Bloops → Lazzles',
      difficulty: 'medium'
    },
    {
      id: 3,
      type: 'spatial',
      question: 'Which shape completes the pattern?',
      pattern: '🔵🔺🔵🔺🔵?',
      options: ['🔺', '🔵', '🔻', '⭕'],
      correct: 0,
      explanation: 'The pattern alternates: Circle, Triangle, Circle, Triangle, Circle, Triangle',
      difficulty: 'easy'
    },
    {
      id: 4,
      type: 'math',
      question: 'What is the missing number? 3, 7, 15, 31, ?',
      options: ['47', '63', '55', '71'],
      correct: 1,
      explanation: 'Each number is (previous × 2) + 1: 3→7→15→31→63',
      difficulty: 'medium'
    },
    {
      id: 5,
      type: 'logic',
      question: 'A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?',
      options: ['$0.10', '$0.05', '$0.15', '$0.20'],
      correct: 1,
      explanation: 'If ball = x, then bat = x + $1.00. So x + (x + $1.00) = $1.10, therefore 2x = $0.10, x = $0.05',
      difficulty: 'hard'
    },
    {
      id: 6,
      type: 'pattern',
      question: 'What comes next? 1, 1, 2, 3, 5, 8, ?',
      options: ['11', '13', '15', '12'],
      correct: 1,
      explanation: 'This is the Fibonacci sequence: each number is the sum of the two preceding ones (5+8=13)',
      difficulty: 'medium'
    },
    {
      id: 7,
      type: 'spatial',
      question: 'If you fold a square piece of paper in half twice and cut a triangle from the corner, how many holes will there be when unfolded?',
      options: ['1', '2', '4', '8'],
      correct: 2,
      explanation: 'Folding twice creates 4 layers, so cutting one triangle creates 4 holes when unfolded',
      difficulty: 'hard'
    },
    {
      id: 8,
      type: 'logic',
      question: 'In a race, you overtake the person in 2nd place. What position are you in now?',
      options: ['1st place', '2nd place', '3rd place', 'Cannot determine'],
      correct: 1,
      explanation: 'If you overtake the person in 2nd place, you take their position - you are now in 2nd place',
      difficulty: 'medium'
    },
    {
      id: 9,
      type: 'math',
      question: 'What is 15% of 200?',
      options: ['25', '30', '35', '40'],
      correct: 1,
      explanation: '15% of 200 = 0.15 × 200 = 30',
      difficulty: 'easy'
    },
    {
      id: 10,
      type: 'pattern',
      question: 'Complete the analogy: CAR is to GARAGE as PLANE is to ?',
      options: ['SKY', 'HANGAR', 'AIRPORT', 'PILOT'],
      correct: 1,
      explanation: 'A car is stored in a garage, just as a plane is stored in a hangar',
      difficulty: 'easy'
    }
  ]

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (gameState === 'playing' && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setGameState('results')
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [gameState, timeLeft])

  const startGame = () => {
    if (!playerName.trim()) return
    setGameState('playing')
    setCurrentQuestion(0)
    setScore(0)
    setTimeLeft(60)
    setAnswers([])
    setGameStarted(true)
  }

  const selectAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const nextQuestion = () => {
    if (selectedAnswer === null) return

    const newAnswers = [...answers, selectedAnswer]
    setAnswers(newAnswers)

    if (selectedAnswer === questions[currentQuestion].correct) {
      const points = questions[currentQuestion].difficulty === 'easy' ? 10 : 
                    questions[currentQuestion].difficulty === 'medium' ? 15 : 20
      setScore(prev => prev + points)
    }

    if (currentQuestion + 1 >= questions.length) {
      setGameState('results')
    } else {
      setCurrentQuestion(prev => prev + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    }
  }

  const getIQScore = () => {
    const maxScore = questions.reduce((sum, q) => {
      return sum + (q.difficulty === 'easy' ? 10 : q.difficulty === 'medium' ? 15 : 20)
    }, 0)
    const percentage = (score / maxScore) * 100
    
    // IQ score calculation (simplified)
    if (percentage >= 90) return { iq: 140, level: 'Genius', color: 'text-purple-500', bg: 'bg-purple-100' }
    if (percentage >= 80) return { iq: 130, level: 'Very Superior', color: 'text-blue-500', bg: 'bg-blue-100' }
    if (percentage >= 70) return { iq: 120, level: 'Superior', color: 'text-green-500', bg: 'bg-green-100' }
    if (percentage >= 60) return { iq: 110, level: 'High Average', color: 'text-cyan-500', bg: 'bg-cyan-100' }
    if (percentage >= 50) return { iq: 100, level: 'Average', color: 'text-yellow-500', bg: 'bg-yellow-100' }
    if (percentage >= 40) return { iq: 90, level: 'Low Average', color: 'text-orange-500', bg: 'bg-orange-100' }
    return { iq: 80, level: 'Below Average', color: 'text-red-500', bg: 'bg-red-100' }
  }

  const resetGame = () => {
    setGameState('welcome')
    setCurrentQuestion(0)
    setScore(0)
    setTimeLeft(60)
    setAnswers([])
    setSelectedAnswer(null)
    setGameStarted(false)
    setShowExplanation(false)
  }

  const shareResults = () => {
    const result = getIQScore()
    const text = `I just scored ${result.iq} IQ (${result.level}) on the Kazakhstan Dev Team's IQ Challenge! 🧠 Try it yourself!`
    if (navigator.share) {
      navigator.share({ text })
    } else {
      navigator.clipboard.writeText(text)
      alert('Results copied to clipboard!')
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getQuestionIcon = (type: string) => {
    switch (type) {
      case 'pattern': return '🧩'
      case 'logic': return '🤔'
      case 'spatial': return '📐'
      case 'math': return '🔢'
      default: return '❓'
    }
  }

  return (
    <section id="iq-game" className="section-padding relative bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-indigo-900/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Floating brain neurons */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${(i * 11) % 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
        
        {/* Neural connections */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1000 600">
          <motion.path
            d="M100,100 Q300,200 500,100 T900,200"
            stroke="rgb(147, 51, 234)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,4"
            animate={{ strokeDashoffset: [0, 24] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M200,400 Q400,300 600,400 T900,300"
            stroke="rgb(99, 102, 241)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="6,6"
            animate={{ strokeDashoffset: [24, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      <div className="container-max relative z-10">
        <AnimatePresence mode="wait">
          {/* Welcome Screen */}
          {gameState === 'welcome' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <div className="mb-8">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="inline-block text-8xl mb-4"
                >
                  🧠
                </motion.div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  <span className="gradient-text">IQ Challenge</span>
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                  Test your intelligence with our fun IQ challenge! 10 questions, 60 seconds. 
                  Can you beat the average score of 115?
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl mb-8">
                <h3 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-200">
                  Ready to challenge your mind?
                </h3>
                
                <div className="mb-6">
                  <input
                    type="text"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                  />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <Brain className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-slate-700 dark:text-slate-300">10 Questions</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-slate-700 dark:text-slate-300">60 Seconds</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <Target className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-slate-700 dark:text-slate-300">Multiple Types</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <Trophy className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-slate-700 dark:text-slate-300">Get IQ Score</div>
                  </div>
                </div>

                <motion.button
                  onClick={startGame}
                  disabled={!playerName.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-slate-400 disabled:to-slate-500 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>Start IQ Challenge</span>
                </motion.button>
              </div>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                ⚡ Quick, fun, and designed to showcase our interactive development skills!
              </p>
            </motion.div>
          )}

          {/* Game Screen */}
          {gameState === 'playing' && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl mx-auto"
            >
              {/* Game Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">{getQuestionIcon(questions[currentQuestion].type)}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                      Question {currentQuestion + 1} of {questions.length}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 capitalize">
                      {questions[currentQuestion].type} • {questions[currentQuestion].difficulty}
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className={`text-2xl font-bold ${timeLeft <= 10 ? 'text-red-500' : 'text-blue-600'}`}>
                    {formatTime(timeLeft)}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Score: {score}
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mb-8">
                <motion.div
                  className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Question */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
                <h4 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-200">
                  {questions[currentQuestion].question}
                </h4>

                {/* Sequence Display (for pattern questions) */}
                {questions[currentQuestion].sequence && (
                  <div className="flex items-center justify-center space-x-4 mb-8 p-6 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    {questions[currentQuestion].sequence.map((item, index) => (
                      <div
                        key={index}
                        className={`w-16 h-16 rounded-lg flex items-center justify-center text-xl font-bold ${
                          item === '?' 
                            ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 border-2 border-dashed border-purple-400' 
                            : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}

                {/* Pattern Display (for spatial questions) */}
                {questions[currentQuestion].pattern && (
                  <div className="text-center mb-8 p-6 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="text-4xl tracking-wider font-mono">
                      {questions[currentQuestion].pattern}
                    </div>
                  </div>
                )}

                {/* Answer Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => selectAnswer(index)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        selectedAnswer === index
                          ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300'
                          : 'border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500 bg-white dark:bg-slate-700'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-bold ${
                          selectedAnswer === index
                            ? 'border-purple-500 bg-purple-500 text-white'
                            : 'border-slate-300 dark:border-slate-500'
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className="font-medium text-slate-800 dark:text-slate-200">
                          {option}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Next Button */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setShowExplanation(!showExplanation)}
                    className="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
                  >
                    {showExplanation ? 'Hide' : 'Show'} explanation
                  </button>
                  
                  <motion.button
                    onClick={nextQuestion}
                    disabled={selectedAnswer === null}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-slate-400 disabled:to-slate-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center space-x-2"
                  >
                    <span>{currentQuestion + 1 === questions.length ? 'Finish' : 'Next'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Explanation */}
                {showExplanation && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500"
                  >
                    <p className="text-sm text-blue-800 dark:text-blue-300">
                      <strong>Explanation:</strong> {questions[currentQuestion].explanation}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {/* Results Screen */}
          {gameState === 'results' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <div className="mb-8">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-8xl mb-4"
                >
                  🏆
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-slate-200">
                  Congratulations, {playerName}!
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  You've completed the IQ Challenge!
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl mb-8">
                {(() => {
                  const result = getIQScore()
                  return (
                    <>
                      <div className={`inline-block px-6 py-3 rounded-full ${result.bg} ${result.color} font-semibold text-lg mb-6`}>
                        {result.level}
                      </div>
                      
                      <div className="text-6xl font-bold gradient-text mb-4">
                        {result.iq}
                      </div>
                      <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                        Estimated IQ Score
                      </p>

                      <div className="grid grid-cols-3 gap-6 mb-8">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{score}</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">Points Scored</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">
                            {answers.filter((answer, index) => answer === questions[index].correct).length}
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">Correct Answers</div>
                        </div>
                        <div className="text-2xl font-bold text-purple-600">
                          <div className="text-2xl font-bold text-purple-600">{formatTime(60 - timeLeft)}</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">Time Used</div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                          onClick={shareResults}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                        >
                          <Share2 className="w-4 h-4" />
                          <span>Share Results</span>
                        </motion.button>
                        
                        <motion.button
                          onClick={resetGame}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                        >
                          <RotateCcw className="w-4 h-4" />
                          <span>Try Again</span>
                        </motion.button>
                      </div>
                    </>
                  )
                })()}
              </div>

              <div className="text-center">
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Enjoyed the challenge? Check out our other interactive features!
                </p>
                <motion.a
                  href="#skills"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium"
                >
                  <span>Explore Interactive Skills</span>
                  <ChevronRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default IQTestGame
