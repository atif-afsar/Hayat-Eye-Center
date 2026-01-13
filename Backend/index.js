import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

/* ==========================
   CREATE & VERIFY TRANSPORTER
========================== */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS, // ✅ APP PASSWORD ONLY
  },
});

transporter.verify((err, success) => {
  if (err) {
    console.error("✗ Mailer verification failed:", err.message);
  } else {
    console.log("✓ Mailer is ready to send emails");
  }
});

/* ==========================
   SEND MAIL ROUTE
========================== */
app.post("/send-mail", async (req, res) => {
  try {
    const { name, phone, email, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    await transporter.sendMail({
      from: `"Website Appointment" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      replyTo: email,
      subject: "New Appointment Request",
      html: `
        <h2>New Appointment</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return res.json({ success: true });
  } catch (error) {
    console.error("Mailer error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Email sending failed",
    });
  }
});

/* ==========================
   SERVER
========================== */
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});

// test
app.get("/test", (req, res) => {
  res.json({ message: "Server is alive!" });
});