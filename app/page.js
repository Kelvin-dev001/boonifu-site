"use client";

// app/page.js
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Megaphone,
  Bot,
  Smartphone,
  Sparkles,
  ShoppingBag,
} from "lucide-react";
import Container from "./components/ui/Container";
import Section from "./components/ui/Section";
import { fadeInUp, scaleIn } from "./components/ui/motionPresets";

const WHATSAPP_URL = "https://wa.me/254759293030";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pb-16 pt-20 sm:pt-24 lg:pt-28">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-400">
              Boonifu – Be Seen
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Digital marketing & AI‑powered growth{" "}
              <span className="text-emerald-400">for SMEs in Kenya</span>.
            </h1>
            <p className="mt-4 text-base text-slate-300 sm:text-lg">
              We help small and medium businesses in Kenya get seen, get
              customers, and grow revenue using modern social media marketing,
              WhatsApp campaigns, AI chatbots, and automation.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={WHATSAPP_URL}
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:bg-emerald-400"
              >
                Chat with us on WhatsApp
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-slate-500/60 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-emerald-400 hover:text-emerald-300"
              >
                Explore services
              </Link>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              Ideal for SMEs, startups, SACCOs, clinics, shops, real estate
              agents, churches, schools, and local brands in Kenya.
            </p>
          </motion.div>

          <motion.div
            className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 text-sm text-slate-200"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <h2 className="text-base font-semibold text-emerald-400">
              What we do for your business
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Run social media that actually brings customers.</li>
              <li>• Set up WhatsApp broadcasts and bulk SMS for promotions.</li>
              <li>
                • Build AI‑powered chatbots that respond to customers 24/7.
              </li>
              <li>• Design websites, posters, videos, and marketing content.</li>
              <li>• Help you track results and grow consistently.</li>
            </ul>
            <p className="mt-4 text-xs text-slate-400">
              No jargon. No overwhelm. Just clear marketing support for Kenyan
              SMEs.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Core Services Quick Grid */}
      <Section
        id="services-preview"
        className="bg-slate-950/60 border-y border-slate-800"
      >
        <Container>
          <header className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Visibility & growth services for{" "}
              <span className="text-emerald-400">SMEs in Kenya</span>
            </h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              Pick what you need now, grow into more later. Every service is
              designed for the Kenyan market and SME budgets.
            </p>
          </header>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CORE_SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: 0.05 * index }}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-200 shadow-sm shadow-slate-950/40 transition hover:-translate-y-1 hover:border-emerald-400/80 hover:bg-slate-900"
                  >
                    <div className="flex items-center gap-2">
                      {Icon && (
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                          <Icon className="h-4 w-4" />
                        </span>
                      )}
                      <h3 className="text-base font-semibold text-slate-50">
                        {service.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-xs text-slate-300">
                      {service.description}
                    </p>
                    <span className="mt-3 text-xs font-semibold text-emerald-400">
                      Learn more →
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Why Boonifu */}
      <Section id="why-boonifu">
        <Container>
          <header className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Why SMEs in Kenya choose Boonifu
            </h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              We understand the realities of running a business in Kenya –
              irregular cash flow, busy days, and the need for marketing that
              actually converts into real customers.
            </p>
          </header>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {WHY_POINTS.map((item, index) => (
              <motion.div
                key={item.title}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: 0.05 * index }}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm"
              >
                <h3 className="text-sm font-semibold text-slate-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Social Proof / Testimonials */}
      <Section
        id="social-proof"
        className="bg-slate-950/60 border-y border-slate-800"
      >
        <Container>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Trusted by growing businesses in Kenya
            </h2>
            <p className="text-sm text-slate-300 sm:text-base">
              We partner with SMEs across different industries to modernize
              their visibility and marketing – from websites and e‑commerce to
              social media, AI chatbots, and paid media.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-400">
                  Website & Social Media
                </p>
                <p className="mt-2 italic">
                  &ldquo;Boonifu helped us move from a basic online presence to
                  a proper website and active social media. Our brand now looks
                  professional and we have a clear structure for our content and
                  campaigns.&rdquo;
                </p>
                <p className="mt-3 font-semibold text-slate-100">
                  Nebsam Digital Solutions (K) Ltd
                </p>
                <p className="text-[11px] text-slate-400">
                  Website design, social media management & media buying
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-400">
                  E‑commerce & Social Media
                </p>
                <p className="mt-2 italic">
                  &ldquo;With Boonifu we set up an e‑commerce presence that
                  matches how our customers actually buy, and we now have
                  consistent social media that supports our online
                  sales.&rdquo;
                </p>
                <p className="mt-3 font-semibold text-slate-100">
                  snaaap connections
                </p>
                <p className="text-[11px] text-slate-400">
                  E‑commerce solutions & social media management
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-400">
                  SMEs Across Kenya
                </p>
                <p className="mt-2 italic">
                  &ldquo;From clinics and shops to SACCOs and real estate
                  agents, Boonifu gives us clarity on what to post, how to run
                  campaigns, and how to turn visibility into real
                  inquiries.&rdquo;
                </p>
                <p className="mt-3 font-semibold text-slate-100">
                  Selected SME clients
                </p>
                <p className="text-[11px] text-slate-400">
                  Social media, WhatsApp campaigns & design support
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Guidance – Where to Start */}
      <Section id="where-to-start">
        <Container>
          <header className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Not sure where to start?
            </h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              Here are common starting points for SMEs we work with. Pick the
              one that sounds most like you – or just send us a WhatsApp
              message and we’ll guide you.
            </p>
          </header>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-200">
              <h3 className="text-sm font-semibold text-slate-50">
                &ldquo;We need to look professional online&rdquo;
              </h3>
              <p className="mt-2">
                Start with a{" "}
                <span className="font-semibold">
                  Website + Business Profile & Posters pack
                </span>{" "}
                so people can trust you and clearly understand what you do.
              </p>
              <Link
                href="/services/website-design-development"
                className="mt-3 inline-block text-[11px] font-semibold text-emerald-400 hover:underline"
              >
                View website design →
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-200">
              <h3 className="text-sm font-semibold text-slate-50">
                &ldquo;We want more inquiries and walk‑ins&rdquo;
              </h3>
              <p className="mt-2">
                Start with{" "}
                <span className="font-semibold">
                  Social Media Management + WhatsApp Broadcast
                </span>{" "}
                to increase visibility, promotions, and customer touchpoints.
              </p>
              <Link
                href="/services/social-media-management"
                className="mt-3 inline-block text-[11px] font-semibold text-emerald-400 hover:underline"
              >
                View social media plans →
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-200">
              <h3 className="text-sm font-semibold text-slate-50">
                &ldquo;We get many chats; we can’t reply to all&rdquo;
              </h3>
              <p className="mt-2">
                Start with an{" "}
                <span className="font-semibold">AI‑powered Sales Chatbot</span>{" "}
                on WhatsApp or your website to answer FAQs and capture leads
                24/7.
              </p>
              <Link
                href="/services/ai-powered-sales-chatbot"
                className="mt-3 inline-block text-[11px] font-semibold text-emerald-400 hover:underline"
              >
                View chatbot service →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Starter Offers / Engagement Packs */}
      <Section
        id="starter-offers"
        className="bg-slate-950/60 border-y border-slate-800"
      >
        <Container>
          <header className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Simple starter offers to work with Boonifu
            </h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              Instead of random one‑off jobs, we recommend focused sprints that
              give your business a clear boost in 4–12 weeks.
            </p>
          </header>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm"
            >
              <h3 className="text-base font-semibold text-slate-50">
                Boonifu Launch Pack (4–6 weeks)
              </h3>
              <p className="mt-2 text-xs text-slate-300">
                For new or rebranding businesses that need to look professional
                online – fast.
              </p>
              <ul className="mt-3 space-y-1 text-xs text-slate-200">
                <li>• Modern website (focused set of key pages).</li>
                <li>• Business profile PDF or deck to send to prospects.</li>
                <li>• Launch poster pack for social media & WhatsApp.</li>
                <li>• Basic launch plan for your first 2–4 weeks online.</li>
              </ul>
              <p className="mt-3 text-[11px] text-slate-400">
                Ideal if you’re just starting out, rebranding, or preparing to
                pitch to more serious clients.
              </p>
              <a
                href={WHATSAPP_URL}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                Ask about the Launch Pack on WhatsApp
              </a>
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm"
            >
              <h3 className="text-base font-semibold text-slate-50">
                Growth Sprint (90 days)
              </h3>
              <p className="mt-2 text-xs text-slate-300">
                For SMEs that already have customers and want more consistent
                inquiries and sales.
              </p>
              <ul className="mt-3 space-y-1 text-xs text-slate-200">
                <li>• Social media management with weekly content.</li>
                <li>• WhatsApp broadcast or AI sales chatbot setup.</li>
                <li>• Monthly performance review & strategy adjustments.</li>
                <li>• Clear, action‑oriented reporting (no jargon).</li>
              </ul>
              <p className="mt-3 text-[11px] text-slate-400">
                Ideal if you feel &ldquo;stuck&rdquo; with your current online
                presence and want a focused 90‑day push.
              </p>
              <a
                href={WHATSAPP_URL}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                Ask about the Growth Sprint on WhatsApp
              </a>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Pricing Teaser – Social Media Management Plans */}
      <Section id="pricing">
        <Container>
          <header className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Social Media Management plans built for Kenyan SMEs
            </h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              Start small and scale up as your business grows. These packages
              focus on visibility, engagement, and real customer leads.
            </p>
          </header>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {SOCIAL_MEDIA_PLANS.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: 0.05 * index }}
                className={`flex flex-col rounded-2xl border bg-slate-900/60 p-4 text-sm ${
                  plan.highlight
                    ? "border-emerald-500/80 shadow-lg shadow-emerald-500/30"
                    : "border-slate-800"
                }`}
              >
                <div className="mb-2 flex items-center justify-between gap-2">
                  <h3 className="text-base font-semibold text-slate-50">
                    {plan.name}
                  </h3>
                  {plan.highlight && (
                    <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-xs font-semibold text-slate-950">
                      Most popular
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-300">{plan.description}</p>
                <ul className="mt-3 space-y-1 text-xs text-slate-200">
                  {plan.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-emerald-400"
                >
                  Chat about this plan on WhatsApp
                </a>
              </motion.div>
            ))}
          </div>

          <p className="mt-4 text-xs text-slate-400">
            Exact pricing is customized based on your business type, frequency
            of posting, and whether you combine services like ads, WhatsApp
            broadcasts, or content creation.
          </p>
        </Container>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <Container>
          <header className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Frequently asked questions
            </h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              A few quick answers to common questions SMEs ask us before we
              start working together.
            </p>
          </header>

          <div className="mt-6 space-y-4 text-xs text-slate-200 sm:text-sm">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="text-sm font-semibold text-slate-50">
                How long until we see results?
              </h3>
              <p className="mt-2 text-slate-300">
                It depends on the service and your current stage, but most SMEs
                start seeing clearer visibility and engagement in the first
                4–8 weeks. Direct inquiries and sales growth usually follow as
                we stay consistent and optimize your content and campaigns.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="text-sm font-semibold text-slate-50">
                What do you need from us to get started?
              </h3>
              <p className="mt-2 text-slate-300">
                A WhatsApp contact person, access to your existing pages or
                accounts, and basic information about your offers, seasons, and
                priorities. We guide you step‑by‑step and keep the process as
                light as possible on your side.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="text-sm font-semibold text-slate-50">
                Can we start small and upgrade later?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes. Many clients start with one or two services (for example,
                social media or website) and then add WhatsApp campaigns,
                AI chatbots, or more content once they see the impact.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="text-sm font-semibold text-slate-50">
                Do you lock us into long contracts?
              </h3>
              <p className="mt-2 text-slate-300">
                No. We usually recommend a 3–6 month commitment for best
                results, but we keep agreements simple and transparent. You keep
                the assets we create for you (content, website, designs).
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* WhatsApp CTA Banner */}
      <Section className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-sky-400">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
        >
          <Container className="flex flex-col items-start justify-between gap-4 text-slate-950 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">
                Ready to get your business seen?
              </h2>
              <p className="mt-2 text-sm sm:text-base">
                Tell us about your business on WhatsApp and we’ll suggest the
                best services for your budget and goals.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-emerald-300 shadow-lg shadow-slate-900/40 transition hover:bg-slate-900"
            >
              Chat with us on WhatsApp
            </a>
          </Container>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-6 text-xs text-slate-400">
        <Container className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Boonifu – Be Seen. All rights reserved.
          </p>
          <p>Digital marketing & AI growth solutions for SMEs in Kenya.</p>
        </Container>
      </footer>
    </main>
  );
}

