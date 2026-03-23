import { motion } from 'framer-motion';

export const PulseRing = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative inline-flex group pointer-events-auto">
      <motion.div
        className="absolute inset-0 rounded-full bg-primary opacity-40"
        initial={{ scale: 0.8, opacity: 0.8 }}
        animate={{ scale: 1.5, opacity: 0 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
      />
      <motion.div
        className="absolute inset-0 rounded-full bg-primary opacity-20"
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: 1.8, opacity: 0 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut", delay: 0.15 }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
