import React from "react";
import { motion } from "framer-motion";

const HowItWorksSection = () => {
  return (
    <section className="relative z-20 py-28 px-6 text-center text-white">
      <motion.h2
        className="text-4xl font-semibold mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        How It Works — Coming Soon 🚀
      </motion.h2>

      <motion.p
        className="text-white/70 max-w-2xl mx-auto text-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Stay tuned! We are building a cool guided workflow for you 😎✨
      </motion.p>
    </section>
  );
};

export default HowItWorksSection;
