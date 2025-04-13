
const skillsData = [
  {
    category: "Ricerca e Analisi",
    skills: [
      "Ricerche di mercato desk e field",
      "User interview",
      "Analisi finanziaria e definizione del pricing",
    ]
  },
  {
    category: "Innovazione e Strategia",
    skills: [
      "Innovazione e creatività nello sviluppo dei progetti",
      "Business development",
      "Capacità di unire gli aspetti di ricerca con gli obiettivi commerciali e di marketing",
    ]
  },
  {
    category: "Strumenti e Capacità",
    skills: [
      "Copywriting",
      "Suite Google e Office",
      "Project Management",
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-heading">Competenze</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {skillsData.map((skillGroup, index) => (
            <div 
              key={skillGroup.category} 
              className="bg-card rounded-lg p-6 shadow-sm border animate-slide-up opacity-0" 
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <h3 className="text-xl font-medium mb-4 text-nadali-accent">{skillGroup.category}</h3>
              <ul className="space-y-3">
                {skillGroup.skills.map((skill) => (
                  <li key={skill} className="flex items-start">
                    <span className="text-nadali-accent mr-2">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="p-6 md:p-8 bg-muted rounded-lg max-w-2xl animate-slide-up opacity-0" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-xl font-medium text-center mb-4">Il mio approccio all'innovazione</h3>
            <p className="text-center italic">
              "Credo che il progresso nasca da soluzioni costruite intorno ai bisogni umani. 
              La mia passione è unire tecnologia e design per creare esperienze che migliorino 
              concretamente la vita delle persone."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
