import { motion } from 'framer-motion';

export const PulseRing = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative inline-flex group pointer-events-auto rounded-full group-hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all">
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-0 rounded-full bg-primary opacity-40 mix-blend-screen"
          initial={{ scale: 0.95, opacity: 0.4 }}
          animate={{ scale: 1.15, opacity: 0 }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
        />
        <motion.div
          className="absolute inset-0 rounded-full bg-primary opacity-20 mix-blend-screen"
          initial={{ scale: 0.95, opacity: 0.25 }}
          animate={{ scale: 1.25, opacity: 0 }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeOut", delay: 0.3 }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};
