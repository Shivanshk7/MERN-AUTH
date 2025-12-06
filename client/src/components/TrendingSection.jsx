import React from "react";
import { motion } from "framer-motion";

// Posters Import
import poster1 from "../assets/posters/poster1.png";
import poster2 from "../assets/posters/poster2.png";
import poster3 from "../assets/posters/poster3.png";
import poster4 from "../assets/posters/poster4.png";
import poster5 from "../assets/posters/poster5.png";
import poster6 from "../assets/posters/poster6.png";

// Wallpapers Import
import wall1 from "../assets/wallpapers/wall1.png";
import wall2 from "../assets/wallpapers/wall2.png";
import wall3 from "../assets/wallpapers/wall3.png";

import wall7 from "../assets/wallpapers/wall7.png";
import wall8 from "../assets/wallpapers/wall8.png";
import wall9 from "../assets/wallpapers/wall9.png";

const posters = [poster1, poster2, poster3, poster4, poster5, poster6];
const wallpapers = [wall1, wall2, wall3, wall7, wall8];

// Grid Display Component
const GridDisplay = ({ title, items }) => (
  <section className="py-24 text-center text-white">
    <motion.h2
      className="text-3xl sm:text-4xl font-semibold mb-14"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {title}
    </motion.h2>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
      {items.map((src, i) => (
        <motion.div
          key={i}
          className="rounded-xl overflow-hidden bg-black/40 border border-white/10 hover:border-white/30
          cursor-pointer transition-all hover:scale-[1.06] hover:shadow-[0_0_25px_rgba(0,255,255,0.4)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
            draggable={false}
          />
        </motion.div>
      ))}
    </div>
  </section>
);

const TrendingSection = () => {
  return (
    <div className="relative z-10 bg-transparent">
      <GridDisplay title="Trending Posters 🔥" items={posters} />
      <GridDisplay title="Trending Wallpapers 🖼️" items={wallpapers} />
    </div>
  );
};

export default TrendingSection;
