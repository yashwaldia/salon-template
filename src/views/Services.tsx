"use client";
import { motion } from "motion/react";
import Link from "next/link";

const serviceCategories = [
  {
    title: "Facial Treatments",
    description: "Advanced clinical facials and bespoke therapies to renew and protect your skin.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auhref=format&fit=crop&q=80&w=800",
    services: [
      { name: "The Signature Glow", price: "€150", duration: "75 min" },
      { name: "Deep Purifying Clinical Facial", price: "€130", duration: "60 min" },
      { name: "Anti-Aging Cellular Therapy", price: "€210", duration: "90 min" },
      { name: "Hydration Infusion", price: "€110", duration: "45 min" },
    ]
  },
  {
    title: "Aesthetic Enhancements",
    description: "Subtle, expert refinement using premium formulations for natural-looking results.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71c9?auhref=format&fit=crop&q=80&w=800",
    services: [
      { name: "Lash Lift & Tint", price: "€85", duration: "60 min" },
      { name: "Brow Architecture", price: "€65", duration: "45 min" },
      { name: "Microneedling Session", price: "€180", duration: "60 min" },
    ]
  },
  {
    title: "Holistic Wellness",
    description: "Therapeutic massage and body treatments to restore harmony to body and mind.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auhref=format&fit=crop&q=80&w=800",
    services: [
      { name: "Aromatherapy Massage", price: "€120", duration: "60 min" },
      { name: "Deep Tissue Release", price: "€140", duration: "75 min" },
      { name: "Hot Stone Therapy", price: "€160", duration: "90 min" },
    ]
  }
];

export default function Services() {
  return (
    <div className="bg-sand-50 min-h-screen">
      {/* Editorial Hero */}
      <div className="relative h-[60vh] min-h-[500px] flex flex-col items-center justify-center text-center px-6 bg-sand-100">
        <div className="relative z-10 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl lg:text-[100px] font-serif text-sand-900 mb-6 leading-none tracking-tight"
          >
            Curated <br className="hidden md:block" />
            <span className="italic">Treatments.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-sand-800 font-light text-lg md:text-xl max-w-2xl mx-auto mb-12"
          >
            A bespoke approach to beauty. Discover our comprehensive menu of clinical and holistic therapies.
          </motion.p>
        </div>
      </div>
      
      {/* Services List - Editorial Alternating Layout */}
      <div className="py-24 md:py-32">
        {serviceCategories.map((category, idx) => (
          <div key={category.title} className="max-w-7xl mx-auto px-6 md:px-12 mb-32 last:mb-0">
            <div className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Category Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/2"
              >
                <div className="aspect-[3/4] bg-sand-200 overflow-hidden relative group">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105"
                    style={{ backgroundImage: `url("${category.image}")` }}
                  />
                </div>
              </motion.div>

              {/* Category Services */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2"
              >
                <div className="mb-12">
                  <h2 className="text-4xl md:text-5xl font-serif text-sand-900 mb-4 italic">{category.title}</h2>
                  <p className="text-sand-800 font-light text-lg max-w-md">{category.description}</p>
                </div>
                
                <div className="space-y-8">
                  {category.services.map((service, sIdx) => (
                    <div key={sIdx} className="group cursor-pointer">
                      <div className="flex justify-between items-end border-b border-sand-200 pb-3 group-hover:border-gold-500 transition-colors">
                        <h3 className="font-serif text-xl md:text-2xl text-sand-900 group-hover:text-gold-500 transition-colors">{service.name}</h3>
                        <div className="text-lg font-mono text-sand-800 tracking-widest group-hover:text-gold-500 transition-colors">
                          {service.price}
                        </div>
                      </div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-sand-500 mt-2 font-semibold group-hover:text-sand-800 transition-colors">{service.duration}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        ))}
      </div>

      {/* Booking Prompt */}
      <div className="py-24 px-6 md:px-12 text-center bg-sand-900 text-sand-50">
         <span className="text-[10px] uppercase tracking-[0.3em] text-sand-300 block mb-6">Reservation</span>
         <h2 className="text-4xl md:text-5xl font-serif italic mb-8">Ready for your transformation?</h2>
         <Link href="/book" className="inline-block px-10 py-4 border border-sand-50 text-sand-50 text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-sand-50 hover:text-sand-900 transition-colors">
            Book Appointment
         </Link>
      </div>

    </div>
  );
}
