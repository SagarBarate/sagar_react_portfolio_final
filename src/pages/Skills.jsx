import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Shimmer from '../components/Shimmer';
import { skills } from '../data/skills';

const Skills = () => {
  const [skillsLoaded, setSkillsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setSkillsLoaded(true), 300);
  }, []);

  // Create interactive mesh squares
  useEffect(() => {
    const meshContainer = document.getElementById('skills-mesh');
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

  const getLevelColor = (level) => {
    switch (level) {
      case 'Advanced':
        return 'bg-white';
      case 'Intermediate':
        return 'bg-gray-400';
      case 'Beginner':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  const skillCategories = [
    { 
      title: 'Languages', 
      key: 'languages', 
      icon: '💻',
      description: 'Programming languages I work with'
    },
    { 
      title: 'Frameworks & Technology', 
      key: 'frameworks', 
      icon: '⚙️',
      description: 'Frameworks and technologies I use'
    },
    { 
      title: 'DevOps & Cloud', 
      key: 'devopsCloud', 
      icon: '☁️',
      description: 'DevOps tools and cloud platforms'
    },
    { 
      title: 'Tools & Utilities', 
      key: 'toolsUtilities', 
      icon: '🛠️',
      description: 'Development tools and utilities'
    }
  ];

  return (
    <div className="min-h-screen projects-mesh-background relative overflow-hidden">
      <Header />
      
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="mesh-cage"></div>
        <div className="interactive-mesh" id="skills-mesh"></div>
      </div>
      
      <div className="pt-24 pb-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 ninja-text">
              My <span className="text-gradient">Skills</span> ⚔️
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-semibold">
              Technologies and tools I work with to build amazing applications
            </p>
          </div>

          {!skillsLoaded ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category) => (
                <Shimmer key={category.key} type="card" className="h-96" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category) => (
                <div
                  key={category.key}
                  className="project-card-white-border overflow-hidden transform transition-all duration-300 bg-navy-800/40"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">{category.icon}</span>
                      <div>
                        <h2 className="text-2xl font-bold text-white">
                          {category.title}
                        </h2>
                        <p className="text-sm text-gray-400 mt-1">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {skills[category.key]?.map((skill, index) => (
                        <div key={index}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-white">
                              {skill.name}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-white">
                                {skill.level}
                              </span>
                              <span className="text-xs text-gray-400">
                                {skill.proficiency}%
                              </span>
                            </div>
                          </div>
                          <div className="w-full bg-navy-900/60 border border-white/30 rounded-full h-3">
                            <div
                              className={`h-full rounded-full transition-all duration-500 ${getLevelColor(skill.level)}`}
                              style={{
                                width: `${skill.proficiency}%`
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
