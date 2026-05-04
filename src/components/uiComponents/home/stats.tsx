const stats = [
  { label: "humans", value: "2,400+", hint: "waiting" },
  { label: "tracked", value: "$12M", hint: "in beta" },
  { label: "countries", value: "47", hint: "and counting" },
  { label: "rating", value: "4.9★", hint: "closed beta" },
];

function Stats() {
  return (
    <section className="relative w-full overflow-hidden border-y border-bone/10 bg-night">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" />
      <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-peach/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-bone-muted">
            <span className="text-peach">[002]</span>
            <span className="h-px w-8 bg-bone-dim" />
            Signals
          </div>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim md:block">
            Live · updated April 15
          </span>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col md:px-8 ${
                i !== 0 ? "md:border-l md:border-bone/10" : ""
              }`}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone-muted">
                {stat.label}
              </p>
              <p className="mt-4 font-sans text-[64px] font-medium leading-[0.88] tracking-[-0.03em] text-bone md:text-[80px]">
                {stat.value}
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-peach">
                {stat.hint}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
