import axios from "axios";

// ✅ Brevo mail sender using HTTPS API
const sendMail = async (to, subject, htmlContent) => {
  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: { email: process.env.SENDER_EMAIL },
        to: [{ email: to }],
        subject,
        htmlContent,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("✅ Email sent successfully to:", to);
    return response.data;
  } catch (error) {
    console.error(
      "❌ Email send failed:",
      error.response?.data || error.message
    );
    throw new Error("Email send failed");
  }
};

export default sendMail;
