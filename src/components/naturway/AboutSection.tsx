export default function AboutSection() {
  return (
    <section id="nosotros" className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <p className="text-primary text-sm tracking-[0.25em] uppercase mb-4 font-sans font-medium">
          Sobre nosotros
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-8 leading-tight">
          La sabiduría de la tierra
        </h2>
        <div className="w-16 h-px bg-primary mx-auto mb-8" />
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-light">
          En Naturae Vía recuperamos el origen. Creemos en la sabiduría de la tierra y en el
          respeto a los ciclos naturales, ofreciendo alimentos que alimentan el cuerpo y el alma.
        </p>
        <p className="mt-8 font-serif text-primary italic text-xl md:text-2xl">
          "Natural siempre es mejor"
        </p>
      </div>
    </section>
  );
}
