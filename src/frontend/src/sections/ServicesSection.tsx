import { Badge } from "@/components/ui/badge";
import type { Service } from "@/types";
import {
  AlertTriangle,
  ChevronRight,
  Fuel,
  Lock,
  TruckIcon,
  Wrench,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const PHONE = "9666099927";

const SERVICES: Service[] = [
  {
    id: "emergency-towing",
    icon: "truck",
    title: "Emergency Towing",
    description:
      "Fast response heavy-duty towing for all vehicle types — cars, bikes, SUVs, trucks — available any hour.",
  },
  {
    id: "vehicle-recovery",
    icon: "recovery",
    title: "Vehicle Recovery",
    description:
      "Stuck in a ditch or off-road? We recover stranded vehicles safely with specialized equipment.",
  },
  {
    id: "roadside-assistance",
    icon: "wrench",
    title: "Roadside Assistance",
    description:
      "Flat tire help, minor repairs, and roadside support to get you back on the road quickly and safely.",
  },
  {
    id: "heavy-towing",
    icon: "heavy",
    title: "Heavy Towing",
    description:
      "Trucks, buses, and heavy commercial vehicles — our fleet handles large-scale towing operations.",
  },
  {
    id: "local-transport",
    icon: "fuel",
    title: "Local Transport",
    description:
      "Need your vehicle moved locally within Nayudupeta or Nellore district? We provide safe local vehicle transport.",
  },
  {
    id: "accident-recovery",
    icon: "lock",
    title: "Accident Recovery",
    description:
      "Professional post-accident vehicle removal and recovery. We handle the scene carefully and efficiently.",
  },
];

function ServiceIcon({ id }: { id: string }) {
  const cls = "w-7 h-7 text-primary";
  switch (id) {
    case "emergency-towing":
      return <TruckIcon className={cls} />;
    case "roadside-assistance":
      return <Wrench className={cls} />;
    case "heavy-towing":
      return <TruckIcon className={cls} strokeWidth={2.5} />;
    case "local-transport":
      return <Fuel className={cls} />;
    case "accident-recovery":
      return <Lock className={cls} />;
    case "vehicle-recovery":
      return <Zap className={cls} />;
    default:
      return <AlertTriangle className={cls} />;
  }
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 bg-background"
      data-ocid="services-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-3 bg-primary/15 text-primary border-primary/30 text-xs uppercase tracking-wider font-semibold">
            What We Do
          </Badge>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground">
            Our Services
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            From emergency towing to roadside help — we have the equipment and
            expertise to handle any situation, day or night.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          data-ocid="services-grid"
        >
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-smooth"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              data-ocid={`service-card-${service.id}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                <ServiceIcon id={service.id} />
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-smooth"
                data-ocid={`service-cta-${service.id}`}
              >
                Request Service <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
