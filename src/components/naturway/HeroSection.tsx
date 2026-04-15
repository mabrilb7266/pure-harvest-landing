import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-field.jpg";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroImg}
        alt="Campo ecológico al amanecer"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-foreground/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-sand/80 text-sm tracking-[0.3em] uppercase mb-4 font-sans">
          Tienda de comida ecológica
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-sand leading-tight tracking-wide">
          Naturway
        </h1>
        <p className="font-serif text-xl sm:text-2xl md:text-3xl text-sand/90 mt-4 italic">
          La senda del alimento puro
        </p>
        <div className="mt-10">
          <Button variant="hero" size="lg" className="text-base px-10 py-6" asChild>
            <a href="#productos">Explorar Cosecha</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
