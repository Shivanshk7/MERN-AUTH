//import { verify } from "jsonwebtoken";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },

  // NEW FIELDS
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  age: { type: Number, default: null },
  gender: { type: String, default: "" }, // male, female, other
  profession: { type: String, default: "" }, // student, employee

  bio: { type: String, default: "" }, // ← NEW FIELD

  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  verifyOtp: { type: String, default: "" },
  verifyOtpExpireAt: { type: Number, default: 0 },
  isAccountVerified: { type: Boolean, default: false },
  resetOtp: { type: String, default: "" },
  resetOtpExpireAt: { type: Number, default: 0 },
});

const userModel = mongoose.model.user || mongoose.model("user", userSchema);

export default userModel;
