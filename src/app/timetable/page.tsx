"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { timetable } from "@/data/timetable";
import { useBookings } from "@/lib/useBookings";
import { motion, AnimatePresence } from "framer-motion";

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

type Tab = "timetable" | "bookings";

function BookButton({
  slotId,
  className: slotName,
  isBooked,
  onToggle,
}: {
  slotId: string;
  className: string;
  isBooked: boolean;
  onToggle: (slotId: string) => void;
}) {
  return (
    <button
      onClick={() => onToggle(slotId)}
      aria-label={isBooked ? `Cancel ${slotName} booking` : `Book ${slotName}`}
      className={cn(
        "font-mono text-xs uppercase tracking-wider rounded-full border transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none inline-flex items-center",
        isBooked
          ? "bg-brand-gold text-brand-black border-brand-gold hover:bg-brand-gold-light"
          : "bg-transparent text-brand-gold border-brand-gold/40 hover:border-brand-gold hover:bg-brand-gold/10"
      )}
      style={{
        paddingLeft: "0.75rem",
        paddingRight: "0.75rem",
        paddingTop: "0.25rem",
        paddingBottom: "0.25rem",
        gap: "0.35rem",
        minHeight: "32px",
      }}
    >
      {isBooked && (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
      {isBooked ? "Booked" : "Book"}
    </button>
  );
}

function Toast({ message }: { message: string | null }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 left-1/2 z-50 bg-brand-surface border border-brand-gold/30 text-brand-white font-mono text-xs uppercase tracking-[0.1em] rounded-full"
          style={{
            transform: "translateX(-50%)",
            paddingLeft: "1.25rem",
            paddingRight: "1.25rem",
            paddingTop: "0.75rem",
            paddingBottom: "0.75rem",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
          }}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function TimetablePage() {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [activeTab, setActiveTab] = useState<Tab>("timetable");
  const [toast, setToast] = useState<string | null>(null);
  const { bookings, loaded, isBooked, toggleBooking } = useBookings();

  // Set selected day to current day after mount (avoids hydration mismatch)
  useEffect(() => {
    const today = new Date().getDay();
    setSelectedDay(days[today === 0 ? 6 : today - 1]);
  }, []);

  const handleToggle = useCallback(
    (slotId: string) => {
      const result = toggleBooking(slotId);
      const slot = timetable.find((s) => s.id === slotId);
      const name = slot?.className ?? "Class";
      setToast(result === "booked" ? `${name} booked` : `${name} cancelled`);
    },
    [toggleBooking]
  );

  // Auto-dismiss toast
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 2000);
    return () => clearTimeout(timer);
  }, [toast]);

  // My Bookings grouped by day
  const bookedSlots = timetable.filter((s) => isBooked(s.id));
  const bookedByDay = days
    .map((day) => ({
      day,
      slots: bookedSlots.filter((s) => s.day === day),
    }))
    .filter((g) => g.slots.length > 0);

  const ready = loaded;

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
          <p className="text-brand-muted text-lg" style={{ maxWidth: "36rem", marginBottom: "1.5rem" }}>
            Plan your week. Book your spot. Show up and work.
          </p>

          {/* Tab toggle */}
          <div className="flex" style={{ gap: "0.5rem" }}>
            {(["timetable", "bookings"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                aria-pressed={activeTab === tab}
                className={cn(
                  "font-mono text-xs uppercase tracking-[0.1em] rounded-full border transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none",
                  activeTab === tab
                    ? "bg-brand-gold text-brand-black border-brand-gold"
                    : "bg-transparent text-brand-muted border-brand-muted/20 hover:border-brand-gold hover:text-brand-gold"
                )}
                style={{
                  paddingLeft: "1.25rem",
                  paddingRight: "1.25rem",
                  paddingTop: "0.625rem",
                  paddingBottom: "0.625rem",
                  minHeight: "44px",
                }}
              >
                {tab === "timetable" ? "Timetable" : `My Bookings (${bookedSlots.length})`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeTab === "timetable" ? (
        <>
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
              {timetable
                .filter((slot) => slot.day === selectedDay)
                .map((slot) => (
                  <AnimateOnScroll key={slot.id}>
                    <div className="bg-brand-surface rounded-lg flex items-center" style={{ padding: "1.25rem", gap: "1rem", border: `1px solid ${dayColors[selectedDay].border}40`, boxShadow: `0 0 15px ${dayColors[selectedDay].border}15, 0 0 30px ${dayColors[selectedDay].border}08` }}>
                      <div style={{ textAlign: "center", minWidth: "60px" }}>
                        <span className="font-mono text-lg text-brand-white font-medium">
                          {slot.time}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h2 className="font-heading text-lg uppercase tracking-wide">
                          {slot.className}
                        </h2>
                        <p className="text-brand-muted text-xs font-mono" style={{ marginTop: "0.25rem" }}>
                          {slot.trainer} &middot; {slot.duration}
                        </p>
                      </div>
                      <div className="flex items-center" style={{ gap: "0.75rem" }}>
                        <span
                          className={cn(
                            "font-mono text-xs uppercase tracking-wider rounded-full border hidden sm:inline-block",
                            categoryColors[slot.category]
                          )}
                          style={{ paddingLeft: "0.75rem", paddingRight: "0.75rem", paddingTop: "0.25rem", paddingBottom: "0.25rem" }}
                        >
                          {slot.category}
                        </span>
                        <BookButton
                          slotId={slot.id}
                          className={slot.className}
                          isBooked={isBooked(slot.id)}
                          onToggle={handleToggle}
                        />
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
            </div>
          </section>

          {/* Desktop: Full week grid */}
          <section className="responsive-px bg-brand-black hidden lg:block" style={{ paddingTop: "2.5rem", paddingBottom: "5rem" }}>
            <div className="overflow-x-auto" style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
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
                              <div className="bg-brand-surface rounded-lg transition-colors duration-300" style={{ padding: "0.75rem", border: `1px solid ${dayColors[day].border}40`, boxShadow: `0 0 15px ${dayColors[day].border}15, 0 0 30px ${dayColors[day].border}08` }}>
                                <span className="font-mono text-xs text-brand-gold">
                                  {slot.time}
                                </span>
                                <h2 className="font-heading text-sm uppercase tracking-wide" style={{ marginTop: "0.25rem" }}>
                                  {slot.className}
                                </h2>
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
                                  <BookButton
                                    slotId={slot.id}
                                    className={slot.className}
                                    isBooked={isBooked(slot.id)}
                                    onToggle={handleToggle}
                                  />
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
        </>
      ) : (
        /* My Bookings view */
        <section className="responsive-px bg-brand-black" style={{ paddingTop: "2.5rem", paddingBottom: "5rem" }}>
          <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
            {bookedByDay.length === 0 ? (
              <div style={{ textAlign: "center", paddingTop: "4rem", paddingBottom: "4rem" }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "auto", marginRight: "auto", marginBottom: "1.5rem", opacity: 0.5 }}>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <h2 className="font-heading text-2xl uppercase tracking-tight" style={{ marginBottom: "0.75rem" }}>
                  No Bookings Yet
                </h2>
                <p className="text-brand-muted text-sm" style={{ marginBottom: "1.5rem" }}>
                  Head to the timetable and tap Book on a class to get started.
                </p>
                <button
                  onClick={() => setActiveTab("timetable")}
                  className="font-mono text-xs uppercase tracking-[0.1em] bg-brand-gold text-brand-black rounded-full hover:bg-brand-gold-light transition-colors duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none"
                  style={{
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                    paddingTop: "0.75rem",
                    paddingBottom: "0.75rem",
                    minHeight: "44px",
                  }}
                >
                  View Timetable
                </button>
              </div>
            ) : (
              <div className="flex flex-col" style={{ gap: "2rem" }}>
                {bookedByDay.map(({ day, slots }) => (
                  <div key={day}>
                    <h2
                      className="font-mono text-xs uppercase tracking-[0.15em] font-medium"
                      style={{
                        marginBottom: "0.75rem",
                        paddingBottom: "0.5rem",
                        borderBottom: `2px solid ${dayColors[day].border}`,
                        color: dayColors[day].border,
                      }}
                    >
                      {day}
                    </h2>
                    <div className="flex flex-col" style={{ gap: "0.5rem" }}>
                      {slots.map((slot) => (
                        <div
                          key={slot.id}
                          className="bg-brand-surface rounded-lg flex items-center"
                          style={{
                            padding: "1rem 1.25rem",
                            gap: "1rem",
                            border: `1px solid ${dayColors[day].border}40`,
                          }}
                        >
                          <div style={{ minWidth: "50px" }}>
                            <span className="font-mono text-sm text-brand-white font-medium">
                              {slot.time}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-heading text-base uppercase tracking-wide">
                              {slot.className}
                            </h3>
                            <p className="text-brand-muted text-xs font-mono" style={{ marginTop: "0.125rem" }}>
                              {slot.trainer} &middot; {slot.duration}
                            </p>
                          </div>
                          <button
                            onClick={() => handleToggle(slot.id)}
                            aria-label={`Cancel ${slot.className}`}
                            className="font-mono text-xs uppercase tracking-wider rounded-full border border-red-500/40 text-red-400 hover:bg-red-500/10 hover:border-red-500 transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none"
                            style={{
                              paddingLeft: "0.75rem",
                              paddingRight: "0.75rem",
                              paddingTop: "0.375rem",
                              paddingBottom: "0.375rem",
                              minHeight: "32px",
                            }}
                          >
                            Cancel
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

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

      {/* Toast notification */}
      <Toast message={toast} />
    </>
  );
}
