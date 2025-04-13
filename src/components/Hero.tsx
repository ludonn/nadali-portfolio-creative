
import { ArrowDown, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
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
      {/* Geometric decorative elements - now with more dynamic animations and all blurred */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="geometric-shape shape-1 w-80 h-80 rounded-full blur-3xl opacity-40 animate-float"
          style={{ 
            top: `${10 + mousePosition.y * 15}%`, 
            right: `${5 + mousePosition.x * 15}%`,
            transition: 'top 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), right 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        ></div>
        <div 
          className="geometric-shape shape-2 w-64 h-64 rounded-full blur-3xl opacity-40 animate-float"
          style={{ 
            bottom: `${20 - mousePosition.y * 15}%`, 
            left: `${10 + mousePosition.x * 15}%`,
            transition: 'bottom 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), left 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        ></div>
        <div 
          className="geometric-shape shape-square shape-3 w-32 h-32 blur-3xl opacity-40 animate-pulse"
          style={{ 
            top: `${30 + (mousePosition.y - 0.5) * 20}%`, 
            left: `${15 + (mousePosition.x - 0.5) * 20}%`,
            transform: `rotate(${mousePosition.x * 60}deg)`,
            transition: 'top 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), left 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        ></div>
        <div 
          className="geometric-shape shape-square shape-1 w-28 h-28 blur-3xl opacity-40 animate-pulse"
          style={{ 
            bottom: `${15 - (mousePosition.y - 0.5) * 20}%`, 
            right: `${20 - (mousePosition.x - 0.5) * 20}%`,
            transform: `rotate(${-mousePosition.x * 60}deg)`,
            transition: 'bottom 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), right 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        ></div>
        
        {/* More fluid particle effect */}
        <div className="particles-container absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-primary/40 blur-sm"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.6 + Math.random() * 0.4,
                transform: `translate(${(mousePosition.x - 0.5) * 40 * (Math.random() - 0.5)}px, ${(mousePosition.y - 0.5) * 40 * (Math.random() - 0.5)}px)`,
                transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                animation: `float ${5 + Math.random() * 7}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* More dynamic grid pattern with parallax effect */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(120,120,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(120,120,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"
          style={{ 
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
            transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        ></div>
        
        {/* Additional dynamic elements that follow mouse more fluidly */}
        <div
          className="absolute w-40 h-40 rounded-full opacity-20 blur-3xl mix-blend-screen"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.6) 0%, rgba(147, 51, 234, 0) 70%)',
            left: `calc(${mousePosition.x * 100}% - 5rem)`,
            top: `calc(${mousePosition.y * 100}% - 5rem)`,
            transition: 'left 0.2s ease-out, top 0.2s ease-out'
          }}
        ></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2.5 mb-8 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 text-base text-primary group hover:bg-primary/10 transition-all cursor-default">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="font-medium">Project Manager</span>
            </div>
            
            <h1 className="mb-10 text-6xl md:text-7xl lg:text-8xl font-display leading-tight w-full flex flex-col items-center">
              <span className="text-gradient font-light tracking-wider">LUDOVICA</span>
              <span className="text-gradient font-light tracking-wider">NADALI</span>
            </h1>
            
            <div className="flex justify-center mt-10">
              <a 
                href="#about" 
                className="btn btn-primary px-10 py-5 text-lg rounded-lg transition-all relative overflow-hidden"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <span className="relative z-10 transition-transform duration-300" 
                  style={{
                    transform: isHovering ? 'translateY(-3px)' : 'translateY(0)',
                  }}
                >
                  Scopri di più
                </span>
                <span 
                  className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 transition-opacity duration-500"
                  style={{
                    opacity: isHovering ? 1 : 0,
                    transform: `scale(${isHovering ? 1.08 : 1})`,
                    transition: 'opacity 0.5s ease, transform 0.5s ease'
                  }}
                ></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* More fluid animated scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float">
        <ArrowDown className="w-6 h-6 text-primary/70" />
      </div>
    </section>
  );
};

export default Hero;
