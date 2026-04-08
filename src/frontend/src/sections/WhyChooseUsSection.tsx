import { Badge } from "@/components/ui/badge";
import type { TrustBadge } from "@/types";
import { Clock, DollarSign, Shield, Users } from "lucide-react";
import { motion } from "motion/react";

interface TrustFeature {
  badge: TrustBadge;
  icon: React.ReactNode;
  detail: string;
}

const TRUST_FEATURES: TrustFeature[] = [
  {
    badge: { value: "24/7", label: "Always Available" },
    icon: <Clock className="w-8 h-8 text-primary" />,
    detail:
      "We never close. Whether it's 2 AM or a holiday, our dispatch team is ready to send help your way within minutes of your call.",
  },
  {
    badge: { value: "Expert", label: "Experienced Team" },
    icon: <Users className="w-8 h-8 text-primary" />,
    detail:
      "Our operators are trained professionals with years of hands-on experience handling all vehicle types in all road conditions.",
  },
  {
    badge: { value: "<30 min", label: "Fast Response Time" },
    icon: <Shield className="w-8 h-8 text-primary" />,
    detail:
      "We average under 30 minutes from call to arrival in Nayudupeta and surrounding areas. Speed matters in an emergency.",
  },
  {
    badge: { value: "Fair", label: "Affordable Rates" },
    icon: <DollarSign className="w-8 h-8 text-primary" />,
    detail:
      "Transparent pricing with no hidden fees. We give you an upfront quote before we start — because honesty builds trust.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section
      id="about"
      className="py-20 bg-muted/30"
      data-ocid="why-choose-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-3 bg-primary/15 text-primary border-primary/30 text-xs uppercase tracking-wider font-semibold">
            Why GVR
          </Badge>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground">
            Why Choose Us?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            When you're stranded on the road, you need a team you can count on.
            Here's why Nellore district trusts GVR Towing Service.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          data-ocid="trust-features-grid"
        >
          {TRUST_FEATURES.map((feature, i) => (
            <motion.div
              key={feature.badge.label}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-smooth"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-ocid={`trust-card-${i}`}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <div className="font-display font-extrabold text-2xl text-primary mb-1">
                {feature.badge.value}
              </div>
              <h3 className="font-display font-bold text-foreground text-base mb-3">
                {feature.badge.label}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {[
            { value: "10+", label: "Years in Service" },
            { value: "500+", label: "Vehicles Rescued" },
            { value: "100%", label: "Customer Satisfaction" },
            { value: "30 min", label: "Avg Response Time" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="bg-card border border-border rounded-xl p-5 text-center"
              data-ocid={`stat-card-${i}`}
            >
              <div className="font-display font-extrabold text-3xl text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
