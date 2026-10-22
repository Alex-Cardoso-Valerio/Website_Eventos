import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Play,
  Heart,
  Sparkles,
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
  Music,
  Wine,
  Flame,
} from "lucide-react";
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
      type: "Casamento Noturno & Baile de Gala",
      quote:
        "A festa foi simplesmente eletrizante! Os lustres acesos, os drinks saindo impecáveis no bar central e a pista cheia com o som potente até as 5 da manhã. Nossos convidados ainda comentam sobre a energia da noite!",
      photo: img("photo-1537633552985-df8429e8048b", 300),
    },
    {
      name: "Camila Vasconcelos",
      type: "Festa de 15 Anos & Debutante",
      quote:
        "A cenografia com os tubos de LED, a entrada triunfal e o lanchinho da madrugada servido na pista foram o auge da noite! Tudo funcionou como um relógio suíço.",
      photo: img("photo-1534528741775-53994a69daeb", 300),
    },
    {
      name: "Comissão Medicina USP",
      type: "Baile de Gala & Formatura",
      quote:
        "Recebemos mais de 800 pessoas com conforto absoluto. O isolamento acústico permitiu que a banda tocasse no volume ideal e o serviço de bar não teve uma única fila.",
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
      subtitle: "Planejamento dinâmico para garantir que a noite transcorra com emoção e energia.",
    },
    {
      icon: Palette,
      title: "Cenografia Noturna",
      subtitle: "Lustres de cristal, castiçais de velas e iluminação arquitetural envolvente.",
    },
    {
      icon: GlassWater,
      title: "Gastronomia & Open Bar",
      subtitle: "Ilhas de risotos na roda de parmesão, finger foods de luxo e mixologia autoral.",
    },
    {
      icon: Music,
      title: "Pista de Dança & Som Club",
      subtitle: "Acústica profissional, painel de LED de alta definição e festa até as 05h.",
    },
    {
      icon: Building2,
      title: "Salão Nobre & Mezanino",
      subtitle: "Pé-direito duplo de 7m, climatização constante e camarim privativo de apoio.",
    },
  ];

  const showcaseAreas = [
    {
      title: "O Salão & Pista de Dança",
      tag: "Estrutura Noturna Imponente",
      desc: "Salão nobre com lustres de cristal, mezanino VIP, bar monumental 360° e pista com som potente.",
      image: img("photo-1519167758481-83f550bb49b3", 900),
      link: "/salao",
    },
    {
      title: "Cenografia & Iluminação Cênica",
      tag: "Velas, Cristais & LED",
      desc: "Cenários de alto impacto com contrastes de luz, arranjos nobres, bistrôs e lounges em veludo.",
      image: img("photo-1516450360452-9312f5e86fc7", 900),
      link: "/decoracao",
    },
    {
      title: "Buffet Festivo & Mixologia",
      tag: "Experiência Sensorial",
      desc: "Estações ativas de risotos, queijos nobres, lanchinhos da madrugada e coquetéis autorais.",
      image: img("photo-1514362545857-3bc16c4c7d1b", 900),
      link: "/buffet",
    },
  ];

  return (
    <div className="bg-[#0B0E0D] text-[#F5EFE6]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0F1412] pt-12 pb-20 lg:py-24 border-b border-[#D9B98B]/15">
        {/* Glow dourado de celebração noturna */}
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#D9B98B]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#2C3B32]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 lg:col-span-7"
          >
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-[#D9B98B]" />
              <Eyebrow>CELEBRAÇÕES NOTURNAS DE ALTO LUXO</Eyebrow>
            </div>

            <h1 className="mt-4 font-serif text-5xl leading-[1.12] text-white sm:text-6xl md:text-7xl">
              Noites Memoráveis
              <span
                style={{ fontFamily: "Alex Brush, cursive" }}
                className="mt-2 block text-5xl font-normal text-[#D9B98B] sm:text-6xl md:text-7xl"
              >
                Em Grandes Histórias
              </span>
            </h1>

            <p className="mt-5 text-base font-semibold text-[#E6DDD0]">
              O salão de festas que transforma sua celebração em um espetáculo noturno.
            </p>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#A6B0A8] sm:text-base">
              Pé-direito monumental de 7 metros com lustres de cristal, pista com iluminação cênica e som line-array, bar de coquetéis 360° e alta gastronomia festiva para casamentos de gala, 15 anos marcantes, formaturas e celebrações corporativas de elite.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button variant="gold" onClick={onOpenBooking}>
                <Sparkles className="h-4 w-4" /> Planejar Minha Festa
              </Button>
              <Link to="/salao">
                <Button variant="dark">
                  Explorar o Salão & Pista{" "}
                  <Play className="h-3 w-3 fill-current ml-1" />
                </Button>
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-[#D9B98B]/15 pt-8 sm:grid-cols-4">
              {STATS.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#18201C] border border-[#D9B98B]/30 shadow-xs text-[#D9B98B]">
                    <Icon className="h-5 w-5" strokeWidth={1.3} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-white">{value}</h4>
                    <p className="text-[11px] text-[#A6B0A8]">{label}</p>
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
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-[#D9B98B]/20">
              <img
                src={img("photo-1519167758481-83f550bb49b3", 1200)}
                alt="Salão de festas Eterna iluminado à noite com lustres de cristal"
                className="h-[380px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[480px] md:h-[540px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-[#111714]/85 p-5 backdrop-blur-md border border-[#D9B98B]/30 shadow-lg">
                <div className="flex items-center gap-3">
                  <Flame className="h-5 w-5 text-[#D9B98B]" />
                  <p className="font-serif text-sm italic text-[#FAF0E1]">
                    "A atmosfera noturna que transforma cada convidado em protagonista de uma grande festa."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Áreas em Destaque */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <Eyebrow>ATMOSFERA DE CELEBRAÇÃO</Eyebrow>
          <h2 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
            Uma Experiência Noturna Completa
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-xs text-[#A6B0A8] sm:text-sm">
            Conheça o salão preparado para grandes festas, com acústica perfeita para música alta, cenografia iluminada e alta gastronomia com bar de coquetéis.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {showcaseAreas.map((area) => (
            <motion.div
              key={area.title}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl bg-[#141A17] shadow-lg border border-[#D9B98B]/15 transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={area.image}
                  alt={area.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-[#0B0E0D]/80 border border-[#D9B98B]/30 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#D9B98B] backdrop-blur-xs">
                  {area.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-white">{area.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#A6B0A8]">{area.desc}</p>
                <div className="mt-5">
                  <Link
                    to={area.link}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#D9B98B] transition-transform hover:translate-x-1"
                  >
                    Ver Detalhes & Fotos <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Serviços em Destaque */}
      <section className="bg-[#0F1412] px-6 py-20 border-t border-[#D9B98B]/15">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>PRODUÇÃO & ESTRUTURA</Eyebrow>
              <h2 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
                O Que Fazemos Para Sua Festa Brilhar
              </h2>
              <p className="mt-2 text-xs text-[#A6B0A8]">
                Do primeiro brinde aos lanchinhos da madrugada, tudo orquestrado no mais alto nível.
              </p>
            </div>
            <Link to="/servicos">
              <Button variant="dark">
                Ver Todos os Serviços <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {servicesPreview.map((s) => {
              const Icon = s.icon;
              return (
                <motion.article
                  key={s.title}
                  whileHover={{ y: -6 }}
                  className="group flex flex-col items-center rounded-2xl bg-[#151D19] p-6 text-center shadow-xs border border-[#D9B98B]/15 transition-all hover:border-[#D9B98B]/40"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1C2622] text-[#D9B98B] transition-colors group-hover:bg-[#D9B98B] group-hover:text-[#0B0E0D]">
                    <Icon className="h-6 w-6" strokeWidth={1.3} />
                  </div>
                  <h3 className="mt-4 font-serif text-sm font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#A6B0A8]">{s.subtitle}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção Sobre o Salão & Celebrações */}
      <section className="relative overflow-hidden bg-[#0B0E0D] border-y border-[#D9B98B]/15">
        <div className="mx-auto grid max-w-7xl items-center lg:grid-cols-12">
          <div className="relative lg:col-span-6">
            <img
              src={img("photo-1511795409834-ef04bbd61622", 1200)}
              alt="Banquete noturno iluminado à luz de velas"
              className="h-[360px] w-full object-cover lg:h-[580px]"
            />
            <div className="absolute top-6 left-6 rounded-xl bg-[#0B0E0D]/80 border border-[#D9B98B]/30 px-4 py-3 backdrop-blur-sm shadow-md">
              <p
                style={{ fontFamily: "Alex Brush, cursive" }}
                className="text-2xl text-[#D9B98B]"
              >
                A noite mais incrível da sua vida... ♡
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center px-6 py-14 lg:col-span-6 lg:px-16">
            <Eyebrow>O CENÁRIO PERFEITO</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
              Mais Que Um Salão, O Palco de Grandes Noites
            </h2>
            <p className="mt-4 text-xs leading-relaxed text-[#A6B0A8] sm:text-sm">
              Criado especificamente para celebrar. O Eterna une a imponência de um salão de gala com a energia pulsante das melhores noites. Equipado com isolamento acústico total para que a música toque no volume que você quiser, climatização potente para manter todos frescos na pista e equipe experiente cuidando de cada momento.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/salao">
                <Button variant="gold">
                  Conhecer o Salão & Pista <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
              <Link to="/buffet">
                <Button variant="dark">
                  Ver Gastronomia & Bar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-[#0F1412] px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>DEPOIMENTOS DE ANFITRIÕES</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
              Festas Que
              <br />
              Ficaram na Memória
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-[#A6B0A8] sm:text-sm">
              A empolgação dos anfitriões e dos convidados ao amanhecer é o nosso maior orgulho.
            </p>
            <div className="mt-6">
              <Button variant="gold" onClick={onOpenBooking}>
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
                className="relative flex flex-col items-center gap-6 rounded-3xl bg-[#151D19] p-8 shadow-sm border border-[#D9B98B]/20 sm:flex-row"
              >
                <img
                  src={currentT.photo}
                  alt={currentT.name}
                  className="h-28 w-28 shrink-0 rounded-full object-cover ring-4 ring-[#D9B98B]/30 shadow-md"
                />

                <div className="flex-1">
                  <Quote className="h-8 w-8 text-[#D9B98B]" />
                  <blockquote className="mt-3 text-sm italic leading-relaxed text-[#FAF0E1] sm:text-base">
                    "{currentT.quote}"
                  </blockquote>

                  <figcaption className="mt-5 flex items-center justify-between border-t border-[#D9B98B]/15 pt-4">
                    <div>
                      <h4 className="font-serif text-sm font-bold text-white">{currentT.name}</h4>
                      <p className="text-xs text-[#D9B98B]">{currentT.type}</p>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => goTestimonial(-1)}
                        aria-label="Anterior"
                        className="rounded-full border border-[#D9B98B]/30 bg-[#1C2622] p-2 text-[#D9B98B] transition-colors hover:bg-[#D9B98B] hover:text-[#0B0E0D]"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => goTestimonial(1)}
                        aria-label="Próximo"
                        className="rounded-full border border-[#D9B98B]/30 bg-[#1C2622] p-2 text-[#D9B98B] transition-colors hover:bg-[#D9B98B] hover:text-[#0B0E0D]"
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

      {/* Bottom CTA Faixa Noturna & Ouro */}
      <section className="relative overflow-hidden bg-[#070A09] px-6 py-20 text-white border-t border-[#D9B98B]/20">
        <img
          src={img("photo-1492684223066-81342ee5ff30", 1400)}
          alt="Brinde com champanhe e confetes de festa"
          className="absolute inset-0 h-full w-full object-cover opacity-15"
        />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D9B98B]">
              AGENDE SUA DEGUSTAÇÃO & VISITA NOTURNA
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Sua Grande Celebração Começa Aqui
            </h2>
            <p className="mt-3 text-sm text-[#A6B0A8]">
              Datas concorridas para 2026 e 2027 abertas. Venha brindar e conhecer o espaço iluminado.
            </p>
            <div className="mt-8">
              <Button variant="gold" onClick={onOpenBooking}>
                <Sparkles className="h-4 w-4" /> Solicitar Proposta de Festa
              </Button>
            </div>
          </div>

          <div className="text-right">
            <p
              style={{ fontFamily: "Alex Brush, cursive" }}
              className="text-4xl text-[#D9B98B] sm:text-5xl"
            >
              Celebrar a vida é a nossa maior arte... ♡
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
