
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="geometric-shape shape-1 w-80 h-80 rounded-full blur-3xl opacity-60 animate-float"
          style={{ 
            top: `${10 + mousePosition.y * 40}%`,
            right: `${5 + mousePosition.x * 40}%`,
            transition: 'top 0.5s ease-out, right 0.5s ease-out'
          }}
        ></div>
        <div 
          className="geometric-shape shape-2 w-64 h-64 rounded-full blur-3xl opacity-60 animate-float"
          style={{ 
            bottom: `${20 - mousePosition.y * 30}%`,
            left: `${10 + mousePosition.x * 30}%`,
            transition: 'bottom 0.5s ease-out, left 0.5s ease-out'
          }}
        ></div>
        <div 
          className="geometric-shape shape-square shape-3 w-40 h-40 blur-3xl opacity-50"
          style={{ 
            top: `${30 + (mousePosition.y - 0.5) * 20}%`,
            left: `${15 + (mousePosition.x - 0.5) * 20}%`,
            transform: `rotate(${mousePosition.x * 45}deg)`,
            transition: 'all 0.5s ease-out'
          }}
        ></div>
        
        
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(116,81,45,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(116,81,45,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_70%,transparent_100%)]"
          style={{ 
            transform: `translate(${mousePosition.x * -50}px, ${mousePosition.y * -50}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        
        <div
          className="absolute w-60 h-60 rounded-full opacity-20 blur-3xl mix-blend-screen"
          style={{
            background: 'radial-gradient(circle, rgba(187, 216, 163, 0.6) 0%, rgba(187, 216, 163, 0) 70%)',
            left: `calc(${mousePosition.x * 100}% - 7.5rem)`,
            top: `calc(${mousePosition.y * 100}% - 7.5rem)`,
            transition: 'left 0.2s ease-out, top 0.2s ease-out'
          }}
        ></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2.5 mb-10 px-6 py-3 rounded-full border border-nadali-green/30 bg-nadali-green/5 text-lg text-nadali-green group hover:bg-nadali-green/10 transition-all cursor-default">
              <Sparkles className="w-6 h-6 animate-pulse" />
              <span className="font-medium">Project Manager & Researcher</span>
            </div>
            
            <h1 className="mb-12 flex flex-col items-center">
              <span className="text-8xl md:text-9xl lg:text-[10rem] text-nadali-brown font-serif font-bold tracking-tight">LUDOVICA</span>
              <span className="text-8xl md:text-9xl lg:text-[10rem] text-nadali-brown font-serif font-bold tracking-tight">NADALI</span>
            </h1>
            
            <div className="flex justify-center mt-12">
              <a 
                href="#about" 
                className="bg-nadali-brown text-nadali-cream px-12 py-6 text-xl rounded-lg transition-all relative overflow-hidden group 
                  hover:bg-nadali-green 
                  transform hover:-translate-y-1 hover:scale-[1.02] 
                  duration-300 ease-out 
                  hover:text-nadali-lightGreen"
              >
                <span className="relative z-10 transition-colors duration-300">
                  Get to know me
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float">
        <ArrowDown className="w-8 h-8 text-nadali-green" />
      </div>
    </section>
  );
};

export default Hero;
