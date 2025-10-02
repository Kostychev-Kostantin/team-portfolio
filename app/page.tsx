'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import InteractiveSkills from '@/components/InteractiveSkills'
import IQTestGame from '@/components/IQTestGame'
import ProjectEstimator from '@/components/ProjectEstimator'
import CaseStudies from '@/components/CaseStudies'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <InteractiveSkills />
      <CaseStudies />
      <Testimonials />
      <IQTestGame />
      <ProjectEstimator />
      <Contact />
      <Footer />
    </main>
  )
}
