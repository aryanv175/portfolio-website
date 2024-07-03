import React from 'react';
import withScrollAnimation from './withScrollAnimation';

const experiences = [
  {
    role: "Software Engineer Intern at Studio 9+",
    duration: "June 2024 - Present",
    description: "Built an AI MERN stack tutor application for Coursera courses, increasing student learning by 50%. Developed a robust backend system using Node.js and Express, ensuring high performance and scalability for handling thousands of concurrent users."
  },
  {
    role: "Lead at Google Developer Student Club",
    duration: "Aug 2023 - May 2024",
    description: "Organized meaningful workshops and collaborative info sessions with a focus on inclusivity. Hosted events focused on entrepreneurship, startups, and open-source technologies. Collaborated with a team of engineers dedicated to impacting the emerging student tech community."
  },
  {
    role: "Software Engineer Intern at Fintract Global",
    duration: "Jan 2023 - April 2023",
    description: "Developed Django & Flask-based RESTful APIs for critical functions like bank transfers and currency conversion. Optimized existing APIs, boosting efficiency and performance. Integrated MongoDB for effective database management."
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
};

export default withScrollAnimation(Experience, 'fade-in-up');
