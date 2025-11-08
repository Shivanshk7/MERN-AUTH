import axios from "axios";

const sendMail = async (to, subject, htmlContent) => {
  try {
    console.log("Sending email to:", to);
    console.log(
      "🔑 BREVO_API_KEY:",
      process.env.BREVO_API_KEY ? "Loaded" : "Missing"
    );
    console.log("📧 SENDER_EMAIL:", process.env.SENDER_EMAIL);

    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "ARC Studio",
          email: process.env.SENDER_EMAIL,
        },
        to: [{ email: to }],
        subject,
        htmlContent,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
        timeout: 10000, // 10 sec timeout
      }
    );

    console.log("Email sent successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Email send failed:");
    console.error("Status:", error.response?.status);
    console.error("Data:", error.response?.data);
    console.error("Message:", error.message);
  }
};

export default sendMail;
