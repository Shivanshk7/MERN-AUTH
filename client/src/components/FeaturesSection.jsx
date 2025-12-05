import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Download, Zap } from "lucide-react";

const features = [
  {
    icon: <Sparkles size={32} />,
    title: "Creative Poster Tools",
    desc: "Craft stunning visuals with powerful creative options.",
  },
  {
    icon: <Download size={32} />,
    title: "High-Resolution Downloads",
    desc: "Access premium and sharp artwork instantly.",
  },
  {
    icon: <Zap size={32} />,
    title: "Fast & Simple Experience",
    desc: "Just a few clicks and you are all set to create.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative z-10 mt-44 pb-32 text-center px-6">
      <motion.h2
        className="text-4xl font-semibold mb-16 bg-gradient-to-r from-[#9E5CF3] to-[#02F0FF] bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Powerful Creative Features
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((item, i) => (
          <motion.div
            key={i}
            className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[#02F0FF]/40 transition cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <div className="text-[#02F0FF] mx-auto mb-4">{item.icon}</div>
            <h3 className="text-xl font-medium mb-2">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
