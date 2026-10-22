import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { PageHero, Button, Eyebrow } from "../components/SharedUI";

export const ContatoPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="bg-[#0B0E0D] text-[#F5EFE6]">
      <PageHero
        badge="ATENDIMENTO & VISITAS"
        title="Fale Conosco"
        highlight="Venha Conhecer a Noite Eterna"
        description="Agende uma visita noturna para ver o salão iluminado com os lustres de cristal acesos, conhecer a acústica da pista de dança e conversar com nossa equipe."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Informações de Contato */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <Eyebrow>LOCALIZAÇÃO PRIVILEGIADA</Eyebrow>
              <h2 className="mt-2 font-serif text-3xl font-bold text-white">
                No Coração Nobre dos Jardins
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-[#A6B0A8] sm:text-sm">
                Localização de prestígio e fácil acesso na Av. Europa, ponto de referência da cidade para grandes eventos e celebrações.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-2xl bg-[#141A17] p-5 shadow-sm border border-[#D9B98B]/15">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1C2622] text-[#D9B98B]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-white">Endereço</h4>
                  <p className="mt-1 text-xs text-[#A6B0A8]">
                    Av. Europa, 1200 — Jardins, São Paulo - SP
                  </p>
                  <p className="text-[11px] text-[#D9B98B]">Ponto nobre de fácil acesso para convidados e transporte</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-[#141A17] p-5 shadow-sm border border-[#D9B98B]/15">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1C2622] text-[#D9B98B]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-white">Telefones & WhatsApp</h4>
                  <p className="mt-1 text-xs text-[#A6B0A8]">+55 (11) 98765-4321 (WhatsApp Concierge)</p>
                  <p className="text-xs text-[#A6B0A8]">+55 (11) 3088-0000 (Central de Atendimento)</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-[#141A17] p-5 shadow-sm border border-[#D9B98B]/15">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1C2622] text-[#D9B98B]">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-white">Horários de Visitas Guiadas</h4>
                  <p className="mt-1 text-xs text-[#A6B0A8]">Terça a Sexta: 10h às 21h (ideal para visitas noturnas)</p>
                  <p className="text-xs text-[#A6B0A8]">Sábados: 10h às 18h (mediante agendamento prévio)</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-[#161D1A] to-[#1C2622] p-6 text-white shadow-xl border border-[#D9B98B]/20">
              <h4 className="font-serif text-lg font-bold">Atendimento Rápido via WhatsApp</h4>
              <p className="mt-1 text-xs text-[#A6B0A8]">
                Consulte disponibilidade de datas para 2026 e 2027 diretamente com nossa concierge.
              </p>
              <a
                href="https://wa.me/5511987654321"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#D9B98B] px-5 py-2.5 text-xs font-bold text-[#0B0E0D] transition-transform hover:scale-105 shadow-md shadow-[#D9B98B]/20"
              >
                <MessageCircle className="h-4 w-4" /> Conversar no WhatsApp
              </a>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#141A17] p-8 shadow-xl border border-[#D9B98B]/20 md:p-10">
              <Eyebrow>PROPOSTA PERSONALIZADA</Eyebrow>
              <h3 className="mt-2 font-serif text-2xl font-bold text-white">
                Envie Sua Mensagem
              </h3>
              <p className="mt-1 text-xs text-[#A6B0A8]">
                Nossa equipe de produção retornará com apresentação completa do espaço e estimativas.
              </p>

              {submitted ? (
                <div className="py-16 text-center">
                  <CheckCircle2 className="mx-auto h-16 w-16 text-[#D9B98B]" />
                  <h4 className="mt-4 font-serif text-2xl font-bold text-white">
                    Mensagem Recebida com Sucesso!
                  </h4>
                  <p className="mt-2 text-sm text-[#A6B0A8]">
                    Entraremos em contato para agendar sua visita ao salão e apresentar a proposta.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-[#D4CEC4]">Seu Nome</label>
                      <input
                        required
                        type="text"
                        placeholder="Nome e Sobrenome"
                        className="mt-1 w-full rounded-xl border border-[#D9B98B]/20 bg-[#1A231F] px-4 py-2.5 text-xs text-white placeholder-[#68736B] outline-none focus:border-[#D9B98B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#D4CEC4]">E-mail</label>
                      <input
                        required
                        type="email"
                        placeholder="seuemail@exemplo.com"
                        className="mt-1 w-full rounded-xl border border-[#D9B98B]/20 bg-[#1A231F] px-4 py-2.5 text-xs text-white placeholder-[#68736B] outline-none focus:border-[#D9B98B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-[#D4CEC4]">WhatsApp / Celular</label>
                      <input
                        required
                        type="tel"
                        placeholder="(11) 98765-4321"
                        className="mt-1 w-full rounded-xl border border-[#D9B98B]/20 bg-[#1A231F] px-4 py-2.5 text-xs text-white placeholder-[#68736B] outline-none focus:border-[#D9B98B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#D4CEC4]">Tipo de Evento</label>
                      <select
                        className="mt-1 w-full rounded-xl border border-[#D9B98B]/20 bg-[#1A231F] px-4 py-2.5 text-xs text-white outline-none focus:border-[#D9B98B]"
                      >
                        <option className="bg-[#111714]">Casamento de Gala</option>
                        <option className="bg-[#111714]">Festa de 15 Anos / Debutante</option>
                        <option className="bg-[#111714]">Baile de Formatura</option>
                        <option className="bg-[#111714]">Aniversário / Festa Privada</option>
                        <option className="bg-[#111714]">Evento Corporativo de Gala</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-[#D4CEC4]">Data Pretendida</label>
                      <input
                        type="text"
                        placeholder="Mês e Ano"
                        className="mt-1 w-full rounded-xl border border-[#D9B98B]/20 bg-[#1A231F] px-4 py-2.5 text-xs text-white placeholder-[#68736B] outline-none focus:border-[#D9B98B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#D4CEC4]">Número Estimado de Convidados</label>
                      <input
                        type="text"
                        placeholder="Ex: 300 pessoas"
                        className="mt-1 w-full rounded-xl border border-[#D9B98B]/20 bg-[#1A231F] px-4 py-2.5 text-xs text-white placeholder-[#68736B] outline-none focus:border-[#D9B98B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#D4CEC4]">Como podemos ajudar?</label>
                    <textarea
                      rows={3}
                      placeholder="Conte-nos o estilo de festa e atrativos que sonha ter em sua celebração..."
                      className="mt-1 w-full rounded-xl border border-[#D9B98B]/20 bg-[#1A231F] px-4 py-2.5 text-xs text-white placeholder-[#68736B] outline-none focus:border-[#D9B98B]"
                    />
                  </div>

                  <Button variant="gold" className="w-full justify-center">
                    <Sparkles className="h-4 w-4" /> Enviar Solicitação de Orçamento
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