const CORE_SERVICES = [
  {
    slug: "social-media-management",
    title: "Social Media Management",
    description:
      "Consistent, on-brand content and community management for Facebook, Instagram, TikTok, and more.",
    icon: Megaphone,
  },
  {
    slug: "ai-powered-sales-chatbot",
    title: "AI-Powered Sales Chatbot",
    description:
      "24/7 AI chatbot for WhatsApp, Instagram, or your website to answer FAQs and capture leads automatically.",
    icon: Bot,
  },
  {
    slug: "whatsapp-broadcast-bulk-messaging",
    title: "WhatsApp Broadcast (Bulk Messaging)",
    description:
      "Send targeted WhatsApp campaigns to your customer list for offers, updates, and reminders.",
    icon: Smartphone,
  },
  {
    slug: "bulk-sms-services",
    title: "Bulk SMS Services",
    description:
      "Fast, reliable bulk SMS for promotions, reminders, and alerts across Kenya.",
    icon: Smartphone,
  },
  {
    slug: "marketing-posters-packs",
    title: "Marketing Posters Packs",
    description:
      "Professionally designed posters tailored for your brand and campaigns.",
    icon: Sparkles,
  },
  {
    slug: "marketing-video-packs",
    title: "Marketing Video Packs",
    description:
      "UGC, skits, promo videos, and AI-powered videos designed to grab attention online.",
    icon: ShoppingBag,
  },
];

