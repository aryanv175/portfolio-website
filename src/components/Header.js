import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-black text-white">
      <div className="text-2xl font-bold">Logo</div>
      <nav className="space-x-4">
        <a href="#home" className="text-white">Home</a>
        <a href="#projects" className="text-white">Projects</a>
        <a href="#experience" className="text-white">Experience</a>
        <a href="#contact" className="text-white">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
