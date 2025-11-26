import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Shimmer from '../components/Shimmer';
import SagarBaratePIC from '../assets/SagarBaratePIC.png';

const About = () => {
  const [profileImageLoaded, setProfileImageLoaded] = useState(false);
  const [textLoaded, setTextLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = SagarBaratePIC;
    img.onload = () => setProfileImageLoaded(true);
    
    // Simulate text loading
    setTimeout(() => setTextLoaded(true), 300);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#0A1929' }}>
      {/* Static Solid Dots Background */}
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 2px, transparent 2px)',
        backgroundSize: '30px 30px',
        backgroundPosition: '0 0',
        backgroundRepeat: 'repeat',
      }}></div>
      
      <Header />
      
      <div className="pt-24 pb-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="glass scroll-card border-2 border-white/50 p-8 md:p-12 bg-navy-800/40">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Profile Photo - Circular with Orange Background matching Landing page */}
              <div className="flex justify-center md:justify-start items-center">
                <div className="relative w-72 h-72 md:w-[22rem] md:h-[22rem] lg:w-96 lg:h-96 flex items-center justify-center">
                  {/* Orange Background Circle */}
                  <div className="absolute inset-6 md:inset-7 rounded-full bg-gradient-to-br from-dark-orange/80 to-ninja-orange/80 z-10 shadow-2xl"></div>
                  
                  {/* Profile Image Container */}
                  {!profileImageLoaded ? (
                    <div className="absolute inset-8 md:inset-9 rounded-full overflow-hidden z-20">
                      <Shimmer type="profile" className="w-full h-full rounded-full" />
                    </div>
                  ) : (
                    <div className="absolute inset-8 md:inset-9 rounded-full profile-image-container overflow-hidden z-20">
                      <img
                        src={SagarBaratePIC}
                        alt="Profile"
                        className="relative z-10 w-full h-full object-cover rounded-full border-2 border-white shadow-xl"
                        onLoad={() => setProfileImageLoaded(true)}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Introduction */}
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 ninja-text text-white">
                  About Me
                </h1>
                {!textLoaded ? (
                  <div className="space-y-4">
                    <Shimmer type="text" className="w-full h-4" />
                    <Shimmer type="text" className="w-full h-4" />
                    <Shimmer type="text" className="w-3/4 h-4" />
                    <Shimmer type="text" className="w-full h-4 mt-6" />
                    <Shimmer type="text" className="w-full h-4" />
                    <Shimmer type="text" className="w-5/6 h-4" />
                    <Shimmer type="text" className="w-full h-4 mt-6" />
                    <Shimmer type="text" className="w-full h-4" />
                    <Shimmer type="text" className="w-4/5 h-4" />
                  </div>
                ) : (
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Hello! I'm Sagar, a passionate full-stack developer with a love for creating 
                      innovative solutions and bringing ideas to life through code. My journey in 
                      software development started with curiosity and has evolved into a career 
                      focused on building scalable, user-friendly applications.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      I specialize in modern web technologies and cloud platforms, always staying 
                      up-to-date with the latest trends and best practices. Whether it's crafting 
                      beautiful user interfaces or architecting robust backend systems, I approach 
                      every project with attention to detail and a commitment to excellence.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      When I'm not coding, you can find me exploring new technologies, contributing 
                      to open-source projects, or sharing knowledge through blog posts and 
                      community engagement. I believe in continuous learning and helping others 
                      grow in their development journey.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Social Links Section - Smaller, Clean */}
            <div className="mt-12 pt-8 border-t border-orange-500/30">
              <div className="flex flex-col items-center gap-4">
                <div className="flex gap-4 justify-center">
                  <a
                    href="https://www.linkedin.com/in/sagar-barate-6b22041b3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border-2 border-orange-500/40 rounded-full hover:bg-dark-orange hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/SagarBarate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border-2 border-orange-500/40 rounded-full hover:bg-dark-orange hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="https://leetcode.com/u/Sagarbarate/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border-2 border-orange-500/40 rounded-full hover:bg-dark-orange hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s.357.195.824.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.365-.037-1.9-.535-.535-1.386-.553-1.899-.039l-4.319 4.38c-.467.467-.702 1.15-.702 1.863s.235 1.357.702 1.824l4.332 4.363c.467.467 1.111.662 1.824.662s1.357-.195 1.823-.662l2.697-2.607c.514-.515 1.365-.497 1.899.038.535.536.553 1.387.039 1.901zm9.603-4.317a11.815 11.815 0 0 1-.87 4.123 12.02 12.02 0 0 1-3.269 4.893 12.136 12.136 0 0 1-4.863 2.94 12.32 12.32 0 0 1-5.393.536 11.898 11.898 0 0 1-4.74-1.728 12.076 12.076 0 0 1-4.012-4.412 11.815 11.815 0 0 1-1.728-4.74c-.195-1.9.039-3.777.662-5.536a12.02 12.02 0 0 1 2.94-4.863 12.136 12.136 0 0 1 4.893-3.269c1.9-.623 3.777-.857 5.536-.662a11.898 11.898 0 0 1 4.74 1.728 12.076 12.076 0 0 1 4.412 4.012c.857 1.365 1.442 2.87 1.728 4.412.195 1.365.195 2.73 0 4.095z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.hackerrank.com/profile/sagarbarate2907"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border-2 border-orange-500/40 rounded-full hover:bg-dark-orange hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c1.285 0 9.75 2.25 9.75 11.25S13.285 22.5 12 22.5s-9.75-2.25-9.75-11.25S10.715 0 12 0zm0 20.25c2.925 0 7.5-1.425 7.5-9 0-7.575-4.575-9-7.5-9S4.5 3.675 4.5 11.25c0 7.575 4.575 9 7.5 9zm-1.125-18c0 .375-.375.75-.75.75s-.75-.375-.75-.75.375-.75.75-.75.75.375.75.75zm2.25 3c0 .375-.375.75-.75.75s-.75-.375-.75-.75.375-.75.75-.75.75.375.75.75zm-4.5 3c0 .375-.375.75-.75.75s-.75-.375-.75-.75.375-.75.75-.75.75.375.75.75zm9 0c0 .375-.375.75-.75.75s-.75-.375-.75-.75.375-.75.75-.75.75.375.75.75zm-6.75 3c0 .375-.375.75-.75.75s-.75-.375-.75-.75.375-.75.75-.75.75.375.75.75zm4.5 0c0 .375-.375.75-.75.75s-.75-.375-.75-.75.375-.75.75-.75.75.375.75.75zm-4.5 3c0 .375-.375.75-.75.75s-.75-.375-.75-.75.375-.75.75-.75.75.375.75.75zm4.5 0c0 .375-.375.75-.75.75s-.75-.375-.75-.75.375-.75.75-.75.75.375.75.75z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

