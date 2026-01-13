const cards = [
  {
    title: "Visit Us",
    desc: "Kela Nagar Chauraha, Jivangarh Road, Aligarh\nUttar Pradesh, 202001",
    icon: "📍",
  },
  {
    title: "Call Us",
    desc: "+91 9007966173\nMon–Sat, 9am–7pm",
    icon: "📞",
  },
  {
    title: "Email Us",
    desc: "hayateyecentre786@gmail.com",
    icon: "✉️",
  },
  {
    title: "Working Hours",
    desc: "Mon–Sat: 9AM – 7PM\nSunday: Closed",
    icon: "⏰",
  },
];

export default function ContactInfoCards() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((item, i) => (
          <div
            key={i}
            className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-slate-700"
          >
            <div className="text-2xl mb-3">{item.icon}</div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">{item.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 whitespace-pre-line">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
