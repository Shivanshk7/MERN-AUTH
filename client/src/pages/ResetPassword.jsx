import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext.jsx";
import axios from "axios";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const { backendUrl } = useContext(AppContent);
  axios.defaults.withCredentials = true;

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOtpSubmited, setIsOtpSubmited] = useState(false);

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

  const onSubmitEmail = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        backendUrl + "/api/auth/send-reset-otp",
        { email }
      );
      data.success ? toast.success(data.message) : toast.error(data.message);
      data.success && setIsEmailSent(true);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onSubmitOTP = (e) => {
    e.preventDefault();
    const otpArray = inputRefs.current.map((e) => e.value);
    setOtp(otpArray.join(""));
    setIsOtpSubmited(true);
  };

  const onSubmitNewPassword = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        backendUrl + "/api/auth/reset-password",
        { email, otp, newPassword }
      );
      data.success ? toast.success(data.message) : toast.error(data.message);
      data.success && navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

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

      {/* Card / Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[380px] sm:max-w-[420px] bg-[#101010]/80 border border-[#2E2E2E] px-8 sm:px-10 py-10 sm:py-12 text-white shadow-[0_0_50px_rgba(158,92,243,0.15)] backdrop-blur-md "
      >
        {!isEmailSent && (
          <form onSubmit={onSubmitEmail} className="space-y-5">
            <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-3">
              Reset Password
            </h2>
            <p className="text-center text-xs sm:text-sm text-gray-400 mb-8">
              Enter your registered email address.
            </p>
            <div className="flex items-center gap-3 w-full px-4 py-3 bg-[#1C1C1C] border border-[#2E2E2E] rounded-lg focus-within:border-[#02F0FF] transition">
              <img src={assets.mail_icon} alt="email" className="w-4 sm:w-5" />
              <input
                type="email"
                placeholder="Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent outline-none text-gray-200 w-full placeholder-gray-500 text-sm"
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-[#9E5CF3] via-[#02F0FF] to-[#FF914D] text-black font-semibold tracking-wide shadow-[0_0_15px_rgba(158,92,243,0.4)] hover:shadow-[0_0_25px_rgba(158,92,243,0.6)] transition-all duration-300"
            >
              Submit
            </motion.button>
          </form>
        )}

        {!isOtpSubmited && isEmailSent && (
          <form onSubmit={onSubmitOTP} className="space-y-5">
            <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-3">
              Enter OTP
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
                    className="w-12 h-12 bg-[#1C1C1C] text-white text-center text-sm rounded-md"
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
              className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-[#9E5CF3] via-[#02F0FF] to-[#FF914D] text-black font-semibold tracking-wide shadow-[0_0_15px_rgba(158,92,243,0.4)] hover:shadow-[0_0_25px_rgba(158,92,243,0.6)] transition-all duration-300"
            >
              Submit
            </motion.button>
          </form>
        )}

        {isOtpSubmited && isEmailSent && (
          <form onSubmit={onSubmitNewPassword} className="space-y-5">
            <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-3">
              New Password
            </h2>
            <p className="text-center text-xs sm:text-sm text-gray-400 mb-8">
              Enter your new password below.
            </p>
            <div className="flex items-center gap-3 w-full px-4 py-3 bg-[#1C1C1C] border border-[#2E2E2E] rounded-lg focus-within:border-[#FF914D] transition">
              <img src={assets.lock_icon} alt="lock" className="w-4 sm:w-5" />
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="bg-transparent outline-none text-gray-200 w-full placeholder-gray-500 text-sm"
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-[#9E5CF3] via-[#02F0FF] to-[#FF914D] text-black font-semibold tracking-wide shadow-[0_0_15px_rgba(158,92,243,0.4)] hover:shadow-[0_0_25px_rgba(158,92,243,0.6)] transition-all duration-300"
            >
              Submit
            </motion.button>
          </form>
        )}
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

export default ResetPassword;
