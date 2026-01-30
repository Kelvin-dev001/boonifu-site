// app/services/website-design-development/page.js
import Link from "next/link";
import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";

const WHATSAPP_URL = "https://wa.me/254759293030";

export const metadata = {
  title:
    "Website Design & Development in Kenya | Boonifu – Fast, Modern SME Websites",
  description:
    "Modern, fast, and mobile-first websites for SMEs in Kenya. Designed to convert visitors into WhatsApp inquiries and customers.",
  keywords: [
    "website design Kenya",
    "SME website Kenya",
    "business website development Kenya",
    "landing pages for SMEs Kenya",
  ],
};

export default function WebsiteDesignDevelopmentPage() {
  return (
    <main>
      {/* Hero */}
      <Section className="bg-slate-950 pb-10 pt-20 sm:pt-24">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
            Web Design in Kenya
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Website Design & Development for{" "}
            <span className="text-emerald-400">SMEs in Kenya</span>
          </h1>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            Your website should act like a 24/7 salesperson for your business –
            not just an online poster. We design fast, modern sites that turn
            visitors into WhatsApp inquiries, calls, and bookings.
          </p>
          <p className="mt-3 text-xs text-slate-400 sm:text-sm">
            Perfect for service businesses, agencies, professionals, schools,
            clinics, NGOs, and local brands that need a trusted online presence.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
            >
              Discuss your website project
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
              What you get with a Boonifu website
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>• Clean, premium design aligned with your brand.</li>
              <li>• Mobile-first layouts that work well on Kenyan devices.</li>
              <li>
                • Clear calls-to-action: WhatsApp, call, book, or request a
                quote.
              </li>
              <li>
                • SEO-ready structure to support ranking and LLM search
                visibility.
              </li>
              <li>• Fast load times and solid technical foundation.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Example site types we build
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>• Corporate profile sites for service businesses.</li>
              <li>• Landing pages for campaigns and product launches.</li>
              <li>• Portfolios for creatives, consultants, and professionals.</li>
              <li>
                • Multi-page sites for schools, clinics, NGOs, and training
                institutions.
              </li>
            </ul>
          </div>
        </Container>
      </Section>

      {/* Approach */}
      <Section className="bg-slate-950/60 border-y border-slate-800">
        <Container>
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Our approach to SME websites
          </h2>
          <ol className="mt-4 space-y-3 text-sm text-slate-200 list-decimal list-inside">
            <li>
              We clarify the main goal of the site: leads, bookings, or sales.
            </li>
            <li>
              We map your key pages and structure content with clear hierarchy.
            </li>
            <li>
              We design layouts and copy to connect emotionally with Kenyan
              customers.
            </li>
            <li>
              We integrate WhatsApp, contact forms, and any needed tools.
            </li>
          </ol>
          <p className="mt-4 text-xs text-slate-400">
            You get a site that not only looks good but works hard for your
            business.
          </p>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-sky-400">
        <Container className="flex flex-col items-start justify-between gap-4 text-slate-950 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold sm:text-2xl">
              Want a website that helps you “be seen” and convert?
            </h2>
            <p className="mt-2 text-sm sm:text-base">
              Tell us about your business, current site (if any), and what you
              want to achieve. We’ll suggest a structure and approach tailored
              to you.
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