import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import HeroSection from './components/section/HeroSection'
import SkillSection from './components/section/SkillSection'
import ProjectSection from './components/section/ProjectSection'
import AboutSection from './components/section/AboutSection'
import ContactSection from './components/section/ContactSection'
import Footer from './components/section/Footer'
import ScrollToTop from './components/ScrollToTop'
import LoadingScreen from './components/LoadingScreen'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate minimum loading time for smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <Navbar />
        <HeroSection />
        <SkillSection />
        <ProjectSection />
        <AboutSection />
        <ContactSection />
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  )
}

export default App