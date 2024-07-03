import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Project from './components/Project';

const App = () => {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Intro />
      <Project 
        title="OKX Crypto App" 
        description="A user-centric crypto exchange providing a seamless trading experience designed for novice and advanced users." 
        link="https://okx.com" 
        image="path/to/image.png" 
      />
    </div>
  );
}

export default App;
