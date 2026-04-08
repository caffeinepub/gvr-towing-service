import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const PHONE = "9666099927";
const WHATSAPP_LINK = `https://wa.me/91${PHONE}?text=Hello%20GVR%20Towing%2C%20I%20need%20roadside%20assistance.`;

interface FormState {
  name: string;
  phone: string;
  issue: string;
  message: string;
}

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    issue: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build a WhatsApp message with form data
    const text = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nIssue: ${form.issue}\nMessage: ${form.message}`,
    );
    window.open(`https://wa.me/91${PHONE}?text=${text}`, "_blank");
    setSubmitted(true);
  };

  const updateField =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <section
      id="contact"
      className="py-20 bg-muted/30"
      data-ocid="contact-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-3 bg-primary/15 text-primary border-primary/30 text-xs uppercase tracking-wider font-semibold">
            Reach Us
          </Badge>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground">
            Contact Us
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            In an emergency, call immediately. For non-urgent requests, fill the
            form and we'll get back to you right away.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Big phone CTA */}
            <div className="bg-primary rounded-2xl p-8 mb-6 text-center shadow-xl shadow-primary/25">
              <p className="text-primary-foreground/80 text-sm font-semibold uppercase tracking-widest mb-2">
                Available 24/7 — Call Now
              </p>
              <a
                href={`tel:${PHONE}`}
                className="block font-display font-extrabold text-4xl sm:text-5xl text-primary-foreground hover:scale-105 transition-smooth"
                data-ocid="contact-big-phone"
              >
                {PHONE}
              </a>
              <p className="text-primary-foreground/70 text-sm mt-2">
                Emergency towing &amp; roadside assistance
              </p>
            </div>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-card border border-border rounded-xl px-5 py-4 mb-4 hover:border-primary/40 transition-smooth group"
              data-ocid="whatsapp-link"
            >
              <div className="w-11 h-11 rounded-lg bg-[oklch(0.52_0.17_142/0.15)] border border-[oklch(0.52_0.17_142/0.3)] flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-[oklch(0.65_0.17_142)]" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">
                  WhatsApp Chat
                </p>
                <p className="text-xs text-muted-foreground">
                  Message us on WhatsApp — quick response guaranteed
                </p>
              </div>
            </a>

            {/* Info cards */}
            <div className="space-y-3">
              {[
                {
                  icon: <MapPin className="w-5 h-5 text-primary" />,
                  title: "Location",
                  detail: "Nayudupeta, Nellore District, Andhra Pradesh",
                  ocid: "contact-location",
                },
                {
                  icon: <Clock className="w-5 h-5 text-primary" />,
                  title: "Working Hours",
                  detail: "24 Hours / 7 Days / 365 Days a Year",
                  ocid: "contact-hours",
                },
                {
                  icon: <Phone className="w-5 h-5 text-primary" />,
                  title: "Emergency Line",
                  detail: PHONE,
                  href: `tel:${PHONE}`,
                  ocid: "contact-phone-row",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 bg-card border border-border rounded-xl px-5 py-4"
                  data-ocid={item.ocid}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                      {item.title}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-semibold text-foreground text-sm hover:text-primary transition-colors"
                      >
                        {item.detail}
                      </a>
                    ) : (
                      <p className="font-semibold text-foreground text-sm truncate">
                        {item.detail}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-card border border-border rounded-2xl p-7">
              <h3 className="font-display font-bold text-foreground text-xl mb-1">
                Send a Message
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Fill in the details below — we'll reach out via WhatsApp.
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-display font-bold text-foreground text-lg mb-2">
                    Request Sent!
                  </h4>
                  <p className="text-muted-foreground text-sm mb-5">
                    Your message has been opened in WhatsApp. We'll get back to
                    you shortly!
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    data-ocid="contact-form-reset"
                  >
                    Send Another
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  data-ocid="contact-form"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="contact-name">Your Name</Label>
                      <Input
                        id="contact-name"
                        placeholder="e.g. Ravi Kumar"
                        value={form.name}
                        onChange={updateField("name")}
                        required
                        data-ocid="contact-input-name"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="contact-phone">Phone Number</Label>
                      <Input
                        id="contact-phone"
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={form.phone}
                        onChange={updateField("phone")}
                        required
                        data-ocid="contact-input-phone"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="contact-issue">Vehicle Issue</Label>
                    <select
                      id="contact-issue"
                      value={form.issue}
                      onChange={updateField("issue")}
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      data-ocid="contact-select-issue"
                    >
                      <option value="">Select your issue</option>
                      <option>Vehicle Breakdown</option>
                      <option>Flat Tire</option>
                      <option>Dead Battery / Jump Start</option>
                      <option>Accident Recovery</option>
                      <option>Out of Fuel</option>
                      <option>Vehicle Lockout</option>
                      <option>Heavy Vehicle Towing</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="contact-message">Message / Location</Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Describe your situation or provide your current location..."
                      rows={4}
                      value={form.message}
                      onChange={updateField("message")}
                      data-ocid="contact-input-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full font-display font-bold text-base gap-2"
                    data-ocid="contact-submit"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Send via WhatsApp
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    Or call us directly:{" "}
                    <a
                      href={`tel:${PHONE}`}
                      className="text-primary font-semibold hover:underline"
                    >
                      {PHONE}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
