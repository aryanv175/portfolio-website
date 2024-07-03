import React from 'react';
import HeroImage from '../assets/hero.png';

const Hero = () => {
  return (
      <section id="home" className="text-center py-20 bg-161513 text-white">
        <div className="flex flex-col items-center">
          <img src={HeroImage} alt="Profile" className="w-48 h-48 rounded-full mb-12" />
          <h1 className="text-5xl font-bold marginb-40">
            I do code and make content <span className="gradient-text">about it!</span>
          </h1>
          <p className="text-xl text-C5C5C5 marginb-40">
            I am a seasoned full-stack software engineer with over 8 years of professional experience, specializing in backend development.
          </p>
          <div className="space-x-4">
            <a href="#contact" className="bg-white text-black py-4 px-8 font-semibold border-2 border-white" style={{ borderRadius: '50px' }}>
              Get In Touch
            </a>
            <a href="path/to/cv.pdf" className="bg-black text-white py-4 px-8 rounded-50 font-semibold border-2 border-white" download>
              Download CV
            </a>
          </div>
        </div>
      </section>
  );
}

export default Hero;
