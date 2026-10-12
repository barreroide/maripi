"use client";
import { useEffect, useState } from "react";
import { Heart, Flower } from "lucide-react";

type Item = { id: number; left: number; size: number; dur: number; delay: number; flower: boolean; o: number };

// Se genera solo en el cliente (useEffect) para evitar errores de hidratación.
export default function FloatingHearts() {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    setItems(
      Array.from({ length: 14 }, (_, i) => ({
        id: i, left: Math.random() * 100, size: 12 + Math.random() * 14,
        dur: 16 + Math.random() * 14, delay: -Math.random() * 25,
        flower: i % 4 === 0, o: 0.12 + Math.random() * 0.15,
      }))
    );
  }, []);
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {items.map((h) => {
        const Icon = h.flower ? Flower : Heart;
        return (
          <span key={h.id} className="heart-rise absolute -bottom-10"
            style={{ left: `${h.left}%`, animationDuration: `${h.dur}s`, animationDelay: `${h.delay}s`, ["--o" as string]: h.o }}>
            <Icon size={h.size} className={h.flower ? "text-gold-400" : "text-cherry-500"} fill={h.flower ? "none" : "currentColor"} />
          </span>
        );
      })}
    </div>
  );
}
