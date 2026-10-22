import { useState } from "react";
import { motion } from "framer-motion";
import {
  Palette,
  Flower2,
  Sparkles,
  ArrowRight,
  Eye,
  CheckCircle2,
  Layers,
  Flame,
  Zap,
} from "lucide-react";
import { PageHero, Button, Eyebrow } from "../components/SharedUI";
import { DECORACOES_STYLES, img } from "../data/content";

interface DecoracaoPageProps {
  onOpenBooking: () => void;
}

export const DecoracaoPage = ({ onOpenBooking }: DecoracaoPageProps) => {
  const [activeStyle, setActiveStyle] = useState(DECORACOES_STYLES[0].id);

  const current =
    DECORACOES_STYLES.find((s) => s.id === activeStyle) || DECORACOES_STYLES[0];

  const pillars = [
    {
      icon: Flame,
      title: "Iluminação Cênica & Candelabros",
      desc: "Lustres de cristal Baccarat acesos, castiçais com velas naturais e pontos de luz dimerizáveis que conferem clima intimista e imponente.",
    },
    {
      icon: Zap,
      title: "Cenografia Dinâmica & LED",
      desc: "Tubos de LED programáveis, painéis digitais para a pista de dança e túneis de luz imersivos para fotos deslumbrantes.",
    },
    {
      icon: Layers,
      title: "Mobiliário Festivo & Lounges",
      desc: "Bistrôs dourados, poltronas e sofás em veludo italiano, mesas espelhadas escuras e cadeiras Dior ou Tiffany em ouro envelhecido.",
    },
    {
      icon: Sparkles,
      title: "Mesa de Doces Iluminada",
      desc: "Arranjos florais aéreos monumentais sobre mesas com bandejas de prata e cristal lapidado com doces banhados em ouro comestível.",
    },
  ];

  const galleryItems = [
    {
      title: "Salão Iluminado com Lustres de Cristal",
      theme: "Gala Noturno",
      image: img("photo-1519167758481-83f550bb49b3", 700),
    },
    {
      title: "Pista com Efeitos de LED & Lasers",
      theme: "15 Anos & Formaturas",
      image: img("photo-1516450360452-9312f5e86fc7", 700),
    },
    {
      title: "Banquete à Luz de Velas",
      theme: "Casamento de Gala",
      image: img("photo-1511795409834-ef04bbd61622", 700),
    },
    {
      title: "Lounge VIP & Bar Iluminado",
      theme: "Camarote & Coquetel",
      image: img("photo-1514362545857-3bc16c4c7d1b", 700),
    },
    {
      title: "Mesa de Doces com Arranjos Aéreos",
      theme: "Alta Confeitaria",
      image: img("photo-1469371670807-013ccf25f16a", 700),
    },
    {
      title: "Recepção Imperial & Veludo",
      theme: "Festa de Prestígio",
      image: img("photo-1464366400600-7168b8af9bc3", 700),
    },
  ];

  return (
    <div className="bg-[#0B0E0D] text-[#F5EFE6]">
      <PageHero
        badge="CENOGRAFIA NOTURNA & FESTIVA"
        title="Decorações de Gala"
        highlight="O Brilho da Noite"
        description="Lustres de cristal, centenas de velas acesas, mobília em veludo nobre e cenografia tecnológica de LED. Criamos projetos 3D personalizados para celebrar com muito estilo."
        actionText="Agendar Consultoria Cenográfica"
        onAction={onOpenBooking}
      />

      {/* Seleção de Estilos Cenográficos */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <Eyebrow>ESTILOS NOTURNOS ASSINADOS</Eyebrow>
          <h2 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
            Escolha a Identidade Visual da Sua Festa
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-xs text-[#A6B0A8] sm:text-sm">
            Nossa equipe de cenógrafos harmoniza flores nobres, luzes de pista, louças finas e mobiliário para criar cenários de tirar o fôlego.
          </p>
        </div>

        {/* Abas dos estilos */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {DECORACOES_STYLES.map((style) => (
            <button
              key={style.id}
              onClick={() => setActiveStyle(style.id)}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all ${
                activeStyle === style.id
                  ? "bg-[#D9B98B] text-[#0B0E0D] font-bold shadow-lg shadow-[#D9B98B]/20"
                  : "bg-[#161D1A] text-[#C8D1CB] border border-[#D9B98B]/20 hover:bg-[#202925]"
              }`}
            >
              {style.title.split("&")[0]}
            </button>
          ))}
        </div>

        {/* Detalhe do Estilo Selecionado */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 overflow-hidden rounded-3xl bg-[#141A17] shadow-xl border border-[#D9B98B]/20 grid lg:grid-cols-12"
        >
          <div className="relative h-80 lg:h-auto lg:col-span-6">
            <img
              src={current.image}
              alt={current.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute top-4 left-4 rounded-xl bg-[#0B0E0D]/85 border border-[#D9B98B]/30 px-3 py-1.5 backdrop-blur-xs text-xs font-bold text-[#D9B98B]">
              {current.subtitle}
            </div>
          </div>

          <div className="p-8 sm:p-12 lg:col-span-6 flex flex-col justify-center">
            <Eyebrow>PROJETO DE CENOGRAFIA</Eyebrow>
            <h3 className="mt-2 font-serif text-3xl font-bold text-white">
              {current.title}
            </h3>
            <p className="mt-4 text-xs leading-relaxed text-[#A6B0A8] sm:text-sm">
              {current.desc}
            </p>

            {/* Paleta de Cores */}
            <div className="mt-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#D9B98B]">
                Paleta Cromática Noturna
              </span>
              <div className="mt-2 flex items-center gap-3">
                {current.palette.map((color, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-1">
                    <span
                      style={{ backgroundColor: color }}
                      className="h-9 w-9 rounded-full border border-white/20 shadow-xs"
                    />
                    <span className="text-[9px] uppercase text-[#A6B0A8] font-mono">
                      {color}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Elementos Chave */}
            <div className="mt-6 space-y-2 border-t border-[#D9B98B]/15 pt-4">
              {current.features.map((feat) => (
                <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-[#E6DDD0]">
                  <CheckCircle2 className="h-4 w-4 text-[#D9B98B]" />
                  {feat}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button variant="gold" onClick={onOpenBooking}>
                Quero Este Cenário em Minha Festa <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Pilares da Decoração Noturna */}
      <section className="bg-[#0F1412] px-6 py-20 border-y border-[#D9B98B]/15">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <Eyebrow>IMPACTO VISUAL</Eyebrow>
            <h2 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
              Os 4 Pilares da Cenografia de Noite Eterna
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-xs text-[#A6B0A8] sm:text-sm">
              Elementos que transformam o espaço em uma celebração cinematográfica.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pil) => {
              const Icon = pil.icon;
              return (
                <div
                  key={pil.title}
                  className="rounded-2xl bg-[#151D19] p-6 shadow-sm border border-[#D9B98B]/15"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1C2622] text-[#D9B98B]">
                    <Icon className="h-6 w-6" strokeWidth={1.4} />
                  </div>
                  <h4 className="mt-4 font-serif text-base font-bold text-white">
                    {pil.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#A6B0A8]">{pil.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfólio de Fotos */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <Eyebrow>PORTFÓLIO DA NOITE</Eyebrow>
            <h2 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
              Cenários Que Marcaram Época
            </h2>
            <p className="mt-2 text-xs text-[#A6B0A8]">
              Registros reais de iluminação e ambientação no salão nobre do Eterna.
            </p>
          </div>
          <Button variant="gold" onClick={onOpenBooking}>
            Projetar Minha Festa
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-2xl bg-[#141A17] shadow-lg border border-[#D9B98B]/15"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-[#0B0E0D]/80 border border-[#D9B98B]/30 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#D9B98B]">
                  {item.theme}
                </span>
              </div>
              <div className="p-4 text-center">
                <h4 className="font-serif text-base font-bold text-white">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
