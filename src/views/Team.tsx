"use client";
import { motion } from "motion/react";
import Link from "next/link";

const teamMembers = [
  {
    name: "Elena Rostova",
    role: "Founder & Master Esthetician",
    specialties: ["Holistic Skin Therapy", "Advanced Anti-Aging"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auhref=format&fit=crop&q=80&w=800",
  },
  {
    name: "Julian Meyer",
    role: "Lead Dermatologist",
    specialties: ["Clinical Treatments", "Aesthetic Medicine"],
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auhref=format&fit=crop&q=80&w=800",
  },
  {
    name: "Sophie Laurent",
    role: "Senior Facialist",
    specialties: ["Sculpting Massage", "Vitamin Infusions"],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auhref=format&fit=crop&q=80&w=800",
  },
  {
    name: "Clara Weber",
    role: "Wellness Specialist",
    specialties: ["Aromatherapy", "Deep Tissue Release"],
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auhref=format&fit=crop&q=80&w=800",
  },
  {
    name: "David Kim",
    role: "Aesthetic Nurse Specialist",
    specialties: ["Microneedling", "Skin Rejuvenation"],
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auhref=format&fit=crop&q=80&w=800",
  },
  {
    name: "Amelie Schmidt",
    role: "Brow & Lash Architect",
    specialties: ["Brow Lamination", "Lash Lifts"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auhref=format&fit=crop&q=80&w=800",
  },
];

export default function Team() {
  return (
    <div className="bg-sand-50 min-h-screen">
      {/* Editorial Hero */}
      <div className="relative h-[80vh] min-h-[600px] flex flex-col items-center justify-center text-center px-6 bg-sand-100">
        <div className="relative z-10 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl lg:text-[120px] font-serif text-sand-900 mb-6 leading-none tracking-tight"
          >
            Meet the <br className="hidden md:block" />
            <span className="italic">Masters.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-sand-800 font-light text-lg md:text-xl max-w-2xl mx-auto mb-12"
          >
            Can't decide who to book with? We get it. Read up on each artisan's story below or give us a call, and we'll pair you with your perfect match.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Link href="/contact" className="inline-block px-10 py-4 border border-sand-900 text-sand-900 text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-sand-900 hover:text-sand-50 transition-colors duration-300">
              Get in touch
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Asymmetrical Grid Layout for Team */}
      <div className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 md:gap-y-32 gap-x-16 lg:gap-x-32">
          {teamMembers.map((member, idx) => (
            <div key={member.name} className={`flex flex-col ${idx % 2 === 1 ? 'md:mt-32' : ''}`}>
              {/* Image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden mb-8 bg-sand-200">
                <motion.div 
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url("${member.image}")` }}
                />
                <div className="absolute inset-0 bg-[#FFB48C] mix-blend-overlay opacity-20 pointer-events-none"></div>
                <div className="absolute inset-0 bg-[#8B4513] mix-blend-color opacity-20 pointer-events-none"></div>
              </div>
              
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center md:text-left"
              >
                <h2 className="text-3xl md:text-4xl font-serif text-sand-900 mb-2 italic">{member.name}</h2>
                <p className="text-[11px] uppercase tracking-[0.2em] text-sand-500 mb-6 font-semibold">{member.role}</p>
                <div className="space-y-1">
                  {member.specialties.map(spec => (
                    <p key={spec} className="text-sm font-light text-sand-800">{spec}</p>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Join the Team CTA */}
      <div className="py-32 px-6 md:px-12 text-center bg-sand-100 border-t border-sand-200">
         <span className="text-[10px] uppercase tracking-[0.3em] text-sand-800 block mb-6">Careers</span>
         <h2 className="text-4xl md:text-5xl font-serif italic mb-8">Join the Atelier</h2>
         <p className="text-base text-sand-800 font-light max-w-md mx-auto mb-10 leading-relaxed">
           We are always looking for exceptional talent to join our team of specialists. If you are passionate about the art of aesthetics, we would love to hear from you.
         </p>
         <Link href="/contact" className="inline-block px-10 py-4 border border-sand-900 text-sand-900 text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-sand-900 hover:text-sand-50 transition-colors">
            View Openings
         </Link>
      </div>
    </div>
  );
}
