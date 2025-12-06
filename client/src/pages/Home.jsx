import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import FeaturesSection from "../components/FeaturesSection.jsx";
//yiod
import HowItWorksSection from "../components/HowItWorksSection.jsx";
import AboutSection from "../components/AboutSection.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  // ❌ Disable Right Click Download
  useEffect(() => {
    const handler = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handler);
    return () => {
      document.removeEventListener("contextmenu", handler);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Base black background */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      ></div>

      {/* Glowing radial light */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-[160px] opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,200,0.7) 0%, rgba(0,255,200,0) 70%)",
        }}
      ></div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, rgba(255,0,150,0.45) 0%, rgba(0,100,255,0.5) 50%, rgba(0,255,200,0.45) 100%)",
        }}
      ></div>

      {/* Bottom dark fade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.8) 45%, rgba(0,0,0,0.95) 65%)",
        }}
      ></div>

      {/* Floating boxes and light dots */}
      <div className="absolute left-[15%] top-[30%] w-[80px] h-[80px] border border-gray-200/20 rounded-sm rotate-6"></div>
      <div className="absolute right-[20%] bottom-[25%] w-[100px] h-[100px] border border-gray-200/20 rounded-sm -rotate-12"></div>
      <div className="absolute right-[10%] bottom-[35%] w-3 h-3 rounded-full bg-cyan-300 opacity-90 shadow-[0_0_20px_rgba(0,255,200,0.8)]"></div>

      {/* Softer bottom white fade */}
      {/* Softer bottom white fade */}

      {/* Main content */}
      <div className="relative z-10 w-full">
        {/* 🧭 Navbar with motion */}
        <motion.div
          className="absolute top-0 left-0 right-0 z-30"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Navbar />
        </motion.div>

        {/* Header below navbar */}
        <div className="flex items-center justify-center min-h-screen sm:pt-32 pt-24">
          <Header />
        </div>
        {/* White Section Wrapper */}
        <div className="relative bg-white text-black z-20 pt-12 rounded-t-2xl">
          {/* Smooth Fade Top */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-white/90"></div>

          {/* New Sections */}
          <FeaturesSection />
          {/* New Sections */}
          <HowItWorksSection />
          <AboutSection />
        </div>

        {/* Footer Dark Return */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
