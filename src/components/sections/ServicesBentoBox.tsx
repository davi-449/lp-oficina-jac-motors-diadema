import { motion } from 'framer-motion';
import { Wrench, Zap, Settings, Activity } from 'lucide-react';
import { MouseFollowCard } from '../ui/MouseFollowCard';

export const ServicesBentoBox = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <section className="py-24 bg-surface-0 relative z-10" id="servicos">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">Oficina Especializada, <br/><span className="text-zinc-500">Tecnologia de Ponta.</span></h2>
          <p className="text-xl text-zinc-400 max-w-2xl font-light mb-8">
            Diagnóstico avançado e manutenção técnica focada em JAC Motors e Câmbios Automáticos.
          </p>
          <div className="h-px bg-gradient-to-r from-primary/50 via-primary/10 to-transparent w-full max-w-lg" />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]"
        >
          <motion.div variants={item} className="md:col-span-2">
            <MouseFollowCard className="bg-linear-to-br from-surface-1 to-primary/10 border-primary/20">
              <div className="bg-primary/10 p-4 rounded-full w-max mb-auto border border-primary/20">
                <Settings className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Câmbio CVT & Automáticos</h3>
                <p className="text-zinc-400">Especialistas em reparo, manutenção e diagnóstico de câmbios CVT, Automático, Automatizado e Manual.</p>
              </div>
            </MouseFollowCard>
          </motion.div>

          <motion.div variants={item}>
            <MouseFollowCard>
              <div className="bg-surface-2 p-4 rounded-full w-max mb-auto border border-white/5">
                <Activity className="w-10 h-10 text-white group-hover:text-primary transition-colors" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Motores Lifan & Injeção</h3>
                <p className="text-zinc-400">Retífica, módulos de injeção eletrônica de ponta e mecânica fina para toda a linha JAC e Lifan.</p>
              </div>
            </MouseFollowCard>
          </motion.div>

          <motion.div variants={item}>
            <MouseFollowCard>
              <div className="bg-accent-trust/10 p-4 rounded-full w-max mb-auto border border-accent-trust/20">
                <Zap className="w-10 h-10 text-accent-trust" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Elétrica Geral & ABS</h3>
                <p className="text-zinc-400">Diagnóstico computadorizado avançado para sanar panes elétricas e falhas crônicas no sistema ABS.</p>
              </div>
            </MouseFollowCard>
          </motion.div>

          <motion.div variants={item} className="md:col-span-2">
            <MouseFollowCard>
              <div className="bg-surface-2 p-4 rounded-full w-max mb-auto border border-white/5">
                <Wrench className="w-10 h-10 text-white group-hover:text-primary transition-colors" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Revisão Completa Garantida</h3>
                <p className="text-zinc-400">Suspensão, freios, troca de óleo, alternador e motor. Tudo o que seu importado exige com precisão cirúrgica.</p>
              </div>
            </MouseFollowCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
