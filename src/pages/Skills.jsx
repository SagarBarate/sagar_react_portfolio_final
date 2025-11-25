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

  const getLevelColor = (level) => {
    switch (level) {
      case 'Advanced':
        return 'bg-dark-orange';
      case 'Intermediate':
        return 'bg-orange-600';
      case 'Beginner':
        return 'bg-orange-500/70';
      default:
        return 'bg-gray-500';
    }
  };

  const skillCategories = [
    { title: 'Frontend', key: 'frontend', icon: '🎨' },
    { title: 'Backend', key: 'backend', icon: '⚙️' },
    { title: 'Cloud', key: 'cloud', icon: '☁️' },
    { title: 'DevOps', key: 'devops', icon: '🚀' },
    { title: 'Tools', key: 'tools', icon: '🛠️' },
    { title: 'Databases', key: 'databases', icon: '💾' },
    { title: 'Programming Languages', key: 'languages', icon: '💻' }
  ];

  return (
    <div className="min-h-screen dotted-background">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category) => (
                <Shimmer key={category.key} type="card" className="h-64" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category) => (
                <div
                  key={category.key}
                  className="scroll-card border-3d p-6 transform transition-all duration-300 bg-navy-800/40"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">{category.icon}</span>
                    <h2 className="text-2xl font-bold text-white">
                      {category.title}
                    </h2>
                  </div>
                  
                  <div className="space-y-4">
                    {skills[category.key]?.map((skill, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-white">
                            {skill.name}
                          </span>
                          <span className="text-sm text-orange-400">
                            {skill.level}
                          </span>
                        </div>
                        <div className="w-full bg-navy-900/60 border border-orange-500/30 rounded-full h-3">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${getLevelColor(skill.level)}`}
                            style={{
                              width:
                                skill.level === 'Advanced'
                                  ? '90%'
                                  : skill.level === 'Intermediate'
                                  ? '70%'
                                  : '50%'
                            }}
                          />
                        </div>
                      </div>
                    ))}
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

