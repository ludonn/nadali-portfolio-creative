
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="mb-4">
              <span className="block text-nadali-accent">Ciao, sono</span>
              Ludovica Nadali
            </h1>
            <p className="text-xl md:text-2xl font-serif mb-6 text-muted-foreground">
              Innovation Manager & Project Manager
            </p>
            <p className="text-lg md:max-w-md mb-8">
              Specializzata nella gestione di progetti di innovazione e ricerca, 
              con la passione di unire tecnologia e esigenze umane.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn btn-primary px-6 py-3">
                Contattami
              </a>
              <a href="#about" className="btn btn-outline px-6 py-3">
                Scopri di più
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-nadali-accent/30">
              <div className="absolute inset-0 bg-gradient-to-br from-nadali-accent/20 to-nadali-blue/20"></div>
              <div className="absolute inset-0 flex items-center justify-center text-4xl font-serif">LN</div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="flex items-center justify-center w-10 h-10 rounded-full border border-border">
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
