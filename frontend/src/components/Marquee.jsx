import { MARQUEE_ITEMS } from "@/lib/site";

const Marquee = () => {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div
      data-testid="editorial-marquee"
      className="relative overflow-hidden border-y hairline bg-white/50 py-5"
    >
      <div className="flex w-max animate-marquee items-center gap-10 pr-10 hover:[animation-play-state:paused]">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-10" aria-hidden={i >= MARQUEE_ITEMS.length}>
            <span className="whitespace-nowrap font-mono text-xs font-medium uppercase tracking-[0.22em] text-brand-petrol/80">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rotate-45 bg-brand-teal" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
