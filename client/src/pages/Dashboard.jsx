import React, { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import wall1 from "../assets/wallpapers/wall1.png";
import wall2 from "../assets/wallpapers/wall2.png";
import wall3 from "../assets/wallpapers/wall3.png";
import wall4 from "../assets/wallpapers/wall4.png";
import wall5 from "../assets/wallpapers/wall5.png";
import wall6 from "../assets/wallpapers/wall6.png";
import wall7 from "../assets/wallpapers/wall7.png";
import wall8 from "../assets/wallpapers/wall8.png";
import wall9 from "../assets/wallpapers/wall9.png";
import wall10 from "../assets/wallpapers/wall10.png";
import wall11 from "../assets/wallpapers/wall11.png";
import wall12 from "../assets/wallpapers/wall12.png";

import poster1 from "../assets/posters/poster1.png";
import poster2 from "../assets/posters/poster2.png";
import poster3 from "../assets/posters/poster3.png";
import poster4 from "../assets/posters/poster4.png";
import poster5 from "../assets/posters/poster5.png";
import poster6 from "../assets/posters/poster6.png";

import AppContent from "../context/AppContext";
import { useNavigate } from "react-router-dom";
//import { assets } from "../assets/assets.js";

const Dashboard = () => {
  const { userData, isLoggedin } = useContext(AppContent);
  const navigate = useNavigate();

  const wallpapers = [
    wall1,
    wall2,
    wall3,
    wall4,
    wall5,
    wall6,
    wall7,
    wall8,
    wall9,
    wall10,
    wall11,
    wall12,
  ];

  const posters = [poster1, poster2, poster3, poster4, poster5, poster6];

  // selected image
  const [selectedImage, setSelectedImage] = useState(wallpapers[0]);
  const [activeTab, setActiveTab] = useState("wallpapers");

  // protect route
  useEffect(() => {
    // 1️⃣ If NOT logged in → Login
    if (!isLoggedin) {
      navigate("/login");
      return;
    }

    // 2️⃣ Logged in but NOT verified → Email Verify
    if (isLoggedin && !userData?.isAccountVerified) {
      navigate("/email-verify");
      return;
    }

    // 3️⃣ Logged in AND Verified → Stay on Dashboard
  }, [isLoggedin, userData]);

  // logo click
  const handleLogoClick = () => {
    if (isLoggedin && userData?.isAccountVerified) navigate("/");
  };

  // download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = selectedImage;
    link.download = "image.png";
    link.click();
  };

  return (
    <div className="relative min-h-screen text-white px-6 sm:px-12 pt-8 pb-24 overflow-hidden">
      {/* LOGO */}
      {/*<motion.img
        onClick={handleLogoClick}
        src="/arc.svg"
        alt="logo"
        className="absolute left-6 sm:left-12 top-6 w-24 sm:w-28 md:w-32 cursor-pointer drop-shadow-[0_0_25px_rgba(158,92,243,0.8)]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
  />*/}

      {/* --- BACKGROUND LAYERS (same home theme) --- */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-[160px] opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,200,0.5) 0%, rgba(0,255,200,0) 70%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, rgba(255,0,150,0.35) 0%, rgba(0,100,255,0.35) 50%, rgba(0,255,200,0.35) 100%)",
        }}
      />

      {/* up */}
      {/* LOGO */}
      <motion.img
        onClick={handleLogoClick}
        src="/arc.svg"
        alt="logo"
        className="mx-auto w-36 h-36 mb-4 cursor-pointer drop-shadow-[0_0_35px_rgba(158,92,243,0.7)] hover:scale-105 transition-all duration-300"
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />

      {/* --- PAGE HEADER --- */}

      <motion.div
        className="relative z-10 text-center mb-8 mt-0"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl sm:text-5xl font-semibold bg-gradient-to-r from-[#9E5CF3] to-[#02F0FF] text-transparent bg-clip-text">
          ARC Studio Dashboard
        </h1>
        <p className="text-gray-300 mt-2">
          Preview & Download Wallpapers and Posters
        </p>
      </motion.div>

      {/* --- MAIN LAYOUT: LEFT PREVIEW + RIGHT LIST --- */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-10">
        {/* LEFT: SELECTED IMAGE PREVIEW */}
        <motion.div
          className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={selectedImage}
              src={selectedImage}
              className="w-full rounded-xl object-cover shadow-[0_0_25px_rgba(255,255,255,0.15)]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleDownload}
            className="w-full mt-6 py-3 bg-gradient-to-r from-[#9E5CF3] via-[#02F0FF] to-[#FF914D] text-black font-semibold tracking-wide rounded-lg shadow-[0_0_15px_rgba(158,92,243,0.4)] hover:shadow-[0_0_25px_rgba(158,92,243,0.6)] transition-all duration-300"
          >
            Download
          </motion.button>
        </motion.div>

        {/* RIGHT: WALLPAPERS / POSTERS LIST */}
        <motion.div
          className="lg:w-[350px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.1)] overflow-hidden h-fit"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {/* Tabs */}
          <div className="flex">
            <button
              className={`flex-1 py-3 ${
                activeTab === "wallpapers"
                  ? "bg-[#02F0FF]/20 text-[#02F0FF] font-semibold"
                  : "text-gray-300"
              }`}
              onClick={() => setActiveTab("wallpapers")}
            >
              Wallpapers
            </button>

            <button
              className={`flex-1 py-3 ${
                activeTab === "posters"
                  ? "bg-[#9E5CF3]/20 text-[#9E5CF3] font-semibold"
                  : "text-gray-300"
              }`}
              onClick={() => setActiveTab("posters")}
            >
              Posters
            </button>
          </div>

          {/* LIST */}
          <div className="divide-y divide-white/10">
            {(activeTab === "wallpapers" ? wallpapers : posters).map(
              (img, i) => (
                <motion.div
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  whileHover={{ scale: 1.02 }}
                  className="p-3 cursor-pointer hover:bg-white/10 transition flex items-center gap-3"
                >
                  <img
                    src={img}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <p className="text-gray-200 text-sm">
                    {activeTab === "wallpapers"
                      ? `Wallpaper ${i + 1}`
                      : `Poster ${i + 1}`}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
