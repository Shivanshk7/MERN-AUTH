import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
//import { connect } from "mongoose";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
//import sendMail from "./config/nodemailer.js";

const app = express();
const port = process.env.PORT || 4000;
connectDB();

const allowedOrigins = [
  "http://localhost:5173", // local dev
  "https://mern-auth-frontend-qtwh.onrender.com", // deployed frontend
];

//(important for Safari cookies)
app.set("trust proxy", 1);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Origin",
    "https://mern-auth-frontend-qtwh.onrender.com"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use(
  cors({
    origin: [
      "https://mern-auth-frontend-qtwh.onrender.com",
      "http://localhost:5173",
    ], // exact frontend URL
    credentials: true, // allow cookies / token
  })
);

app.use(express.json());
app.use(cookieParser());

// API Endpoints
app.get("/", (req, res) => res.send("API Working"));
app.use("/api/auth", authRouter);
//console.log("Auth routes loaded!"); //dfghjgfc

//app.get("/api/auth/test", (req, res) => {
//  res.send("Auth router is working!");
//});
app.use("/api/user", userRouter);

import sendMail from "./config/nodemailer.js";

app.get("/test-mail", async (req, res) => {
  try {
    await sendMail(
      "shivanshkushwaha0007@gmail.com", // personal email
      "Render Mail Test",
      "<h2>Mail working perfectly 🚀</h2>"
    );
    res.send("Mail sent successfully");
  } catch (err) {
    console.error("Mail send failed:", err.response?.data || err.message);
    res.status(500).send("Mail failed");
  }
});

app.listen(port, () => console.log(`Server started on PORT:${port}`));
