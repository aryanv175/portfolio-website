import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white py-4">
      <nav className="flex justify-between items-center max-w-6xl mx-auto px-4">
        <div className="text-2xl font-bold">Logo</div>
        <ul className="flex space-x-4">
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
