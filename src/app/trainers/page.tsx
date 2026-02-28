import Image from "next/image";
import type { Metadata } from "next";
import { Instagram } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { trainers } from "@/data/trainers";

export const metadata: Metadata = {
  title: "Our Trainers",
  description:
    "Meet the world-class coaches at FORGE GYM. Certified experts in strength, HIIT, reformer pilates, and boxing.",
};

export default function TrainersPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=80"
          alt="FORGE GYM trainers"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
        <div className="relative z-10 section-padding pb-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-gold mb-3 block">
            The Team
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight">
            Meet Your Coaches
          </h1>
        </div>
      </section>

      {/* Trainer profiles */}
      <section className="section-padding bg-brand-black">
        <div className="max-w-[1400px] mx-auto space-y-20">
          {trainers.map((trainer, i) => (
            <AnimateOnScroll
              key={trainer.id}
              variant={i % 2 === 0 ? "slideLeft" : "slideRight"}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  i % 2 !== 0 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative aspect-[3/4] rounded-lg overflow-hidden ${
                    i % 2 !== 0 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-gold mb-3 block">
                    {trainer.role}
                  </span>
                  <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight mb-2">
                    {trainer.name}
                  </h2>
                  <p className="font-mono text-sm text-brand-gold mb-6">
                    {trainer.specialty}
                  </p>
                  <p className="text-brand-white/80 text-lg leading-relaxed mb-8">
                    {trainer.bio}
                  </p>

                  {/* Certifications */}
                  <div className="mb-8">
                    <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-brand-muted mb-3">
                      Certifications
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {trainer.certifications.map((cert) => (
                        <span
                          key={cert}
                          className="font-mono text-[0.65rem] uppercase tracking-wider bg-brand-surface border border-white/5 text-brand-white/70 px-3 py-1.5 rounded-full"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {trainer.instagram && (
                    <a
                      href={`https://instagram.com/${trainer.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-gold-light font-mono text-sm transition-colors duration-300"
                    >
                      <Instagram size={18} />@{trainer.instagram}
                    </a>
                  )}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
