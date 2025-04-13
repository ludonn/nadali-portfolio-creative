
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'blur-header py-3' : 'py-5'}`}>
      <div className="container flex justify-between items-center">
        <a 
          href="#home" 
          className="text-xl font-serif font-medium relative group"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <span className="block transition-transform duration-300 ease-out" style={{
            transform: hovered ? 'translateY(-100%)' : 'translateY(0)',
            opacity: hovered ? 0 : 1
          }}>
            Ludovica Nadali
          </span>
          <span className="absolute top-0 left-0 transition-transform duration-300 ease-out text-gradient" style={{
            transform: hovered ? 'translateY(0)' : 'translateY(100%)',
            opacity: hovered ? 1 : 0
          }}>
            Ludovica Nadali
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
