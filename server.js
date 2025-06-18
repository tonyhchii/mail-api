const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const contactRoutes = require("./routes/contact");

import rateLimit from "express-rate-limit";

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // max 5 emails/hour per IP
  message: "Too many emails sent—try again later",
  standardHeaders: "draft-8",
  legacyHeaders: false,
});

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("tony-mail-api");
});

app.use("/api/contact", contactLimiter, contactRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
