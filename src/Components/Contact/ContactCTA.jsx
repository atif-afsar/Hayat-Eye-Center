export default function ContactCTA() {
  return (
    <section className="mt-16 bg-blue-600 dark:bg-slate-800 rounded-3xl overflow-hidden">
      <div className="grid md:grid-cols-2 items-center">
        <div className="p-10 text-white">
          <h3 className="text-2xl font-bold">Expert Eye Care</h3>
          <p className="mt-3 text-blue-100 dark:text-blue-200">
            Our specialists are ready to provide world-class treatment
            for your eyes.
          </p>
        </div>
        <img
          src="images/about.jpg"
          alt="Doctor"
          className="h-full object-cover"
        />
      </div>
    </section>
  );
}
