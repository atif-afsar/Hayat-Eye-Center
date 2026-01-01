import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="tel:9536942000"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed 
        bottom-6 
        right-6 
        z-50 
        flex 
        items-center 
        gap-3
        bg-[#25D366]
        text-white
        px-5 
        py-3
        rounded-full
        shadow-xl
        hover:scale-105
        hover:shadow-2xl
        transition
      "
    >
      <MessageCircle size={22} />
      <span className="hidden sm:block font-semibold">
        WhatsApp
      </span>
    </a>
  );
}
