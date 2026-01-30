// app/services/marketing-video-packs/page.js
import Link from "next/link";
import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";

const WHATSAPP_URL = "https://wa.me/254759293030";

export const metadata = {
  title:
    "Marketing Video Packs in Kenya | UGC, Skits, Promotional & AI-Powered Videos",
  description:
    "Video content packs for Kenyan SMEs: UGC-style videos, skits, promotional clips, and AI-powered marketing videos optimized for social media.",
  keywords: [
    "UGC marketing videos Kenya",
    "promotional videos Kenya",
    "AI marketing videos Kenya",
    "video content for SMEs Kenya",
  ],
};

export default function MarketingVideoPacksPage() {
  return (
    <main>
      {/* Hero */}
      <Section className="bg-slate-950 pb-10 pt-20 sm:pt-24">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
            Video Marketing in Kenya
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Marketing Video Packs for{" "}
            <span className="text-emerald-400">Kenyan SMEs</span>
          </h1>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            Short, punchy videos that stop the scroll and move people to ask,
            visit, or buy. We create UGC-style videos, skits, promotional clips,
            and AI-powered marketing videos.
          </p>
          <p className="mt-3 text-xs text-slate-400 sm:text-sm">
            Designed for platforms like TikTok, Instagram Reels, YouTube
            Shorts, and Meta ads; tuned for Kenyan audiences and buying
            behavior.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
            >
              Ask about video packs
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

      {/* Types of videos */}
      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Types of videos we create
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>
                • <span className="font-semibold">UGC videos:</span> casual,
                “real person” videos that feel like customer recommendations.
              </li>
              <li>
                • <span className="font-semibold">Skits:</span> short story
                videos that show a problem and how your business solves it.
              </li>
              <li>
                • <span className="font-semibold">
                    Promotional videos:
                  </span>{" "}
                  direct offers, new product announcements, and campaign pushes.
              </li>
              <li>
                • <span className="font-semibold">
                    AI-powered marketing videos:
                  </span>{" "}
                  fast, creative variations generated and edited with AI to
                  match different audiences.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              How Kenyan SMEs use these videos
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>
                • Filling up TikTok and Reels content calendars for consistent
                awareness.
              </li>
              <li>
                • Giving ad campaigns fresh creatives to test and scale.</li>
              <li>
                • Turning customer testimonials into more engaging “face on
                camera” content.
              </li>
              <li>
                • Explaining products or services in 30–60 seconds with simple
                visuals.
              </li>
            </ul>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="bg-slate-950/60 border-y border-slate-800">
        <Container>
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            How we produce your video pack
          </h2>
          <ol className="mt-4 space-y-3 text-sm text-slate-200 list-decimal list-inside">
            <li>We define your goals: awareness, leads, or direct sales.</li>
            <li>
              We plan concepts, scripts, and the mix of UGC, skits, and promo
              styles.
            </li>
            <li>
              We shoot or generate content (and can work with your team or
              creators).
            </li>
            <li>
              We edit, brand, and optimize videos for your target platforms.
            </li>
          </ol>
          <p className="mt-4 text-xs text-slate-400">
            You receive final files ready to upload or plug into your ad
            campaigns.
          </p>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-sky-400">
        <Container className="flex flex-col items-start justify-between gap-4 text-slate-950 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold sm:text-2xl">
              Want video content that actually moves customers?
            </h2>
            <p className="mt-2 text-sm sm:text-base">
              Tell us your business type and main offer. We’ll suggest a video
              pack that fits your level and budget.
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