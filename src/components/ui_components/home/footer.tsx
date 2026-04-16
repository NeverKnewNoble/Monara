const columns = [
  { title: "Product", items: ["Features", "Pricing", "Changelog", "Roadmap"] },
  { title: "Company", items: ["About", "Writing", "Contact"] },
  { title: "Legal", items: ["Privacy", "Terms"] },
];

function Footer() {
  return (
    <footer className="relative w-full border-t border-bone/10 bg-night">
      <div className="mx-auto w-full max-w-6xl px-6 pt-20 pb-12 md:px-10">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="inline-flex items-center gap-3">
              <span className="glow-peach h-3 w-3 rounded-full bg-peach" />
              <span className="font-sans text-[28px] font-semibold tracking-[-0.02em] text-bone">
                monara
              </span>
            </a>
            <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-bone-muted">
              A quieter planner for everyday humans and tiny businesses.
              Built with care in softly-lit rooms.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-bone-muted">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3 text-[13px] text-bone/85">
                {col.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="transition hover:text-peach">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-bone/10 pt-8 font-mono text-[10px] uppercase tracking-[0.22em] text-bone-muted sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} monara · made with care</span>
          <span className="text-peach">✦ feel calm</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
