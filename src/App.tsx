/**
 * === DUNO ULTRA-PREMIUM (R$ 5.000+) ===
 * Design: Editorial Minimalist Avant-Garde.
 * Core: Satoshi & Cormorant Garamond.
 * Autoria: Antigravity (Advanced Agentic Design)
 */

import { useState, useEffect, useRef } from 'react';
import { 
  MessageCircle, 
  ArrowRight, 
  Plus, 
  Minus, 
  Instagram, 
  Facebook, 
  Phone, 
  MapPin, 
  Clock,
  Menu,
  X,
  Play
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';

// === CONFIGURAÇÃO CONCIERGE ===
const CONFIG = {
  name: "DUNO",
  headline: "Onde o Clássico Encontra o Novo Chic.",
  subheadline: "Visagismo de Vanguarda e Arquitetura Capilar para sua Identidade Única.",
  whatsapp: "5511992876219",
  whatsappMsg: "Olá Concierge DUNO, gostaria de iniciar minha transformação.",
  address: "Alameda das Estrelas, 100 — Jardins, São Paulo",
  hours: "Terc. a Sáb. — 09h às 21h",
  phone: "(11) 99287-6219"
};

// --- Componentes Luxe ---

const SectionHeader = ({ title, subtitle, count }: { title: string, subtitle?: string, count?: string }) => (
  <div className="mb-32 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
    <div className="flex flex-col gap-6">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="h-1 bg-primary"
      />
      <h2 className="text-6xl md:text-8xl font-display text-text-main leading-none">
        {title}
      </h2>
    </div>
    {subtitle && (
      <div className="max-w-sm">
        <p className="text-text-muted text-sm font-sans font-light leading-relaxed uppercase tracking-[0.2em]">
          {subtitle}
        </p>
      </div>
    )}
  </div>
);

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 6}px, ${e.clientY - 6}px, 0)`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return <div id="custom-cursor" ref={cursorRef} className="hidden lg:block" />;
};

const MagneticLink = ({ text, href }: { text: string, href: string }) => (
  <motion.a 
    href={href}
    target={href.startsWith('http') ? '_blank' : '_self'}
    whileHover={{ y: -5 }}
    className="text-[10px] uppercase font-bold tracking-[0.4em] text-text-main hover:text-primary transition-all relative group"
  >
    {text}
    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full"></span>
  </motion.a>
);

// --- Seções Editorial ---

const Loading = () => (
  <motion.div 
    exit={{ opacity: 0, height: 0 }}
    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    className="fixed inset-0 z-[1000] bg-secondary flex flex-col items-center justify-center overflow-hidden"
  >
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="text-white text-6xl font-display font-medium tracking-tighter italic"
    >
      {CONFIG.name}
    </motion.div>
    <div className="w-12 h-1 bg-primary mt-8 overflow-hidden rounded-full">
      <motion.div 
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-full h-full bg-white"
      />
    </div>
  </motion.div>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-40 md:pt-0 flex items-center bg-white overflow-hidden">
      <div className="editorial-container w-full grid md:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div
           initial={{ opacity: 0, x: -60 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
        >
          <div className="flex items-center gap-4 mb-10">
             <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-primary">Atelier Premiere</span>
          </div>
          <h1 className="text-7xl md:text-[8rem] font-display leading-[0.85] tracking-tight text-secondary mb-12">
            O Novo <br /><span className="italic">Chic</span> <br />Editorial.
          </h1>
          <p className="text-lg text-text-muted max-w-sm font-light leading-relaxed mb-16">
            Onde a harmonia do visagismo europeu encontra a alma brasileira. {CONFIG.name} é a nova autoridade em luxo acessível e arquitetura da beleza.
          </p>
          <div className="flex flex-col sm:flex-row gap-12 items-start sm:items-center">
            <a 
              href={`https://wa.me/${CONFIG.whatsapp}`}
              className="luxury-btn btn-fill"
            >
              Consultoria Concierge
            </a>
            <a href="#servicos" className="text-[10px] uppercase tracking-[0.5em] font-bold group flex items-center gap-4">
               Descubra o Menu <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform duration-500" />
            </a>
          </div>
        </motion.div>
        
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 2, ease: "easeOut" }}
           className="relative aspect-[4/5] overflow-hidden"
        >
           {/* <!-- EDITORIAL HERO IMAGE - World Class Quality --> */}
           <img 
              src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
              alt="Editorial Luxe DUNO"
              referrerPolicy="no-referrer"
           />
           <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none"></div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-8 md:left-20 text-[8px] uppercase tracking-[0.8em] text-secondary/30 hidden md:block">
        São Paulo — SP / Brasil . . . . . . {new Date().getFullYear()}
      </div>
    </section>
  );
};

