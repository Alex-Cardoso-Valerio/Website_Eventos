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
  Flame,
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
      desc: "Estações ativas onde risotos na roda de parmesão e ceviches frescos são preparados na hora para os convidados.",
      image: img("photo-1555244162-803834f70033", 800),
    },
    {
      title: "Jantares de Gala à Francesa",
      desc: "Serviço sincronizado e nobre com Tornedor de Mignon em crosta de ervas e aligot trufado de queijo Canastra.",
      image: img("photo-1544025162-d76694265947", 800),
    },
    {
      title: "Bar Central & Mixologia Autoral",
      desc: "Drinks autorais com gelo lapidado, bolhas aromáticas defumadas, folhas de ouro e destilados importados de primeira linha.",
      image: img("photo-1514362545857-3bc16c4c7d1b", 800),
    },
    {
      title: "Lanchinho da Madrugada na Pista",
      desc: "Mini smash burgers quentinhos, coxinhas de pato e churros servidos no auge da pista de dança para recarregar as energias.",
      image: img("photo-1509440159596-0249088772ff", 800),
    },
  ];

  const dietaryCommitments = [
    "Opções 100% vegetarianas e veganas com apresentação e sabor refinados",
    "Pratos especiais para celíacos (glúten-free) e intolerantes a lactose",
    "Respeito a orientações religiosas com cardápios Kosher e Halal",
    "Finger foods quentes servidos ininterruptamente na pista de dança",
  ];

  return (
    <div className="bg-[#0B0E0D] text-[#F5EFE6]">
      <PageHero
        badge="ALTA GASTRONOMIA FESTIVA & MIXOLOGIA"
        title="Buffet & Cocktails"
        highlight="Sabores Que Embalam a Noite"
        description="Uma experiência gastronômica noturna vibrante e sofisticada. Ilhas gastronômicas ao vivo, jantares de gala, lanches da madrugada na pista e coquetelaria autoral premiada."
        actionText="Agendar Degustação Noturna"
        onAction={onOpenBooking}
      />

      {/* Destaques em Cards */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <Eyebrow>CONCEITO GASTRONÔMICO</Eyebrow>
          <h2 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
            A Gastronomia Como Atração da Festa
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-xs text-[#A6B0A8] sm:text-sm">
            Nossa cozinha industrial de alta vazão garante pratos na temperatura ideal, serviço sincronizado e comida deliciosa até o último instante da noite.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-3xl bg-[#141A17] shadow-xl border border-[#D9B98B]/15"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#A6B0A8]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Menus em Abas */}
      <section className="bg-[#0F1412] px-6 py-20 border-y border-[#D9B98B]/15">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <Eyebrow>CARDÁPIOS EXCLUSIVOS</Eyebrow>
            <h2 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
              Nossos Menus Festivos
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-xs text-[#A6B0A8] sm:text-sm">
              Conheça os pratos criados para surpreender do primeiro brinde à madrugada.
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
                    ? "bg-[#D9B98B] text-[#0B0E0D] font-bold shadow-lg shadow-[#D9B98B]/20"
                    : "bg-[#161D1A] text-[#C8D1CB] border border-[#D9B98B]/20 hover:bg-[#202925]"
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
                className="rounded-2xl bg-[#151D19] p-6 shadow-sm border border-[#D9B98B]/15"
              >
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <h4 className="font-serif text-base font-bold text-white">
                    {dish.name}
                  </h4>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#D9B98B]">
                    Assinatura do Chef
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[#A6B0A8] sm:text-sm">
                  {dish.desc}
                </p>
              </div>
            ))}
          </motion.div>

          <div className="mt-10 text-center">
            <Button variant="gold" onClick={onOpenBooking}>
              <Sparkles className="h-4 w-4" /> Solicitar Cardápio Completo em PDF
            </Button>
          </div>
        </div>
      </section>

      {/* Compromissos e Brigada */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6">
            <Eyebrow>HOSPITALIDADE & SABOR</Eyebrow>
            <h2 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
              Cuidado Para Que Todos os Convidados Comemorem
            </h2>
            <p className="mt-4 text-xs leading-relaxed text-[#A6B0A8] sm:text-sm">
              Criamos opções impecáveis para convidados com restrições alimentares com a mesma criatividade e sofisticação das receitas tradicionais, além de mantermos o bar e as opções de madrugada ativos até o final do evento.
            </p>

            <div className="mt-6 space-y-3">
              {dietaryCommitments.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D9B98B]" />
                  <span className="text-xs font-semibold text-[#E6DDD0]">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button variant="gold" onClick={onOpenBooking}>
                Agendar Degustação Noturna
              </Button>
            </div>
          </div>

          <div className="relative lg:col-span-6 overflow-hidden rounded-3xl shadow-2xl border border-[#D9B98B]/20">
            <img
              src={img("photo-1555396273-367ea4eb4db5", 1000)}
              alt="Chefs finalizando pratos sofisticados na cozinha"
              className="h-[420px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-8">
              <div className="text-white">
                <ChefHat className="h-8 w-8 text-[#D9B98B]" />
                <h4 className="mt-2 font-serif text-xl font-bold">Chef Executivo & Brigada de Cozinha</h4>
                <p className="text-xs text-[#A6B0A8]">
                  Mais de 30 profissionais em cozinha garantindo serviço rápido, fresco e apresentação de gala.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
