"use client";
import { motion } from "motion/react";
import Link from "next/link";

export default function BookingCTA() {
  return (
    <section className="bg-sand-50 text-sand-900 border-b border-sand-200">
      <div className="flex flex-col lg:flex-row">
        
        <div className="lg:w-1/2 p-12 md:p-24 border-b lg:border-b-0 lg:border-r border-sand-200">
          <span className="text-[10px] uppercase tracking-[0.3em] text-sand-800 block mb-12">05. Location</span>
          <div className="space-y-2 text-sm text-sand-900 font-light">
            <p className="font-semibold text-base">Friedrichstraße 105</p>
            <p>10117 Berlin, Germany</p>
            <p className="pt-4">Mon — Sat: 10:00 - 20:00</p>
            <p>Sun: By Appointment</p>
          </div>
          
          <div className="mt-12">
             <Link 
              href="/contact" 
              className="text-[10px] uppercase tracking-[0.2em] underline underline-offset-8 hover:text-gold-500 transition-colors"
            >
              Get Directions
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 p-12 md:p-24">
          <span className="text-[10px] uppercase tracking-[0.3em] text-sand-800 block mb-12">06. Consultation</span>
          <p className="text-2xl md:text-3xl font-serif italic mb-8 max-w-sm">
            Reserve your moment of tranquility.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <input 
              type="text" 
              placeholder="Email address" 
              className="flex-1 bg-transparent border-b border-sand-200 text-sm py-3 focus:outline-none focus:border-gold-500 transition-colors placeholder:text-sand-300" 
            />
            <button className="px-8 py-3 border border-sand-900 text-sand-900 text-[10px] uppercase tracking-widest hover:bg-sand-900 hover:text-sand-50 transition-all font-semibold">
              Submit
            </button>
          </div>
          <p className="text-[10px] text-sand-800 italic mt-4">Inquiry response within 24 hours.</p>
        </div>

      </div>
    </section>
  );
}
