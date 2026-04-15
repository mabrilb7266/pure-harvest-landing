export default function Footer() {
  return (
    <footer className="bg-forest text-forest-foreground py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 sm:grid-cols-3 text-center sm:text-left">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl mb-3">NaturWay</h3>
            <p className="text-forest-foreground/70 text-sm leading-relaxed">
              Natural siempre es mejor.<br />
              Tienda de comida ecológica.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg mb-3">Enlaces</h4>
            <ul className="space-y-2 text-sm text-forest-foreground/70">
              <li><a href="#inicio" className="hover:text-forest-foreground transition-colors">Inicio</a></li>
              <li><a href="#productos" className="hover:text-forest-foreground transition-colors">Productos</a></li>
              <li><a href="#localizacion" className="hover:text-forest-foreground transition-colors">Localización</a></li>
              <li><a href="#nosotros" className="hover:text-forest-foreground transition-colors">Nosotros</a></li>
            </ul>
          </div>

          {/* Social & contact */}
          <div>
            <h4 className="font-serif text-lg mb-3">Contacto</h4>
            <p className="text-sm text-forest-foreground/70 mb-3">info@naturway.es</p>
            <div className="flex gap-4 justify-center sm:justify-start">
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="text-forest-foreground/60 hover:text-forest-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="text-forest-foreground/60 hover:text-forest-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="#" aria-label="Twitter" className="text-forest-foreground/60 hover:text-forest-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-forest-foreground/10 text-center text-xs text-forest-foreground/40">
          © 2026 NaturWay — Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
