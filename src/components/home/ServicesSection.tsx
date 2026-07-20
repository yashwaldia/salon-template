"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "facial",
    title: "Bespoke Facials",
    description: "Customized clinical treatments tailored to your unique skin profile, revealing a luminous complexion.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auhref=format&fit=crop&q=80&w=800",
  },
  {
    id: "aesthetic",
    title: "Aesthetic Medicine",
    description: "Subtle enhancements performed by certified specialists to restore youth and refine features.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71c9?auhref=format&fit=crop&q=80&w=800",
  },
  {
    id: "spa",
    title: "Holistic Wellness",
    description: "Therapeutic massage and body treatments designed to melt tension and restore internal balance.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auhref=format&fit=crop&q=80&w=800",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-sand-50 text-sand-900 border-b border-sand-200">
      <div className="flex flex-col lg:flex-row">
        
        <div className="lg:w-[45%] p-12 md:p-24 border-b lg:border-b-0 lg:border-r border-sand-200 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-sand-800 block mb-6">02. Treatments</span>
            <h3 className="text-4xl md:text-5xl font-serif italic mb-12">Signature Services</h3>
            
            <ul className="space-y-6 mb-12">
              <li className="flex justify-between items-end border-b border-sand-200 pb-4 group cursor-pointer hover:border-gold-500 transition-colors">
                <span className="font-serif text-xl md:text-2xl italic group-hover:text-gold-500 transition-colors">Dior Facial Ritual</span>
                <span className="text-xs text-sand-800 font-mono tracking-widest">€145</span>
              </li>
              <li className="flex justify-between items-end border-b border-sand-200 pb-4 group cursor-pointer hover:border-gold-500 transition-colors">
                <span className="font-serif text-xl md:text-2xl italic group-hover:text-gold-500 transition-colors">Sculpting Massage</span>
                <span className="text-xs text-sand-800 font-mono tracking-widest">€120</span>
              </li>
              <li className="flex justify-between items-end border-b border-sand-200 pb-4 group cursor-pointer hover:border-gold-500 transition-colors">
                <span className="font-serif text-xl md:text-2xl italic group-hover:text-gold-500 transition-colors">Vitamin Infusion</span>
                <span className="text-xs text-sand-800 font-mono tracking-widest">€180</span>
              </li>
              <li className="flex justify-between items-end border-b border-sand-200 pb-4 group cursor-pointer hover:border-gold-500 transition-colors">
                <span className="font-serif text-xl md:text-2xl italic group-hover:text-gold-500 transition-colors">Bespoke Aesthetics</span>
                <span className="text-xs text-sand-800 font-mono tracking-widest">FROM €210</span>
              </li>
            </ul>

            <Link 
              href="/services" 
              className="text-[10px] uppercase tracking-[0.2em] underline underline-offset-8 hover:text-gold-500 transition-colors"
            >
              View Full Menu
            </Link>
          </motion.div>
        </div>

        <div className="lg:w-[55%] flex bg-sand-200 relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full min-h-[400px] bg-cover bg-center mix-blend-multiply opacity-90"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auhref=format&fit=crop&q=80&w=1200')" }}
            />
            <div className="absolute inset-0 bg-[#FFB48C] mix-blend-overlay opacity-30 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[#8B4513] mix-blend-color opacity-30 pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
}
