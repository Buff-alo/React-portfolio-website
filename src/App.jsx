import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import HeroSection from './components/section/HeroSection'
import SkillSection from './components/section/SkillSection'
import ProjectSection from './components/section/ProjectSection'
import AboutSection from './components/section/AboutSection'
import ContactSection from './components/section/ContactSection'
import Footer from './components/section/Footer'

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <HeroSection />
        <SkillSection />
        <ProjectSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App