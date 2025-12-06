import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="relative z-20 py-28 px-6 text-center text-white">
      <motion.h2
        className="text-4xl font-semibold mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About ARC Studio ✨
      </motion.h2>

      <motion.p
        className="max-w-2xl mx-auto text-lg text-white/80 leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        ARC Studio is a smart creative platform where designing becomes fast,
        fun and effortless! We are on a mission to make every creator look
        professional — without needing advanced design skills.
      </motion.p>
    </section>
  );
};

export default AboutSection;
