"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Building2, Heart, TrendingUp, Users, CheckCircle, Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { corporatePackages } from "@/data/corporate";

const enquirySchema = z.object({
  company: z.string().trim().min(2, "Company name is required").max(100, "Company name is too long"),
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(254, "Email is too long"),
  phone: z.string().trim().max(20, "Phone number is too long").optional(),
  teamSize: z.string().min(1, "Please select team size"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message is too long"),
});

type EnquiryForm = z.infer<typeof enquirySchema>;

const benefits = [
  { icon: Heart, title: "Reduced Absenteeism", description: "Physically active employees take 27% fewer sick days on average." },
  { icon: TrendingUp, title: "Boosted Productivity", description: "Regular exercise improves focus, energy, and cognitive performance." },
  { icon: Users, title: "Team Bonding", description: "Group sessions build camaraderie and trust beyond the office." },
  { icon: Building2, title: "Employer Branding", description: "Wellness perks attract and retain top talent in competitive markets." },
];

export default function CorporatePage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EnquiryForm>({
    resolver: zodResolver(enquirySchema),
  });

  const onSubmit = (data: EnquiryForm) => {
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-brand-black" style={{ paddingTop: "10rem", paddingBottom: "3rem" }}>
        <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
          <Breadcrumbs items={[{ label: "Corporate" }]} />
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "0.75rem" }}>
            Corporate Wellness
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight" style={{ marginBottom: "1rem" }}>
            Invest in Your Team
          </h1>
          <p className="text-brand-muted text-lg" style={{ maxWidth: "36rem" }}>
            Tailored fitness programmes that boost productivity, reduce
            absenteeism, and build stronger teams.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-brand-black" style={{ paddingTop: "2rem" }}>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto", gap: "2rem" }}>
          {benefits.map((b, i) => (
            <AnimateOnScroll key={b.title} delay={i * 0.1}>
              <div className="bg-brand-surface rounded-xl border border-white/5 flex" style={{ padding: "2rem", gap: "1.5rem" }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center">
                  <b.icon size={22} className="text-brand-gold" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-heading text-xl uppercase tracking-wide" style={{ marginBottom: "0.5rem" }}>
                    {b.title}
                  </h2>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-brand-dark">
        <div style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}>
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "1rem" }}>
                Packages
              </span>
              <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight">
                Choose Your Plan
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "1.5rem" }}>
            {corporatePackages.map((pkg, i) => (
              <AnimateOnScroll key={pkg.id} delay={i * 0.1}>
                <div
                  className={cn(
                    "relative rounded-xl flex flex-col h-full",
                    pkg.highlighted
                      ? "bg-brand-surface border-2 border-brand-gold"
                      : "bg-brand-surface border border-white/5"
                  )}
                  style={{ padding: "2rem" }}
                >
                  {pkg.highlighted && (
                    <span className="absolute left-1/2 -translate-x-1/2 bg-brand-gold text-brand-black font-mono text-xs uppercase tracking-[0.2em] rounded-full" style={{ top: "-0.875rem", paddingLeft: "1rem", paddingRight: "1rem", paddingTop: "0.375rem", paddingBottom: "0.375rem" }}>
                      Most Popular
                    </span>
                  )}

                  <h3 className="font-heading text-3xl uppercase tracking-wider" style={{ marginBottom: "0.5rem" }}>
                    {pkg.name}
                  </h3>
                  <p className="font-mono text-sm text-brand-gold" style={{ marginBottom: "1rem" }}>
                    {pkg.teamSize}
                  </p>
                  <p className="text-brand-muted text-sm" style={{ marginBottom: "1.5rem" }}>
                    {pkg.description}
                  </p>

                  <ul className="flex flex-col flex-1" style={{ gap: "0.75rem", marginBottom: "2rem" }}>
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start" style={{ gap: "0.75rem" }}>
                        <Check
                          size={16}
                          aria-hidden="true"
                          className={cn(
                            "flex-shrink-0",
                            pkg.highlighted ? "text-brand-gold" : "text-brand-muted"
                          )}
                          style={{ marginTop: "0.125rem" }}
                        />
                        <span className="text-brand-white/90 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="#enquiry"
                    variant={pkg.highlighted ? "primary" : "ghost"}
                    className="w-full"
                  >
                    GET A QUOTE
                  </Button>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquiry" className="section-padding bg-brand-black">
        <div style={{ maxWidth: "42rem", marginLeft: "auto", marginRight: "auto" }}>
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "1rem" }}>
                Get in Touch
              </span>
              <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight">
                Corporate Enquiry
              </h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            {submitted ? (
              <div className="bg-brand-surface rounded-xl border border-white/5 flex flex-col items-center justify-center" style={{ padding: "3rem", textAlign: "center", minHeight: "400px" }}>
                <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center" style={{ marginBottom: "1.5rem" }}>
                  <CheckCircle size={32} className="text-brand-gold" aria-hidden="true" />
                </div>
                <h2 className="font-heading text-3xl uppercase tracking-wide" style={{ marginBottom: "1rem" }}>
                  Enquiry Sent
                </h2>
                <p className="text-brand-muted text-sm" style={{ maxWidth: "24rem" }}>
                  Thank you. Our corporate team will be in touch within 24 hours.
                </p>
              </div>
            ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-brand-surface rounded-xl border border-white/5 flex flex-col"
              style={{ padding: "2rem", gap: "1.5rem" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "1.5rem" }}>
                <Input
                  id="corp-company"
                  label="Company Name"
                  placeholder="Your company"
                  error={errors.company?.message}
                  {...register("company")}
                />
                <Input
                  id="corp-name"
                  label="Your Name"
                  placeholder="Full name"
                  error={errors.name?.message}
                  {...register("name")}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "1.5rem" }}>
                <Input
                  id="corp-email"
                  label="Email"
                  type="email"
                  placeholder="you@company.com"
                  error={errors.email?.message}
                  {...register("email")}
                />
                <Input
                  id="corp-phone"
                  label="Phone (optional)"
                  type="tel"
                  placeholder="07xxx xxxxxx"
                  {...register("phone")}
                />
              </div>
              <div className="flex flex-col" style={{ gap: "0.5rem" }}>
                <label
                  htmlFor="corp-team-size"
                  className="block font-mono text-xs uppercase tracking-[0.15em] text-brand-white/80"
                >
                  Team Size
                </label>
                <div className="relative">
                  <select
                    id="corp-team-size"
                    aria-invalid={errors.teamSize ? true : undefined}
                    aria-describedby={errors.teamSize ? "corp-team-size-error" : undefined}
                    className="w-full bg-brand-surface border border-brand-muted/20 hover:border-brand-gold/50 rounded-lg text-brand-white text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none transition-colors duration-200 appearance-none"
                    style={{ paddingLeft: "1rem", paddingRight: "2.5rem", paddingTop: "0.875rem", paddingBottom: "0.875rem" }}
                    {...register("teamSize")}
                  >
                    <option value="">Select team size...</option>
                    <option value="5-15">5–15 employees</option>
                    <option value="15-30">15–30 employees</option>
                    <option value="30-50">30–50 employees</option>
                    <option value="50+">50+ employees</option>
                  </select>
                  <ChevronDown size={16} aria-hidden="true" className="absolute text-brand-muted pointer-events-none" style={{ right: "1rem", top: "50%", transform: "translateY(-50%)" }} />
                </div>
                {errors.teamSize && (
                  <p id="corp-team-size-error" className="text-red-500 text-xs font-mono" role="alert">
                    {errors.teamSize.message}
                  </p>
                )}
              </div>
              <Textarea
                id="corp-message"
                label="Message"
                placeholder="Tell us about your team's wellness goals..."
                error={errors.message?.message}
                {...register("message")}
              />
              <Button type="submit" variant="primary" className="w-full">
                SUBMIT ENQUIRY
              </Button>
            </form>
            )}
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-dark" style={{ textAlign: "center" }}>
        <AnimateOnScroll>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "1rem" }}>
            Ready to Get Started?
          </span>
          <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight" style={{ marginBottom: "1.5rem" }}>
            Build a Healthier Team
          </h2>
          <p className="text-brand-muted text-lg" style={{ marginBottom: "2rem", maxWidth: "32rem", marginLeft: "auto", marginRight: "auto" }}>
            Get in touch for a bespoke corporate wellness quote tailored to your team.
          </p>
          <Button href="#enquiry" variant="primary" size="large">
            REQUEST A QUOTE
          </Button>
        </AnimateOnScroll>
      </section>
    </>
  );
}
