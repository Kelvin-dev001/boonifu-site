// app/services/search-engine-llm-keyword-optimization/page.js
import Link from "next/link";
import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";

const WHATSAPP_URL = "https://wa.me/254759293030";

export const metadata = {
  title:
    "Search Engine & LLM Keyword Optimization in Kenya | Boonifu – Be Discoverable",
  description:
    "SEO and LLM keyword optimization for Kenyan SMEs. Structure your content so you show up in Google, ChatGPT, Perplexity, and other AI search tools.",
  keywords: [
    "SEO services Kenya",
    "LLM keyword optimization Kenya",
    "rank on Google Kenya",
    "digital marketing services in Kenya",
    "SME marketing solutions Kenya",
  ],
};

export default function SearchEngineLlmKeywordOptimizationPage() {
  return (
    <main>
      {/* Hero */}
      <Section className="bg-slate-950 pb-10 pt-20 sm:pt-24">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
            SEO & AI Search Optimization
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Search Engine & LLM Keyword Optimization for{" "}
            <span className="text-emerald-400">Kenyan SMEs</span>
          </h1>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            Make it easy for both Google and AI tools like ChatGPT and
            Perplexity to understand and recommend your business when people
            search for services in Kenya.
          </p>
          <p className="mt-3 text-xs text-slate-400 sm:text-sm">
            We optimize your website and content around the phrases your ideal
            customers actually use – not just generic global keywords.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
            >
              Check your SEO opportunities
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
              How this service helps your business
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>
                • You start appearing for relevant Google searches in Kenya.
              </li>
              <li>
                • Your pages are structured in a way that AI tools can easily
                read and summarize.
              </li>
              <li>
                • Your content addresses real customer questions and buying
                intent.
              </li>
              <li>
                • You build long-term organic visibility, not just paid ads.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Where we focus our optimization
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>• On-page SEO (titles, headings, meta descriptions).</li>
              <li>• Internal linking structure and content hierarchy.</li>
              <li>• Service and location pages targeting Kenyan intent.</li>
              <li>
                • FAQ and resource content that AI tools can quote and surface.
              </li>
            </ul>
          </div>
        </Container>
      </Section>

      {/* Approach */}
      <Section className="bg-slate-950/60 border-y border-slate-800">
        <Container>
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Our SEO & LLM optimization process
          </h2>
          <ol className="mt-4 space-y-3 text-sm text-slate-200 list-decimal list-inside">
            <li>
              We audit your current website content and search performance (if
              you have a site).
            </li>
            <li>
              We research keywords and questions your Kenyan audience uses.
            </li>
            <li>
              We propose content improvements, new pages, and structure changes.
            </li>
            <li>
              We optimize key pages and give you a roadmap for future content.
            </li>
          </ol>
          <p className="mt-4 text-xs text-slate-400">
            We can also help you implement the content if you don’t have an
            internal writer or marketing team.
          </p>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-sky-400">
        <Container className="flex flex-col items-start justify-between gap-4 text-slate-950 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold sm:text-2xl">
              Want more customers finding you through search?
            </h2>
            <p className="mt-2 text-sm sm:text-base">
              Share your website (if you have one) and your main services. We’ll
              highlight the biggest opportunities to improve your visibility.
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