import React from 'react';
import LogoImage from '../assets/logo.jpg';

const Header = () => {
  return (
    <header className="bg-222222 text-white py-4">
      <nav className="flex justify-between items-center max-w-6xl mx-auto px-4">
        <img src={LogoImage} className="w-12 rounded"/>
        <ul className="flex space-x-4">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#experience" className="nav-link">Experience</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
