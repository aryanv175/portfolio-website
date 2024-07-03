import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const Intro = () => {
  return (
    <section className="text-center py-20 bg-black text-white">
      <h2 className="text-5xl font-bold mb-4">
        <ReactTypingEffect
          text="Hi, I'm Aryan."
          typingDelay={50}
          eraseDelay={1000000} // effectively prevent erasing
        />
      </h2>
      <p className="text-xl mb-8">
        A computer science and engineering senior with a passion for solving problems by developing software. 
        With a keen interest in technology, I am dedicated to creating powerful and useful software applications 
        that helps otimize workflows.
      </p>
      <a href="#work" className="bg-white text-black py-2 px-4 rounded">View My Work 👇</a>
    </section>
  );
}

export default Intro;

