import React, { useRef, useEffect, useState } from 'react';
import type { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
  {
    quote: "I recently had the pleasure of working with Ghazi to design and program our website, and we couldn't be more impressed with the results. His attention to detail, creativity, and technical expertise reflect through every step of the process. In addition to offer valuable insights and suggestions to our website.",
    name: 'Ayman Alsharif',
    title: 'Jathwah CEO',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    quote: "I would like to highly recommend Ghazi as an outstanding front-end developer. I had the pleasure of working with him on a project, and he demonstrated exceptional skills in designing and developing user interfaces. Ghazi has a deep understanding of user experience design principles and has the ability to transform complex ideas into smooth, user-friendly interfaces. His attention to detail and ability to work under pressure made him a valuable asset to our team.",
    name: 'Salwa Ibrahim',
    title: 'KnowledgeX team',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial; isVisible: boolean; index: number }> = ({ testimonial, isVisible, index }) => (
    <div 
      className={`bg-gray-800/50 p-8 rounded-lg border border-gray-700 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
        <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4 border-2 border-teal-400" />
        <p className="text-gray-300 italic mb-6 flex-grow">"{testimonial.quote}"</p>
        <div>
          <div className="font-bold text-white">{testimonial.name}</div>
          <div className="text-sm text-teal-400">{testimonial.title}</div>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
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
      id="testimonials" 
      ref={sectionRef} 
      className={`py-20 bg-transparent transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-16 blur-md'}`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            What My Clients Say
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} isVisible={isVisible} index={index}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;