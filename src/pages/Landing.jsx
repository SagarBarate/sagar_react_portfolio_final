import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import NinjaRunner from '../components/NinjaRunner';
import SocialLinks from '../components/SocialLinks';
import Contact from '../components/Contact';
import WorkExperience from '../components/WorkExperience';
import Footer from '../components/Footer';
import Shimmer from '../components/Shimmer';
import SagarBaratePIC from '../assets/SagarBaratePIC.png';

const Landing = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [profileImageLoaded, setProfileImageLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProfile = () => {
    document.getElementById('profile-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const codeSnippets = ['Code', '→', 'Cloud'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = SagarBaratePIC;
    img.onload = () => setProfileImageLoaded(true);
  }, []);

  // Create interactive mesh squares for entire landing page
  useEffect(() => {
    const meshContainer = document.getElementById('landing-full-mesh');
    if (!meshContainer) return;

    const squareSize = 50;
    const cols = Math.ceil(window.innerWidth / squareSize) + 2;
    const rows = Math.ceil(window.innerHeight / squareSize) + 2;

    meshContainer.innerHTML = '';

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const square = document.createElement('div');
        square.className = 'mesh-square';
        square.style.left = `${j * squareSize}px`;
        square.style.top = `${i * squareSize}px`;
        meshContainer.appendChild(square);
      }
    }

    let position = 0;
    const animate = () => {
      position -= 0.5;
      if (position <= -squareSize) {
        position = 0;
      }
      meshContainer.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      meshContainer.innerHTML = '';
      const newCols = Math.ceil(window.innerWidth / squareSize) + 2;
      const newRows = Math.ceil(window.innerHeight / squareSize) + 2;
      
      for (let i = 0; i < newRows; i++) {
        for (let j = 0; j < newCols; j++) {
          const square = document.createElement('div');
          square.className = 'mesh-square';
          square.style.left = `${j * squareSize}px`;
          square.style.top = `${i * squareSize}px`;
          meshContainer.appendChild(square);
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      meshContainer.innerHTML = '';
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen projects-mesh-background relative overflow-hidden">
      <Header />
      
      {/* Animated Mesh Background - Full Page */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="mesh-cage"></div>
        <div className="interactive-mesh" id="landing-full-mesh"></div>
      </div>
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 relative z-10">
        <div className="container mx-auto">
          {/* Game and Profile Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-start">
            {/* Game on Left */}
            <div className="order-3 lg:order-1">
              <NinjaRunner />
            </div>

            {/* Right Side: Hero Text + Profile Picture */}
            <div className="order-1 lg:order-2 flex flex-col items-center lg:items-start lg:pl-8">
              {/* Centered Hero Text with Introduction */}
              <div className="text-center mb-8 w-full">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  <span className="ninja-text">Hello, I am </span>
                  <span className="text-gradient">Sagar</span>
                </h1>
                
                {/* Animated Code → Cloud Text */}
                <div className="flex items-center justify-center gap-3 mb-4 text-3xl md:text-5xl font-mono">
                  <span className="ninja-text">{codeSnippets[0]}</span>
                  <span className="text-white animate-pulse text-4xl md:text-6xl">
                    {codeSnippets[1]}
                  </span>
                  <span className="text-gradient">
                    {codeSnippets[2]}
                  </span>
                </div>

                <p className="text-xl md:text-2xl text-gray-300 font-semibold mb-2">
                  Full Stack Developer 🎮
                </p>
                <p className="text-lg md:text-xl text-gray-400">
                  Cloud Enthusiast | Problem Solver
                </p>
              </div>

              {/* Profile Photo - Centered with Orange Background */}
              <div className="flex justify-center items-center w-full my-8">
                <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                  {/* Orange Background Circle */}
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-dark-orange/80 to-ninja-orange/80 z-10 shadow-2xl"></div>
                  
                  {/* Profile Image Container */}
                  {!profileImageLoaded ? (
                    <div className="absolute inset-10 rounded-full overflow-hidden z-20">
                      <Shimmer type="profile" className="w-full h-full rounded-full" />
                    </div>
                  ) : (
                    <div className="absolute inset-10 rounded-full profile-image-container overflow-hidden z-20">
                      <img
                        src={SagarBaratePIC}
                        alt="Profile"
                        className="relative z-10 w-full h-full object-cover rounded-full border-1.2 border-white shadow-1xl"
                        onLoad={() => setProfileImageLoaded(true)}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Down Button */}
          <div className="flex justify-center">
            <button
              onClick={scrollToProfile}
              className="animate-bounce p-4 bg-dark-orange hover:bg-dark-orange/90 text-white rounded-full shadow-lg transition-colors border border-orange-500/50"
              aria-label="Scroll to profile"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="profile-section" className="py-16 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="glass scroll-card border-3d p-8 md:p-12 bg-navy-800/40">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                {!profileImageLoaded ? (
                  <Shimmer type="profile" className="w-48 h-48 rounded-full" />
                ) : (
                  <div className="w-48 h-48 ninja-border rounded-full p-2 bg-navy-800/30 animate-float">
                    <div className="w-full h-full rounded-full bg-navy-900 flex items-center justify-center overflow-hidden">
                      <img
                        src={SagarBaratePIC}
                        alt="Profile"
                        className="w-full h-full object-cover"
                        onLoad={() => setProfileImageLoaded(true)}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Headline and Description */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-4xl font-bold mb-4 ninja-text text-white">
                  Full-Stack Developer
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Passionate about building scalable web applications and cloud solutions. 
                  I love turning complex problems into simple, beautiful, and intuitive solutions. 
                  When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.
                </p>
              </div>
            </div>

            {/* Navigation Links - Smaller */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <Link
                to="/projects"
                className="scroll-card border-3d p-3 bg-navy-800/40 hover:bg-navy-800/60 text-white transform transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">📦</div>
                  <h3 className="font-bold text-sm uppercase tracking-wider">Projects</h3>
                </div>
              </Link>

              <Link
                to="/case-studies"
                className="scroll-card border-3d p-3 bg-navy-800/40 hover:bg-navy-800/60 text-white transform transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">📜</div>
                  <h3 className="font-bold text-sm uppercase tracking-wider">Case Studies</h3>
                </div>
              </Link>

              <Link
                to="/blogs"
                className="scroll-card border-3d p-3 bg-navy-800/40 hover:bg-navy-800/60 text-white transform transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">✍️</div>
                  <h3 className="font-bold text-sm uppercase tracking-wider">Blogs</h3>
                </div>
              </Link>

              <a
                href="https://www.linkedin.com/in/sagar-barate-6b22041b3"
                target="_blank"
                rel="noopener noreferrer"
                className="scroll-card border-3d p-3 bg-navy-800/40 hover:bg-navy-800/60 text-white transform transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">💼</div>
                  <h3 className="font-bold text-sm uppercase tracking-wider">LinkedIn</h3>
                </div>
              </a>

              <a
                href="https://github.com/SagarBarate"
                target="_blank"
                rel="noopener noreferrer"
                className="scroll-card border-3d p-3 bg-navy-800/40 hover:bg-navy-800/60 text-white transform transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">⚔️</div>
                  <h3 className="font-bold text-sm uppercase tracking-wider">GitHub</h3>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-12 pt-8 border-t border-orange-500/30">
              <div className="flex flex-col items-center">
                <p className="text-gray-300 mb-4 font-semibold">Connect with me</p>
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Work Experience Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Contact />
            </div>

            {/* Work Experience */}
            <div>
              <WorkExperience />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;

