import { ArrowUpRight } from "lucide-react";
import Nav from "./nav";

function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-night">
      <div className="absolute inset-0 bg-grid-dark opacity-60" />
      <div className="pointer-events-none absolute -top-40 -right-40 h-160 w-160 rounded-full bg-peach/25 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-plum blur-[100px]" />
      <div className="animate-glow-pulse pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-peach/15 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-6 md:px-10 md:py-8">
        <Nav />

        <div className="mt-16 grid grid-cols-1 items-center gap-16 pb-20 md:mt-24 md:grid-cols-[1.15fr_0.85fr] md:gap-20 md:pb-32">
          <div>
            <div
              className="animate-rise flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-bone-muted"
              style={{ animationDelay: "0ms" }}
            >
              <span className="text-peach">[001]</span>
              <span className="h-px w-10 bg-bone-dim" />
              <span>Personal + business</span>
              <span className="hidden h-px w-10 bg-bone-dim sm:inline-block" />
              <span className="hidden sm:inline">early access</span>
            </div>

            <h1
              className="animate-rise mt-10 font-sans text-[64px] font-medium leading-[0.9] tracking-[-0.035em] text-bone md:text-[92px] lg:text-[112px]"
              style={{ animationDelay: "120ms" }}
            >
              Money,
              <br />
              held <span className="text-peach">softly.</span>
            </h1>

            <p
              className="animate-rise mt-10 max-w-md text-[16px] leading-relaxed text-bone-muted"
              style={{ animationDelay: "260ms" }}
            >
              A quieter financial planner for everyday humans and tiny
              businesses. Plain language, soft edges, and the rigor of a real
              planner humming underneath.
            </p>

            <div
              className="animate-rise mt-12 flex flex-wrap items-center gap-8"
              style={{ animationDelay: "400ms" }}
            >
              <a
                href="#waitlist"
                className="glow-peach inline-flex items-center gap-2 rounded-full bg-peach px-7 py-4 text-[13.5px] font-semibold text-night transition hover:-translate-y-0.5 hover:bg-peach-deep"
              >
                Join the waitlist
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
              </a>
              <a
                href="#"
                className="group inline-flex items-center gap-3 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-bone-muted transition hover:text-bone"
              >
                <span className="h-px w-8 bg-bone-muted transition group-hover:bg-bone" />
                Watch the 90s tour
              </a>
            </div>

            <div
              className="animate-rise mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[10.5px] uppercase tracking-[0.22em]"
              style={{ animationDelay: "540ms" }}
            >
              <span className="text-bone">
                2.4k <span className="text-bone-muted">humans</span>
              </span>
              <span className="text-bone-dim">/</span>
              <span className="text-bone">
                47 <span className="text-bone-muted">countries</span>
              </span>
              <span className="text-bone-dim">/</span>
              <span className="text-bone">
                $12M <span className="text-bone-muted">tracked</span>
              </span>
            </div>
          </div>

          <div
            className="animate-rise relative mx-auto w-full max-w-md"
            style={{ animationDelay: "520ms" }}
          >
            <div className="animate-float-y-slow glow-peach relative rounded-4xl border border-bone/10 bg-linear-to-br from-night-2 to-night-3 p-8">
              <div className="flex items-center justify-between">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone-muted">
                  wallet / april
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/5 px-2.5 py-1 font-mono text-[9.5px] font-medium uppercase tracking-[0.18em] text-mint">
                  <span className="glow-mint animate-pulse-dot h-1.5 w-1.5 rounded-full bg-mint" />
                  live
                </div>
              </div>

              <div className="mt-8">
                <p className="font-sans text-[64px] font-medium leading-[0.9] tracking-[-0.03em] text-bone md:text-[72px]">
                  $4,218<span className="text-bone-dim">.50</span>
                </p>
                <p className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-bone-muted">
                  <span className="text-peach">↑ 12%</span> · saved this month
                </p>
              </div>

              <div className="mt-10">
                <svg
                  viewBox="0 0 300 80"
                  className="w-full"
                  fill="none"
                  aria-hidden
                >
                  <defs>
                    <linearGradient
                      id="spark"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#FF9364" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#FF9364" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 62 Q 30 58, 55 48 T 110 36 T 175 24 T 240 14 T 300 4"
                    stroke="#FF9364"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M 0 62 Q 30 58, 55 48 T 110 36 T 175 24 T 240 14 T 300 4 L 300 80 L 0 80 Z"
                    fill="url(#spark)"
                  />
                </svg>
                <div className="mt-3 flex justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-bone-dim">
                  <span>jan</span>
                  <span>feb</span>
                  <span>mar</span>
                  <span className="text-peach">apr</span>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-bone/10 pt-6">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-bone-muted">
                    goal
                  </p>
                  <p className="mt-1 font-sans text-[20px] font-medium text-bone">
                    85%
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-bone-muted">
                    burn
                  </p>
                  <p className="mt-1 font-sans text-[20px] font-medium text-bone">
                    $142<span className="text-bone-muted">/d</span>
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-bone-muted">
                    runway
                  </p>
                  <p className="mt-1 font-sans text-[20px] font-medium text-mint">
                    9.2mo
                  </p>
                </div>
              </div>
            </div>

            <div className="glow-peach absolute -bottom-5 left-6 rounded-full bg-peach px-4 py-2 font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-night">
              ✦ on track
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
