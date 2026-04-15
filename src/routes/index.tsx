import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/naturway/Header";
import HeroSection from "@/components/naturway/HeroSection";
import AboutSection from "@/components/naturway/AboutSection";
import ShopSection from "@/components/naturway/ShopSection";
import LocationSection from "@/components/naturway/LocationSection";
import Footer from "@/components/naturway/Footer";
import { Toaster } from "sonner";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "NaturWay — Tienda de Comida Ecológica" },
      { name: "description", content: "NaturWay: La senda del alimento puro. Tienda de comida ecológica premium en Torrelodones, Madrid." },
      { property: "og:title", content: "NaturWay — Tienda de Comida Ecológica" },
      { property: "og:description", content: "Natural siempre es mejor. Descubre nuestra cosecha ecológica." },
    ],
  }),
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ShopSection />
        <LocationSection />
      </main>
      <Footer />
      <Toaster position="bottom-center" />
    </>
  );
}
