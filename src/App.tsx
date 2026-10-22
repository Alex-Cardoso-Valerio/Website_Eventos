import { useState } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Play,
  Heart,
  Flower2,
  Camera,
  Users,
  CalendarCheck,
  Sparkles,
  ShieldCheck,
  Palette,
  Award,
  Smile,
  Clock,
  Phone,
  Mail,
  MapPin,
  Send,
  ChevronLeft,
  ChevronRight,
  Quote,
  Menu,
  X,
  GlassWater,
  PartyPopper,
  GraduationCap,
  Cake,
  Building2,
  CheckCircle2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ----------------------------- Imagens do Unsplash ----------------------------- */

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}`;

/* ----------------------------- Dados Mockados ----------------------------- */

const NAV_LINKS = [
  { name: "Início", href: "#inicio" },
  { name: "Sobre Nós", href: "#sobre" },
  { name: "Serviços", href: "#servicos" },
  { name: "Tipos de Eventos", href: "#tipos-de-eventos" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "Contato", href: "#contato" },
];

const STATS: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: Heart, value: "650+", label: "Eventos Realizados" },
  { icon: Clock, value: "12+", label: "Anos de Tradição" },
  { icon: Smile, value: "100%", label: "Clientes Encantados" },
];

const SERVICES: { icon: LucideIcon; title: string; subtitle: string }[] = [
  {
    icon: Sparkles,
    title: "Assessoria & Planejamento",
    subtitle: "Planejamento completo do início ao fim para uma celebração mágica e sem preocupações.",
  },
  {
    icon: Palette,
    title: "Cenografia & Decoração",
    subtitle: "Projetos visuais exclusivos, ambientação refinada e arranjos florais de tirar o fôlego.",
  },
  {
    icon: GlassWater,
    title: "Gastronomia & Bar de Luxo",
    subtitle: "Menus personalizados com alta gastronomia e coquetelaria contemporânea assinada.",
  },
  {
    icon: Building2,
    title: "Espaço Climatizado & Acústica",
    subtitle: "Salão nobre com isolamento acústico, iluminação cênica e áreas externas exuberantes.",
  },
  {
    icon: CalendarCheck,
    title: "Coordenação do Dia",
    subtitle: "Equipe sênior cuidando de cada detalhe para que você viva intensamente seu momento.",
  },
];

const FEATURES: { icon: LucideIcon; label: string }[] = [
  { icon: Heart, label: "Atendimento Personalizado" },
  { icon: Palette, label: "Cenários Exclusivos" },
  { icon: ShieldCheck, label: "Fornecedores de Elite" },
  { icon: Sparkles, label: "Experiência Sem Estresse" },
];

type EventCategory = "todos" | "casamentos" | "15anos" | "formaturas" | "corporativo";

interface EventTheme {
  category: EventCategory;
  name: string;
  tags: string;
  image: string;
  badge: string;
}

const EVENT_THEMES: EventTheme[] = [
  {
    category: "casamentos",
    name: "Casamentos de Alto Padrão",
    tags: "Romântico • Clássico • Memorável",
    image: img("photo-1519741497674-611481863552", 700),
    badge: "Casamentos",
  },
  {
    category: "15anos",
    name: "Festas de 15 Anos & Debutantes",
    tags: "Glamour • Contemporâneo • Vibrante",
    image: img("photo-1516450360452-9312f5e86fc7", 700),
    badge: "15 Anos",
  },
  {
    category: "formaturas",
    name: "Bailes de Formatura",
    tags: "Elegante • Triunfal • Inesquecível",
    image: img("photo-1533105079780-92b9be482077", 700),
    badge: "Formaturas",
  },
  {
    category: "corporativo",
    name: "Galas & Eventos Corporativos",
    tags: "Sofisticado • Networking • Prestígio",
    image: img("photo-1511795409834-ef04bbd61622", 700),
    badge: "Corporativo",
  },
  {
    category: "todos",
    name: "Aniversários & Celebrações VIP",
    tags: "Exclusivo • Acolhedor • Personalizado",
    image: img("photo-1464366400600-7168b8af9bc3", 700),
    badge: "Aniversários",
  },
];

const TESTIMONIALS = [
  {
    name: "Mariana & Leonardo",
    type: "Casamento no Campo",
    quote:
      "A Eterna transformou o nosso casamento em um verdadeiro conto de fadas! A atenção a cada pequeno detalhe, a iluminação e a gastronomia deixaram todos os convidados maravilhados.",
    photo: img("photo-1537633552985-df8429e8048b", 300),
  },
  {
    name: "Camila Vasconcelos",
    type: "Festa de 15 Anos",
    quote:
      "A festa de 15 anos da minha filha foi um espetáculo! A cenografia moderna, a pista de dança e a organização impecável fizeram da noite a realização de um sonho.",
    photo: img("photo-1534528741775-53994a69daeb", 300),
  },
  {
    name: "Comissão Medicina USP",
    type: "Baile de Formatura",
    quote:
      "Para 800 pessoas, a logística foi perfeita do primeiro minuto até o último brinde. A acústica, o serviço e a elegância do salão superaram qualquer expectativa.",
    photo: img("photo-1522673607200-164d1b6ce486", 300),
  },
];

const QUICK_LINKS = [
  "Início",
  "Sobre o Salão",
  "Nossos Serviços",
  "Tipos de Eventos",
  "Galeria de Fotos",
  "Depoimentos",
  "Agendar Visita",
];

const CONTACTS: { icon: LucideIcon; text: string }[] = [
  { icon: Phone, text: "+55 (11) 98765-4321" },
  { icon: Mail, text: "contato@eternaeventos.com.br" },
  { icon: MapPin, text: "Av. Europa, Jardins — São Paulo, SP" },
];

/* ----------------------------- Ícones Sociais SVG ----------------------------- */

type IconProps = { className?: string };

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const Instagram = ({ className }: IconProps) => (
  <svg {...svgProps} className={className} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" />
  </svg>
);

const Facebook = ({ className }: IconProps) => (
  <svg {...svgProps} className={className} aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Youtube = ({ className }: IconProps) => (
  <svg {...svgProps} className={className} aria-hidden="true">
    <path d="M2.5 17a24.1 24.1 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const SOCIALS = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Youtube, label: "YouTube" },
];

const IMAGES = {
  hero: img("photo-1519167758481-83f550bb49b3", 1400),
  about: img("photo-1510076857177-7470076d4098", 1400),
  cta: img("photo-1511795409834-ef04bbd61622", 1600),
};

/* ----------------------------- Componentes Reutilizáveis ----------------------------- */

const Button = ({
  children,
  variant = "dark",
  className = "",
  onClick,
}: {
  children: ReactNode;
  variant?: "dark" | "light" | "gold";
  className?: string;
  onClick?: () => void;
}) => {
  const styles = {
    dark: "bg-[#1A2421] text-white hover:bg-[#2C3B32] shadow-sm",
    light: "bg-white/80 text-[#2C3B32] border border-[#d9cfc2] hover:bg-white shadow-sm",
    gold: "bg-[#D9B98B] text-[#1A2421] hover:bg-[#cfa974] font-semibold shadow-md",
  }[variant];
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-xs font-medium tracking-wide transition-all ${styles} ${className}`}
    >
      {children}
    </motion.button>
  );
};

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#A8845B]">
    {children}
  </p>
);

