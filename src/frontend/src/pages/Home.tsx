import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContactSection } from "@/sections/ContactSection";
import { ServiceAreaSection } from "@/sections/ServiceAreaSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { WhyChooseUsSection } from "@/sections/WhyChooseUsSection";
import type { TrustBadge } from "@/types";
import { ChevronRight, Clock, MapPin, Phone, Shield, Star } from "lucide-react";
import { motion } from "motion/react";

const PHONE = "9666099927";

const TRUST_BADGES: TrustBadge[] = [
  { value: "24/7", label: "Always Available" },
  { value: "30 min", label: "Avg Response Time" },
  { value: "500+", label: "Vehicles Rescued" },
  { value: "100%", label: "Customer Satisfaction" },
];

export function HomePage() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Hero ──────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-[calc(100vh-88px)] flex items-center bg-background overflow-hidden"
      >
        {/* Background texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.25_0.04_30/0.3),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.18_0.02_50/0.5),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-5 bg-primary/15 text-primary border-primary/30 font-semibold px-3 py-1 text-xs uppercase tracking-wider">
                🚨 24/7 Emergency Service — Nayudupeta
              </Badge>
            </motion.div>

            <motion.h1
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-primary">24/7 Emergency</span>
              <br />
              <span className="text-foreground">Towing &amp;</span>
              <br />
              <span className="text-foreground">Roadside Assistance</span>
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Fast. Reliable. There When You Need Us. Serving Nayudupeta &amp;
              Nellore district with professional towing at any hour.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href={`tel:${PHONE}`} data-ocid="hero-call-cta">
                <Button
                  size="lg"
                  className="w-full sm:w-auto font-display font-extrabold text-lg px-8 py-6 rounded-xl gap-3 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 transition-smooth"
                >
                  <Phone className="w-5 h-5" />
                  CALL NOW {PHONE}
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto font-display font-bold text-base px-6 py-6 rounded-xl border-border hover:bg-muted transition-smooth"
                onClick={() => scrollTo("services")}
                data-ocid="hero-services-btn"
              >
                Our Services <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>

            {/* Quick contact row */}
            <motion.div
              className="mt-8 flex flex-wrap gap-4 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary" /> Nayudupeta, Nellore
                Dist.
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" /> Available 24 hours, 7
                days
              </span>
            </motion.div>
          </div>

          {/* Right — hero image */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
              <img
                src="/assets/generated/hero-tow-truck.dim_900x600.jpg"
                alt="GVR Towing Service professional tow truck"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg px-3 py-2 text-xs font-semibold text-foreground">
                  <span className="text-primary">●</span> Live — Ready to
                  dispatch
                </div>
                <div className="bg-primary rounded-lg px-3 py-2 text-xs font-bold text-primary-foreground">
                  30 min avg arrival
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Trust Badges ──────────────────────────────── */}
      <section
        className="bg-card border-y border-border py-10"
        data-ocid="trust-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TRUST_BADGES.map((badge, i) => (
              <motion.div
                key={badge.label}
                className="text-center"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="font-display font-extrabold text-3xl text-primary mb-1">
                  {badge.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {badge.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────── */}
      <ServicesSection />

      {/* ── Emergency CTA Banner ──────────────────────── */}
      <section className="bg-primary py-16" data-ocid="emergency-cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary-foreground mb-3">
              Stranded? We're On Our Way.
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              One call connects you to our dispatch team. We'll reach you within
              30 minutes.
            </p>
            <a href={`tel:${PHONE}`} data-ocid="banner-call-cta">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-display font-extrabold text-xl px-10 py-7 rounded-xl gap-3 shadow-lg transition-smooth"
              >
                <Phone className="w-6 h-6" />
                {PHONE}
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────── */}
      <WhyChooseUsSection />

      {/* ── Service Area ──────────────────────────────── */}
      <ServiceAreaSection />

      {/* ── About inline ──────────────────────────────── */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-primary/15 text-primary border-primary/30 text-xs uppercase tracking-wider font-semibold">
              Who We Are
            </Badge>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground mb-5">
              GVR Towing Service — Trusted Since Day One
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              GVR Towing Service is Nayudupeta's most reliable emergency towing
              and roadside assistance provider. Based in the heart of Nellore
              district, we've built our reputation on fast response times,
              professional service, and honest pricing.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our trained operators are available round the clock, equipped with
              modern towing vehicles and roadside tools to handle any situation
              — from flat tires on the highway to multi-vehicle recovery
              operations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: <Shield className="w-5 h-5 text-primary" />,
                  label: "Licensed & Insured",
                },
                {
                  icon: <Clock className="w-5 h-5 text-primary" />,
                  label: "24/7 Availability",
                },
                {
                  icon: <Star className="w-5 h-5 text-primary" />,
                  label: "5-Star Rated",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 bg-card border border-border rounded-lg px-4 py-3 text-sm font-semibold text-foreground"
                >
                  {item.icon}
                  {item.label}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              {
                value: "10+",
                label: "Years Experience",
                sub: "Serving Nellore district",
              },
              {
                value: "24/7",
                label: "Always Open",
                sub: "No holidays, no breaks",
              },
              { value: "500+", label: "Happy Customers", sub: "And counting" },
              {
                value: "<30",
                label: "Min Response",
                sub: "Average arrival time",
              },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`bg-card border border-border rounded-xl p-5 ${i === 0 ? "border-primary/40" : ""}`}
              >
                <div className="font-display font-extrabold text-3xl text-primary mb-1">
                  {stat.value}
                </div>
                <div className="font-semibold text-foreground text-sm">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {stat.sub}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────── */}
      <ContactSection />
    </>
  );
}
