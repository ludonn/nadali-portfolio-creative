
import { Mail, Linkedin, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Messaggio inviato",
        description: "Grazie per avermi contattato. Risponderò il prima possibile.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-heading">Contatti</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
            
           
            
            <div className="space-y-4 mb-8">
              <a 
                href="mailto:ludovicanadali@gmail.com" 
                className="flex items-center hover:text-nadali-accent transition-colors"
              >
                <Mail className="mr-3" size={20} />
                <span>ludovicanadali@gmail.com</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/ludovicanadali/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center hover:text-nadali-accent transition-colors"
              >
                <Linkedin className="mr-3" size={20} />
                <span>linkedin.com/in/ludovicanadali/</span>
              </a>
              
              
            </div>
          </div>
          
          <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-input rounded-md bg-background"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-input rounded-md bg-background"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Messaggio
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-input rounded-md bg-background resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full py-2.5"
              >
                {isSubmitting ? 'Invio in corso...' : 'Invia messaggio'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
