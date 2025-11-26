import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Contact from '../components/Contact';

const LetsConnect = () => {
  // Create interactive mesh squares
  useEffect(() => {
    const meshContainer = document.getElementById('connect-mesh');
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

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'sagarbarate2907@gmail.com',
      link: 'mailto:sagarbarate2907@gmail.com',
      copy: true
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/sagar-barate-6b22041b3',
      link: 'https://www.linkedin.com/in/sagar-barate-6b22041b3',
      copy: false
    },
    {
      icon: '⚔️',
      label: 'GitHub',
      value: 'github.com/SagarBarate',
      link: 'https://github.com/SagarBarate',
      copy: false
    },
    {
      icon: '💻',
      label: 'LeetCode',
      value: 'leetcode.com/u/Sagarbarate/',
      link: 'https://leetcode.com/u/Sagarbarate/',
      copy: false
    },
    {
      icon: '🏆',
      label: 'HackerRank',
      value: 'hackerrank.com/profile/sagarbarate2907',
      link: 'https://www.hackerrank.com/profile/sagarbarate2907',
      copy: false
    }
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <div className="min-h-screen projects-mesh-background relative overflow-hidden">
      <Header />
      
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="mesh-cage"></div>
        <div className="interactive-mesh" id="connect-mesh"></div>
      </div>
      
      <div className="pt-24 pb-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 ninja-text">
              Let's <span className="text-gradient">Connect</span> 🤝
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-semibold">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Contact Information Cards */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="project-card-white-border p-6 bg-navy-800/40 hover:bg-navy-800/60 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{info.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{info.label}</h3>
                      {info.copy ? (
                        <div className="flex items-center gap-2">
                          <a
                            href={info.link}
                            className="text-gray-300 hover:text-white transition-colors break-all"
                          >
                            {info.value}
                          </a>
                          <button
                            onClick={() => handleCopy(info.value)}
                            className="px-3 py-1 text-xs border-2 border-white/40 rounded hover:bg-white/10 transition-colors"
                            title="Copy to clipboard"
                          >
                            📋
                          </button>
                        </div>
                      ) : (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-white transition-colors break-all"
                        >
                          {info.value}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="project-card-white-border p-6 bg-navy-800/40">
                <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
                <SocialLinks />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Send a Message</h2>
              <Contact />
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 project-card-white-border p-8 bg-navy-800/40">
            <h2 className="text-2xl font-bold text-white mb-4">Why Connect?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="text-lg font-semibold text-white mb-2">Collaboration</h3>
                <p className="text-gray-300 text-sm">
                  Let's build something amazing together
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💡</div>
                <h3 className="text-lg font-semibold text-white mb-2">Ideas</h3>
                <p className="text-gray-300 text-sm">
                  Share your ideas and let's discuss possibilities
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🌐</div>
                <h3 className="text-lg font-semibold text-white mb-2">Networking</h3>
                <p className="text-gray-300 text-sm">
                  Connect with like-minded professionals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LetsConnect;
