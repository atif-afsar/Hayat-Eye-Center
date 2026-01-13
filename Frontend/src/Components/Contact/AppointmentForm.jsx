import { useState } from "react";

const API_URL = "http://localhost:5000/send-mail";

export default function AppointmentForm() {
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
      const res = await fetch(API_URL, {
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

      // auto-hide success message
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setStatusMsg("Server not responding. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-md border border-gray-200 dark:border-slate-700 relative overflow-hidden">
      <h3 className="text-xl font-semibold mb-1">Schedule Your Visit</h3>
      <p className="text-sm mb-6 text-gray-600 dark:text-gray-300">
        Fill out the form below and we will get back to you shortly.
      </p>

      {/* STATUS MESSAGE */}
      {status !== "idle" && (
        <div
          className={`mb-5 rounded-xl px-4 py-3 text-sm font-medium transition-all
            ${
              status === "success"
                ? "bg-green-100 text-green-800 border border-green-200"
                : "bg-red-100 text-red-800 border border-red-200"
            }`}
        >
          {statusMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
        <input
          className="input"
          name="name"
          placeholder="Full Name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <input
          className="input"
          name="phone"
          placeholder="Phone Number"
          required
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email Address"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <select
          className="input"
          name="service"
          value={formData.service}
          onChange={handleChange}
        >
          <option>General Consultation</option>
          <option>Cataract</option>
          <option>LASIK</option>
        </select>

        <textarea
          className="input sm:col-span-2 h-32"
          name="message"
          placeholder="Please describe your symptoms or questions..."
          required
          value={formData.message}
          onChange={handleChange}
        />

        <button
          type="submit"
          disabled={loading}
          className="sm:col-span-2 mt-4 bg-blue-600 text-white py-3 rounded-xl font-semibold
                     flex items-center justify-center gap-2
                     hover:bg-blue-700 transition
                     disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading && (
            <span className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin" />
          )}
          {loading ? "Sending..." : "Confirm Booking"}
        </button>
      </form>
    </div>
  );
}
