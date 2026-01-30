// app/services/e-commerce-solutions/page.js
import Link from "next/link";
import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";

const WHATSAPP_URL = "https://wa.me/254759293030";

export const metadata = {
  title:
    "E-commerce Solutions for Kenyan SMEs | Boonifu – Simple Online Stores",
  description:
    "Lightweight e-commerce solutions for SMEs in Kenya. Simple online stores, catalog sites, and order flows designed for local customers.",
  keywords: [
    "e-commerce solutions Kenya",
    "online store for small business Kenya",
    "sell online Kenya",
    "SME marketing solutions Kenya",
  ],
};

export default function EcommerceSolutionsPage() {
  return (
    <main>
      {/* Hero */}
      <Section className="bg-slate-950 pb-10 pt-20 sm:pt-24">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
            Online Selling in Kenya
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            E‑commerce Solutions for{" "}
            <span className="text-emerald-400">Kenyan SMEs</span>
          </h1>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            Sell online without being overwhelmed by complex systems. We build
            simple, effective e‑commerce experiences that match how Kenyan
            customers actually browse, order, and pay.
          </p>
          <p className="mt-3 text-xs text-slate-400 sm:text-sm">
            Ideal for boutiques, food businesses, small brands, and B2B sellers
            who want to take orders online with minimum friction.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
            >
              Talk about your online store
            </a>
            <Link
              href="/services"
              className="text-xs font-semibold text-slate-300 hover:text-emerald-300"
            >
              ← Back to all services
            </Link>
          </div>
        </Container>
      </Section>

      {/* Benefits & Use cases */}
      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              What you get with our e‑commerce setups
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>• A clean, mobile-first product catalog or menu.</li>
              <li>
                • Clear product information, pricing, and images to reduce
                back-and-forth questions.
              </li>
              <li>
                • Order flows that connect to WhatsApp, email, or a payment
                solution.
              </li>
              <li>
                • Basic analytics to see what customers are viewing and
                ordering.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Use cases in the Kenyan market
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>
                • Fashion boutiques listing products with size and color
                options.
              </li>
              <li>
                • Food and delivery businesses managing orders and delivery
                zones.
              </li>
              <li>
                • B2B suppliers allowing customers to request quotes online.
              </li>
              <li>
                • Subscription or package-based services taking recurring or
                once-off orders.
              </li>
            </ul>
          </div>
        </Container>
      </Section>

      {/* Implementation */}
      <Section className="bg-slate-950/60 border-y border-slate-800">
        <Container>
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Our approach to SME e‑commerce
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            We focus on something you can actually manage, not just a flashy
            store.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            <li>
              • We keep the admin side simple so your team can add or edit
              products easily.
            </li>
            <li>
              • We choose technologies that fit your budget and internal skills.
            </li>
            <li>
              • We integrate with your existing channels like WhatsApp, social
              media, and email.
            </li>
            <li>
              • We prioritize speed, clarity, and conversion over unnecessary
              features.
            </li>
          </ul>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-sky-400">
        <Container className="flex flex-col items-start justify-between gap-4 text-slate-950 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold sm:text-2xl">
              Ready to start selling online?
            </h2>
            <p className="mt-2 text-sm sm:text-base">
              Share your business type, products, and current online presence.
              We’ll suggest the simplest e‑commerce setup that works for you.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-emerald-300 shadow-lg shadow-slate-900/40 transition hover:bg-slate-900"
          >
            Chat with us on WhatsApp
          </a>
        </Container>
      </Section>
    </main>
  );
}