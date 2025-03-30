'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark-gray shadow-md' : 'bg-dark-gray/90'
    }`}>
      <div className="container flex justify-between items-center py-5">
        <Link href="/" className="text-2xl font-bold text-white font-montserrat">
          Zachary<span className="text-accent">T</span>
        </Link>
        
        <button 
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        
        <nav className={`${
          isMenuOpen 
            ? 'fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-dark-gray flex flex-col items-center pt-10'
            : 'hidden md:block'
        }`}>
          <ul className={`${
            isMenuOpen 
              ? 'flex flex-col items-center space-y-6' 
              : 'flex space-x-8'
          }`}>
            <li>
              <Link 
                href="/" 
                className="text-white hover:text-accent font-medium relative after:absolute after:w-0 after:h-0.5 after:bg-accent after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="text-white hover:text-accent font-medium relative after:absolute after:w-0 after:h-0.5 after:bg-accent after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/cad-consultant" 
                className="text-white hover:text-accent font-medium relative after:absolute after:w-0 after:h-0.5 after:bg-accent after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                CAD Consultant
              </Link>
            </li>
            <li>
              <Link 
                href="/portfolio" 
                className="text-white hover:text-accent font-medium relative after:absolute after:w-0 after:h-0.5 after:bg-accent after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="text-white hover:text-accent font-medium relative after:absolute after:w-0 after:h-0.5 after:bg-accent after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
