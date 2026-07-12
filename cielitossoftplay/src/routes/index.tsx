import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const BOOKING_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeWfluaqx55kcap5FvY3EqaeQ7D_YewBhVmQ_alrw3YNVaWZw/viewform";
const HERO_IMG = "/setup_pic.webp";
const ABOUT_IMG = "/fernyandstep.webp";

const GALLERY = [
  "/setup1.webp",
  "/setup_pic.webp",
  "/setup2.webp",
  "/setup3.webp",
  "/setup4.webp",
];

const primary = "#576f3b";
const primaryContainer = "#a3b18a";
const surfaceLow = "#f6f3f2";
const surfaceVariant = "#e4e2e1";
const secondaryFixed = "#e5e3d7";
const onSurfaceVariant = "#45483f";
const onSurface = "#1b1c1c";
const surfaceHigh = "#eae8e7";

type Pkg = {
  name: string;
  price: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

type Lang = "en" | "es";

type Translations = {
  nav: { packages: string; about: string; rules: string; bookNow: string };
  hero: { badge: string; title: string; subtitle: string; bookBtn: string; viewBtn: string };
  about: { title: string; p1: string; p2: string };
  packages: { title: string; subtitle: string; mostPopular: string };
  rules: { title: string; supervision: string };
  gallery: { title: string };
  footer: { tagline: string; contact: string; bookingTerms: string; dm: string; credit: string };
  pkg: {
    standard: { name: string; features: string[]; cta: string };
    gold: { name: string; features: string[]; cta: string };
    premium: { name: string; features: string[]; cta: string };
  };
  rulesList: { icon: string; text: string }[];
};

const EN: Translations = {
  nav: { packages: "Packages", about: "About", rules: "Rules", bookNow: "Book Now" },
  hero: {
    badge: "Ages 1-5",
    title: "Luxury Soft Play for Your Little Ones",
    subtitle: "Perfect for any party or wedding. Serving Los Angeles and the San Fernando Valley with elevated, clean, and safe play spaces.",
    bookBtn: "Book Your Date",
    viewBtn: "View Packages",
  },
  about: {
    title: "About Us",
    p1: "At Cielito Softplay, we believe every child deserves a fun and safe place to play. As a husband and wife team and proud parents of twins, we created our business with one goal in mind: to provide clean, safe, and beautifully designed soft play experiences for little ones.",
    p2: "We're passionate about helping families create unforgettable memories while giving parents peace of mind. Thank you for letting Cielito Softplay be part of your special moments!",
  },
  packages: { title: "Our Packages", subtitle: "Curated setups for unforgettable celebrations.", mostPopular: "Most Popular" },
  rules: { title: "Rules of Play", supervision: "Adult supervision at ALL times" },
  gallery: { title: "Follow the Fun" },
  footer: {
    tagline: "Elevated celebrations for your little ones.",
    contact: "Contact",
    bookingTerms: "Booking Terms",
    dm: "DM to Book on Instagram",
    credit: '© 2026 Cielito Soft Play. All rights reserved. Made by Alex "the goat" Sanchez',
  },
  pkg: {
    standard: {
      name: "Standard Package",
      features: ["Soft play mats & fencing", "Ball pit with balls", "Soft blocks & climbers"],
      cta: "Book Standard",
    },
    gold: {
      name: "Gold Package",
      features: ["Everything in Standard", "Small white bounce house", "Animal hoppers"],
      cta: "Book Gold",
    },
    premium: {
      name: "Premium Package",
      features: ["Everything in Gold", "Large slide with ball pit", "Custom vinyl decals"],
      cta: "Book Premium",
    },
  },
  rulesList: [
    { icon: "child_care", text: "Ages 1-5 ONLY" },
    { icon: "do_not_step", text: "Shoes OFF, socks ON" },
    { icon: "no_drinks", text: "NO food or drink" },
    { icon: "clean_hands", text: "NO sticky hands" },
    { icon: "brush", text: "NO face paint or glitter" },
    { icon: "cut", text: "NO sharp objects" },
  ],
};

const ES: Translations = {
  nav: { packages: "Paquetes", about: "Nosotros", rules: "Reglas", bookNow: "Reservar" },
  hero: {
    badge: "Edades 1-5",
    title: "Zona de Juego Suave de Lujo para tus Pequeños",
    subtitle: "Perfecto para cualquier fiesta o boda. Sirviendo a Los Ángeles y el Valle de San Fernando con espacios de juego elevados, limpios y seguros.",
    bookBtn: "Reserva tu Fecha",
    viewBtn: "Ver Paquetes",
  },
  about: {
    title: "Sobre Nosotros",
    p1: "En Cielito Softplay, creemos que todo niño merece un lugar divertido y seguro para jugar. Como equipo de esposo y esposa y orgullosos padres de gemelos, creamos nuestro negocio con un objetivo en mente: proporcionar experiencias de juego suave limpias, seguras y bellamente diseñadas para los más pequeños.",
    p2: "Nos apasiona ayudar a las familias a crear recuerdos inolvidables mientras brindamos tranquilidad a los padres. ¡Gracias por permitir que Cielito Softplay sea parte de sus momentos especiales!",
  },
  packages: { title: "Nuestros Paquetes", subtitle: "Configuraciones seleccionadas para celebraciones inolvidables.", mostPopular: "Más Popular" },
  rules: { title: "Reglas de Juego", supervision: "Supervisión de adultos en TODO momento" },
  gallery: { title: "Sigue la Diversión" },
  footer: {
    tagline: "Celebraciones elevadas para tus pequeños.",
    contact: "Contacto",
    bookingTerms: "Términos de Reserva",
    dm: "Envía un DM para Reservar en Instagram",
    credit: '© 2026 Cielito Soft Play. Todos los derechos reservados. Hecho por Alex "the goat" Sanchez',
  },
  pkg: {
    standard: {
      name: "Paquete Estándar",
      features: ["Tapetes de juego suave y vallas", "Piscina de pelotas con pelotas", "Bloques suaves y trepadores"],
      cta: "Reservar Estándar",
    },
    gold: {
      name: "Paquete Oro",
      features: ["Todo lo del Estándar", "Casa inflable blanca pequeña", "Saltadores de animales"],
      cta: "Reservar Oro",
    },
    premium: {
      name: "Paquete Premium",
      features: ["Todo lo del Oro", "Tobogán grande con piscina de pelotas", "Calcomanías de vinilo personalizadas"],
      cta: "Reservar Premium",
    },
  },
  rulesList: [
    { icon: "child_care", text: "SOLO edades 1-5" },
    { icon: "do_not_step", text: "Zapatos FUERA, calcetas PUESTAS" },
    { icon: "no_drinks", text: "NO comida ni bebida" },
    { icon: "clean_hands", text: "NO manos pegajosas" },
    { icon: "brush", text: "NO pintura facial ni brillantina" },
    { icon: "cut", text: "NO objetos afilados" },
  ],
};

const T = { en: EN, es: ES };

function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const t = T[lang];
  const toggleLang = () => setLang((l) => (l === "en" ? "es" : "en"));

  const PACKAGES: Pkg[] = [
    {
      name: t.pkg.standard.name,
      price: "$350",
      features: t.pkg.standard.features,
      cta: t.pkg.standard.cta,
    },
    {
      name: t.pkg.gold.name,
      price: "$450",
      features: t.pkg.gold.features,
      cta: t.pkg.gold.cta,
      featured: true,
    },
    {
      name: t.pkg.premium.name,
      price: "$500",
      features: t.pkg.premium.features,
      cta: t.pkg.premium.cta,
    },
  ];
  return (
    <div className="font-body antialiased" style={{ background: "#fbf9f8", color: onSurface }}>
      <nav
        className="sticky top-0 z-50 backdrop-blur-md border-b"
        style={{ background: "rgba(251,249,248,0.9)", borderColor: "rgba(198,200,187,0.3)" }}
      >
        <div className="flex justify-between items-center w-full max-w-6xl mx-auto px-6 py-4">
          <a href="#" className="font-display text-3xl md:text-4xl tracking-tight" style={{ color: primary }}>
            Cielito Soft Play
          </a>
          <div className="hidden md:flex space-x-2 items-center font-label text-sm uppercase">
  {[
    { label: t.nav.packages, href: "#packages" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.rules, href: "#rules" },
  ].map((l) => (
    <a
      key={l.href}
      href={l.href}
      className="rounded-full px-4 py-2 transition-colors hover:opacity-80"
      style={{ color: onSurfaceVariant }}
    >
      {l.label}
    </a>
  ))}
  
  {/* Language toggle */}
  <button
    onClick={toggleLang}
    className="rounded-full px-3 py-2 text-xs transition-colors hover:opacity-80 border"
    style={{ color: onSurfaceVariant, borderColor: primaryContainer }}
    aria-label="Toggle language"
  >
    {lang === "en" ? "ES" : "EN"}
  </button>

  {/* Book Now button */}
  <a
    href={BOOKING_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full px-6 py-2 transition-opacity hover:opacity-90"
    style={{ background: primary, color: "#fff" }}
  >
    {t.nav.bookNow}
  </a>
</div>
{/* Mobile language toggle */}
<button
  onClick={toggleLang}
  className="md:hidden rounded-full px-3 py-1.5 text-xs transition-colors hover:opacity-80 border"
  style={{ color: onSurfaceVariant, borderColor: primaryContainer }}
  aria-label="Toggle language"
>
  {lang === "en" ? "ES" : "EN"}
</button>
</div>
      </nav>

      <main>
        {/* Hero */}
        <section
          className="relative min-h-[720px] flex items-center justify-center overflow-hidden py-24"
          style={{ background: secondaryFixed }}
        >
          <div className="absolute inset-0 z-0">
            <img src={HERO_IMG} alt="Luxury white soft play setup outdoors at golden hour" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(251,249,248,0.4), rgba(251,249,248,0.9))" }} />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
            <div
              className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full font-label text-xs border"
              style={{ background: "rgba(163,177,138,0.3)", color: "#384425", borderColor: primaryContainer }}
            >
              <span className="material-symbols-outlined mr-2" style={{ fontSize: 35 }}>stars</span>
              {t.hero.badge}
            </div>
            <h1 className="font-display max-w-4xl mx-auto mb-6 text-4xl md:text-6xl leading-tight" style={{ color: primary }}>
              {t.hero.title}
            </h1>
            <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed" style={{ color: onSurfaceVariant }}>
              {t.hero.subtitle}
            </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
<a
href={BOOKING_URL}
target="_blank"
rel="noopener noreferrer"
className="font-label text-sm px-8 py-4 rounded-full uppercase tracking-wider transition-opacity hover:opacity-90"
style={{ background: primary, color: "#fff" }}
>
{t.hero.bookBtn}
</a>
<a
href="#packages"
className="font-label text-sm px-8 py-4 rounded-full uppercase tracking-wider border transition-colors"
style={{ borderColor: primary, color: primary }}
>
{t.hero.viewBtn}
</a>
</div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24" style={{ background: surfaceLow }}>
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/5] shadow-lg">
              <img src={ABOUT_IMG} alt="Warm family behind Cielito Soft Play" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl mb-6" style={{ color: primary }}>{t.about.title}</h2>
              <div className="space-y-4 leading-relaxed" style={{ color: onSurfaceVariant }}>
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section id="packages" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl mb-4" style={{ color: primary }}>{t.packages.title}</h2>
              <p style={{ color: onSurfaceVariant }}>{t.packages.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PACKAGES.map((p) => (
                <div
                  key={p.name}
                  className={`relative rounded-xl p-8 flex flex-col h-full overflow-hidden group border transition-shadow hover:shadow-lg ${p.featured ? "md:-translate-y-4 shadow-sm" : ""}`}
                  style={{
                    background: p.featured ? "rgba(163,177,138,0.1)" : "#fff",
                    borderColor: p.featured ? "rgba(87,111,59,0.2)" : surfaceVariant,
                  }}
                >
                  {p.featured && (
                    <div className="absolute top-0 right-0 font-label text-xs px-4 py-1 rounded-bl-lg uppercase" style={{ background: primary, color: "#fff" }}>
                      {t.packages.mostPopular}
                    </div>
                  )}
                  {!p.featured && (
                    <div
                      className="absolute top-0 right-0 w-32 h-32 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"
                      style={{ background: "rgba(229,227,215,0.5)" }}
                    />
                  )}
                  <h3 className={`font-display text-2xl mb-2 relative z-10 ${p.featured ? "mt-4" : ""}`} style={{ color: primary }}>{p.name}</h3>
                  <div className="font-display text-3xl mb-6 relative z-10" style={{ color: onSurface }}>{p.price}</div>
                  <ul className="space-y-3 mb-8 flex-grow relative z-10" style={{ color: onSurfaceVariant }}>
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start">
                        <span className="material-symbols-outlined mr-2 mt-0.5" style={{ color: primary, fontSize: 20 }}>check_circle</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full font-label text-sm py-3 rounded-full uppercase tracking-wider transition-colors relative z-10 hover:opacity-90 inline-block text-center"
                    style={
                      p.featured
                        ? { background: primary, color: "#fff" }
                        : { background: surfaceHigh, color: onSurface }
                    }
                  >
                    {p.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rules */}
        <section id="rules" className="py-24 relative" style={{ background: "rgba(229,227,215,0.3)" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="cs-glass-card rounded-2xl p-8 md:p-12 max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl mb-8" style={{ color: primary }}>{t.rules.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 text-left">
                {t.rulesList.map((r) => (
                  <div key={r.text} className="flex items-center space-x-4 p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.5)" }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(163,177,138,0.3)" }}>
                      <span className="material-symbols-outlined" style={{ color: primary }}>{r.icon}</span>
                    </div>
                    <span className="font-medium" style={{ color: onSurfaceVariant }}>{r.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t inline-block" style={{ borderColor: "rgba(87,111,59,0.1)" }}>
                <p className="font-label text-sm uppercase tracking-widest" style={{ color: primary }}>
                  {t.rules.supervision}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-24" style={{ background: surfaceLow }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl mb-2" style={{ color: primary }}>{t.gallery.title}</h2>
              <p style={{ color: onSurfaceVariant }}>@cielitosoftplay</p>
            </div>

            {/* Mobile: hero image full-width at top, then rest in 2-col grid */}
            <div className="md:hidden flex flex-col gap-4">
              {/* Big hero image — first image displayed large */}
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden group">
                <img src={GALLERY[0]} alt="Cielito Soft Play gallery" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              {/* Remaining images in a 2-column grid */}
              <div className="grid grid-cols-2 gap-4">
                {GALLERY.slice(1).map((src) => (
                  <div key={src} className="aspect-square rounded-lg overflow-hidden group">
                    <img src={src} alt="Cielito Soft Play gallery" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop: original 4-column grid with featured image spanning 2 cols */}
            <div className="hidden md:grid grid-cols-4 gap-4">
              {GALLERY.map((src, i) => (
                <div key={src} className={`aspect-square rounded-lg overflow-hidden group ${i === 1 ? "col-span-2 row-span-2" : ""}`}>
                  <img src={src} alt="Cielito Soft Play gallery" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12" style={{ background: secondaryFixed }}>
        <div className="w-full py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col space-y-4">
            <span className="font-display text-2xl" style={{ color: "#65655c" }}>Cielito Soft Play</span>
            <p style={{ color: "rgba(101,101,92,0.8)" }}>{t.footer.tagline}</p>
          </div>
          <div className="flex flex-col space-y-2 text-sm">
            <a href="#packages" className="hover:opacity-80" style={{ color: "rgba(101,101,92,0.8)" }}>{t.nav.packages}</a>
            <a href="#about" className="hover:opacity-80" style={{ color: "rgba(101,101,92,0.8)" }}>{t.nav.about}</a>
            <a href="#rules" className="hover:opacity-80" style={{ color: "rgba(101,101,92,0.8)" }}>{t.nav.rules}</a>
          </div>
          <div className="flex flex-col space-y-2 text-sm">
            <a href="#" className="hover:opacity-80" style={{ color: "rgba(101,101,92,0.8)" }}>{t.footer.contact}</a>
            <a href="#" className="hover:opacity-80" style={{ color: "rgba(101,101,92,0.8)" }}>{t.footer.bookingTerms}</a>
            <a
              href="https://instagram.com/cielitosoftplay"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 mt-2"
              style={{ color: "#65655c" }}
            >
              {t.footer.dm}
            </a>
          </div>
        </div>
        <div className="border-t w-full py-6 text-center" style={{ borderColor: "rgba(101,101,92,0.1)" }}>
          <p className="text-xs" style={{ color: "rgba(101,101,92,0.6)" }}>
            {t.footer.credit}
          </p>
        </div>
      </footer>
    </div>
  );
}