const About = () => (
  <section id="sobre" className="bg-white py-40">
    <div className="editorial-container grid md:grid-cols-2 gap-32 items-center">
      <motion.div 
         initial={{ opacity: 0, y: 100 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 1.2 }}
         className="relative"
      >
         <div className="aspect-[3/4] bg-bg-soft relative overflow-hidden group">
            <img 
               src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1200" 
               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
               alt="Our Space"
            />
         </div>
         <div className="absolute top-10 -left-10 w-40 h-40 bg-primary/90 flex items-center justify-center text-white text-center hidden md:flex backdrop-blur-sm">
            <p className="font-display italic text-2xl leading-tight">Mãos <br /> de Ouro</p>
         </div>
      </motion.div>
      
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-primary mb-10">Nossa Essência</span>
        <h3 className="text-5xl md:text-7xl font-display mb-12 italic">Arquitetura da Beleza Humana.</h3>
        <p className="text-lg text-text-muted font-light leading-relaxed mb-10 text-justify-custom">
           No {CONFIG.name}, transcendemos o conceito tradicional de salão. Aplicamos os princípios das proporções áureas e do design contemporâneo para desenhar visuais que são extensões da sua identidade. Luxo para nós não é sobre preço, é sobre precisão, cuidado e a alma impressa em cada detalhe.
        </p>
        <div className="grid grid-cols-2 gap-10 py-10 border-y border-gray-100 mt-10">
           <div>
              <p className="text-4xl font-display italic">3k+</p>
              <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400">Mulheres Icônicas</p>
           </div>
           <div>
              <p className="text-4xl font-display italic">2k+</p>
              <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400">Homens Versáteis</p>
           </div>
        </div>
        <a href="#servicos" className="luxury-btn btn-fill mt-20 inline-block text-center">Saiba Mais</a>
      </div>
    </div>
  </section>
);

