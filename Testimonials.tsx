import { Star, Quote } from "lucide-react";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-gradient-to-b from-white to-amber-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-amber-600 text-sm font-semibold tracking-widest uppercase mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loved by Banana Connoisseurs
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Don't just take our word for it — hear from the world's most discerning fruit enthusiasts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-amber-200 group relative"
            >
              <Quote className="w-10 h-10 text-amber-200 mb-4 group-hover:text-amber-300 transition-colors" />

              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 italic">"{t.text}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-11 h-11 bg-gradient-to-br from-amber-400 to-yellow-300 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
