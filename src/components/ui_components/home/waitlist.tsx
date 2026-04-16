import { ArrowUpRight } from "lucide-react";

function Waitlist() {
  return (
    <section
      id="waitlist"
      className="relative w-full overflow-hidden bg-night py-28 md:py-40"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-30" />
      <div className="animate-glow-pulse pointer-events-none absolute left-1/2 top-1/2 h-160 w-160 -translate-x-1/2 -translate-y-1/2 rounded-full bg-peach/22 blur-[140px]" />
      <div className="pointer-events-none absolute -top-20 left-1/4 h-64 w-64 rounded-full bg-plum blur-[100px]" />

      <div className="relative mx-auto w-full max-w-3xl px-6 text-center md:px-10">
        <div className="flex justify-center font-mono text-[11px] uppercase tracking-[0.22em] text-bone-muted">
          <span className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-bone-dim" />
            <span className="text-peach">[004]</span>
            Early access
            <span className="h-px w-8 bg-bone-dim" />
          </span>
        </div>

        <h2 className="mt-10 font-sans text-[60px] font-medium leading-[0.92] tracking-[-0.035em] text-bone md:text-[108px]">
          Be the first
          <br />
          to <span className="text-peach">feel calm.</span>
        </h2>

        <p className="mx-auto mt-8 max-w-md text-[16px] leading-relaxed text-bone-muted">
          We onboard a small group every week. Drop your email and we&apos;ll
          send you a warm welcome the moment your seat is ready.
        </p>

        <form className="glow-peach mx-auto mt-12 flex w-full max-w-lg items-center gap-2 rounded-full border border-bone/15 bg-night-2/80 p-1.5 backdrop-blur-md">
          <input
            type="email"
            required
            placeholder="you@domain.com"
            className="flex-1 bg-transparent px-5 py-3 font-mono text-[13px] text-bone placeholder:text-bone-dim focus:outline-none"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 rounded-full bg-peach px-6 py-3 text-[13px] font-semibold text-night transition hover:bg-peach-deep"
          >
            Join
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
          </button>
        </form>

        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-bone-dim">
          No spam · One email · When it&apos;s your turn
        </p>
      </div>
    </section>
  );
}

export default Waitlist;
