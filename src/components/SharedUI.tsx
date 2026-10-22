import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const Button = ({
  children,
  variant = "gold",
  className = "",
  onClick,
  to,
}: {
  children: ReactNode;
  variant?: "dark" | "light" | "gold";
  className?: string;
  onClick?: () => void;
  to?: string;
}) => {
  const styles = {
    gold: "bg-gradient-to-r from-[#D9B98B] via-[#E8CBA3] to-[#C5A06B] text-[#0B0E0D] font-bold shadow-lg shadow-[#D9B98B]/20 hover:brightness-110 border border-[#FAF0E1]/40",
    dark: "bg-[#161D1A] text-[#F5EFE6] border border-[#D9B98B]/30 hover:bg-[#202A26] hover:border-[#D9B98B]/60 shadow-sm",
    light: "bg-white/10 text-[#F5EFE6] border border-white/20 hover:bg-white/20 backdrop-blur-md",
  }[variant];

  const content = (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-xs tracking-wide transition-all ${styles} ${className}`}
    >
      {children}
    </motion.button>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }

  return content;
};

export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D9B98B]">
    {children}
  </p>
);

export const Logo = ({ light = false }: { light?: boolean }) => (
  <Link to="/" className="group flex items-center gap-2.5">
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D9B98B]/20 border border-[#D9B98B]/40 transition-transform duration-300 group-hover:rotate-12 shadow-sm shadow-[#D9B98B]/20">
      <Sparkles className="h-4 w-4 text-[#D9B98B]" />
    </div>
    <span className="leading-tight">
      <span className="block font-serif text-2xl tracking-[0.16em] text-white">
        ETERNA
      </span>
      <span className="block text-[8px] uppercase tracking-[0.3em] text-[#D9B98B]">
        Espaço & Noites de Gala
      </span>
    </span>
  </Link>
);

export const PageHero = ({
  badge,
  title,
  highlight,
  description,
  actionText,
  onAction,
}: {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
}) => (
  <section className="relative overflow-hidden bg-[#0F1412] pt-14 pb-16 lg:pt-20 lg:pb-24 border-b border-[#D9B98B]/15">
    {/* Glows noturnos de fundo */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-[#D9B98B]/15 to-transparent blur-3xl pointer-events-none" />

    <div className="relative mx-auto max-w-5xl px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Eyebrow>{badge}</Eyebrow>
        <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          {title}{" "}
          <span
            style={{ fontFamily: "Alex Brush, cursive" }}
            className="block text-5xl font-normal text-[#D9B98B] sm:text-6xl md:text-7xl"
          >
            {highlight}
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#A6B0A8] sm:text-base">
          {description}
        </p>

        {actionText && onAction && (
          <div className="mt-8 flex justify-center">
            <Button variant="gold" onClick={onAction}>
              {actionText}
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  </section>
);
