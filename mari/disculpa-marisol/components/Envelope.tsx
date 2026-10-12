"use client";
import { useState } from "react";
import { Heart } from "lucide-react";

export default function Envelope({ label, onOpened }: { label: string; onOpened: () => void }) {
  const [open, setOpen] = useState(false);

  const handle = () => {
    if (open) return;
    setOpen(true);
    window.setTimeout(onOpened, 1500);
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="anim-sway relative h-44 w-72 sm:h-52 sm:w-80" style={{ perspective: 900 }}>
        {/* carta que asoma */}
        <div className="paper absolute left-4 right-4 top-3 h-36 rounded-sm transition-transform duration-1000 ease-out sm:h-44"
          style={{ transform: open ? "translateY(-70px)" : "translateY(0)", transitionDelay: open ? ".5s" : "0s" }} />
        {/* cuerpo */}
        <div className="absolute inset-0 rounded-md bg-gradient-to-b from-blush-100 to-blush-200 shadow-xl ring-1 ring-gold-300/60" />
        <div className="absolute inset-0 rounded-md"
          style={{ background: "linear-gradient(to top right, transparent 49.5%, rgba(212,176,98,.35) 50%, transparent 50.6%), linear-gradient(to top left, transparent 49.5%, rgba(212,176,98,.35) 50%, transparent 50.6%)" }} />
        {/* solapa */}
        <div className="absolute inset-x-0 top-0 h-1/2 origin-top transition-transform duration-[900ms] ease-in-out"
          style={{
            transform: open ? "rotateX(180deg)" : "rotateX(0deg)",
            background: "linear-gradient(#fbd3da,#f4b6c2)",
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            zIndex: open ? 0 : 3,
          }} />
        {/* sello */}
        <div className={`absolute left-1/2 top-1/2 z-10 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-cherry-600 text-cream-50 shadow-lg ring-2 ring-gold-400 transition-all duration-500 ${open ? "scale-0 opacity-0" : "anim-beat"}`}>
          <Heart size={20} fill="currentColor" />
        </div>
      </div>
      <button onClick={handle} disabled={open}
        className="rounded-full bg-cherry-600 px-8 py-3 text-lg font-medium text-cream-50 shadow-lg shadow-cherry-600/25 ring-1 ring-gold-400/70 transition hover:bg-cherry-700 active:scale-95 disabled:opacity-60">
        {label}
      </button>
    </div>
  );
}