const WHY_POINTS = [
  {
    title: "Built for Kenyan SMEs",
    body: "We design offers, content, and campaigns with Kenyan customers, seasons, and platforms in mind.",
  },
  {
    title: "Simple, clear communication",
    body: "We avoid heavy jargon and give you clear, WhatsApp-friendly updates on what is happening.",
  },
  {
    title: "Focused on real outcomes",
    body: "The goal is not likes only – it’s visibility, inquiries, foot traffic, and revenue growth.",
  },
];

const SOCIAL_MEDIA_PLANS = [
  {
    name: "Starter Plan",
    description:
      "Perfect for small businesses testing social media for visibility and credibility.",
    points: [
      "Poster design & posting for 1–2 main platforms",
      "Basic scheduling and caption support",
      "Limited analytics overview (top posts, reach)",
      "Designed for entry-level SME budgets",
    ],
    highlight: false,
  },
  {
    name: "Growth Plan",
    description:
      "Our most popular plan for SMEs that want consistent customers from social media.",
    points: [
      "Posters + short video content (Reels/Shorts/TikTok)",
      "Content calendar and weekly posting",
      "Boosted posts / paid ads management (agreed budget)",
      "Monthly performance summary with recommendations",
    ],
    highlight: true,
  },
  {
    name: "Dominator Plan",
    description:
      "Premium content and strategy for brands that want to own their niche online.",
    points: [
      "Full content suite: posters, videos, stories, carousels",
      "Advanced ads + audience targeting and retargeting",
      "Deep analytics, competitor review & strategy sessions",
      "Quarterly optimization roadmap for aggressive growth",
    ],
    highlight: false,
  },
];