const Logo = ({ light = false }: { light?: boolean }) => (
  <a href="#inicio" className="group flex items-center gap-2.5">
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#A8845B]/10 transition-transform duration-300 group-hover:rotate-12">
      <Flower2 className="h-5 w-5 text-[#A8845B]" strokeWidth={1.4} />
    </div>
    <span className="leading-tight">
      <span
        className={`block font-serif text-2xl tracking-[0.16em] ${
          light ? "text-white" : "text-[#1A2421]"
        }`}
      >
        ETERNA
      </span>
      <span className="block text-[8px] uppercase tracking-[0.3em] text-[#A8845B]">
        Espaço & Eventos de Luxo
      </span>
    </span>
  </a>
);

/* ----------------------------- Modal de Agendamento / Orçamento ----------------------------- */

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-lg rounded-2xl bg-[#FAF8F5] p-6 shadow-2xl md:p-8"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-2 text-[#2C3B32] hover:bg-[#F6EFE7]"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>

            {submitted ? (
              <div className="py-10 text-center">
                <CheckCircle2 className="mx-auto h-14 w-14 text-[#A8845B]" />
                <h3 className="mt-4 font-serif text-2xl text-[#1A2421]">Solicitação Enviada!</h3>
                <p className="mt-2 text-sm text-[#6b716c]">
                  Nossa concierge entrará em contato em breve para apresentar opções exclusivas para o seu evento.
                </p>
              </div>
            ) : (
              <div>
                <Eyebrow>Planeje Seu Evento dos Sonhos</Eyebrow>
                <h3 className="mt-2 font-serif text-2xl text-[#1A2421]">Agende uma Visita ao Espaço</h3>
                <p className="mt-1 text-xs text-[#6b716c]">
                  Preencha os dados e receba uma proposta personalizada com degustação inclusa.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2C3B32]">Seu Nome</label>
                    <input
                      required
                      type="text"
                      placeholder="Ex: Ana Clara Martins"
                      className="mt-1 w-full rounded-lg border border-[#d9cfc2] bg-white px-3.5 py-2.5 text-xs outline-none focus:border-[#A8845B]"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-[#2C3B32]">WhatsApp / Telefone</label>
                      <input
                        required
                        type="tel"
                        placeholder="(11) 99999-9999"
                        className="mt-1 w-full rounded-lg border border-[#d9cfc2] bg-white px-3.5 py-2.5 text-xs outline-none focus:border-[#A8845B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#2C3B32]">Tipo de Evento</label>
                      <select
                        required
                        className="mt-1 w-full rounded-lg border border-[#d9cfc2] bg-white px-3.5 py-2.5 text-xs outline-none focus:border-[#A8845B]"
                      >
                        <option value="casamento">Casamento</option>
                        <option value="15anos">Festa de 15 Anos</option>
                        <option value="formatura">Baile de Formatura</option>
                        <option value="aniversario">Aniversário / Festa Privada</option>
                        <option value="corporativo">Evento Corporativo</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#2C3B32]">Data Prevista / Número Estimado de Convidados</label>
                    <input
                      type="text"
                      placeholder="Ex: Outubro / 2026 — 250 convidados"
                      className="mt-1 w-full rounded-lg border border-[#d9cfc2] bg-white px-3.5 py-2.5 text-xs outline-none focus:border-[#A8845B]"
                    />
                  </div>

                  <Button variant="dark" className="mt-4 w-full justify-center">
                    Enviar Solicitação Exclusiva <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

/* ----------------------------- Barra de Navegação ----------------------------- */

const Navbar = ({ onOpenBooking }: { onOpenBooking: () => void }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md transition-all duration-300 border-b border-[#eae3d5]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        <ul className="hidden items-center gap-8 text-xs font-medium text-[#2C3B32] lg:flex">
          {NAV_LINKS.map((link, i) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`relative py-1 transition-colors hover:text-[#A8845B] ${
                  i === 0 ? "text-[#1A2421] font-semibold" : ""
                }`}
              >
                {link.name}
                {i === 0 && (
                  <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-[#1A2421]" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button variant="dark" onClick={onOpenBooking}>
            Planeje Seu Evento <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>

        <button
          className="rounded-lg p-2 text-[#1A2421] lg:hidden hover:bg-[#F6EFE7]"
          onClick={() => setOpen(!open)}
          aria-label="Abrir Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Menu Mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-[#eadfce] bg-[#FAF8F5] px-6 py-5 lg:hidden"
          >
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-sm font-medium text-[#2C3B32] hover:text-[#A8845B]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <Button
                variant="dark"
                className="w-full justify-center"
                onClick={() => {
                  setOpen(false);
                  onOpenBooking();
                }}
              >
                Planeje Seu Evento <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

/* ----------------------------- Hero Section ----------------------------- */

const Hero = ({ onOpenBooking }: { onOpenBooking: () => void }) => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#F6EFE7] pt-8 pb-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1 lg:col-span-7"
        >
          <div className="flex items-center gap-2">
            <span className="h-[1px] w-8 bg-[#A8845B]" />
            <Eyebrow>VAMOS TRANSFORMAR O SEU DIA</Eyebrow>
          </div>

          <h1 className="mt-4 font-serif text-5xl leading-[1.15] text-[#1A2421] sm:text-6xl md:text-7xl">
            Momentos Únicos
            <span
              style={{ fontFamily: "Alex Brush, cursive" }}
              className="mt-2 block text-5xl font-normal text-[#A8845B] sm:text-6xl md:text-7xl"
            >
              Em Histórias Eternas
            </span>
          </h1>

          <p className="mt-5 text-base font-semibold text-[#2C3B32]">
            Planejado com perfeição. Feito sob medida para você.
          </p>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#5b625d] sm:text-base">
            O Eterna é um espaço nobre e completo para celebrações de alto padrão.
            Cuidamos de cada detalhe com maestria — de casamentos deslumbrantes e festas de 15 anos a formaturas, aniversários e encontros corporativos inesquecíveis.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="dark" onClick={onOpenBooking}>
              Planejar Meu Evento <ArrowRight className="h-3.5 w-3.5" />
            </Button>
            <a href="#sobre">
              <Button variant="light">
                Conhecer o Espaço{" "}
                <Play className="h-3.5 w-3.5 rounded-full border border-[#2C3B32] p-0.5" />
              </Button>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 border-t border-[#e2d6c5] pt-8 sm:grid-cols-3">
            {STATS.map(({ icon: Icon, value, label }) => (
              <motion.div
                key={label}
                whileHover={{ y: -3 }}
                className="flex items-center gap-3.5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FAF8F5] shadow-xs">
                  <Icon className="h-6 w-6 text-[#A8845B]" strokeWidth={1.3} />
                </div>
                <div>
                  <h4 className="font-serif text-2xl font-bold text-[#1A2421]">{value}</h4>
                  <p className="text-xs text-[#6b716c]">{label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative order-1 lg:order-2 lg:col-span-5"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={IMAGES.hero}
              alt="Salão nobre de eventos decorado para grande celebração"
              className="h-[380px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[480px] md:h-[540px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-5 backdrop-blur-md shadow-lg">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-[#A8845B]" />
                <p className="font-serif text-base italic text-[#1A2421]">
                  "Sua celebração merece algo verdadeiramente extraordinário."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ----------------------------- Serviços ----------------------------- */

const ServiceCard = ({
  icon: Icon,
  title,
  subtitle,
  index,
}: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  index: number;
}) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.08)" }}
    className="group flex flex-col items-center rounded-2xl bg-white/80 p-6 text-center shadow-xs transition-all duration-300 border border-[#eae3d5]"
  >
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F6EFE7] transition-colors duration-300 group-hover:bg-[#1A2421]">
      <Icon
        className="h-7 w-7 text-[#A8845B] transition-colors duration-300 group-hover:text-[#D9B98B]"
        strokeWidth={1.3}
      />
    </div>
    <h3 className="mt-5 font-serif text-base font-bold text-[#1A2421]">{title}</h3>
    <p className="mt-2.5 text-xs leading-relaxed text-[#6b716c]">{subtitle}</p>
  </motion.article>
);

const Services = () => (
  <section id="servicos" className="bg-[#FAF8F5] px-6 py-20">
    <div className="mx-auto max-w-7xl">
      <div className="text-center">
        <Eyebrow>— O QUE FAZEMOS —</Eyebrow>
        <h2 className="mt-3 font-serif text-3xl font-bold text-[#1A2421] sm:text-4xl">
          Nossos Serviços Para Grandes Eventos
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-xs text-[#6b716c] sm:text-sm">
          Da primeira concepção ao brinde final — cuidamos de cada detalhe com paixão, sofisticação e excelência.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {SERVICES.map((s, idx) => (
          <ServiceCard key={s.title} index={idx} {...s} />
        ))}
      </div>
    </div>
  </section>
);

/* ----------------------------- Sobre Nós ----------------------------- */

const About = ({ onOpenBooking }: { onOpenBooking: () => void }) => (
  <section id="sobre" className="relative overflow-hidden bg-[#F6EFE7]">
    <div className="mx-auto grid max-w-7xl items-center lg:grid-cols-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative lg:col-span-6"
      >
        <img
          src={IMAGES.about}
          alt="Cenário deslumbrante com pergolado e vista panorâmica"
          className="h-[360px] w-full object-cover lg:h-[620px]"
        />

        <div className="absolute top-6 left-6 rounded-xl bg-white/85 px-4 py-3 backdrop-blur-sm shadow-md">
          <p
            style={{ fontFamily: "Alex Brush, cursive" }}
            className="text-2xl text-[#1A2421]"
          >
            Porque cada detalhe importa... ♡
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center px-6 py-14 lg:col-span-6 lg:px-16"
      >
        <Eyebrow>SOBRE O ESPAÇO ETERNA</Eyebrow>
        <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#1A2421] sm:text-4xl">
          Mais Que Um Salão, Os Parceiros da Sua Celebração
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[#5b625d]">
          Acreditamos que cada celebração carrega uma alma própria. No Eterna, unimos arquitetura imponente, gastronomia premiada e execução primorosa para dar vida a momentos que refletem a sua identidade — seja um casamento intimista, uma estrondosa festa de 15 anos, um triunfal baile de formatura ou uma convenção empresarial de prestígio.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {FEATURES.map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              whileHover={{ y: -4 }}
              className="rounded-xl bg-white/50 p-3.5 text-center shadow-xs"
            >
              <Icon className="mx-auto h-6 w-6 text-[#A8845B]" strokeWidth={1.3} />
              <p className="mt-2 text-xs font-semibold text-[#2C3B32]">{label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-9">
          <Button variant="dark" onClick={onOpenBooking}>
            Conhecer Nossa Estrutura <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ----------------------------- Tipos de Eventos / Estilos ----------------------------- */

const Themes = ({ onOpenBooking }: { onOpenBooking: () => void }) => {
  const [activeCategory, setActiveCategory] = useState<EventCategory>("todos");

  const categories: { key: EventCategory; label: string; icon: LucideIcon }[] = [
    { key: "todos", label: "Todos os Eventos", icon: Sparkles },
    { key: "casamentos", label: "Casamentos", icon: Heart },
    { key: "15anos", label: "15 Anos", icon: PartyPopper },
    { key: "formaturas", label: "Formaturas", icon: GraduationCap },
    { key: "corporativo", label: "Corporativo", icon: Building2 },
  ];

  const filteredThemes =
    activeCategory === "todos"
      ? EVENT_THEMES
      : EVENT_THEMES.filter((theme) => theme.category === activeCategory || theme.category === "todos");

  return (
    <section id="tipos-de-eventos" className="bg-[#FAF8F5] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Eyebrow>CELEBRAÇÕES PARA CADA MOMENTO</Eyebrow>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[#1A2421] sm:text-4xl">
              Eventos Que Expressam Sua Essência
            </h2>
            <p className="mt-2 text-xs text-[#6b716c] sm:text-sm">
              Casamentos, debutantes, formaturas, aniversários e comemorações corporativas de luxo.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium transition-all ${
                  activeCategory === key
                    ? "bg-[#1A2421] text-white shadow-sm"
                    : "bg-[#F6EFE7] text-[#2C3B32] hover:bg-[#eae0d2]"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          <AnimatePresence>
            {filteredThemes.map((item) => (
              <motion.article
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm border border-[#eae3d5]"
                onClick={onOpenBooking}
              >
                <div className="relative h-60 overflow-hidden sm:h-52">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#1A2421] backdrop-blur-xs">
                    {item.badge}
                  </span>
                </div>

                <div className="p-4 text-center">
                  <h3 className="font-serif text-sm font-bold text-[#1A2421]">{item.name}</h3>
                  <p className="mt-1 text-[11px] text-[#A8845B] font-medium">{item.tags}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

/* ----------------------------- Depoimentos ----------------------------- */

const Testimonials = ({ onOpenBooking }: { onOpenBooking: () => void }) => {
  const [index, setIndex] = useState(0);
  const current = TESTIMONIALS[index];

  const go = (delta: number) => {
    setIndex((prev) => (prev + delta + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="depoimentos" className="relative bg-[#F6EFE7] px-6 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-4"
        >
          <Eyebrow>HISTÓRIAS DE SUCESSO</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#1A2421] sm:text-4xl">
            Histórias Reais,
            <br />
            Memórias Eternas
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-[#6b716c] sm:text-sm">
            O sorriso dos nossos clientes e anfitriões é o maior testemunho do nosso compromisso com a perfeição.
          </p>
          <div className="mt-6">
            <Button variant="dark" onClick={onOpenBooking}>
              Fazer Parte Dessas Histórias <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </motion.div>

        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="relative flex flex-col items-center gap-6 rounded-3xl bg-white/80 p-8 shadow-sm border border-[#eae3d5] sm:flex-row"
            >
              <img
                src={current.photo}
                alt={current.name}
                className="h-28 w-28 shrink-0 rounded-full object-cover ring-4 ring-[#FAF8F5] shadow-md"
              />

              <div className="flex-1">
                <Quote className="h-8 w-8 text-[#A8845B]" />
                <blockquote className="mt-3 text-sm italic leading-relaxed text-[#2C3B32] sm:text-base">
                  "{current.quote}"
                </blockquote>

                <figcaption className="mt-5 flex items-center justify-between border-t border-[#eae3d5] pt-4">
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#1A2421]">{current.name}</h4>
                    <p className="text-xs text-[#A8845B]">{current.type}</p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => go(-1)}
                      aria-label="Depoimento Anterior"
                      className="rounded-full border border-[#d9cfc2] bg-white p-2 text-[#2C3B32] transition-colors hover:bg-[#1A2421] hover:text-white"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => go(1)}
                      aria-label="Próximo Depoimento"
                      className="rounded-full border border-[#d9cfc2] bg-white p-2 text-[#2C3B32] transition-colors hover:bg-[#1A2421] hover:text-white"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </figcaption>
              </div>
            </motion.figure>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

/* ----------------------------- Banner Final CTA ----------------------------- */

const BottomCTA = ({ onOpenBooking }: { onOpenBooking: () => void }) => (
  <section className="relative overflow-hidden bg-[#1A2421] px-6 py-20 text-white">
    <img
      src={IMAGES.cta}
      alt="Salão iluminado à noite"
      className="absolute inset-0 h-full w-full object-cover opacity-20"
    />
    <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D9B98B]">
          AGENDE SUA DEGUSTAÇÃO & VISITA
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          O Seu Evento dos Sonhos Começa Aqui
        </h2>
        <p className="mt-3 text-sm text-white/80">
          Datas exclusivas para 2026 e 2027 já estão abertas. Reserve um horário com nossa equipe de concierge.
        </p>
        <div className="mt-8">
          <Button variant="gold" onClick={onOpenBooking}>
            Solicitar Orçamento Exclusivo <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-right"
      >
        <p
          style={{ fontFamily: "Alex Brush, cursive" }}
          className="text-4xl text-[#D9B98B] sm:text-5xl"
        >
          Criar memórias é a nossa maior arte... ♡
        </p>
      </motion.div>
    </div>
  </section>
);

/* ----------------------------- Rodapé ----------------------------- */

const Footer = ({ onOpenBooking }: { onOpenBooking: () => void }) => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer id="contato" className="bg-[#FAF8F5] px-6 pt-16 text-[#2C3B32]">
      <div className="mx-auto grid max-w-7xl gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 text-xs leading-relaxed text-[#6b716c]">
            O salão de festas e espaço de eventos de alto padrão que transforma casamentos, 15 anos, formaturas e celebrações corporativas em obras de arte.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-sm font-bold text-[#1A2421]">Navegação Rápida</h4>
          <ul className="mt-4 space-y-2.5 text-xs text-[#6b716c]">
            {QUICK_LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#inicio"
                  onClick={(e) => {
                    if (link === "Agendar Visita") {
                      e.preventDefault();
                      onOpenBooking();
                    }
                  }}
                  className="transition-colors hover:text-[#A8845B]"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-sm font-bold text-[#1A2421]">Entre em Contato</h4>
          <ul className="mt-4 space-y-3 text-xs text-[#6b716c]">
            {CONTACTS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2.5">
                <Icon className="h-4 w-4 text-[#A8845B]" /> {text}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex gap-3">
            {SOCIALS.map(({ icon: Icon, label }) => (
              <motion.a
                key={label}
                href="#"
                whileHover={{ scale: 1.1 }}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1A2421] text-white transition-colors hover:bg-[#A8845B]"
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-serif text-sm font-bold text-[#1A2421]">Fique Inspirado</h4>
          <p className="mt-4 text-xs leading-relaxed text-[#6b716c]">
            Assine nossa newsletter para receber tendências de decoração, cardápios e novidades exclusivas.
          </p>
          <form onSubmit={handleNewsletter} className="mt-4">
            <div className="flex overflow-hidden rounded-full border border-[#d9cfc2] bg-white shadow-xs">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="min-w-0 flex-1 px-4 py-2.5 text-xs outline-none"
              />
              <button
                type="submit"
                className="bg-[#1A2421] px-4 text-white transition-colors hover:bg-[#A8845B]"
                aria-label="Inscrever-se"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            {subscribed && (
              <p className="mt-2 text-[11px] font-semibold text-emerald-700">
                Obrigado por se inscrever!
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-[#eadfce] py-6 text-xs text-[#6b716c] sm:flex-row">
        <p>© 2026 ETERNA Espaço & Eventos. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#A8845B]">
            Política de Privacidade
          </a>
          <a href="#" className="hover:text-[#A8845B]">
            Termos de Uso
          </a>
        </div>
      </div>
    </footer>
  );
};

/* ----------------------------- App Principal ----------------------------- */

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] font-sans text-[#2C3B32] antialiased selection:bg-[#D9B98B] selection:text-[#1A2421]">
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
      <Navbar onOpenBooking={() => setBookingOpen(true)} />
      <main>
        <Hero onOpenBooking={() => setBookingOpen(true)} />
        <Services />
        <About onOpenBooking={() => setBookingOpen(true)} />
        <Themes onOpenBooking={() => setBookingOpen(true)} />
        <Testimonials onOpenBooking={() => setBookingOpen(true)} />
      </main>
      <BottomCTA onOpenBooking={() => setBookingOpen(true)} />
      <Footer onOpenBooking={() => setBookingOpen(true)} />
    </div>
  );
}
