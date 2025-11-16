import React, { useRef, useEffect, useState } from 'react';
import type { Service } from '../types';

const WebDevIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

const UiUxIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
    </svg>
);

const PerformanceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const servicesData: Service[] = [
  {
    icon: <WebDevIcon />,
    title: 'Frontend Development',
    description: 'Building modern, responsive, and scalable web applications using React, TypeScript, and the latest web technologies.',
  },
  {
    icon: <UiUxIcon />,
    title: 'UI/UX Design & Implementation',
    description: 'Designing intuitive user interfaces and bringing them to life with clean, efficient code and pixel-perfect attention to detail.',
  },
  {
    icon: <PerformanceIcon />,
    title: 'Performance Optimization',
    description: 'Analyzing and improving website performance to ensure fast load times and a smooth user experience, enhancing user engagement.',
  },
];

const ServiceCard: React.FC<{ service: Service; isVisible: boolean; index: number }> = ({ service, isVisible, index }) => (
    <div 
      className={`bg-gray-800/50 p-8 rounded-lg border border-gray-700 transition-all duration-500 hover:border-teal-500 hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
        <div className="text-teal-400 mb-4">{service.icon}</div>
        <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
        <p className="text-gray-400">{service.description}</p>
    </div>
);

const Services: React.FC = () => {
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
      id="services" 
      ref={sectionRef} 
      className={`py-20 bg-gray-900/50 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-16 blur-md'}`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            Services I Offer
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} isVisible={isVisible} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;