const Services = () => {
  const [activeTab, setActiveTab] = useState<'fem' | 'masc' | 'uni'>('fem');

  const menu = {
    fem: [
      { name: "Arquitetura de Corte", price: "45", desc: "Escultura baseada na geometria facial.", img: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800" },
      { name: "Alquimia Cromática", price: "85", desc: "Coloração personalizada de alta fidelidade.", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800" },
      { name: "Iluminação de Gala", price: "120", desc: "Luzes e mechas com design artístico.", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800" },
      { name: "Ritual Editorial", price: "35", desc: "Lavagem sensorial e finalização de estúdio.", img: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=800" }
    ],
    masc: [
      { name: "Modern Grooming", price: "35", desc: "Corte masculino com visagismo contemporâneo.", img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800" },
      { name: "Combo Designer", price: "55", desc: "Curadoria de corte e barba completa.", img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800" },
      { name: "Barba Escultural", price: "28", desc: "Alinhamento com toalha quente e ozônio.", img: "https://images.unsplash.com/photo-1599351431247-f10b21ce963f?w=800" },
      { name: "Color Camo", price: "45", desc: "Camuflagem natural de fios para barba.", img: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800" }
    ],
    uni: [
      { name: "Terapia Capilar", price: "45", desc: "Infusão de nutrientes e restauração da fibra.", img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800" },
      { name: "Luxe Manicure", price: "50", desc: "Curadoria de unhas com esmaltação francesa.", img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800" },
      { name: "Arquitetura do Olhar", price: "20", desc: "Design de sobrancelhas personalizado.", img: "https://images.unsplash.com/photo-1522337443140-52f20c810756?w=800" },
      { name: "Sinfonia Capilar", price: "65", desc: "Reconstrução premium e massagem craniana.", img: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800" }
    ]
  };

  return (
    <section id="servicos" className="bg-bg-soft py-40">
      <div className="editorial-container">
        <SectionHeader 
           title="O Menu Premiere" 
           subtitle="Seleção curada de especialidades para redefinir seu visual com exclusividade."
        />
        
        {/* Tabs de Alta Costura */}
        <div className="flex border-b border-gray-200 mb-20">
          {([
            { id: 'fem', label: 'WOMAN' },
            { id: 'masc', label: 'MAN' },
            { id: 'uni', label: 'SPECIALTIES' }
          ] as const).map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-8 px-10 text-[10px] font-bold uppercase tracking-[0.5em] transition-all relative ${activeTab === tab.id ? 'text-primary' : 'text-gray-400 hover:text-secondary'}`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div layoutId="tabLuxe" className="absolute bottom-0 left-0 w-full h-[2px] bg-primary" />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid md:grid-cols-2 gap-x-20 gap-y-16"
          >
            {menu[activeTab].map((item, i) => (
              <div key={i} className="flex gap-8 group cursor-pointer border-b border-gray-100 pb-12 transition-all hover:border-primary">
                <div className="w-32 h-32 overflow-hidden flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-1000">
                   <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                   <div className="flex justify-between items-baseline mb-4">
                      <h4 className="text-3xl font-display group-hover:italic transition-all">{item.name}</h4>
                      <p className="text-4xl font-display text-primary">R$ {item.price}</p>
                   </div>
                   <p className="text-sm text-text-muted font-light mb-6 font-sans lowercase italic">{item.desc}</p>
                   <a 
                     href={`https://wa.me/${CONFIG.whatsapp}?text=Desejo agendar: ${item.name}`}
                     className="text-[9px] uppercase font-bold tracking-[0.3em] flex items-center gap-2 group-hover:text-primary"
                   >
                     Reservar Agora <Plus size={12} />
                   </a>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const Portfolio = () => (
  <section className="bg-white py-40">
    <div className="editorial-container">
      <SectionHeader title="Manifesto Visual" subtitle="Recortes memoráveis de transformações que redefinem o futuro do visagismo." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
         {[
           "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=1000",
           "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1000",
           "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1000"
         ].map((img, i) => (
           <motion.div 
             key={i}
             initial={{ opacity: 0, scale: 1.1 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1.5, delay: i * 0.2 }}
             className="aspect-[3/4] overflow-hidden grayscale grayscale hover:grayscale-0 transition-all duration-1000"
           >
             <img src={img} className="w-full h-full object-cover" alt="Portfolio Editorial" />
           </motion.div>
         ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-secondary text-white pt-40 pb-20 px-8 relative overflow-hidden">
    <div className="editorial-container grid md:grid-cols-3 gap-24 relative z-10">
      <div className="flex flex-col">
        <h3 className="text-6xl font-display italic mb-10">{CONFIG.name}</h3>
        <p className="text-gray-400 font-light leading-relaxed max-w-sm mb-12">
           Transformamos beleza em legado. No DUNO, cada consulta é o início de um novo capítulo na sua narrativa pessoal.
        </p>
        <div className="flex gap-10">
          <Instagram size={24} className="hover:text-primary transition-colors cursor-pointer" />
          <Facebook size={24} className="hover:text-primary transition-colors cursor-pointer" />
        </div>
      </div>
      
      <div className="flex flex-col">
        <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-primary mb-12">Concierge & Local</span>
        <div className="space-y-10 text-gray-300 font-light text-lg">
          <div className="flex gap-4">
            <MapPin size={24} className="text-primary flex-shrink-0" />
            <p>{CONFIG.address}</p>
          </div>
          <div className="flex gap-4">
            <Clock size={24} className="text-primary flex-shrink-0" />
            <p>{CONFIG.hours}</p>
          </div>
          <div className="flex gap-4">
            <MessageCircle size={24} className="text-primary flex-shrink-0" />
            <p>WhatsApp Concierge: <br /><span className="text-primary font-bold">{CONFIG.phone}</span></p>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <h4 className="text-[10px] uppercase font-bold tracking-[0.4em] text-primary mb-12">Reservas</h4>
        <p className="text-gray-400 font-light italic mb-12">Descubra sua versão editorial hoje mesmo.</p>
        <a 
          href={`https://wa.me/${CONFIG.whatsapp}`}
          className="luxury-btn border-white/20 text-white hover:bg-white hover:text-secondary text-center"
        >
          Iniciar Experiência
        </a>
      </div>
    </div>
    
    <div className="editorial-container mt-40 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-[9px] uppercase tracking-[0.6em] text-gray-600 font-bold">
      <p>© {new Date().getFullYear()} {CONFIG.name} SALON — O Futuro do Visagismo.</p>
      <div className="flex gap-12">
        <a href="#" className="hover:text-primary">Legal</a>
        <a href="#" className="hover:text-primary">Privacidade</a>
      </div>
    </div>
  </footer>
);

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-[800] transition-all duration-700 ${scrolled ? 'bg-white/80 backdrop-blur-3xl py-4 shadow-xl shadow-black/5' : 'bg-transparent py-10'}`}>
            <div className="max-w-[1400px] mx-auto px-10 flex justify-between items-center">
                <a href="#home" className="text-4xl font-display font-medium tracking-tighter text-secondary">{CONFIG.name}</a>
                <div className="hidden lg:flex items-center gap-16">
                    <MagneticLink text="Story" href="#sobre" />
                    <MagneticLink text="Menu" href="#servicos" />
                    <MagneticLink text="Manifesto" href="#portfolio" />
                    <a 
                      href={`https://wa.me/${CONFIG.whatsapp}`}
                      className="text-[10px] font-bold uppercase tracking-[0.4em] bg-secondary text-white px-8 py-3 hover:bg-primary transition-all duration-500"
                    >
                      Book Now
                    </a>
                </div>
                <button className="lg:hidden text-secondary"><Menu size={32} /></button>
            </div>
        </nav>
    );
};

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="selection:bg-primary/20 selection:text-primary min-h-screen">
      <AnimatePresence>
        {loading && <Loading />}
      </AnimatePresence>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Footer />
      
      {/* Botão Flutuante R$ 5k+ Minimalista */}
      <motion.a 
        href={`https://wa.me/${CONFIG.whatsapp}`}
        target="_blank"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2.5, type: "spring" }}
        className="fixed bottom-12 right-12 z-[900] bg-secondary text-white p-6 shadow-2xl hover:scale-110 active:scale-95 transition-all group border border-white/10"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-10 top-1/2 -translate-y-1/2 bg-white text-secondary px-8 py-4 text-[10px] font-bold uppercase tracking-[0.4em] shadow-2xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap hidden lg:block border border-gray-100">
           Concierge Online
        </span>
      </motion.a>
    </div>
  );
}
