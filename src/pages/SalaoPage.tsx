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
  Car,
  UtensilsCrossed,
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
      title: "Salão Nobre Principal",
      subtitle: "Pé-direito duplo e lustres de cristal",
      url: img("photo-1519167758481-83f550bb49b3", 1200),
    },
    {
      title: "Jardim & Gazebo de Cerimônias",
      subtitle: "Espaço arborizado com espelho d'água",
      url: img("photo-1519741497674-611481863552", 1200),
    },
    {
      title: "Mesa Imperial & Banquete",
      subtitle: "Capacidade para até 600 convidados sentados",
      url: img("photo-1511795409834-ef04bbd61622", 1200),
    },
    {
      title: "Pista de Dança & Iluminação Cênica",
      subtitle: "Acústica profissional e grid de LED",
      url: img("photo-1516450360452-9312f5e86fc7", 1200),
    },
    {
      title: "Suíte do Anfitrião / Camarim VIP",
      subtitle: "Hidromassagem, camarim iluminado e conforto",
      url: img("photo-1582719478250-c89cae4dc85b", 1200),
    },
    {
      title: "Fachada & Entrada Monumental",
      subtitle: "Port-cochère coberto e serviço de valet",
      url: img("photo-1506521781263-d8422e82f27a", 1200),
    },
  ];

  const specs = [
    { icon: Building2, title: "Área Total Integrada", desc: "2.500 m² de terreno com salão, jardim e mezanino." },
    { icon: Users, title: "Capacidade Flexível", desc: "Até 1.000 convidados em formato coquetel ou 600 em banquete." },
    { icon: Volume2, title: "Isolamento Acústico", desc: "Tratamento completo para shows e bandas sem limite de horário." },
    { icon: Wind, title: "Climatização Inteligente", desc: "Sistema central ecológico com renovação constante do ar." },
    { icon: Car, title: "Estacionamento Privativo", desc: "250 vagas internas com equipe de manobristas e seguro." },
    { icon: UtensilsCrossed, title: "Cozinha Industrial", desc: "Estrutura gastronômica internacional de altíssima vazão." },
  ];

  return (
    <div className="bg-[#FAF8F5]">
      <PageHero
        badge="INFRAESTRUTURA & ARQUITETURA"
        title="O Salão de Festas"
        highlight="Espaço Monumental & Acolhedor"
        description="Conheça cada ambiente do Eterna: salão nobre climatizado, jardins para celebrações ao ar livre, mezanino panorâmico e camarim VIP dos anfitriões."
        actionText="Agendar Tour Presencial"
        onAction={onOpenBooking}
      />

      {/* Destaques dos Ambientes */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <Eyebrow>TOUR VIRTUAL PELOS ESPAÇOS</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#1A2421] sm:text-4xl">
            Ambientes Projetados Para Impressionar
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs text-[#6b716c] sm:text-sm">
            Cada metro quadrado foi concebido para unir imponência arquitetônica, conforto térmico e acústico e total integração com a natureza.
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
              className="group overflow-hidden rounded-3xl bg-white shadow-xs border border-[#eae3d5] transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-[#1A2421]/80 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-xs">
                  {item.capacity}
                </span>
                <button
                  onClick={() => setSelectedPhoto(item.image)}
                  className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#1A2421] shadow-md transition-transform hover:scale-110"
                  aria-label="Ampliar foto"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-[#1A2421]">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#5b625d]">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#F6EFE7] px-2.5 py-1 text-[10px] font-medium text-[#2C3B32]"
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
      <section className="bg-[#F6EFE7] px-6 py-20 border-y border-[#eae3d5]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5">
              <Eyebrow>SEGURANÇA & CONFORTO TÉCNICO</Eyebrow>
              <h2 className="mt-3 font-serif text-3xl font-bold text-[#1A2421] sm:text-4xl">
                Tecnologia e Engenharia a Serviço do Seu Evento
              </h2>
              <p className="mt-4 text-xs leading-relaxed text-[#5b625d] sm:text-sm">
                Nada fica ao acaso. Contamos com infraestrutura completa com gerador próprio automático de 500kVA, alvará de funcionamento 100% regularizado e brigada de incêndio dedicada para que sua celebração transcorra sem qualquer imprevisto.
              </p>
              <div className="mt-8">
                <Button variant="dark" onClick={onOpenBooking}>
                  Solicitar Ficha Técnica Completa <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
              {specs.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl bg-white/80 p-5 shadow-xs border border-[#eae3d5]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6EFE7] text-[#A8845B]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-3 font-serif text-sm font-bold text-[#1A2421]">{title}</h4>
                  <p className="mt-1 text-xs text-[#6b716c] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Fotos em Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <Eyebrow>GALERIA FOTOGRÁFICA</Eyebrow>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[#1A2421] sm:text-4xl">
              Registros do Nosso Espaço
            </h2>
            <p className="mt-2 text-xs text-[#6b716c]">
              Clique nas fotos para visualizar em alta resolução.
            </p>
          </div>
          <Button variant="gold" onClick={onOpenBooking}>
            Conhecer Pessoalmente
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPhotos.map((photo, i) => (
            <motion.div
              key={photo.title}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedPhoto(photo.url)}
              className="group relative h-72 cursor-pointer overflow-hidden rounded-2xl shadow-xs"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6 text-white">
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
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
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
