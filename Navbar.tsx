import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Navbar({ cartCount, onCartClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-amber-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2 group cursor-pointer">
            <span className="text-3xl sm:text-4xl group-hover:rotate-12 transition-transform duration-300">🍌</span>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent leading-tight">
                Golden Peel
              </h1>
              <p className="text-[10px] sm:text-xs text-amber-600/70 tracking-widest uppercase -mt-0.5">
                Premium Polished
              </p>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {["products", "about", "testimonials"].map((section) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className="text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors capitalize cursor-pointer"
              >
                {section}
              </button>
            ))}
            <button
              onClick={onCartClick}
              className="relative p-2 rounded-full hover:bg-amber-50 transition-colors cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => scrollTo("products")}
              className="bg-gradient-to-r from-amber-500 to-yellow-400 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-amber-200 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Shop Now
            </button>
          </div>

          {/* Mobile nav toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={onCartClick}
              className="relative p-2 cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 cursor-pointer"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-amber-100 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {["products", "about", "testimonials"].map((section) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-amber-50 rounded-lg capitalize cursor-pointer"
              >
                {section}
              </button>
            ))}
            <button
              onClick={() => scrollTo("products")}
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-400 text-white px-5 py-3 rounded-full text-sm font-semibold cursor-pointer"
            >
              Shop Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
