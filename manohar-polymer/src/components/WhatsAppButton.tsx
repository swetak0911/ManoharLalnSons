import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919999999999"; // Replace with actual number
const MESSAGE = "Hello, I'm interested in your polymer products. Please share more details.";

const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110"
  >
    <MessageCircle size={28} />
  </a>
);

export default WhatsAppButton;
