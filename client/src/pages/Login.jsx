import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext.jsx";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const { backendUrl, setIsLoggedin, getUserData } = useContext(AppContent);

  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      //axios.defaults.withCredentials = true;

      const url =
        state === "Sign Up"
          ? `${backendUrl}/api/auth/register`
          : `${backendUrl}/api/auth/login`;

      const body =
        state === "Sign Up" ? { name, email, password } : { email, password };

      const { data } = await axios.post(url, body, { withCredentials: true });

      if (data.success) {
        if (data.token) {
          localStorage.setItem("token", data.token); // ✅ Safari fix
        }
        setIsLoggedin(true);
        getUserData();
        navigate("/");
      } else toast.error(data.message);
    } catch (err) {
      toast.error(err.message);
    }
  };
  //useeffect

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden px-6 sm:px-10 md:px-8">
      {/* Animated Moving Lines / Blocks Background */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
        {/* Horizontal lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] animate-move-lines-h" />
        {/* Vertical lines */}
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

      {/* Original Form/Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[380px] sm:max-w-[420px] bg-[#101010]/80 border border-[#2E2E2E] px-8 sm:px-10 py-10 sm:py-12 text-white shadow-[0_0_50px_rgba(158,92,243,0.15)] backdrop-blur-md "
      >
        {/* Form content stays exactly the same */}
        <motion.h2
          key={state}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-semibold text-center mb-3 tracking-tight"
        >
          {state === "Sign Up" ? "Create Account" : "Welcome Back"}
        </motion.h2>
        <p className="text-center text-xs sm:text-sm text-gray-400 mb-8">
          {state === "Sign Up"
            ? "Join us and start your journey"
            : "Login to continue"}
        </p>

        <motion.form
          onSubmit={onSubmitHandler}
          className="space-y-4 sm:space-y-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {state === "Sign Up" && (
            <motion.div
              whileFocus={{ scale: 1.02 }}
              className="flex items-center gap-3 w-full px-4 py-3 bg-[#1C1C1C] border border-[#2E2E2E] rounded-lg focus-within:border-[#9E5CF3] transition"
            >
              <img
                src={assets.person_icon}
                alt="person"
                className="w-4 sm:w-5"
              />
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="bg-transparent outline-none text-gray-200 w-full placeholder-gray-500 text-sm"
                type="text"
                placeholder="Full Name"
                required
              />
            </motion.div>
          )}

          <motion.div
            whileFocus={{ scale: 1.02 }}
            className="flex items-center gap-3 w-full px-4 py-3 bg-[#1C1C1C] border border-[#2E2E2E] rounded-lg focus-within:border-[#02F0FF] transition"
          >
            <img src={assets.mail_icon} alt="email" className="w-4 sm:w-5" />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="bg-transparent outline-none text-gray-200 w-full placeholder-gray-500 text-sm"
              type="email"
              placeholder="Email ID"
              required
            />
          </motion.div>

          <motion.div
            whileFocus={{ scale: 1.02 }}
            className="flex items-center gap-3 w-full px-4 py-3 bg-[#1C1C1C] border border-[#2E2E2E] rounded-lg focus-within:border-[#FF914D] transition"
          >
            <img src={assets.lock_icon} alt="lock" className="w-4 sm:w-5" />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="bg-transparent outline-none text-gray-200 w-full placeholder-gray-500 text-sm"
              type="password"
              placeholder="Password"
              required
            />
          </motion.div>

          {state === "Login" && (
            <p
              onClick={() => navigate("/reset-password")}
              className="text-right text-xs sm:text-sm text-[#9E5CF3] cursor-pointer hover:underline hover:text-[#b67fff] transition"
            >
              Forgot password?
            </p>
          )}

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-[#9E5CF3] via-[#02F0FF] to-[#FF914D] text-black font-semibold tracking-wide shadow-[0_0_15px_rgba(158,92,243,0.4)] hover:shadow-[0_0_25px_rgba(158,92,243,0.6)] transition-all duration-300"
          >
            {state}
          </motion.button>
        </motion.form>

        <p className="text-gray-500 text-center text-xs sm:text-sm mt-6">
          {state === "Sign Up" ? (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setState("Login")}
                className="text-[#02F0FF] cursor-pointer hover:underline hover:text-[#5ff6ff]"
              >
                Login
              </span>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <span
                onClick={() => setState("Sign Up")}
                className="text-[#9E5CF3] cursor-pointer hover:underline hover:text-[#b67fff]"
              >
                Sign Up
              </span>
            </>
          )}
        </p>
      </motion.div>

      {/* Extra Animations */}
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

          /* Moving Lines Animations */
          .animate-move-lines-h {
            background-size: 100% 40px;
            animation: moveH 12s linear infinite;
          }
          .animate-move-lines-v {
            background-size: 40px 100%;
            animation: moveV 12s linear infinite;
          }
          @keyframes moveH {
            0% { background-position: 0 0; }
            100% { background-position: 0 40px; }
          }
          @keyframes moveV {
            0% { background-position: 0 0; }
            100% { background-position: 40px 0; }
          }
        `}
      </style>
    </div>
  );
};

export default Login;
