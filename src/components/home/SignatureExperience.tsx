"use client";
import { motion } from "motion/react";

const steps = [
  {
    step: "01",
    title: "Consultation",
    description: "An intimate dialogue to understand your desires, assess your unique profile, and define the optimal treatment path."
  },
  {
    step: "02",
    title: "Preparation",
    description: "Relax in our serene environment as we prepare your skin and mind with warm towels and calming aromatics."
  },
  {
    step: "03",
    title: "Treatment",
    description: "The core experience. Masterful techniques combined with premium products, executed with absolute precision."
  },
  {
    step: "04",
    title: "Aftercare",
    description: "Post-treatment guidance, a curated home-care regimen, and a moment to savor a complimentary herbal infusion."
  }
];

export default function SignatureExperience() {
  return (
    <section className="py-24 md:py-32 bg-sand-100 text-sand-900 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[10px] uppercase tracking-[0.3em] mb-4 text-sand-800">The Journey</h2>
              <h3 className="text-3xl md:text-5xl font-serif italic mb-6 leading-tight">The Signature Experience</h3>
              <p className="text-sm text-sand-800 leading-relaxed">
                Every visit to [Salon Name] is carefully choreographed to transport you away from the noise of the city and into a state of profound renewal.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 relative">
            {/* Minimal Timeline Line */}
            <div className="absolute left-6 md:left-[27px] top-0 bottom-0 w-px bg-sand-200"></div>

            <div className="space-y-16 py-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative pl-16 md:pl-24"
                >
                  <div className="absolute left-0 w-12 md:w-14 h-12 md:h-14 bg-sand-50 border border-sand-200 rounded-full flex items-center justify-center font-serif text-lg md:text-xl text-sand-900 z-10 -ml-[1px]">
                    {step.step}
                  </div>
                  <h4 className="font-serif italic text-2xl mb-3 text-sand-900 pt-2">{step.title}</h4>
                  <p className="text-sand-800 text-sm md:text-base leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
