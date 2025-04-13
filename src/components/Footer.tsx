
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-serif font-medium">Ludovica Nadali</h3>
            <p className="text-sm text-muted-foreground">
              Innovation Manager & Project Manager
            </p>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {currentYear} Ludovica Nadali. Tutti i diritti riservati.
          </div>
          
          <div className="mt-4 md:mt-0">
            <a 
              href="#home" 
              className="flex items-center justify-center w-10 h-10 rounded-full border border-border hover:border-nadali-accent transition-colors"
              aria-label="Torna in cima"
            >
              <ArrowUp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
