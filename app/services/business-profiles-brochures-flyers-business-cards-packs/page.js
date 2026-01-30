// app/services/business-profiles-brochures-flyers-business-cards-packs/page.js
import Link from "next/link";
import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";

const WHATSAPP_URL = "https://wa.me/254759293030";

export const metadata = {
  title:
    "Business Profiles, Brochures, Flyers & Business Cards in Kenya | Boonifu",
  description:
    "Professional business profiles, brochures, flyers, and business cards for SMEs in Kenya. Make a strong impression online and offline.",
  keywords: [
    "business profile design Kenya",
    "brochures and flyers Kenya",
    "business cards for SMEs Kenya",
    "company profile Kenya",
  ],
};

export default function BusinessProfilesAndPrintPage() {
  return (
    <main>
      {/* Hero */}
      <Section className="bg-slate-950 pb-10 pt-20 sm:pt-24">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
            Brand Collateral for SMEs in Kenya
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Business Profiles, Brochures, Flyers & Business Cards Packs
          </h1>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            Give customers and partners something professional to hold, share,
            or download. We design business profiles, brochures, flyers, and
            business cards that match your brand and tell your story clearly.
          </p>
          <p className="mt-3 text-xs text-slate-400 sm:text-sm">
            Perfect for pitches, tenders, events, and everyday brand
            visibility.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
            >
              Request profile & print packs
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
              What these packs do for your brand
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>
                • Present your business as professional and trustworthy in
                meetings and events.
              </li>
              <li>
                • Provide clear, structured information about what you offer and
                who you serve.
              </li>
              <li>
                • Make it easier for people to share your details and refer
                others to you.
              </li>
              <li>
                • Align your offline and online branding for a consistent
                impression.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              What we can include in your pack
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>
                • Company or business profile (PDF, slide deck, or print
                format).
              </li>
              <li>
                • Brochures covering your services, products, or solutions.
              </li>
              <li>
                • Flyers for promotions, events, and door-to-door distribution.
              </li>
              <li>
                • Branded business card designs for founders and key staff.</li>
            </ul>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="bg-slate-950/60 border-y border-slate-800">
        <Container>
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            How we create your profile & print pack
          </h2>
          <ol className="mt-4 space-y-3 text-sm text-slate-200 list-decimal list-inside">
            <li>
              We gather your existing information: about, services, team,
              clients, and visuals.
            </li>
            <li>
              We structure the content to highlight your strengths and build
              trust.
            </li>
            <li>
              We design layouts that feel premium and easy to read or present.
            </li>
            <li>
              We prepare print-ready and digital versions for flexible use.
            </li>
          </ol>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-sky-400">
        <Container className="flex flex-col items-start justify-between gap-4 text-slate-950 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold sm:text-2xl">
              Need to look more “put together” in front of clients?
            </h2>
            <p className="mt-2 text-sm sm:text-base">
              Share what materials you already have and what you need (profile,
              brochure, flyers, cards). We’ll suggest a pack that fits your
              stage.
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