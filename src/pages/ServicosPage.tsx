import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Calendar,
  Layers,
  HeartHandshake,
  ShieldCheck,
  Music,
} from "lucide-react";
import { PageHero, Button, Eyebrow } from "../components/SharedUI";
import { SERVICOS_LIST } from "../data/content";

interface ServicosPageProps {
  onOpenBooking: () => void;
}

export const ServicosPage = ({ onOpenBooking }: ServicosPageProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const steps = [
    {
      step: "01",
      title: "Reunião de Briefing & Conceito",
      desc: "Entendemos as expectativas, estilo musical, atrações desejadas e perfil dos convidados da sua celebração.",
    },
    {
      step: "02",
      title: "Projeto de Luz, Som & Cenografia",
      desc: "Nossos designers criam a planta de iluminação cênica, distribuição de lounges, bistrôs e fluxo de pista.",
    },
    {
      step: "03",
      title: "Degustação do Cardápio & Bar",
      desc: "Você e sua família provam as ilhas gastronômicas, pratos principais e a carta de drinks autorais.",
    },
    {
      step: "04",
      title: "Cronograma Dinâmico de Pista",
      desc: "Alinhamento minuto a minuto entre cerimonial, DJs, bandas, abertura de bar e lanches da madrugada.",
    },
    {
      step: "05",
      title: "Uma Noite Inesquecível",
      desc: "Nossa equipe cuida de toda a operação nos bastidores para você curtir a pista até o último segundo.",
    },
  ];

  const faqs = [
    {
      q: "Qual o horário limite para término da música e da festa?",
      a: "Nosso espaço dispõe de isolamento acústico profissional completo, permitindo que a festa se estenda com bandas e DJs tocando em volume de celebração até às 05:00 da manhã sem risco de interrupções.",
    },
    {
      q: "Quantas horas de festa estão inclusas nos pacotes?",
      a: "Nossos pacotes padrão oferecem 6 horas de festa com tolerância adicional para acolhimento dos convidados, além de liberação antecipada do salão para montagem de cenografia e preparação no camarim.",
    },
    {
      q: "O espaço conta com gerador de energia próprio?",
      a: "Sim! Dispomos de um gerador de 500 kVA automático e dedicado que sustenta 100% da carga de som, painéis de LED, iluminação cênica e climatização em caso de qualquer oscilação na rede externa.",
    },
    {
      q: "Posso levar atrações musicais ou DJs próprios?",
      a: "Com certeza! Dispomos de rider técnico profissional pronto para receber bandas de renome, DJs de ponta e apresentações ao vivo com camarim exclusivo para os artistas.",
    },
  ];

  return (
    <div className="bg-[#0B0E0D] text-[#F5EFE6]">
      <PageHero
        badge="PRODUÇÃO DE FESTAS DE GALA"
        title="Nossos Serviços"
        highlight="A Energia de Uma Grande Noite"
        description="Soluções completas para eventos noturnos: assessoria 360°, cenografia com iluminação cênica, gastronomia festiva com open bar premium e som de alta fidelidade até às 05h."
        actionText="Solicitar Orçamento de Produção"
        onAction={onOpenBooking}
      />

      {/* Lista Completa de Serviços */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12">
          {SERVICOS_LIST.map((servico, index) => {
            const Icon = servico.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.article
                key={servico.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid items-center gap-8 rounded-3xl bg-[#141A17] p-8 shadow-xl border border-[#D9B98B]/15 md:p-12 lg:grid-cols-12`}
              >
                <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1C2622] text-[#D9B98B]">
                      <Icon className="h-6 w-6" strokeWidth={1.4} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D9B98B]">
                        Serviço 0{index + 1}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-white">
                        {servico.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 text-xs font-semibold text-[#FAF0E1]">
                    {servico.shortDesc}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-[#A6B0A8] sm:text-sm">
                    {servico.fullDesc}
                  </p>

                  <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {servico.items.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D9B98B]" />
                        <span className="text-xs text-[#E6DDD0]">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Button variant="gold" onClick={onOpenBooking}>
                      Personalizar Para Minha Festa <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>

                <div
                  className={`flex flex-col justify-center rounded-2xl bg-[#1A221E] p-8 border border-[#D9B98B]/20 lg:col-span-5 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Sparkles className="h-8 w-8 text-[#D9B98B]" />
                  <h4 className="mt-4 font-serif text-lg font-bold text-white">
                    Padrão de Noite Eterna
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#A6B0A8]">
                    Cada celebração conta com um coordenador sênior exclusivo que acompanha presencialmente desde a primeira descarga de som até o encerramento da pista de dança.
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-[#D9B98B]/15 pt-4 text-xs font-semibold text-[#D9B98B]">
                    <ShieldCheck className="h-4 w-4" /> Isolamento Acústico & Gerador Próprio 500kVA
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Como Trabalhamos Passo a Passo */}
      <section className="bg-[#0F1412] px-6 py-20 border-y border-[#D9B98B]/15">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <Eyebrow>PLANEJAMENTO DA FESTA</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
              Do Primeiro Conceito ao Amanhecer
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-xs text-[#A6B0A8] sm:text-sm">
              Um cronograma dinâmico desenhado para que a festa nunca perca a intensidade.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((st) => (
              <motion.div
                key={st.step}
                whileHover={{ y: -6 }}
                className="rounded-2xl bg-[#151D19] p-6 shadow-md border border-[#D9B98B]/15"
              >
                <span className="font-serif text-3xl font-bold text-[#D9B98B]/60">{st.step}</span>
                <h4 className="mt-3 font-serif text-base font-bold text-white">{st.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-[#A6B0A8]">{st.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="text-center">
          <Eyebrow>DÚVIDAS FREQUENTES</Eyebrow>
          <h2 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
            Perguntas & Respostas
          </h2>
          <p className="mt-2 text-xs text-[#A6B0A8]">
            Tudo o que você precisa saber para planejar sua grande festa com tranquilidade.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl bg-[#141A17] shadow-sm border border-[#D9B98B]/15"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm font-semibold text-white transition-colors hover:bg-white/5"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-[#D9B98B] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-[#D9B98B]/15 bg-[#18201C] p-5 text-xs leading-relaxed text-[#A6B0A8]"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
