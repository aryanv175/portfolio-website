import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ExperienceWith from './components/ExperienceWith';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="bg-161513 min-h-screen">
      <Header />
      <div className="max-w-810px mx-auto px-4">
        <Hero />
        <ExperienceWith />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
