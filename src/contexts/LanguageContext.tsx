"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.services': 'Services',
    'nav.atelier': 'The Atelier',
    'nav.team': 'Team',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.reservation': 'Reservation',
    'nav.book': 'Book Appointment',
    
    // Home Hero
    'home.hero.subtitle1': 'Berlin • Kurfürstendamm',
    'home.hero.title1': 'The Art of',
    'home.hero.title2': 'modern aesthetics.',
    'home.hero.subtitle2': 'Exquisite treatments tailored to the sophisticated individual. Located in the heart of Berlin, we combine European precision with clinical excellence.',
    'home.hero.cta1': 'Reservation',
    'home.hero.cta2': 'View Full Menu',
    'home.hero.est': 'Est. 2018',
    'home.hero.voted': 'Voted #1 Luxury Salon',

    // Team
    'team.hero.title1': 'Meet the',
    'team.hero.title2': 'Masters.',
    'team.hero.subtitle': "Can't decide who to book with? We get it. Read up on each artisan's story below or give us a call, and we'll pair you with your perfect match.",
    'team.hero.cta': 'Get in touch',

    // Services
    'services.hero.title1': 'Curated',
    'services.hero.title2': 'Treatments.',
    'services.hero.subtitle': 'A bespoke approach to beauty. Discover our comprehensive menu of clinical and holistic therapies.',

    // Contact
    'contact.hero.title': 'Get in Touch',
    'contact.hero.subtitle': 'For appointments, consultations, or general inquiries, please contact our concierge team.',

    // Gallery
    'gallery.hero.title': 'The Gallery',
    'gallery.hero.subtitle': 'A Glimpse of Serenity',

    // Book
    'book.hero.title': 'Reserve Your Experience',
  },
  de: {
    // Navbar
    'nav.services': 'Dienstleistungen',
    'nav.atelier': 'Das Atelier',
    'nav.team': 'Team',
    'nav.gallery': 'Galerie',
    'nav.contact': 'Kontakt',
    'nav.reservation': 'Reservierung',
    'nav.book': 'Termin Buchen',
    
    // Home Hero
    'home.hero.subtitle1': 'Berlin • Kurfürstendamm',
    'home.hero.title1': 'Die Kunst der',
    'home.hero.title2': 'modernen Ästhetik.',
    'home.hero.subtitle2': 'Exquisite Behandlungen, maßgeschneidert für das anspruchsvolle Individuum. Im Herzen Berlins vereinen wir europäische Präzision mit klinischer Exzellenz.',
    'home.hero.cta1': 'Reservierung',
    'home.hero.cta2': 'Ganzes Menü',
    'home.hero.est': 'Est. 2018',
    'home.hero.voted': 'Gewählt zur #1 Luxus Salon',

    // Team
    'team.hero.title1': 'Triff die',
    'team.hero.title2': 'Meister.',
    'team.hero.subtitle': "Du kannst dich nicht entscheiden, bei wem du buchen möchtest? Das verstehen wir. Lies dir die Geschichte jedes Künstlers unten durch oder ruf uns an, und wir finden die perfekte Besetzung für dich.",
    'team.hero.cta': 'Kontaktiere uns',

    // Services
    'services.hero.title1': 'Ausgewählte',
    'services.hero.title2': 'Behandlungen.',
    'services.hero.subtitle': 'Ein maßgeschneiderter Ansatz für Schönheit. Entdecken Sie unser umfassendes Angebot an klinischen und ganzheitlichen Therapien.',

    // Contact
    'contact.hero.title': 'Kontaktiere uns',
    'contact.hero.subtitle': 'Für Termine, Beratungen oder allgemeine Anfragen kontaktieren Sie bitte unser Concierge-Team.',

    // Gallery
    'gallery.hero.title': 'Die Galerie',
    'gallery.hero.subtitle': 'Ein Blick in die Gelassenheit',

    // Book
    'book.hero.title': 'Reservieren Sie Ihr Erlebnis',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
