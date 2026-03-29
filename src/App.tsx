/**
 * TEMPLATE WHITE-LABEL – SALÃO DE BELEZA DUNO (VERSÃO 10/10)
 * Design premium moderno e acolhedor para público popular
 * Corrigido: conteúdo de odontologia removido, design alegre e profissional
 * Personalização rápida – 15 a 25 minutos
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
const SALON_DATA = {
  name: "DUNO",
  slogan: "Transforme seu visual com qualidade que cabe no seu bolso.",
  heroText: "Seu Estilo, Nossa Paixão.",
  whatsapp: "5511992876219",
  whatsappMsg: "Olá! Gostaria de agendar um horário no DUNO.",
  address: "Alameda das Flores, 450 - Centro, São Paulo SP",
  hours: "Segunda a Sábado: 08:30 às 20:30",
  instagram: "@duno_salao",
  facebook: "dunosalao",
  stats: [
    { label: "Clientes Felizes", value: "+3000" },
    { label: "Anos de Tradição", value: "05+" },
    { label: "Avaliações 5 Estrelas", value: "+1500" }
  ]
};

// --- Componentes Reutilizáveis ---

const SectionTitle = ({ title, subtitle, centered = true }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}
    >
      <div className="h-[2px] w-8 bg-primary"></div>
      <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">DUNO EXPERIENCE</span>
      <div className="h-[2px] w-8 bg-primary"></div>
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl font-display text-text-main leading-tight mb-6"
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

const WhatsAppCTA = ({ text = "Agendar via WhatsApp", className = "", icon = true }: { text?: string, className?: string, icon?: boolean }) => (
  <motion.a 
    href={`https://wa.me/${SALON_DATA.whatsapp}?text=${encodeURIComponent(SALON_DATA.whatsappMsg)}`}
    target="_blank"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`btn-whatsapp-luxe ${className}`}
  >
    {icon && <MessageCircle size={22} />}
    {text}
  </motion.a>
);

// --- Componentes das Seções ---

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => (p >= 100 ? 100 : p + 5));
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      key="loading"
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[1000] bg-white flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-primary text-6xl font-display font-bold tracking-tighter mb-10"
      >
        {SALON_DATA.name}
      </motion.div>
      
      <div className="w-64 h-1.5 bg-gray-100 relative overflow-hidden rounded-full">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="absolute inset-0 bg-primary"
        />
      </div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-text-muted text-[10px] uppercase font-bold tracking-[0.4em]"
      >
        Dando o toque final no seu estilo...
      </motion.p>
    </motion.div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menu = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Transformações', href: '#transformacoes' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-[500] transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-3xl font-display font-bold text-primary tracking-tighter hover:opacity-80 transition-opacity">
          {SALON_DATA.name}
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {menu.map(item => (
            <a key={item.name} href={item.href} className="text-[11px] font-bold uppercase tracking-widest text-text-main hover:text-primary transition-all relative group">
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
          <WhatsAppCTA text="AGENDAR AGORA" className="!py-2.5 !px-6 !text-[10px] !tracking-widest" />
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {menu.map(item => (
                <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="text-2xl font-display font-semibold text-text-main">
                  {item.name}
                </a>
              ))}
              <WhatsAppCTA className="mt-4" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">
      {/* Visual Impact Center */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/4 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="text-primary bg-primary/10 p-2 rounded-lg"><Scissors size={20} /></span>
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs">Beleza de Alto Padrão</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-display text-text-main leading-tight mb-10 tracking-tighter">
            {SALON_DATA.slogan}
          </h1>
          
          <p className="text-xl text-text-muted font-light leading-relaxed max-w-lg mb-12">
            No <span className="font-bold text-primary">{SALON_DATA.name}</span>, combinamos técnicas modernas e atendimento acolhedor para que você revele sua melhor versão hoje mesmo.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <WhatsAppCTA className="!text-lg !py-6 !px-10" />
            <motion.a 
              href="#servicos"
              whileHover={{ scale: 1.05 }}
              className="btn-outline-duno shadow-sm !text-lg !py-6 !px-10 flex items-center justify-center gap-4"
            >
              Ver Nossos Serviços <ArrowRight size={20} />
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, rotate: 2 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* <!-- TROQUE A IMAGEM AQUI - Hero Hero Principal de Salão --> */}
          <div className="aspect-square bg-gradient-to-br from-primary to-accent rounded-[60px] p-3 shadow-2xl relative group overflow-hidden">
            <div className="w-full h-full rounded-[50px] bg-white overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=2000" 
                alt="Transformação Capilar DUNO" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Real Price Badge */}
            <motion.div 
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-secondary text-white p-8 rounded-full border-8 border-white shadow-2xl z-20"
            >
              <p className="text-[10px] uppercase font-bold tracking-widest text-primary mb-1">Cortes desde</p>
              <p className="text-3xl font-display font-bold">R$ 35</p>
            </motion.div>
          </div>
          
          {/* Acolhimento Badge */}
          <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 border border-gray-100 hidden md:flex">
             <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <Smile size={32} />
             </div>
             <div>
                <p className="font-bold text-text-main leading-tight">100% Acolhedor</p>
                <p className="text-xs text-text-muted">Aqui você é de casa!</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AboutSection = () => (
   <section id="sobre" className="py-32 bg-bg-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
         <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-video rounded-[60px] overflow-hidden shadow-2xl relative"
         >
            {/* <!-- TROQUE A IMAGEM AQUI - Foto das Instalações do Salão --> */}
            <img 
               src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1200" 
               alt="Ambiente Relaxante DUNO" 
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
            />
         </motion.div>
         
         <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
         >
            <SectionTitle 
               title="Beleza para Todos" 
               subtitle="Nossa missão é democratizar a alta qualidade em estética, oferecendo um espaço inclusivo, moderno e alegre para todas as pessoas."
               centered={false}
            />
            
            <div className="grid grid-cols-3 gap-8 mb-12">
               {SALON_DATA.stats.map((stat, i) => (
                  <div key={i} className="text-center md:text-left">
                     <p className="text-4xl font-display font-bold text-primary mb-2 tracking-tighter">{stat.value}</p>
                     <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest">{stat.label}</p>
                  </div>
               ))}
            </div>
            
            <p className="text-text-muted text-lg font-light leading-relaxed mb-10">
               No {SALON_DATA.name}, acreditamos que cuidar de si não precisa ser um luxo inacessível. Nossa equipe é composta por talentos dedicados a ouvir você e entender seu estilo único.
            </p>
            
            <WhatsAppCTA text="Conhecer o Salão" icon={false} className="!bg-secondary" />
         </motion.div>
      </div>
   </section>
);

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<'masc' | 'fem' | 'unisex'>('fem');

  const pricing = {
    masc: [
      { name: "Corte Masculino", price: "35,00", desc: "Corte clássico, degradê ou social.", img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600" },
      { name: "Corte + Barba", price: "55,00", desc: "Ritual completo para um visual alinhado.", img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600" },
      { name: "Modelagem de Barba", price: "28,00", desc: "Desenho da barba com toalha quente.", img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600" },
      { name: "Coloração de Barba", price: "45,00", desc: "Correção de tons para um visual natural.", img: "https://images.unsplash.com/photo-1599351431247-f10b21ce963f?w=600" }
    ],
    fem: [
      { name: "Corte Feminino", price: "45,00", desc: "Visagismo completo para seu rosto.", img: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600" },
      { name: "Coloração Completa", price: "85,00", desc: "Cobertura total dos fios com brilho.", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600" },
      { name: "Mechas / Luzes", price: "120,00", desc: "Iluminação técnica de alto nível.", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600" },
      { name: "Escova Premium", price: "35,00", desc: "Lavagem sensorial e escovação.", img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600" }
    ],
    unisex: [
      { name: "Hidratação Profunda", price: "45,00", desc: "Reposição de nutrientes e massa.", img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600" },
      { name: "Combo Manicure + Pedicure", price: "50,00", desc: "Cuidado completo para mãos e pés.", img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600" },
      { name: "Selagem Capilar", price: "110,00", desc: "Redução de frizz e alinhamento elegante.", img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=600" },
      { name: "Design de Sobrancelhas", price: "20,00", desc: "Arquitetura do olhar com técnica.", img: "https://images.unsplash.com/photo-1522337443140-52f20c810756?w=600" },
      { name: "Massagem Capilar", price: "40,00", desc: "Relaxante e estimulante para os fios.", img: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600" },
      { name: "Depilação com Cera", price: "25,00", desc: "Técnica suave com produtos premium.", img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600" }
    ]
  };

  return (
    <section id="servicos" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Nossos Serviços" 
          subtitle="Tabela de preços justa e transparente. Selecione a categoria abaixo e agende seu horário agora!"
        />

        {/* Tab Selection */}
        <div className="flex bg-bg-soft p-1.5 rounded-3xl mb-16 max-w-xl mx-auto border border-gray-100 shadow-inner">
          {([
            { id: 'masc', label: 'MASCULINOS', icon: <User size={18} /> },
            { id: 'fem', label: 'FEMININOS', icon: <Users size={18} /> },
            { id: 'unisex', label: 'UNISEX / GERAL', icon: <Smile size={18} /> }
          ] as const).map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl text-[10px] font-bold transition-all tracking-widest ${activeTab === tab.id ? 'bg-primary text-white shadow-lg' : 'text-text-muted hover:text-primary'}`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Cards */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {pricing[activeTab].map((item, i) => (
              <motion.div 
               key={i}
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="card-service-premium group"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-primary text-white text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow-lg">
                    POPULAR + QUALIDADE
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-display text-text-main mb-3 group-hover:text-primary transition-colors">{item.name}</h4>
                  <p className="text-sm text-text-muted mb-6 leading-relaxed italic">{item.desc}</p>
                  <div className="flex justify-between items-end pt-6 border-t border-gray-100">
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">A partir de</p>
                      <p className="text-3xl font-display text-text-main font-bold tracking-tighter">R$ {item.price}</p>
                    </div>
                    <a 
                      href={`https://wa.me/${SALON_DATA.whatsapp}?text=${encodeURIComponent(`Quero agendar: ${item.name}`)}`}
                      className="text-primary hover:text-secondary flex items-center gap-2 font-bold text-xs uppercase tracking-widest"
                    >
                      AGENDAR <ArrowRight size={16} />
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

const TransformationSection = () => (
   <section id="transformacoes" className="py-32 bg-bg-soft">
      <div className="max-w-7xl mx-auto px-6">
         <SectionTitle 
            title="Sua Melhor Versão" 
            subtitle="Confira algumas das transformações impressionantes feitas por nossa equipe com carinho e dedicação."
         />
         
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
               <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-[3/4] rounded-3xl overflow-hidden group relative shadow-xl"
               >
                  <img src={`https://images.unsplash.com/photo-${i === 1 ? '1621605815971-fbc98d665033' : i === 2 ? '1595476108010-b4d1f102b1b1' : i === 3 ? '1560066984-138dadb4c035' : '1580618672591-eb180b1a973f'}?w=800`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Transformação" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                     <span className="bg-white text-primary p-4 rounded-full shadow-2xl">
                        <ArrowRight size={32} />
                     </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                     <p className="text-white text-[10px] font-bold uppercase tracking-widest">Resultado Real</p>
                  </div>
               </motion.div>
            ))}
         </div>
      </div>
   </section>
);

const FAQSection = () => {
    const [open, setOpen] = useState<number | null>(0);
    const faqs = [
       { q: "Quais as formas de pagamento?", a: "Aceitamos Dinheiro, PIX e cartões de Débito e Crédito (Visa, Master, Elo, etc.)." },
       { q: "Precisa marcar horário com antecedência?", a: "Para garantir que você não enfrente filas, recomendamos fortemente o agendamento prévio via WhatsApp." },
       { q: "Atendem barba masculina também?", a: "Sim! Somos especialistas em visagismo masculino, cortes modernos e barboterapia completa." },
       { q: "Onde o salão está localizado?", a: SALON_DATA.address + ". É fácil de chegar!" }
    ];

    return (
       <section id="faq" className="py-32 bg-white">
          <div className="max-w-3xl mx-auto px-6">
             <SectionTitle title="Dúvidas Frequentes" />
             <div className="space-y-4">
                {faqs.map((f, i) => (
                   <div key={i} className="border transition-all duration-300 rounded-3xl overflow-hidden">
                      <button 
                        onClick={() => setOpen(open === i ? null : i)}
                        className={`w-full p-8 text-left flex justify-between items-center transition-colors ${open === i ? 'bg-primary/5 text-primary' : 'hover:bg-gray-50'}`}
                      >
                         <span className="text-xl font-display font-bold">{f.q}</span>
                         {open === i ? <Minus size={22} /> : <Plus size={22} />}
                      </button>
                      <AnimatePresence>
                         {open === i && (
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                               <div className="p-8 pt-0 text-text-muted leading-relaxed italic">
                                  {f.a}
                               </div>
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
   <footer className="bg-text-main text-white py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-primary/10 -skew-x-12 translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-20 relative z-10">
         <div>
            <h3 className="text-4xl font-display font-bold text-primary mb-8 tracking-tighter">{SALON_DATA.name}</h3>
            <p className="text-gray-400 font-light leading-relaxed mb-10 text-lg">
               Beleza popular com alma premium há mais de 5 anos no mercado. Nossa alegria é cuidar de você.
            </p>
            <div className="flex gap-8">
               <a href="#" className="text-gray-400 hover:text-primary active:scale-95 transition-all"><Instagram size={28} /></a>
               <a href="#" className="text-gray-400 hover:text-primary active:scale-95 transition-all"><Facebook size={28} /></a>
               <a href="#" className="text-gray-400 hover:text-primary active:scale-95 transition-all"><Phone size={28} /></a>
            </div>
         </div>
         
         <div>
            <h4 className="text-[10px] uppercase font-bold tracking-[0.4em] text-primary mb-10">Contatos & Locais</h4>
            <div className="space-y-8 text-gray-300">
               <div className="flex items-start gap-4">
                  <MapPin size={24} className="text-primary flex-shrink-0" />
                  <p className="text-lg font-light leading-relaxed">{SALON_DATA.address}</p>
               </div>
               <div className="flex items-start gap-4">
                  <Clock size={24} className="text-primary flex-shrink-0" />
                  <p className="text-lg font-light leading-relaxed">{SALON_DATA.hours}</p>
               </div>
               <div className="flex items-start gap-4">
                  <MessageCircle size={24} className="text-primary flex-shrink-0" />
                  <p className="text-lg font-light leading-relaxed">Agende pelo Zap: <br /><span className="text-primary font-bold">{SALON_DATA.whatsapp}</span></p>
               </div>
            </div>
         </div>
         
         <div>
            <h4 className="text-[10px] uppercase font-bold tracking-[0.4em] text-primary mb-10">Venha Brilhar</h4>
            <p className="text-gray-400 font-light mb-10 text-lg">Não deixe seu visual para depois. O DUNO cuida de você agora mesmo!</p>
            <WhatsAppCTA className="!w-full text-center" />
         </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-[0.4em] text-gray-600 font-bold">
         <p>© {new Date().getFullYear()} {SALON_DATA.name} SALÃO — Seu Estilo, Nossa Paixão.</p>
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
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="selection:bg-primary/20 selection:text-primary min-h-screen">
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      
      {!isLoading && (
        <motion.div 
           initial={{ opacity: 0 }} 
           animate={{ opacity: 1 }} 
           className="relative"
        >
          <Header />
          <Hero />
          <AboutSection />
          <ServicesSection />
          <TransformationSection />
          <FAQSection />
          <Footer />
          
          {/* Floating WhatsApp Pulsante + Glow */}
          <motion.a 
            href={`https://wa.me/${SALON_DATA.whatsapp}`}
            target="_blank"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, type: "spring" }}
            className="fixed bottom-10 right-10 z-[1000] bg-[#25D366] text-white p-6 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.5)] animate-whatsapp group"
          >
            <MessageCircle size={32} />
            <span className="absolute right-full mr-10 top-1/2 -translate-y-1/2 bg-white text-secondary px-6 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest shadow-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100">
               Chamar no Zap 🚀
            </span>
          </motion.a>
        </motion.div>
      )}
    </div>
  );
}
