import React from "react";
import { motion } from "framer-motion";
import { Brush, Award, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="w-full text-black py-20 px-6 text-center bg-white">
      {/* Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About ARC Studio ✨
      </motion.h2>

      {/* Sub Text */}
      <motion.p
        className="max-w-2xl mx-auto text-gray-700 text-lg leading-relaxed mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        ARC Studio is a modern digital playground for creators worldwide. From
        artists to entrepreneurs — anyone can create stunning posters and
        wallpapers in just a few clicks. No professional design skills required!
      </motion.p>

      {/* Icons Features Set */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* 1️⃣ */}
        <motion.div
          className="p-6 bg-white rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.07)] border border-gray-200 hover:shadow-lg transition"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Brush
            size={42}
            className="mx-auto mb-4 text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]"
          />
          <h3 className="font-bold text-xl mb-2">Creativity for All</h3>
          <p className="text-gray-600 text-sm">
            We simplify design so every idea can turn into art.
          </p>
        </motion.div>

        {/* 2️⃣ */}
        <motion.div
          className="p-6 bg-white rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.07)] border border-gray-200 hover:shadow-lg transition"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Users
            size={42}
            className="mx-auto mb-4 text-cyan-300 drop-shadow-[0_0_10px_rgba(0,200,255,0.6)]"
          />
          <h3 className="font-bold text-xl mb-2">Community First</h3>
          <p className="text-gray-600 text-sm">
            Connect, share and be inspired by other modern creators.
          </p>
        </motion.div>

        {/* 3️⃣ */}
        <motion.div
          className="p-6 bg-white rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.07)] border border-gray-200 hover:shadow-lg transition"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Award
            size={42}
            className="mx-auto mb-4 text-cyan-200 drop-shadow-[0_0_10px_rgba(0,255,200,0.6)]"
          />
          <h3 className="font-bold text-xl mb-2">Premium Quality</h3>
          <p className="text-gray-600 text-sm">
            Download sharp, high-resolution artwork every single time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
