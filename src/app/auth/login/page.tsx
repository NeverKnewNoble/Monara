'use client'

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail, Lock } from "lucide-react";
import  Authentication  from "@/services/authenticaition"
import { useState } from "react";
import { useSnack } from "@/lib/snack";

export default function LoginPage() {
  const snack = useSnack(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ** FUNTIONS
  const loginClick = async () => {
    if(!email || !password) {
      return console.error("Please make sure the email or password is provided")
    }

    try {
      await Authentication.loginRequest({email, password})
      console.log("Logged in successfully");
      snack.success("Logged in successfully");
    } catch(err) {
      snack.error("Unable to login, try again")
      return console.error(err, "Unable to login, try again")
    }
  }




  
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" />
      <div className="pointer-events-none absolute -top-40 -right-40 h-160 w-160 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 -left-32 h-96 w-96 rounded-full bg-accent blur-[100px]" />
      <div className="animate-glow-pulse pointer-events-none absolute top-1/3 right-1/4 h-80 w-80 rounded-full bg-primary/15 blur-[120px]" />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft
            className="h-3.5 w-3.5 transition group-hover:-translate-x-0.5"
            strokeWidth={2}
          />
          Back home
        </Link>
        <Link href="/" className="inline-flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-40" />
            <span className="glow-mint relative h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
          <span className="font-sans text-[18px] font-semibold tracking-[-0.02em] text-foreground">
            monara
          </span>
        </Link>
      </header>

      <div className="relative z-10 flex flex-1 items-center justify-center px-6 pb-16">
        <div className="w-full max-w-md">
          <div className="animate-rise glow-peach rounded-4xl border border-border bg-card p-8 md:p-10">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              <span className="text-primary">[auth]</span>
              <span className="h-px w-8 bg-bone-dim" />
              Sign in
            </div>

            <h1 className="mt-6 font-sans text-[44px] font-medium leading-[0.95] tracking-[-0.03em] text-card-foreground md:text-[52px]">
              Welcome
              <br />
              <span className="text-primary">back.</span>
            </h1>

            <p className="mt-4 text-[14.5px] leading-relaxed text-muted-foreground">
              Sign in to pick up where you left off. Soft edges, plain numbers,
              no drama.
            </p>

            <form className="mt-10 space-y-6" action="#" method="post">
              <div>
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground"
                >
                  <Mail className="h-3 w-3" strokeWidth={2} />
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={email}      
                  onChange={(e) => {setEmail(e.target.value)}}
                  autoComplete="email"
                  placeholder="you@domain.com"
                  className="mt-3 w-full rounded-2xl border border-border bg-input px-5 py-3.5 font-mono text-[13.5px] text-foreground placeholder:text-bone-dim transition focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/25"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground"
                  >
                    <Lock className="h-3 w-3" strokeWidth={2} />
                    Password
                  </label>
                  <Link
                    href="/auth/forgot"
                    className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground transition hover:text-primary"
                  >
                    Forgot?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => {setPassword(e.target.value)}}
                  autoComplete="current-password"
                  placeholder="••••••••••"
                  className="mt-3 w-full rounded-2xl border border-border bg-input px-5 py-3.5 font-mono text-[13.5px] text-foreground placeholder:text-bone-dim transition focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/25"
                />
              </div>

              <label className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                <input
                  type="checkbox"
                  name="remember"
                  className="h-3.5 w-3.5 rounded border-border bg-input accent-primary"
                />
                Keep me signed in
              </label>

              <button
                type="submit"
                onClick={loginClick}
                className="group glow-peach inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-[13.5px] font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary-hover"
              >
                Sign in
                <ArrowUpRight
                  className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2.25}
                />
              </button>
            </form>

            {/* <div className="mt-10 flex items-center gap-4">
              <span className="h-px flex-1 bg-border" />
              <span className="font-mono text-[9.5px] uppercase tracking-[0.25em] text-muted-foreground">
                or
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>

            <button
              type="button"
              className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full border border-border bg-surface px-6 py-3.5 text-[13px] font-medium text-foreground transition hover:border-primary/40 hover:bg-surface-elevated"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                <path
                  fill="#EA4335"
                  d="M12 10.2v3.9h5.5c-.2 1.5-1.6 4.3-5.5 4.3-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.8 3.6 14.6 2.6 12 2.6 6.8 2.6 2.6 6.8 2.6 12s4.2 9.4 9.4 9.4c5.4 0 9-3.8 9-9.2 0-.6-.1-1.1-.2-1.6H12z"
                />
              </svg>
              Continue with Google
            </button> */}
          </div>

          <p className="mt-8 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            New to monara?{" "}
            <Link
              href="/#waitlist"
              className="inline-flex items-center gap-1 text-primary transition hover:text-primary-hover"
            >
              Join the waitlist
              <span aria-hidden>→</span>
            </Link>
          </p>
        </div>
      </div>

      <footer className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-8 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-bone-dim md:px-10">
        &copy; {new Date().getFullYear()} monara · protected by calm
      </footer>
    </main>
  );
}
