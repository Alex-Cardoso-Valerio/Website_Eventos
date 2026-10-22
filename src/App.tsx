import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { BookingModal } from "./components/BookingModal";
import { HomePage } from "./pages/HomePage";
import { SalaoPage } from "./pages/SalaoPage";
import { ServicosPage } from "./pages/ServicosPage";
import { DecoracaoPage } from "./pages/DecoracaoPage";
import { BuffetPage } from "./pages/BuffetPage";
import { ContatoPage } from "./pages/ContatoPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleOpenBooking = () => setBookingOpen(true);
  const handleCloseBooking = () => setBookingOpen(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-[#0B0E0D] font-sans text-[#F5EFE6] antialiased selection:bg-[#D9B98B] selection:text-[#0B0E0D]">
        <BookingModal isOpen={bookingOpen} onClose={handleCloseBooking} />
        <Navbar onOpenBooking={handleOpenBooking} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
            <Route path="/salao" element={<SalaoPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/servicos" element={<ServicosPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/decoracao" element={<DecoracaoPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/buffet" element={<BuffetPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/contato" element={<ContatoPage />} />
            <Route path="*" element={<HomePage onOpenBooking={handleOpenBooking} />} />
          </Routes>
        </main>
        <Footer onOpenBooking={handleOpenBooking} />
      </div>
    </BrowserRouter>
  );
}
