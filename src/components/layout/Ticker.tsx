"use client";

const messages = [
  "2 SESSIONS FOR £29 — LIMITED OFFER",
  "NEW: REFORMER CLASSES NOW LIVE",
  "FREE TRIAL AVAILABLE — BOOK TODAY",
  "ELITE MEMBERSHIP — 4 PT SESSIONS INCLUDED",
];

export function Ticker() {
  // Duplicate messages for seamless infinite loop
  const allMessages = [...messages, ...messages];

  return (
    <div className="bg-brand-gold overflow-hidden whitespace-nowrap h-9 flex items-center relative z-50">
      <div className="animate-ticker inline-flex">
        {allMessages.map((msg, i) => (
          <span
            key={i}
            className="font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-brand-black font-medium mx-12 inline-block"
          >
            {msg}
            <span className="mx-12 text-brand-black/40">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
