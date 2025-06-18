const transporter = require("../config/mailer");
require("dotenv").config();
const { EMAIL_USER } = process.env;
const sendContactEmail = async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form Message from ${firstName} ${lastName} ${email}`,
      text: message,
    });

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email failed:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};

module.exports = { sendContactEmail };
