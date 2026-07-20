"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: t('nav.services'), href: "/services" },
    { name: t('nav.atelier'), href: "/about" },
    { name: t('nav.team'), href: "/team" },
    { name: t('nav.gallery'), href: "/gallery" },
    { name: t('nav.contact'), href: "/contact" },
  ];

  const darkHeroRoutes = ["/"];
  const isDarkHero = darkHeroRoutes.includes(pathname || "");
  
  const brandColor = (isScrolled || mobileMenuOpen)
    ? "text-sand-900" 
    : (isDarkHero ? "text-sand-50" : "text-sand-900");

  const linkColor = (isScrolled || mobileMenuOpen)
    ? "text-sand-800 hover:text-gold-500"
    : (isDarkHero ? "text-sand-200 hover:text-sand-50" : "text-sand-800 hover:text-gold-500");

  const btnBg = (isScrolled || mobileMenuOpen)
    ? "bg-sand-900 text-sand-50 hover:bg-gold-500"
    : (isDarkHero ? "bg-sand-50 text-sand-900 hover:bg-gold-500 hover:text-sand-50" : "bg-sand-900 text-sand-50 hover:bg-gold-500");

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        (isScrolled || mobileMenuOpen)
          ? "bg-sand-50/95 backdrop-blur-md border-b border-sand-200 py-4"
          : "bg-transparent py-6 border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className={cn("text-lg sm:text-xl lg:text-2xl font-serif tracking-[0.15em] uppercase transition-colors shrink-0", brandColor)}>
          SALON <span className={(isScrolled || mobileMenuOpen) || !isDarkHero ? "text-gold-500" : "text-sand-50"}>NAME</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn("text-[11px] uppercase tracking-[0.2em] font-medium transition-colors", linkColor)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-6">
          <div className={cn("hidden lg:flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-medium transition-colors", linkColor)}>
            <button 
              onClick={() => setLanguage('de')} 
              className={cn("hover:text-gold-500 transition-colors", language === 'de' ? "text-gold-500" : "")}
            >
              DE
            </button>
            <span>/</span>
            <button 
              onClick={() => setLanguage('en')} 
              className={cn("hover:text-gold-500 transition-colors", language === 'en' ? "text-gold-500" : "")}
            >
              EN
            </button>
          </div>
          <Link
            href="/book"
            className={cn("hidden lg:inline-flex px-8 py-3 text-[11px] uppercase tracking-[0.2em] font-semibold transition-all", btnBg)}
          >
            {t('nav.reservation')}
          </Link>
          
          <button
            className={cn("lg:hidden p-2 -mr-2 transition-colors", brandColor)}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 w-full bg-sand-50 transition-all duration-300 overflow-hidden shadow-xl",
          mobileMenuOpen ? "h-[calc(100dvh-70px)] opacity-100 overflow-y-auto" : "h-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="px-6 py-8 flex flex-col gap-6 min-h-full pb-24">
          <div className="flex items-center justify-center gap-4 text-sm font-medium text-sand-500 mb-2 border-b border-sand-200 pb-6">
            <button 
              onClick={() => { setLanguage('de'); setMobileMenuOpen(false); }}
              className={language === 'de' ? "text-sand-900" : ""}
            >
              Deutsch
            </button>
            <span>|</span>
            <button 
              onClick={() => { setLanguage('en'); setMobileMenuOpen(false); }}
              className={language === 'en' ? "text-sand-900" : ""}
            >
              English
            </button>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif tracking-wide text-sand-900"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-sand-900 text-sand-50 px-6 py-4 text-center text-sm uppercase tracking-[0.2em] mt-4"
          >
            {t('nav.book')}
          </Link>
        </div>
      </div>
    </header>
  );
}
