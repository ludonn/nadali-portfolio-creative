
import { Separator } from '@/components/ui/separator';
import { 
  Brain, 
  BookOpen, 
  Compass, 
  Globe, 
  TrendingUp, 
  FileText 
} from 'lucide-react';

const InterestsSection = () => {
  const interests = [
    {
      icon: Brain,
      title: "Innovazione Tecnologica",
      description: "Studio e applicazione di nuove tecnologie nei contesti aziendali"
    },
    {
      icon: TrendingUp,
      title: "Business Innovation",
      description: "Strategie innovative per la trasformazione dei modelli di business"
    },
    {
      icon: Compass,
      title: "User Research",
      description: "Analisi dei bisogni e delle esperienze degli utenti per progettare soluzioni"
    },
    {
      icon: Globe,
      title: "Internazionalizzazione",
      description: "Strategie di espansione globale per business innovativi"
    },
    {
      icon: BookOpen,
      title: "Formazione Continua",
      description: "Apprendimento costante di nuove competenze e metodologie"
    },
    {
      icon: FileText,
      title: "Copywriting",
      description: "Creazione di contenuti efficaci per la comunicazione aziendale"
    }
  ];

  return (
    <div className="animate-fade-in py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {interests.map((interest, index) => (
          <div 
            key={index} 
            className="p-4 border border-border/50 rounded-lg hover:border-nadali-accent/50 transition-all duration-300"
          >
            <div className="flex items-center mb-3">
              <div className="mr-3 bg-muted p-2 rounded-md">
                <interest.icon className="h-5 w-5 text-nadali-accent" />
              </div>
              <h3 className="font-serif text-lg">{interest.title}</h3>
            </div>
            <Separator className="mb-3" />
            <p className="text-muted-foreground text-sm">{interest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterestsSection;
