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
    <div className="bg-[#FAF8F5]">
      <PageHero
        badge="ATENDIMENTO PERSONALIZADO"
        title="Fale Conosco"
        highlight="Agende Sua Visita Exclusiva"
        description="Venha conhecer pessoalmente o salão, caminhar pelos jardins e conversar com nossos consultores de eventos e chefs executivos."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Informações de Contato */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <Eyebrow>LOCALIZAÇÃO NOBRE</Eyebrow>
              <h2 className="mt-2 font-serif text-3xl font-bold text-[#1A2421]">
                Um Refúgio Sofisticado no Coração dos Jardins
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-[#5b625d] sm:text-sm">
                Fácil acesso pelas principais vias da cidade com serviço de valet privativo e port-cochère coberto.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-xs border border-[#eae3d5]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F6EFE7] text-[#A8845B]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#1A2421]">Endereço</h4>
                  <p className="mt-1 text-xs text-[#6b716c]">
                    Av. Europa, 1200 — Jardins, São Paulo - SP
                  </p>
                  <p className="text-[11px] text-[#A8845B]">Estacionamento com Valet no local</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-xs border border-[#eae3d5]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F6EFE7] text-[#A8845B]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#1A2421]">Telefones & WhatsApp</h4>
                  <p className="mt-1 text-xs text-[#6b716c]">+55 (11) 98765-4321 (WhatsApp Concierge)</p>
                  <p className="text-xs text-[#6b716c]">+55 (11) 3088-0000 (Central de Eventos)</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-xs border border-[#eae3d5]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F6EFE7] text-[#A8845B]">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#1A2421]">Horários de Visitas Guiadas</h4>
                  <p className="mt-1 text-xs text-[#6b716c]">Terça a Sexta: 09h às 20h</p>
                  <p className="text-xs text-[#6b716c]">Sábados e Domingos: 10h às 18h (mediante agendamento)</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-[#1A2421] p-6 text-white shadow-lg">
              <h4 className="font-serif text-lg font-bold">Atendimento Imediato via WhatsApp</h4>
              <p className="mt-1 text-xs text-white/70">
                Fale agora com nossa equipe para verificar disponibilidade de datas em tempo real.
              </p>
              <a
                href="https://wa.me/5511987654321"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#D9B98B] px-5 py-2.5 text-xs font-bold text-[#1A2421] transition-transform hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" /> Conversar no WhatsApp
              </a>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-8 shadow-sm border border-[#eae3d5] md:p-10">
              <Eyebrow>PROPOSTA PERSONALIZADA</Eyebrow>
              <h3 className="mt-2 font-serif text-2xl font-bold text-[#1A2421]">
                Envie Sua Mensagem ou Solicitação
              </h3>
              <p className="mt-1 text-xs text-[#6b716c]">
                Retornamos em até 2 horas úteis com apresentação e estimativas de datas.
              </p>

              {submitted ? (
                <div className="py-16 text-center">
                  <CheckCircle2 className="mx-auto h-16 w-16 text-[#A8845B]" />
                  <h4 className="mt-4 font-serif text-2xl font-bold text-[#1A2421]">
                    Mensagem Recebida com Sucesso!
                  </h4>
                  <p className="mt-2 text-sm text-[#6b716c]">
                    Nossa equipe de concierge entrará em contato para agendar sua visita e apresentar os orçamentos.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-[#2C3B32]">Seu Nome</label>
                      <input
                        required
                        type="text"
                        placeholder="Nome e Sobrenome"
                        className="mt-1 w-full rounded-xl border border-[#d9cfc2] bg-[#FAF8F5] px-4 py-2.5 text-xs outline-none focus:border-[#A8845B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#2C3B32]">E-mail</label>
                      <input
                        required
                        type="email"
                        placeholder="seuemail@exemplo.com"
                        className="mt-1 w-full rounded-xl border border-[#d9cfc2] bg-[#FAF8F5] px-4 py-2.5 text-xs outline-none focus:border-[#A8845B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-[#2C3B32]">WhatsApp / Celular</label>
                      <input
                        required
                        type="tel"
                        placeholder="(11) 98765-4321"
                        className="mt-1 w-full rounded-xl border border-[#d9cfc2] bg-[#FAF8F5] px-4 py-2.5 text-xs outline-none focus:border-[#A8845B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#2C3B32]">Tipo de Evento</label>
                      <select
                        className="mt-1 w-full rounded-xl border border-[#d9cfc2] bg-[#FAF8F5] px-4 py-2.5 text-xs outline-none focus:border-[#A8845B]"
                      >
                        <option>Casamento</option>
                        <option>Festa de 15 Anos</option>
                        <option>Baile de Formatura</option>
                        <option>Aniversário VIP</option>
                        <option>Evento Corporativo</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-[#2C3B32]">Data Pretendida</label>
                      <input
                        type="text"
                        placeholder="Mês e Ano"
                        className="mt-1 w-full rounded-xl border border-[#d9cfc2] bg-[#FAF8F5] px-4 py-2.5 text-xs outline-none focus:border-[#A8845B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#2C3B32]">Número Estimado de Convidados</label>
                      <input
                        type="text"
                        placeholder="Ex: 300 pessoas"
                        className="mt-1 w-full rounded-xl border border-[#d9cfc2] bg-[#FAF8F5] px-4 py-2.5 text-xs outline-none focus:border-[#A8845B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2C3B32]">Como podemos ajudar?</label>
                    <textarea
                      rows={3}
                      placeholder="Conte-nos os detalhes que gostaria de ver em seu evento..."
                      className="mt-1 w-full rounded-xl border border-[#d9cfc2] bg-[#FAF8F5] px-4 py-2.5 text-xs outline-none focus:border-[#A8845B]"
                    />
                  </div>

                  <Button variant="dark" className="w-full justify-center">
                    Enviar Solicitação de Orçamento <Send className="h-4 w-4" />
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
