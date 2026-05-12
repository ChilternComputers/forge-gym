"use client";

import { Suspense, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSearchParams } from "next/navigation";
import { Dumbbell, Users, Clock, CheckCircle, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

const validClasses = ["strength", "hiit", "reformer", "boxing", "any"] as const;

const trialSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(254, "Email is too long"),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(20, "Phone number is too long"),
  preferredClass: z.string().min(1, "Please select a class").refine((val) => validClasses.includes(val as typeof validClasses[number]), "Invalid class selection"),
});

type TrialForm = z.infer<typeof trialSchema>;

const benefits = [
  {
    icon: Dumbbell,
    title: "Full Access",
    description: "Try any class on our timetable — strength, HIIT, reformer, or boxing.",
  },
  {
    icon: Users,
    title: "Coach Orientation",
    description: "A dedicated coach will meet you, show you around, and help you get started.",
  },
  {
    icon: Clock,
    title: "No Pressure",
    description: "One free session, zero commitment. Just show up and see what FORGE is about.",
  },
];

function FreeTrialForm() {
  const searchParams = useSearchParams();
  const rawClass = searchParams.get("class") || "";
  const preselectedClass = validClasses.includes(rawClass as typeof validClasses[number]) ? rawClass : "";
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TrialForm>({
    resolver: zodResolver(trialSchema),
    defaultValues: {
      preferredClass: preselectedClass,
    },
  });

  const onSubmit = (data: TrialForm) => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-brand-surface rounded-xl border border-white/5 flex flex-col items-center justify-center" style={{ padding: "3rem", textAlign: "center", minHeight: "400px" }}>
        <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center" style={{ marginBottom: "1.5rem" }}>
          <CheckCircle size={32} className="text-brand-gold" aria-hidden="true" />
        </div>
        <h2 className="font-heading text-3xl uppercase tracking-wide" style={{ marginBottom: "1rem" }}>
          You&apos;re Booked
        </h2>
        <p className="text-brand-muted text-sm" style={{ maxWidth: "24rem" }}>
          Check your email for confirmation. We&apos;ll see you at FORGE.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-brand-surface rounded-xl border border-white/5 flex flex-col"
      style={{ padding: "2rem", gap: "1.5rem" }}
    >
      <div style={{ marginBottom: "1.5rem" }}>
        <h2 className="font-heading text-2xl uppercase tracking-wide" style={{ marginBottom: "0.5rem" }}>
          Book Your Trial
        </h2>
        <p className="text-brand-muted text-sm">
          Takes 30 seconds. We&apos;ll confirm within the hour.
        </p>
      </div>

      <Input
        id="trial-name"
        label="Full Name"
        placeholder="Your name"
        error={errors.name?.message}
        {...register("name")}
      />
      <Input
        id="trial-email"
        label="Email"
        type="email"
        placeholder="you@example.com"
        error={errors.email?.message}
        {...register("email")}
      />
      <Input
        id="trial-phone"
        label="Phone"
        type="tel"
        placeholder="07xxx xxxxxx"
        error={errors.phone?.message}
        {...register("phone")}
      />

      <div className="flex flex-col" style={{ gap: "0.5rem" }}>
        <label
          htmlFor="trial-class"
          className="block font-mono text-xs uppercase tracking-[0.15em] text-brand-white/80"
        >
          Preferred Class
        </label>
        <div className="relative">
          <select
            id="trial-class"
            aria-invalid={errors.preferredClass ? true : undefined}
            aria-describedby={errors.preferredClass ? "trial-class-error" : undefined}
            className="w-full bg-brand-surface border border-brand-muted/20 hover:border-brand-gold/50 rounded-lg text-brand-white text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none transition-colors duration-200 appearance-none"
            style={{ paddingLeft: "1rem", paddingRight: "2.5rem", paddingTop: "0.875rem", paddingBottom: "0.875rem" }}
            {...register("preferredClass")}
          >
            <option value="">Select a class...</option>
            <option value="strength">FORGE STRENGTH</option>
            <option value="hiit">FORGE HIIT</option>
            <option value="reformer">FORGE REFORMER</option>
            <option value="boxing">FORGE BOXING</option>
            <option value="any">No preference — surprise me</option>
          </select>
          <ChevronDown size={16} aria-hidden="true" className="absolute text-brand-muted pointer-events-none" style={{ right: "1rem", top: "50%", transform: "translateY(-50%)" }} />
        </div>
        {errors.preferredClass && (
          <p id="trial-class-error" className="text-red-500 text-xs font-mono" role="alert">
            {errors.preferredClass.message}
          </p>
        )}
      </div>

      <Button type="submit" variant="primary" className="w-full" size="large">
        BOOK MY FREE TRIAL
      </Button>

      <p className="text-brand-muted text-xs" style={{ textAlign: "center" }}>
        By submitting, you agree to our{" "}
        <a
          href="/privacy/"
          className="text-brand-gold underline hover:text-brand-gold-light focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded"
        >
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}

export default function FreeTrialPage() {
  return (
    <>
      <section className="section-padding bg-brand-black" style={{ paddingTop: "10rem", paddingBottom: "5rem" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto", gap: "4rem" }}>
          {/* Left: content */}
          <AnimateOnScroll variant="slideLeft">
            <Breadcrumbs items={[{ label: "Free Trial" }]} />
            <span className="font-mono text-sm uppercase tracking-[0.3em] text-brand-gold block" style={{ marginBottom: "1rem" }}>
              Free Trial
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight leading-[0.9]" style={{ marginBottom: "1.5rem" }}>
              Your First
              <br />
              Session Is
              <br />
              <span className="text-gradient">On Us</span>
            </h1>
            <p className="text-brand-white/90 text-lg leading-relaxed" style={{ marginBottom: "2.5rem", maxWidth: "28rem" }}>
              No card details. No commitment. Just fill in the form, pick a
              class, and come experience what premium training feels like.
            </p>

            {/* Benefits */}
            <div className="flex flex-col" style={{ gap: "1.5rem" }}>
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex" style={{ gap: "1rem" }}>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center">
                    <benefit.icon size={18} className="text-brand-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-heading text-lg uppercase tracking-wide" style={{ marginBottom: "0.25rem" }}>
                      {benefit.title}
                    </h2>
                    <p className="text-brand-muted text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="border-t border-white/5" style={{ marginTop: "2.5rem", paddingTop: "2rem" }}>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-brand-muted">
                <span className="text-brand-gold font-medium">500+</span>{" "}
                members and counting
              </p>
            </div>
          </AnimateOnScroll>

          {/* Right: form */}
          <AnimateOnScroll variant="slideRight">
            <Suspense fallback={
              <div className="bg-brand-surface rounded-xl border border-white/5 animate-pulse" style={{ padding: "2rem", height: "500px" }} />
            }>
              <FreeTrialForm />
            </Suspense>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-dark" style={{ textAlign: "center" }}>
        <AnimateOnScroll>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "1rem" }}>
            Plan Your Visit
          </span>
          <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight" style={{ marginBottom: "1.5rem" }}>
            View the Timetable
          </h2>
          <p className="text-brand-muted text-lg" style={{ marginBottom: "2rem", maxWidth: "32rem", marginLeft: "auto", marginRight: "auto" }}>
            Check class times and find the perfect session for your schedule.
          </p>
          <Button href="/timetable" variant="primary" size="large">
            SEE THE TIMETABLE
          </Button>
        </AnimateOnScroll>
      </section>
    </>
  );
}
