import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Shimmer from '../components/Shimmer';
import { caseStudies } from '../data/caseStudies';

const CaseStudies = () => {
  const [imagesLoaded, setImagesLoaded] = useState({});

  useEffect(() => {
    caseStudies.forEach((study) => {
      const img = new Image();
      img.src = study.image;
      img.onload = () => {
        setImagesLoaded((prev) => ({ ...prev, [study.id]: true }));
      };
    });
  }, []);

  return (
    <div className="min-h-screen dotted-background">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 ninja-text">
              Case <span className="text-gradient">Studies</span> 📜
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-semibold">
              Real-world projects and solutions I've delivered, showcasing problem-solving and technical expertise
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="scroll-card border-3d overflow-hidden transform transition-all duration-300 bg-navy-800/40"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    {!imagesLoaded[study.id] ? (
                      <Shimmer type="image" className="w-full h-64 md:h-full" />
                    ) : (
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    )}
                  </div>
                  
                  <div className="md:w-2/3 p-6 md:p-8">
                    <h2 className="text-3xl font-bold mb-4 text-white">
                      {study.title}
                    </h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {study.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2 text-white">
                        Challenge
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {study.challenge}
                      </p>

                      <h3 className="text-lg font-semibold mb-2 text-white">
                        Solution
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {study.solution}
                      </p>

                      <h3 className="text-lg font-semibold mb-2 text-white">
                        Results
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-300">
                        {study.results.map((result, index) => (
                          <li key={index}>{result}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {study.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-navy-900/60 text-white border border-orange-500/40 text-sm font-bold uppercase"
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
              <p className="text-gray-300 text-lg">
                No case studies yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudies;

