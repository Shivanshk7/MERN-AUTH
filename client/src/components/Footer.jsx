import React from "react";
import { Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0A0A0A] text-white py-14 px-6 mt-0 border-t border-white/10">
      {/* Top: Branding + Description */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-2xl font-bold tracking-wide text-cyan-300 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
          ARC Studio
        </h2>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
          A future-forward platform helping young creators build premium posters
          & wallpapers with AI-powered design tools.
        </p>
      </div>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-6 mb-10">
        <a
          href="#"
          className="p-3 rounded-full border border-cyan-400/40 hover:bg-cyan-300 hover:text-black transition shadow-[0_0_12px_rgba(0,255,255,0.4)]"
        >
          <Twitter size={20} />
        </a>
        <a
          href="#"
          className="p-3 rounded-full border border-cyan-400/40 hover:bg-cyan-300 hover:text-black transition shadow-[0_0_12px_rgba(0,255,255,0.4)]"
        >
          <Instagram size={20} />
        </a>
        <a
          href="#"
          className="p-3 rounded-full border border-cyan-400/40 hover:bg-cyan-300 hover:text-black transition shadow-[0_0_12px_rgba(0,255,255,0.4)]"
        >
          <Youtube size={20} />
        </a>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-xs sm:text-sm">
        © {year} ARC Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
