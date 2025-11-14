import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";

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
import { assets } from "../assets/assets";

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

  const handleDownload = (img) => {
    const link = document.createElement("a");
    link.href = img;
    link.download = "image.png";
    link.click();
  };

  // 🔒 Protect Route
  useEffect(() => {
    if (!(isLoggedin && userData?.isAccountVerified)) {
      navigate("/login");
    }
  }, [isLoggedin, userData, navigate]);

  // Logo click
  const handleLogoClick = () => {
    if (isLoggedin && userData?.isAccountVerified) navigate("/");
  };

  return (
    <div className="relative min-h-screen text-white px-6 pt-32 pb-20 overflow-hidden">
      {/* Logo */}
      <motion.img
        onClick={handleLogoClick}
        src={assets.arc}
        alt="logo"
        className="absolute left-6 sm:left-12 top-6 w-24 sm:w-28 md:w-32 cursor-pointer drop-shadow-[0_0_25px_rgba(158,92,243,0.8)]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Background same as Home */}
      <div className="absolute inset-0 bg-[#0A0A0A]"></div>

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      ></div>

      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-[160px] opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,200,0.7) 0%, rgba(0,255,200,0) 70%)",
        }}
      ></div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, rgba(255,0,150,0.4) 0%, rgba(0,100,255,0.4) 50%, rgba(0,255,200,0.4) 100%)",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-6">Dashboard</h1>

        <p className="text-white/80 mb-10">
          Explore high-quality wallpapers & posters crafted for ARC Studio
          users.
        </p>

        {/* Wallpapers */}
        <h2 className="text-2xl font-semibold mb-4">Wallpapers</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {wallpapers.map((img, i) => (
            <motion.div
              key={i}
              className="bg-white/10 p-3 rounded-lg backdrop-blur-md border border-white/10 hover:border-white/20 transition"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={img}
                alt=""
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <button
                onClick={() => handleDownload(img)}
                className="w-full bg-white text-black py-2 rounded hover:bg-transparent hover:text-white border border-white transition"
              >
                Download
              </button>
            </motion.div>
          ))}
        </div>

        {/* Posters */}
        <h2 className="text-2xl font-semibold mb-4">Posters</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posters.map((img, i) => (
            <motion.div
              key={i}
              className="bg-white/10 p-3 rounded-lg backdrop-blur-md border border-white/10 hover:border-white/20 transition"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={img}
                alt=""
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <button
                onClick={() => handleDownload(img)}
                className="w-full bg-white text-black py-2 rounded hover:bg-transparent hover:text-white border border-white transition"
              >
                Download
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
