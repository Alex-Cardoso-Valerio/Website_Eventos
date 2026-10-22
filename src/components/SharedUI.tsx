import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Flower2 } from "lucide-react";
import { Link } from "react-router-dom";

export const Button = ({
  children,
  variant = "dark",
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
    dark: "bg-[#1A2421] text-white hover:bg-[#2C3B32] shadow-sm",
    light: "bg-white/80 text-[#2C3B32] border border-[#d9cfc2] hover:bg-white shadow-sm",
    gold: "bg-[#D9B98B] text-[#1A2421] hover:bg-[#cfa974] font-semibold shadow-md",
  }[variant];

  const content = (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-xs font-medium tracking-wide transition-all ${styles} ${className}`}
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
  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#A8845B]">
    {children}
  </p>
);

export const Logo = ({ light = false }: { light?: boolean }) => (
  <Link to="/" className="group flex items-center gap-2.5">
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#A8845B]/15 transition-transform duration-300 group-hover:rotate-12">
      <Flower2 className="h-5 w-5 text-[#A8845B]" strokeWidth={1.4} />
    </div>
    <span className="leading-tight">
      <span
        className={`block font-serif text-2xl tracking-[0.16em] ${
          light ? "text-white" : "text-[#1A2421]"
        }`}
      >
        ETERNA
      </span>
      <span className="block text-[8px] uppercase tracking-[0.3em] text-[#A8845B]">
        Espaço & Eventos de Luxo
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
  <section className="relative overflow-hidden bg-[#F6EFE7] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[#eae3d5]">
    <div className="mx-auto max-w-5xl px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Eyebrow>{badge}</Eyebrow>
        <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-[#1A2421] sm:text-5xl md:text-6xl">
          {title}{" "}
          <span
            style={{ fontFamily: "Alex Brush, cursive" }}
            className="block text-5xl font-normal text-[#A8845B] sm:text-6xl md:text-7xl"
          >
            {highlight}
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#5b625d] sm:text-base">
          {description}
        </p>

        {actionText && onAction && (
          <div className="mt-8 flex justify-center">
            <Button variant="dark" onClick={onAction}>
              {actionText}
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  </section>
);
