
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
        <a href="#home" className="text-xl font-serif font-medium relative group">
          Ludovica Nadali
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nadali-accent transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
