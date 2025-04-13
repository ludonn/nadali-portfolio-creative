
import { ArrowDown, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 overflow-hidden relative">
      {/* Geometric decorative elements - now with interactive animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="geometric-shape shape-1 w-64 h-64 rounded-full blur-xl opacity-20 animate-spin-slow"
          style={{ 
            top: `${15 + mousePosition.y * 5}%`, 
            right: `${8 + mousePosition.x * 5}%`,
            transition: 'top 0.5s ease-out, right 0.5s ease-out'
          }}
        ></div>
        <div 
          className="geometric-shape shape-2 w-40 h-40 rounded-full blur-xl opacity-20 animate-float"
          style={{ 
            bottom: `${25 - mousePosition.y * 10}%`, 
            left: `${15 + mousePosition.x * 10}%`,
            transition: 'bottom 0.5s ease-out, left 0.5s ease-out'
          }}
        ></div>
        <div 
          className="geometric-shape shape-square shape-3 w-20 h-20 animate-pulse"
          style={{ 
            top: `${35 + (mousePosition.y - 0.5) * 10}%`, 
            left: `${20 + (mousePosition.x - 0.5) * 10}%`,
            transform: `rotate(${mousePosition.x * 45}deg)`,
            transition: 'top 0.3s ease-out, left 0.3s ease-out, transform 0.3s ease-out'
          }}
        ></div>
        <div 
          className="geometric-shape shape-square shape-1 w-16 h-16 animate-pulse"
          style={{ 
            bottom: `${20 - (mousePosition.y - 0.5) * 10}%`, 
            right: `${25 - (mousePosition.x - 0.5) * 10}%`,
            transform: `rotate(${-mousePosition.x * 45}deg)`,
            transition: 'bottom 0.3s ease-out, right 0.3s ease-out, transform 0.3s ease-out'
          }}
        ></div>
        
        {/* Particle effect */}
        <div className="particles-container absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.6 + Math.random() * 0.4,
                animation: `float ${3 + Math.random() * 7}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Grid pattern with parallax effect */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(120,120,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(120,120,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
          style={{ 
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        ></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary group hover:bg-primary/10 transition-all cursor-default">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Innovation Manager & Project Manager</span>
            </div>
            
            <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-display leading-tight w-full">
              Trasformo idee in <span className="text-gradient relative font-bold group">
                progetti innovativi
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500"></span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 w-full text-muted-foreground hover:text-foreground transition-colors duration-300">
              Specializzata nella gestione di progetti di innovazione e ricerca, 
              unisco tecnologia e esigenze umane per creare soluzioni che fanno la differenza.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#about" className="btn btn-primary px-6 py-3 rounded-lg transition-all relative overflow-hidden group">
                <span className="relative z-10">Scopri di più</span>
                <span className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
              <a href="#contact" className="btn btn-outline px-6 py-3 border border-border hover:border-primary rounded-lg transition-all relative overflow-hidden group">
                <span className="relative z-10">Contattami</span>
                <span className="absolute inset-0 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <ArrowDown className="w-5 h-5 text-primary/70" />
      </div>
    </section>
  );
};

export default Hero;
