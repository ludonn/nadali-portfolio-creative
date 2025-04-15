
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const projects = [
    {
      title: "UNITI Smart City",
      description: "Coordinamento di un'iniziativa che unisce università, territorio e imprese per ripensare lo spazio urbano attraverso la ricerca e l'innovazione tecnologica.",
      tags: ["Smart City", "Innovazione", "Ricerca"]
    },
    {
      title: "Vitesy - Nuovo Modello di Business",
      description: "Creazione di un nuovo modello di business basato sulla servitizzazione del prodotto, con ricerche di mercato e sviluppo di strategie commerciali.",
      tags: ["Business Model", "Servitizzazione", "Strategia"]
    },
    {
      title: "Tempo Zero",
      description: "Project Work: Start-up che offre un'esperienza sensoriale completa per immergersi nella tradizione attraverso l'innovazione.",
      tags: ["Start-up", "Innovazione", "Experience"]
    }
  ];

  return (
    <div className="animate-fade-in py-4">
      <Carousel className="w-full">
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full border-border/50 hover:border-nadali-accent/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span>{project.title}</span>
                    <ExternalLink size={18} className="text-nadali-accent" />
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-6">
          <CarouselPrevious className="mr-2 position-relative static" />
          <CarouselNext className="position-relative static" />
        </div>
      </Carousel>
      
      <div className="flex justify-center mt-8">
        <Link to="/projects">
          <Button variant="outline" className="group">
            Visualizza tutti i progetti
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsSection;
