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
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("CORS not allowed for this origin: " + origin), false);
    },
    credentials: true, // allow cookies / tokens
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

app.listen(port, () => console.log(`Server started on PORT:${port}`));
