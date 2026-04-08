import { Clock, MapPin, Phone, Truck } from "lucide-react";

const PHONE = "9666099927";
const YEAR = new Date().getFullYear();
const UTM_LINK = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
  typeof window !== "undefined" ? window.location.hostname : "",
)}`;

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Our Services", href: "#services" },
  { label: "Why Choose Us", href: "#about" },
  { label: "Service Areas", href: "#areas" },
  { label: "Contact", href: "#contact" },
];

const SERVICE_LIST = [
  "Emergency Towing",
  "Vehicle Recovery",
  "Roadside Assistance",
  "Heavy Towing",
  "Local Transport",
  "Accident Recovery",
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border" data-ocid="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Truck
                  className="w-5 h-5 text-primary-foreground"
                  strokeWidth={2.5}
                />
              </div>
              <div>
                <span className="block font-display font-extrabold text-lg text-primary">
                  GVR
                </span>
                <span className="block font-display font-bold text-xs text-muted-foreground uppercase tracking-widest">
                  Towing Service
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Professional 24/7 emergency towing and roadside assistance in
              Nayudupeta, Nellore district.
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                data-ocid="footer-phone-link"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                {PHONE}
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                Nayudupeta, Nellore Dist., AP
              </div>
              <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                <Clock className="w-4 h-4 flex-shrink-0" />
                Open 24/7 — Always Ready
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="hover:text-primary transition-colors"
                    data-ocid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-foreground mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {SERVICE_LIST.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-foreground mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "Nayudupeta",
                "Nellore",
                "Sullurpeta",
                "Tada",
                "Srikalahasti",
                "Tirupati",
              ].map((area) => (
                <li key={area} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>
            © {YEAR}{" "}
            <span className="font-semibold text-foreground">
              GVR Towing Service
            </span>
            . Nayudupeta, Nellore. All rights reserved.
          </span>
          <span>
            Built with love using{" "}
            <a
              href={UTM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
