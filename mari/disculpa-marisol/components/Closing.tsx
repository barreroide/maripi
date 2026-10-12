"use client";
import { useState } from "react";
import { Heart, Share2, RotateCcw, Check } from "lucide-react";
import { content } from "@/content/content";

export default function Closing({ onRestart }: { onRestart: () => void }) {
  const [hug, setHug] = useState(false);
  const [copied, setCopied] = useState(false);
  const c = content.closing;

  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) { await navigator.share({ title: "Para Marisol", url }); return; }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch { /* el usuario canceló */ }
  };

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center text-center">
      <Heart className="anim-beat text-cherry-600 drop-shadow-lg" size={84} fill="currentColor" />
      <div className="mt-10 space-y-5 text-xl leading-relaxed sm:text-2xl">
        {c.message.map((p, i) => <p key={i} className="anim-fade" style={{ animationDelay: `${0.6 + i * 1.2}s` }}>{p}</p>)}
      </div>

      <button onClick={() => setHug(true)} disabled={hug}
        className="mt-10 rounded-full bg-cherry-600 px-8 py-3 text-lg text-cream-50 shadow-lg ring-1 ring-gold-400/70 transition hover:bg-cherry-700 active:scale-95 disabled:hidden">
        {c.hugLabel}
      </button>
      {hug && <p className="anim-fade mt-10 font-hand text-3xl leading-snug text-cherry-700">{c.hugMessage}</p>}

      <div className="mt-14 flex flex-wrap justify-center gap-3 text-sm">
        <button onClick={share} className="flex items-center gap-2 rounded-full border border-gold-400 bg-cream-50/80 px-5 py-2 text-cherry-700 transition hover:bg-white">
          {copied ? <Check size={16} /> : <Share2 size={16} />}{copied ? "Enlace copiado" : "Compartir enlace"}
        </button>
        <button onClick={onRestart} className="flex items-center gap-2 rounded-full border border-gold-400 bg-cream-50/80 px-5 py-2 text-cherry-700 transition hover:bg-white">
          <RotateCcw size={16} />Volver al inicio
        </button>
      </div>
    </div>
  );
}
