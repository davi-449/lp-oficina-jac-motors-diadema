import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const SocialProofStrip = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative bg-linear-to-r from-red-950/40 via-red-950/20 to-red-950/40 border-y border-primary/20 py-5 overflow-hidden"
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/10 to-transparent animate-[shimmer_3s_infinite] pointer-events-none" />
      <div className="container mx-auto px-4 max-w-7xl flex flex-wrap items-center justify-center gap-3 text-center relative z-10">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-accent-star text-accent-star" />
          ))}
        </div>
        <span className="text-lg font-bold text-white">4.9 no Google</span>
        <span className="text-zinc-400 text-sm">|</span>
        <span className="text-zinc-300 text-sm font-medium">4,723 Avaliações Reais de Clientes</span>
      </div>
    </motion.section>
  );
};
