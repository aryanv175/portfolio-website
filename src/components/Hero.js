import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="text-center py-20 bg-black text-white">
      <div className="flex flex-col items-center">
        <img src="path/to/profile.png" alt="Profile" className="w-32 h-32 rounded-full mb-4" />
        <h1 className="text-5xl font-bold mb-2">I do code and make content <span className="text-pink-500">about it!</span></h1>
        <p className="text-xl mb-8">I am a seasoned full-stack software engineer with over 8 years of professional experience, specializing in backend development.</p>
        <div className="space-x-4">
          <a href="#contact" className="bg-white text-black py-2 px-4 rounded">Get In Touch</a>
          <a href="path/to/cv.pdf" className="bg-white text-black py-2 px-4 rounded">Download CV</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
