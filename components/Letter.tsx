import { content } from "@/content/content";

export default function Letter() {
  const { greeting, paragraphs, signature } = content.letter;
  const step = 1.1; // segundos entre párrafos
  return (
    <article className="paper mx-auto w-full max-w-2xl rounded-sm px-6 py-10 sm:px-14 sm:py-14">
      <p className="anim-fade font-hand text-3xl text-cherry-600 sm:text-4xl">{greeting}</p>
      <div className="mt-6 space-y-5 text-lg leading-relaxed sm:text-xl">
        {paragraphs.map((p, i) => (
          <p key={i} className="anim-fade" style={{ animationDelay: `${(i + 1) * step}s` }}>{p}</p>
        ))}
      </div>
      <div className="anim-fade mt-10 font-hand text-2xl text-cherry-700 sm:text-3xl" style={{ animationDelay: `${(paragraphs.length + 1) * step}s` }}>
        {signature.map((l, i) => <p key={i}>{l}</p>)}
      </div>
    </article>
  );
}
