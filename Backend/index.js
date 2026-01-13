import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();

/* ==========================
   MIDDLEWARE
========================== */
app.use(cors({ origin: "*" }));
app.use(express.json());

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

    // 🔹 Create transporter INSIDE request (serverless safe)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS, // APP PASSWORD
      },
    });

    await transporter.sendMail({
      from: `"Website Appointment" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      replyTo: email,
      subject: "New Appointment Request",
      html: `
        <h2>New Appointment</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service || "-"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return res.json({ success: true });
  } catch (error) {
    console.error("Mailer error:", error);
    return res.status(500).json({
      success: false,
      message: "Email sending failed",
    });
  }
});

/* ==========================
   TEST ROUTE
========================== */
app.get("/test", (req, res) => {
  res.json({ message: "Server is alive!" });
});

/* ==========================
   EXPORT (NO app.listen)
========================== */
export default app;
