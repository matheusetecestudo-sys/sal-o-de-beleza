/**
 * === TEMPLATE DUNO POPULAR UNISEX ===
 * Estilo: Alegre, Moderno, Acessível e Focado em Conversão WhatsApp.
 * Autoria: Desenvolvido por Antigravity (Google Deepmind)
 */

import { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  CheckCircle2, 
  Star, 
  ChevronRight, 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Clock,
  Sparkles,
  ArrowRight,
  Plus,
  Minus,
  Instagram,
  Facebook,
  Scissors,
  User,
  Users,
  Smile
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// === CONFIGURAÇÕES E TEXTOS DO TEMPLATE ===
// Personalize rapidamente os textos e dados aqui.
const SALON_CONFIG = {
  name: "DUNO",
  slogan: "Cuidado de verdade para todo mundo!",
  whatsapp: "5511992876219",
  whatsappMsg: "Olá! Gostaria de agendar um horário no DUNO.",
  city: "São Paulo, SP",
  address: "Rua das Flores, 450 - Centro",
  hours: "Segunda a Sábado: 08:30 às 19:30",
  instagram: "@dunosalao",
  facebook: "dunosalao",
};

// --- Componentes Reutilizáveis ---

const SectionTitle = ({ title, subtitle, centered = true }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}
    >
      <span className="w-10 h-1 bg-primary rounded-full"></span>
      <span className="text-primary font-bold uppercase tracking-widest text-xs tracking-tighter">{SALON_CONFIG.name} SALÃO</span>
      <span className="w-10 h-1 bg-primary rounded-full"></span>
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-display text-text-main leading-tight mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <p className="text-text-muted text-lg max-w-2xl mx-auto font-light leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

const WhatsAppButton = ({ text = "Agendar via WhatsApp", className = "", icon = true }: { text?: string, className?: string, icon?: boolean }) => (
  <motion.a 
    href={`https://wa.me/${SALON_CONFIG.whatsapp}?text=${encodeURIComponent(SALON_CONFIG.whatsappMsg)}`}
    target="_blank"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`btn-whatsapp ${className}`}
  >
    {icon && <MessageCircle size={20} />}
    {text}
  </motion.a>
);

// --- Componentes das Seções ---

