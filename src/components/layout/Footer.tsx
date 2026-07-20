import Link from "next/link";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between border-t border-sand-200 bg-sand-50 text-[10px] uppercase tracking-[0.2em] text-sand-800 gap-6">
      <div>&copy; {new Date().getFullYear()} YOUR COMPANY NAME GMBH</div>
      <div className="flex gap-8">
        <Link href="/privacy" className="hover:text-gold-500 transition-colors">Privacy</Link>
        <Link href="/impressum" className="hover:text-gold-500 transition-colors">Impressum</Link>
        <Link href="/terms" className="hover:text-gold-500 transition-colors">Terms</Link>
      </div>
      <div className="text-sand-900 font-bold hidden lg:block">Exclusive European Partner for LVMH Beauty</div>
    </footer>
  );
}
