"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, CheckCircle, ChevronDown } from "lucide-react";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(254, "Email is too long"),
  phone: z.string().trim().max(20, "Phone number is too long").optional(),
  enquiry: z.string().min(1, "Please select an enquiry type"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message is too long"),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: "123 Forge Street\nLondon, EC2A 4NE",
  },
  { icon: Phone, label: "Phone", value: "020 1234 5678", href: "tel:+442012345678" },
  {
    icon: Mail,
    label: "Email",
    value: "hello@forgegym.co.uk",
    href: "mailto:hello@forgegym.co.uk",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri: 05:30–22:00\nSat: 07:00–20:00\nSun: 08:00–18:00",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactForm) => {
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-brand-black" style={{ paddingTop: '10rem', paddingBottom: '3rem' }}>
        <div style={{ maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}>
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: '0.75rem' }}>
            Get in Touch
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight" style={{ marginBottom: '1rem' }}>
            Contact Us
          </h1>
          <p className="text-brand-muted text-lg" style={{ maxWidth: '36rem' }}>
            Questions about membership, classes, or personal training? We&apos;re
            here to help.
          </p>
        </div>
      </section>

      {/* Contact form + details */}
      <section className="section-padding bg-brand-black" style={{ paddingTop: '2rem' }}>
        <div className="grid grid-cols-1 lg:grid-cols-5" style={{ maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto', gap: '3rem' }}>
          {/* Form */}
          <AnimateOnScroll variant="slideLeft" className="lg:col-span-3">
            {submitted ? (
              <div className="bg-brand-surface rounded-xl border border-white/5 flex flex-col items-center justify-center" style={{ padding: "3rem", textAlign: "center", minHeight: "400px" }}>
                <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center" style={{ marginBottom: "1.5rem" }}>
                  <CheckCircle size={32} className="text-brand-gold" aria-hidden="true" />
                </div>
                <h2 className="font-heading text-3xl uppercase tracking-wide" style={{ marginBottom: "1rem" }}>
                  Message Sent
                </h2>
                <p className="text-brand-muted text-sm" style={{ maxWidth: "24rem" }}>
                  Thank you for getting in touch. We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-brand-surface rounded-xl border border-white/5 flex flex-col"
              style={{ padding: '2rem', gap: '1.5rem' }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '1.5rem' }}>
                <Input
                  id="name"
                  label="Name"
                  placeholder="Your name"
                  error={errors.name?.message}
                  {...register("name")}
                />
                <Input
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                  error={errors.email?.message}
                  {...register("email")}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '1.5rem' }}>
                <Input
                  id="phone"
                  label="Phone (optional)"
                  type="tel"
                  placeholder="07xxx xxxxxx"
                  {...register("phone")}
                />
                <div className="flex flex-col" style={{ gap: '0.5rem' }}>
                  <label
                    htmlFor="enquiry"
                    className="block font-mono text-xs uppercase tracking-[0.15em] text-brand-white/80"
                  >
                    Enquiry Type
                  </label>
                  <div className="relative">
                    <select
                      id="enquiry"
                      aria-invalid={errors.enquiry ? true : undefined}
                      aria-describedby={errors.enquiry ? "enquiry-error" : undefined}
                      className="w-full bg-brand-surface border border-brand-muted/20 hover:border-brand-gold/50 rounded-lg text-brand-white text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none transition-colors duration-200 appearance-none"
                      style={{ paddingLeft: '1rem', paddingRight: '2.5rem', paddingTop: '0.875rem', paddingBottom: '0.875rem' }}
                      {...register("enquiry")}
                    >
                      <option value="">Select...</option>
                      <option value="membership">Membership</option>
                      <option value="classes">Classes</option>
                      <option value="pt">Personal Training</option>
                      <option value="corporate">Corporate</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown size={16} className="absolute text-brand-muted pointer-events-none" aria-hidden="true" style={{ right: "1rem", top: "50%", transform: "translateY(-50%)" }} />
                  </div>
                  {errors.enquiry && (
                    <p id="enquiry-error" className="text-red-500 text-xs font-mono" role="alert">
                      {errors.enquiry.message}
                    </p>
                  )}
                </div>
              </div>
              <Textarea
                id="message"
                label="Message"
                placeholder="Tell us how we can help..."
                error={errors.message?.message}
                {...register("message")}
              />
              <Button type="submit" variant="primary" className="w-full sm:w-auto">
                SEND MESSAGE
              </Button>
            </form>
            )}
          </AnimateOnScroll>

          {/* Contact details */}
          <AnimateOnScroll variant="slideRight" className="lg:col-span-2">
            <div className="flex flex-col" style={{ gap: '2rem' }}>
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex" style={{ gap: '1rem' }}>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center">
                    <detail.icon size={18} className="text-brand-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-brand-gold" style={{ marginBottom: '0.25rem' }}>
                      {detail.label}
                    </h3>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="text-brand-white/90 text-sm hover:text-brand-white transition-colors whitespace-pre-line focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-brand-white/90 text-sm whitespace-pre-line">
                        {detail.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Location map */}
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-brand-surface border border-white/5 relative" style={{ marginTop: '2rem' }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ padding: '2rem', gap: '1rem' }}>
                  <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center">
                    <MapPin size={28} className="text-brand-gold" aria-hidden="true" />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <h3 className="font-heading text-lg uppercase tracking-wide text-brand-white" style={{ marginBottom: '0.5rem' }}>
                      Find Us
                    </h3>
                    <p className="text-brand-white/80 text-sm" style={{ lineHeight: '1.6' }}>
                      123 Forge Street
                      <br />
                      London, EC2A 4NE
                    </p>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=EC2A+4NE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase tracking-[0.15em] text-brand-gold hover:text-brand-white transition-colors focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded"
                    style={{ marginTop: '0.5rem' }}
                  >
                    Get Directions &rarr;
                  </a>
                </div>
                {/* Decorative grid overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '2rem 2rem' }} />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-dark" style={{ textAlign: "center" }}>
        <AnimateOnScroll>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "1rem" }}>
            While You&apos;re Here
          </span>
          <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight" style={{ marginBottom: "1.5rem" }}>
            Explore Our Classes
          </h2>
          <p className="text-brand-muted text-lg" style={{ marginBottom: "2rem", maxWidth: "32rem", marginLeft: "auto", marginRight: "auto" }}>
            Strength, HIIT, reformer, and boxing — find the session that fits your goals.
          </p>
          <Button href="/classes" variant="primary" size="large">
            VIEW CLASSES
          </Button>
        </AnimateOnScroll>
      </section>
    </>
  );
}
