import { motion } from 'framer-motion';
import mechanicImg from '@/assets/mechanic_trust.png';

export const TrustSection = () => {
  return (
    <section className="py-24 bg-surface-0 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">
              4.9 no Google<span className="text-primary">.</span><br/>
              <span className="text-zinc-500">Transparência Total.</span>
            </h2>
            <div className="space-y-6 text-xl text-zinc-400 font-light leading-relaxed">
              <p>
                A <strong className="text-white">Oficina Jac Motors</strong> é a especialista que você confiaria para cuidar do motor e câmbio do seu carro. 
              </p>
              <p>
                Somos especialistas em JAC e motor Lifan. Resolvendo problemas complexos de injeção e câmbio CVT com peças originais e diagnóstico preciso.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <div className="bg-surface-1 p-6 rounded-3xl border border-white/5">
                <p className="font-serif italic text-lg text-zinc-200">
                  "Conhece bem o produto e realiza um ótimo trabalho com a sua equipe."
                </p>
                <p className="mt-3 text-sm font-bold text-primary tracking-widest">— Marcelo Matheus</p>
              </div>
              <div className="bg-surface-1 p-6 rounded-3xl border border-white/5">
                <p className="font-serif italic text-lg text-zinc-200">
                  "Me ajudou no que eu precisa, trocou a peça rápido."
                </p>
                <p className="mt-3 text-sm font-bold text-primary tracking-widest">— Márcia Leite</p>
              </div>
              <div className="bg-surface-1 p-6 rounded-3xl border border-white/5">
                <p className="font-serif italic text-lg text-zinc-200">
                  "Serviço especializado de primeira, resolveram o problema do câmbio do meu JAC rapidinho com muita transparência."
                </p>
                <p className="mt-3 text-sm font-bold text-primary tracking-widest">— João Silva</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-4/5 border border-white/10 shadow-2xl">
              <img
                src={mechanicImg}
                alt="Oficina Jac Motors - Confiança e Profissionalismo"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-surface-0 via-transparent to-transparent opacity-80" />
            </div>
            <div className="absolute -z-10 -inset-10 bg-linear-to-tr from-primary/20 to-transparent blur-3xl opacity-50 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
