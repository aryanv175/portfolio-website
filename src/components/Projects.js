import React from 'react';
import MyTrainer from '../assets/project1.png';
import TypeFlex from '../assets/project2.png';
import withScrollAnimation from './withScrollAnimation';

const projects = [
  {
    title: "MyTrainer",
    description: "Fitness focussed IOS & Web Application.",
    link: "https://landing-page-mytrainer.vercel.app/",
    image: MyTrainer
  },
  {
    title: "TypeFlex",
    description: "Chrome extension that helps increase productivity with text replacement.",
    link: "https://github.com/aryanv175/TypeFlex",
    image: TypeFlex
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-161513 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
        {projects.map((project, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black">
            <img className="w-full" src={project.image} alt={project.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{project.title}</div>
              <p className="text-gray-700 text-base">{project.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <a href={project.link} className="bg-black text-white py-2 px-4 rounded">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default withScrollAnimation(Projects, 'fade-in-up');
