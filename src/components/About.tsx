
const About = () => {
  return (
    <section id="about" className="bg-muted">
      <div className="container">
        <h2 className="section-heading">Chi Sono</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6 animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
            <p>
              Sono un'Innovation Manager con una forte passione per l'innovazione tecnologica 
              e di business. Sono affascinata da come queste trasformazioni possano semplificare 
              la vita delle persone e influenzare le loro decisioni quotidiane, spesso in modo inaspettato.
            </p>
            <p>
              Ho una solida formazione in strategia per l'innovazione e commercio estero, 
              che mi permette di sviluppare soluzioni che mantengono le persone al centro, 
              poiché credo che il progresso nasca da soluzioni costruite intorno ai bisogni umani.
            </p>
          </div>
          
          <div className="space-y-8 animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
            <div>
              <h3 className="text-xl font-medium mb-3">Formazione</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Master I livello in Strategy Innovation</h4>
                  <p className="text-sm text-muted-foreground">Università Ca' Foscari Venezia, 2020-2021</p>
                  <p className="mt-2">
                    L'obiettivo del Master è trasmettere un cambio di prospettiva dal punto di vista 
                    dell'innovazione strategica, per formare manager preparati alle sfide legate 
                    alla ridefinizione dei modelli di business e al management dell'innovazione aziendale.
                  </p>
                  <p className="mt-2 text-sm italic">
                    Project Work: "Tempo Zero, è l'ora di stare bene" - Start-up che offre un'esperienza 
                    che comprende l'utilizzo di tutti e 5 i sensi per immergersi a pieno nella tradizione 
                    attraverso l'innovazione.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium">Laurea triennale in Commercio Estero</h4>
                  <p className="text-sm text-muted-foreground">Università Ca' Foscari Venezia, 2016-2019</p>
                  <p className="mt-1 text-sm">Tirocinio presso Università IUAV - contabilità fornitori</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-3">Lingue</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="font-medium">Inglese</div>
                  <div className="text-sm">B2</div>
                </div>
                <div>
                  <div className="font-medium">Tedesco</div>
                  <div className="text-sm">B1</div>
                </div>
                <div>
                  <div className="font-medium">Spagnolo</div>
                  <div className="text-sm">B1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
