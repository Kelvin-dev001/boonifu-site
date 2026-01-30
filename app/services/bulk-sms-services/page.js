// app/services/bulk-sms-services/page.js
import Link from "next/link";
import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";

const WHATSAPP_URL = "https://wa.me/254759293030";

export const metadata = {
  title:
    "Bulk SMS Services in Kenya for SMEs | Boonifu – Promotions, Alerts & Reminders",
  description:
    "Reliable bulk SMS services for SMEs in Kenya. Send promotions, reminders, and alerts quickly to your customer base.",
  keywords: [
    "bulk SMS services Kenya",
    "SMS marketing Kenya",
    "customer alerts Kenya",
    "SME communication tools Kenya",
  ],
};

export default function BulkSmsServicesPage() {
  return (
    <main>
      {/* Hero */}
      <Section className="bg-slate-950 pb-10 pt-20 sm:pt-24">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
            Direct Messaging in Kenya
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Bulk SMS Services for{" "}
            <span className="text-emerald-400">SMEs in Kenya</span>
          </h1>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            Deliver your message to thousands of customers instantly with
            reliable bulk SMS campaigns across Kenya. Perfect for promotions,
            alerts, and reminders.
          </p>
          <p className="mt-3 text-xs text-slate-400 sm:text-sm">
            From SACCOs and schools to clinics and retail brands, SMS is still
            one of the most powerful ways to instantly reach a large audience.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
            >
              Talk to us about Bulk SMS
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
              Why Bulk SMS is still powerful
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>
                • Very high open rates compared to email and some social media.
              </li>
              <li>• Works on basic phones and feature phones across Kenya.</li>
              <li>
                • Ideal for time-sensitive messages like reminders and alerts.
              </li>
              <li>
                • Can be used alongside WhatsApp, email, and social campaigns.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Typical use cases in Kenya
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>
                • Payment reminders and due date alerts for SACCOs and
                subscription businesses.
              </li>
              <li>
                • Appointment and class reminders for clinics, hospitals,
                schools, and training centers.
              </li>
              <li>
                • Promotional blasts for retail, supermarkets, and e-commerce
                campaigns.
              </li>
              <li>
                • Urgent notifications for system downtime, emergencies, or
                important updates.
              </li>
            </ul>
          </div>
        </Container>
      </Section>

      {/* How we help */}
      <Section className="bg-slate-950/60 border-y border-slate-800">
        <Container>
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            How Boonifu supports your Bulk SMS campaigns
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            <li>• Strategy and timing recommendations for your messages.</li>
            <li>
              • Message writing that is short, clear, and action-focused.
            </li>
            <li>
              • Assistance with list preparation and basic segmentation (if
              available).
            </li>
            <li>• Reporting on delivery and basic performance metrics.</li>
          </ul>
          <p className="mt-4 text-xs text-slate-400">
            You maintain control over your customer data while we help you use
            it more effectively.
          </p>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-sky-400">
        <Container className="flex flex-col items-start justify-between gap-4 text-slate-950 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold sm:text-2xl">
              Need to send an urgent or important SMS blast?
            </h2>
            <p className="mt-2 text-sm sm:text-base">
              Tell us your goal, target group, and approximate list size. We’ll
              guide you on the best way to run your Bulk SMS campaign.
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