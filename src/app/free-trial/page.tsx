"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { Dumbbell, Users, Clock } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const trialSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  preferredClass: z.string().min(1, "Please select a class"),
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

export default function FreeTrialPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TrialForm>({
    resolver: zodResolver(trialSchema),
  });

  const onSubmit = (data: TrialForm) => {
    console.log("Trial form submitted:", data);
    alert("You're booked! Check your email for confirmation.");
  };

  return (
    <>
      <section className="pt-36 pb-20 section-padding bg-brand-black">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <AnimateOnScroll variant="slideLeft">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-gold mb-4 block">
              Free Trial
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight leading-[0.9] mb-6">
              Your First
              <br />
              Session Is
              <br />
              <span className="text-gradient">On Us</span>
            </h1>
            <p className="text-brand-white/70 text-lg leading-relaxed mb-10 max-w-md">
              No card details. No commitment. Just fill in the form, pick a
              class, and come experience what premium training feels like.
            </p>

            {/* Benefits */}
            <div className="space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center">
                    <benefit.icon size={18} className="text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg uppercase tracking-wide mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-brand-muted text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="mt-10 pt-8 border-t border-white/5">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-brand-muted">
                <span className="text-brand-gold font-medium">500+</span>{" "}
                members and counting
              </p>
            </div>
          </AnimateOnScroll>

          {/* Right: form */}
          <AnimateOnScroll variant="slideRight">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-brand-surface rounded-xl p-8 border border-white/5 space-y-6"
            >
              <div className="mb-6">
                <h2 className="font-heading text-2xl uppercase tracking-wide mb-2">
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

              <div className="space-y-2">
                <label
                  htmlFor="trial-class"
                  className="block font-mono text-xs uppercase tracking-[0.15em] text-brand-muted"
                >
                  Preferred Class
                </label>
                <select
                  id="trial-class"
                  className="w-full bg-brand-surface border border-brand-muted/20 rounded-lg px-4 py-3.5 text-brand-white text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-colors duration-200 appearance-none"
                  {...register("preferredClass")}
                >
                  <option value="">Select a class...</option>
                  <option value="strength">FORGE STRENGTH</option>
                  <option value="hiit">FORGE HIIT</option>
                  <option value="reformer">FORGE REFORMER</option>
                  <option value="boxing">FORGE BOXING</option>
                  <option value="any">No preference — surprise me</option>
                </select>
                {errors.preferredClass && (
                  <p className="text-red-400 text-xs font-mono">
                    {errors.preferredClass.message}
                  </p>
                )}
              </div>

              <Button type="submit" variant="primary" className="w-full" size="large">
                BOOK MY FREE TRIAL
              </Button>

              <p className="text-brand-muted text-[0.7rem] text-center">
                By submitting, you agree to our{" "}
                <Link
                  href="/privacy"
                  className="text-brand-gold hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
