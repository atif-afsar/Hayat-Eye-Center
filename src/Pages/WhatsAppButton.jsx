import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "918090814793"; // country code + number
  const message = encodeURIComponent(
    "Hello! I would like to know more about Hayat Eye Center."
  );

  return (
          <a
          href={`https://wa.me/${phoneNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="
            fixed bottom-6 right-6 z-50
            w-14 h-14 sm:w-44
            flex items-center justify-center sm:justify-start
            rounded-full
            bg-[#25D366]
            text-white
            shadow-xl
            overflow-hidden
            transition-[background-color,width] duration-300
          "
        >
          <div className="flex items-center gap-3 px-4">
            <MessageCircle size={22} />
            <span className="hidden sm:block font-semibold whitespace-nowrap">
              WhatsApp
            </span>
          </div>
        </a>


  );
}
