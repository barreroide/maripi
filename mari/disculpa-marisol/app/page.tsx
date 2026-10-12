"use client";
import { useEffect, useState } from "react";
import { content } from "@/content/content";
import FloatingHearts from "@/components/FloatingHearts";
import Envelope from "@/components/Envelope";
import Letter from "@/components/Letter";
import Polaroid from "@/components/Polaroid";
import MusicToggle from "@/components/MusicToggle";
import Closing from "@/components/Closing";
import { Heading, NextButton } from "@/components/Section";

const STAGES = 5;
const tilts = [-3, 2.5, 2, -2.5];

export default function Page() {
  const [stage, setStage] = useState(0);
  const go = (n: number) => setStage(n);

  useEffect(() => { window.scrollTo({ top: 0 }); }, [stage]);

  return (
    <>
      <FloatingHearts />

      <header className="fixed inset-x-0 top-0 z-20 flex items-center justify-between px-4 py-3">
        <div role="progressbar" aria-label="Progreso de la carta" aria-valuemin={1} aria-valuemax={STAGES} aria-valuenow={stage + 1} className="flex gap-1.5">
          {Array.from({ length: STAGES }, (_, i) => (
            <span key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === stage ? "w-6 bg-cherry-600" : i < stage ? "w-1.5 bg-cherry-500/60" : "w-1.5 bg-gold-300"}`} />
          ))}
        </div>
        <MusicToggle src={content.musicSrc} />
      </header>

      <main key={stage} className="anim-section relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-5 pb-16 pt-20">
        {stage === 0 && (
          <section className="flex flex-col items-center gap-10 text-center">
            <h1 className="text-5xl font-medium italic text-cherry-600 sm:text-7xl">{content.name}</h1>
            <p className="max-w-md text-2xl leading-snug sm:text-3xl">{content.welcomeTitle}</p>
            <Envelope label={content.openLabel} onOpened={() => go(1)} />
          </section>
        )}

        {stage === 1 && (
          <section>
            <Letter />
            <NextButton onClick={() => go(2)}>Seguir leyendo</NextButton>
          </section>
        )}

        {stage === 2 && (
          <section>
            <Heading>{content.memories.title}</Heading>
            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {content.memories.items.map((m, i) => <Polaroid key={i} {...m} tilt={tilts[i % tilts.length]} />)}
            </div>
            <NextButton onClick={() => go(3)}>Seguir leyendo</NextButton>
          </section>
        )}

        {stage === 3 && (
          <section>
            <Heading>{content.improvements.title}</Heading>
            <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
              {content.improvements.items.map((it, i) => (
                <div key={i} className="anim-fade rounded-2xl bg-cream-50/90 p-6 shadow-lg shadow-cherry-700/10 ring-1 ring-gold-300/60" style={{ animationDelay: `${i * 0.25}s` }}>
                  <h3 className="text-2xl font-semibold text-cherry-600">{it.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed">{it.text}</p>
                </div>
              ))}
            </div>
            <NextButton onClick={() => go(4)}>Seguir leyendo</NextButton>
          </section>
        )}

        {stage === 4 && <Closing onRestart={() => go(0)} />}
      </main>
    </>
  );
}
