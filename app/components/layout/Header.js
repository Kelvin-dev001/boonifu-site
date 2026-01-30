// app/components/layout/Header.js
import Link from "next/link";
import Container from "../ui/Container";

const WHATSAPP_URL = "https://wa.me/254759293030";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-lg">
      <Container className="flex h-14 items-center justify-between gap-4 sm:h-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-500 to-sky-400 text-xs font-bold text-slate-950">
            B
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-slate-50">
              Boonifu
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-300">
              Be Seen
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-6 text-xs font-medium text-slate-300">
          <Link
            href="/"
            className="hidden text-xs hover:text-emerald-300 sm:inline"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="hidden text-xs hover:text-emerald-300 sm:inline"
          >
            Services
          </Link>
          <a
            href={WHATSAPP_URL}
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-slate-950 shadow-md shadow-emerald-500/30 transition hover:bg-emerald-400"
          >
            WhatsApp us
          </a>
        </nav>
      </Container>
    </header>
  );
}