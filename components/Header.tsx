import React, { useState } from 'react';
import logo from '../imgs/gsLogo.png';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#vision', label: 'Vision' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#testimonials', label: 'Clients' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

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
  
  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleSmoothScroll(e);
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-gray-900/70 backdrop-blur-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
         <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }}
  className="flex items-center"
>
  <img
    src={logo}
    alt="Logo"
    className="h-10 w-auto object-contain"
  />
</a>
          
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={handleSmoothScroll} className="text-gray-300 hover:text-teal-400 transition-colors duration-300 relative group">
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-center py-2" onClick={handleMobileLinkClick}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;