import React, { useContext, useState, useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import AppContent from "../context/AppContext.jsx";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const { userData, backendUrl, setUserData, setIsLoggedin } =
    useContext(AppContent);

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // 🔵 NEW STATES FOR PROFILE PANEL
  const [profileOpen, setProfileOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [profession, setProfession] = useState("");
  const [bio, setBio] = useState("");

  // ✅ Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(
        backendUrl + "/api/auth/send-verify-otp"
      );
      if (data.success) {
        navigate("/email-verify");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
      setMenuOpen(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + "/api/auth/logout");

      if (data.success) {
        // ✅ clear React auth state
        setIsLoggedin(false);
        setUserData(false);

        // ✅ clear token if stored (for Safari / mobile safety)
        localStorage.removeItem("token");

        // ✅ full reload to reset context
        window.location.href = "/";
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // 🔵 UPDATE PROFILE API
  const updateUserProfile = async () => {
    try {
      if (bio.length > 150) {
        toast.error("Bio must be under 150 characters");
        return;
      }

      axios.defaults.withCredentials = true;

      const { data } = await axios.post(
        backendUrl + "/api/user/update-profile",
        {
          firstName,
          lastName,
          age,
          gender,
          profession,
          bio,
        }
      );

      if (data.success) {
        toast.success("Profile Updated!");
        setUserData(data.userData);
        setProfileOpen(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0 z-50">
        <img
          src={assets.arc}
          alt="logo"
          className="w-28 sm:w-32 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {userData ? (
          <div
            ref={menuRef}
            className="relative group"
            onClick={() => setMenuOpen((prev) => !prev)} // 👈 tap toggle (mobile)
          >
            <div className="w-8 h-8 flex justify-center items-center rounded-full bg-black text-white cursor-pointer select-none">
              {userData.name[0].toUpperCase()}
            </div>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-0 right-0 z-20 text-black rounded pt-10 transition-all duration-200 ${
                menuOpen ? "block" : "hidden"
              } group-hover:block`} // 👈 hover + tap both work
            >
              <ul className="list-none m-0 p-2 bg-gray-100 text-sm rounded shadow-md min-w-[120px]">
                {/* OPEN PROFILE PANEL */}
                <li
                  onClick={() => {
                    setProfileOpen(true);
                    setMenuOpen(false);

                    // Load user data in inputs
                    setFirstName(userData.firstName || "");
                    setLastName(userData.lastName || "");
                    setAge(userData.age || "");
                    setGender(userData.gender || "");
                    setProfession(userData.profession || "");
                    setBio(userData.bio || "");
                  }}
                  className="py-1 px-3 hover:bg-gray-200 cursor-pointer"
                >
                  My Profile
                </li>

                {!userData.isAccountVerified && (
                  <li
                    onClick={sendVerificationOtp}
                    className="py-1 px-3 hover:bg-gray-200 cursor-pointer"
                  >
                    Verify email
                  </li>
                )}
                <li
                  onClick={logout}
                  className="py-1 px-3 hover:bg-gray-200 cursor-pointer"
                >
                  Logout
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 border border-white text-black bg-white px-6 py-2 transition-all hover:bg-transparent hover:text-white"
          >
            Login <img src={assets.arrow_icon} alt="arrow" />
          </button>
        )}
      </div>
      {/* 🟣 PROFILE SLIDE PANEL — ARC STUDIO PREMIUM UI */}
      <div
        className={`fixed top-0 right-0 h-full w-80 sm:w-[420px] bg-[#0A0A0A]/95 backdrop-blur-xl border-l border-[#2E2E2E] p-7 z-50 transform transition-transform duration-300 shadow-[0_0_60px_rgba(158,92,243,0.2)] ${
          profileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Grid Lines Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px] opacity-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px] opacity-10"></div>

        {/* Header */}
        <div className="flex items-center justify-between mb-8 relative z-10">
          <h2 className="text-3xl font-semibold text-white tracking-tight drop-shadow-[0_0_10px_rgba(158,92,243,0.8)]">
            Edit Profile
          </h2>
          <button
            onClick={() => setProfileOpen(false)}
            className="text-gray-300 hover:text-white text-2xl transition"
          >
            ✕
          </button>
        </div>

        {/* FORM CONTAINER */}
        <div className="relative z-10 space-y-6">
          {/* Input Group */}
          {[
            {
              label: "First Name",
              value: firstName,
              handler: setFirstName,
            },
            {
              label: "Last Name",
              value: lastName,
              handler: setLastName,
            },
            {
              label: "Age",
              type: "number",
              value: age,
              handler: setAge,
            },
          ].map((field, idx) => (
            <div key={idx} className="space-y-1">
              <label className="text-xs text-gray-300 tracking-wide ml-1">
                {field.label}
              </label>
              <div className="flex items-center gap-3 px-4 py-3 bg-[#1C1C1C]/70 border border-[#2E2E2E] rounded-lg focus-within:border-[#02F0FF] transition">
                <input
                  type={field.type || "text"}
                  value={field.value}
                  onChange={(e) => field.handler(e.target.value)}
                  className="w-full bg-transparent outline-none text-gray-200 text-sm placeholder-gray-500"
                />
              </div>
              {/*for a change */}
            </div>
          ))}

          {/* Gender */}
          <div className="space-y-1">
            <label className="text-xs text-gray-300 ml-1">Gender</label>
            <div className="flex items-center gap-3 px-4 py-3 bg-[#1C1C1C]/70 border border-[#2E2E2E] rounded-lg focus-within:border-[#9E5CF3] transition">
              <select
                //for a change
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full bg-transparent outline-none text-gray-200 text-sm"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Profession */}
          <div className="space-y-1">
            <label className="text-xs text-gray-300 ml-1">Profession</label>
            <div className="flex items-center gap-3 px-4 py-3 bg-[#1C1C1C]/70 border border-[#2E2E2E] rounded-lg focus-within:border-[#FF914D] transition">
              <select
                //for a change
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                className="w-full bg-transparent outline-none text-gray-200 text-sm"
              >
                <option value="">Select Profession</option>
                <option value="student">Student</option>
                <option value="employee">Employee</option>
              </select>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-1">
            <label className="text-xs text-gray-300 ml-1">Bio</label>
            <textarea
              placeholder="Tell us about yourself…"
              className="w-full h-28 px-4 py-3 bg-[#1C1C1C]/70 border border-[#2E2E2E] rounded-lg text-gray-200 text-sm resize-none focus:border-[#02F0FF] transition"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
            <p className="text-right text-[11px] text-gray-400">
              {bio.length}/150
            </p>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="relative z-10 mt-8 flex justify-between">
          <button
            onClick={() => setProfileOpen(false)}
            className="px-6 py-2.5 border border-gray-500 text-gray-300 rounded-lg hover:bg-[#1A1A1A] transition"
          >
            Cancel
          </button>

          <button
            onClick={updateUserProfile}
            className="px-6 py-2.5 bg-gradient-to-r from-[#9E5CF3] via-[#02F0FF] to-[#FF914D] text-black font-semibold rounded-lg shadow-[0_0_15px_rgba(158,92,243,0.4)] hover:shadow-[0_0_25px_rgba(158,92,243,0.7)] transition-all"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
