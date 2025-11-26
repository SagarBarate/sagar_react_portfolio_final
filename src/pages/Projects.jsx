import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectModal from '../components/ProjectModal';
import Shimmer from '../components/Shimmer';
import { projects } from '../data/projects';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({});

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    projects.forEach((project) => {
      const img = new Image();
      img.src = project.image;
      img.onload = () => {
        setImagesLoaded((prev) => ({ ...prev, [project.id]: true }));
      };
    });
  }, []);

  return (
    <div className="min-h-screen dotted-background relative overflow-hidden grid-hover-area">
      <Header />
      
      {/* Animated Grid Background - Darker */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="animated-grid"></div>
      </div>
      
      <div className="pt-24 pb-16 px-4 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 ninja-text">
              My <span className="text-gradient">Projects</span> 📦
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-semibold">
              A collection of projects I've built, showcasing my skills and passion for development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className="project-card overflow-hidden cursor-pointer transform transition-all duration-300 bg-navy-800/40 hover:bg-navy-800/60"
              >
                <div className="relative h-48 overflow-hidden">
                  {!imagesLoaded[project.id] ? (
                    <Shimmer type="image" className="w-full h-full" />
                  ) : (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent" />
                    </>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-navy-900/60 text-white border border-orange-500/40 text-xs font-bold uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-navy-900/40 text-gray-300 border border-orange-500/20 text-xs font-bold">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 kunai-button text-sm"
                      >
                        Live
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 kunai-button text-sm bg-navy-800/60 hover:bg-navy-800/80 text-white border border-orange-500/40"
                      >
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
      
      {/* Separate Footer Section */}
      <div className="mt-16 pt-8 border-t border-white/10">
        <Footer />
      </div>
    </div>
  );
};

export default Projects;

