"use client";
import { usePathname } from 'next/navigation';

export default function MainWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const fullScreenRoutes = ["/", "/team", "/services", "/about", "/contact", "/gallery", "/book"];
  const isFullscreenHero = fullScreenRoutes.includes(pathname || '');
  return (
    <main className={`flex-grow ${!isFullscreenHero ? "pt-24" : ""}`}>
      {children}
    </main>
  );
}
