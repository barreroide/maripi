"use client";
import { useRef, useState } from "react";
import { Music, Pause } from "lucide-react";

export default function MusicToggle({ src }: { src: string }) {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);

  const toggle = async () => {
    if (!ref.current) {
      const a = new Audio(src);
      a.loop = true;
      a.volume = 0.5;
      a.onerror = () => { setError(true); setPlaying(false); };
      ref.current = a;
    }
    const a = ref.current;
    if (playing) { a.pause(); setPlaying(false); return; }
    try { setError(false); await a.play(); setPlaying(true); } catch { setError(true); }
  };

  return (
    <div className="flex items-center gap-2">
      {error && <span role="status" className="rounded-full bg-cream-50 px-3 py-1 text-xs text-cherry-700 shadow">Falta el archivo de música</span>}
      <button onClick={toggle} aria-pressed={playing} aria-label={playing ? "Detener música" : "Reproducir música"}
        className="grid h-10 w-10 place-items-center rounded-full bg-cream-50/90 text-cherry-600 shadow ring-1 ring-gold-300/70 transition hover:bg-white">
        {playing ? <Pause size={18} /> : <Music size={18} />}
      </button>
    </div>
  );
}
