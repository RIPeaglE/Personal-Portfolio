import React, { useState, useEffect } from 'react';
import '../style/navbar.css';

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={isSticky ? 'sticky' : ''}>
      <a href="#intro">Home</a>
      <a href="#home">About</a>
      <a href="#projects">Projects</a>
      <a href="#footer">Contact</a>
    </nav>
  );
};

export default Navbar;
