
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-block mb-6 px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary animate-pulse">
              Innovation Manager & Project Manager
            </div>
            
            <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-display leading-tight">
              Trasformo idee in <span className="text-gradient font-bold">progetti innovativi</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-lg text-muted-foreground">
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
          
          <div className={`relative flex justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {/* Animated decorative elements */}
            <div className="absolute -z-10 w-full h-full">
              <div className="absolute top-1/3 -left-10 w-20 h-20 border-2 border-dashed border-primary/40 rounded-full animate-spin-slow"></div>
              <div className="absolute bottom-1/3 -right-5 w-16 h-16 border-2 border-dashed border-secondary/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-dashed border-accent/30 rounded-full animate-spin-slow"></div>
            </div>
            
            {/* Main visual element */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden mask-radial-faded">
              <div className="absolute inset-0 bg-gradient-to-tl from-primary via-accent to-secondary opacity-80"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3)_0,transparent_70%)]"></div>
              <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm">
                <span className="text-7xl md:text-8xl font-display font-bold text-white mix-blend-overlay">LN</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a 
            href="#about" 
            className="flex items-center justify-center w-12 h-12 rounded-full border border-border bg-background/50 backdrop-blur-sm hover:border-primary transition-colors animate-bounce"
            aria-label="Scopri di più"
          >
            <ArrowDown size={20} className="text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
