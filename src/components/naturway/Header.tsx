import { useState } from "react";
import logo from "@/assets/naturway-logo.png";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Localización", href: "#localizacion" },
  { label: "Nosotros", href: "#nosotros" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo} alt="NaturWay logo" className="h-12 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Cart icon */}
        <button className="relative text-foreground/80 hover:text-primary transition-colors" aria-label="Carrito">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
          </svg>
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground/80 ml-3"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menú"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileOpen ? (
              <path d="M18 6 6 18M6 6l12 12"/>
            ) : (
              <>
                <line x1="4" x2="20" y1="6" y2="6"/>
                <line x1="4" x2="20" y1="12" y2="12"/>
                <line x1="4" x2="20" y1="18" y2="18"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-background px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-3 text-sm font-medium text-foreground/80 hover:text-primary border-b border-border/50 last:border-0"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
