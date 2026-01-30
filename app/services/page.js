"use client";

// app/services/page.js
import { motion } from "framer-motion";
import {
  Megaphone,
  Bot,
  Smartphone,
  ImageIcon,
  VideoIcon,
  Globe2,
  Search,
  Sparkles,
  FileText,
} from "lucide-react";
import Link from "next/link";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import { fadeInUp, scaleIn } from "../components/ui/motionPresets";

export const metadata = {
  title: "Services for SMEs in Kenya | Digital Marketing, AI & Automation",
  description:
    "Explore Boonifu's full list of visibility and growth services for SMEs in Kenya, including social media management, AI chatbots, WhatsApp broadcasts, bulk SMS, and more.",
};

const WHATSAPP_URL = "https://wa.me/254759293030";

export default function ServicesPage() {
  return (
    <main>
      <Section className="bg-slate-950 pb-10 pt-20 sm:pt-24">
        <Container>
          <motion.header
            className="max-w-3xl"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-400">
              Our Services
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Visibility & growth solutions built for{" "}
              <span className="text-emerald-400">SMEs in Kenya</span>
            </h1>
            <p className="mt-4 text-sm text-slate-300 sm:text-base">
              From social media to AI chatbots, WhatsApp marketing, and
              websites, Boonifu provides modern digital marketing services that
              help your business get seen, get customers, and grow faster.
            </p>
            <a
              href={WHATSAPP_URL}
              className="mt-5 inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
            >
              Chat with us on WhatsApp
            </a>
          </motion.header>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ALL_SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: 0.04 * index }}
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
                      <h2 className="text-base font-semibold text-slate-50">
                        {service.title}
                      </h2>
                    </div>
                    <p className="mt-2 text-xs text-slate-300">
                      {service.description}
                    </p>
                    <p className="mt-3 text-xs font-semibold text-emerald-400">
                      View details →
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <p className="mt-6 text-xs text-slate-400">
            Not sure which service is right for your business? Start a quick
            WhatsApp chat and we’ll recommend the best options based on your
            budget, location, and industry.
          </p>
        </Container>
      </Section>
    </main>
  );
}

const ALL_SERVICES = [
  {
    slug: "social-media-management",
    title: "Social Media Management",
    description:
      "Done-for-you social media content, posting, and engagement for Kenyan SMEs.",
    icon: Megaphone,
  },
  {
    slug: "ai-powered-sales-chatbot",
    title: "AI-Powered Sales Chatbot",
    description:
      "AI chatbot that responds to customer questions 24/7 and captures leads.",
    icon: Bot,
  },
  {
    slug: "whatsapp-broadcast-bulk-messaging",
    title: "WhatsApp Broadcast (Bulk Messaging)",
    description:
      "Send targeted WhatsApp campaigns to your customer list for offers and updates.",
    icon: Smartphone,
  },
  {
    slug: "bulk-sms-services",
    title: "Bulk SMS Services",
    description:
      "Reliable bulk SMS delivery for promotions, reminders, and alerts anywhere in Kenya.",
    icon: Smartphone,
  },
  {
    slug: "marketing-posters-packs",
    title: "Marketing Posters Packs",
    description:
      "Custom-designed marketing posters for campaigns, promotions, and announcements.",
    icon: ImageIcon,
  },
  {
    slug: "marketing-video-packs",
    title: "Marketing Video Packs",
    description:
      "UGC videos, skits, promotional clips, and AI-generated videos for social media.",
    icon: VideoIcon,
  },
  {
    slug: "e-commerce-solutions",
    title: "E-commerce Solutions",
    description:
      "Simple online stores and ordering experiences for Kenyan businesses.",
    icon: Globe2,
  },
  {
    slug: "website-design-development",
    title: "Website Design & Development",
    description:
      "Fast, modern websites and landing pages that convert visitors into inquiries.",
    icon: Globe2,
  },
  {
    slug: "search-engine-llm-keyword-optimization",
    title: "Search Engine & LLM Keyword Optimization",
    description:
      "SEO and LLM-optimized content to help you show up in Google and AI search tools.",
    icon: Search,
  },
  {
    slug: "animations-motion-graphics",
    title: "Animations & Motion Graphics",
    description:
      "Attention-grabbing animations and motion graphics for social media and ads.",
    icon: Sparkles,
  },
  {
    slug:
      "business-profiles-brochures-flyers-business-cards-packs",
    title:
      "Business Profiles, Brochures, Flyers & Business Cards Packs",
    description:
      "Professional offline and online brand materials that make your business look credible.",
    icon: FileText,
  },
];