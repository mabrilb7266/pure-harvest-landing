import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useScrollAnimate } from "@/hooks/use-scroll-animate";
import huertoImg from "@/assets/category-huerto.jpg";
import granoImg from "@/assets/category-grano.jpg";
import elixiresImg from "@/assets/category-elixires.jpg";

interface Product {
  name: string;
  price: string;
}

interface Category {
  title: string;
  subtitle: string;
  image: string;
  products: Product[];
}

const categories: Category[] = [
  {
    title: "Huerto Sagrado",
    subtitle: "Frutas y Verduras",
    image: huertoImg,
    products: [
      { name: "Leche entera", price: "2,19€/L" },
      { name: "Carne picada vacas de pasto", price: "9,99€/kg" },
      { name: "Manzana Fuji", price: "3€/kg" },
      { name: "Espinacas frescas", price: "2,50€/bolsa" },
      { name: "Zanahorias con rama", price: "2€/manojo" },
    ],
  },
  {
    title: "Esencia del Grano",
    subtitle: "Legumbres y Pan",
    image: granoImg,
    products: [
      { name: "Pan de Masa Madre", price: "4,50€" },
      { name: "Lenteja Pardina", price: "3,20€/kg" },
      { name: "Quinoa Real", price: "5€/500g" },
      { name: "Arroz Integral", price: "2,80€/kg" },
      { name: "Garbanzos de pueblo", price: "2,69€/kg" },
    ],
  },
  {
    title: "Elíxires y Despensa",
    subtitle: "Aceites y Gourmet",
    image: elixiresImg,
    products: [
      { name: "AOVE virgen extra en frío", price: "16,50€/L" },
      { name: "Miel de Bosque", price: "8€/tarro" },
      { name: "Almendras crudas", price: "6€/250g" },
      { name: "Huevos gallinas libres", price: "0,35€/ud" },
      { name: "Sal marina pura", price: "2€/kg" },
    ],
  },
];

function handleAdd() {
  toast("Esto es un prototipo. La tienda real estará disponible pronto.", {
    duration: 3000,
  });
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
      <div>
        <p className="text-sm font-medium text-foreground">{product.name}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{product.price}</p>
      </div>
      <Button variant="outline" size="sm" onClick={handleAdd} className="text-xs">
        Añadir
      </Button>
    </div>
  );
}

function CategoryCard({ category, delay }: { category: Category; delay: number }) {
  const { ref, isVisible } = useScrollAnimate();

  return (
    <div
      ref={ref}
      className={`bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow duration-300 ${isVisible ? `anim-scale anim-delay-${delay}` : "scroll-hidden"}`}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={category.image}
          alt={category.title}
          className="h-full w-full object-cover"
          loading="lazy"
          width={800}
          height={600}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <h3 className="font-serif text-xl text-sand">{category.title}</h3>
          <p className="text-sand/70 text-xs mt-1">{category.subtitle}</p>
        </div>
      </div>
      <div className="px-5 py-4">
        {category.products.map((p) => (
          <ProductCard key={p.name} product={p} />
        ))}
      </div>
    </div>
  );
}

export default function ShopSection() {
  const { ref, isVisible } = useScrollAnimate();

  return (
    <section id="productos" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div
          ref={ref}
          className={`text-center mb-14 ${isVisible ? "anim-fade-up" : "scroll-hidden"}`}
        >
          <p className="text-primary text-sm tracking-[0.25em] uppercase mb-4 font-sans font-medium">
            Nuestra cosecha
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground">
            Productos
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mt-6" />
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.title} category={cat} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
