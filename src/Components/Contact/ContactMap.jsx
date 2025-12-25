export default function ContactMap() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-700 shadow-sm">
      
      {/* Map Embed */}
      <iframe
        title="Hayat Eye Center Location"
        src="https://www.google.com/maps?q=Aligarh%20Uttar%20Pradesh&output=embed"
        className="w-full h-[300px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Open in Google Maps Button */}
      <div className="p-4 border-t bg-gray-50">
        <a
          href="https://maps.app.goo.gl/2knm43wGNYxJXRhz6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
        >
          📍 Open in Google Maps
        </a>
      </div>
    </div>
  );
}
