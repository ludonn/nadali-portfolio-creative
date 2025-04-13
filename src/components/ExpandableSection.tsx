
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
        className="border border-border/50 rounded-lg overflow-hidden transition-all duration-300 hover:border-nadali-accent/50"
      >
        <CollapsibleTrigger className="flex w-full items-center justify-between p-6 text-left">
          <h2 className="text-2xl md:text-3xl font-serif">{title}</h2>
          <ChevronDown 
            className={cn("h-6 w-6 text-nadali-accent transition-transform duration-300", 
              isActive && "rotate-180"
            )} 
          />
        </CollapsibleTrigger>
        
        <CollapsibleContent className="animate-accordion-down">
          <div className="p-6 pt-0 border-t border-border/50">
            {children}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default ExpandableSection;
