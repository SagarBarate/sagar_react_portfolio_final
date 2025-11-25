const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-navy-900 scroll-card border-3d max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-dark-orange text-white hover:bg-dark-orange/90 transition-colors rounded-full border border-orange-500/50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4 ninja-text text-white">
            {project.title}
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            {project.description}
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-white">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-navy-800/60 text-white border border-orange-500/40 text-sm font-bold uppercase"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 kunai-button text-center"
              >
                Live Demo
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 kunai-button text-center bg-navy-800/60 hover:bg-navy-800/80 text-white border border-orange-500/40"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

