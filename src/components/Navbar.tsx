
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navItems = [
  { 
    name: 'Chi Sono', 
    href: '#about',
    description: 'Scopri di più sulla mia formazione e percorso professionale',
  },
  { 
    name: 'Progetti', 
    href: '#projects',
    description: 'Esplora i progetti innovativi su cui ho lavorato',
  },
  { 
    name: 'Interessi', 
    href: '#interests',
    description: 'Ambiti professionali che mi appassionano',
  },
  { 
    name: 'Contatti', 
    href: '#contact',
    description: 'Vuoi collaborare? Mettiti in contatto con me',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'blur-header py-3' : 'py-5'}`}>
      <div className="container flex justify-between items-center">
        <a href="#home" className="text-xl font-serif font-medium relative group">
          Ludovica Nadali
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nadali-accent transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger 
                    className="text-sm font-medium hover:text-nadali-accent transition-colors"
                  >
                    {item.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[320px] gap-3 p-4">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            href={item.href}
                            className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-nadali-accent/20 to-nadali-blue/20 p-6 no-underline outline-none focus:shadow-md"
                          >
                            <div className="mb-2 mt-4 text-lg font-serif">
                              {item.name}
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              {item.description}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label={isDarkMode ? "Passa alla modalità chiara" : "Passa alla modalità scura"}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-2">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label={isDarkMode ? "Passa alla modalità chiara" : "Passa alla modalità scura"}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            className="p-2 hover:bg-muted rounded-full transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 py-4 animate-fade-in">
          <nav className="container flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-lg font-medium py-2 px-4 hover:bg-muted rounded-md hover:text-nadali-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <div>{item.name}</div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
