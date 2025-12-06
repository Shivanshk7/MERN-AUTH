import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

const posters = [poster1, poster2, poster3, poster4, poster5, poster6];
const wallpapers = [wall1, wall2, wall3, wall7, wall8];

const ScrollRow = ({ items }) => {
  const scrollRef = useRef();

  const slide = (direction) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      {/* Left Arrow */}
      <button
        onClick={() => slide("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black transition z-20"
      >
        <ChevronLeft size={26} />
      </button>

      {/* Scrollable Row */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
      >
        {items.map((src, i) => (
          <motion.div
            key={i}
            className="min-w-[240px] h-[340px] rounded-xl overflow-hidden bg-gray-200 shrink-0 cursor-pointer hover:scale-105 hover:shadow-2xl transition-all"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
          >
            <img
              src={src}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </motion.div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => slide("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black transition z-20"
      >
        <ChevronRight size={26} />
      </button>
    </div>
  );
};

const TrendingSection = () => {
  return (
    <section className="bg-white py-24 px-6 text-black relative z-20">
      {/* Posters */}
      <motion.h2
        className="text-3xl sm:text-4xl font-semibold mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Trending Posters 🔥
      </motion.h2>
      <ScrollRow items={posters} />

      {/* Wallpapers */}
      <motion.h2
        className="text-3xl sm:text-4xl font-semibold mt-20 mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Trending Wallpapers 🖼️
      </motion.h2>
      <ScrollRow items={wallpapers} />
    </section>
  );
};

export default TrendingSection;
