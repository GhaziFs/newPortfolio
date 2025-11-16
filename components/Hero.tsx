import React from 'react';

const Hero: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
        behavior: 'smooth',
    });
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-700/20 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-6 text-center z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight animate-fadeInUp opacity-0">
                <span className="block mb-2">Hello there! 👋 I'm Ghazi</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
                    Passionate & Creative Web Developer
                </span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8 animate-fadeInUp opacity-0 animation-delay-300">
                A passionate and creative web developer with a sharp eye for design and a love for crafting digital experiences that leave a lasting impression, constantly honing my skills and staying on top of industry trends.
            </p>
            <a href="#projects" onClick={handleSmoothScroll} className="bg-teal-500 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-teal-500/20 animate-fadeInUp opacity-0 animation-delay-600">
                View My Work
            </a>
        </div>
        <style>{`
            .animate-blob {
                animation: blob 7s infinite;
            }
            .animation-delay-2000 {
                animation-delay: -2s;
            }
            .animation-delay-4000 {
                animation-delay: -4s;
            }
            @keyframes blob {
                0% { transform: translate(0px, 0px) scale(1); }
                33% { transform: translate(30px, -50px) scale(1.1); }
                66% { transform: translate(-20px, 20px) scale(0.9); }
                100% { transform: translate(0px, 0px) scale(1); }
            }
            .animate-fadeInUp {
                animation: fadeInUp 0.8s ease-out forwards;
            }
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            .animation-delay-300 {
                animation-delay: 300ms;
            }
            .animation-delay-600 {
                animation-delay: 600ms;
            }
        `}</style>
    </section>
  );
};

export default Hero;