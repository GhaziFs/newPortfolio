import React, { useRef, useEffect, useState } from 'react';
import type { Skill } from '../types';

// SVG Icon Components
const ReactIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-cyan-400"><title>React</title><path fill="currentColor" d="M12.001 2.002c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.415-8.527c-.233.14-.48.28-.73.42-.505.28-1.01.56-1.515.84l.65 2.52c.16.63-.33 1.22-.96 1.22-.32 0-.62-.16-.8-.43l-.62-2.39c-.505.28-1.01.55-1.515.83l.65 2.52c.16.63-.33 1.22-.96 1.22-.32 0-.62-.16-.8-.43l-.62-2.39c-.58.26-1.16.51-1.74.75l.65 2.52c.16.63-.33 1.22-.96 1.22-.32 0-.62-.16-.8-.43l-1.29-4.98c.8-.44 1.59-.88 2.39-1.32l-1.3-5.01c-.16-.63.33-1.22.96-1.22.32 0 .62.16.8.43l1.24 4.79c.74-.3 1.48-.61 2.22-.91l1.24-4.79c.16-.63.6-1.03.96-1.03.63 0 1.12.59 1.12 1.22l-1.3 5.01c.23-.11.46-.22.69-.33l1.24-4.79c.16-.63.6-.96.96-.96.63 0 1.12.59 1.12 1.22l-1.95 7.45c-.23.15-.47.29-.71.43z"/></svg>;
const TypeScriptIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-500"><title>TypeScript</title><path fill="currentColor" d="M1.5 0 h21 v21 h-21 z M3.3 1.8 h17.4 v17.4 h-17.4 z m2.2 2.2 v13 h13 v-13 z m2.2 2.2 h8.8 v2.2 h-3.3 v8.8 h-2.2 v-8.8 h-3.3 z"/></svg>;
const JavaScriptIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-yellow-400"><title>JavaScript</title><path fill="currentColor" d="M0 0h24v24H0V0zm22.034 18.257c.414 1.24-1.102 2.763-2.457 2.763-1.137 0-1.84-.6-1.84-1.488 0-.852.568-1.278 1.524-1.776l.64-.336c.64-.336.712-.528.712-.852 0-.456-.372-.72-.948-.72-.676 0-1.204.3-1.488.984l-1.8-1.08c.528-1.278 1.62-2.058 3.12-2.058 1.56 0 2.568.912 2.568 2.268 0 1.08-.564 1.764-1.488 2.292l-.564.288c-.528.264-.64.48-.64.768 0 .432.3.66.804.66.712 0 1.278-.468 1.524-1.236l1.836.96zm-10.026 2.736c-1.416 0-2.328-.876-2.328-2.052 0-1.236.9-2.064 2.328-2.064 1.416 0 2.292.828 2.292 2.064 0 1.176-.876 2.052-2.292 2.052zm0-1.176c.564 0 .912-.372.912-.876s-.348-.876-.912-.876c-.564 0-.912.372-.912.876s.348.876.912.876z"/></svg>;
const NextJSIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white"><title>Next.js</title><path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.185 17.512l-6.37-11.034h-2.222v11.034h1.833V9.712l4.63 8.02h2.129z"/></svg>;
const TailwindCSSIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-teal-400"><title>Tailwind CSS</title><path fill="currentColor" d="M12.001 2.002c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM8.5 14.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7 7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>;
const HTML5Icon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-orange-600"><title>HTML5</title><path fill="currentColor" d="M1.323 0l1.83 20.72L11.996 24l8.851-3.28L22.68 0H1.323zM19.34 7.647l-.203-2.29h-12.28l.407 4.58h7.82l-.28 3.15-2.14.59-2.14-.59-.14-1.57H7.72l.27 3.05 3.99 1.1 3.99-1.1.4-4.49h-8.08l-.34-3.83h8.76l.202-2.29z"/></svg>;
const CSS3Icon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-500"><title>CSS3</title><path fill="currentColor" d="M1.323 0l1.83 20.72L11.996 24l8.851-3.28L22.68 0H1.323zM18.45 7.647h-8.08l.203-2.29h7.674l.203 2.29zm-.47 4.58h-4.08l.202 2.29h3.675l-.27 3.05-2.14.59-2.14-.59-.14-1.57h-1.8l.27 3.05 3.99 1.1 3.99-1.1.4-4.49z"/></svg>;
const NodeJSIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-green-500"><title>Node.js</title><path fill="currentColor" d="M11.75 0C5.26 0 0 5.25 0 11.75c0 6.49 5.26 11.75 11.75 11.75 6.49 0 11.75-5.26 11.75-11.75C23.5 5.25 18.24 0 11.75 0zm6.75 18.25c-1 1.62-2.87 2.5-4.87 2.5-2 0-3.87-.87-4.87-2.5-1-1.63-1.25-3.63-1.25-5.63s.25-4 1.25-5.62c1-1.63 2.87-2.5 4.87-2.5 2 0 3.87.87 4.87 2.5 1 1.62 1.25 3.62 1.25 5.62s-.25 4-1.25 5.63z"/></svg>;
const ExpressIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-gray-300"><title>Express</title><path fill="currentColor" d="M24 14.57.002 9.426l.006 4.053L24 14.57zM.002 4.852l23.996-4.85L24 3.787.002 8.636zM0 15.697l23.993-5.26.007 3.785L0 19.482z"/></svg>;
const RESTAPIIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10m16-10v10M9 4h6m-6 16h6m-3-16v16" /></svg>;
const GraphQLIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-pink-500"><title>GraphQL</title><path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM6.5 12a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0zm11.905-3.153l-4.252 4.252 2.126 2.126-1.414 1.414-2.126-2.126-2.126 2.126L8.25 15.25l2.126-2.126-4.252-4.252 1.414-1.414 4.252 4.252 4.252-4.252z"/></svg>;
const GitIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-red-500"><title>Git</title><path fill="currentColor" d="M23.5,8.39,15.6,0.5a1.72,1.72,0,0,0-2.45,0L9.43,4.22l2.12,2.12,3.34-3.34,5.4,5.4L17,11.75,14.88,9.63,12.06,12.5a3.89,3.89,0,0,0-1.13,2.75v6.5a1.71,1.71,0,0,0,1.71,1.71H18a1.71,1.71,0,0,0,1.71-1.71v-6.5a3.89,3.89,0,0,0-1.13-2.75L15.73,9.6,18.6,6.73l4.9,4.9ZM5.12,12.5a3.89,3.89,0,0,0,1.13-2.75L9.12,6.88a3.89,3.89,0,0,0-1.13-2.75L5.12,1.26a1.72,1.72,0,0,0-2.45,0L.5,3.43a1.72,1.72,0,0,0,0,2.45L5.12,10.5Z"/></svg>;
const GitHubIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white"><title>GitHub</title><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z"/></svg>;
const WebpackIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-300"><title>Webpack</title><path fill="currentColor" d="M22.007 18.156l-9.31-5.374v-5.21l9.31-5.375 1.37 2.373v10.84l-1.37 2.373zm-10.68-5.374L1.993 7.408l1.37-2.374 9.324 5.385v5.21L3.363 20.53l-1.37-2.374zM12.002 24l-9.94-5.74v-11.48L12.002 1.04l9.94 5.74v11.48z"/></svg>;
const FigmaIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10"><title>Figma</title><path fill="#F24E1E" d="M12 24a6 6 0 0 1-6-6v-6a6 6 0 0 1 6-6h6a6 6 0 1 1 0 12h-6z"/><path fill="#FF7262" d="M6 18a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6h6a6 6 0 1 1 0 12H6z"/><path fill="#A259FF" d="M6 6a6 6 0 0 1 6-6h6a6 6 0 0 1 0 12h-6a6 6 0 0 1-6-6z"/><path fill="#1ABCFE" d="M18 6a6 6 0 1 1-12 0 6 6 0 0 1 12 0z"/><path fill="#0ACF83" d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"/></svg>;
const JestIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-red-700"><title>Jest</title><path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c2.035 0 3.94-.508 5.6-1.424l-1.28-1.28c-1.312.6-2.778.934-4.32.934-4.41 0-8-3.59-8-8s3.59-8 8-8c3.078 0 5.772 1.744 7.07 4.256L17.5 9.812V6.5h2v6h-6.5V11h3.047c-.99-2.028-3.036-3.5-5.547-3.5-3.308 0-6 2.692-6 6s2.692 6 6 6c1.654 0 3.14-.672 4.242-1.758L18.364 16.364C16.544 18.184 14.28 19.333 11.75 19.333c-4.41 0-8-3.59-8-8s3.59-8 8-8c1.378 0 2.673.35 3.805.95l1.43-1.43A9.932 9.932 0 0012 2C7.59 2 4 5.59 4 10c0 2.21 1.79 4 4 4h4c2.21 0 4-1.79 4-4 0-3.308-2.692-6-6-6z"/></svg>;
const MongoDBIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-green-600"><title>MongoDB</title><path fill="currentColor" d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M12,21.6c-5.302,0-9.6-4.298-9.6-9.6 s4.298-9.6,9.6-9.6s9.6,4.298,9.6,9.6S17.302,21.6,12,21.6z M12.5,9.5c0-1.5-1-2.5-2.5-2.5s-2.5,1-2.5,2.5s1,2.5,2.5,2.5 S12.5,11,12.5,9.5z M14,14c-1,1.5-2.5,2-4,1.5c-1.5-0.5-2.5-2-2.5-3.5c0-1.5,1-2.5,2.5-2.5c1.5,0,2.5,1,2.5,2.5c0,0.5-0.5,1-1,1 s-1-0.5-1-1c0-0.5-0.5-1-1-1s-1,0.5-1,1c0,1,0.5,1.5,1.5,2c1,0.5,2,0,2.5-1C13.5,13.5,14.5,13,14,14z"/></svg>;
const ViteIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10"><title>Vite</title><path fill="#646CFF" d="M18.4,1.3L12,11.2L5.6,1.3A1.4,1.4,0,0,0,4.2,0H1.5A1.4,1.4,0,0,0,0,1.5,1.4,1.4,0,0,0,1,3l11,19.1a1.4,1.4,0,0,0,2.4,0L23,3a1.4,1.4,0,0,0,.1-1.6A1.4,1.4,0,0,0,22.5,0h-2.7a1.4,1.4,0,0,0-1.4,1.3Z"/><path fill="#FFD028" d="M23.9,2.6l-6.5,11.2a1.4,1.4,0,0,1-2.4,0L8.4,2.6a1.4,1.4,0,0,1,0-1.3h14.1a1.4,1.4,0,0,1,1.4,1.3Z"/></svg>;


