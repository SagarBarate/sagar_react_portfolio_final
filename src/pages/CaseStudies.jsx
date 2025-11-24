import Header from '../components/Header';
import { caseStudies } from '../data/caseStudies';

const CaseStudies = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 ninja-text">
              Case <span className="text-gradient">Studies</span> 📜
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-semibold">
              Real-world projects and solutions I've delivered, showcasing problem-solving and technical expertise
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="scroll-card glass overflow-hidden transform transition-all duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  
                  <div className="md:w-2/3 p-6 md:p-8">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">
                      {study.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {study.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">
                        Challenge
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {study.challenge}
                      </p>

                      <h3 className="text-lg font-semibold mb-2 text-gray-900">
                        Solution
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {study.solution}
                      </p>

                      <h3 className="text-lg font-semibold mb-2 text-gray-900">
                        Results
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {study.results.map((result, index) => (
                          <li key={index}>{result}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {study.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-ninja-orange/20 text-ninja-orange border border-ninja-orange text-sm font-bold uppercase"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {caseStudies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No case studies yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;

