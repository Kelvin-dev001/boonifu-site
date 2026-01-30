// app/services/[slug]/page.js
import Link from "next/link";
import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";

const WHATSAPP_URL = "https://wa.me/254759293030";

// MINIMAL services config with ONE service
const SERVICES = {
  "social-media-management": {
    slug: "social-media-management",
    name: "Social Media Management",
    category: "Digital Marketing Services in Kenya",
    seoTitle:
      "Social Media Management for SMEs in Kenya | Boonifu – Get Seen, Get Customers",
    seoDescription:
      "Done-for-you social media management for SMEs in Kenya. Content creation, posting, ad boosting, and analytics to help you get seen and get customers.",
    keywords: ["social media management Kenya"],
    hook:
      "Turn your Facebook, Instagram and TikTok into real customer channels – not just places where you post and hope.",
    audience:
      "Small and medium businesses in Kenya that want consistent content, engagement, and real inquiries from social media.",
    benefits: [
      "You look active, trusted, and professional online – even on your busiest days.",
    ],
    useCases: [
      "Retail shops, boutiques, salons, barbers, and spas promoting offers and new stock.",
    ],
    pricingTitle: "Social Media Management Plans for SMEs in Kenya",
    plans: [
      {
        name: "Starter Plan",
        badge: "Best for testing",
        description:
          "For small businesses that want a consistent presence and basic posting.",
        bullets: ["Poster-only content", "Basic posting schedule"],
        positioning:
          "You get a clean, consistent brand presence online without needing a full-time marketer.",
      },
    ],
  },
};

// Log at module load time
console.log("Service keys at build time:", Object.keys(SERVICES));
console.log(
  "Has 'social-media-management' key:",
  "social-media-management" in SERVICES
);

export function generateStaticParams() {
  return Object.values(SERVICES).map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const service = SERVICES[params.slug];

  console.log("generateMetadata - requested slug:", params.slug);

  if (!service) {
    console.log("generateMetadata - service NOT found for slug:", params.slug);
    return {
      title: "Service Not Found | Boonifu – Be Seen",
      description: "The service you are looking for does not exist or has moved.",
    };
  }

  console.log("generateMetadata - service FOUND for slug:", params.slug);

  return {
    title: service.seoTitle,
    description: service.seoDescription,
  };
}

export default function ServiceDetailPage({ params }) {
  console.log("Page render - Available service keys:", Object.keys(SERVICES));
  console.log("Page render - Requested slug:", params.slug);
  console.log(
    "Page render - Has 'social-media-management':",
    "social-media-management" in SERVICES
  );
  console.log(
    "Page render - Direct lookup social-media-management:",
    SERVICES["social-media-management"] ? "FOUND" : "NOT FOUND"
  );

  const service = SERVICES[params.slug];

  if (!service) {
    console.log(
      "Page render - Service NOT found for slug:",
      params.slug,
      "Returning 404 UI"
    );

    return (
      <main>
        <Section>
          <Container>
            <h1 className="text-2xl font-semibold text-slate-50">
              Service not found
            </h1>
            <p className="mt-2 text-sm text-slate-300">
              This service does not exist. Please explore our{" "}
              <Link href="/services" className="text-emerald-400 hover:underline">
                full services list
              </Link>{" "}
              or{" "}
              <a
                href={WHATSAPP_URL}
                className="text-emerald-400 hover:underline"
              >
                chat with us on WhatsApp
              </a>
              .
            </p>
          </Container>
        </Section>
      </main>
    );
  }

  console.log("Page render - Service FOUND for slug:", params.slug);

  const {
    name,
    category,
    hook,
    audience,
    benefits,
    useCases,
    pricingTitle,
    plans,
  } = service;

  const hasPricing = Array.isArray(plans) && plans.length > 0;

  return (
    <main>
      {/* Hero / Intro */}
      <Section className="bg-slate-950 pb-10 pt-20 sm:pt-24">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
            {category}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {name} for <span className="text-emerald-400">SMEs in Kenya</span>
          </h1>
          {hook && (
            <p className="mt-4 text-sm text-slate-300 sm:text-base">{hook}</p>
          )}
          {audience && (
            <p className="mt-3 text-xs text-slate-400 sm:text-sm">{audience}</p>
          )}
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
            {benefits && benefits.length > 0 && (
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {benefits.map((benefit) => (
                  <li key={benefit}>• {benefit}</li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Where this service works best
            </h2>
            {useCases && useCases.length > 0 && (
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {useCases.map((useCase) => (
                  <li key={useCase}>• {useCase}</li>
                ))}
              </ul>
            )}
          </div>
        </Container>
      </Section>

      {/* Pricing (only for Social Media Management in this minimal version) */}
      {hasPricing && (
        <Section className="bg-slate-950/60 border-y border-slate-800">
          <Container>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              {pricingTitle}
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm"
                >
                  <h3 className="text-base font-semibold text-slate-50">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-300">
                    {plan.description}
                  </p>
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
          </Container>
        </Section>
      )}
    </main>
  );
}