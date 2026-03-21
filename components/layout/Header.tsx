"use client";

import { useState, useEffect } from "react";
import { Menu, X, Stethoscope, Phone } from "lucide-react";
import clsx from "clsx";
import { navLinks } from "@/lib/data";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Button } from "@/components/ui/Button";

const SECTION_IDS = ["home", "specialties", "testimonials"];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  const sectionIdFromHref = (href: string) => href.replace("#", "");

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container-narrow px-6 md:px-12 lg:px-24 flex items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-2 text-brand-700 font-bold text-xl tracking-tight hover:text-brand-600 transition-colors"
          >
            <Stethoscope className="w-6 h-6" strokeWidth={2.5} />
            <span>VitalCare</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === sectionIdFromHref(link.href);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "relative text-sm font-semibold transition-colors duration-200 pb-1",
                    isActive
                      ? "text-brand-700"
                      : "text-gray-500 hover:text-brand-700",
                    "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-brand-500 after:transition-all after:duration-300",
                    isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+5521983947259"
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-brand-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (21) 98394-7259
            </a>
            <Button href="#specialties" size="sm">
              Agendar Consulta
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 text-gray-700 hover:text-brand-700 transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <div
        className={clsx(
          "fixed inset-0 z-40 md:hidden flex flex-col bg-white transition-all duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex-1 flex flex-col items-center justify-center gap-8 p-8 pt-24">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="text-2xl font-semibold text-gray-700 hover:text-brand-700 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button href="#specialties" size="lg" className="mt-4 w-full max-w-xs" onClick={handleNavClick}>
            Agendar Consulta
          </Button>
          <a
            href="tel:+5521983947259"
            className="flex items-center gap-2 text-gray-500 hover:text-brand-700 transition-colors"
            onClick={handleNavClick}
          >
            <Phone className="w-4 h-4" />
            (21) 98394-7259
          </a>
        </div>
      </div>
    </>
  );
}
