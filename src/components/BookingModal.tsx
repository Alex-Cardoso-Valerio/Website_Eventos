import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
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
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-[#FAF8F5] p-6 shadow-2xl md:p-8"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-2 text-[#2C3B32] transition-colors hover:bg-[#F6EFE7]"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>

            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="mx-auto h-16 w-16 text-[#A8845B]" />
                <h3 className="mt-4 font-serif text-2xl font-bold text-[#1A2421]">
                  Solicitação Enviada com Sucesso!
                </h3>
                <p className="mt-2 text-sm text-[#6b716c]">
                  Nossa concierge sênior entrará em contato em instantes para agendar sua visita guiada e degustação exclusiva.
                </p>
              </div>
            ) : (
              <div>
                <Eyebrow>EXPERIÊNCIA EXCLUSIVA</Eyebrow>
                <h3 className="mt-2 font-serif text-2xl font-bold text-[#1A2421]">
                  Agendar Visita & Degustação
                </h3>
                <p className="mt-1 text-xs text-[#6b716c]">
                  Conheça o salão de festas, conheça nossos chefs e receba um orçamento sob medida.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2C3B32]">
                      Nome Completo
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Ex: Dra. Juliana Albuquerque"
                      className="mt-1 w-full rounded-xl border border-[#d9cfc2] bg-white px-4 py-2.5 text-xs outline-none focus:border-[#A8845B]"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-[#2C3B32]">
                        WhatsApp / Celular
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="(11) 98765-4321"
                        className="mt-1 w-full rounded-xl border border-[#d9cfc2] bg-white px-4 py-2.5 text-xs outline-none focus:border-[#A8845B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#2C3B32]">
                        Tipo de Celebração
                      </label>
                      <select
                        defaultValue={defaultService}
                        className="mt-1 w-full rounded-xl border border-[#d9cfc2] bg-white px-4 py-2.5 text-xs outline-none focus:border-[#A8845B]"
                      >
                        <option value="casamento">Casamento</option>
                        <option value="15anos">Festa de 15 Anos / Debutante</option>
                        <option value="formatura">Baile de Formatura</option>
                        <option value="aniversario">Aniversário / Festa Privada</option>
                        <option value="corporativo">Evento Corporativo / Gala</option>
                        <option value="degustacao">Apenas Degustação do Buffet</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-[#2C3B32]">
                        Data Pretendida
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: 2º semestre de 2026"
                        className="mt-1 w-full rounded-xl border border-[#d9cfc2] bg-white px-4 py-2.5 text-xs outline-none focus:border-[#A8845B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#2C3B32]">
                        Estimativa de Convidados
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: 250 pessoas"
                        className="mt-1 w-full rounded-xl border border-[#d9cfc2] bg-white px-4 py-2.5 text-xs outline-none focus:border-[#A8845B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2C3B32]">
                      Interesses Especiais (Opcional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Gostaria de saber mais sobre a gastronomia, cenografia floral ou disponibilidade de datas..."
                      className="mt-1 w-full rounded-xl border border-[#d9cfc2] bg-white px-4 py-2.5 text-xs outline-none focus:border-[#A8845B]"
                    />
                  </div>

                  <Button variant="dark" className="mt-3 w-full justify-center">
                    Solicitar Proposta & Visita VIP <ArrowRight className="h-4 w-4" />
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
