import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Download, Zap } from "lucide-react";

const features = [
  {
    icon: <Sparkles size={32} className="text-[#9E5CF3]" />,
    title: "Creative Poster Tools",
    desc: "Craft stunning visuals with powerful creative options.",
  },
  {
    icon: <Download size={32} className="text-[#02AEEE]" />,
    title: "High-Resolution Downloads",
    desc: "Access premium and sharp artwork instantly.",
  },
  {
    icon: <Zap size={32} className="text-[#FF914D]" />,
    title: "Fast & Simple Experience",
    desc: "Just a few clicks and you are all set to create.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative z-20 py-20 sm:py-24 text-center px-6 bg-white">
      <motion.h2
        className="text-4xl font-semibold mb-16
        bg-gradient-to-r from-[#9E5CF3] to-[#02AEEE]
        bg-clip-text text-transparent"
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
            className="p-6 rounded-2xl bg-white border border-gray-200
            shadow-lg hover:shadow-2xl hover:border-black/10
            hover:scale-[1.03] transition-all cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <div className="mx-auto mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
