import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Logo } from "./SharedUI";

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const Instagram = ({ className }: { className?: string }) => (
  <svg {...svgProps} className={className} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" />
  </svg>
);

const Facebook = ({ className }: { className?: string }) => (
  <svg {...svgProps} className={className} aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Youtube = ({ className }: { className?: string }) => (
  <svg {...svgProps} className={className} aria-hidden="true">
    <path d="M2.5 17a24.1 24.1 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer = ({ onOpenBooking }: FooterProps) => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#FAF8F5] px-6 pt-16 text-[#2C3B32] border-t border-[#eae3d5]">
      <div className="mx-auto grid max-w-7xl gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 text-xs leading-relaxed text-[#6b716c]">
            O salão de festas e espaço de eventos de alto padrão que transforma casamentos, 15 anos, formaturas e celebrações corporativas em obras de arte.
          </p>
          <div className="mt-5">
            <button
              onClick={onOpenBooking}
              className="text-xs font-semibold text-[#A8845B] hover:underline"
            >
              → Agendar visita guiada com degustação
            </button>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-sm font-bold text-[#1A2421]">Páginas & Áreas</h4>
          <ul className="mt-4 space-y-2.5 text-xs text-[#6b716c]">
            <li>
              <Link to="/" className="transition-colors hover:text-[#A8845B]">
                Início
              </Link>
            </li>
            <li>
              <Link to="/salao" className="transition-colors hover:text-[#A8845B]">
                O Salão de Festas (Tour & Fotos)
              </Link>
            </li>
            <li>
              <Link to="/servicos" className="transition-colors hover:text-[#A8845B]">
                Serviços & Assessoria
              </Link>
            </li>
            <li>
              <Link to="/decoracao" className="transition-colors hover:text-[#A8845B]">
                Decorações & Cenografia
              </Link>
            </li>
            <li>
              <Link to="/buffet" className="transition-colors hover:text-[#A8845B]">
                Buffet & Alta Gastronomia
              </Link>
            </li>
            <li>
              <Link to="/contato" className="transition-colors hover:text-[#A8845B]">
                Contato & Localização
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-sm font-bold text-[#1A2421]">Atendimento & Endereço</h4>
          <ul className="mt-4 space-y-3 text-xs text-[#6b716c]">
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-[#A8845B]" /> +55 (11) 98765-4321
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 text-[#A8845B]" /> contato@eternaeventos.com.br
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 text-[#A8845B]" /> Av. Europa, 1200 — Jardins, São Paulo - SP
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Facebook, label: "Facebook" },
              { icon: Youtube, label: "YouTube" },
            ].map(({ icon: Icon, label }) => (
              <motion.a
                key={label}
                href="#"
                whileHover={{ scale: 1.1 }}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1A2421] text-white transition-colors hover:bg-[#A8845B]"
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-serif text-sm font-bold text-[#1A2421]">Informativo VIP</h4>
          <p className="mt-4 text-xs leading-relaxed text-[#6b716c]">
            Receba tendências de alta gastronomia, tendências de cenografia e datas especiais disponíveis.
          </p>
          <form onSubmit={handleNewsletter} className="mt-4">
            <div className="flex overflow-hidden rounded-full border border-[#d9cfc2] bg-white shadow-xs">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="min-w-0 flex-1 px-4 py-2.5 text-xs outline-none"
              />
              <button
                type="submit"
                className="bg-[#1A2421] px-4 text-white transition-colors hover:bg-[#A8845B]"
                aria-label="Inscrever-se"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            {subscribed && (
              <p className="mt-2 text-[11px] font-semibold text-emerald-700">
                Inscrição confirmada com sucesso!
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-[#eadfce] py-6 text-xs text-[#6b716c] sm:flex-row">
        <p>© 2026 ETERNA Espaço & Eventos de Luxo. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#A8845B]">
            Política de Privacidade
          </a>
          <a href="#" className="hover:text-[#A8845B]">
            Termos & Condições
          </a>
        </div>
      </div>
    </footer>
  );
};
