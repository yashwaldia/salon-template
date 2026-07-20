"use client";
import { motion } from "motion/react";

export default function Gallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auhref=format&fit=crop&q=80&w=800", aspect: "aspect-square" },
    { src: "https://images.unsplash.com/photo-1615397323214-724d271618a8?auhref=format&fit=crop&q=80&w=800", aspect: "aspect-[3/4]" },
    { src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auhref=format&fit=crop&q=80&w=800", aspect: "aspect-[4/5]" },
    { src: "https://images.unsplash.com/photo-1572288079532-6a7cb0c74fbe?auhref=format&fit=crop&q=80&w=1200", aspect: "aspect-[16/9] md:col-span-2 md:row-span-2" },
    { src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auhref=format&fit=crop&q=80&w=800", aspect: "aspect-square" },
    { src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71c9?auhref=format&fit=crop&q=80&w=800", aspect: "aspect-[3/4]" },
    { src: "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?auhref=format&fit=crop&q=80&w=800", aspect: "aspect-square" },
  ];

  return (
    <div className="bg-sand-50 min-h-screen">
      {/* Editorial Hero */}
      <div className="relative h-[40vh] min-h-[400px] flex flex-col items-center justify-center text-center px-6 bg-sand-100 border-b border-sand-200">
        <div className="relative z-10 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-sand-900 mb-4 leading-none tracking-tight italic"
          >
            The Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-sand-500 font-light text-[10px] uppercase tracking-[0.3em]"
          >
            A Glimpse of Serenity
          </motion.p>
        </div>
      </div>
      
      <div className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 auto-rows-min">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
              className={`overflow-hidden bg-sand-200 group cursor-pointer relative ${img.aspect}`}
            >
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url("${img.src}")` }}
              />
              <div className="absolute inset-0 bg-[#FFB48C] mix-blend-overlay opacity-20 pointer-events-none transition-opacity duration-700 group-hover:opacity-0"></div>
              <div className="absolute inset-0 bg-[#8B4513] mix-blend-color opacity-20 pointer-events-none transition-opacity duration-700 group-hover:opacity-0"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
