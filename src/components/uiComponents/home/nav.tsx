import Link from "next/link";

function Nav() {
  return (
    <nav className="flex items-center justify-between">
      <Link href="/" className="inline-flex items-center gap-2.5">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inset-0 animate-ping rounded-full bg-peach opacity-40" />
          <span className="relative h-2.5 w-2.5 rounded-full bg-peach glow-mint" />
        </span>
        <span className="font-sans text-[20px] font-semibold tracking-[-0.02em] text-bone">
          monara
        </span>
      </Link>
      <ul className="hidden items-center gap-9 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-bone-muted md:flex">
        <li>
          <a href="#" className="transition hover:text-bone">
            Features
          </a>
        </li>
        <li>
          <a href="#" className="transition hover:text-bone">
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="transition hover:text-bone">
            About
          </a>
        </li>
        <li>
          <Link href="/auth/login" className="transition hover:text-bone">
            Log in
          </Link>
        </li>
      </ul>
      <Link
        href="/auth/login"
        className="group inline-flex items-center gap-1.5 rounded-full bg-peach px-5 py-2.5 text-[12.5px] font-semibold text-night transition hover:bg-peach-deep"
      >
        Get access
        <span aria-hidden className="transition group-hover:translate-x-0.5">
          →
        </span>
      </Link>
    </nav>
  );
}

export default Nav;
