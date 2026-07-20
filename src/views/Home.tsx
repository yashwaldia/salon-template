"use client";
import Hero from "../components/home/Hero";
import BrandIntro from "../components/home/BrandIntro";
import ServicesSection from "../components/home/ServicesSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import SignatureExperience from "../components/home/SignatureExperience";
import Testimonials from "../components/home/Testimonials";
import BookingCTA from "../components/home/BookingCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 
        No padding top needed for Hero as it's meant to sit under the transparent navbar.
        We adjust Layout.tsx to handle padding, or Hero.tsx.
        Since Layout has pt-20, we can use negative margin or remove pt-20 in Layout on Home route, 
        or just let Hero absorb it. Actually, letting Hero sit under the nav is more premium.
      */}
      <Hero />
      <BrandIntro />
      <ServicesSection />
      <WhyChooseUs />
      <SignatureExperience />
      <Testimonials />
      <BookingCTA />
    </div>
  );
}
