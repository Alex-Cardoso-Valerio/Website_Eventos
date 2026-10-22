import { useState } from "react";
import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Wine,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Heart,
  Award,
  Coffee,
  GlassWater,
  ChefHat,
} from "lucide-react";
import { PageHero, Button, Eyebrow } from "../components/SharedUI";
import { BUFFET_MENUS, img } from "../data/content";

interface BuffetPageProps {
  onOpenBooking: () => void;
}

export const BuffetPage = ({ onOpenBooking }: BuffetPageProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const highlights = [
    {
      title: "Ilhas Gastronômicas ao Vivo",
      desc: "Estações ativas onde risotos, massas artesanais flambadas e ceviches são preparados na hora aos olhos dos convidados.",
      image: img("photo-1555244162-803834f70033", 800),
    },
    {
      title: "Jantares Empratados à Francesa",
      desc: "Serviço sincronizado e impecável com cortes nobres como Tornedor de Mignon em crosta de ervas e aligot trufado.",
      image: img("photo-1544025162-d76694265947", 800),
    },
    {
      title: "Mixologia & Bar de Coquetéis",
      desc: "Bebidas premium, gelos translúcidos lapidados, infusões botânicas e drinks autorais que viram atrações na pista de dança.",
      image: img("photo-1514362545857-3bc16c4c7d1b", 800),
    },
    {
      title: "Alta Confeitaria & Doces Finos",
      desc: "Doces artesanais decorados com ouro comestível, mil-folhas com baunilha de Madagascar e mesa monumental de macarons.",
      image: img("photo-1509440159596-0249088772ff", 800),
    },
  ];

  const dietaryCommitments = [
    "Opções 100% vegetarianas e veganas com alta complexidade de sabores",
    "Cardápios adaptados para intolerantes a glúten (celíacos) e lactose",
    "Respeito absoluto a restrições religiosas (menus Kosher e Halal)",
    "Menu Kids saudável e afetivo para crianças convidadas",
  ];

  return (
    <div className="bg-[#FAF8F5]">
      <PageHero
        badge="ALTA GASTRONOMIA & COQUETELARIA"
        title="Buffet Autoral Eterna"
        highlight="Sabores Que Marcam Época"
        description="Uma experiência sensorial inesquecível. Conheça nossos menus assinados, ilhas gastronômicas ativas, coquetelaria contemporânea e agende sua degustação exclusiva."
        actionText="Agendar Degustação do Buffet"
        onAction={onOpenBooking}
      />

      {/* Destaques Gastronômicos em Cards */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <Eyebrow>CONCEITO CULINÁRIO</Eyebrow>
          <h2 className="mt-2 font-serif text-3xl font-bold text-[#1A2421] sm:text-4xl">
            A Arte da Boa Mesa em Seu Evento
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-xs text-[#6b716c] sm:text-sm">
            Nossa cozinha industrial própria opera sob comando de chefs renomados, garantindo ingredientes frescos, apresentação impecável e serviço no tempo perfeito.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-3xl bg-white shadow-xs border border-[#eae3d5]"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-bold text-[#1A2421]">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#6b716c]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Menus Detalhados com Abas */}
      <section className="bg-[#F6EFE7] px-6 py-20 border-y border-[#eae3d5]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <Eyebrow>CARDÁPIOS DE DEGUSTAÇÃO</Eyebrow>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[#1A2421] sm:text-4xl">
              Nossos Menus & Especialidades
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-xs text-[#6b716c] sm:text-sm">
              Cada prato é uma obra de arte pensada para encantar todos os paladares.
            </p>
          </div>

          {/* Abas */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {BUFFET_MENUS.map((menu, idx) => (
              <button
                key={menu.category}
                onClick={() => setActiveTab(idx)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all ${
                  activeTab === idx
                    ? "bg-[#1A2421] text-white shadow-md"
                    : "bg-white/80 text-[#2C3B32] hover:bg-white"
                }`}
              >
                {menu.category.split("(")[0]}
              </button>
            ))}
          </div>

          {/* Conteúdo da Aba */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-10 space-y-4"
          >
            {BUFFET_MENUS[activeTab].items.map((dish) => (
              <div
                key={dish.name}
                className="rounded-2xl bg-white/90 p-6 shadow-xs border border-[#eae3d5]"
              >
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <h4 className="font-serif text-base font-bold text-[#1A2421]">
                    {dish.name}
                  </h4>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#A8845B]">
                    Assinatura do Chef
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[#5b625d] sm:text-sm">
                  {dish.desc}
                </p>
              </div>
            ))}
          </motion.div>

          <div className="mt-10 text-center">
            <Button variant="dark" onClick={onOpenBooking}>
              Solicitar Cardápio Completo em PDF <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Cuidados Nutricionais & Inclusão Alimentar */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6">
            <Eyebrow>HOSPITALIDADE & CUIDADO</Eyebrow>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[#1A2421] sm:text-4xl">
              Gastronomia Inclusiva Para Todos os Convidados
            </h2>
            <p className="mt-4 text-xs leading-relaxed text-[#5b625d] sm:text-sm">
              Acreditamos que todos os convidados devem se sentir verdadeiramente acolhidos e encantados. Desenvolvemos estações e pratos dedicados para vegetarianos, celíacos e alérgicos com a mesma sofisticação e apresentação primorosa do menu principal.
            </p>

            <div className="mt-6 space-y-3">
              {dietaryCommitments.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#A8845B]" />
                  <span className="text-xs font-semibold text-[#2C3B32]">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button variant="gold" onClick={onOpenBooking}>
                Agendar Minha Sessão de Degustação
              </Button>
            </div>
          </div>

          <div className="relative lg:col-span-6 overflow-hidden rounded-3xl shadow-xl">
            <img
              src={img("photo-1555396273-367ea4eb4db5", 1000)}
              alt="Cozinha com pratos sofisticados sendo finalizados pelos chefs"
              className="h-[420px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8">
              <div className="text-white">
                <ChefHat className="h-8 w-8 text-[#D9B98B]" />
                <h4 className="mt-2 font-serif text-xl font-bold">Chef Executivo & Brigada</h4>
                <p className="text-xs text-white/80">
                  Mais de 30 profissionais em cozinha garantindo serviço pontual e pratos impecáveis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
