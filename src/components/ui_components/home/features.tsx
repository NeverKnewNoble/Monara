import { Wallet, Target, LineChart, PiggyBank } from "lucide-react";

const features = [
  {
    num: "01",
    icon: Wallet,
    title: "One calm inbox",
    body: "Personal spending, business cashflow, side hustles — all under one roof that actually feels tidy.",
  },
  {
    num: "02",
    icon: Target,
    title: "Goals that bend",
    body: "Savings targets that shift with your income and gently nudge before things slip.",
  },
  {
    num: "03",
    icon: LineChart,
    title: "Plain forecasts",
    body: "The next 90 days in words you can read on a bad day, not walls of numbers.",
  },
  {
    num: "04",
    icon: PiggyBank,
    title: "Quiet automations",
    body: "Categorization and sweeps that hum along in the background. No inbox clutter, ever.",
  },
];

function Features() {
  return (
    <section className="relative w-full overflow-hidden bg-night py-28 md:py-40">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-30" />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-120 w-120 rounded-full bg-peach/12 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[0.9fr_1.1fr] md:gap-24">
          <div className="md:sticky md:top-20 md:self-start">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-bone-muted">
              <span className="text-peach">[003]</span>
              <span className="h-px w-8 bg-bone-dim" />
              What&apos;s inside
            </div>
            <h2 className="mt-8 font-sans text-[56px] font-medium leading-[0.95] tracking-[-0.035em] text-bone md:text-[88px]">
              Tools that feel
              <br />
              <span className="text-peach">weirdly kind.</span>
            </h2>
            <p className="mt-8 max-w-md text-[16px] leading-relaxed text-bone-muted">
              Built for people who dread opening their banking app. Soft
              edges, plain language, and the rigor of a real planner hiding
              underneath every screen.
            </p>
            <a
              href="#"
              className="group mt-10 inline-flex items-center gap-3 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-bone transition hover:text-peach"
            >
              <span className="h-px w-8 bg-bone transition group-hover:bg-peach" />
              Explore all features
              <span aria-hidden className="transition group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>

          <ul className="flex flex-col">
            {features.map(({ num, icon: Icon, title, body }, i) => (
              <li
                key={title}
                className={`group flex gap-8 py-10 ${
                  i !== 0 ? "border-t border-bone/10" : ""
                }`}
              >
                <div className="flex flex-col items-start gap-5">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-peach">
                    {num}
                  </span>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-bone/15 bg-night-2 text-bone-muted transition duration-300 group-hover:border-peach/60 group-hover:bg-night-3 group-hover:text-peach group-hover:shadow-[0_0_32px_-4px_rgba(255,147,100,0.5)]">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-sans text-[32px] font-medium leading-[1.05] tracking-[-0.02em] text-bone md:text-[42px]">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-bone-muted">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Features;
