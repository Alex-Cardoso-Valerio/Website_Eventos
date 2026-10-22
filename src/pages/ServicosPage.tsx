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
      title: "Reunião de Briefing & Visita",
      desc: "Entendemos a essência, o estilo e as expectativas do seu evento, além de apresentar o espaço em detalhes.",
    },
    {
      step: "02",
      title: "Planejamento & Projeto 3D",
      desc: "Nossos designers criam a planta cenográfica personalizada e a equipe de gastronomia monta o menu exclusivo.",
    },
    {
      step: "03",
      title: "Degustação VIP do Menu",
      desc: "Você e seus familiares degustam os pratos e drinks selecionados para aprovação com o nosso Chef Executivo.",
    },
    {
      step: "04",
      title: "Alinhamento & Cronograma Reverso",
      desc: "Reunião final com cerimonial e equipe técnica para alinhar minuto a minuto o roteiro da celebração.",
    },
    {
      step: "05",
      title: "O Grande Dia com Maestria",
      desc: "Nossa equipe sênior assume a coordenação e cuida de tudo para você aproveitar sem qualquer preocupação.",
    },
  ];

  const faqs = [
    {
      q: "O espaço pode ser locado com ou sem serviços inclusos?",
      a: "Oferecemos pacotes completos 'chave na mão' (Salão + Gastronomia + Decoração + Som/Luz + Cerimonial) para máxima comodidade e harmonia, mas também flexibilizamos a contratação individual de fornecedores homologados pelo nosso padrão de qualidade.",
    },
    {
      q: "Qual o horário limite para término dos eventos?",
      a: "Graças ao nosso tratamento e isolamento acústico profissional, os eventos podem se estender com música ao vivo e DJs até às 05:00 da manhã sem risco de multas ou interrupções pela vizinhança.",
    },
    {
      q: "Quantas horas de festa estão inclusas?",
      a: "Nossos pacotes padrão oferecem 6 horas de festa com tolerância adicional de 30 minutos para acolhimento dos convidados, além de 6 a 8 horas prévias liberadas para montagem dos fornecedores e produção dos anfitriões na suíte VIP.",
    },
    {
      q: "É possível agendar uma degustação antes de fechar o contrato?",
      a: "Sim! Oferecemos jantares de degustação exclusivos mediante agendamento com nossa concierge para que você sinta a experiência gastronômica antes da decisão final.",
    },
  ];

  return (
    <div className="bg-[#FAF8F5]">
      <PageHero
        badge="ASSESSORIA & PRODUÇÃO DE ELITE"
        title="Nossos Serviços"
        highlight="Planejamento Sem Preocupações"
        description="Conheça nossas soluções completas: assessoria 360°, cenografia floral sob medida, gastronomia refinada, sonorização de nível internacional e coordenação atenta a cada instante."
        actionText="Solicitar Orçamento de Serviços"
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
                className={`grid items-center gap-8 rounded-3xl bg-white p-8 shadow-xs border border-[#eae3d5] md:p-12 lg:grid-cols-12`}
              >
                <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F6EFE7] text-[#A8845B]">
                      <Icon className="h-6 w-6" strokeWidth={1.4} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#A8845B]">
                        Serviço 0{index + 1}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-[#1A2421]">
                        {servico.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 text-xs font-semibold text-[#2C3B32]">
                    {servico.shortDesc}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-[#5b625d] sm:text-sm">
                    {servico.fullDesc}
                  </p>

                  <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {servico.items.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#A8845B]" />
                        <span className="text-xs text-[#2C3B32]">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Button variant="dark" onClick={onOpenBooking}>
                      Personalizar Este Serviço <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>

                <div
                  className={`flex flex-col justify-center rounded-2xl bg-[#FAF8F5] p-8 border border-[#eae3d5] lg:col-span-5 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Sparkles className="h-8 w-8 text-[#A8845B]" />
                  <h4 className="mt-4 font-serif text-lg font-bold text-[#1A2421]">
                    Diferencial Eterna
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#6b716c]">
                    Nenhum evento é padronizado. Cada contrato conta com um gestor exclusivo que atua como seu ponto de contato direto 24/7 durante todas as etapas preparatórias.
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-[#eae3d5] pt-4 text-xs font-semibold text-[#A8845B]">
                    <ShieldCheck className="h-4 w-4" /> Qualidade Homologada & Garantia em Contrato
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Como Trabalhamos Passo a Passo */}
      <section className="bg-[#F6EFE7] px-6 py-20 border-y border-[#eae3d5]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <Eyebrow>O NOSSO PROCESSO</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-bold text-[#1A2421] sm:text-4xl">
              Como Transformamos Sonhos em Realidade
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-xs text-[#6b716c] sm:text-sm">
              Um método comprovado ao longo de 12 anos para que você viva uma experiência leve, prazerosa e segura.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((st) => (
              <motion.div
                key={st.step}
                whileHover={{ y: -6 }}
                className="rounded-2xl bg-white/80 p-6 shadow-xs border border-[#eae3d5]"
              >
                <span className="font-serif text-3xl font-bold text-[#A8845B]/60">{st.step}</span>
                <h4 className="mt-3 font-serif text-base font-bold text-[#1A2421]">{st.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-[#6b716c]">{st.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="text-center">
          <Eyebrow>DÚVIDAS FREQUENTES</Eyebrow>
          <h2 className="mt-2 font-serif text-3xl font-bold text-[#1A2421] sm:text-4xl">
            Perguntas & Respostas
          </h2>
          <p className="mt-2 text-xs text-[#6b716c]">
            Transparência e clareza para que você faça sua escolha com absoluta confiança.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl bg-white shadow-xs border border-[#eae3d5]"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm font-semibold text-[#1A2421] transition-colors hover:bg-[#F6EFE7]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-[#A8845B] transition-transform duration-300 ${
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
                      className="border-t border-[#eae3d5] bg-[#FAF8F5] p-5 text-xs leading-relaxed text-[#5b625d]"
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