const SplashScreen = () => (
  <motion.div 
    key="splash"
    exit={{ opacity: 0, y: -20 }}
    className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center overflow-hidden font-display"
  >
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="text-primary text-6xl font-bold tracking-tighter mb-8"
    >
      {SALON_CONFIG.name}
    </motion.div>
    
    <div className="w-64 h-2 bg-gray-100 relative overflow-hidden rounded-full shadow-inner">
      <motion.div 
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-primary shadow-[0_0_10px_rgba(255,107,0,0.5)]"
      />
    </div>
    
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="mt-6 text-text-muted text-[10px] font-bold tracking-[0.4em] uppercase"
    >
      Carregando sua melhor versão
    </motion.p>
  </motion.div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-3xl font-display font-bold text-primary tracking-tighter">
          {SALON_CONFIG.name}
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold text-text-main hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <WhatsAppButton text="Agendar Horário" className="!py-2.5 !px-6 !text-xs" />
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-text-main" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-semibold text-text-main"
                >
                  {link.name}
                </a>
              ))}
              <WhatsAppButton text="Agendar via WhatsApp" className="mt-4" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 overflow-hidden bg-bg-soft">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/4 z-0"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6 text-secondary">
              <Scissors size={20} />
              <span className="font-display font-bold uppercase tracking-widest text-xs">O SEU SALÃO FAVORITO</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display text-text-main leading-[1.1] mb-8 tracking-tight">
              Visual em <span className="text-primary italic font-normal">Dia</span>, <br />
              Preço Justo e<br />
              Cuidado de Verdade!
            </h1>
            
            <p className="text-xl text-text-muted font-light leading-relaxed max-w-lg mb-10">
              Aqui no <span className="font-bold text-primary">{SALON_CONFIG.name}</span> atendemos todo mundo com um sorriso no rosto e o melhor cuidado do bairro.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton text="Agendar no Zap agora" className="!text-lg !py-5 shadow-primary/30" />
              <motion.a 
                href="#servicos"
                whileHover={{ scale: 1.02 }}
                className="bg-white border-2 border-gray-100 text-text-main px-10 py-5 rounded-full font-bold text-lg hover:border-primary/20 hover:text-primary transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                Ver Tabela <ArrowRight size={20} />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-popular rounded-[40px] md:rounded-[80px] p-3 shadow-2xl relative overflow-hidden group">
              <div className="w-full h-full rounded-[30px] md:rounded-[70px] bg-white overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=2000" 
                  alt="DUNO SALÃO" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <motion.div 
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-secondary text-text-main p-6 rounded-3xl shadow-xl border-4 border-white font-display font-bold text-center z-20"
              >
                Cortes a partir <br /> 
                <span className="text-2xl text-primary font-bold">R$ 35</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<'masc' | 'fem' | 'unisex'>('fem');

  const services = {
    masc: [
      { name: "Corte Masculino", price: "35,00", desc: "Corte clássico, degradê ou social com finalização." },
      { name: "Corte + Barba", price: "55,00", desc: "O combo completo para dar aquele trato no visual." },
      { name: "Barba Completa", price: "25,00", desc: "Desenho da barba com toalha quente e balm." },
      { name: "Sobrancelha (Régua)", price: "15,00", desc: "A limpeza ideal para valorizar o rosto." }
    ],
    fem: [
      { name: "Corte Feminino", price: "60,00", desc: "Corte moderno, repicado ou reto com secagem." },
      { name: "Escova & Finalização", price: "40,00", desc: "Liso impecável ou cachos definidos com brilho." },
      { name: "Coloração Global", price: "120,00", desc: "Pintura completa com produtos que não agridem os fios." },
      { name: "Hidratação de Choque", price: "50,00", desc: "Tratamento rápido para devolver a vida ao cabelo." }
    ],
    unisex: [
      { name: "Lavagem Detox", price: "20,00", desc: "Limpeza profunda do couro cabeludo e relaxamento." },
      { name: "Sobrancelha (Design)", price: "25,00", desc: "Design especializado para alinhar seu olhar." },
      { name: "Selagem Capilar", price: "150,00", desc: "Redução de frizz e brilho intenso por mais tempo." },
      { name: "Matização", price: "70,00", desc: "Correção de tons para cabelos loiros ou grisalhos." }
    ]
  };

  return (
    <section id="servicos" className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Nossos Preços" subtitle="Qualidade de primeira com o preço que cabe no seu bolso." />
        
        <div className="flex bg-bg-soft p-1.5 rounded-3xl mb-16 max-w-lg mx-auto border border-gray-100 shadow-inner">
          {([
            { id: 'masc', label: 'MASCULINO', icon: <User size={16} /> },
            { id: 'fem', label: 'FEMININO', icon: <Users size={16} /> },
            { id: 'unisex', label: 'UNISEX', icon: <Smile size={16} /> }
          ] as const).map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl text-[10px] md:text-xs font-bold transition-all ${activeTab === tab.id ? 'bg-primary text-white shadow-lg' : 'text-text-muted hover:text-primary'}`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services[activeTab].map((s, i) => (
            <div key={i} className="card-service flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 p-8">
              <div className="flex-1">
                <h4 className="text-2xl text-text-main mb-2 tracking-tight">{s.name}</h4>
                <p className="text-text-muted text-sm italic">{s.desc}</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col items-center">
                  <span className="text-[10px] text-primary font-bold uppercase tracking-widest opacity-60">VALOR</span>
                  <span className="text-3xl font-display font-bold text-text-main">R$ {s.price}</span>
                </div>
                <WhatsAppButton text="Agendar" className="!py-2 !px-8 !text-[10px] !bg-primary tracking-widest shadow-primary/20" icon={false} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="sobre" className="py-24 bg-bg-soft">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="aspect-video bg-primary/10 rounded-[3rem] overflow-hidden shadow-2xl relative rotate-3">
          <img 
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1000" 
            alt="Nosso Espaço" 
            className="w-full h-full object-cover -rotate-3 scale-110"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      <div>
        <SectionTitle title="Tratamento Diferenciado" centered={false} />
        <p className="text-text-muted text-lg leading-relaxed mb-8">
          Há 15 anos oferecemos o melhor serviço de beleza do bairro com preço justo. Aqui todo mundo é bem-vindo e sai se sentindo incrível!
        </p>
        <WhatsAppButton text="Chamar no WhatsApp" />
      </div>
    </div>
  </section>
);

const Gallery = () => (
  <section id="galeria" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <SectionTitle title="Nossos Clientes" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        {[1,2,3,4].map((i) => (
          <div key={i} className="aspect-square rounded-3xl overflow-hidden shadow-md group border-4 border-white">
            <img 
              src={`https://images.unsplash.com/photo-${i === 1 ? '1621605815971-fbc98d665033' : i === 2 ? '1595476108010-b4d1f102b1b1' : i === 3 ? '1560066984-138dadb4c035' : '1580618672591-eb180b1a973f'}?auto=format&fit=crop&q=80&w=600`} 
              alt="Cliente" className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    { q: "Quais as formas de pagamento?", a: "Aceitamos Dinheiro, PIX e cartões de Débito e Crédito." },
    { q: "Precisa marcar hora?", a: "Pode vir sem hora marcar, mas agendando pelo Zap você garante que não pega fila!" }
  ];

  return (
    <section id="faq" className="py-24 bg-bg-soft">
      <div className="max-w-3xl mx-auto px-6">
        <SectionTitle title="Dúvidas" />
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 shadow-sm cursor-pointer" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
              <div className="flex justify-between items-center font-bold text-text-main">
                {f.q}
                {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
              </div>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden mt-4 text-text-muted">
                    {f.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-text-main text-white py-20 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div>
        <h3 className="text-3xl font-display font-bold text-primary mb-4">{SALON_CONFIG.name}</h3>
        <p className="text-gray-400">{SALON_CONFIG.address}</p>
      </div>
      <WhatsAppButton />
    </div>
  </footer>
);

const FloatingWhatsApp = () => (
  <a 
    href={`https://wa.me/${SALON_CONFIG.whatsapp}?text=${encodeURIComponent(SALON_CONFIG.whatsappMsg)}`}
    target="_blank"
    className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl animate-whatsapp flex items-center justify-center group"
  >
    <MessageCircle size={32} />
  </a>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <AnimatePresence>
        {isLoading && <SplashScreen />}
      </AnimatePresence>
      <Navbar />
      <Hero />
      <ServicesSection />
      <About />
      <Gallery />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
