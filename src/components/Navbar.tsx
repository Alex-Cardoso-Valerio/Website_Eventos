import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { Logo, Button } from "./SharedUI";

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar = ({ onOpenBooking }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "Início", path: "/" },
    { label: "O Salão", path: "/salao" },
    { label: "Serviços", path: "/servicos" },
    { label: "Decoração", path: "/decoracao" },
    { label: "Buffet & Bar", path: "/buffet" },
    { label: "Contato", path: "/contato" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0B0E0D]/90 backdrop-blur-md transition-all duration-300 border-b border-[#D9B98B]/15">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        <ul className="hidden items-center gap-7 text-xs font-medium text-[#C8D1CB] lg:flex">
          {links.map((link) => {
            const active = isActive(link.path);
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative py-1.5 transition-colors hover:text-[#D9B98B] ${
                    active ? "text-[#D9B98B] font-bold" : "text-[#A6B0A8]"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 h-[2px] w-full bg-[#D9B98B] shadow-sm shadow-[#D9B98B]/50"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button variant="gold" onClick={onOpenBooking}>
            <Sparkles className="h-3.5 w-3.5" /> Agendar Visita VIP
          </Button>
        </div>

        <button
          className="rounded-xl p-2 text-white lg:hidden hover:bg-white/10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Menu Mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-[#D9B98B]/15 bg-[#0F1412] px-6 py-5 lg:hidden"
          >
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-sm font-medium ${
                      isActive(link.path)
                        ? "text-[#D9B98B] font-bold"
                        : "text-[#C8D1CB] hover:text-[#D9B98B]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 border-t border-[#D9B98B]/15 pt-4">
              <Button
                variant="gold"
                className="w-full justify-center"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenBooking();
                }}
              >
                Agendar Visita ao Salão <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
