"use client";
import { motion } from "motion/react";

export default function BrandIntro() {
  return (
    <section className="flex flex-col lg:flex-row border-b border-sand-200">
      <div className="lg:w-[45%] lg:border-r border-sand-200 bg-sand-200 flex relative">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full min-h-[500px] lg:min-h-full bg-cover bg-center mix-blend-multiply opacity-90"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1615397323214-724d271618a8?auhref=format&fit=crop&q=80&w=1200')" }}
        />
        <div className="absolute inset-0 bg-[#FFB48C] mix-blend-overlay opacity-30 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[#8B4513] mix-blend-color opacity-30 pointer-events-none"></div>
      </div>

      <div className="lg:w-[55%] bg-sand-100 p-12 md:p-24 flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-sand-800 mb-6 block">01. Our Philosophy</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight italic mb-8">
            Beauty is not a standard. <br/> It is an experience.
          </h2>
          <div className="space-y-6 text-sand-800 text-sm leading-relaxed max-w-md">
              <p>
                At [Salon Name], we believe that true luxury lies in the details. From the moment you step through our doors in [City Name], you are enveloped in an atmosphere of absolute tranquility.
              </p>
              <p>
                Our philosophy marries advanced dermatological science with the restorative power of holistic touch. We curate personalized journeys using only the finest, clinically-proven formulations to reveal your most radiant, authentic self.
              </p>
            </div>
          
          <div className="mt-12">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Signature_placeholder.svg" 
              alt="Founder Signature" 
              className="h-12 opacity-80" 
              style={{ filter: 'brightness(0) sepia(1) hue-rotate(0deg) saturate(1) contrast(0.8)' }}
            />
            <p className="text-[10px] uppercase tracking-widest mt-4 text-sand-800">Elena Rostova, Founder</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
