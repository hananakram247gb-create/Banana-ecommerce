import { ArrowDown, Sparkles, Shield, Truck } from "lucide-react";
import { stats } from "../data";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bananas.jpg"
          alt="Premium polished bananas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span className="text-amber-200 text-sm font-medium">Hand-Polished to Perfection</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            The World's Most{" "}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
              Exquisite
            </span>{" "}
            Bananas
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
            Each banana is hand-selected, individually polished, and delivered in
            premium packaging. Experience the golden standard of fruit excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-to-r from-amber-500 to-yellow-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Explore Collection
            </button>
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 cursor-pointer"
            >
              Our Story
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-amber-400" />
              <span>Quality Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-amber-400" />
              <span>Free Express Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Hand Polished</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-amber-600/90 to-yellow-500/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-amber-100 text-xs sm:text-sm mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/50" />
      </div>
    </section>
  );
}
