import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

let transporter = null;
let usingTestAccount = false;

// Create a transporter for Gmail if credentials are provided; do not verify at startup
if (process.env.EMAIL && process.env.EMAIL_PASS && !process.env.EMAIL.includes("yourgmail")) {
  transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });
} else {
  console.log("Mailer: Gmail credentials not provided or placeholder found; will use test account on first send.");
}

app.post("/send-mail", async (req, res) => {
  try {
    const { name, phone, email, service, message } = req.body;

    const html = `
      <h2>New Appointment Request</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Phone:</b> ${phone || "-"}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Service:</b> ${service || "-"}</p>
      <p><b>Message:</b><br/>${message.replace(/\n/g, "<br/>")}</p>
    `;

    // If transporter isn't initialized (no Gmail creds), create a test account for sending
    if (!transporter) {
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      usingTestAccount = true;
      console.log("Mailer: created Ethereal test account", testAccount.user);
    }

    try {
      const info = await transporter.sendMail({
        from: `"Website Form" <${process.env.EMAIL || "no-reply@example.com"}>`,
        to: process.env.EMAIL || (usingTestAccount ? transporter.options.auth.user : undefined),
        subject: `Appointment Request: ${name}`,
        html,
      });

      console.log("Mail sent:", info.messageId);
      const result = { success: true, messageId: info.messageId };
      if (usingTestAccount) {
        result.previewUrl = nodemailer.getTestMessageUrl(info) || null;
        console.log("Preview URL:", result.previewUrl);
      }
      return res.json(result);
    } catch (sendErr) {
      // If sending with provided transporter failed and we haven't tried test account yet, try ethereal
      console.error("Initial send failed:", sendErr.message || sendErr);
      if (!usingTestAccount) {
        try {
          const testAccount = await nodemailer.createTestAccount();
          transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
              user: testAccount.user,
              pass: testAccount.pass,
            },
          });
          usingTestAccount = true;
          console.log("Mailer: fallback to Ethereal test account", testAccount.user);

          const info2 = await transporter.sendMail({
            from: `"Website Form" <${process.env.EMAIL || testAccount.user}>`,
            to: process.env.EMAIL || testAccount.user,
            subject: `Appointment Request: ${name}`,
            html,
          });

          console.log("Mail sent via Ethereal:", info2.messageId);
          const result2 = { success: true, messageId: info2.messageId, previewUrl: nodemailer.getTestMessageUrl(info2) };
          console.log("Preview URL:", result2.previewUrl);
          return res.json(result2);
        } catch (ethErr) {
          console.error("Ethereal send failed:", ethErr.message || ethErr);
          return res.status(500).json({ success: false, error: ethErr.message || ethErr });
        }
      }
      return res.status(500).json({ success: false, error: sendErr.message || sendErr });
    }
  } catch (error) {
    console.error("Error sending mail:", error);
    res.status(500).json({ success: false, error: error.message || error });
  }
});

app.listen(5000, () =>
  console.log("Mailer server running on http://localhost:5000")
);
