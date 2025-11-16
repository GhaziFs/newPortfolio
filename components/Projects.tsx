import React, { useRef, useEffect, useState } from 'react';
import type { Project } from '../types';
import qoute from '../imgs/qoute.png';
import knowledgeX from '../imgs/kx.png';
import jathwah from '../imgs/Jathwah.2a2058d77e1d329762a6.png'; 
import kerneltcs from '../imgs/ker.png'; 
import daralrahmah from '../imgs/daralrahmah.svg';
import alkashaf from '../imgs/alkashaf.png';
import discoverMakkah from '../imgs/discoverMakkah.png';
import story from '../imgs/story.png';
import todo from '../imgs/todo.png';
import report from '../imgs/report.png';
import wadiMakkah from '../imgs/wadiMakkah.png';


// Icons for Projects
const EcommerceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);
const DashboardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

const AIIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657L13.414 14.414m5.657-5.657L14.828 9.172" />
    </svg>
);


const projectsData: Project[] = [
  {
    image: discoverMakkah ,
    title: 'Discover Makkah',
    description: 'A graduation project website to guide visitors in Makkah, with instructions, services, APIs for weather, time, currency, and a helpful chatbot.',
    tags: [],
    liveUrl: 'https://drive.google.com/drive/folders/1xyuEE6HOsnqzjFXB77P6gjvvcFxkHGdx',
    repoUrl: '#',
  },
  {
    image: jathwah ,
    title: 'Jathwah',
    description: 'A client website for the Jathwah team, detailing their mission, services, portfolio, and contact information.',
    tags: [],
    liveUrl: 'https://www.jathwah.sa/',
    repoUrl: '#',
  },
  {
    image: daralrahmah ,
    title: 'Dar Alrahamah',
    description: 'A uniquely designed client website for Dar Al-Rahma Real Estate, showcasing their offerings, projects, stats, and services.',
    tags: [],
    liveUrl: 'https://drconsultancy.sa/',
    repoUrl: '#',
  },
  {
    image: alkashaf ,
    title: 'Alkashaf',
    description: "An intelligent lexicon blog website that reveals word meanings across over 35,000 entries, compiled from major Arabic dictionaries.",
    tags: [],
    liveUrl: 'https://blogs.alkashaf.com/',
    repoUrl: '#',
  },
  {
    image: knowledgeX ,
    title: 'KnowledgeX',
    description: 'A bilingual (Arabic/English) client website explaining the company\'s identity, offerings, and programs.',
    tags: [],
    liveUrl: '#https://github.com/Ghazi18',
    repoUrl: '#',
  },
  {
    image: qoute ,
    title: 'Get your quote',
    description: 'A personal project that generates random quotes from influential people, with an option to share on social media.',
    tags: [],
    liveUrl: 'https://get-quote-test.netlify.app/',
    repoUrl: '#',
  },
  
  
  {
    image: kerneltcs ,
    title: 'Osul website',
    description: 'A real estate project in Saudi Arabia developed with the Kerneltics team, where I served as project manager and front-end developer.',
    tags: [],
    liveUrl: 'https://osol.kerneltics.com/',
    repoUrl: '#',
  },
  {
    image: kerneltcs ,
    title: 'Photographer portfolio',
    description: 'A professional portfolio website for a photographer, developed with the Kerneltics team where I acted as PM and front-end developer.',
    tags: [],
    liveUrl: 'https://photographer.kerneltics.com/',
    repoUrl: '#',
  },
  {
    image: report ,
    title: 'Page for displaying reports',
    description: 'A contribution to the Nusuk Cards project for the Hajj season, creating a clear, attractive, and fast report visualization page.',
    tags: [],
    liveUrl: 'https://reports1.vercel.app/',
    repoUrl: '#',
  },
  {
    image: todo ,
    title: 'To do list',
    description: 'A personal task management project (To-Do-List) with add, edit, delete functionality, separating tasks into completed and unfinished.',
    tags: [],
    liveUrl: 'https://ghazi-todo-app-tset.netlify.app/',
    repoUrl: '#',
  },
 
 
  {
    image: wadiMakkah ,
    title: 'Wadi Makkah page',
    description: 'A training project to design and create the Wadi Makkah company website pages with new ideas and a suitable design.',
    tags: [],
    liveUrl: 'https://summertrainner.wmitproj.com/#',
    repoUrl: '#',
  },

  {
    image: story ,
    title: 'Share your story',
    description: 'A platform for users to publish their creative stories with a title and name. A like system highlights the most popular entries.',
    tags: [],
    liveUrl: '#https://github.com/Ghazi18',
    repoUrl: '#',
  },
 
];

const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.218.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .266.18.577.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
    </svg>
);


const ProjectCard: React.FC<{ project: Project; isVisible: boolean; index: number }> = ({ project, isVisible, index }) => (
  <div 
    className={`bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 group transition-all duration-500 hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-500/10 hover:-translate-y-2 flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    style={{ transitionDelay: `${index * 150}ms` }}
  >
    <div className="h-48 bg-gray-800 flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-gray-700/20 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_80%)]"></div>
      
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {typeof project.image === 'string' ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="transform transition-transform duration-500 group-hover:scale-110">
            {project.image}
          </div>
        )}
      </div>
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
      <p className="text-gray-400 mb-4 text-sm flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="bg-teal-500/10 text-teal-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <div className="flex items-center space-x-4 mt-auto">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-teal-400 transition-colors">
            <ExternalLinkIcon /> <span>Visit Project</span>
          </a>
        )}
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-teal-400 transition-colors">
            <GithubIcon /> <span>GitHub</span>
          </a>
        )}
      </div>
    </div>
  </div>
);



const Projects: React.FC = () => {
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
      id="projects" 
      ref={sectionRef} 
      className={`py-20 bg-gray-900/50 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-16 blur-md'}`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            My Projects
          </span>
        </h2>
        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
          Here are some of my previous projects and work! Do you have some questions about these projects? Feel free to contact me.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} isVisible={isVisible} index={index}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;