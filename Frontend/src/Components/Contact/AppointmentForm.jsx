import { useState } from "react";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "General Consultation",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Appointment request sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "General Consultation",
          message: "",
        });
      } else {
        alert("Failed to send request");
      }
    } catch (error) {
      alert("Server not responding");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-md border border-gray-200 dark:border-slate-700">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
        Schedule Your Visit
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
        Fill out the form below and we will get back to you shortly.
      </p>

      <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
        <input
          className="input"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          className="input"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
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
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="sm:col-span-2 mt-4 bg-blue-600 dark:bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-60"
        >
          {loading ? "Sending..." : "Confirm Booking →"}
        </button>
      </form>
    </div>
  );
}
