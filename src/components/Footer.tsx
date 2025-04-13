
import { ArrowUp, Mail, Linkedin, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-12 border-t border-border/40 bg-gradient-to-b from-transparent to-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-medium mb-4">Ludovica Nadali</h3>
            <p className="text-muted-foreground">
              Innovation Manager & Project Manager specializzata nella gestione di progetti 
              di innovazione e ricerca.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">Contatti</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:ludovicanadali@gmail.com" className="flex items-center text-muted-foreground hover:text-nadali-accent transition-colors">
                  <Mail size={18} className="mr-2" />
                  ludovicanadali@gmail.com
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/ludovicanadali/" target="_blank" rel="noreferrer" className="flex items-center text-muted-foreground hover:text-nadali-accent transition-colors">
                  <Linkedin size={18} className="mr-2" />
                  linkedin.com/in/ludovicanadali
                </a>
              </li>
              <li>
                <div className="flex items-center text-muted-foreground">
                  <MapPin size={18} className="mr-2" />
                  Via Pietro Ceoldo 11, 35128 (PD), Italy
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">Collegamenti Rapidi</h4>
            <ul className="space-y-2">
              {['Chi Sono', 'Progetti', 'Interessi', 'Contatti'].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-muted-foreground hover:text-nadali-accent transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/20">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Ludovica Nadali. Tutti i diritti riservati.
          </div>
          
          <a 
            href="#home" 
            className="flex items-center justify-center w-10 h-10 rounded-full border border-border hover:border-nadali-accent transition-colors"
            aria-label="Torna in cima"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
