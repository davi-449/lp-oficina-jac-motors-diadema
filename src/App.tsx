import { HeroSection } from './components/sections/HeroSection';
import { SocialProofStrip } from './components/sections/SocialProofStrip';
import { ServicesBentoBox } from './components/sections/ServicesBentoBox';
import { TrustSection } from './components/sections/TrustSection';
import { MapSection } from './components/sections/MapSection';
import { FloatingWhatsApp } from './components/sections/FloatingWhatsApp';
import { Wrench } from 'lucide-react';

const Footer = () => (
  <footer className="bg-[#050505] py-12 border-t border-white/5 text-center px-4">
    <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <Wrench className="text-primary w-5 h-5" />
        <span className="font-bold text-white tracking-widest text-lg uppercase">JAC MOTORS SP</span>
      </div>
      <p className="text-zinc-600 text-sm">
        &copy; {new Date().getFullYear()} Oficina Jac Motors. Especialistas em CVT e tecnologia automotiva.
      </p>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-surface-0 text-white selection:bg-primary/30 selection:text-white font-sans overflow-x-hidden">
      <main>
        <HeroSection />
        <SocialProofStrip />
        <ServicesBentoBox />
        <TrustSection />
        <MapSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
