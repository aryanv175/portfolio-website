import React from 'react';

const Project = ({ title, description, link, image }) => {
  return (
    <section className="bg-black text-white py-10">
      <h3 className="text-3xl font-bold mb-4">{title}</h3>
      <p className="text-lg mb-4">{description}</p>
      <a href={link} className="text-blue-400">Learn more</a>
      <img src={image} alt={title} className="mt-4" />
    </section>
  );
}

export default Project;
