import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import HeroImage from '../assets/hero.png';

const Hero = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const slideDown = useSpring({
    from: { transform: 'translateY(-50px)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
    config: config.molasses,
  });

  const scaleIn = useSpring({
    from: { transform: 'scale(0.8)', opacity: 0 },
    to: { transform: 'scale(1)', opacity: 1 },
    config: config.wobbly,
  });

  return (
    <animated.section id="home" className="text-center py-20 bg-161513 text-white" style={fadeIn}>
      <div className="flex flex-col items-center">
        <animated.img src={HeroImage} alt="Profile" className="w-48 h-48 rounded-full mb-12" style={scaleIn} />
        <animated.h1 className="text-5xl font-bold marginb-40" style={slideDown}>
          I do code and make content <span className="gradient-text">about it!</span>
        </animated.h1>
        <animated.p className="text-xl text-C5C5C5 mb-14" style={slideDown}>
          I am a seasoned full-stack software engineer with over 8 years of professional experience, specializing in backend development.
        </animated.p>
        <animated.div className="space-x-4" style={scaleIn}>
          <a 
            href="#contact" 
            className="bg-white text-black py-4 px-8 font-semibold border-2 border-white hover:bg-black hover:text-white transition-colors duration-300" 
            style={{ borderRadius: '50px' }}
          >
            Get In Touch
          </a>
          <a 
            href="path/to/cv.pdf" 
            className="bg-161513 text-white py-4 px-8 rounded-50 font-semibold border-2 border-white hover:bg-white hover:text-black transition-colors duration-300" 
            download
          >
            Download CV
          </a>
        </animated.div>
      </div>
    </animated.section>
  );
}

export default Hero;