// app/services/[slug]/page.js
import Link from "next/link";
import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";

const WHATSAPP_URL = "https://wa.me/254759293030";

const SERVICES = {
  "social-media-management": {
    slug: "social-media-management",
    name: "Social Media Management",
    category: "Digital Marketing Services in Kenya",
    hook:
      "Turn your Facebook, Instagram and TikTok into real customer channels – not just places where you post and hope.",
  },
};

export function generateStaticParams() {
  return [{ slug: "social-media-management" }];
}

export default function ServiceDetailPage({ params }) {
  console.log("ServiceDetailPage params:", params);
  console.log("Available services:", Object.keys(SERVICES));

  const service = SERVICES[params.slug];

  if (!service) {
    console.log("Service not found for slug:", params.slug);
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

  return (
    <main>
      <Section className="bg-slate-950 pb-10 pt-20 sm:pt-24">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
            {service.category}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {service.name} for{" "}
            <span className="text-emerald-400">SMEs in Kenya</span>
          </h1>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            {service.hook}
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
    </main>
  );
}