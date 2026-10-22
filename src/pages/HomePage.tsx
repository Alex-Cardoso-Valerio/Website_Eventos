import { useState } from "react";
import { Link } from "react-router-dom";
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
  ChevronLeft,
  ChevronRight,
  Quote,
  Building2,
  UtensilsCrossed,
  GlassWater,
  PartyPopper,
  GraduationCap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button, Eyebrow } from "../components/SharedUI";
import { STATS, img } from "../data/content";

interface HomePageProps {
  onOpenBooking: () => void;
}

export const HomePage = ({ onOpenBooking }: HomePageProps) => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const testimonials = [
    {
      name: "Mariana & Leonardo",
      type: "Casamento no Campo & Salão",
      quote:
        "A Eterna transformou o nosso casamento em um verdadeiro conto de fadas! A atenção a cada pequeno detalhe, a iluminação e a gastronomia deixaram todos os convidados maravilhados.",
      photo: img("photo-1537633552985-df8429e8048b", 300),
    },
    {
      name: "Camila Vasconcelos",
      type: "Festa de 15 Anos & Debutante",
      quote:
        "A festa de 15 anos da minha filha foi um espetáculo! A cenografia moderna com tubos de LED, a pista de dança e a organização impecável fizeram da noite a realização de um sonho.",
      photo: img("photo-1534528741775-53994a69daeb", 300),
    },
    {
      name: "Comissão Medicina USP",
      type: "Baile de Gala & Formatura",
      quote:
        "Para 800 pessoas, a logística foi perfeita do primeiro minuto até o último brinde. A acústica, o serviço sincronizado e a elegância do salão superaram qualquer expectativa.",
      photo: img("photo-1522673607200-164d1b6ce486", 300),
    },
  ];

  const currentT = testimonials[testimonialIdx];

  const goTestimonial = (delta: number) => {
    setTestimonialIdx(
      (prev) => (prev + delta + testimonials.length) % testimonials.length
    );
  };

  const servicesPreview = [
    {
      icon: Sparkles,
      title: "Assessoria & Cerimonial",
      subtitle: "Planejamento 360° do início ao fim com cronograma reverso e R.S.V.P.",
    },
    {
      icon: Palette,
      title: "Cenografia & Decoração",
      subtitle: "Projetos 3D exclusivos, arranjos florais nobres e iluminação cênica.",
    },
    {
      icon: GlassWater,
      title: "Buffet & Alta Gastronomia",
      subtitle: "Menus autorais empratados, ilhas gastronômicas ativas e mixologia.",
    },
    {
      icon: Building2,
      title: "Salão Nobre Climatizado",
      subtitle: "Pé-direito de 7m, lustres de cristal e suíte VIP dos anfitriões.",
    },
    {
      icon: CalendarCheck,
      title: "Coordenação do Grande Dia",
      subtitle: "Equipe sênior cuidando de cada detalhe para que você viva cada momento.",
    },
  ];

  const showcaseAreas = [
    {
      title: "O Salão de Festas",
      tag: "Tour & Fotos dos Ambientes",
      desc: "Salão principal para até 1.000 pessoas, jardins com espelho d'água, mezanino e camarim.",
      image: img("photo-1519167758481-83f550bb49b3", 900),
      link: "/salao",
    },
    {
      title: "Decorações & Cenografia",
      tag: "Estilos & Projetos 3D",
      desc: "Do clássico imperial ao rústico botânico e moderno com cenografia de LED.",
      image: img("photo-1519225421980-715cb0215aed", 900),
      link: "/decoracao",
    },
    {
      title: "Buffet & Bar de Coquetéis",
      tag: "Experiência Gastronômica",
      desc: "Ilhas gastronômicas ao vivo, jantares à francesa, alta confeitaria e carta de drinks.",
      image: img("photo-1555244162-803834f70033", 900),
      link: "/buffet",
    },
  ];

  return (
    <div className="bg-[#FAF8F5]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#F6EFE7] pt-8 pb-16 lg:py-20 border-b border-[#eae3d5]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
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
              Cuidamos de tudo: salão climatizado com pé direito duplo, cenografia floral exuberante, alta gastronomia autoral e assessoria impecável para casamentos, festas de 15 anos, formaturas e eventos corporativos.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button variant="dark" onClick={onOpenBooking}>
                Planejar Meu Evento <ArrowRight className="h-3.5 w-3.5" />
              </Button>
              <Link to="/salao">
                <Button variant="light">
                  Conhecer o Salão{" "}
                  <Play className="h-3.5 w-3.5 rounded-full border border-[#2C3B32] p-0.5" />
                </Button>
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-[#e2d6c5] pt-8 sm:grid-cols-4">
              {STATS.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FAF8F5] shadow-xs text-[#A8845B]">
                    <Icon className="h-5 w-5" strokeWidth={1.3} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-[#1A2421]">{value}</h4>
                    <p className="text-[11px] text-[#6b716c]">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2 lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={img("photo-1519167758481-83f550bb49b3", 1200)}
                alt="Salão de festas Eterna decorado com lustres de cristal"
                className="h-[380px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[480px] md:h-[540px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-5 backdrop-blur-md shadow-lg">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-[#A8845B]" />
                  <p className="font-serif text-sm italic text-[#1A2421]">
                    "Sua celebração merece algo verdadeiramente extraordinário."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cards de Navegação Rápida para as Novas Áreas */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <Eyebrow>EXPERIÊNCIA COMPLETA</Eyebrow>
          <h2 className="mt-2 font-serif text-3xl font-bold text-[#1A2421] sm:text-4xl">
            Explore Todos os Detalhes do Espaço
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-xs text-[#6b716c] sm:text-sm">
            Navegue pelas seções dedicadas para conhecer a estrutura do salão, nossos projetos de cenografia e os menus de degustação do buffet.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {showcaseAreas.map((area) => (
            <motion.div
              key={area.title}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl bg-white shadow-xs border border-[#eae3d5] transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={area.image}
                  alt={area.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#1A2421]">
                  {area.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-[#1A2421]">{area.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#5b625d]">{area.desc}</p>
                <div className="mt-5">
                  <Link
                    to={area.link}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#A8845B] transition-transform hover:translate-x-1"
                  >
                    Ver Página Completa <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Serviços em Destaque */}
      <section className="bg-[#FAF8F5] px-6 py-20 border-t border-[#eae3d5]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>SERVIÇOS INTEGRADOS</Eyebrow>
              <h2 className="mt-2 font-serif text-3xl font-bold text-[#1A2421] sm:text-4xl">
                O Que Fazemos Por Você
              </h2>
              <p className="mt-2 text-xs text-[#6b716c]">
                Da primeira ideia ao último brinde, coordenamos cada detalhe com maestria.
              </p>
            </div>
            <Link to="/servicos">
              <Button variant="light">
                Ver Todos os Serviços <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {servicesPreview.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.article
                  key={s.title}
                  whileHover={{ y: -6 }}
                  className="group flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-xs border border-[#eae3d5] transition-all"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F6EFE7] text-[#A8845B] transition-colors group-hover:bg-[#1A2421] group-hover:text-[#D9B98B]">
                    <Icon className="h-6 w-6" strokeWidth={1.3} />
                  </div>
                  <h3 className="mt-4 font-serif text-sm font-bold text-[#1A2421]">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#6b716c]">{s.subtitle}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção Sobre o Salão & Diferenciais */}
      <section className="relative overflow-hidden bg-[#F6EFE7] border-y border-[#eae3d5]">
        <div className="mx-auto grid max-w-7xl items-center lg:grid-cols-12">
          <div className="relative lg:col-span-6">
            <img
              src={img("photo-1510076857177-7470076d4098", 1200)}
              alt="Cenário do salão com vista panorâmica"
              className="h-[360px] w-full object-cover lg:h-[580px]"
            />
            <div className="absolute top-6 left-6 rounded-xl bg-white/85 px-4 py-3 backdrop-blur-sm shadow-md">
              <p
                style={{ fontFamily: "Alex Brush, cursive" }}
                className="text-2xl text-[#1A2421]"
              >
                Porque cada detalhe importa... ♡
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center px-6 py-14 lg:col-span-6 lg:px-16">
            <Eyebrow>SOBRE O ESPAÇO ETERNA</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#1A2421] sm:text-4xl">
              Mais Que Um Salão, Os Parceiros da Sua Celebração
            </h2>
            <p className="mt-4 text-xs leading-relaxed text-[#5b625d] sm:text-sm">
              Acreditamos que cada celebração carrega uma alma própria. No Eterna, unimos arquitetura imponente, gastronomia premiada e execução primorosa para dar vida a momentos que refletem a sua essência — seja um casamento intimista, uma festa de 15 anos marcante, um baile de formatura histórico ou um evento corporativo de prestígio.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/salao">
                <Button variant="dark">
                  Ver Fotos do Salão <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
              <Link to="/buffet">
                <Button variant="light">
                  Conhecer o Buffet & Bar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-[#FAF8F5] px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>HISTÓRIAS DE SUCESSO</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#1A2421] sm:text-4xl">
              Histórias Reais,
              <br />
              Memórias Eternas
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-[#6b716c] sm:text-sm">
              O depoimento e o carinho dos nossos anfitriões é o maior testemunho do nosso compromisso com a excelência.
            </p>
            <div className="mt-6">
              <Button variant="dark" onClick={onOpenBooking}>
                Agendar Minha Visita <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.figure
                key={testimonialIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="relative flex flex-col items-center gap-6 rounded-3xl bg-white p-8 shadow-sm border border-[#eae3d5] sm:flex-row"
              >
                <img
                  src={currentT.photo}
                  alt={currentT.name}
                  className="h-28 w-28 shrink-0 rounded-full object-cover ring-4 ring-[#FAF8F5] shadow-md"
                />

                <div className="flex-1">
                  <Quote className="h-8 w-8 text-[#A8845B]" />
                  <blockquote className="mt-3 text-sm italic leading-relaxed text-[#2C3B32] sm:text-base">
                    "{currentT.quote}"
                  </blockquote>

                  <figcaption className="mt-5 flex items-center justify-between border-t border-[#eae3d5] pt-4">
                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#1A2421]">{currentT.name}</h4>
                      <p className="text-xs text-[#A8845B]">{currentT.type}</p>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => goTestimonial(-1)}
                        aria-label="Anterior"
                        className="rounded-full border border-[#d9cfc2] bg-white p-2 text-[#2C3B32] transition-colors hover:bg-[#1A2421] hover:text-white"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => goTestimonial(1)}
                        aria-label="Próximo"
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

      {/* Bottom CTA Faixa Verde Escura */}
      <section className="relative overflow-hidden bg-[#1A2421] px-6 py-20 text-white">
        <img
          src={img("photo-1511795409834-ef04bbd61622", 1400)}
          alt="Salão à noite"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D9B98B]">
              AGENDE SUA DEGUSTAÇÃO & VISITA
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              O Seu Evento dos Sonhos Começa Aqui
            </h2>
            <p className="mt-3 text-sm text-white/80">
              Datas exclusivas para 2026 e 2027 já estão disponíveis. Venha viver uma degustação com nossa equipe.
            </p>
            <div className="mt-8">
              <Button variant="gold" onClick={onOpenBooking}>
                Solicitar Orçamento Exclusivo <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="text-right">
            <p
              style={{ fontFamily: "Alex Brush, cursive" }}
              className="text-4xl text-[#D9B98B] sm:text-5xl"
            >
              Criar memórias é a nossa maior arte... ♡
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
