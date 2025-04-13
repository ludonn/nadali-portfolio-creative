
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
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-nadali-accent/10 to-nadali-blue/10 blur-3xl"></div>
        <div className="absolute bottom-[30%] left-[5%] w-96 h-96 rounded-full bg-gradient-to-tr from-nadali-blue/10 to-nadali-accent/10 blur-3xl"></div>
      </div>
      
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-block mb-6 px-4 py-1 rounded-full border border-nadali-accent/30 text-sm text-nadali-accent animate-pulse">
              Innovation Manager & Project Manager
            </div>
            
            <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-serif leading-tight">
              Trasformo idee in <span className="text-gradient-to-r from-nadali-accent to-nadali-blue bg-clip-text text-transparent">progetti innovativi</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-lg text-muted-foreground">
              Specializzata nella gestione di progetti di innovazione e ricerca, 
              unisco tecnologia e esigenze umane per creare soluzioni che fanno la differenza.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#about" className="btn btn-primary px-6 py-3 bg-nadali-accent hover:bg-nadali-accent/90 text-white rounded-lg transition-all">
                Scopri di più
              </a>
              <a href="#contact" className="btn btn-outline px-6 py-3 border border-border hover:border-nadali-accent rounded-lg transition-all">
                Contattami
              </a>
            </div>
          </div>
          
          <div className={`relative flex justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {/* Animated decorative elements */}
            <div className="absolute -z-10 w-full h-full">
              <div className="absolute top-1/4 -left-10 w-20 h-20 rounded-full border border-nadali-accent/20 animate-[spin_15s_linear_infinite]"></div>
              <div className="absolute bottom-1/4 -right-5 w-16 h-16 rounded-full border border-nadali-blue/30 animate-[spin_10s_linear_infinite_reverse]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-2 border-dashed border-nadali-accent/30 animate-[spin_20s_linear_infinite]"></div>
            </div>
            
            {/* Main visual element */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-nadali-accent/30 to-nadali-blue/30 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl md:text-8xl font-serif font-light text-white mix-blend-overlay">LN</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a 
            href="#about" 
            className="flex items-center justify-center w-10 h-10 rounded-full border border-border hover:border-nadali-accent transition-colors animate-bounce"
            aria-label="Scopri di più"
          >
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
