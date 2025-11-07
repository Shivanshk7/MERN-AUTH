import React, { useContext } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import AppContent from "../context/AppContext.jsx";

const Header = () => {
  const { userData } = useContext(AppContent);

  return (
    <div className="flex flex-col items-center mt-20 px-4 text-center text-white overflow-hidden">
      {/* Avatar with smooth zoom-in */}
      <motion.img
        src={assets.avatar_icon}
        alt=""
        className="w-36 h-36 rounded-full mb-6"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Greeting text */}
      <motion.h1
        className="flex items-center gap-2 text-xl sm:text-3xl font-medium mb-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Hey {userData ? userData.name : "Artist"}!
        <motion.img
          className="w-8 aspect-square"
          src={assets.hand_wave}
          alt=""
          animate={{ rotate: [0, 20, 0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.h1>

      {/* Heading text */}
      <motion.h2
        className="text-3xl sm:text-5xl font-semibold mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Welcome to ARC Studio!
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="mb-8 max-w-md text-white/90"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Let's start with a quick project tour and we will have you.
      </motion.p>

      {/* Button */}
      <motion.button
        className="border border-white text-black bg-white px-8 py-2.5 transition-all hover:bg-transparent hover:text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started
      </motion.button>
    </div>
  );
};

export default Header;
