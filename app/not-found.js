// app/not-found.js
import Link from "next/link";
import Container from "./components/ui/Container";
import Section from "./components/ui/Section";

const WHATSAPP_URL = "https://wa.me/254759293030";

export default function NotFound() {
  return (
    <main>
      <Section className="bg-slate-950 pb-16 pt-24">
        <Container className="max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
            404 – Page not found
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            We couldn’t find that page
          </h1>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            The link you followed may be broken, expired, or the page may have
            moved. You can go back to the homepage, view our services, or tell
            us what you were looking for and we’ll help you.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
            >
              Go to homepage
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-emerald-400 hover:text-emerald-300"
            >
              View all services
            </Link>
          </div>

          <p className="mt-5 text-xs text-slate-400">
            Still stuck?{" "}
            <a
              href={WHATSAPP_URL}
              className="font-semibold text-emerald-400 hover:underline"
            >
              Chat with us on WhatsApp
            </a>{" "}
            and tell us what you were trying to find.
          </p>
        </Container>
      </Section>
    </main>
  );
}