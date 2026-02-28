"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  enquiry: z.string().min(1, "Please select an enquiry type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactForm) => {
    // In production, this would POST to an API route
    console.log("Form submitted:", data);
    alert("Thank you! We'll be in touch within 24 hours.");
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-12 section-padding bg-brand-black">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-gold mb-3 block">
            Get in Touch
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-brand-muted text-lg max-w-xl">
            Questions about membership, classes, or personal training? We&apos;re
            here to help.
          </p>
        </div>
      </section>

      {/* Contact form + details */}
      <section className="section-padding pt-8 bg-brand-black">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Form */}
          <AnimateOnScroll variant="slideLeft" className="lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-brand-surface rounded-xl p-8 border border-white/5 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input
                  id="phone"
                  label="Phone (optional)"
                  type="tel"
                  placeholder="07xxx xxxxxx"
                  {...register("phone")}
                />
                <div className="space-y-2">
                  <label
                    htmlFor="enquiry"
                    className="block font-mono text-xs uppercase tracking-[0.15em] text-brand-muted"
                  >
                    Enquiry Type
                  </label>
                  <select
                    id="enquiry"
                    className="w-full bg-brand-surface border border-brand-muted/20 rounded-lg px-4 py-3.5 text-brand-white text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-colors duration-200 appearance-none"
                    {...register("enquiry")}
                  >
                    <option value="">Select...</option>
                    <option value="membership">Membership</option>
                    <option value="classes">Classes</option>
                    <option value="pt">Personal Training</option>
                    <option value="corporate">Corporate</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.enquiry && (
                    <p className="text-red-400 text-xs font-mono">
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
          </AnimateOnScroll>

          {/* Contact details */}
          <AnimateOnScroll variant="slideRight" className="lg:col-span-2">
            <div className="space-y-8">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center">
                    <detail.icon size={18} className="text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-brand-gold mb-1">
                      {detail.label}
                    </h3>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="text-brand-white/80 text-sm hover:text-brand-white transition-colors whitespace-pre-line"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-brand-white/80 text-sm whitespace-pre-line">
                        {detail.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="mt-8 aspect-[4/3] rounded-lg overflow-hidden bg-brand-surface border border-white/5 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-brand-gold/30 mx-auto mb-3" />
                  <p className="text-brand-muted text-sm font-mono">
                    Google Map
                    <br />
                    <span className="text-xs">(Embed here in production)</span>
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
