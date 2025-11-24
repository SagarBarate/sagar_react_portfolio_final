import Header from '../components/Header';
import { skills } from '../data/skills';

const Skills = () => {
  const getLevelColor = (level) => {
    switch (level) {
      case 'Advanced':
        return 'bg-green-500';
      case 'Intermediate':
        return 'bg-blue-500';
      case 'Beginner':
        return 'bg-yellow-500';
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
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 ninja-text">
              My <span className="text-gradient">Skills</span> ⚔️
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-semibold">
              Technologies and tools I work with to build amazing applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.key}
                className="scroll-card glass p-6 transform transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {category.title}
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {skills[category.key]?.map((skill, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-600">
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full bg-gray-300 border-2 border-ninja-black rounded-full h-3">
                        <div
                          className={`h-full rounded-full transition-all duration-500 border-r-2 border-ninja-black ${getLevelColor(skill.level)}`}
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
        </div>
      </div>
    </div>
  );
};

export default Skills;