const skillsData: Skill[] = [
    { name: 'React', category: 'Frontend', icon: <ReactIcon /> },
    { name: 'TypeScript', category: 'Frontend', icon: <TypeScriptIcon /> },
    { name: 'JavaScript (ES6+)', category: 'Frontend', icon: <JavaScriptIcon /> },
    { name: 'Next.js', category: 'Frontend', icon: <NextJSIcon /> },
    { name: 'Tailwind CSS', category: 'Frontend', icon: <TailwindCSSIcon /> },
    { name: 'HTML5', category: 'Frontend', icon: <HTML5Icon /> },
    { name: 'CSS3', category: 'Frontend', icon: <CSS3Icon /> },
    { name: 'Node.js', category: 'Backend', icon: <NodeJSIcon /> },
    { name: 'Express', category: 'Backend', icon: <ExpressIcon /> },
    { name: 'REST APIs', category: 'Backend', icon: <RESTAPIIcon /> },
    { name: 'GraphQL', category: 'Backend', icon: <GraphQLIcon /> },
    { name: 'MongoDB', category: 'Backend', icon: <MongoDBIcon /> },
    { name: 'Git', category: 'Tools', icon: <GitIcon /> },
    { name: 'GitHub', category: 'Tools', icon: <GitHubIcon /> },
    { name: 'Webpack', category: 'Tools', icon: <WebpackIcon /> },
    { name: 'Jest', category: 'Tools', icon: <JestIcon /> },
    { name: 'Vite', category: 'Tools', icon: <ViteIcon /> },
    { name: 'Figma', category: 'Design', icon: <FigmaIcon /> },
];

const categories = ['Frontend', 'Backend', 'Tools', 'Design'] as const;

const SkillCard: React.FC<{ skill: Skill; isVisible: boolean; index: number }> = ({ skill, isVisible, index }) => (
  <div 
    className={`relative group flex justify-center items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/50 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
    style={{ transitionDelay: `${index * 50}ms` }}
  >
    {skill.icon}
    <div className="absolute bottom-full mb-2 w-max px-3 py-1.5 bg-gray-900 border border-gray-700 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
        {skill.name}
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-gray-700"></div>
    </div>
  </div>
);


const Skills: React.FC = () => {
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
      id="skills" 
      ref={sectionRef} 
      className={`py-20 bg-transparent transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-16 blur-md'}`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            My Technical Skills
          </span>
        </h2>
        <div className="flex flex-col space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">{category}</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                {skillsData
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} isVisible={isVisible} index={index}/>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;