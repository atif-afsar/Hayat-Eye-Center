export default function ContactHero() {
  return (
    <section className="pt-28 pb-16 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">

          {/* Logo */}
          <div className="flex justify-center lg:justify-start mb-6">
            <div
              className="
              w-24 h-24 rounded-full 
              bg-white dark:bg-slate-800
              flex items-center justify-center
              shadow-lg
              ring-2 ring-blue-100 dark:ring-blue-500/30
            "
            >
              <img
                src="/images/hayatLogo.png"
                alt="Hayat Eye Center Logo"
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            Get in <span className="text-blue-600">Touch</span>
          </h1>

          {/* Description */}
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
            We are here to help you see better. Reach out to our team in Aligarh
            for appointments, emergencies, or general inquiries.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          
          {/* Decorative blur */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 dark:bg-blue-500/20 rounded-full blur-3xl" />

          {/* Image Card */}
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl max-w-md">
            <img
              src="/images/img2.jpg" // 👈 hospital / doctor image
              alt="Hayat Eye Center"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
