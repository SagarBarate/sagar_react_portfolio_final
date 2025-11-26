import SagarBarateCV from '../assets/SagarBarateCV.pdf';

const WorkExperience = () => {
  const experiences = [
    {
      title: 'Application Development Associate',
      company: 'Accenture',
      period: '2021–2023'
    },
    {
      title: 'Application Development Analyst',
      company: 'Accenture',
      period: '2023–2024'
    }
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = SagarBarateCV;
    link.download = 'SagarBarateCV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-6 text-white">Work Experience</h2>
      <div className="space-y-6 mb-8">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="scroll-card border-3d p-6 bg-navy-800/40 hover:bg-navy-800/60 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
            <p className="text-gray-300 mb-2 font-medium">{exp.company}</p>
            <p className="text-sm text-orange-400">{exp.period}</p>
          </div>
        ))}
      </div>
      
      {/* Download CV Button */}
      <button
        onClick={handleDownloadCV}
        className="w-full kunai-button text-center"
      >
        Download CV
      </button>
    </div>
  );
};

export default WorkExperience;

