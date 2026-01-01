import { PhoneCall, CalendarCheck, MapPin } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="pt-28 pb-20 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1 mb-4 
            rounded-full bg-blue-100 text-blue-700 text-sm font-medium 
            dark:bg-blue-500/20 dark:text-blue-300">
            <MapPin size={14} /> Trusted Eye Care in Aligarh
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            Get in <span className="text-blue-600">Touch</span> With Us
          </h1>

          {/* Description */}
          <p className="mt-5 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
            At <strong>Hayat Eye Center</strong>, your vision is our priority.
            Whether you need an appointment, emergency eye care, or expert
            consultation — our team is ready to help.
          </p>

          {/* Info Highlights */}
          <div className="mt-6 grid sm:grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-slate-800">
              <CalendarCheck className="text-blue-600" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Same-Day Appointments
              </span>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-slate-800">
              <PhoneCall className="text-blue-600" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Emergency Support
              </span>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-slate-800">
              <MapPin className="text-blue-600" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Central Aligarh Location
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="tel:9536942000"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white 
              font-semibold shadow-lg hover:bg-blue-700 transition"
            >
              Book Appointment
            </a>

           
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">

          {/* Decorative blur */}
          <div className="absolute -top-16 -right-16 w-72 h-72 
            bg-blue-100 dark:bg-blue-500/20 
            rounded-full blur-3xl" />

          {/* Image Card */}
          <div className="relative z-10 rounded-2xl overflow-hidden 
            shadow-2xl max-w-md border border-gray-100 dark:border-slate-700">
            <img
              src="/images/IMG5.jpg"
              alt="Hayat Eye Center"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
