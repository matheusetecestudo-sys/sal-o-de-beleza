/**
 * === DUNO PREMIUM POPULAR - WORLD CLASS TEMPLATE 2026 ===
 * Estilo: Premium Moderno (High-End Visuals for Popular Pricing)
 * Desenvolvido por: Antigravity (Google Deepmind)
 */

import { useState, useEffect, useRef } from 'react';
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
  Smile,
  ChevronLeft
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';

// === CONFIGURAÇÕES GLOBAIS ===
const SALON_CONFIG = {
  name: "DUNO",
  slogan: "Beleza acessível com qualidade premium.",
  whatsapp: "5511992876219",
  whatsappMsg: "Olá! Desejo reservar um momento premium no DUNO.",
  address: "Alameda das Estrelas, 100 - Bela Vista, SP",
  hours: "Segunda a Sábado: 09h às 21h",
  instagram: "@duno_premium",
  phone: "(11) 99287-6219",
};

// --- Componentes Reutilizáveis ---

const SectionTitle = ({ title, subtitle, centered = true }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-20 ${centered ? 'text-center' : ''}`}>
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex items-center gap-4 mb-6 ${centered ? 'justify-center' : ''}`}
    >
      <div className="h-[1px] w-12 bg-primary"></div>
      <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">{SALON_CONFIG.name}</span>
      <div className="h-[1px] w-12 bg-primary"></div>
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-5xl md:text-7xl font-display text-text-main leading-[1.1] mb-8"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <p className="text-text-muted text-lg max-w-2xl mx-auto font-light leading-relaxed font-sans">
        {subtitle}
      </p>
    )}
  </div>
);

const PremiumButton = ({ text, href, type = "primary", className = "" }: { text: string, href: string, type?: "primary" | "outline", className?: string }) => (
  <motion.a 
    href={href}
    target={href.startsWith('http') ? '_blank' : '_self'}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`premium-btn ${type === "primary" ? "btn-primary-luxe" : "btn-outline-luxe"} ${className}`}
  >
    {text}
  </motion.a>
);

// --- Componentes das Seções ---

const SplashScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => (p >= 100 ? 100 : p + 4));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      key="splash"
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[1000] bg-white flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-primary text-[10vw] font-display font-bold tracking-tighter mb-12"
      >
        {SALON_CONFIG.name}
      </motion.div>
      
      <div className="w-48 md:w-80 h-[2px] bg-gray-100 relative overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="absolute inset-0 bg-primary"
        />
      </div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-text-muted text-[10px] uppercase font-bold tracking-[0.5em]"
      >
        Sinfonia da Beleza
      </motion.p>
    </motion.div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed w-full z-[500] transition-all duration-700 ${isScrolled ? 'bg-white/80 backdrop-blur-xl py-4 shadow-xl shadow-black/5' : 'bg-transparent py-8'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-3xl font-display font-bold text-primary tracking-tighter hover:opacity-80 transition-opacity">
          {SALON_CONFIG.name}
        </a>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-10">
          <nav className="flex items-center gap-8">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-main hover:text-primary transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <div className="h-8 w-[1px] bg-gray-200"></div>
          <PremiumButton 
            text="Agendar via WhatsApp" 
            href={`https://wa.me/${SALON_CONFIG.whatsapp}`} 
            className="!px-6 !py-3 !text-[9px]" 
          />
        </div>

        {/* Hamburger */}
        <button className="xl:hidden text-text-main group" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="space-y-2">
            <span className={`block w-8 h-[2px] bg-primary transform transition duration-500 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`block w-6 h-[2px] bg-primary transition duration-500 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-8 h-[2px] bg-primary transform transition duration-500 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[600] flex flex-col items-center justify-center gap-10 overflow-hidden"
          >
            <button className="absolute top-10 right-10 text-primary" onClick={() => setIsMenuOpen(false)}>
              <X size={40} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-display text-text-main hover:text-primary transition-all italic"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <PremiumButton 
              text="Agendar via WhatsApp" 
              href={`https://wa.me/${SALON_CONFIG.whatsapp}`} 
              className="mt-10" 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-bg-soft">
      {/* Background Cinematográfico */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium Studio" 
          className="w-full h-full object-cover scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/40 to-transparent"></div>
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="h-[1px] w-12 bg-primary"></span>
            <span className="text-primary font-bold uppercase tracking-[0.5em] text-xs">A Arte do Visagismo</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-9xl font-display leading-[0.9] mb-12 tracking-tight">
            Beleza acessível, <br />
            qualidade <span className="italic font-normal text-primary">Premium.</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-xl mb-12 text-white/80 font-sans">
            No {SALON_CONFIG.name}, elevamos sua experiência com serviços de alta performance em um ambiente sofisticado para todos. 
          </p>

          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
            <PremiumButton 
              text="Agendar via WhatsApp" 
              href={`https://wa.me/${SALON_CONFIG.whatsapp}`} 
              className="bg-primary border-primary text-white hover:bg-white hover:text-primary !py-6 !px-12"
            />
            <a href="#servicos" className="text-[10px] font-bold uppercase tracking-[0.4em] flex items-center gap-4 group hover:text-primary transition-all">
              Ver Serviços <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-12 right-12 z-10 hidden xl:flex gap-16 pointer-events-none">
        <div className="flex flex-col items-end">
          <span className="text-5xl font-display text-white">15+</span>
          <span className="text-[9px] uppercase tracking-widest text-primary font-bold">Anos de Experiência</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-5xl font-display text-white">100%</span>
          <span className="text-[9px] uppercase tracking-widest text-primary font-bold">Produtos Premium</span>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
      >
        <span className="text-[8px] uppercase tracking-[0.4em] font-bold">Scroll</span>
        <div className="w-[1px] h-10 bg-white/30"></div>
      </motion.div>
    </section>
  );
};

const AboutSection = () => (
  <section id="sobre" className="py-40 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="aspect-[4/5] bg-bg-soft rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=1200" 
            alt="Nosso Estúdio" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary p-8 hidden xl:flex flex-col justify-center items-center text-white text-center">
          <Scissors size={40} className="mb-4" />
          <p className="font-display italic text-2xl leading-none font-normal lowercase tracking-tight">Cortes <br /> memoráveis</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <SectionTitle title="A Essência do Cuidado" centered={false} />
        <div className="space-y-10 text-text-muted text-lg leading-[1.8] font-light text-justify-custom font-sans">
          <p>
            O {SALON_CONFIG.name} transcende o conceito tradicional de salão. Nascemos da convicção de que a beleza de alto padrão não precisa ser proibitiva. Unimos a sofisticação das grandes grifes internacionais a preços acolhedores e transparentes. 
          </p>
          <p>
            Cada traço, cada corte e cada tom é meticulosamente planejado por nossa equipe de visagistas para refletir sua verdade interna. No DUNO, você é o protagonista de uma experiência premium, do momento em que entra ao momento em que revela seu novo eu ao mundo.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-12 mt-16 pt-16 border-t border-gray-100">
          <div>
            <span className="text-4xl font-display text-text-main mb-2 block">30k+</span>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary">Clientes Felizes</span>
          </div>
          <div>
            <span className="text-4xl font-display text-text-main mb-2 block">08+</span>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary">Mestres Estilistas</span>
          </div>
        </div>

        <PremiumButton 
          text="Saiba mais no Instagram" 
          href={`https://instagram.com/${SALON_CONFIG.instagram}`} 
          type="outline"
          className="mt-20"
        />
      </motion.div>
    </div>
  </section>
);

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<'masc' | 'fem' | 'unisex'>('fem');

  const categories = {
    masc: [
      { name: "Corte Masculino", price: "35", desc: "Design especializado com acabamento em navalha.", img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800" },
      { name: "Corte + Barba", price: "55", desc: "O ritual completo de alinhamento e estilo.", img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800" },
      { name: "Modelagem de Barba", price: "28", desc: "Definição de traços e hidratação profunda.", img: "https://images.unsplash.com/photo-1599351431247-f10b21ce963f?w=800" },
      { name: "Coloração Barba", price: "45", desc: "Cobertura natural para realçar a densidade.", img: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800" }
    ],
    fem: [
      { name: "Corte Feminino", price: "45", desc: "Consultoria de visagismo para seu melhor ângulo.", img: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800" },
      { name: "Coloração Completa", price: "85", desc: "Pigmentação de alta fidelidade com proteção térmica.", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800" },
      { name: "Mechas/Luzes", price: "120", desc: "Iluminação artística com técnica de mãos livre.", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800" },
      { name: "Escova Premium", price: "35", desc: "Lavagem sensorial e finalização de escova lisa ou ondas.", img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800" }
    ],
    unisex: [
      { name: "Hidratação Profunda", price: "45", desc: "Infusão de nutrientes e brilho tridimensional.", img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800" },
      { name: "Manicure & Pedicure", price: "50", desc: "Cuidado completo com esmaltação francesa e hidratação.", img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800" },
      { name: "Design Sobrancelhas", price: "20", desc: "Arquitetura do olhar com técnica de pinça e linha.", img: "https://images.unsplash.com/photo-1522337443140-52f20c810756?w=800" },
      { name: "Selagem Redutora", price: "110", desc: "Controle de frizz e alinhamento elegante dos fios.", img: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800" }
    ]
  };

  return (
    <section id="servicos" className="py-40 bg-bg-soft">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Nossos Serviços" 
          subtitle="Escolha sua categoria e descubra uma gama completa de cuidados desenhados para sua melhor versão."
        />

        {/* Tab Selector Luxe */}
        <div className="flex border-b border-gray-200 mb-20 overflow-x-auto scrollbar-hide">
          {([
            { id: 'masc', label: 'MASCULINO' },
            { id: 'fem', label: 'FEMININO' },
            { id: 'unisex', label: 'ESPECIALIDADES UNISEX' }
          ] as const).map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-8 px-10 text-[10px] font-bold uppercase tracking-[0.4em] transition-all whitespace-nowrap relative ${activeTab === tab.id ? 'text-primary' : 'text-gray-400 hover:text-text-main'}`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-[2px] bg-primary" />
              )}
            </button>
          ))}
        </div>

        {/* Grid animada de Serviços */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {categories[activeTab].map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="card-luxe group"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-8 text-center pointer-events-none">
                    <p className="text-white text-xs font-light italic leading-relaxed">{s.desc}</p>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-display text-text-main mb-2 truncate">{s.name}</h4>
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase font-bold text-gray-400 tracking-[0.2em]">A partir de</span>
                      <span className="text-2xl font-display text-primary">R$ {s.price}</span>
                    </div>
                    <a 
                      href={`https://wa.me/${SALON_CONFIG.whatsapp}?text=${encodeURIComponent(`Gostaria de agendar: ${s.name}`)}`}
                      className="text-[9px] font-bold uppercase tracking-widest text-text-main hover:text-primary transition-colors flex items-center gap-2"
                    >
                      Reservar <Plus size={12} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const PortfolioSection = () => (
  <section className="py-40 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <SectionTitle 
        title="O Novo Visual" 
        subtitle="Confira algumas das nossas transformações favoritas."
      />
      <div className="grid md:grid-cols-3 gap-8">
        {[
          "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1000",
          "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1000",
          "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=1000"
        ].map((img, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000"
          >
            <img src={img} alt="Portfolio" className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const reviews = [
    { name: "Luciana Santos", text: "Uma experiência impecável. Nunca imaginei que poderia ter um atendimento tão sofisticado por um preço acessível.", role: "Advogada" },
    { name: "Pedro Oliveira", text: "Melhor barbearia do bairro. Atendimento rápido, técnico e de altíssimo nível. Recomendo para todos os meus amigos.", role: "Empresário" },
    { name: "Mariana Costa", text: "Minhas mechas ficaram maravilhosas. A consultoria de visagismo realmente faz a diferença no resultado final.", role: "Designer" }
  ];

  return (
    <section id="depoimentos" className="py-40 bg-bg-soft overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <SectionTitle title="A Voz da Experiência" />
        <div className="relative overflow-hidden min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="px-10"
            >
              <p className="text-3xl md:text-5xl font-display italic text-text-main leading-tight mb-12">
                "{reviews[index].text}"
              </p>
              <div className="flex flex-col items-center">
                <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-2">{reviews[index].name}</span>
                <span className="text-gray-400 text-[10px] uppercase font-light italic tracking-[0.2em]">{reviews[index].role}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-10 mt-20">
          <button onClick={() => setIndex((index - 1 + reviews.length) % reviews.length)} className="text-gray-300 hover:text-primary transition-all p-4 border border-gray-100 rounded-full hover:border-primary">
            <ChevronLeft size={32} />
          </button>
          <button onClick={() => setIndex((index + 1) % reviews.length)} className="text-gray-300 hover:text-primary transition-all p-4 border border-gray-100 rounded-full hover:border-primary">
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "Quais são as formas de pagamento?", a: "Aceitamos Dinheiro, PIX e todos os cartões de Débito e Crédito sem acréscimo." },
    { q: "Precisa de agendamento prévio?", a: "Recomendamos agendar via WhatsApp para garantir que nossos mestres visagistas dediquem o tempo necessário para sua transformação." },
    { q: "Qual a localização exata do estúdio?", a: "Estamos em " + SALON_CONFIG.address + ", com estacionamento cortesia para nossos clientes." }
  ];

  return (
    <section id="faq" className="py-40 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle title="Dúvidas Frequentes" />
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-gray-100 pb-8">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center text-left hover:opacity-70 transition-opacity"
              >
                <span className={`text-2xl font-display text-text-main transition-all ${open === i ? 'italic text-primary' : ''}`}>
                  {f.q}
                </span>
                {open === i ? <Minus size={24} className="text-primary" /> : <Plus size={24} className="text-gray-300" />}
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden mt-6 text-text-muted text-lg leading-relaxed font-light">
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
  <footer className="bg-secondary text-white py-32 overflow-hidden relative">
    <div className="absolute top-0 right-0 w-1/4 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-24 relative z-10">
      <div>
        <h3 className="text-5xl font-display font-bold text-primary mb-10 tracking-tighter">{SALON_CONFIG.name}</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-12 text-lg">
          Transformamos beleza cotidiana em expressão de arte. No DUNO, cada visita é uma celebração da sua individualidade.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-gray-400 hover:text-primary transition-all"><Instagram size={28} /></a>
          <a href="#" className="text-gray-400 hover:text-primary transition-all"><Facebook size={28} /></a>
        </div>
      </div>

      <div>
        <h4 className="text-[10px] uppercase font-bold tracking-[0.4em] text-primary mb-12">Localização & Contato</h4>
        <div className="space-y-8 text-gray-300">
          <div className="flex items-start gap-4">
            <MapPin size={24} className="text-primary" />
            <p className="text-lg font-light leading-relaxed">{SALON_CONFIG.address}</p>
          </div>
          <div className="flex items-start gap-4">
            <Phone size={24} className="text-primary" />
            <p className="text-lg font-light leading-relaxed">{SALON_CONFIG.phone} <br /> <span className="text-xs text-gray-500 uppercase tracking-widest">(WhatsApp)</span></p>
          </div>
          <div className="flex items-start gap-4">
            <Clock size={24} className="text-primary" />
            <p className="text-lg font-light leading-relaxed">{SALON_CONFIG.hours}</p>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-[10px] uppercase font-bold tracking-[0.4em] text-primary mb-12">Experiência DUNO</h4>
        <p className="text-gray-400 font-light mb-12 text-lg">Pronto para sua melhor versão? Reserve agora sua consultoria exclusiva.</p>
        <PremiumButton 
          text="Agendar via WhatsApp" 
          href={`https://wa.me/${SALON_CONFIG.whatsapp}`} 
          className="!w-full text-center"
        />
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.4em] text-gray-600 font-bold">
      <p>© {new Date().getFullYear()} {SALON_CONFIG.name} SALON — Todos os direitos reservados.</p>
      <p className="flex gap-10">
        <a href="#" className="hover:text-primary">Legal</a>
        <a href="#" className="hover:text-primary">Privacidade</a>
      </p>
    </div>
  </footer>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="selection:bg-primary/20 selection:text-primary min-h-screen">
      <AnimatePresence>
        {isLoading && <SplashScreen key="splash" />}
      </AnimatePresence>
      
      {!isLoading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Header />
          <Hero />
          <AboutSection />
          <ServicesSection />
          <PortfolioSection />
          <TestimonialsSection />
          <FAQSection />
          <Footer />
          
          {/* Floating WhatsApp Luxo */}
          <motion.a 
            href={`https://wa.me/${SALON_CONFIG.whatsapp}`}
            target="_blank"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, type: "spring" }}
            className="fixed bottom-10 right-10 z-[1000] bg-primary text-white p-6 shadow-2xl hover:scale-110 active:scale-90 transition-all group"
          >
            <MessageCircle size={32} />
            <span className="absolute right-full mr-8 top-1/2 -translate-y-1/2 bg-white text-secondary px-6 py-3 text-[10px] font-bold uppercase tracking-widest shadow-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">
              Agendar agora
            </span>
          </motion.a>
        </motion.div>
      )}
    </div>
  );
}
