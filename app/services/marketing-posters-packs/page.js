// app/services/marketing-posters-packs/page.js
import Link from "next/link";
import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";

const WHATSAPP_URL = "https://wa.me/254759293030";

export const metadata = {
  title:
    "Marketing Posters Packs for SMEs in Kenya | Boonifu – Branded, Ready-to-Post Graphics",
  description:
    "Poster design packs for Kenyan SMEs. Branded marketing posters for social media, WhatsApp, print, and in-store promotions.",
  keywords: [
    "marketing posters Kenya",
    "social media posters Kenya",
    "graphic design for SMEs Kenya",
    "SME marketing solutions Kenya",
  ],
};

export default function MarketingPostersPacksPage() {
  return (
    <main>
      {/* Hero */}
      <Section className="bg-slate-950 pb-10 pt-20 sm:pt-24">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
            Content Design for SMEs in Kenya
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Marketing Posters Packs for{" "}
            <span className="text-emerald-400">Kenyan SMEs</span>
          </h1>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            Always have something clean and on-brand to post or print; without
            starting from scratch each time. We design poster packs tailored to
            your business, campaigns, and seasons.
          </p>
          <p className="mt-3 text-xs text-slate-400 sm:text-sm">
            Use them on social media, WhatsApp Status, stories, and physical
            print to keep your brand visible and consistent.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
            >
              Request poster pack options
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
              Why poster packs help your marketing
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>
                • You stop posting random low-quality images and start looking
                professional.
              </li>
              <li>
                • You get a bank of ready-to-use visuals for different offers
                and seasons.
              </li>
              <li>
                • Your brand colors, fonts, and style are consistent across all
                platforms.
              </li>
              <li>
                • Content is adapted to formats for WhatsApp, Instagram, and
                Facebook.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Types of poster packs we create
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>• Monthly promotion calendars with multiple themed posters.</li>
              <li>
                • Holiday and seasonal packs (Christmas, Easter, Black Friday,
                back-to-school).
              </li>
              <li>
                • Launch and campaign packs for new products, branches, or
                services.
              </li>
              <li>
                • Event and announcement posters for trainings, conferences, and
                church events.
              </li>
            </ul>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="bg-slate-950/60 border-y border-slate-800">
        <Container>
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            How we design your posters
          </h2>
          <ol className="mt-4 space-y-3 text-sm text-slate-200 list-decimal list-inside">
            <li>
              We understand your business, brand style, and target audience in
              Kenya.
            </li>
            <li>
              We define the number of posters, themes, and key messages you
              need.
            </li>
            <li>
              We create initial concepts, get your feedback, and refine the
              designs.
            </li>
            <li>
              We export final files optimized for social media and printing.
            </li>
          </ol>
          <p className="mt-4 text-xs text-slate-400">
            You receive editable or re-usable designs where possible, so the
            value extends beyond a single campaign.
          </p>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-sky-400">
        <Container className="flex flex-col items-start justify-between gap-4 text-slate-950 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold sm:text-2xl">
              Want your brand to “look the part” online?
            </h2>
            <p className="mt-2 text-sm sm:text-base">
              Share your business type and upcoming campaigns. We’ll recommend a
              poster pack that fits your goals and budget.
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