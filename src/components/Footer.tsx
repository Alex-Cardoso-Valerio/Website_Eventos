import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Sparkles } from "lucide-react";
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
    <footer className="bg-[#070A09] px-6 pt-16 text-[#F5EFE6] border-t border-[#D9B98B]/15">
      <div className="mx-auto grid max-w-7xl gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 text-xs leading-relaxed text-[#A6B0A8]">
            O salão nobre de celebrações noturnas que transforma casamentos de gala, 15 anos marcantes, formaturas e celebrações corporativas em noites memoráveis.
          </p>
          <div className="mt-5">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D9B98B] hover:underline"
            >
              <Sparkles className="h-3 w-3" /> Agendar visita e degustação noturna
            </button>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-sm font-bold text-white tracking-wide">Páginas & Áreas</h4>
          <ul className="mt-4 space-y-2.5 text-xs text-[#A6B0A8]">
            <li>
              <Link to="/" className="transition-colors hover:text-[#D9B98B]">
                Início
              </Link>
            </li>
            <li>
              <Link to="/salao" className="transition-colors hover:text-[#D9B98B]">
                O Salão & Pista de Dança
              </Link>
            </li>
            <li>
              <Link to="/servicos" className="transition-colors hover:text-[#D9B98B]">
                Serviços & Produção
              </Link>
            </li>
            <li>
              <Link to="/decoracao" className="transition-colors hover:text-[#D9B98B]">
                Cenografia & Iluminação
              </Link>
            </li>
            <li>
              <Link to="/buffet" className="transition-colors hover:text-[#D9B98B]">
                Gastronomia & Bar de Drinks
              </Link>
            </li>
            <li>
              <Link to="/contato" className="transition-colors hover:text-[#D9B98B]">
                Contato & Visitas
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-sm font-bold text-white tracking-wide">Atendimento & Localização</h4>
          <ul className="mt-4 space-y-3 text-xs text-[#A6B0A8]">
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-[#D9B98B]" /> +55 (11) 98765-4321
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 text-[#D9B98B]" /> contato@eternaeventos.com.br
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 text-[#D9B98B]" /> Av. Europa, 1200 — Jardins, São Paulo - SP
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
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#161D1A] text-[#D9B98B] border border-[#D9B98B]/30 transition-colors hover:bg-[#D9B98B] hover:text-[#0B0E0D]"
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-serif text-sm font-bold text-white tracking-wide">Informativo VIP</h4>
          <p className="mt-4 text-xs leading-relaxed text-[#A6B0A8]">
            Receba tendências de coquetelaria, iluminação cênica de pista e datas especiais disponíveis.
          </p>
          <form onSubmit={handleNewsletter} className="mt-4">
            <div className="flex overflow-hidden rounded-full border border-[#D9B98B]/30 bg-[#161D1A] shadow-xs">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="min-w-0 flex-1 px-4 py-2.5 text-xs text-white placeholder-[#68736B] outline-none"
              />
              <button
                type="submit"
                className="bg-[#D9B98B] px-4 text-[#0B0E0D] font-bold transition-colors hover:bg-[#E8CBA3]"
                aria-label="Inscrever-se"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            {subscribed && (
              <p className="mt-2 text-[11px] font-semibold text-[#D9B98B]">
                Inscrição confirmada com sucesso!
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-[#D9B98B]/10 py-6 text-xs text-[#A6B0A8] sm:flex-row">
        <p>© 2026 ETERNA Espaço & Noites de Gala. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#D9B98B]">
            Política de Privacidade
          </a>
          <a href="#" className="hover:text-[#D9B98B]">
            Termos & Condições
          </a>
        </div>
      </div>
    </footer>
  );
};
