import React from 'react';

const experiences = [
  {
    role: "Lead Software Engineer at Google",
    duration: "Nov 2018 - Present",
    description: "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google’s core search algorithms."
  },
  {
    role: "Junior Software Engineer at Apple",
    duration: "Jan 2016 - Dec 2017",
    description: "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects."
  },
  {
    role: "Software Engineer at Meta",
    duration: "Jan 2017 - Oct 2018",
    description: "At Meta, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-161513 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">{exp.role}</h3>
              <span className="text-gray-500">{exp.duration}</span>
            </div>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
