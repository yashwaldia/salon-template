"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auhref=format&fit=crop&q=80&w=2000")',
        }}
      >
        {/* Warm vintage color grade overlay inspired by reference */}
        <div className="absolute inset-0 bg-[#FFB48C] mix-blend-overlay opacity-30"></div>
        <div className="absolute inset-0 bg-[#8B4513] mix-blend-color opacity-30"></div>
        <div className="absolute inset-0 bg-sand-900/30 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 text-center text-sand-50 px-6 max-w-4xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="uppercase tracking-[0.3em] text-[10px] font-medium mb-6 text-sand-50">
            {t('home.hero.subtitle1')}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif italic mb-8 leading-[1.1]">
            {t('home.hero.title1')} <br className="hidden md:block" /> {t('home.hero.title2')}
          </h1>
          <p className="text-sm md:text-base font-light tracking-wide max-w-lg mx-auto mb-12 text-sand-50">
            {t('home.hero.subtitle2')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/book" 
              className="bg-sand-50 text-sand-900 px-8 py-4 uppercase tracking-[0.2em] text-[11px] font-semibold hover:bg-gold-500 hover:text-sand-50 transition-colors duration-300 w-full sm:w-auto"
            >
              {t('home.hero.cta1')}
            </Link>
            <Link 
              href="/services" 
              className="border-b border-sand-50 text-sand-50 pb-1 uppercase tracking-[0.2em] text-[11px] font-semibold hover:text-gold-500 hover:border-gold-500 transition-colors duration-300 w-full sm:w-auto mt-2 sm:mt-0"
            >
              {t('home.hero.cta2')}
            </Link>
          </div>
          
          <div className="mt-16 flex items-center justify-center gap-4 text-[10px] uppercase tracking-widest text-gold-500 font-bold">
            <span>{t('home.hero.est')}</span>
            <span className="w-12 h-[1px] bg-gold-500"></span>
            <span>{t('home.hero.voted')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
