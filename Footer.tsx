import { Globe, MessageCircle, Video, Camera } from "lucide-react";

const links = {
  Shop: ["All Products", "Premium", "Organic", "Gift Sets", "Snacks"],
  Company: ["Our Story", "Sustainability", "Careers", "Press Kit"],
  Support: ["FAQ", "Shipping Info", "Returns", "Contact Us"],
};

const socials = [
  { icon: Camera, label: "Instagram" },
  { icon: MessageCircle, label: "Twitter" },
  { icon: Globe, label: "Facebook" },
  { icon: Video, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 sm:gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🍌</span>
              <div>
                <h3 className="text-xl font-bold text-white">Golden Peel</h3>
                <p className="text-xs text-amber-500/70 tracking-widest uppercase">Premium Polished</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Bringing you the world's finest polished bananas since 2019.
              Every fruit tells a story of craftsmanship and care.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <button
                  key={s.label}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-amber-500 flex items-center justify-center transition-colors cursor-pointer group"
                  aria-label={s.label}
                >
                  <s.icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{title}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm hover:text-amber-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Golden Peel. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
