// app/services/animations-motion-graphics/page.js
import Link from "next/link";
import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";

const WHATSAPP_URL = "https://wa.me/254759293030";

export const metadata = {
  title:
    "Animations & Motion Graphics for Kenyan SMEs | Boonifu – Stand Out Visually",
  description:
    "Custom animations and motion graphics for SMEs in Kenya. Enhance your videos, ads, and social content with compelling motion.",
  keywords: [
    "motion graphics Kenya",
    "animated marketing videos Kenya",
    "GIFs and animations for social media Kenya",
  ],
};

export default function AnimationsMotionGraphicsPage() {
  return (
    <main>
      {/* Hero */}
      <Section className="bg-slate-950 pb-10 pt-20 sm:pt-24">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
            Creative Motion for Marketing
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Animations & Motion Graphics for{" "}
            <span className="text-emerald-400">Kenyan SMEs</span>
          </h1>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            Make your content impossible to ignore with clean, modern animations
            that match your brand. Perfect for explainers, ads, intros, and
            social media.
          </p>
          <p className="mt-3 text-xs text-slate-400 sm:text-sm">
            We combine storytelling, design, and motion to simplify complex
            ideas and grab attention quickly.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
            >
              Talk about motion graphics
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
              Why animations help your marketing
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>
                • Quickly explain complex products or services visually in
                seconds.
              </li>
              <li>
                • Increase attention and engagement on social media and ads.
              </li>
              <li>
                • Give your brand a premium, polished feel compared to static
                posts.
              </li>
              <li>
                • Reuse animated assets across videos, stories, and websites.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Examples of what we can create
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>• Animated explainer videos and product walkthroughs.</li>
              <li>• Logo animations and branded intro/outro sequences.</li>
              <li>• Animated social media posts, carousels, and stories.</li>
              <li>• Branded GIFs and stickers for chats and DMs.</li>
            </ul>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="bg-slate-950/60 border-y border-slate-800">
        <Container>
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Our motion graphics process
          </h2>
          <ol className="mt-4 space-y-3 text-sm text-slate-200 list-decimal list-inside">
            <li>We define your message, audience, and platforms.</li>
            <li>
              We propose style frames and a concept that fits your brand and
              goals.
            </li>
            <li>
              We produce storyboards, then animate with your feedback loops.
            </li>
            <li>
              We export final assets in the formats you need (video, GIF,
              story, etc.).
            </li>
          </ol>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-sky-400">
        <Container className="flex flex-col items-start justify-between gap-4 text-slate-950 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold sm:text-2xl">
              Want your brand to move, not just appear?
            </h2>
            <p className="mt-2 text-sm sm:text-base">
              Share your current content and what you wish it could do. We’ll
              recommend motion ideas that fit your brand and budget.
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