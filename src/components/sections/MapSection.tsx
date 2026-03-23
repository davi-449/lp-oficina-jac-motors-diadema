import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowUpRight } from 'lucide-react';

export const MapSection = () => {
  return (
    <section className="py-24 bg-surface-0 relative border-t border-white/5">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Venha nos Visitar<span className="text-primary">.</span></h2>

            <div className="space-y-8 mt-12 text-zinc-300">
              <div className="flex items-start gap-4 group">
                <div className="bg-surface-1 p-4 rounded-2xl border border-white/5 group-hover:border-primary/30 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Localização</h4>
                  <p className="text-zinc-400 leading-relaxed font-light">R. Buenos Aíres, 73<br/>Centro, Diadema - SP</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-surface-1 p-4 rounded-2xl border border-white/5 group-hover:border-accent-trust/30 transition-colors">
                  <Clock className="w-6 h-6 text-accent-trust" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Funcionamento Contínuo</h4>
                  <p className="text-zinc-400 font-light">Aberto 24 horas por dia<br/>Domingo a Domingo, incluindo Feriados.</p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=R.+Buenos+Aires,+73+-+Centro,+Diadema+-+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-12 text-zinc-300 hover:text-white font-medium hover:bg-white/5 px-6 py-3 rounded-full transition-colors border border-transparent hover:border-white/10"
            >
              Abrir GPS Agora <ArrowUpRight className="w-4 h-4 text-primary" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 h-[500px] w-full bg-surface-1 rounded-3xl overflow-hidden shadow-2xl relative border border-white/5 isolate"
          >
            <iframe
              src="https://maps.google.com/maps?q=R.%20Buenos%20A%C3%ADres,%2073%20-%20Centro,%20Diadema%20-%20SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(20%) contrast(110%) opacity(85%)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa da Oficina Jac Motors"
              className="absolute inset-0 z-0"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none rounded-3xl ring-1 ring-inset ring-white/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
