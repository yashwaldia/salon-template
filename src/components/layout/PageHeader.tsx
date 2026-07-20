"use client";
import { motion } from "motion/react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export default function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  return (
    <div className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center overflow-hidden bg-sand-900">
      {image && (
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${image}")` }}
        >
          <div className="absolute inset-0 bg-sand-900/40 mix-blend-multiply"></div>
        </div>
      )}
      
      <div className="relative z-10 text-center text-sand-50 px-6 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {subtitle && (
            <p className="uppercase tracking-[0.3em] text-xs font-light mb-4 text-sand-300">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif">
            {title}
          </h1>
        </motion.div>
      </div>
    </div>
  );
}
