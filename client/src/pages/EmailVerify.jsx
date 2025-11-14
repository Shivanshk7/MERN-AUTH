import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext.jsx";
import axios from "axios";
import { toast } from "react-toastify";

const EmailVerify = () => {
  axios.defaults.withCredentials = true;

  const { backendUrl, isLoggedin, userData, getUserData } =
    useContext(AppContent);

  const navigate = useNavigate();
  const inputRefs = React.useRef([]);

  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    paste.split("").forEach((char, index) => {
      if (inputRefs.current[index]) inputRefs.current[index].value = char;
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const otp = inputRefs.current.map((i) => i.value).join("");
      const { data } = await axios.post(
        backendUrl + "/api/auth/verify-account",
        { otp }
      );
      data.success ? toast.success(data.message) : toast.error(data.message);
      data.success && getUserData() && navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (isLoggedin && userData?.isAccountVerified) navigate("/");
  }, [isLoggedin, userData, navigate]);

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden px-6 sm:px-10 md:px-8">
      {/* Moving lines background */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] animate-move-lines-h" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] animate-move-lines-v" />
      </div>

      {/* Neon Blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(158,92,243,0.5),transparent_70%)] blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(2,240,255,0.35),transparent_70%)] blur-[120px] animate-pulse-slow" />
      <div className="absolute top-[45%] left-[50%] w-[350px] sm:w-[450px] h-[450px] bg-[radial-gradient(circle,_rgba(255,145,77,0.35),transparent_70%)] blur-[130px] animate-pulse-slow" />

      {/* Logo */}
      <motion.img
        onClick={() => navigate("/")}
        src={assets.arc}
        alt="logo"
        className="absolute left-6 sm:left-12 top-6 w-24 sm:w-28 md:w-32 cursor-pointer drop-shadow-[0_0_25px_rgba(158,92,243,0.8)]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />

      {/* OTP Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[380px] sm:max-w-[420px] bg-[#101010]/80 border border-[#2E2E2E] px-8 sm:px-10 py-10 sm:py-12 text-white shadow-[0_0_50px_rgba(158,92,243,0.15)] backdrop-blur-md"
      >
        <form onSubmit={onSubmitHandler} className="space-y-5">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-3">
            Email Verification
          </h2>
          <p className="text-center text-xs sm:text-sm text-gray-400 mb-8">
            Enter the 6-digit code sent to your email.
          </p>
          <div className="flex justify-between mb-8" onPaste={handlePaste}>
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <input
                  type="text"
                  maxLength="1"
                  key={index}
                  required
                  className="w-12 h-12 bg-[#1C1C1C] text-white text-center text-sm rounded-md focus:border-[#02F0FF] focus:ring-1 focus:ring-[#02F0FF] transition"
                  ref={(e) => (inputRefs.current[index] = e)}
                  onInput={(e) => handleInput(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-[#9E5CF3] via-[#02F0FF] to-[#FF914D] text-black font-semibold tracking-wide rounded-md shadow-[0_0_15px_rgba(158,92,243,0.4)] hover:shadow-[0_0_25px_rgba(158,92,243,0.6)] transition-all duration-300"
          >
            Verify Email
          </motion.button>
        </form>
      </motion.div>

      {/* Extra CSS Animations */}
      <style>
        {`
          .animate-pulse-slow {
            animation: pulse 8s ease-in-out infinite alternate;
          }
          @keyframes pulse {
            0% { transform: scale(0.95); opacity: 0.7; }
            50% { transform: scale(1.05); opacity: 1; }
            100% { transform: scale(0.95); opacity: 0.7; }
          }
          .animate-move-lines-h {
            background-size: 100% 40px;
            animation: moveH 12s linear infinite;
          }
          .animate-move-lines-v {
            background-size: 40px 100%;
            animation: moveV 12s linear infinite;
          }
          @keyframes moveH { 0% { background-position: 0 0; } 100% { background-position: 0 40px; } }
          @keyframes moveV { 0% { background-position: 0 0; } 100% { background-position: 40px 0; } }
        `}
      </style>
    </div>
  );
};

export default EmailVerify;
