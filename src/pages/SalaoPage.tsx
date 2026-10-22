import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Maximize2,
  Sparkles,
  Building2,
  ShieldCheck,
  Check,
  ArrowRight,
  Eye,
  X,
  Volume2,
  Wind,
  PartyPopper,
  Wine,
} from "lucide-react";
import { PageHero, Button, Eyebrow } from "../components/SharedUI";
import { SALAO_HIGHLIGHTS, img } from "../data/content";

interface SalaoPageProps {
  onOpenBooking: () => void;
}

export const SalaoPage = ({ onOpenBooking }: SalaoPageProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const galleryPhotos = [
    {
      title: "Salão Nobre Principal Iluminado",
      subtitle: "Pé-direito duplo de 7m e lustres de cristal acesos",
      url: img("photo-1519167758481-83f550bb49b3", 1200),
    },
    {
      title: "Pista de Dança & Iluminação Cênica",
      subtitle: "Moving heads, lasers e som line-array potente",
      url: img("photo-1516450360452-9312f5e86fc7", 1200),
    },
    {
      title: "Bar Central Monumental 360°",
      subtitle: "Balcão nobre em mármore com mixologia autoral",
      url: img("photo-1514362545857-3bc16c4c7d1b", 1200),
    },
    {
      title: "Mezanino VIP & Camarote",
      subtitle: "Visão panorâmica da festa e ambiente privativo",
      url: img("photo-1511795409834-ef04bbd61622", 1200),
    },
    {
      title: "Banquete de Gala à Luz de Velas",
      subtitle: "Mesas imperiais com castiçais e louças douradas",
      url: img("photo-1464366400600-7168b8af9bc3", 1200),
    },
    {
      title: "Camarim & Apoio dos Anfitriões",
      subtitle: "Espelho profissional iluminado para make e troca de figurino",
      url: img("photo-1582719478250-c89cae4dc85b", 1200),
    },
  ];

  const specs = [
    { icon: Building2, title: "Pé-Direito Duplo de 7m", desc: "Imponência arquitetônica com acabamento de alto luxo." },
    { icon: Users, title: "Capacidade Ampla", desc: "Até 1.000 pessoas em formato festa/coquetel ou 600 em banquete." },
    { icon: Volume2, title: "Isolamento Acústico", desc: "Tratamento completo para bandas e DJs tocarem até às 05:00 da manhã." },
    { icon: Wind, title: "Climatização Inteligente", desc: "Controle térmico dinâmico que mantém a pista fresca a noite inteira." },
    { icon: PartyPopper, title: "Estrutura para Shows", desc: "Grid técnico para montagem de cenários e rider de grandes artistas." },
    { icon: Wine, title: "Bar Central 360°", desc: "Atendimento veloz e cenográfico sem filas para os convidados." },
  ];

  return (
    <div className="bg-[#0B0E0D] text-[#F5EFE6]">
      <PageHero
        badge="INFRAESTRUTURA NOTURNA & FESTIVA"
        title="O Salão de Festas"
        highlight="Onde a Noite Acontece"
        description="Conheça nosso salão nobre climatizado, a pista de dança com som e luz de última geração, o mezanino VIP panorâmico e o bar monumental de cocktails."
        actionText="Agendar Tour Noturno"
        onAction={onOpenBooking}
      />

      {/* Destaques dos Ambientes */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <Eyebrow>TOUR PELOS AMBIENTES</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
            Ambientes Projetados Para Grandes Noites
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs text-[#A6B0A8] sm:text-sm">
            Estrutura pensada para que anfitriões e convidados vivam uma festa sem limites de horário, com som potente, iluminação cinematográfica e climatização impecável.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SALAO_HIGHLIGHTS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-3xl bg-[#141A17] shadow-xl border border-[#D9B98B]/15 transition-all hover:border-[#D9B98B]/40"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-[#0B0E0D]/85 border border-[#D9B98B]/30 px-3 py-1 text-[11px] font-semibold text-[#D9B98B] backdrop-blur-xs">
                  {item.capacity}
                </span>
                <button
                  onClick={() => setSelectedPhoto(item.image)}
                  className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#0B0E0D]/80 border border-[#D9B98B]/30 text-[#D9B98B] shadow-md transition-transform hover:scale-110 hover:bg-[#D9B98B] hover:text-[#0B0E0D]"
                  aria-label="Ampliar foto"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#A6B0A8]">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#1C2622] border border-[#D9B98B]/20 px-2.5 py-1 text-[10px] font-medium text-[#D9B98B]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Especificações Técnicas */}
      <section className="bg-[#0F1412] px-6 py-20 border-y border-[#D9B98B]/15">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5">
              <Eyebrow>SEGURANÇA & ACÚSTICA</Eyebrow>
              <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
                Infraestrutura Robusta Para Festas Até de Manhã
              </h2>
              <p className="mt-4 text-xs leading-relaxed text-[#A6B0A8] sm:text-sm">
                Graças ao tratamento acústico completo, bandas e DJs podem performar com o máximo de energia até às 05:00 da manhã. Além disso, dispomos de gerador próprio automático de 500kVA que garante 100% da iluminação, som e ar condicionado operando sem qualquer oscilação.
              </p>
              <div className="mt-8">
                <Button variant="gold" onClick={onOpenBooking}>
                  Solicitar Rider Técnico <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
              {specs.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl bg-[#151D19] p-5 shadow-xs border border-[#D9B98B]/15"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1C2622] text-[#D9B98B]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-3 font-serif text-sm font-bold text-white">{title}</h4>
                  <p className="mt-1 text-xs text-[#A6B0A8] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Fotos */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <Eyebrow>GALERIA DA NOITE</Eyebrow>
            <h2 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
              Registros do Salão Iluminado
            </h2>
            <p className="mt-2 text-xs text-[#A6B0A8]">
              Clique nas fotos para ver a energia e a sofisticação da noite em alta resolução.
            </p>
          </div>
          <Button variant="gold" onClick={onOpenBooking}>
            Conhecer Pessoalmente
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPhotos.map((photo) => (
            <motion.div
              key={photo.title}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedPhoto(photo.url)}
              className="group relative h-72 cursor-pointer overflow-hidden rounded-2xl shadow-lg border border-[#D9B98B]/20"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6 text-white">
                <span className="flex items-center gap-1.5 text-xs text-[#D9B98B] font-semibold">
                  <Eye className="h-3.5 w-3.5" /> Clique para ampliar
                </span>
                <h4 className="font-serif text-lg font-bold">{photo.title}</h4>
                <p className="text-xs text-white/80">{photo.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 rounded-full bg-white/20 p-3 text-white hover:bg-white/40 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={selectedPhoto}
              alt="Foto ampliada do salão"
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl border border-[#D9B98B]/30"
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
