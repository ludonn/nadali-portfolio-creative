
import { ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

interface ExpandableSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  onToggle: () => void;
}

const ExpandableSection = ({
  id,
  title,
  children,
  isActive,
  onToggle
}: ExpandableSectionProps) => {
  return (
    <div id={id} className="w-full">
      <Collapsible
        open={isActive}
        onOpenChange={onToggle}
        className="border border-border/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 bg-background/50 backdrop-blur-sm hover:shadow-md"
        aria-expanded={isActive}
      >
        <CollapsibleTrigger 
          className="flex w-full items-center justify-between p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-controls={`${id}-content`}
        >
          <h2 className="text-2xl md:text-3xl font-display">{title}</h2>
          <ChevronDown
            className={cn("h-6 w-6 text-primary transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)]",
              isActive && "rotate-180"
            )}
            aria-hidden="true"
          />
        </CollapsibleTrigger>
        
        <CollapsibleContent 
          id={`${id}-content`}
          className="animate-slide-up overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        >
          <div className="p-6 pt-0 border-t border-border/50">
            {children}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default ExpandableSection;
