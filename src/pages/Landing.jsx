import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import NinjaRunner from '../components/NinjaRunner';
import SocialLinks from '../components/SocialLinks';

const Landing = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

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

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slash">
              <span className="ninja-text text-ninja-black">Hello, I'm </span>
              <span className="text-gradient">Sagar</span>
            </h1>
            
            {/* Animated Code → Cloud Text */}
            <div className="flex items-center justify-center gap-3 mb-8 text-3xl md:text-5xl font-mono">
              <span className="ninja-text text-ninja-black">{codeSnippets[0]}</span>
              <span className="text-ninja-orange animate-pulse text-4xl md:text-6xl">
                {codeSnippets[1]}
              </span>
              <span className="text-gradient">
                {codeSnippets[2]}
              </span>
            </div>

            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto font-semibold">
              Full-Stack Developer | Cloud Enthusiast | Problem Solver
            </p>
          </div>

          {/* Game and Profile Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-start">
            {/* Game on Left - Larger */}
            <div className="order-2 lg:order-1">
              <NinjaRunner />
            </div>

           {/* Profile Photo on Right - Larger (Rectangle, Not Circle) */}
<div className="order-1 lg:order-2 flex justify-center lg:justify-end">
  <div className="w-[380px] h-auto border-4 border-ninja-orange bg-gray-100 shadow-lg">
    <img
      src="/Users/sagargopalbarate/Desktop/Projects/SagarPortfolio/src/assets/SagarBaratePIC.png"
      alt="Profile"
      className="w-full h-auto object-contain"
    />
  </div>
</div>

          </div>

          {/* Scroll Down Button */}
          <div className="flex justify-center">
            <button
              onClick={scrollToProfile}
              className="animate-bounce p-4 bg-ninja-orange hover:bg-orange-600 text-white rounded-full shadow-lg transition-colors border-2 border-ninja-black"
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
      <section id="profile-section" className="py-20 px-4 bg-white/30">
        <div className="container mx-auto max-w-4xl">
          <div className="glass scroll-card p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 ninja-border rounded-full p-2 bg-gradient-to-br from-ninja-orange to-orange-600 animate-float">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://via.placeholder.com/200?text=Your+Photo"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Headline and Description */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-4xl font-bold mb-4 ninja-text text-ninja-orange">
                  Full-Stack Developer
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
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
                className="scroll-card p-3 bg-gradient-to-br from-ninja-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white transform transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">📦</div>
                  <h3 className="font-bold text-sm uppercase tracking-wider">Projects</h3>
                </div>
              </Link>

              <Link
                to="/case-studies"
                className="scroll-card p-3 bg-gradient-to-br from-ninja-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white transform transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">📜</div>
                  <h3 className="font-bold text-sm uppercase tracking-wider">Case Studies</h3>
                </div>
              </Link>

              <Link
                to="/blogs"
                className="scroll-card p-3 bg-gradient-to-br from-ninja-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white transform transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">✍️</div>
                  <h3 className="font-bold text-sm uppercase tracking-wider">Blogs</h3>
                </div>
              </Link>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="scroll-card p-3 bg-gradient-to-br from-ninja-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white transform transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">💼</div>
                  <h3 className="font-bold text-sm uppercase tracking-wider">LinkedIn</h3>
                </div>
              </a>

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="scroll-card p-3 bg-gradient-to-br from-ninja-black to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white transform transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">⚔️</div>
                  <h3 className="font-bold text-sm uppercase tracking-wider">GitHub</h3>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-12 pt-8 border-t-4 border-ninja-orange">
              <div className="flex flex-col items-center">
                <p className="text-gray-700 mb-4 font-semibold">Connect with me</p>
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;

