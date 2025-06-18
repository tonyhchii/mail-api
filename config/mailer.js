const nodemailer = require("nodemailer");
require("dotenv").config();
const { EMAIL_USER, EMAIL_PASS } = process.env;

console.log("➡️ EMAIL_USER loaded:", Boolean(EMAIL_USER));
console.log("➡️ EMAIL_PASS loaded:", Boolean(EMAIL_PASS));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
  logger: true, // log SMTP conversation to console
  debug: true,
});

module.exports = transporter;
