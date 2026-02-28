"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
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

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-12 section-padding bg-brand-black">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-gold mb-3 block">
            Schedule
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight mb-4">
            Class Timetable
          </h1>
          <p className="text-brand-muted text-lg max-w-xl">
            Plan your week. Book your spot. Show up and work.
          </p>
        </div>
      </section>

      {/* Mobile: Day tabs */}
      <section className="section-padding pt-0 bg-brand-black lg:hidden">
        <div className="flex overflow-x-auto gap-2 pb-4 -mx-6 px-6 scrollbar-hide">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={cn(
                "font-mono text-xs uppercase tracking-[0.1em] px-4 py-2 rounded-full border whitespace-nowrap transition-all duration-300 cursor-pointer",
                selectedDay === day
                  ? "bg-brand-gold text-brand-black border-brand-gold"
                  : "bg-transparent text-brand-muted border-brand-muted/20"
              )}
            >
              {day.slice(0, 3)}
            </button>
          ))}
        </div>

        {/* Mobile: Day schedule */}
        <div className="space-y-3 mt-4">
          {timetable
            .filter((slot) => slot.day === selectedDay)
            .map((slot) => (
              <AnimateOnScroll key={slot.id}>
                <div className="bg-brand-surface rounded-lg p-5 border border-white/5 flex items-center gap-4">
                  <div className="text-center min-w-[60px]">
                    <span className="font-mono text-lg text-brand-white font-medium">
                      {slot.time}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg uppercase tracking-wide">
                      {slot.className}
                    </h3>
                    <p className="text-brand-muted text-xs font-mono mt-1">
                      {slot.trainer} &middot; {slot.duration}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "font-mono text-[0.6rem] uppercase tracking-wider px-3 py-1 rounded-full border",
                      categoryColors[slot.category]
                    )}
                  >
                    {slot.category}
                  </span>
                </div>
              </AnimateOnScroll>
            ))}
        </div>
      </section>

      {/* Desktop: Full week grid */}
      <section className="section-padding pt-0 bg-brand-black hidden lg:block">
        <div className="max-w-[1400px] mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {days.map((day) => (
                  <th
                    key={day}
                    className="font-mono text-xs uppercase tracking-[0.15em] text-brand-gold p-4 text-left border-b border-white/5"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Find max slots per day and create rows */}
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
                        className="p-2 border-b border-white/5 align-top"
                      >
                        {slot && (
                          <div className="bg-brand-surface rounded-lg p-3 border border-white/5 hover:border-brand-gold/20 transition-colors duration-300">
                            <span className="font-mono text-xs text-brand-gold">
                              {slot.time}
                            </span>
                            <h4 className="font-heading text-sm uppercase tracking-wide mt-1">
                              {slot.className}
                            </h4>
                            <p className="text-brand-muted text-[0.65rem] font-mono mt-1">
                              {slot.trainer}
                            </p>
                            <span
                              className={cn(
                                "inline-block font-mono text-[0.55rem] uppercase tracking-wider px-2 py-0.5 rounded-full border mt-2",
                                categoryColors[slot.category]
                              )}
                            >
                              {slot.duration}
                            </span>
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Legend */}
      <section className="section-padding pt-0 bg-brand-black">
        <div className="max-w-[1400px] mx-auto flex flex-wrap gap-4 justify-center">
          {Object.entries(categoryColors).map(([cat, color]) => (
            <span
              key={cat}
              className={cn(
                "font-mono text-[0.65rem] uppercase tracking-wider px-4 py-1.5 rounded-full border",
                color
              )}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-dark text-center">
        <AnimateOnScroll>
          <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-tight mb-6">
            Ready to Book Your Spot?
          </h2>
          <Button href="/free-trial" variant="primary" size="large">
            START YOUR FREE TRIAL
          </Button>
        </AnimateOnScroll>
      </section>
    </>
  );
}
