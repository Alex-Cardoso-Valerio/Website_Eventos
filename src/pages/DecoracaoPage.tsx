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
      icon: Flower2,
      title: "Design Floral de Alta Estirpe",
      desc: "Orquídeas, rosas colombianas, hortênsias e folhagens nobres selecionadas diretamente de produtores certificados em Holambra.",
    },
    {
      icon: Flame,
      title: "Iluminação Cênica & Velas",
      desc: "Velas de cera pura, lustres em cristal e micro-spots dimerizáveis que criam uma atmosfera acolhedora, intimista e instagramável.",
    },
    {
      icon: Layers,
      title: "Mobiliário Exclusivo de Design",
      desc: "Cadeiras tiffany, medalhão e dior, mesas imperiais com acabamento laqueado ou madeira nobre, e sofás em veludo italiano.",
    },
    {
      icon: Sparkles,
      title: "Mesa de Doces Monumental",
      desc: "Cenários aéreos exuberantes, bandejas de prata e cristal de Murano e integração perfeita com o bolo cenográfico do evento.",
    },
  ];

  const galleryItems = [
    {
      title: "Caminho de Velas & Pergolado",
      theme: "Cerimônia Romântica",
      image: img("photo-1519741497674-611481863552", 700),
    },
    {
      title: "Mesa Imperial Banquete",
      theme: "Casamento Clássico",
      image: img("photo-1519225421980-715cb0215aed", 700),
    },
    {
      title: "Arranjos Aéreos Vivos",
      theme: "Rústico Botânico",
      image: img("photo-1478146896981-b80fe463b330", 700),
    },
    {
      title: "Pista Neon & Iluminação LED",
      theme: "Debutante & Formatura",
      image: img("photo-1516450360452-9312f5e86fc7", 700),
    },
    {
      title: "Lounge VIP & Poltronas",
      theme: "Recepção de Gala",
      image: img("photo-1511795409834-ef04bbd61622", 700),
    },
    {
      title: "Mesa de Doces Fina",
      theme: "Alta Confeitaria",
      image: img("photo-1469371670807-013ccf25f16a", 700),
    },
  ];

  return (
    <div className="bg-[#FAF8F5]">
      <PageHero
        badge="CENOGRAFIA & DESIGN VISUAL"
        title="Decorações Exclusivas"
        highlight="Arte Que Encanta os Olhares"
        description="Do clássico monumental com lustres de cristal ao rústico botânico e moderno contemporâneo. Cada evento ganha um projeto cenográfico 3D exclusivo e irrepetível."
        actionText="Agendar Consultoria Cenográfica"
        onAction={onOpenBooking}
      />

      {/* Seleção de Estilos Cenográficos */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <Eyebrow>ESTILOS ASSINADOS</Eyebrow>
          <h2 className="mt-2 font-serif text-3xl font-bold text-[#1A2421] sm:text-4xl">
            Escolha o Estilo Que Expressa Sua Celebração
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-xs text-[#6b716c] sm:text-sm">
            Nossa equipe de cenógrafos desenvolve uma identidade visual harmoniosa entre flores, mobiliário, toalhas, louças e iluminação.
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
                  ? "bg-[#1A2421] text-white shadow-md"
                  : "bg-[#F6EFE7] text-[#2C3B32] hover:bg-[#eae0d2]"
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
          className="mt-12 overflow-hidden rounded-3xl bg-white shadow-sm border border-[#eae3d5] grid lg:grid-cols-12"
        >
          <div className="relative h-80 lg:h-auto lg:col-span-6">
            <img
              src={current.image}
              alt={current.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute top-4 left-4 rounded-xl bg-white/90 px-3 py-1.5 backdrop-blur-xs text-xs font-bold text-[#1A2421]">
              {current.subtitle}
            </div>
          </div>

          <div className="p-8 sm:p-12 lg:col-span-6 flex flex-col justify-center">
            <Eyebrow>PROJETO CONCEITUAL</Eyebrow>
            <h3 className="mt-2 font-serif text-3xl font-bold text-[#1A2421]">
              {current.title}
            </h3>
            <p className="mt-4 text-xs leading-relaxed text-[#5b625d] sm:text-sm">
              {current.desc}
            </p>

            {/* Paleta de Cores */}
            <div className="mt-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#A8845B]">
                Paleta de Cores Sugerida
              </span>
              <div className="mt-2 flex items-center gap-3">
                {current.palette.map((color, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-1">
                    <span
                      style={{ backgroundColor: color }}
                      className="h-9 w-9 rounded-full border border-black/10 shadow-xs"
                    />
                    <span className="text-[9px] uppercase text-[#6b716c] font-mono">
                      {color}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Elementos Chave */}
            <div className="mt-6 space-y-2 border-t border-[#eae3d5] pt-4">
              {current.features.map((feat) => (
                <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-[#2C3B32]">
                  <CheckCircle2 className="h-4 w-4 text-[#A8845B]" />
                  {feat}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button variant="dark" onClick={onOpenBooking}>
                Quero Este Estilo no Meu Evento <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Pilares da Decoração Eterna */}
      <section className="bg-[#F6EFE7] px-6 py-20 border-y border-[#eae3d5]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <Eyebrow>EXCELÊNCIA EM CADA DETALHE</Eyebrow>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[#1A2421] sm:text-4xl">
              Os 4 Pilares da Cenografia Eterna
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-xs text-[#6b716c] sm:text-sm">
              Trabalhamos para que seus convidados sintam o encanto e a sofisticação desde o primeiro passo na entrada.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pil) => {
              const Icon = pil.icon;
              return (
                <div
                  key={pil.title}
                  className="rounded-2xl bg-white/80 p-6 shadow-xs border border-[#eae3d5]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F6EFE7] text-[#A8845B]">
                    <Icon className="h-6 w-6" strokeWidth={1.4} />
                  </div>
                  <h4 className="mt-4 font-serif text-base font-bold text-[#1A2421]">
                    {pil.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#6b716c]">{pil.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Galeria de Cenários Criados */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <Eyebrow>PORTFÓLIO DE PROJETOS</Eyebrow>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[#1A2421] sm:text-4xl">
              Cenários que Marcaram Histórias
            </h2>
            <p className="mt-2 text-xs text-[#6b716c]">
              Projetos reais executados com maestria no salão e jardins do Eterna.
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
              className="group overflow-hidden rounded-2xl bg-white shadow-xs border border-[#eae3d5]"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#1A2421]">
                  {item.theme}
                </span>
              </div>
              <div className="p-4 text-center">
                <h4 className="font-serif text-base font-bold text-[#1A2421]">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
