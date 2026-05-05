import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-400 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] opacity-10 select-none">
        🍌
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Join the Golden Club
        </h2>
        <p className="text-amber-100 text-lg mb-8 max-w-xl mx-auto">
          Get exclusive access to limited-edition batches, seasonal varieties,
          and 10% off your first order.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 max-w-md mx-auto">
            <CheckCircle className="w-6 h-6 text-white" />
            <span className="text-white font-semibold">Welcome to the club! Check your inbox 🎉</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-base"
            />
            <button
              type="submit"
              className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
