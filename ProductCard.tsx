import { Star, ShoppingBag, Heart } from "lucide-react";
import { Product } from "../data";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-amber-200">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            {product.badge}
          </span>
        )}

        {/* Like button */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${liked ? "fill-red-500 text-red-500" : "text-gray-400"}`}
          />
        </button>

        {/* Discount */}
        {product.originalPrice && (
          <span className="absolute bottom-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i < Math.floor(product.rating)
                  ? "fill-amber-400 text-amber-400"
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">
            {product.rating} ({product.reviews.toLocaleString()})
          </span>
        </div>

        <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-amber-700 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            onClick={handleAdd}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
              added
                ? "bg-green-500 text-white scale-95"
                : "bg-gradient-to-r from-amber-500 to-yellow-400 text-white hover:shadow-lg hover:shadow-amber-200 hover:scale-105"
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            {added ? "Added!" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
