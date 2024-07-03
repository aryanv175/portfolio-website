import React from 'react';
import { FaJs, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiHtml5, SiCss3 } from 'react-icons/si';

const ExperienceSection = () => {
  const technologies = [
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <SiHtml5 />, name: 'HTML5' },
    { icon: <SiCss3 />, name: 'CSS3' },
    { icon: <FaReact />, name: 'React' },
  ];

  return (
    <section className="py-16 bg-161513 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-8">EXPERIENCE WITH</h2>
        <div className="relative overflow-hidden">
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-161513 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-161513 to-transparent z-10"></div>
          <div className="flex animate-scroll space-x-20 whitespace-nowrap py-4">
            {[...technologies, ...technologies].map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-5xl mb-2 transition-transform duration-300 hover:scale-110">
                  {tech.icon}
                </div>
                <span className="text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;