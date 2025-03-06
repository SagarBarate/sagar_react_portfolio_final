import React from 'react'
import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Qualification from './components/qualification/Qualification'
import ScrollUp from './components/scrollup/ScrollUp'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'
import Testimonials from './components/testimonials/Testimonials'
import Work from './components/work/Work'
import CloudHoverEffect from "./CloudHoverEffect"; // Import the new component

const App = () => {
  return (
    <div>
       <CloudHoverEffect />
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </div>
  )
}

export default App