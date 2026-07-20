"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const pillars = [
  {
    title: "Master Specialists",
    description: "Our practitioners are rigorously trained, certified experts dedicated to continuing education in global beauty standards.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auhref=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Premium Formulations",
    description: "We partner exclusively with clinical-grade and ethically sourced luxury brands, ensuring optimal efficacy and safety.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auhref=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Impeccable Hygiene",
    description: "Clinical-level sterilization protocols are strictly observed for every treatment, guaranteeing your peace of mind.",
    image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auhref=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Personalized Care",
    description: "No two faces are alike. Every service begins with an in-depth consultation to tailor the approach to your unique needs.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auhref=format&fit=crop&q=80&w=1200"
  }
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-sand-50 text-sand-900 border-y border-sand-200/50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="text-[10px] uppercase tracking-[0.3em] mb-4 text-sand-800">The Salon Standard</h2>
          <h3 className="text-3xl md:text-5xl font-serif italic">Uncompromising Quality</h3>
        </motion.div>

        {/* Horizontal Accordion Layout */}
        <div className="flex flex-col lg:flex-row h-[800px] lg:h-[600px] gap-2 lg:gap-4 w-full">
          {pillars.map((pillar, index) => {
            const isActive = activeIndex === index;
            
            return (
              <motion.div 
                key={pillar.title}
                className={cn(
                  "relative cursor-pointer overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  "flex flex-col lg:flex-row bg-sand-200",
                  isActive ? "lg:flex-[3] flex-[4] lg:flex-grow" : "lg:flex-[1] flex-[1] h-[80px] lg:h-full"
                )}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              >
                {/* Background Image - Only truly visible when active, but present for transition */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
                  style={{ 
                    backgroundImage: `url("${pillar.image}")`,
                    transform: isActive ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                
                {/* Theme Overlays */}
                <div className="absolute inset-0 bg-[#FFB48C] mix-blend-overlay opacity-20 pointer-events-none"></div>
                <div className="absolute inset-0 bg-[#8B4513] mix-blend-color opacity-20 pointer-events-none"></div>
                
                {/* Contrast Overlays */}
                <div className={cn(
                  "absolute inset-0 transition-opacity duration-700 pointer-events-none",
                  isActive ? "bg-sand-900/60" : "bg-sand-900/30 hover:bg-sand-900/20"
                )}></div>
                
                {/* Content */}
                <div className={cn(
                  "relative z-10 w-full h-full p-4 md:p-6 lg:p-10 flex flex-col",
                  isActive ? "justify-center text-sand-50" : "justify-center lg:justify-start text-sand-50"
                )}>
                  {/* Number and Mobile Title - Always visible */}
                  <div className={cn(
                    "flex flex-row items-center lg:items-start lg:flex-col transition-all duration-700 shrink-0",
                    isActive ? "mb-4 lg:mb-6" : ""
                  )}>
                    <div className={cn(
                      "font-sans text-xl lg:text-2xl tracking-widest transition-opacity duration-700",
                      isActive ? "opacity-100" : "opacity-90"
                    )}>
                      0{index + 1}
                    </div>
                    
                    {/* Mobile Title for Inactive State */}
                    {!isActive && (
                      <div className="lg:hidden ml-4 font-serif italic text-xl md:text-2xl opacity-90 whitespace-nowrap">
                        {pillar.title}
                      </div>
                    )}
                  </div>

                  {/* Active State Details */}
                  <div 
                    className={cn(
                      "flex flex-col justify-start overflow-hidden transition-all duration-700 ease-in-out",
                      isActive ? "max-h-[600px] opacity-100 delay-200" : "max-h-0 opacity-0"
                    )}
                  >
                    <h4 className="font-serif italic text-2xl md:text-4xl lg:text-5xl mb-3 md:mb-4 lg:mb-6 tracking-tight leading-tight">{pillar.title}</h4>
                    <p className="font-light text-sm md:text-base leading-relaxed opacity-90 max-w-sm lg:max-w-md">
                      {pillar.description}
                    </p>
                  </div>
                  
                  {/* Inactive State Vertical Title (Desktop) */}
                  {!isActive && (
                    <div className="hidden lg:flex flex-1 items-end justify-center pb-4 overflow-hidden">
                      <div className="[writing-mode:vertical-rl] rotate-180 whitespace-nowrap font-serif italic text-2xl tracking-wide opacity-90">
                        {pillar.title}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
