"use client";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Clara M.",
    role: "Regular Client",
    text: "An absolute haven in Berlin. The attention to detail is unmatched, and my skin has never looked so luminous. It feels less like an appointment and more like a retreat."
  },
  {
    name: "Sophie V.",
    role: "Bridal Client",
    text: "They prepared my skin for my wedding day flawlessly. The holistic approach they take means you leave not only looking better, but feeling profoundly relaxed."
  },
  {
    name: "Julia H.",
    role: "First-time Client",
    text: "From the minimalist decor to the expertise of the staff, every touchpoint is pure luxury. The customized facial completely transformed my skin texture."
  }
];

export default function Testimonials() {
  return (
    <section className="border-b border-sand-200 bg-sand-900 text-sand-50">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-12 md:p-24 border-b lg:border-b-0 lg:border-r border-sand-800 flex flex-col justify-between min-h-[400px]">
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-50 block mb-12">03. Trust</span>
          
          <div className="space-y-6 max-w-lg">
            <div className="flex gap-1 text-gold-500 text-sm">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <blockquote className="text-2xl md:text-3xl font-serif italic leading-snug">
              "The sanctuary of calm I never knew I needed. Berlin's best kept secret for skincare."
            </blockquote>
            <cite className="block text-[11px] uppercase tracking-widest opacity-60 not-italic pt-4">— Clara Von Heussen</cite>
          </div>
        </div>

        <div className="p-12 md:p-24 flex flex-col justify-between min-h-[400px]">
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-50 block mb-12">04. Accolades</span>
          
          <div className="space-y-6 max-w-lg">
            <blockquote className="text-2xl md:text-3xl font-serif italic leading-snug">
              "An unparalleled approach to holistic wellness. Every detail is meticulously curated."
            </blockquote>
            <cite className="block text-[11px] uppercase tracking-widest opacity-60 not-italic pt-4">— Vogue Germany</cite>
          </div>
          
          <div className="flex gap-4 mt-12">
            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center opacity-50 text-xs">G</div>
            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center opacity-50 text-xs">Ig</div>
          </div>
        </div>
      </div>
    </section>
  );
}
