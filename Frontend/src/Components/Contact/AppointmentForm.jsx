import { useState } from "react";

export default function AppointmentForm() {
  const API_URL = "https://hayat-eye-center-backend.vercel.app";

  console.log("API URL:", API_URL); // ✅ check in browser console

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "General Consultation",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | success | error
  const [statusMsg, setStatusMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      if (!API_URL) {
        throw new Error("VITE_API_URL is missing");
      }

      const res = await fetch(`${API_URL}/send-mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.message || "Failed to send");
      }

      setStatus("success");
      setStatusMsg("Appointment request sent successfully 🎉");

      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "General Consultation",
        message: "",
      });

      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("FORM ERROR:", err);
      setStatus("error");
      setStatusMsg(err.message || "Server not responding");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-md border">
      <h3 className="text-xl font-semibold mb-1">Schedule Your Visit</h3>

      {status !== "idle" && (
        <div
          className={`mb-5 rounded-xl px-4 py-3 text-sm font-medium
          ${
            status === "success"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {statusMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
        <input className="input" name="name" required value={formData.name} onChange={handleChange} placeholder="Full Name" />
        <input className="input" name="phone" required value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
        <input className="input" type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Email Address" />

        <select className="input" name="service" value={formData.service} onChange={handleChange}>
          <option>General Consultation</option>
          <option>Cataract</option>
          <option>LASIK</option>
        </select>

        <textarea
          className="input sm:col-span-2 h-32"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your issue..."
        />

        <button
          type="submit"
          disabled={loading}
          className="sm:col-span-2 mt-4 bg-blue-600 text-white py-3 rounded-xl font-semibold"
        >
          {loading ? "Sending..." : "Confirm Booking"}
        </button>
      </form>
    </div>
  );
}
