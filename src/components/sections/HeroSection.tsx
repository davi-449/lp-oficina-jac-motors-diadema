import { motion } from 'framer-motion';
import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { PulseRing } from '../ui/PulseRing';
import heroBg from '@/assets/hero_bg.png';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})`, backgroundPosition: 'center 30%' }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a]/85 via-[#0a0a0a]/50 to-[#0a0a0a] pointer-events-none" />
      </div>

      <div className="container relative z-10 px-4 mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/10">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-trust opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-trust"></span>
            </span>
            <span className="text-sm font-semibold text-zinc-200 tracking-wide uppercase">⚡ Aberto Agora &bull; 24h &bull; Diadema</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
            Especialistas em <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-amber-300">JAC Motors</span> & Câmbio CVT.
          </h1>

          <p className="text-xl text-zinc-300 mb-10 leading-relaxed font-light">
            Manutenção de alta precisão técnica em motores Lifan e transmissões automáticas, automatizadas e manuais. Garantia e peças de primeira linha.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <PulseRing>
              <Button glow className="h-16 px-10 text-lg bg-accent-trust hover:bg-emerald-600 shadow-[0_0_40px_rgba(34,197,94,0.3)]">
                <Phone className="w-6 h-6 mr-2" />
                Agendar Revisão
              </Button>
            </PulseRing>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-zinc-400 font-medium tracking-wide">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> 4.9 no Google</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> 4,723 Avaliações</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Diagnóstico Computadorizado</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
