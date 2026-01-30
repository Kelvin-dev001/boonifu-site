// app/services/whatsapp-broadcast-bulk-messaging/page.js
import Link from "next/link";
import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";

const WHATSAPP_URL = "https://wa.me/254759293030";

export const metadata = {
  title:
    "WhatsApp Broadcast & Bulk Messaging Services in Kenya | Boonifu – Reach Customers Fast",
  description:
    "Send targeted WhatsApp broadcast campaigns in Kenya. Promote offers, events, and reminders directly to your customers' phones.",
  keywords: [
    "WhatsApp bulk messaging Kenya",
    "WhatsApp broadcast Kenya",
    "SME marketing solutions Kenya",
    "direct response marketing Kenya",
  ],
};

export default function WhatsAppBroadcastPage() {
  return (
    <main>
      {/* Hero */}
      <Section className="bg-slate-950 pb-10 pt-20 sm:pt-24">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
            Direct Marketing in Kenya
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            WhatsApp Broadcast & Bulk Messaging for{" "}
            <span className="text-emerald-400">Kenyan SMEs</span>
          </h1>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            Reach your customers where they already spend their time – on
            WhatsApp. We help you plan, write, and send compliant broadcast
            campaigns that drive responses and repeat business.
          </p>
          <p className="mt-3 text-xs text-slate-400 sm:text-sm">
            Ideal for promotions, event reminders, new product launches, and
            re-activating previous customers in Kenya.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
            >
              Plan a WhatsApp campaign
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
              Why WhatsApp broadcast works in Kenya
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>
                • Most of your customers already use WhatsApp daily – no new
                app needed.
              </li>
              <li>
                • Messages are seen quickly and feel more personal than generic
                ads.
              </li>
              <li>
                • You can promote offers to existing customers who already know
                and trust you.
              </li>
              <li>
                • Perfect for time-sensitive campaigns like weekend offers or
                deadlines.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Typical use cases we support
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>
                • Flash sales and weekend discounts for shops, restaurants, and
                e-commerce.
              </li>
              <li>
                • Event promotions and reminders for conferences, trainings, and
                church events.
              </li>
              <li>
                • Re-engagement campaigns for customers who have not bought in
                a while.
              </li>
              <li>
                • New product or branch launch announcements.
              </li>
            </ul>
          </div>
        </Container>
      </Section>

      {/* How we run campaigns */}
      <Section className="bg-slate-950/60 border-y border-slate-800">
        <Container>
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            How Boonifu manages your WhatsApp campaigns
          </h2>
          <ol className="mt-4 space-y-3 text-sm text-slate-200 list-decimal list-inside">
            <li>
              <span className="font-semibold text-slate-50">
                Campaign planning:
              </span>{" "}
              we define your offer, audience segments, and timing.
            </li>
            <li>
              <span className="font-semibold text-slate-50">
                Copy & creatives:
              </span>{" "}
              we write WhatsApp-friendly messages and attach relevant posters or
              videos.
            </li>
            <li>
              <span className="font-semibold text-slate-50">
                Sending & monitoring:
              </span>{" "}
              we send the broadcast and track responses, clicks, and replies.
            </li>
            <li>
              <span className="font-semibold text-slate-50">
                Optimization:
              </span>{" "}
              we learn from each campaign and refine your messaging and timing
              over time.
            </li>
          </ol>
          <p className="mt-4 text-xs text-slate-400">
            We respect platform rules and best practices to protect your brand
            reputation and customer trust.
          </p>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-sky-400">
        <Container className="flex flex-col items-start justify-between gap-4 text-slate-950 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold sm:text-2xl">
              Have a customer list but not using WhatsApp properly?
            </h2>
            <p className="mt-2 text-sm sm:text-base">
              Share your business type, goals, and rough list size. We’ll
              propose a WhatsApp campaign that fits your budget.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-emerald-300 shadow-lg shadow-slate-900/40 transition hover:bg-slate-900"
          >
            Plan a campaign on WhatsApp
          </a>
        </Container>
      </Section>
    </main>
  );
}