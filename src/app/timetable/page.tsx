"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Skeleton } from "@/components/ui/Skeleton";
import { timetable } from "@/data/timetable";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const dayColors: Record<string, { border: string; headerBg: string }> = {
  Monday:    { border: "#D4A843", headerBg: "rgba(212,168,67,0.1)" },
  Tuesday:   { border: "#EF4444", headerBg: "rgba(239,68,68,0.1)" },
  Wednesday: { border: "#A855F7", headerBg: "rgba(168,85,247,0.1)" },
  Thursday:  { border: "#3B82F6", headerBg: "rgba(59,130,246,0.1)" },
  Friday:    { border: "#10B981", headerBg: "rgba(16,185,129,0.1)" },
  Saturday:  { border: "#F97316", headerBg: "rgba(249,115,22,0.1)" },
  Sunday:    { border: "#EC4899", headerBg: "rgba(236,72,153,0.1)" },
};

const categoryColors: Record<string, string> = {
  strength: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  hiit: "bg-red-500/20 text-red-400 border-red-500/30",
  reformer: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  boxing: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
};

export default function TimetablePage() {
  const [selectedDay, setSelectedDay] = useState(
    days[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1]
  );
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => setHydrated(true), []);

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-brand-black" style={{ paddingTop: "10rem", paddingBottom: "3rem" }}>
        <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
          <Breadcrumbs items={[{ label: "Timetable" }]} />
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "0.75rem" }}>
            Schedule
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight" style={{ marginBottom: "1rem" }}>
            Class Timetable
          </h1>
          <p className="text-brand-muted text-lg" style={{ maxWidth: "36rem" }}>
            Plan your week. Book your spot. Show up and work.
          </p>
        </div>
      </section>

      {/* Mobile: Day tabs */}
      <section className="responsive-px bg-brand-black lg:hidden" style={{ paddingTop: "2.5rem", paddingBottom: "5rem" }}>
        <div className="flex overflow-x-auto scrollbar-hide" style={{ gap: "0.5rem", paddingBottom: "1rem", marginLeft: "-1.5rem", marginRight: "-1.5rem", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              aria-pressed={selectedDay === day}
              className={cn(
                "font-mono text-xs uppercase tracking-[0.1em] rounded-full border whitespace-nowrap transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none",
                selectedDay === day
                  ? "bg-brand-gold text-brand-black border-brand-gold"
                  : "bg-transparent text-brand-muted border-brand-muted/20 hover:border-brand-gold hover:text-brand-gold"
              )}
              style={{ paddingLeft: "1rem", paddingRight: "1rem", paddingTop: "0.625rem", paddingBottom: "0.625rem", minHeight: "44px" }}
            >
              {day.slice(0, 3)}
            </button>
          ))}
        </div>

        {/* Mobile: Day schedule */}
        <div className="flex flex-col" style={{ gap: "0.75rem", marginTop: "1rem" }}>
          {!hydrated ? (
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-brand-surface rounded-lg border border-white/5 flex items-center" style={{ padding: "1.25rem", gap: "1rem" }}>
                <Skeleton style={{ width: "60px", height: "1.5rem" }} />
                <div className="flex-1" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <Skeleton style={{ height: "1.25rem", width: "70%" }} />
                  <Skeleton style={{ height: "0.75rem", width: "50%" }} />
                </div>
                <Skeleton style={{ height: "1.5rem", width: "4rem" }} className="rounded-full" />
              </div>
            ))
          ) : (
          timetable
            .filter((slot) => slot.day === selectedDay)
            .map((slot) => (
              <AnimateOnScroll key={slot.id}>
                <div className="bg-brand-surface rounded-lg border border-white/5 flex items-center" style={{ padding: "1.25rem", gap: "1rem" }}>
                  <div style={{ textAlign: "center", minWidth: "60px" }}>
                    <span className="font-mono text-lg text-brand-white font-medium">
                      {slot.time}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg uppercase tracking-wide">
                      {slot.className}
                    </h3>
                    <p className="text-brand-muted text-xs font-mono" style={{ marginTop: "0.25rem" }}>
                      {slot.trainer} &middot; {slot.duration}
                    </p>
                  </div>
                  <div className="flex items-center" style={{ gap: "0.75rem" }}>
                    <span
                      className={cn(
                        "font-mono text-xs uppercase tracking-wider rounded-full border",
                        categoryColors[slot.category]
                      )}
                      style={{ paddingLeft: "0.75rem", paddingRight: "0.75rem", paddingTop: "0.25rem", paddingBottom: "0.25rem" }}
                    >
                      {slot.category}
                    </span>
                    <Link
                      href={`/free-trial?class=${slot.category}`}
                      className="font-mono text-xs text-brand-gold hover:text-brand-gold-light transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded"
                    >
                      Book &rarr;
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))
          )}
        </div>
      </section>

      {/* Desktop: Full week grid */}
      <section className="responsive-px bg-brand-black hidden lg:block" style={{ paddingTop: "2.5rem", paddingBottom: "5rem" }}>
        <div className="overflow-x-auto" style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
          {!hydrated ? (
            <div className="grid grid-cols-7" style={{ gap: "0.5rem" }}>
              {Array.from({ length: 7 }).map((_, col) => (
                <div key={col} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <Skeleton style={{ height: "2.5rem" }} />
                  {Array.from({ length: 4 }).map((_, row) => (
                    <Skeleton key={row} style={{ height: "5rem" }} />
                  ))}
                </div>
              ))}
            </div>
          ) : (
          <table className="w-full border-collapse">
            <caption className="sr-only">Weekly class timetable showing classes for each day</caption>
            <thead>
              <tr>
                {days.map((day) => (
                  <th
                    key={day}
                    scope="col"
                    className="font-mono text-xs uppercase tracking-[0.15em] text-left"
                    style={{
                      padding: "1rem",
                      borderBottom: `2px solid ${dayColors[day].border}`,
                      backgroundColor: dayColors[day].headerBg,
                      color: dayColors[day].border,
                    }}
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({
                length: Math.max(
                  ...days.map(
                    (day) => timetable.filter((s) => s.day === day).length
                  )
                ),
              }).map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {days.map((day) => {
                    const daySlots = timetable.filter((s) => s.day === day);
                    const slot = daySlots[rowIndex];
                    return (
                      <td
                        key={day}
                        className="align-top"
                        style={{
                          padding: "0.5rem",
                          borderLeft: `2px solid ${dayColors[day].border}30`,
                          borderBottom: "1px solid rgba(255,255,255,0.05)",
                        }}
                      >
                        {slot && (
                          <div className="bg-brand-surface rounded-lg border border-white/5 hover:border-brand-gold/20 transition-colors duration-300" style={{ padding: "0.75rem" }}>
                            <span className="font-mono text-xs text-brand-gold">
                              {slot.time}
                            </span>
                            <h4 className="font-heading text-sm uppercase tracking-wide" style={{ marginTop: "0.25rem" }}>
                              {slot.className}
                            </h4>
                            <p className="text-brand-muted text-xs font-mono" style={{ marginTop: "0.25rem" }}>
                              {slot.trainer}
                            </p>
                            <div className="flex items-center justify-between" style={{ marginTop: "0.5rem" }}>
                              <span
                                className={cn(
                                  "inline-block font-mono text-xs uppercase tracking-wider rounded-full border",
                                  categoryColors[slot.category]
                                )}
                                style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem", paddingTop: "0.125rem", paddingBottom: "0.125rem" }}
                              >
                                {slot.duration}
                              </span>
                              <Link
                                href={`/free-trial?class=${slot.category}`}
                                className="font-mono text-xs text-brand-gold hover:text-brand-gold-light transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded"
                              >
                                Book &rarr;
                              </Link>
                            </div>
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
          )}
        </div>
      </section>

      {/* Legend */}
      <section className="section-padding bg-brand-black" style={{ paddingTop: 0 }}>
        <div className="flex flex-wrap justify-center" style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto", gap: "1rem" }}>
          {Object.entries(categoryColors).map(([cat, color]) => (
            <span
              key={cat}
              className={cn(
                "font-mono text-xs uppercase tracking-wider rounded-full border",
                color
              )}
              style={{ paddingLeft: "1rem", paddingRight: "1rem", paddingTop: "0.375rem", paddingBottom: "0.375rem" }}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-dark" style={{ textAlign: "center" }}>
        <AnimateOnScroll>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "1rem" }}>
            Book Now
          </span>
          <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-tight" style={{ marginBottom: "1.5rem" }}>
            Ready to Book Your Spot?
          </h2>
          <p className="text-brand-muted text-lg" style={{ marginBottom: "2rem", maxWidth: "32rem", marginLeft: "auto", marginRight: "auto" }}>
            Your first session is free. Pick a class and come see what FORGE is all about.
          </p>
          <Button href="/free-trial" variant="primary" size="large">
            START YOUR FREE TRIAL
          </Button>
        </AnimateOnScroll>
      </section>
    </>
  );
}
