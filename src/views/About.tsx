"use client";
import { motion } from "motion/react";
import Link from "next/link";

export default function About() {
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
            The Salon <br className="hidden md:block" />
            <span className="italic">Philosophy.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-sand-800 font-light text-lg md:text-xl max-w-2xl mx-auto mb-12"
          >
            More than a salon. A sanctuary dedicated to the art of holistic beauty and refined aesthetics.
          </motion.p>
        </div>
      </div>
      
      <div className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Story Section 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 order-2 lg:order-1"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-sand-500 block mb-6 font-semibold">01. Our Genesis</span>
            <h2 className="text-3xl md:text-5xl font-serif text-sand-900 mb-8 italic">A Sanctuary in the City</h2>
            <div className="text-sand-800 font-light leading-relaxed space-y-6 text-sm md:text-base">
              <p>
                Founded in 2018 by [Founder Name], [Salon Name] emerged from a simple observation: true luxury is time, space, and personalized care. In a world of fast-paced beauty bars and clinical, sterile environments, we sought to create a haven.
              </p>
              <p>
                Our studio in [City Name] was designed as a sanctuary. The moment you cross our threshold, the noise of the city fades away, replaced by subtle aromatherapy, muted acoustics, and a profound sense of calm.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 order-1 lg:order-2 w-full"
          >
            <div className="aspect-[4/5] bg-sand-200 overflow-hidden relative">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1572288079532-6a7cb0c74fbe?auhref=format&fit=crop&q=80&w=1600")' }}
              />
            </div>
          </motion.div>
        </div>

        {/* Story Section 2 */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 w-full"
          >
            <div className="aspect-[4/5] bg-sand-200 overflow-hidden relative">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1615397323214-724d271618a8?auhref=format&fit=crop&q=80&w=1600")' }}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-sand-500 block mb-6 font-semibold">02. The Standard</span>
            <h2 className="text-3xl md:text-5xl font-serif text-sand-900 mb-8 italic">Our Commitment</h2>
            <div className="text-sand-800 font-light leading-relaxed space-y-6 text-sm md:text-base">
              <p>
                We do not believe in standard routines. We believe that your skin, your body, and your energy are entirely unique. That is why every treatment begins with an honest, thorough consultation. 
              </p>
              <p>
                We partner exclusively with ethical, high-performance skincare brands that share our commitment to sustainability, efficacy, and purity. Our practitioners undergo continuous education to remain at the forefront of aesthetic science.
              </p>
            </div>
            <div className="mt-12 pt-12 border-t border-sand-200">
               <Link 
                href="/team" 
                className="text-[10px] uppercase tracking-[0.2em] font-semibold text-sand-900 hover:text-gold-500 transition-colors flex items-center gap-4 group"
              >
                Meet The Team
                <span className="w-12 h-[1px] bg-sand-900 group-hover:bg-gold-500 transition-colors"></span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
