// app/services/ai-powered-sales-chatbot/page.js
import Link from "next/link";
import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";

const WHATSAPP_URL = "https://wa.me/254759293030";

export const metadata = {
  title:
    "AI-Powered Sales Chatbot for Businesses in Kenya | Boonifu – 24/7 Lead Capture",
  description:
    "AI-powered sales chatbots for Kenyan SMEs. Answer FAQs, qualify leads, and capture customer details 24/7 on WhatsApp, Instagram, or your website.",
  keywords: [
    "AI chatbot for businesses Kenya",
    "WhatsApp chatbot Kenya",
    "AI customer support Kenya",
    "sales chatbot for SMEs in Kenya",
    "digital marketing services in Kenya",
  ],
};

export default function AiPoweredSalesChatbotPage() {
  return (
    <main>
      {/* Hero */}
      <Section className="bg-slate-950 pb-10 pt-20 sm:pt-24">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
            AI Automation for Businesses in Kenya
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            AI‑Powered Sales Chatbot for{" "}
            <span className="text-emerald-400">SMEs in Kenya</span>
          </h1>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            Your business can answer customers 24/7 – even when you are offline
            – with an AI chatbot trained on your products, services, and
            frequently asked questions.
          </p>
          <p className="mt-3 text-xs text-slate-400 sm:text-sm">
            We design, configure, and train a standard chatbot that is fully
            customized for your business and industry, on platforms like
            WhatsApp, Instagram, or your website.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
            >
              Chat with us on WhatsApp
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
              What this chatbot does for your business
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>
                • Instantly answers common questions about prices, offers,
                opening hours, services, and location.
              </li>
              <li>
                • Collects important lead details like name, phone number, and
                interest, ready for your sales team.
              </li>
              <li>
                • Reduces the number of missed leads when you are busy, in
                meetings, or offline.
              </li>
              <li>
                • Keeps your responses consistent, professional, and on-brand
                across all conversations.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Where Kenyan SMEs use AI chatbots
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Typical use cases for chatbots in the Kenyan market.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>
                • Retail shops answering stock availability, pricing ranges, and
                product options.
              </li>
              <li>
                • Clinics, pharmacies, and hospitals handling basic inquiries on
                services, directions, and appointment requests.
              </li>
              <li>
                • Real estate agents capturing buyer/tenant details and
                answering questions about properties.
              </li>
              <li>
                • Education centers and academies providing course information,
                fees, intakes, and directions.
              </li>
            </ul>
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section className="bg-slate-950/60 border-y border-slate-800">
        <Container>
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            How our AI chatbot setup works
          </h2>
          <ol className="mt-4 space-y-3 text-sm text-slate-200 list-decimal list-inside">
            <li>
              <span className="font-semibold text-slate-50">
                Discovery & script:
              </span>{" "}
              we understand your business, FAQs, and the main goals of the
              chatbot (leads, bookings, support).
            </li>
            <li>
              <span className="font-semibold text-slate-50">
                Training & flows:
              </span>{" "}
              we build conversation flows and train the AI on your content,
              pricing ranges, and brand tone.
            </li>
            <li>
              <span className="font-semibold text-slate-50">
                Integration:
              </span>{" "}
              we connect the chatbot to your chosen platform (WhatsApp, IG,
              website widget, or multiple).
            </li>
            <li>
              <span className="font-semibold text-slate-50">
                Testing & optimization:
              </span>{" "}
              we test real conversations, improve answers, and adjust flows
              based on real users.
            </li>
          </ol>
          <p className="mt-4 text-xs text-slate-400">
            You stay in control: you can always hand over to a human, update
            information, or pause the chatbot when needed.
          </p>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-sky-400">
        <Container className="flex flex-col items-start justify-between gap-4 text-slate-950 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold sm:text-2xl">
              Want to see a demo chatbot for your business?
            </h2>
            <p className="mt-2 text-sm sm:text-base">
              Send us a WhatsApp message with your business name and industry.
              We’ll show you what your AI sales assistant could look like.
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