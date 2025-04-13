
const experienceData = [
  {
    company: "UniSMART - Fondazione Università degli Studi di Padova",
    position: "Project Manager Research & Innovation",
    period: "2024 - in corso",
    responsibilities: [
      "Innovation Manager per le aziende della Community: Offre supporto costante e proattivo per stimolare l'innovazione e facilitare la ricerca, aiutando le aziende a trasformare idee in progetti concreti.",
      "Valorizzazione della proprietà intellettuale di UniPD: Analizza il potenziale di mercato dei brevetti dell'Ateneo per identificare opportunità di licenze, fornendo dati strategici che favoriscono negoziazioni efficaci e massimizzano il valore delle invenzioni.",
      "Organizzazione ecosistema UNITI Smart City: Coordina un'iniziativa che unisce università, territorio e imprese in un dialogo per ripensare lo spazio urbano attraverso la ricerca e l'innovazione tecnologica, con l'obiettivo di creare città più intelligenti, sostenibili e a misura d'uomo."
    ]
  },
  {
    company: "VITESY",
    position: "Innovation Manager",
    period: "2021 - 2024",
    responsibilities: [
      "Creazione di un nuovo modello di business basato sulla servitizzazione del prodotto",
      "Ricerche di mercato desk e field",
      "User Interview (qualitative e quantitative)",
      "Creazione e ottimizzazione flusso del servizio",
      "Creazione Customer Journey Map e Customer Experience",
      "Impostazione strategia commerciale",
      "Test del minimo prodotto funzionante (MVP) attraverso Proof of Concept (PoC)",
      "Ricerche e analisi di mercato per migliorare prodotti digitali e sviluppare nuovi prodotti fisici"
    ]
  },
  {
    company: "Studio Commercialista",
    position: "Contabile",
    period: "2019 - 2020",
    responsibilities: [
      "Contabilità attiva e passiva e gestione corrispettivi",
      "Inserimento oneri e redditi per dichiarazione dei redditi",
      "Adempimenti per import e export",
      "Liquidazione IVA"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="bg-muted">
      <div className="container">
        <h2 className="section-heading">Esperienze</h2>
        
        <div className="mt-12 space-y-12">
          {experienceData.map((job, index) => (
            <div 
              key={job.company} 
              className="experience-item animate-slide-up opacity-0" 
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="mb-2">
                <h3 className="text-xl font-medium">{job.position}</h3>
                <div className="flex items-center text-nadali-accent">
                  <span className="text-lg font-medium">{job.company}</span>
                </div>
                <div className="text-sm text-muted-foreground">{job.period}</div>
              </div>
              
              <ul className="mt-4 space-y-2">
                {job.responsibilities.map((responsibility) => (
                  <li key={responsibility} className="flex items-start">
                    <span className="text-nadali-accent mr-2 mt-1">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
