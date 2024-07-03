import React from 'react';

const Hero = () => {
  return (
    <div className="max-w-810px mx-auto px-4">
      <section id="home" className="text-center py-20 bg-black text-white">
        <div className="flex flex-col items-center">
          <img src="path/to/profile.png" alt="Profile" className="w-32 h-32 rounded-full mb-4" />
          <h1 className="text-5xl font-bold mb-2">
            I do code and make content <span className="gradient-text">about it!</span>
          </h1>
          <p className="text-xl mb-8">
            I am a seasoned full-stack software engineer with over 8 years of professional experience, specializing in backend development.
          </p>
          <div className="space-x-4">
            <a href="#contact" className="bg-white text-black py-2 px-4" style={{ borderRadius: '50px' }}>
              Get In Touch
            </a>
            <a href="path/to/cv.pdf" className="bg-white text-black py-2 px-4 rounded-50" download>
              Download CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
