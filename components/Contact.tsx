import React, { useRef, useEffect, useState } from 'react';

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);


const Contact: React.FC = () => {
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
    <footer 
      id="contact" 
      ref={sectionRef} 
      className={`bg-gray-900/50 py-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-16 blur-md'}`}
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            Get In Touch
          </span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to say hello, feel free to reach out. Let's build something amazing together!
        </p>
        <a href="mailto:suruji.188@gmail.com" className="inline-block bg-teal-500 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-teal-500/20 mb-8">
          Say Hello
        </a>
        <div className="flex justify-center items-center flex-wrap gap-x-8 gap-y-4 mb-12">
            <a href="mailto:suruji.188@gmail.com" className="flex items-center space-x-3 text-gray-300 hover:text-teal-400 transition-colors duration-300 group">
                <EmailIcon />
                <span className="group-hover:underline">suruji.188@gmail.com</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors" aria-label="LinkedIn">
                <LinkedInIcon />
            </a>
        </div>
        <div className="border-t border-gray-800 pt-6">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Ghazi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;