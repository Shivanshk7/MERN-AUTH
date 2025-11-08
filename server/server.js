import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
//import { connect } from "mongoose";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 4000;
connectDB();

const allowedOrigins = [
  "http://localhost:5173", // local dev
  "https://mern-auth-frontend-qtwh.onrender.com", // deployed frontend
];

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: allowedOrigins, // exact frontend URL
    credentials: true, // allow cookies / token
  })
);
// API Endpoints
app.get("/", (req, res) => res.send("API Working"));
app.use("/api/auth", authRouter);
//console.log("Auth routes loaded!"); //dfghjgfc
// ✅ Test route to verify router loading
//app.get("/api/auth/test", (req, res) => {
//  res.send("Auth router is working!");
//});
app.use("/api/user", userRouter);

import sendMail from "./config/nodemailer.js"; // make sure path is correct

app.get("/test-mail", async (req, res) => {
  try {
    await sendMail(
      "yourEmail@gmail.com", // apna actual Gmail id daal
      "Render Mail Test ✅",
      "<h2>Mail working perfectly 🚀</h2>"
    );
    res.send("✅ Mail sent successfully");
  } catch (err) {
    console.error("❌ Mail send failed:", err.response?.data || err.message);
    res.status(500).send("❌ Mail failed");
  }
});

app.listen(port, () => console.log(`Server started on PORT:${port}`));
