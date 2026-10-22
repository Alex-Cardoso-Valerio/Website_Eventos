import { useState } from "react";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Play,
  Heart,
  Flower2,
  Camera,
  Users,
  CalendarCheck,
  Gem,
  Sparkles,
  ShieldCheck,
  Palette,
  Award,
  Smile,
  Clock,
  Phone,
  Mail,
  MapPin,
  Send,
  ChevronLeft,
  ChevronRight,
  Quote,
  Menu,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ----------------------------- Mock data ----------------------------- */

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}`;

const NAV_LINKS = ["Home", "About", "Our Services", "Wedding Themes", "Gallery", "Blog", "Contact"];

const STATS: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: Heart, value: "500+", label: "Weddings Planned" },
  { icon: Clock, value: "10+", label: "Years of Experience" },
  { icon: Smile, value: "100%", label: "Client Happiness" },
];

const SERVICES: { icon: LucideIcon; title: string; subtitle: string }[] = [
  { icon: Gem, title: "Full Wedding Planning", subtitle: "End-to-end planning for a stress-free, magical celebration." },
  { icon: Flower2, title: "Theme & Design", subtitle: "Unique themes, beautiful decor, and breathtaking setups." },
  { icon: Camera, title: "Vendor Management", subtitle: "Best vendors, curated for quality and trust." },
  { icon: Users, title: "Destination Weddings", subtitle: "Magical locations, memorable experiences, anywhere in the world." },
  { icon: CalendarCheck, title: "On-Day Coordination", subtitle: "Relax and enjoy — we'll take care of the rest." },
];

const FEATURES: { icon: LucideIcon; label: string }[] = [
  { icon: Heart, label: "Personalized Approach" },
  { icon: Palette, label: "Creative Designs" },
  { icon: ShieldCheck, label: "Trusted Vendors" },
  { icon: Sparkles, label: "Stress-Free Experience" },
];

const THEMES = [
  { name: "Royal Indian", tags: "Grand • Traditional • Timeless", image: img("photo-1583939003579-730e3918a45a", 600) },
  { name: "Beach Wedding", tags: "Breezy • Romantic • Serene", image: img("photo-1519741497674-611481863552", 600) },
  { name: "Garden Party", tags: "Fresh • Elegant • Dreamy", image: img("photo-1478146896981-b80fe463b330", 600) },
  { name: "Pastel Love", tags: "Soft • Chic • Modern", image: img("photo-1469371670807-013ccf25f16a", 600) },
  { name: "Boho Chic", tags: "Free • Earthy • Beautiful", image: img("photo-1465495976277-4387d4b0b4c6", 600) },
];

const TESTIMONIALS = [
  {
    name: "Riya & Aarav",
    place: "Udaipur Wedding",
    quote: "Eterna made our dream wedding come true! Everything was so beautifully planned — from the decor to the smallest details. We just enjoyed every moment!",
    photo: img("photo-1537633552985-df8429e8048b", 300),
  },
  {
    name: "Sofia & Daniel",
    place: "Amalfi Coast Wedding",
    quote: "From the first call to the last dance, the team handled everything with grace. Our guests are still talking about it.",
    photo: img("photo-1522673607200-164d1b6ce486", 300),
  },
];

const QUICK_LINKS = ["Home", "About Us", "Our Services", "Wedding Themes", "Gallery", "Blog", "Contact"];

const CONTACTS: { icon: LucideIcon; text: string }[] = [
  { icon: Phone, text: "+91 98765 43210" },
  { icon: Mail, text: "hello@eternaevents.com" },
  { icon: MapPin, text: "New Delhi, India" },
];

type IconProps = { className?: string };

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const Instagram = ({ className }: IconProps) => (
  <svg {...svgProps} className={className} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" />
  </svg>
);

const Facebook = ({ className }: IconProps) => (
  <svg {...svgProps} className={className} aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Youtube = ({ className }: IconProps) => (
  <svg {...svgProps} className={className} aria-hidden="true">
    <path d="M2.5 17a24.1 24.1 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const SOCIALS: { icon: (p: IconProps) => ReactNode; label: string }[] = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Youtube, label: "YouTube" },
];

const IMAGES = {
  hero: img("photo-1519225421980-715cb0215aed", 1400),
  about: img("photo-1510076857177-7470076d4098", 1400),
  cta: img("photo-1606216794074-735e91aa2c92", 1600),
};

/* --------------------------- Shared components --------------------------- */

const Button = ({
  children,
  variant = "dark",
  className = "",
}: {
  children: ReactNode;
  variant?: "dark" | "light" | "gold";
  className?: string;
}) => {
  const styles = {
    dark: "bg-[#1A2421] text-white hover:bg-[#2C3B32]",
    light: "bg-white/70 text-[#2C3B32] border border-[#d9cfc2] hover:bg-white",
    gold: "bg-[#D9B98B] text-[#1A2421] hover:bg-[#cfa974]",
  }[variant];
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-xs font-medium tracking-wide transition-colors ${styles} ${className}`}
    >
      {children}
    </button>
  );
};

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#A8845B]">{children}</p>
);

