import React, { useEffect } from 'react'
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
// import Testimonials from './components/testimonials/Testimonials'
import Work from './components/work/Work'
import CloudHoverEffect from "./CloudHoverEffect"; // Import the new component
import ScrollAnimation from './components/ScrollAnimation'

const App = () => {
  useEffect(() => {
    // Add scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div>
       <CloudHoverEffect />
      <Header />

      <main className="main">
        <ScrollAnimation animation="fadeInUp">
          <Home />
        </ScrollAnimation>
        <ScrollAnimation animation="fadeInUp" delay={200}>
          <About />
        </ScrollAnimation>
        <ScrollAnimation animation="fadeInUp" delay={400}>
          <Skills />
        </ScrollAnimation>
        <ScrollAnimation animation="fadeInUp" delay={600}>
          <Services />
        </ScrollAnimation>
        <ScrollAnimation animation="fadeInUp" delay={800}>
          <Qualification />
        </ScrollAnimation>
        <ScrollAnimation animation="fadeInUp" delay={1000}>
          <Work />
        </ScrollAnimation>
        {/* <Testimonials /> */}
        <ScrollAnimation animation="fadeInUp" delay={1200}>
          <Contact />
        </ScrollAnimation>
      </main>

      <ScrollAnimation animation="fadeInUp" delay={1400}>
        <Footer />
      </ScrollAnimation>
      <ScrollUp />
    </div>
  )
}

export default App