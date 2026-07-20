"use client";
import { motion } from "motion/react";

export default function Book() {
  return (
    <div className="bg-sand-50 min-h-screen">
      {/* Editorial Hero */}
      <div className="relative h-[40vh] min-h-[350px] flex flex-col items-center justify-center text-center px-6 bg-sand-100 border-b border-sand-200">
        <div className="relative z-10 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-sand-900 mb-4 leading-none tracking-tight italic"
          >
            Reserve Your Experience
          </motion.h1>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-sand-50 text-sand-900 p-10 md:p-16 lg:p-20 shadow-2xl"
        >
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.3em] text-sand-500 block mb-4 font-semibold">Concierge</span>
            <h2 className="font-serif text-3xl md:text-4xl text-sand-900 italic mb-4">Request Appointment</h2>
            <p className="text-sand-800 font-light text-sm max-w-md mx-auto">
              Select your desired service and preferred date. A member of our concierge team will contact you to confirm availability.
            </p>
          </div>
          
          <form className="space-y-10 max-w-md mx-auto text-left" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-sand-500 mb-2 font-semibold">Service Selection</label>
              <div className="relative">
                <select className="w-full bg-transparent border-b border-sand-300 py-3 focus:outline-none focus:border-gold-500 transition-colors text-sand-900 appearance-none font-serif text-lg md:text-xl italic cursor-pointer">
                  <option>The Signature Glow Facial</option>
                  <option>Deep Purifying Clinical Facial</option>
                  <option>Anti-Aging Cellular Therapy</option>
                  <option>Aromatherapy Massage</option>
                  <option>Bridal Consultation</option>
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-sand-500">
                  ▼
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-sand-500 mb-2 font-semibold">Preferred Date</label>
              <input 
                type="date" 
                className="w-full bg-transparent border-b border-sand-300 py-3 focus:outline-none focus:border-gold-500 transition-colors text-sand-900 font-light font-serif text-lg md:text-xl cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-sand-500 mb-2 font-semibold">Contact Email</label>
              <input 
                type="email" 
                placeholder="your@email.com"
                className="w-full bg-transparent border-b border-sand-300 py-3 focus:outline-none focus:border-gold-500 transition-colors text-sand-900 font-light placeholder:text-sand-300"
              />
            </div>
            
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-sand-500 mb-2 font-semibold">Contact Phone</label>
              <input 
                type="tel" 
                placeholder="+49 (0) 123 456789"
                className="w-full bg-transparent border-b border-sand-300 py-3 focus:outline-none focus:border-gold-500 transition-colors text-sand-900 font-light placeholder:text-sand-300"
              />
            </div>

            <button 
              className="bg-sand-900 text-sand-50 px-8 py-5 uppercase tracking-[0.2em] text-[11px] font-semibold hover:bg-gold-500 transition-colors w-full mt-4"
            >
              Submit Request
            </button>
            <p className="text-center text-[10px] text-sand-500 mt-4 italic">No payment is required to request an appointment.</p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
