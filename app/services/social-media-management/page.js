// app/services/social-media-management/page.js
import Link from "next/link";
import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";

const WHATSAPP_URL = "https://wa.me/254759293030";

export const metadata = {
  title:
    "Social Media Management for SMEs in Kenya | Boonifu – Get Seen, Get Customers",
  description:
    "Done-for-you social media management for SMEs in Kenya. Content creation, posting, ad boosting, and analytics to help you get seen and get customers.",
  keywords: [
    "social media management Kenya",
    "SME social media packages Kenya",
    "digital marketing services in Kenya",
    "social media marketing for small business Kenya",
  ],
};

const PLANS = [
  {
    name: "Starter Plan",
    badge: "Best for testing",
    description:
      "For small businesses that want a consistent presence and basic posting without over-complication.",
    bullets: [
      "Poster-only content for 1–2 key platforms (e.g. Facebook + Instagram).",
      "Basic posting schedule (e.g. 3–8 posts per month).",
      "Caption support tuned for Kenyan audiences.",
      "Simple performance overview: reach, top posts, basic insights.",
      "Created specifically for entry-level SME budgets in Kenya.",
    ],
    positioning:
      "You get a clean, consistent brand presence online without needing to hire a full-time marketer.",
  },
  {
    name: "Growth Plan",
    badge: "Most popular",
    description:
      "For SMEs ready to attract more customers and leads through consistent content and ad boosting.",
    bullets: [
      "Posters + short videos (Reels, TikTok, YouTube Shorts).",
      "Content calendar, weekly posting, and campaign planning.",
      "Ad boosting / paid promotion setup and management (media budget agreed separately).",
      "Monthly analytics summary: what worked, what didn’t, clear next steps.",
      "Ideal for SMEs that depend on digital visibility for new customers.",
    ],
    positioning:
      "You get a partner actively growing your online visibility, not just posting graphics.",
  },
  {
    name: "Dominator Plan",
    badge: "Premium",
    description:
      "For brands that want to own their niche and dominate conversations in their industry.",
    bullets: [
      "Full content suite: posters, carousels, videos, stories, highlight covers.",
      "Advanced ad strategy: targeting, retargeting, and creative testing.",
      "Deep monthly analytics: audience insights, best-performing content, campaign ROI signals.",
      "Quarterly strategy and optimization sessions for aggressive growth.",
      "Best for ambitious SMEs, franchises, and fast-growing brands.",
    ],
    positioning:
      "You get a strategic growth team focused on expanding your reach and influence online.",
  },
];

export default function SocialMediaManagementPage() {
  return (
    <main>
      {/* Hero / Intro */}
      <Section className="bg-slate-950 pb-10 pt-20 sm:pt-24">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
            Digital Marketing Services in Kenya
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Social Media Management for{" "}
            <span className="text-emerald-400">SMEs in Kenya</span>
          </h1>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            Turn your Facebook, Instagram and TikTok into real customer
            channels; not just places where you post and hope. We manage your
            content, posting, ad boosting and reporting so you can focus on
            running the business.
          </p>
          <p className="mt-3 text-xs text-slate-400 sm:text-sm">
            Ideal for small and medium businesses, shops, salons, clinics,
            real estate agents, SACCOs, schools, and local brands across Kenya.
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

      {/* Benefits & Use Cases */}
      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Benefits for your business
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              We focus on outcomes: visibility, inquiries, and revenue growth; 
              not just random posting.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>
                • You look active, trusted, and professional online; even on
                your busiest days.
              </li>
              <li>
                • Your posts align with promotions, seasons, and what Kenyan
                customers actually respond to.
              </li>
              <li>
                • Clear reports that show what is working and what needs to
                change.
              </li>
              <li>
                • Optional ad boosting so your best content reaches more of the
                right people.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Where this works best
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Common ways SMEs in Kenya use our social media management.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>
                • Retail shops, boutiques, salons, barbers, and spas promoting
                offers and new stock.
              </li>
              <li>
                • Clinics and pharmacies building trust and answering common
                questions.
              </li>
              <li>
                • SACCOs, churches, schools, and NGOs sharing updates and
                events consistently.
              </li>
              <li>
                • Real estate agents and property managers showcasing listings
                and client stories.
              </li>
            </ul>
          </div>
        </Container>
      </Section>

      {/* Plans */}
      <Section className="bg-slate-950/60 border-y border-slate-800">
        <Container>
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Social Media Management Plans for SMEs in Kenya
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Choose a package that matches your current stage. You can always
            upgrade as your visibility and revenue grow.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col rounded-2xl border bg-slate-900/60 p-4 text-sm ${
                  plan.badge === "Most popular"
                    ? "border-emerald-500/80 shadow-lg shadow-emerald-500/30"
                    : "border-slate-800"
                }`}
              >
                <div className="mb-2 flex items-center justify-between gap-2">
                  <h3 className="text-base font-semibold text-slate-50">
                    {plan.name}
                  </h3>
                  {plan.badge && (
                    <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-xs font-semibold text-slate-950">
                      {plan.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-300">{plan.description}</p>
                <ul className="mt-3 space-y-1 text-xs text-slate-200">
                  {plan.bullets.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-slate-400">
                  {plan.positioning}
                </p>
                <a
                  href={WHATSAPP_URL}
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-emerald-400"
                >
                  Chat about this plan on WhatsApp
                </a>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-slate-400">
            Exact pricing depends on your industry, posting frequency, and
            whether you bundle services like ads, video, or WhatsApp campaigns.
            Get a custom quote on WhatsApp in a few minutes.
          </p>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-sky-400">
        <Container className="flex flex-col items-start justify-between gap-4 text-slate-950 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold sm:text-2xl">
              Let’s see which plan is right for you
            </h2>
            <p className="mt-2 text-sm sm:text-base">
              Send us a quick WhatsApp message about your business and goals.
              We’ll reply with a simple recommendation.
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