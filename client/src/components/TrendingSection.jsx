import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Posters
import poster1 from "../assets/posters/poster1.png";
import poster2 from "../assets/posters/poster2.png";
import poster3 from "../assets/posters/poster3.png";
import poster4 from "../assets/posters/poster4.png";
import poster5 from "../assets/posters/poster5.png";
import poster6 from "../assets/posters/poster6.png";

// Wallpapers
import wall1 from "../assets/wallpapers/wall1.png";
import wall2 from "../assets/wallpapers/wall2.png";
import wall3 from "../assets/wallpapers/wall3.png";

import wall7 from "../assets/wallpapers/wall7.png";
import wall8 from "../assets/wallpapers/wall8.png";

const posters = [poster1, poster2, poster3, poster4, poster5, poster6];
const wallpapers = [wall1, wall2, wall3, wall7, wall8];

const ScrollRow = ({ items, itemHeight }) => {
  const scrollRef = useRef();
  const slide = (dir) => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative group w-full">
      {/* Left Button */}
      <button
        onClick={() => slide("left")}
        className="absolute -left-6 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition z-20"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Cards Row */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4"
      >
        {items.map((img, i) => (
          <motion.div
            key={i}
            className={`min-w-[220px] sm:min-w-[260px] rounded-xl overflow-hidden
                bg-[#111] shadow-[0_0_25px_rgba(0,255,200,0.15)]
                hover:shadow-[0_0_35px_rgba(0,255,200,0.4)]
                transition-all hover:scale-[1.08] cursor-pointer`}
            style={{ height: itemHeight }}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
          >
            <img
              src={img}
              className="w-full h-full object-cover"
              draggable="false"
            />
          </motion.div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={() => slide("right")}
        className="absolute -right-6 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition z-20"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};

const TrendingSection = () => {
  return (
    <section className="py-24 px-6 text-white bg-transparent relative z-20">
      {/* Posters */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-10 drop-shadow-[0_0_20px_rgba(0,255,200,0.4)]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        //hjfeh
      >
        Trending Posters ✨
      </motion.h2>
      <ScrollRow items={posters} itemHeight="320px" />

      {/* Wallpapers */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mt-24 mb-10 drop-shadow-[0_0_20px_rgba(255,0,100,0.4)]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        //hdjb
      >
        Trending Wallpapers 🎥
      </motion.h2>
      <ScrollRow items={wallpapers} itemHeight="420px" />
    </section>
  );
};

export default TrendingSection;
