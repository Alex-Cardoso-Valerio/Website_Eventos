import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Quote,
  ChevronLeft,
  ChevronRight,
  Volume2,
  Snowflake,
  Zap,
  ChefHat,
  Sparkles,
  Users,
  CheckCircle2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ============================================================================
 * DADOS
 * ========================================================================== */

const photo = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}`;

const IMAGES = {
  hero: photo("photo-1519167758481-83f550bb49b3", 1600),
  heroDetail: photo("photo-1492684223066-81342ee5ff30", 800),
  salon: photo("photo-1511795409834-ef04bbd61622", 1600),
  bar: photo("photo-1514362545857-3bc16c4c7d1b", 900),
  kitchen: photo("photo-1555244162-803834f70033", 900),
  table: photo("photo-1464366400600-7168b8af9bc3", 900),
};

const NAV_LINKS = [
  { label: "O Espaço", href: "#espaco" },
  { label: "Eventos", href: "#eventos" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Visita", href: "#visita" },
];

interface EventType {
  id: string;
  title: string;
  caption: string;
  description: string;
  image: string;
  span: string; // controla a assimetria do grid
  aspect: string;
}

const EVENT_TYPES: EventType[] = [
  {
    id: "casamentos",
    title: "Casamentos",
    caption: "Do jantar à pista, no mesmo salão",
    description:
      "Cerimônia, jantar e festa acontecem sem deslocamento de convidados. A planta se adapta a mesas imperiais ou redondas, e a iluminação muda de tom conforme a noite avança.",
    image: photo("photo-1519225421980-715cb0215aed", 1000),
    span: "md:col-span-7 md:row-span-2",
    aspect: "aspect-[4/5] md:aspect-auto md:h-full",
  },
  {
    id: "corporativos",
    title: "Eventos Corporativos",
    caption: "Convenções, premiações e jantares de gala",
    description:
      "Palco, painel de LED e áudio calibrado para apresentações. Cozinha própria para coffee break, almoço executivo ou jantar de encerramento.",
    image: photo("photo-1511795409834-ef04bbd61622", 900),
    span: "md:col-span-5",
    aspect: "aspect-[16/11]",
  },
  {
    id: "15-anos",
    title: "Festas de 15 Anos",
    caption: "Entrada, valsa e pista até a madrugada",
    description:
      "Isolamento acústico para a festa seguir até as 05h sem pedir licença à vizinhança. Pista ampla e camarim para a troca de vestido.",
    image: photo("photo-1516450360452-9312f5e86fc7", 900),
    span: "md:col-span-5",
    aspect: "aspect-[16/11]",
  },
  {
    id: "formaturas",
    title: "Formaturas",
    caption: "Turmas de 100 a 900 convidados",
    description:
      "Mezanino para famílias, pista aberta para a turma e bar com atendimento em vários pontos para evitar fila.",
    image: photo("photo-1533105079780-92b9be482077", 900),
    span: "md:col-span-6",
    aspect: "aspect-[16/10]",
  },
  {
    id: "bodas",
    title: "Bodas",
    caption: "Prata, ouro, rubi. Em família",
    description:
      "Formato mais recolhido, com a metade do salão reservada por cortinas e menu servido à mesa. Boa opção para quem quer receber poucos e bem.",
    image: photo("photo-1469371670807-013ccf25f16a", 900),
    span: "md:col-span-6",
    aspect: "aspect-[16/10]",
  },
];

interface Spec {
  icon: LucideIcon;
  value: string;
  label: string;
  note: string;
}

const STRUCTURE: Spec[] = [
  {
    icon: Users,
    value: "900",
    label: "convidados em pé",
    note: "600 sentados, com pista e palco montados.",
  },
  {
    icon: Volume2,
    value: "05h",
    label: "limite de som",
    note: "Tratamento acústico completo no salão principal.",
  },
  {
    icon: Snowflake,
    value: "7 m",
    label: "de pé-direito",
    note: "Climatização central com zonas independentes.",
  },
  {
    icon: Zap,
    value: "500 kVA",
    label: "gerador próprio",
    note: "Entra em segundos. Luz e som não oscilam.",
  },
];

const AMENITIES = [
  "Mezanino com vista para a pista",
  "Camarim climatizado para anfitriões",
  "Cozinha industrial própria",
  "Painel de LED e palco modular",
  "Bar central e bares de apoio",
  "Equipe de recepção e limpeza",
];

interface Testimonial {
  name: string;
  role: string;
  event: string;
  quote: string;
  photo: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Beatriz Camargo",
    role: "Noiva",
    event: "Casamento, 380 convidados",
    quote:
      "Eu tinha medo de a festa ficar fria num salão grande. Aconteceu o contrário: a equipe dividiu o espaço com cortinas e luz baixa, e na hora da pista abriram tudo. Minha avó ficou até o fim.",
    photo: photo("photo-1537633552985-df8429e8048b", 400),
  },
  {
    name: "Ricardo Almeida",
    role: "Diretor Comercial",
    event: "Convenção anual, 220 participantes",
    quote:
      "Fechamos palco, áudio e jantar com um único contato. O cronograma foi cumprido no minuto, e o painel de LED funcionou sem ajuste de última hora. Já reservamos a data do ano que vem.",
    photo: photo("photo-1507003211169-0a1dd7228f2d", 400),
  },
  {
    name: "Helena Duarte",
    role: "Mãe da debutante",
    event: "Festa de 15 anos, 260 convidados",
    quote:
      "Foi a primeira vez que vi uma festa de 15 anos acabar às cinco da manhã sem ninguém reclamar do som. A pista cheia e a cozinha servindo até o fim.",
    photo: photo("photo-1522673607200-164d1b6ce486", 400),
  },
];

/* ============================================================================
 * PRIMITIVOS
 * ========================================================================== */

const EASE = [0.22, 1, 0.36, 1] as const;

const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay, ease: EASE }}
    className={className}
  >
    {children}
  </motion.div>
);

const Eyebrow = ({ children, light = false }: { children: ReactNode; light?: boolean }) => (
  <p
    className={`font-inter text-[11px] font-medium uppercase tracking-[0.3em] ${
      light ? "text-[#C9B28A]" : "text-[#8A6F43]"
    }`}
  >
    {children}
  </p>
);

const PrimaryButton = ({
  children,
  href,
  onClick,
  tone = "dark",
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  tone?: "dark" | "light";
}) => {
  const base =
    "group inline-flex items-center gap-3 rounded-full px-7 py-4 font-inter text-[13px] font-medium tracking-wide transition-all duration-300 hover:-translate-y-1";
  const tones = {
    dark: "bg-[#233329] text-[#FDFBF7] hover:shadow-[0_14px_40px_rgba(35,51,41,0.28)]",
    light: "bg-[#FDFBF7] text-[#233329] hover:shadow-[0_14px_40px_rgba(0,0,0,0.25)]",
  }[tone];
  const inner = (
    <>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );
  return href ? (
    <a href={href} className={`${base} ${tones}`}>
      {inner}
    </a>
  ) : (
    <button onClick={onClick} className={`${base} ${tones}`}>
      {inner}
    </button>
  );
};

const GhostLink = ({ children, href }: { children: ReactNode; href: string }) => (
  <a
    href={href}
    className="group inline-flex items-center gap-2 border-b border-[#1A1A1A]/25 pb-1 font-inter text-[13px] text-[#1A1A1A] transition-colors duration-300 hover:border-[#233329] hover:text-[#233329]"
  >
    {children}
    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  </a>
);

const Logo = ({ light = false }: { light?: boolean }) => (
  <a href="#topo" className="flex flex-col leading-none">
    <span
      className={`font-cormorant text-[28px] font-medium tracking-[0.28em] ${
        light ? "text-[#FDFBF7]" : "text-[#1A1A1A]"
      }`}
    >
      ETERNA
    </span>
    <span
      className={`mt-1 font-inter text-[8.5px] uppercase tracking-[0.42em] ${
        light ? "text-[#C9B28A]" : "text-[#8A6F43]"
      }`}
    >
      Salão de eventos
    </span>
  </a>
);

/* ============================================================================
 * SEÇÕES
 * ========================================================================== */

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-black/5 bg-[#FDFBF7]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-5 lg:px-10">
        <Logo />

        <ul className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative font-inter text-[13px] text-[#1A1A1A]/70 transition-colors duration-300 hover:text-[#1A1A1A] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#233329] after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <PrimaryButton href="#visita">Agendar visita</PrimaryButton>
        </div>

        <button
          className="rounded-full border border-black/10 p-2.5 text-[#1A1A1A] lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden border-t border-black/5 bg-[#FDFBF7] lg:hidden"
          >
            <ul className="space-y-1 px-6 py-6">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-cormorant text-2xl text-[#1A1A1A]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <PrimaryButton href="#visita">Agendar visita</PrimaryButton>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => (
  <section id="topo" className="relative overflow-hidden bg-[#FDFBF7] pb-24 pt-36 lg:pb-32 lg:pt-44">
    <div className="mx-auto grid max-w-[1320px] items-end gap-16 px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
      {/* Texto, alinhado à esquerda e rebaixado em relação à imagem */}
      <div className="lg:col-span-6 lg:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <Eyebrow>Salão de eventos · São Paulo</Eyebrow>
          <h1 className="mt-8 font-playfair text-[44px] font-normal leading-[1.04] tracking-[-0.02em] text-[#1A1A1A] sm:text-6xl lg:text-[76px]">
            Um salão grande
            <br />
            o bastante para a festa,{" "}
            <em className="font-cormorant text-[1.08em] font-normal italic text-[#233329]">
              íntimo o bastante
            </em>{" "}
            para a conversa.
          </h1>
          <p className="mt-10 max-w-md font-inter text-[15px] leading-loose text-[#1A1A1A]/65">
            Casamentos, convenções, formaturas, quinze anos e bodas passam pelo mesmo pé-direito de sete
            metros. O que muda é a planta, a luz e o ritmo da noite, e isso é trabalho da nossa equipe.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6">
            <PrimaryButton href="#visita">Agendar uma visita</PrimaryButton>
            <GhostLink href="#espaco">Conhecer o salão</GhostLink>
          </div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 grid max-w-md grid-cols-3 gap-6 border-t border-black/10 pt-8"
        >
          {[
            ["12", "anos de casa"],
            ["650+", "eventos realizados"],
            ["900", "lugares em pé"],
          ].map(([v, l]) => (
            <div key={l}>
              <dt className="font-cormorant text-4xl text-[#1A1A1A]">{v}</dt>
              <dd className="mt-1 font-inter text-[11px] leading-snug text-[#1A1A1A]/55">{l}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* Colagem assimétrica */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.15, ease: EASE }}
        className="relative lg:col-span-6"
      >
        <div className="relative ml-auto w-[88%] overflow-hidden rounded-[2px] shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
          <img
            src={IMAGES.hero}
            alt="Salão principal com lustres de cristal e mesas postas para jantar"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>

        <div className="absolute -left-2 bottom-10 w-[46%] overflow-hidden rounded-[2px] border-[6px] border-[#FDFBF7] shadow-[0_20px_60px_rgba(0,0,0,0.14)] sm:-left-6">
          <img
            src={IMAGES.heroDetail}
            alt="Brinde durante a recepção"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>

        <p className="absolute -top-6 right-0 hidden origin-bottom-right rotate-90 font-inter text-[10px] uppercase tracking-[0.35em] text-[#1A1A1A]/40 xl:block">
          Av. Europa, 1200 — Jardins
        </p>
      </motion.div>
    </div>
  </section>
);

const Space = () => (
  <section id="espaco" className="bg-[#F6F1E8] py-24 lg:py-36">
    <div className="mx-auto grid max-w-[1320px] gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
      <Reveal className="lg:col-span-4">
        <Eyebrow>O espaço</Eyebrow>
        <h2 className="mt-6 font-playfair text-4xl leading-[1.1] tracking-[-0.015em] text-[#1A1A1A] md:text-5xl">
          Um só endereço para quase todo tipo de encontro.
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
        <div className="space-y-7 font-inter text-[15px] leading-loose text-[#1A1A1A]/70">
          <p className="max-w-xl font-cormorant text-[26px] leading-snug text-[#1A1A1A]">
            O Eterna nasceu como um salão de baile e continua sendo um. Só que hoje o baile pode ter palco,
            telão, jantar de três tempos ou apenas uma mesa comprida para quarenta pessoas.
          </p>
          <p className="max-w-xl">
            Trabalhamos com um número de datas limitado por mês, justamente para que cada evento tenha tempo
            de montagem decente e uma equipe que não está correndo para a próxima festa. Você visita, vê o
            salão montado em diferentes formatos e só então decide.
          </p>
        </div>

        <figure className="mt-16 overflow-hidden rounded-[2px] shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
          <img
            src={IMAGES.salon}
            alt="Interior do salão com iluminação ambiente"
            className="aspect-[16/9] w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.03]"
          />
        </figure>
      </Reveal>
    </div>
  </section>
);

const EventCard = ({ event, index }: { event: EventType; index: number }) => (
  <Reveal delay={index * 0.06} className={event.span}>
    <article className="group relative flex h-full cursor-pointer flex-col">
      <div className={`relative overflow-hidden rounded-[2px] ${event.aspect}`}>
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
        <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#FDFBF7] text-[#233329] opacity-0 shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-all duration-500 group-hover:-translate-y-1 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
        <span className="absolute bottom-5 left-5 font-inter text-[11px] uppercase tracking-[0.25em] text-[#FDFBF7]/90">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="mt-6 flex items-start justify-between gap-6">
        <div className="max-w-md">
          <h3 className="font-playfair text-2xl tracking-[-0.01em] text-[#1A1A1A] md:text-[28px]">
            {event.title}
          </h3>
          <p className="mt-1 font-cormorant text-lg italic text-[#8A6F43]">{event.caption}</p>
          <p className="mt-4 font-inter text-sm leading-relaxed text-[#1A1A1A]/60">{event.description}</p>
        </div>
      </div>
    </article>
  </Reveal>
);

const Events = () => (
  <section id="eventos" className="bg-[#FDFBF7] py-24 lg:py-36">
    <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <Reveal>
          <Eyebrow>Tipos de evento</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-playfair text-4xl leading-[1.08] tracking-[-0.015em] text-[#1A1A1A] md:text-6xl">
            Cada ocasião pede
            <br />
            uma planta diferente.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-xs font-inter text-sm leading-loose text-[#1A1A1A]/55">
            O salão é o mesmo. A montagem, a iluminação e o serviço mudam conforme o evento.
          </p>
        </Reveal>
      </div>

      <div className="mt-20 grid gap-x-12 gap-y-20 md:grid-cols-12 md:gap-x-10 md:gap-y-24">
        {EVENT_TYPES.map((e, i) => (
          <EventCard key={e.id} event={e} index={i} />
        ))}
      </div>
    </div>
  </section>
);

const Structure = () => (
  <section id="estrutura" className="relative overflow-hidden bg-[#233329] py-24 text-[#FDFBF7] lg:py-36">
    <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <Eyebrow light>Estrutura</Eyebrow>
          <h2 className="mt-6 font-playfair text-4xl leading-[1.08] tracking-[-0.015em] md:text-5xl">
            Os números que importam na hora de fechar a data.
          </h2>
          <p className="mt-8 max-w-md font-inter text-[15px] leading-loose text-[#FDFBF7]/60">
            Capacidade, som, clima e energia são as quatro perguntas que mais recebemos. Respondemos todas
            na primeira visita, com o salão à sua frente.
          </p>

          <ul className="mt-12 space-y-4 border-t border-white/10 pt-8">
            {AMENITIES.map((a) => (
              <li key={a} className="flex items-center gap-3 font-inter text-sm text-[#FDFBF7]/80">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#C9B28A]" />
                {a}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-[2px] border border-white/10 bg-white/10 sm:grid-cols-2 lg:col-span-7">
          {STRUCTURE.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.label} delay={i * 0.08} className="bg-[#233329]">
                <div className="group flex h-full flex-col justify-between p-10 transition-colors duration-500 hover:bg-[#2A3D32] lg:p-12">
                  <Icon className="h-5 w-5 text-[#C9B28A]" strokeWidth={1.3} />
                  <div className="mt-20">
                    <p className="font-cormorant text-6xl leading-none tracking-tight lg:text-7xl">{s.value}</p>
                    <p className="mt-3 font-inter text-[11px] uppercase tracking-[0.25em] text-[#C9B28A]">
                      {s.label}
                    </p>
                    <p className="mt-4 max-w-[16rem] font-inter text-sm leading-relaxed text-[#FDFBF7]/55">
                      {s.note}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

const Service = () => (
  <section className="bg-[#FDFBF7] py-24 lg:py-36">
    <div className="mx-auto grid max-w-[1320px] items-center gap-16 px-6 lg:grid-cols-12 lg:gap-24 lg:px-10">
      <div className="relative lg:col-span-6">
        <Reveal>
          <img
            src={IMAGES.table}
            alt="Mesa de jantar posta com velas e arranjos"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-[2px] object-cover shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
          />
        </Reveal>
        <Reveal delay={0.15} className="absolute -bottom-10 right-0 w-[52%] sm:-right-8">
          <img
            src={IMAGES.bar}
            alt="Bar com bartenders preparando drinks"
            loading="lazy"
            className="aspect-square w-full rounded-[2px] border-[6px] border-[#FDFBF7] object-cover shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
          />
        </Reveal>
      </div>

      <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
        <Eyebrow>Atendimento</Eyebrow>
        <h2 className="mt-6 font-playfair text-4xl leading-[1.1] tracking-[-0.015em] text-[#1A1A1A] md:text-5xl">
          Uma pessoa responde por tudo, do contrato ao último convidado.
        </h2>
        <div className="mt-8 space-y-6 font-inter text-[15px] leading-loose text-[#1A1A1A]/65">
          <p>
            Cada evento tem um coordenador fixo. É ele quem conversa com você nas reuniões, recebe os
            fornecedores na montagem e acompanha o salão até o encerramento.
          </p>
          <p>
            A cozinha é nossa, o bar também. Isso evita o vai e vem de equipes diferentes e deixa o
            cardápio e o horário de serviço sob controle de quem está no local.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-black/10 pt-8 font-inter text-sm text-[#1A1A1A]/70">
          <span className="flex items-center gap-2">
            <ChefHat className="h-4 w-4 text-[#8A6F43]" strokeWidth={1.5} /> Cozinha própria
          </span>
          <span className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#8A6F43]" strokeWidth={1.5} /> Bar autoral
          </span>
        </div>
      </Reveal>
    </div>
  </section>
);

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];
  const go = (d: number) => setIndex((i) => (i + d + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="depoimentos" className="bg-[#F6F1E8] py-24 lg:py-36">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <Reveal>
          <Eyebrow>Depoimentos</Eyebrow>
        </Reveal>

        <div className="mt-12 grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <Quote className="h-9 w-9 text-[#8A6F43]/50" strokeWidth={1.2} />
                <blockquote className="mt-8 font-cormorant text-3xl leading-[1.3] tracking-[-0.005em] text-[#1A1A1A] md:text-[44px]">
                  {t.quote}
                </blockquote>

                <div className="mt-12 flex items-center gap-5">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="h-16 w-16 rounded-full object-cover ring-1 ring-black/10"
                  />
                  <div>
                    <p className="font-playfair text-lg text-[#1A1A1A]">{t.name}</p>
                    <p className="font-inter text-[13px] text-[#1A1A1A]/55">
                      {t.role} · {t.event}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-end justify-between gap-10 lg:col-span-3 lg:col-start-10 lg:flex-col lg:items-stretch lg:justify-end">
            <ul className="space-y-3">
              {TESTIMONIALS.map((item, i) => (
                <li key={item.name}>
                  <button
                    onClick={() => setIndex(i)}
                    className={`flex w-full items-center gap-4 text-left font-inter text-[13px] transition-all duration-300 ${
                      i === index ? "text-[#1A1A1A]" : "text-[#1A1A1A]/35 hover:text-[#1A1A1A]/70"
                    }`}
                  >
                    <span
                      className={`h-px transition-all duration-500 ${
                        i === index ? "w-10 bg-[#233329]" : "w-5 bg-current"
                      }`}
                    />
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex gap-3">
              <button
                onClick={() => go(-1)}
                aria-label="Depoimento anterior"
                className="rounded-full border border-black/10 p-3.5 text-[#1A1A1A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#233329] hover:text-[#FDFBF7]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Próximo depoimento"
                className="rounded-full border border-black/10 p-3.5 text-[#1A1A1A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#233329] hover:text-[#FDFBF7]"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Visit = () => {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const field =
    "w-full border-b border-white/15 bg-transparent py-3.5 font-inter text-sm text-[#FDFBF7] placeholder-[#FDFBF7]/35 outline-none transition-colors duration-300 focus:border-[#C9B28A]";

  return (
    <section id="visita" className="relative overflow-hidden bg-[#1B2820] py-24 text-[#FDFBF7] lg:py-36">
      <img
        src={IMAGES.hero}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.07]"
      />
      <div className="relative mx-auto grid max-w-[1320px] gap-16 px-6 lg:grid-cols-12 lg:gap-24 lg:px-10">
        <Reveal className="lg:col-span-5">
          <Eyebrow light>Visita</Eyebrow>
          <h2 className="mt-6 font-playfair text-4xl leading-[1.08] tracking-[-0.015em] md:text-6xl">
            Venha ver o salão antes de decidir.
          </h2>
          <p className="mt-8 max-w-md font-inter text-[15px] leading-loose text-[#FDFBF7]/60">
            As visitas são feitas com hora marcada, para que você veja o espaço com calma e converse com o
            coordenador que acompanharia o seu evento.
          </p>

          <ul className="mt-12 space-y-5 font-inter text-sm text-[#FDFBF7]/80">
            <li className="flex items-center gap-4">
              <Phone className="h-4 w-4 text-[#C9B28A]" /> +55 (11) 98765-4321
            </li>
            <li className="flex items-center gap-4">
              <Mail className="h-4 w-4 text-[#C9B28A]" /> contato@eternaeventos.com.br
            </li>
            <li className="flex items-center gap-4">
              <MapPin className="h-4 w-4 text-[#C9B28A]" /> Av. Europa, 1200 — Jardins, São Paulo
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <div className="rounded-[2px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm md:p-12">
            {sent ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-[#C9B28A]" strokeWidth={1.2} />
                <h3 className="mt-6 font-playfair text-2xl">Recebemos o seu pedido.</h3>
                <p className="mt-3 font-inter text-sm leading-relaxed text-[#FDFBF7]/60">
                  Nossa equipe responde em até um dia útil para combinar o melhor horário.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-7">
                <div className="grid gap-7 sm:grid-cols-2">
                  <input required className={field} placeholder="Seu nome" aria-label="Seu nome" />
                  <input
                    required
                    type="tel"
                    className={field}
                    placeholder="WhatsApp"
                    aria-label="WhatsApp"
                  />
                </div>
                <input
                  required
                  type="email"
                  className={field}
                  placeholder="E-mail"
                  aria-label="E-mail"
                />
                <div className="grid gap-7 sm:grid-cols-2">
                  <select
                    defaultValue=""
                    required
                    aria-label="Tipo de evento"
                    className={`${field} appearance-none`}
                  >
                    <option value="" disabled className="bg-[#1B2820]">
                      Tipo de evento
                    </option>
                    {EVENT_TYPES.map((e) => (
                      <option key={e.id} value={e.id} className="bg-[#1B2820]">
                        {e.title}
                      </option>
                    ))}
                  </select>
                  <input
                    className={field}
                    placeholder="Convidados (estimativa)"
                    aria-label="Número de convidados"
                  />
                </div>
                <textarea
                  rows={3}
                  className={`${field} resize-none`}
                  placeholder="Data pretendida e qualquer detalhe que ajude"
                  aria-label="Mensagem"
                />
                <div className="pt-2">
                  <PrimaryButton tone="light" onClick={() => undefined}>
                    Solicitar visita
                  </PrimaryButton>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#FDFBF7] pb-10 pt-20">
    <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
      <div className="grid gap-14 border-b border-black/10 pb-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-6 max-w-xs font-inter text-sm leading-loose text-[#1A1A1A]/55">
            Salão de eventos nos Jardins. Casamentos, convenções, formaturas, quinze anos e bodas.
          </p>
        </div>

        <nav className="md:col-span-3 md:col-start-7" aria-label="Rodapé">
          <p className="font-inter text-[11px] uppercase tracking-[0.3em] text-[#8A6F43]">Navegação</p>
          <ul className="mt-6 space-y-3 font-inter text-sm text-[#1A1A1A]/70">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors duration-300 hover:text-[#233329]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="font-inter text-[11px] uppercase tracking-[0.3em] text-[#8A6F43]">Contato</p>
          <ul className="mt-6 space-y-3 font-inter text-sm text-[#1A1A1A]/70">
            <li>+55 (11) 98765-4321</li>
            <li>contato@eternaeventos.com.br</li>
            <li>Av. Europa, 1200 — Jardins</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-3 pt-8 font-inter text-xs text-[#1A1A1A]/45 sm:flex-row">
        <p>© 2026 Eterna Salão de Eventos. Todos os direitos reservados.</p>
        <p>Política de privacidade · Termos de uso</p>
      </div>
    </div>
  </footer>
);

/* ============================================================================
 * PÁGINA
 * ========================================================================== */

export default function PremiumLanding() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-inter text-[#1A1A1A] antialiased">
      <Navbar />
      <main>
        <Hero />
        <Space />
        <Events />
        <Structure />
        <Service />
        <Testimonials />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}
