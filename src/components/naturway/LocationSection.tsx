export default function LocationSection() {
  return (
    <section id="localizacion" className="py-20 md:py-28 bg-sand">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center mb-14">
          <p className="text-primary text-sm tracking-[0.25em] uppercase mb-4 font-sans font-medium">
            Localización
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground">
            Encuéntranos en la Tierra
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-xl text-foreground mb-2">Dirección</h3>
              <p className="text-muted-foreground leading-relaxed">
                C. Jesusa Lara, 43<br />
                28250 Torrelodones, Madrid
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-foreground mb-2">Teléfono</h3>
              <p className="text-muted-foreground">(34) 233 08 53 23</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-foreground mb-2">Horario</h3>
              <div className="text-muted-foreground space-y-1 text-sm">
                <p>Lunes a Viernes: 9:00 – 20:00</p>
                <p>Sábados: 9:00 – 14:00</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
          </div>

          {/* Simulated map */}
          <div className="rounded-xl overflow-hidden border border-border bg-card aspect-[4/3] flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-sand to-primary/10" />
            <div className="relative text-center p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <p className="font-serif text-foreground text-lg">NaturWay</p>
              <p className="text-muted-foreground text-sm mt-1">Torrelodones, Madrid</p>
              <p className="text-xs text-muted-foreground/60 mt-4 italic">Mapa simulado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
