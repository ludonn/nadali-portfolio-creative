
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <div className="animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-6">
            Sono un'<span className="text-nadali-accent font-medium">Innovation Manager</span> con 
            una forte passione per l'innovazione tecnologica e di business.
          </p>
          
          <p className="mb-6">
            Sono affascinata da come queste trasformazioni possano semplificare la vita delle persone 
            e influenzare le loro decisioni quotidiane, spesso in modo inaspettato.
          </p>
          
          <p className="mb-6">
            Ho una solida formazione in strategia per l'innovazione e commercio estero, 
            che mi permette di sviluppare soluzioni che mantengono le persone al centro, 
            poiché credo che il progresso nasca da soluzioni costruite intorno ai bisogni umani.
          </p>
          
          <Link to="/about">
            <Button className="mt-4 group bg-nadali-cream text-nadali-blue hover:bg-nadali-blue hover:text-nadali-cream">
              More
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </Link>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-serif mb-2">Formazione</h3>
            <Separator className="mb-4" />
            <p className="font-medium">Master in Strategy Innovation</p>
            <p className="text-muted-foreground">Università Ca' Foscari Venezia, 2020-2021</p>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-2">Ruolo Attuale</h3>
            <Separator className="mb-4" />
            <p className="font-medium">Project Manager Research & Innovation</p>
            <p className="text-muted-foreground">UniSMART - Fondazione Università degli Studi di Padova</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
