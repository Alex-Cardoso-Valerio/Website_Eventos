import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
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
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md transition-all duration-300 border-b border-[#eae3d5]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        <ul className="hidden items-center gap-7 text-xs font-medium text-[#2C3B32] lg:flex">
          {links.map((link) => {
            const active = isActive(link.path);
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative py-1.5 transition-colors hover:text-[#A8845B] ${
                    active ? "text-[#1A2421] font-bold" : "text-[#5b625d]"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 h-[2px] w-full bg-[#1A2421]"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button variant="dark" onClick={onOpenBooking}>
            Agendar Visita <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>

        <button
          className="rounded-xl p-2 text-[#1A2421] lg:hidden hover:bg-[#F6EFE7]"
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
            className="overflow-hidden border-t border-[#eadfce] bg-[#FAF8F5] px-6 py-5 lg:hidden"
          >
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-sm font-medium ${
                      isActive(link.path)
                        ? "text-[#1A2421] font-bold"
                        : "text-[#2C3B32] hover:text-[#A8845B]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 border-t border-[#eadfce] pt-4">
              <Button
                variant="dark"
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
