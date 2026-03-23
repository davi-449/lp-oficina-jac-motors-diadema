import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export const FloatingWhatsApp = () => {
  const WHATSAPP_LINK = "https://wa.me/5511994084135?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20revis%C3%A3o%20especializada!";

  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contato Rápido WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" as const, stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 bg-whatsapp text-white p-4 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] flex items-center justify-center group"
    >
      <Phone className="w-8 h-8 group-hover:scale-110 transition-transform" />
      <span className="absolute inset-0 rounded-full border-2 border-whatsapp animate-ping opacity-50" />
    </motion.a>
  );
};
