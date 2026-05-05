import { Leaf, Award, Handshake, Eye } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Hand-Selected",
    description:
      "Expert fruit sommeliers inspect every banana for perfect curvature, color, and firmness before it enters our polishing process.",
  },
  {
    icon: Award,
    title: "Artisan Polishing",
    description:
      "Our proprietary 7-step polishing technique uses natural beeswax and coconut oil to achieve the legendary Golden Peel shine.",
  },
  {
    icon: Leaf,
    title: "Sustainably Sourced",
    description:
      "We partner with family farms across Central America and Southeast Asia, paying premium prices for ethical and organic practices.",
  },
  {
    icon: Handshake,
    title: "Satisfaction Guaranteed",
    description:
      "Every order comes with our Golden Promise — if you're not delighted, we'll replace it or refund you, no questions asked.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-amber-200/40">
              <img
                src="/images/hero-bananas.jpg"
                alt="Our polishing process"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-xl sm:text-2xl font-bold mb-1">
                  Crafted with Passion
                </p>
                <p className="text-amber-200 text-sm">Since 2019 — Costa Rica</p>
              </div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 sm:right-8 bg-white rounded-2xl shadow-xl p-5 border border-amber-100 max-w-[220px]">
              <p className="text-3xl font-bold text-amber-600 mb-1">7 Steps</p>
              <p className="text-sm text-gray-500">of artisan polishing in every banana</p>
            </div>
          </div>

          {/* Right — text */}
          <div>
            <span className="inline-block text-amber-600 text-sm font-semibold tracking-widest uppercase mb-3">
              Why Golden Peel
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Not Just a Banana —{" "}
              <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
                An Experience
              </span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              We believe that even the simplest fruit deserves extraordinary care.
              From the moment a banana is harvested to the instant it arrives at
              your door, every step is guided by our obsession with perfection.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title} className="group">
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-amber-100 transition-colors">
                    <f.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
