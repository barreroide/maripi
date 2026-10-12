import { ReactNode } from "react";

export function Heading({ children }: { children: ReactNode }) {
  return <h2 className="text-center text-4xl font-medium italic text-cherry-600 sm:text-5xl">{children}</h2>;
}

export function NextButton({ onClick, children }: { onClick: () => void; children: ReactNode }) {
  return (
    <button onClick={onClick}
      className="mx-auto mt-12 block rounded-full border border-gold-400 bg-cream-50/80 px-7 py-2.5 text-lg text-cherry-700 shadow transition hover:bg-white active:scale-95">
      {children}
    </button>
  );
}
