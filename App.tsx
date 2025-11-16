import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-gray-900 text-gray-200 font-poppins antialiased relative z-0">
      <CustomCursor />
      <div 
        className="pointer-events-none fixed inset-0 z-[-1] transition duration-300" 
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      ></div>
      <Header />
      <main>
        <Hero />
        <Vision />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;