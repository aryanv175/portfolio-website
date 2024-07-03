import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5">
      <h1 className="text-white text-xl">Aryan Verma</h1>
      <nav className="space-x-4">
        <a href="#works" className="text-white">WORKS</a>
        <a href="#creatives" className="text-white">CREATIVES</a>
        <a href="#about" className="text-white">ABOUT</a>
      </nav>
    </header>
  );
}

export default Header;
