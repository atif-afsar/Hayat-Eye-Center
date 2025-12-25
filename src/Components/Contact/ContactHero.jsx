export default function ContactHero() {
  return (
    <section className="pt-28 pb-14 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-28 h-28 rounded-full bg-white dark:bg-slate-800 
                          flex items-center justify-center 
                          shadow-md ring-2 ring-blue-100 dark:ring-blue-500/30">
            <img
              src="/images/hayatLogo.png"   
              alt="Hayat Eye Center Logo"
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
          Get in Touch
        </h1>

        {/* Description */}
        <p className="mt-4 text-lg text-blue-600 dark:text-blue-300 max-w-2xl mx-auto">
          We are here to help you see better. Reach out to our team in Aligarh
          for appointments, emergencies, or general inquiries.
        </p>

      </div>
    </section>
  );
}
