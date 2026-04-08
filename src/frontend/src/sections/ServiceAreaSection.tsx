import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

const PHONE = "9666099927";

const PRIMARY_AREAS = [
  { name: "Nayudupeta", note: "HQ — Fastest Response" },
  { name: "Sullurpeta", note: "~20 km" },
  { name: "Tada", note: "~25 km" },
  { name: "Nellore City", note: "~50 km" },
];

const EXTENDED_AREAS = [
  "Srikalahasti",
  "Tirupati",
  "Kavali",
  "Gudur",
  "Venkatagiri",
  "Atmakur",
  "Pellakur",
  "Podalakur",
  "Rapur",
  "Marripadu",
];

export function ServiceAreaSection() {
  return (
    <section
      id="areas"
      className="py-20 bg-background"
      data-ocid="service-area-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-3 bg-primary/15 text-primary border-primary/30 text-xs uppercase tracking-wider font-semibold">
            Coverage Map
          </Badge>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground">
            Service Area
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Headquartered in Nayudupeta, Nellore District — we cover the entire
            region and respond quickly wherever you are.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: HQ info + primary areas */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* HQ Card */}
            <div className="bg-card border border-primary/30 rounded-2xl p-6 mb-6 shadow-lg shadow-primary/5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-1">
                    GVR Towing Service HQ
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Nayudupeta, Nellore District, Andhra Pradesh
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/25 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      Available 24/7
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-card border border-border text-muted-foreground text-xs font-medium px-3 py-1 rounded-full">
                      Mobile: {PHONE}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Primary service areas */}
            <h3 className="font-display font-bold text-foreground text-sm uppercase tracking-wider mb-4">
              Primary Coverage Zones
            </h3>
            <div className="space-y-3 mb-8" data-ocid="primary-areas-list">
              {PRIMARY_AREAS.map((area, i) => (
                <motion.div
                  key={area.name}
                  className="flex items-center justify-between bg-card border border-border rounded-lg px-4 py-3 hover:border-primary/40 transition-smooth"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  data-ocid={`primary-area-${i}`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="font-semibold text-foreground text-sm">
                      {area.name}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                    {area.note}
                  </span>
                </motion.div>
              ))}
            </div>

            <a href={`tel:${PHONE}`} data-ocid="area-call-cta">
              <Button
                size="lg"
                className="w-full font-display font-bold gap-2 text-base"
              >
                <Phone className="w-5 h-5" />
                Call for Service in Your Area
              </Button>
            </a>
          </motion.div>

          {/* Right: Extended areas */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display font-bold text-foreground text-sm uppercase tracking-wider mb-5">
              Extended Coverage Areas
            </h3>
            <div
              className="flex flex-wrap gap-3 mb-8"
              data-ocid="extended-areas-list"
            >
              {EXTENDED_AREAS.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 text-sm font-medium text-foreground hover:border-primary/50 transition-smooth">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    {area}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Info callout */}
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                <span className="font-semibold text-foreground">
                  Not seeing your area?
                </span>{" "}
                Don't worry — we cover a wide radius around Nayudupeta. Call us
                directly and we'll confirm availability and reach you ASAP.
              </p>
              <p className="text-sm font-semibold text-primary flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href={`tel:${PHONE}`} className="hover:underline">
                  {PHONE} — Available 24/7
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
