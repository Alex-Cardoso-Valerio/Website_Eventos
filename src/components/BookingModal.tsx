import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button, Eyebrow } from "./SharedUI";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const BookingModal = ({
  isOpen,
  onClose,
  defaultService = "casamento",
}: BookingModalProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-[#111714] p-6 shadow-2xl border border-[#D9B98B]/30 md:p-8 text-[#F5EFE6]"
          >
            {/* Glow sutil */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-[#D9B98B]/10 rounded-full blur-2xl pointer-events-none" />

            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-2 text-[#A6B0A8] transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>

            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="mx-auto h-16 w-16 text-[#D9B98B]" />
                <h3 className="mt-4 font-serif text-2xl font-bold text-white">
                  Solicitação Enviada com Sucesso!
                </h3>
                <p className="mt-2 text-sm text-[#A6B0A8]">
                  Nossa concierge sênior entrará em contato em instantes para agendar sua visita guiada e degustação exclusiva de drinks e pratos.
                </p>
              </div>
            ) : (
              <div>
                <Eyebrow>EXPERIÊNCIA EXCLUSIVA</Eyebrow>
                <h3 className="mt-2 font-serif text-2xl font-bold text-white">
                  Agendar Visita & Orçamento VIP
                </h3>
                <p className="mt-1 text-xs text-[#A6B0A8]">
                  Conheça o salão iluminado à noite, nossa pista de dança e a alta gastronomia festiva.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#D4CEC4]">
                      Nome Completo
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Ex: Dra. Juliana Albuquerque"
                      className="mt-1 w-full rounded-xl border border-[#D9B98B]/20 bg-[#19221E] px-4 py-2.5 text-xs text-white placeholder-[#68736B] outline-none focus:border-[#D9B98B]"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-[#D4CEC4]">
                        WhatsApp / Celular
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="(11) 98765-4321"
                        className="mt-1 w-full rounded-xl border border-[#D9B98B]/20 bg-[#19221E] px-4 py-2.5 text-xs text-white placeholder-[#68736B] outline-none focus:border-[#D9B98B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#D4CEC4]">
                        Tipo de Celebração
                      </label>
                      <select
                        defaultValue={defaultService}
                        className="mt-1 w-full rounded-xl border border-[#D9B98B]/20 bg-[#19221E] px-4 py-2.5 text-xs text-white outline-none focus:border-[#D9B98B]"
                      >
                        <option value="casamento" className="bg-[#111714]">Casamento de Gala</option>
                        <option value="15anos" className="bg-[#111714]">Festa de 15 Anos / Debutante</option>
                        <option value="formatura" className="bg-[#111714]">Baile de Formatura</option>
                        <option value="aniversario" className="bg-[#111714]">Aniversário / Festa Privada</option>
                        <option value="corporativo" className="bg-[#111714]">Gala Corporativa / Confraternização</option>
                        <option value="degustacao" className="bg-[#111714]">Degustação de Menu & Bar</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-[#D4CEC4]">
                        Data Pretendida
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: 2º semestre de 2026"
                        className="mt-1 w-full rounded-xl border border-[#D9B98B]/20 bg-[#19221E] px-4 py-2.5 text-xs text-white placeholder-[#68736B] outline-none focus:border-[#D9B98B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#D4CEC4]">
                        Estimativa de Convidados
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: 300 pessoas"
                        className="mt-1 w-full rounded-xl border border-[#D9B98B]/20 bg-[#19221E] px-4 py-2.5 text-xs text-white placeholder-[#68736B] outline-none focus:border-[#D9B98B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#D4CEC4]">
                      Detalhes ou Desejos Especiais (Opcional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Gostaria de saber mais sobre atrativos de pista, mixologia ou disponibilidade de datas..."
                      className="mt-1 w-full rounded-xl border border-[#D9B98B]/20 bg-[#19221E] px-4 py-2.5 text-xs text-white placeholder-[#68736B] outline-none focus:border-[#D9B98B]"
                    />
                  </div>

                  <Button variant="gold" className="mt-3 w-full justify-center">
                    <Sparkles className="h-4 w-4" /> Solicitar Apresentação & Visita VIP
                  </Button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
