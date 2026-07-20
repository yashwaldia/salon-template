"use client";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-sand-50 min-h-screen">
      {/* Editorial Hero */}
      <div className="relative h-[60vh] min-h-[500px] flex flex-col items-center justify-center text-center px-6 bg-sand-100">
        <div className="relative z-10 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-sand-900 mb-6 leading-none tracking-tight italic"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-sand-800 font-light text-lg md:text-xl max-w-2xl mx-auto"
          >
            For appointments, consultations, or general inquiries, please contact our concierge team.
          </motion.p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-sand-500 block mb-6 font-semibold">01. Our Location</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-12 text-sand-900 italic">Visit the Atelier</h2>

            <div className="space-y-10">
              <div className="flex items-start gap-6 border-b border-sand-200 pb-6">
                <MapPin className="text-gold-500 shrink-0 mt-1" size={24} strokeWidth={1} />
                <div>
                  <h4 className="font-serif text-2xl mb-2 text-sand-900">Address</h4>
                  <p className="text-sand-800 font-light text-sm md:text-base leading-relaxed">Placeholder Street 123<br />10000 City, Country</p>
                </div>
              </div>

              <div className="flex items-start gap-6 border-b border-sand-200 pb-6">
                <Phone className="text-gold-500 shrink-0 mt-1" size={24} strokeWidth={1} />
                <div>
                  <h4 className="font-serif text-2xl mb-2 text-sand-900">Phone</h4>
                  <p className="text-sand-800 font-light text-sm md:text-base leading-relaxed">+1 (555) 000-0000</p>
                </div>
              </div>

              <div className="flex items-start gap-6 border-b border-sand-200 pb-6">
                <Mail className="text-gold-500 shrink-0 mt-1" size={24} strokeWidth={1} />
                <div>
                  <h4 className="font-serif text-2xl mb-2 text-sand-900">Email</h4>
                  <p className="text-sand-800 font-light text-sm md:text-base leading-relaxed">hello@your-domain.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <Clock className="text-gold-500 shrink-0 mt-1" size={24} strokeWidth={1} />
                <div>
                  <h4 className="font-serif text-2xl mb-2 text-sand-900">Hours</h4>
                  <p className="text-sand-800 font-light text-sm md:text-base leading-relaxed">
                    Monday - Friday: 10:00 - 19:00<br />
                    Saturday: 10:00 - 16:00<br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-sand-900 text-sand-50 p-10 md:p-16 flex flex-col justify-center"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-sand-300 block mb-6 font-semibold">02. Direct Inquiry</span>
            <h3 className="font-serif text-3xl md:text-4xl mb-12 italic">Send a Message</h3>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input 
                  type="text"
                  placeholder="Your Name" 
                  className="w-full bg-transparent border-b border-sand-500 py-3 focus:outline-none focus:border-gold-500 transition-colors placeholder:text-sand-500 font-light"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-sand-500 py-3 focus:outline-none focus:border-gold-500 transition-colors placeholder:text-sand-500 font-light"
                />
              </div>
              <div>
                <textarea 
                  rows={4}
                  placeholder="How can we assist you?"
                  className="w-full bg-transparent border-b border-sand-500 py-3 focus:outline-none focus:border-gold-500 transition-colors resize-none placeholder:text-sand-500 font-light"
                ></textarea>
              </div>
              <button 
                className="bg-sand-50 text-sand-900 px-8 py-4 uppercase tracking-[0.2em] text-[11px] font-semibold hover:bg-gold-500 hover:text-sand-50 transition-colors w-full mt-4"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
