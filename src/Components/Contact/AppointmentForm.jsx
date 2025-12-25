export default function AppointmentForm() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-md border border-gray-200 dark:border-slate-700">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
        Schedule Your Visit
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
        Fill out the form below and we will get back to you shortly.
      </p>

      <form className="grid sm:grid-cols-2 gap-4">
        <input className="input" placeholder="Full Name" />
        <input className="input" placeholder="Phone Number" />
        <input className="input" placeholder="Email Address" />
        <select className="input ">
          <option>General Consultation</option>
          <option>Cataract</option>
          <option>LASIK</option>
        </select>
        <textarea
          className="input sm:col-span-2 h-32"
          placeholder="Please describe your symptoms or questions..."
        />
        <button
          type="submit"
          className="sm:col-span-2 mt-4 bg-blue-600 dark:bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Confirm Booking →
        </button>
      </form>
    </div>
  );
}
