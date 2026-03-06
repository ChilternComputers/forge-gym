"use client";

import { useState, useEffect, useCallback } from "react";
import type { Booking } from "@/types";

const STORAGE_KEY = "forge-bookings";

function readBookings(): Booking[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeBookings(bookings: Booking[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
  } catch {
    // localStorage unavailable
  }
}

export function useBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setBookings(readBookings());
    setLoaded(true);
  }, []);

  const isBooked = useCallback(
    (slotId: string) => bookings.some((b) => b.slotId === slotId),
    [bookings]
  );

  const toggleBooking = useCallback(
    (slotId: string): "booked" | "cancelled" => {
      const current = readBookings();
      const exists = current.some((b) => b.slotId === slotId);
      let next: Booking[];
      if (exists) {
        next = current.filter((b) => b.slotId !== slotId);
      } else {
        next = [...current, { slotId, bookedAt: new Date().toISOString() }];
      }
      writeBookings(next);
      setBookings(next);
      return exists ? "cancelled" : "booked";
    },
    []
  );

  const cancelBooking = useCallback((slotId: string) => {
    const current = readBookings();
    const next = current.filter((b) => b.slotId !== slotId);
    writeBookings(next);
    setBookings(next);
  }, []);

  return { bookings, loaded, isBooked, toggleBooking, cancelBooking };
}
