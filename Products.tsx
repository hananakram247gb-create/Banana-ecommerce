import { useState } from "react";
import { products, Product } from "../data";
import ProductCard from "./ProductCard";

const categories = [
  { key: "all", label: "All Products" },
  { key: "premium", label: "Premium" },
  { key: "organic", label: "Organic" },
  { key: "gifts", label: "Gift Sets" },
  { key: "specialty", label: "Specialty" },
  { key: "snacks", label: "Snacks" },
];

interface ProductsProps {
  onAddToCart: (product: Product) => void;
}

export default function Products({ onAddToCart }: ProductsProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-20 sm:py-28 bg-gradient-to-b from-amber-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-amber-600 text-sm font-semibold tracking-widest uppercase mb-3">
            Our Collection
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Polished Bananas
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Each banana in our collection is meticulously selected and polished by hand,
            ensuring you receive only the finest fruit nature has to offer.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === cat.key
                  ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-white shadow-lg shadow-amber-200"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-amber-300 hover:text-amber-600"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
}
