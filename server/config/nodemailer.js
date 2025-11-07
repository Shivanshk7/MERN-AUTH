import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587, // ✅ Render-safe port
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  secureConnection: false, // ✅ instead of 'secure'
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log("❌ SMTP Connection Failed:", error.message);
  } else {
    console.log("✅ SMTP Server Ready to send mail");
  }
});

export default transporter;
