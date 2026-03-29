/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Last Updated: 2026-03-24 16:01
 */

import { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  CheckCircle2, 
  Star, 
  Award, 
  ChevronRight, 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Clock,
  Zap,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  ChevronDown,
  Plus,
  Minus,
  Instagram,
  Facebook,
  Linkedin,
  Smile,
  Check
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';

// === CONFIGURAÇÕES DO CLIENTE (Mude aqui) ===
const CLINIC_CONFIG = {
  name: "Bianca Rossi",
  cro: "Hair Specialist & Designer",
  responsibility: "Diretora Artística",
  specialty: "High-End Beauty & Visagisme",
  experience: "15+ anos de excelência mundial",
  whatsapp: "5511992876219",
  whatsappMsg: "Olá! Desejo agendar uma consultoria exclusiva na DUNO.",
  city: "Jardins, São Paulo",
  address: "Alameda Lorena, 1500 - Jardins",
  hours: "Terça a Sábado: 09h às 21h",
  logo: "DUNO",
};

// --- Componentes Auxiliares ---

const SectionTitle = ({ title, subtitle, centered = true, light = false }: { title: string, subtitle?: string, centered?: boolean, light?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex items-center gap-4 mb-6 ${centered ? 'justify-center' : ''}`}
    >
      <div className={`h-[2px] w-8 ${light ? 'bg-white/30' : 'bg-accent'}`}></div>
      <span className={`${light ? 'text-white/60' : 'text-accent'} font-bold uppercase tracking-[0.4em] text-[10px]`}>{CLINIC_CONFIG.logo} LUXE SALON</span>
      <div className={`h-[2px] w-8 ${light ? 'bg-white/30' : 'bg-accent'}`}></div>
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className={`text-4xl md:text-7xl font-display ${light ? 'text-white' : 'text-primary'} mb-6 leading-tight`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className={`${light ? 'text-white/60' : 'text-text-muted'} text-lg max-w-2xl mx-auto font-light leading-relaxed`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

// --- Seções ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'INÍCIO', href: '#home' },
    { name: 'SOBRE', href: '#sobre' },
    { name: 'SERVIÇOS', href: '#servicos' },
    { name: 'PORTFÓLIO', href: '#portfolio' },
    { name: 'DEPOIMENTOS', href: '#depoimentos' },
    { name: 'LOCALIZAÇÃO', href: '#mapa' },
    { name: 'CONTATO', href: '#contato' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-lg py-4 shadow-lg' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group">
          <span className={`text-3xl font-display font-bold tracking-[0.3em] uppercase ${isScrolled ? 'text-primary' : 'text-primary'}`}>
            {CLINIC_CONFIG.logo}
          </span>
          <span className="w-2 h-2 bg-accent rounded-full opacity-100 transition-opacity"></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] font-bold tracking-[0.2em] text-primary/60 hover:text-accent transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href={`https://wa.me/${CLINIC_CONFIG.whatsapp}?text=${encodeURIComponent(CLINIC_CONFIG.whatsappMsg)}`}
            className="bg-primary text-white px-10 py-4 rounded-full text-[10px] font-bold tracking-[0.2em] hover:bg-accent transition-all shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
          >
            CONCIERGE
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button className="absolute top-8 right-8 text-primary" onClick={() => setIsMenuOpen(false)}>
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-primary font-display font-bold text-3xl tracking-widest hover:text-accent transition-all"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`https://wa.me/${CLINIC_CONFIG.whatsapp}?text=${encodeURIComponent(CLINIC_CONFIG.whatsappMsg)}`}
              className="bg-accent text-white px-12 py-5 rounded-full font-bold text-xs tracking-widest mt-6 shadow-xl"
            >
              AGENDAR AGORA
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[110vh] flex items-center pt-32 md:pt-40 overflow-hidden bg-bg-light">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 z-0"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-[120px] z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-12 h-[1px] bg-accent"></span>
              <span className="text-accent font-accent font-bold uppercase tracking-[0.4em] text-[10px]">BELEZA E VISAGISMO DE LUXO</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-9xl font-display text-primary leading-[1] md:leading-[0.85] mb-12 tracking-tight">
              A Arte do <br />
              Novo <span className="italic font-normal">Chic.</span>
            </h1>
            
            <p className="text-xl text-text-muted font-light leading-relaxed max-w-lg mb-12">
              Na <span className="font-bold text-primary">{CLINIC_CONFIG.logo}</span>, combinamos a precisão do design com a fluidez da arte para revelar sua versão mais sofisticada.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.a 
                href={`https://wa.me/${CLINIC_CONFIG.whatsapp}?text=${encodeURIComponent(CLINIC_CONFIG.whatsappMsg)}`}
                target="_blank"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary text-white px-10 py-5 rounded-full font-bold text-[11px] tracking-[0.2em] uppercase shadow-2xl hover:bg-accent transition-all flex items-center justify-center gap-3 group"
              >
                Agendar Avaliação
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>

            <div className="mt-20 grid grid-cols-3 gap-12 border-t border-primary/5 pt-12">
              {[
                { label: "Transformações", val: "8k+" },
                { label: "Estilo & Técnica", val: "Luxe" },
                { label: "Experiência", val: "15+" }
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-display text-primary mb-1">{stat.val}</p>
                  <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative mt-20 lg:mt-0"
          >
            <div className="aspect-[4/5] rounded-[80px] overflow-hidden shadow-2xl relative z-10 scale-105">
              <img 
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=2070" 
                alt="DUNO LUXE" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass-card p-8 rounded-[30px] z-20 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                  <Smile size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Satisfação</p>
                  <p className="text-xl font-display text-primary">100% Real</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 glass-card p-8 rounded-[30px] z-20 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Certificação</p>
                  <p className="text-xl font-display text-primary">Premium Gold</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustedBrands = () => (
  <section className="py-20 bg-white border-y border-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-32 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
        {/* Invisalign */}
        <div className="group/brand cursor-pointer">
          <p className="text-2xl font-display font-bold text-primary group-hover/brand:text-accent transition-colors tracking-tight">Invisalign</p>
        </div>
        {/* Straumann */}
        <div className="group/brand cursor-pointer">
          <p className="text-2xl font-display font-bold text-primary group-hover/brand:text-accent transition-colors tracking-tight italic">straumann</p>
        </div>
        {/* 3M */}
        <div className="group/brand cursor-pointer">
          <p className="text-3xl font-accent font-bold text-primary group-hover/brand:text-accent transition-colors">3M</p>
        </div>
        {/* Dentsply */}
        <div className="group/brand cursor-pointer">
          <p className="text-xl font-display font-bold text-primary group-hover/brand:text-accent transition-colors uppercase tracking-widest">Dentsply Sirona</p>
        </div>
        {/* Nobel */}
        <div className="group/brand cursor-pointer">
          <p className="text-xl font-display font-bold text-primary group-hover/brand:text-accent transition-colors uppercase tracking-tighter">Nobel Biocare</p>
        </div>
      </div>
    </div>
  </section>
);

const Philosophy = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <div className="relative">
            <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=1000" 
                alt={`Luxe at ${CLINIC_CONFIG.logo}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute -top-12 -right-12 w-48 h-48 bg-accent rounded-full flex items-center justify-center text-white text-center p-6 shadow-2xl border-8 border-white"
            >
              <p className="text-[10px] font-bold tracking-widest uppercase leading-relaxed">Excelência em cada detalhe</p>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2"
        >
          <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Nossa Filosofia</span>
          <h2 className="text-5xl md:text-6xl font-display text-primary mb-10 leading-[1.1]">
            Visagismo sob a <br />
            <span className="italic serif">Luz do Design.</span>
          </h2>
          <div className="space-y-8 text-text-muted font-light leading-relaxed text-lg">
            <p>
              Na {CLINIC_CONFIG.logo}, transcendemos o conceito tradicional de salão. Aplicamos a matemática das proporções áureas para desenhar um visual que não apenas embeleza, mas comunica autoridade e elegância.
            </p>
            <p>
              Sua beleza é tratada como uma obra em construção, onde cada traço e cada tom são meticulosamente escolhidos para ressoar com sua identidade interna.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12 mt-16">
            <div className="flex items-start gap-4">
              <div className="w-1 bg-accent h-full rounded-full"></div>
              <div>
                <h4 className="text-primary font-display text-2xl mb-2">Ética</h4>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">Compromisso Real</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-1 bg-accent h-full rounded-full"></div>
              <div>
                <h4 className="text-primary font-display text-2xl mb-2">Exclusividade</h4>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">Protocolos Únicos</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const About = () => (
    <section id="sobre" className="py-24 bg-bg-soft overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[3/4] rounded-[100px] overflow-hidden shadow-2xl relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800" 
              alt={CLINIC_CONFIG.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-0"></div>
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0"></div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-12 -right-12 bg-white p-10 rounded-[40px] shadow-2xl z-20 border border-slate-100 hidden lg:block"
          >
            <p className="text-6xl font-display text-accent mb-2">20+</p>
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">Anos de <br />Excelência</p>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-accent"></div>
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px]">A Especialista</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-display text-primary mb-10 leading-[1.1]">
            {CLINIC_CONFIG.name}
          </h2>
          
          <div className="space-y-8 text-text-muted font-light leading-relaxed text-lg">
            <p>
              Com uma carreira dedicada à arte de transformar olhares e renovar confianças, Bianca Rossi é especialista em visagismo aplicado à estética capilar de alto padrão.
            </p>
            <p>
              Sua filosofia une o domínio técnico das tesouras a uma sensibilidade artística apurada, garantindo que cada corte e coloração não apenas sigam tendências, mas contem a história única de cada cliente.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 mt-16">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-accent shadow-lg">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-primary text-sm uppercase tracking-widest">Segurança</h4>
                <p className="text-xs text-slate-400">Protocolos Médicos</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-accent shadow-lg">
                <Zap size={24} />
              </div>
              <div>
                <h4 className="font-bold text-primary text-sm uppercase tracking-widest">Tecnologia</h4>
                <p className="text-xs text-slate-400">Equipamentos de Ponta</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
);

const Services = () => {
  const services = [
    { 
      title: "Arquitetura de Corte", 
      desc: "Escultura capilar baseada em visagismo europeu para harmonização facial absoluta.", 
      image: "https://images.unsplash.com/photo-1560869713-7d0a29430863?auto=format&fit=crop&q=80&w=800",
      icon: <Sparkles />,
      tag: "SIGNATURE",
      size: "large"
    },
    { 
      title: "Coloração Couture", 
      desc: "Paletas personalizadas criadas para iluminar seu tom de pele com pigmentos orgânicos.", 
      image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800",
      icon: <Zap />,
      tag: "COLOR",
      size: "small"
    },
    { 
      title: "Mega Hair Invisible", 
      desc: "Extensões de fita invisível com cabelo humano premium para volume e comprimento naturais.", 
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800",
      icon: <Plus />,
      tag: "VOLUME",
      size: "small"
    },
    { 
      title: "Cronograma de Elite", 
      desc: "Tratamento de 4 etapas para recuperação total da massa e brilho espelhado.", 
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800",
      icon: <ShieldCheck />,
      tag: "THERAPY",
      size: "small"
    },
    { 
      title: "Makeup Editorial", 
      desc: "Técnicas de tapete vermelho para festas, galas e produções fotográficas.", 
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
      icon: <Star />,
      tag: "STYLE",
      size: "small"
    },
    { 
      title: "Spa de Mãos & Pés", 
      desc: "Experiência sensorial completa com esmaltação francesa e hidratação profunda.", 
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800",
      icon: <Sparkles />,
      tag: "BEAUTY",
      size: "small"
    },
    { 
      title: "Bridal Luxury Suite", 
      desc: "Dia exclusivo para noivas em suíte privada com equipe dedicada de visagistas.", 
      image: "https://images.unsplash.com/photo-1527359143442-3ee33f7c320d?auto=format&fit=crop&q=80&w=800",
      icon: <Award />,
      tag: "EXCLUSIVE",
      size: "large"
    },
    { 
      title: "Grooming Lounge", 
      desc: "Corte e barba clássica com toalha quente em ambiente privativo masculino.", 
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800",
      icon: <Minus />,
      tag: "GENTLEMAN",
      size: "small"
    },
    { 
      title: "Scalp Detox", 
      desc: "Limpeza profunda do couro cabeludo com micro-esfoliação e infusão de ozônio.", 
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
      icon: <Zap />,
      tag: "HEALTH",
      size: "small"
    },
    { 
      title: "Color Correction", 
      desc: "Especialistas em reverter danos e tons indesejados com preservação da fibra.", 
      image: "https://images.unsplash.com/photo-1560869713-7d0a29430863?auto=format&fit=crop&q=80&w=800",
      icon: <ChevronRight />,
      tag: "EXPERT",
      size: "small"
    },
    { 
      title: "Elite Brow Design", 
      desc: "Arquitetura de sobrancelhas com técnica de fio a fio e visagismo.", 
      image: "https://images.unsplash.com/photo-1522337443140-52f20c810756?auto=format&fit=crop&q=80&w=800",
      icon: <Star />,
      tag: "ESTHETICS",
      size: "small"
    },
    { 
      title: "Penteados de Gala", 
      desc: "Coques e tranças artísticas para eventos que exigem o máximo de sofisticação.", 
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800",
      icon: <Sparkles />,
      tag: "ART",
      size: "small"
    }
  ];

  return (
    <section id="servicos" className="bg-bg-soft py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Especialidades" 
          subtitle="Protocolos exclusivos que unem a precisão da odontologia moderna à sensibilidade estética."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[380px]">
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className={`relative rounded-[50px] overflow-hidden group shadow-premium hover:shadow-2xl transition-all duration-700 border border-white/20 ${s.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
              <img 
                src={s.image} 
                alt={s.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 md:from-primary/100 via-primary/50 to-transparent group-hover:via-primary/70 transition-all duration-700"></div>
              
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-4 md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-500">
                  <span className="bg-accent text-white text-[9px] font-bold px-4 py-1.5 rounded-full tracking-widest uppercase shadow-lg shadow-accent/20">{s.tag}</span>
                </div>
                <h3 className="text-2xl md:text-5xl font-display text-white mb-4 md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-500">{s.title}</h3>
                <p className="text-white text-sm md:text-lg font-light max-w-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700 md:translate-y-6 md:group-hover:translate-y-0 leading-relaxed mb-4 md:mb-0">
                  {s.desc}
                </p>
                
                <a 
                  href={`https://wa.me/${CLINIC_CONFIG.whatsapp}?text=Olá! Quero saber mais sobre ${s.title}`}
                  className="mt-4 md:mt-8 inline-flex items-center gap-3 text-accent font-bold text-[10px] tracking-widest uppercase opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700 delay-100 md:translate-y-6 md:group-hover:translate-y-0"
                >
                  Agendar Consulta <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const BeforeAfter = () => null; // Consolidado no Portfolio

const Testimonials = () => (
  <section id="depoimentos" className="bg-bg-soft py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-accent font-bold uppercase tracking-widest text-[10px] mb-4 block">EXPERIÊNCIAS {CLINIC_CONFIG.logo}</span>
        <h2 className="text-5xl font-display text-primary mb-4">O que dizem nossos pacientes</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: "Mariana Silva", text: "A Bianca é uma artista! Minhas mechas ficaram super naturais e o cabelo continuou super saudável. Recomendo de olhos fechados.", role: "CLIENTE DE COLORAÇÃO" },
          { name: "Luciana Oliveira", text: "Excelente atendimento e técnica impecável. Fiz o corte visagista e finalmente encontrei o estilo que combina comigo.", role: "CLIENTE DE CORTE" },
          { name: "Carla Mendes", text: "Minha experiência no salão foi divina. O Spa Facial e a Maquiagem me fizeram sentir renovada para o meu evento.", role: "CLIENTE DE ESTÉTICA" }
        ].map((t, i) => (
          <div key={i} className="bg-white p-10 rounded-2xl shadow-premium border border-slate-100 relative">
            <div className="text-accent mb-6 flex gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
            </div>
            <p className="text-text-muted text-sm italic mb-8 leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-bg-soft rounded-full overflow-hidden">
                <img src={`https://i.pravatar.cc/100?u=${i}`} alt={t.name} referrerPolicy="no-referrer" />
              </div>
              <div>
                <h5 className="font-bold text-primary text-xs">{t.name}</h5>
                <p className="text-[8px] text-accent uppercase tracking-widest font-bold">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Journey = () => (
  <section className="section-padding">
    <SectionTitle 
      title="Sua Jornada de Beleza" 
      subtitle="Um processo exclusivo, relaxante e focado em revelar sua melhor versão."
    />
    
    <div className="relative">
      {/* Connector Line */}
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 hidden md:block"></div>
      
      <div className="grid md:grid-cols-4 gap-8 relative z-10">
        {[
          { step: "01", title: "Consultoria", desc: "Análise de visagismo e saúde capilar personalizada." },
          { step: "02", title: "Proposta", desc: "Desenvolvemos o projeto de cor e corte para sua aprovação." },
          { step: "03", title: "Transformação", desc: "Execução precisa com os melhores produtos do mundo." },
          { step: "04", title: "Finalização", desc: "Dicas de manutenção e styling para seu novo visual." }
        ].map((item, i) => (
          <div key={i} className="text-center group">
            <div className="w-16 h-16 bg-white border-4 border-accent rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl text-accent font-bold text-xl relative z-10 transition-transform group-hover:scale-110">
              {item.step}
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4 font-display">{item.title}</h4>
            <p className="text-slate-500 text-lg leading-relaxed font-light">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    { q: "Quais marcas de produtos vocês utilizam?", a: "Trabalhamos exclusivamente com marcas premium internacionais como Kérastase, L'Oréal Professionnel e Wella para garantir resultados superiores." },
    { q: "Quanto tempo leva uma transformação de cor?", a: "Depende da técnica, mas em média reservamos de 4 a 6 horas para garantir a segurança e perfeição do resultado." },
    { q: "O corte visagista é indicado para todos?", a: "Sim! O visagismo serve justamente para adaptar as tendências às características individuais de cada pessoa, independente do tipo de cabelo." },
    { q: "Vocês fazem dia da noiva?", a: "Sim, temos pacotes exclusivos e um ambiente reservado para proporcionar um dia inesquecível e tranquilo para as noivas." },
    { q: "Como posso manter o resultado em casa?", a: "Ao final de cada serviço, nossa equipe prescreve um cronograma capilar personalizado com os produtos ideais para seu tipo de fio." },
    { q: "Preciso agendar com antecedência?", a: "Recomendamos o agendamento prévio de pelo menos uma semana para garantir disponibilidade com nossos especialistas, especialmente aos sábados." },
    { q: "Quais as formas de pagamento?", a: "Aceitamos cartões de crédito (em até 6x), débito, PIX e transferências bancárias." }
  ];

  return (
    <section id="faq" className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <SectionTitle 
            title="Dúvidas Frequentes" 
            subtitle="Tudo o que você precisa saber para iniciar sua jornada de transformação com segurança."
          />
        </div>
        
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <motion.div 
              key={i} 
              initial={false}
              className={`rounded-[30px] overflow-hidden transition-all duration-500 border ${openIndex === i ? 'bg-white shadow-premium border-accent/20' : 'bg-bg-soft border-transparent hover:border-accent/10'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 md:p-10 text-left flex justify-between items-center group"
              >
                <span className={`text-xl md:text-2xl font-display font-bold transition-colors duration-300 ${openIndex === i ? 'text-accent' : 'text-primary group-hover:text-accent'}`}>
                  {f.q}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${openIndex === i ? 'bg-accent text-white rotate-180' : 'bg-white text-accent group-hover:bg-accent group-hover:text-white'}`}>
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-8 md:px-12 pb-10 md:pb-12 text-text-muted text-lg md:text-xl leading-relaxed font-light max-w-3xl border-t border-slate-50 pt-8">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-primary text-white py-24 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-16 mb-20">
        <div className="md:col-span-1">
          <div className="text-3xl font-display tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-accent to-white mb-8">
            {CLINIC_CONFIG.logo}
          </div>
          <p className="text-slate-400 text-sm font-light leading-relaxed mb-10">
            Redefinindo os padrões da beleza sofisticada através da união entre visagismo artístico e tratamentos capilares de alta performance. Sua essência, elevada ao nível de arte.
          </p>
          <div className="flex gap-6">
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all cursor-pointer"><Instagram size={18} /></div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all cursor-pointer"><Facebook size={18} /></div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all cursor-pointer"><Linkedin size={18} /></div>
          </div>
        </div>
        
        <div>
          <h5 className="text-[10px] font-bold tracking-[0.4em] uppercase mb-8 text-accent">Navegação</h5>
          <div className="flex flex-col gap-4 text-sm text-slate-400 font-light">
            <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a>
            <a href="#faq" className="hover:text-white transition-colors">Dúvidas Frequentes</a>
            <a href="#contato" className="hover:text-white transition-colors">Localização</a>
          </div>
        </div>
        
        <div>
          <h5 className="text-[10px] font-bold tracking-[0.4em] uppercase mb-8 text-accent">Horários</h5>
          <div className="text-sm text-slate-400 font-light space-y-4">
            <p>Segunda a Sexta</p>
            <p className="text-white font-bold">{CLINIC_CONFIG.hours}</p>
          </div>
        </div>
        
        <div>
          <h5 className="text-[10px] font-bold tracking-[0.4em] uppercase mb-8 text-accent">Fale Conosco</h5>
          <p className="text-xl font-display text-white mb-4 line-clamp-1">{CLINIC_CONFIG.whatsapp}</p>
          <p className="text-sm text-slate-400 font-light">{CLINIC_CONFIG.address}</p>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-[10px] uppercase tracking-[0.2em]">
        <div className="text-center md:text-left">
          <p className="mb-2">&copy; {new Date().getFullYear()} {CLINIC_CONFIG.logo}. Todos os direitos reservados.</p>
          <p className="text-slate-600 lowercase opacity-60 italic">{CLINIC_CONFIG.name} | {CLINIC_CONFIG.cro} | {CLINIC_CONFIG.responsibility}</p>
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos</a>
        </div>
      </div>
    </div>
  </footer>
);

const FloatingWhatsApp = () => (
  <a 
    href={`https://wa.me/${CLINIC_CONFIG.whatsapp}?text=${encodeURIComponent(CLINIC_CONFIG.whatsappMsg)}`}
    className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl animate-pulse-whatsapp flex items-center justify-center group"
    aria-label="Falar no WhatsApp"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.035c0 2.123.555 4.194 1.608 6.013l-1.707 6.236 6.38-1.674c1.756.957 3.738 1.461 5.753 1.462h.005c6.634 0 12.032-5.396 12.035-12.035a11.83 11.83 0 00-3.411-8.504z"/>
    </svg>
    <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none">
      Agende seu horário!
    </span>
  </a>
);

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<'gallery' | 'results'>('results');
  
  const galleryImages = [
    "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1445510491599-c391e8046a68?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1559839734-2b71f1e3c770?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
  ];

  const results = [
    { 
      title: "Mechas Luxe", 
      before: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
      after: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800",
      desc: "Transformação completa de cor preservando a integridade dos fios."
    },
    { 
      title: "Produção Editorial", 
      before: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
      after: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
      desc: "Harmonização de penteado e maquiagem para eventos de gala."
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[2px] w-12 bg-accent"></div>
              <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px]">PORTFÓLIO EXCLUSIVO</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-display text-white leading-tight">
              A Excelência em <br />
              <span className="italic text-accent">Transformações</span>
            </h2>
          </div>
          
          <div className="flex bg-white/5 p-2 rounded-full backdrop-blur-sm border border-white/10">
            <button 
              onClick={() => setActiveTab('results')}
              className={`px-8 py-3 rounded-full text-[10px] font-bold tracking-widest transition-all ${activeTab === 'results' ? 'bg-accent text-white shadow-lg' : 'text-white/60 hover:text-white'}`}
            >
              ANTES & DEPOIS
            </button>
            <button 
              onClick={() => setActiveTab('gallery')}
              className={`px-8 py-3 rounded-full text-[10px] font-bold tracking-widest transition-all ${activeTab === 'gallery' ? 'bg-accent text-white shadow-lg' : 'text-white/60 hover:text-white'}`}
            >
              GALERIA
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'results' ? (
            <motion.div 
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 gap-12"
            >
              {results.map((item, i) => (
                <div key={i} className="group relative rounded-[40px] overflow-hidden shadow-2xl bg-white/5 border border-white/10">
                  <div className="grid grid-cols-2 h-[450px]">
                    <div className="relative border-r border-white/10">
                      <img src={item.before} alt="Antes" className="w-full h-full object-cover grayscale-[0.3]" referrerPolicy="no-referrer" />
                      <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md text-white text-[9px] font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-white/10">ANTES</div>
                    </div>
                    <div className="relative">
                      <img src={item.after} alt="Depois" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      <div className="absolute top-6 right-6 bg-accent text-white text-[9px] font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">DEPOIS</div>
                    </div>
                  </div>
                  <div className="p-8 bg-gradient-to-t from-black/80 to-transparent absolute inset-0 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-white text-2xl font-display mb-2">{item.title}</h4>
                    <p className="text-white/60 text-sm font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="gallery"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative"
            >
              <div className="flex gap-8 animate-marquee">
                {[...galleryImages, ...galleryImages].map((img, i) => (
                  <div key={i} className="min-w-[350px] md:min-w-[500px] aspect-[4/3] rounded-[50px] overflow-hidden shadow-2xl border border-white/10">
                    <img src={img} alt="Resultado" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <p className="text-white/40 text-xs tracking-[0.3em] uppercase">Arraste para explorar ou aguarde a rolagem automática</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contato" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-bg-soft rounded-[60px] p-12 md:p-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 hidden lg:block"></div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">EXPERIÊNCIA DUNO</span>
            <h2 className="text-5xl md:text-6xl font-display text-primary mb-10">Reserve seu <br /><span className="italic">Momento.</span></h2>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-accent shadow-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Localização</p>
                  <p className="text-primary font-bold">{CLINIC_CONFIG.address}</p>
                  <p className="text-slate-500 text-sm">{CLINIC_CONFIG.city}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-accent shadow-xl">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Telefone / WhatsApp</p>
                  <p className="text-primary font-bold">{CLINIC_CONFIG.whatsapp}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-accent shadow-xl">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Horário de Atendimento</p>
                  <p className="text-primary font-bold">{CLINIC_CONFIG.hours}</p>
                </div>
              </div>
            </div>
            
            <a 
              href={`https://wa.me/${CLINIC_CONFIG.whatsapp}?text=${encodeURIComponent(CLINIC_CONFIG.whatsappMsg)}`}
              className="mt-12 inline-flex items-center gap-4 bg-primary text-white px-12 py-6 rounded-full font-bold text-[10px] tracking-[0.2em] hover:bg-accent transition-all shadow-premium"
            >
              FALAR COM NOSSO CONCIERGE <ArrowRight size={14} />
            </a>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-[60px] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&q=80&w=1000" 
                alt={`Luxe Experience at ${CLINIC_CONFIG.logo}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent rounded-full flex items-center justify-center text-white text-center p-6 shadow-2xl border-8 border-white">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase">Ambiente Exclusivo & Acolhedor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const MapSection = () => (
  <section id="mapa" className="h-[600px] w-full relative grayscale hover:grayscale-0 transition-all duration-1000">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1974758953116!2d-46.65463742456578!3d-23.561349678800165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da173f47%3A0xad52077e60e86b46!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001311-000!5e0!3m2!1spt-BR!2sbr!4v1711296540000!5m2!1spt-BR!2sbr" 
      width="100%" 
      height="100%" 
      style={{ border: 0 }} 
      allowFullScreen 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
      title="Localização da Clínica"
    ></iframe>
    <div className="absolute top-12 left-12 glass-card p-10 rounded-[40px] max-w-sm hidden md:block">
      <h4 className="text-2xl font-display text-primary mb-4">Visite-nos</h4>
      <p className="text-text-muted text-sm font-light leading-relaxed mb-6">
        Estamos localizados no coração de São Paulo, prontos para oferecer uma experiência de beleza sem precedentes.
      </p>
      <a 
        href={`https://wa.me/${CLINIC_CONFIG.whatsapp}?text=${encodeURIComponent(CLINIC_CONFIG.whatsappMsg)}`} 
        target="_blank" 
        className="text-accent font-bold text-[10px] tracking-widest uppercase flex items-center gap-2"
      >
        Como Chegar <ArrowRight size={14} />
      </a>
    </div>
  </section>
);

const TeamSection = () => (
  <section className="py-32 bg-bg-light">
    <div className="max-w-7xl mx-auto px-6">
      <SectionTitle 
        title="Os Maestros" 
        subtitle="Uma curadoria dos melhores talentos internacionais, unidos pela paixão pela estética de alto padrão."
      />
      <div className="grid md:grid-cols-3 gap-12">
        {[
          { name: "Bianca Rossi", role: "Creative Director & Hair Artist", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800" },
          { name: "Julian Vance", role: "Master Colorist", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" },
          { name: "Sophia Arès", role: "Editorial Makeup Artist", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800" }
        ].map((member, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="group"
          >
            <div className="aspect-[3/4] rounded-[40px] overflow-hidden mb-6 relative shadow-2xl">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h4 className="text-2xl font-display text-primary mb-1">{member.name}</h4>
            <p className="text-[10px] text-accent font-bold uppercase tracking-widest">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ExperienceGallery = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <SectionTitle 
        title="O Manifesto Visual" 
        subtitle="Explore a atmosfera de sofisticação e os detalhes que tornam cada visita à DUNO uma experiência única."
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:auto-rows-[300px]">
        <div className="md:col-span-2 md:row-span-2 h-[400px] md:h-full rounded-[60px] overflow-hidden shadow-2xl relative group">
          <img src="https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Luxe Interior" />
          <div className="absolute inset-0 bg-primary/20"></div>
          <div className="absolute bottom-12 left-12 text-white">
            <p className="text-[10px] uppercase tracking-widest font-bold mb-2">Atelier</p>
            <h4 className="text-3xl font-display italic">Design & Conforto</h4>
          </div>
        </div>
        <div className="h-[300px] md:h-full rounded-[40px] overflow-hidden shadow-xl group">
          <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Service" />
        </div>
        <div className="h-[300px] md:h-full rounded-[40px] overflow-hidden shadow-xl group">
          <img src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Vibe" />
        </div>
        <div className="md:col-span-2 h-[300px] md:h-full rounded-[50px] overflow-hidden shadow-xl group relative">
          <img src="https://images.unsplash.com/photo-1522337443140-52f20c810756?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Lifestyle" />
          <div className="absolute inset-0 bg-primary/10"></div>
          <div className="absolute bottom-8 right-8 text-white text-right">
            <p className="text-2xl font-display">Sinfonia das Cores</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen selection:bg-accent selection:text-white">
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-primary flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Blue Glow Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white font-display text-7xl md:text-8xl tracking-[0.4em] mb-12 relative"
            >
              {CLINIC_CONFIG.logo}
              <div className="absolute -bottom-4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
            </motion.div>
            
            <div className="w-56 h-[3px] bg-white/10 relative overflow-hidden rounded-full shadow-inner">
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-accent shadow-[0_0_15px_rgba(37,99,235,0.8)]"
              />
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-white text-[9px] font-bold tracking-[0.5em] uppercase"
            >
              Preparando sua experiência
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: #121212; }
        ::-webkit-scrollbar-thumb { background: #B76E79; border-radius: 5px; }
        ::-webkit-scrollbar-thumb:hover { background: #3B82F6; }
      `}</style>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <TrustedBrands />
      <Philosophy />
      <About />
      <Services />
      <ExperienceGallery />
      <TeamSection />
      <Portfolio />
      <VirtualAssessment />
      <Testimonials />
      <Journey />
      <FAQ />
      <ClosingBanner />
      <MapSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[100]"
      style={{ scaleX }}
    />
  );
};

const VirtualAssessment = () => (
  <section className="py-24 bg-bg-soft">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-primary rounded-[60px] p-12 md:p-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 -skew-x-12 translate-x-1/4"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-center md:text-left">
            <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">CONSULTA VIRTUAL</span>
            <h2 className="text-4xl md:text-6xl font-display text-white mb-8">Comece seu <br /><span className="italic text-accent">Novo Visual</span> hoje.</h2>
            <p className="text-white/70 text-lg font-light mb-12 max-w-lg">
              Receba uma consultoria prévia da sua transformação sem sair de casa. Nossa equipe de especialistas está pronta para te atender via WhatsApp.
            </p>
            <motion.a 
              href={`https://wa.me/${CLINIC_CONFIG.whatsapp}?text=${encodeURIComponent(CLINIC_CONFIG.whatsappMsg)}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-white px-12 py-6 rounded-full font-bold text-[12px] tracking-[0.3em] uppercase inline-flex items-center gap-4 shadow-2xl shadow-accent/20"
            >
              Iniciar Consulta Virtual <ArrowRight size={16} />
            </motion.a>
          </div>
          <div className="w-full md:w-1/3 aspect-square rounded-full border-8 border-white/5 overflow-hidden shadow-premium">
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" alt="Consulta" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ClosingBanner = () => (
  <section className="py-32 bg-primary relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-accent rounded-full blur-[150px]"></div>
    </div>
    
    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">FECHE O SEU CICLO</span>
        <h2 className="text-5xl md:text-8xl font-display text-white mb-12 leading-tight">
          A Beleza que Você Merece <br /> Está a um <span className="italic">Clique.</span>
        </h2>
        <motion.a 
          href={`https://wa.me/${CLINIC_CONFIG.whatsapp}?text=${encodeURIComponent(CLINIC_CONFIG.whatsappMsg)}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-accent text-white px-16 py-6 rounded-full font-bold text-[12px] tracking-[0.3em] uppercase shadow-2xl shadow-accent/40"
        >
          INICIAR TRANSFORMAÇÃO
        </motion.a>
      </motion.div>
    </div>
  </section>
);



