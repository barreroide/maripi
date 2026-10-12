"use client";
import { useState } from "react";
import { ImageIcon } from "lucide-react";

type Props = { src: string; caption: string; note: string; tilt: number };

export default function Polaroid({ src, caption, note, tilt }: Props) {
  const [failed, setFailed] = useState(false);
  return (
    <figure className="mx-auto w-full max-w-[17rem] bg-white p-3 pb-5 shadow-xl shadow-cherry-700/15 ring-1 ring-gold-300/50 transition-transform duration-500 hover:rotate-0"
      style={{ transform: `rotate(${tilt}deg)` }}>
      <div className="grid aspect-square place-items-center overflow-hidden bg-blush-100">
        {failed ? (
          <div className="flex flex-col items-center gap-2 px-4 text-center text-sm text-ink/50">
            <ImageIcon size={28} />
            <span>Tu foto va aquí</span>
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={caption} loading="lazy" onError={() => setFailed(true)} className="h-full w-full object-cover" />
        )}
      </div>
      <figcaption className="mt-3 text-center">
        <p className="font-hand text-2xl text-cherry-600">{caption}</p>
        <p className="mt-1 text-sm leading-snug text-ink/70">{note}</p>
      </figcaption>
    </figure>
  );
}
