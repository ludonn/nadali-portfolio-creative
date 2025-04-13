
import { ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 overflow-hidden relative">
      {/* Geometric decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="geometric-shape shape-1 w-64 h-64 rounded-full top-[15%] right-[8%] blur-xl opacity-20 animate-spin-slow"></div>
        <div className="geometric-shape shape-2 w-40 h-40 rounded-full bottom-[25%] left-[15%] blur-xl opacity-20 animate-float"></div>
        <div className="geometric-shape shape-square shape-3 w-20 h-20 top-[35%] left-[20%] animate-pulse"></div>
        <div className="geometric-shape shape-square shape-1 w-16 h-16 bottom-[20%] right-[25%] animate-pulse"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(120,120,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(120,120,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-block mb-6 px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary animate-pulse">
              Innovation Manager & Project Manager
            </div>
            
            <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-display leading-tight w-full">
              Trasformo idee in <span className="text-gradient font-bold">progetti innovativi</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 w-full text-muted-foreground">
              Specializzata nella gestione di progetti di innovazione e ricerca, 
              unisco tecnologia e esigenze umane per creare soluzioni che fanno la differenza.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#about" className="btn btn-primary px-6 py-3 rounded-lg transition-all">
                Scopri di più
              </a>
              <a href="#contact" className="btn btn-outline px-6 py-3 border border-border hover:border-primary rounded-lg transition-all">
                Contattami
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
