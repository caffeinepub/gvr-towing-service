import { Button } from "@/components/ui/button";
import type { NavLink } from "@/types";
import { Menu, Phone, Truck, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Our Services", href: "#services" },
  { label: "Service Areas", href: "#areas" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const PHONE = "9666099927";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-ocid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled ? "shadow-lg" : ""
      } bg-card border-b border-border`}
    >
      {/* Emergency banner */}
      <div className="bg-primary text-primary-foreground text-center py-1.5 text-sm font-semibold tracking-wide">
        <span className="inline-flex items-center gap-2">
          <Phone className="w-3.5 h-3.5" />
          24/7 EMERGENCY LINE:&nbsp;
          <a
            href={`tel:${PHONE}`}
            className="underline underline-offset-2 hover:opacity-80 transition-colors"
            data-ocid="header-emergency-phone"
          >
            {PHONE}
          </a>
        </span>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavClick("#home")}
          className="flex items-center gap-2.5 group"
          data-ocid="site-logo"
        >
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-md group-hover:scale-105 transition-smooth">
            <Truck
              className="w-5 h-5 text-primary-foreground"
              strokeWidth={2.5}
            />
          </div>
          <div className="leading-tight">
            <span className="block font-display font-extrabold text-lg text-primary tracking-tight">
              GVR
            </span>
            <span className="block font-display font-bold text-xs text-muted-foreground tracking-widest uppercase">
              Towing
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-smooth"
                data-ocid={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={`tel:${PHONE}`}
          className="hidden md:block"
          data-ocid="header-cta"
        >
          <Button
            type="button"
            variant="default"
            className="font-display font-bold tracking-wide gap-2"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </Button>
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-smooth"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          data-ocid="mobile-menu-toggle"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-border bg-card px-4 pb-4"
          data-ocid="mobile-menu"
        >
          <ul className="flex flex-col gap-1 pt-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-smooth"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <a
            href={`tel:${PHONE}`}
            className="mt-3 flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-primary text-primary-foreground font-display font-bold tracking-wide"
            data-ocid="mobile-call-cta"
          >
            <Phone className="w-4 h-4" />
            Call {PHONE}
          </a>
        </div>
      )}
    </header>
  );
}
