import axios from "axios";

const sendMail = async (to, subject, htmlContent) => {
  try {
    console.log("📤 Sending email to:", to);
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
    console.log("✅ Email sent successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "❌ Email send failed:",
      error.response?.data || error.message
    );
  }
};

export default sendMail;