const Logo = ({ light = false }: { light?: boolean }) => (
  <a href="#home" className="flex items-center gap-2">
    <Flower2 className="h-7 w-7 text-[#A8845B]" strokeWidth={1.2} />
    <span className="leading-none">
      <span className={`block font-serif text-xl tracking-[0.15em] ${light ? "text-white" : "text-[#1A2421]"}`}>ETERNA</span>
      <span className="block text-[8px] uppercase tracking-[0.25em] text-[#A8845B]">Weddings & Beyond</span>
    </span>
  </a>
);

/* ------------------------------- Sections ------------------------------- */

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />
        <ul className="hidden items-center gap-7 text-xs text-[#2C3B32] lg:flex">
          {NAV_LINKS.map((l, i) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
                className={`pb-1 hover:text-[#A8845B] ${i === 0 ? "border-b border-[#2C3B32]" : ""}`}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <Button className="hidden lg:inline-flex rounded-full">
          Plan Your Dream Wedding <ArrowRight className="h-3.5 w-3.5" />
        </Button>
        <button className="lg:hidden text-[#1A2421]" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="space-y-3 border-t border-[#eadfce] px-6 py-4 lg:hidden">
          {NAV_LINKS.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s/g, "-")}`} className="block text-sm text-[#2C3B32]">
              {l}
            </a>
          ))}
          <Button className="w-full rounded-full">Plan Your Dream Wedding</Button>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section id="home" className="relative overflow-hidden bg-[#F6EFE7]">
    <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 lg:grid-cols-2 lg:py-16">
      <div className="order-2 lg:order-1">
        <Eyebrow>Let's turn your</Eyebrow>
        <h1 className="mt-4 font-serif text-5xl leading-tight text-[#1A2421] md:text-6xl">
          Dream Day
          <span className="mt-1 block font-serif text-4xl italic text-[#2C3B32] md:text-5xl">Into a Timeless Story</span>
        </h1>
        <p className="mt-5 text-sm font-medium text-[#2C3B32]">Beautifully planned. Perfectly you.</p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-[#5b625d]">
          At Eterna, we don't just plan weddings, we create unforgettable experiences filled with love, beauty and
          meaningful moments.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button>
            Plan Your Wedding <ArrowRight className="h-3.5 w-3.5" />
          </Button>
          <Button variant="light">
            View Our Work <Play className="h-3.5 w-3.5 rounded-full border border-[#2C3B32] p-0.5" />
          </Button>
        </div>
        <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon className="h-7 w-7 text-[#A8845B]" strokeWidth={1.2} />
              <div>
                <dt className="font-serif text-xl text-[#1A2421]">{value}</dt>
                <dd className="text-[11px] text-[#6b716c]">{label}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
      <div className="relative order-1 lg:order-2">
        <img src={IMAGES.hero} alt="Couple on their wedding day" className="h-80 w-full rounded-2xl object-cover shadow-xl md:h-[28rem]" />
        <div className="absolute inset-y-0 right-0 hidden items-center rounded-r-2xl bg-gradient-to-l from-black/40 to-transparent p-8 md:flex">
          <p className="max-w-[10rem] font-serif text-2xl leading-snug text-white">Your Love Story Deserves Something Extraordinary</p>
        </div>
      </div>
    </div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, subtitle }: { icon: LucideIcon; title: string; subtitle: string }) => (
  <article className="rounded-xl bg-white/70 p-6 text-center shadow-sm transition-shadow hover:shadow-md">
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F6EFE7]">
      <Icon className="h-6 w-6 text-[#A8845B]" strokeWidth={1.2} />
    </div>
    <h3 className="mt-4 text-sm font-semibold text-[#1A2421]">{title}</h3>
    <p className="mt-2 text-xs leading-relaxed text-[#6b716c]">{subtitle}</p>
  </article>
);

const Services = () => (
  <section id="our-services" className="bg-[#FAF8F5] px-6 py-16">
    <div className="mx-auto max-w-7xl">
      <div className="text-center">
        <Eyebrow>— What we do —</Eyebrow>
        <h2 className="mt-3 font-serif text-3xl text-[#1A2421] md:text-4xl">Our Wedding Planning Services</h2>
        <p className="mt-3 text-xs text-[#6b716c]">
          From the first idea to the final "I do" — we handle every detail with love and care.
        </p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {SERVICES.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="grid bg-[#F6EFE7] lg:grid-cols-2">
    <img src={IMAGES.about} alt="Wedding arch by the lake" className="h-72 w-full object-cover lg:h-full lg:min-h-[26rem]" />
    <div className="flex flex-col justify-center px-6 py-12 lg:px-16">
      <Eyebrow>About Eterna</Eyebrow>
      <h2 className="mt-3 font-serif text-3xl leading-tight text-[#1A2421] md:text-4xl">
        More Than Planners, We're Your Wedding Partners
      </h2>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#5b625d]">
        We believe every love story is unique, and so should be every wedding. At Eterna, we blend creativity,
        tradition, and flawless execution to create celebrations that feel like you — elegant, intimate, and
        unforgettable.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {FEATURES.map(({ icon: Icon, label }) => (
          <div key={label} className="text-center">
            <Icon className="mx-auto h-6 w-6 text-[#A8845B]" strokeWidth={1.2} />
            <p className="mt-2 text-[11px] text-[#2C3B32]">{label}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Button>
          Our Story <ArrowRight className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  </section>
);

const ThemeCard = ({ name, tags, image }: { name: string; tags: string; image: string }) => (
  <article className="group">
    <div className="overflow-hidden rounded-lg">
      <img src={image} alt={name} className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
    </div>
    <h3 className="mt-3 text-center text-xs font-semibold text-[#1A2421]">{name}</h3>
    <p className="mt-1 text-center text-[10px] text-[#6b716c]">{tags}</p>
  </article>
);

const Themes = () => (
  <section id="wedding-themes" className="bg-[#FAF8F5] px-6 py-16">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <Eyebrow>Wedding Themes</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl text-[#1A2421] md:text-4xl">Themes That Speak Your Style</h2>
          <p className="mt-2 text-xs text-[#6b716c]">From royal traditions to modern elegance — discover a theme that feels like you.</p>
        </div>
        <a href="#gallery" className="inline-flex items-center gap-1 text-xs text-[#2C3B32] hover:text-[#A8845B]">
          View All Themes <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {THEMES.map((t) => (
          <ThemeCard key={t.name} {...t} />
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];
  const go = (d: number) => setIndex((index + d + TESTIMONIALS.length) % TESTIMONIALS.length);
  return (
    <section id="gallery" className="bg-[#F6EFE7] px-6 py-14">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_2fr_1fr]">
        <div>
          <h2 className="font-serif text-3xl leading-tight text-[#1A2421]">
            Real Stories
            <br />
            Beautiful Memories
          </h2>
          <p className="mt-3 text-xs text-[#6b716c]">Nothing makes us happier than our couples' smiles.</p>
          <div className="mt-5">
            <Button>
              Read More Stories <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>

        <figure className="flex flex-col items-center gap-5 rounded-2xl bg-white/70 p-6 shadow-sm sm:flex-row">
          <img src={t.photo} alt={t.name} className="h-24 w-24 shrink-0 rounded-full object-cover" />
          <div>
            <Quote className="h-6 w-6 text-[#A8845B]" />
            <blockquote className="mt-2 text-sm leading-relaxed text-[#2C3B32]">{t.quote}</blockquote>
            <figcaption className="mt-3 flex items-center justify-between">
              <span>
                <span className="block text-xs font-semibold text-[#1A2421]">— {t.name}</span>
                <span className="block text-[11px] text-[#6b716c]">{t.place}</span>
              </span>
              <span className="flex gap-2">
                <button onClick={() => go(-1)} aria-label="Previous" className="rounded-full border border-[#d9cfc2] p-1.5 text-[#2C3B32] hover:bg-[#F6EFE7]">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button onClick={() => go(1)} aria-label="Next" className="rounded-full border border-[#d9cfc2] p-1.5 text-[#2C3B32] hover:bg-[#F6EFE7]">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </span>
            </figcaption>
          </div>
        </figure>

        <div className="hidden items-center justify-center gap-3 lg:flex">
          <Award className="h-10 w-10 text-[#A8845B]" strokeWidth={1} />
          <p className="font-serif text-xl italic text-[#A8845B]">Better Together</p>
        </div>
      </div>
    </section>
  );
};

const BottomCTA = () => (
  <section className="relative overflow-hidden bg-[#1A2421]">
    <img src={IMAGES.cta} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
    <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center">
      <div>
        <h2 className="font-serif text-3xl leading-tight text-white md:text-4xl">
          Your Dream Wedding
          <br />
          Starts Here
        </h2>
        <p className="mt-3 text-xs text-white/70">Let's create a celebration you'll cherish forever.</p>
        <div className="mt-6">
          <Button variant="gold">
            Plan Your Wedding <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
      <p className="font-serif text-2xl italic text-[#D9B98B]">Together is a beautiful place to be</p>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-[#FAF8F5] px-6 pt-12 text-[#2C3B32]">
    <div className="mx-auto grid max-w-7xl gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <Logo />
        <p className="mt-4 text-xs text-[#6b716c]">Beautiful Weddings. Lasting Memories.</p>
      </div>
      <div>
        <h4 className="text-sm font-semibold">Quick Links</h4>
        <ul className="mt-4 space-y-2 text-xs text-[#6b716c]">
          {QUICK_LINKS.map((l) => (
            <li key={l}>
              <a href="#" className="hover:text-[#A8845B]">{l}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold">Get In Touch</h4>
        <ul className="mt-4 space-y-3 text-xs text-[#6b716c]">
          {CONTACTS.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-2">
              <Icon className="h-3.5 w-3.5 text-[#1A2421]" /> {text}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex gap-3">
          {SOCIALS.map(({ icon: Icon, label }) => (
            <a key={label} href="#" aria-label={label} className="rounded-full bg-[#1A2421] p-2 text-white hover:bg-[#2C3B32]">
              <Icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
      <div>
        <h4 className="text-sm font-semibold">Stay Inspired</h4>
        <p className="mt-4 text-xs text-[#6b716c]">Subscribe to our newsletter for wedding tips, ideas and latest updates.</p>
        <form className="mt-4 flex overflow-hidden rounded-md border border-[#d9cfc2] bg-white" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email" className="min-w-0 flex-1 px-3 py-2 text-xs outline-none" />
          <button className="bg-[#1A2421] px-3 text-white hover:bg-[#2C3B32]" aria-label="Subscribe">
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
    <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 border-t border-[#eadfce] py-5 text-[11px] text-[#6b716c] sm:flex-row">
      <p>© 2024 Eterna Weddings & Beyond. All Rights Reserved.</p>
      <p className="space-x-6">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
      </p>
    </div>
  </footer>
);

/* --------------------------------- App --------------------------------- */

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] font-sans text-[#2C3B32] antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Themes />
        <Testimonials />
      </main>
      <BottomCTA />
      <Footer />
    </div>
  );
}
