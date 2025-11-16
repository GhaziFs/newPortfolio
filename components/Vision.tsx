import React, { useRef, useEffect, useState } from 'react';

const visionData = [
   {
        image: '../imgs/ghaziDev.jpg',
        title: 'Identity',
        description: 'Developer: Ghazi'
    },
    {
        image: '../imgs/design.jpg',
        title: 'Core Process',
        description: 'Analysis, Planning, Design'
    },
   
    {
        image: '../imgs/id.jpg',
        title: 'Driving Force',
        description: 'Passion, creativity, achievement'
    }
];

const Vision: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="vision" 
      ref={sectionRef}
      className={`py-20 bg-transparent transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-16 blur-md'}`}
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
             Vision
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-12">
            A glimpse into my creative journey
        </p>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            {visionData.map((item, index) => (
                 <div 
                    key={index}
                    className={`group bg-gray-800/30 rounded-lg border border-gray-700 overflow-hidden transition-all duration-500 hover:border-teal-500 hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;