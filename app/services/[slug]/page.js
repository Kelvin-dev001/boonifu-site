// app/services/[slug]/page.js
import Link from "next/link";
import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";

const WHATSAPP_URL = "https://wa.me/254759293030";

/**
 * Central config for all services.
 * KEYS MUST MATCH the slugs used in /services and /.
 */
const SERVICES = {
  "social-media-management": {
    slug: "social-media-management",
    name: "Social Media Management",
    category: "Digital Marketing Services in Kenya",
    seoTitle:
      "Social Media Management for SMEs in Kenya | Boonifu – Get Seen, Get Customers",
    seoDescription:
      "Done-for-you social media management for SMEs in Kenya. Content creation, posting, ad boosting, and analytics to help you get seen and get customers.",
    keywords: [
      "social media management Kenya",
      "SME social media packages Kenya",
      "digital marketing services in Kenya",
      "social media marketing for small business Kenya",
    ],
    hook:
      "Turn your Facebook, Instagram and TikTok into real customer channels – not just places where you post and hope.",
    audience:
      "Small and medium businesses in Kenya that want consistent content, engagement, and real inquiries from social media.",
    benefits: [
      "You look active, trusted, and professional online – even on your busiest days.",
      "Your posts are aligned to promotions, seasons, and what Kenyan customers actually respond to.",
      "Clear reports that show what is working – not just random posting.",
      "Optional ad boosting so your best content reaches more of the right people.",
    ],
    useCases: [
      "Retail shops, boutiques, salons, barbers, and spas promoting offers and new stock.",
      "Clinics and health centers building trust and answering common questions.",
      "SACCOs, churches, schools, and NGOs sharing updates and events consistently.",
      "Real estate agents and property managers showcasing listings and client stories.",
    ],
    pricingTitle: "Social Media Management Plans for SMEs in Kenya",
    plans: [
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
    ],
  },

  "ai-powered-sales-chatbot": {
    slug: "ai-powered-sales-chatbot",
    name: "AI-Powered Sales Chatbot",
    category: "AI Automation for Businesses in Kenya",
    seoTitle:
      "AI-Powered Sales Chatbot for Businesses in Kenya | Boonifu – 24/7 Lead Capture",
    seoDescription:
      "AI-powered sales chatbots for Kenyan SMEs. Answer FAQs, qualify leads, and capture customer details 24/7 on WhatsApp, Instagram, or your website.",
    keywords: [
      "AI chatbot for businesses Kenya",
      "WhatsApp chatbot Kenya",
      "AI customer support Kenya",
      "sales chatbot for SMEs in Kenya",
    ],
    hook:
      "Your business can answer customers 24/7 – even when you are offline – with an AI chatbot trained on your products and services.",
    audience:
      "SMEs in Kenya that receive many repeated questions on WhatsApp, Instagram DMs or website contact forms, and want automation.",
    benefits: [
      "Instant replies to common questions about pricing, location, products, and working hours.",
      "Capture customer names, contacts, and interests automatically for follow-up.",
      "Reduce missed leads when you are busy, asleep, or on the road.",
      "Standardized responses that keep your brand consistent and professional.",
    ],
    useCases: [
      "Retail businesses answering stock availability and price ranges.",
      "Clinics and service providers handling appointment inquiries and location questions.",
      "Real estate agents capturing details of interested buyers and tenants.",
      "Education centers, training institutes, and academies handling course inquiries.",
    ],
  },

  "whatsapp-broadcast-bulk-messaging": {
    slug: "whatsapp-broadcast-bulk-messaging",
    name: "WhatsApp Broadcast (Bulk WhatsApp Messaging)",
    category: "Direct Response Marketing in Kenya",
    seoTitle:
      "WhatsApp Broadcast & Bulk Messaging Services in Kenya | Boonifu – Reach Customers Fast",
    seoDescription:
      "Send targeted WhatsApp broadcast campaigns in Kenya. Promote offers, events, and reminders directly to your customers' phones.",
    keywords: [
      "WhatsApp bulk messaging Kenya",
      "WhatsApp broadcast Kenya",
      "direct marketing Kenya",
      "SME marketing solutions Kenya",
    ],
    hook:
      "Reach your customers where they already are – on WhatsApp – with well-planned, compliant broadcast campaigns.",
    audience:
      "Businesses and organizations in Kenya that have customer lists and want to promote new offers, events, and reminders.",
    benefits: [
      "Instant reach to existing and previous customers through WhatsApp.",
      "Segmented campaigns (by interest, location, or customer type) for better response.",
      "Clear, trackable campaigns with response-based follow-ups.",
      "Works very well when combined with social media and SMS.",
    ],
    useCases: [
      "Promotion of weekend offers, flash sales, and holiday discounts.",
      "Reminders for appointments, events, and payment deadlines.",
      "Announcements for new products, services, or branches.",
      "Re-activating past customers who haven’t ordered or visited in a while.",
    ],
  },

  "bulk-sms-services": {
    slug: "bulk-sms-services",
    name: "Bulk SMS Services",
    category: "Direct Messaging in Kenya",
    seoTitle:
      "Bulk SMS Services in Kenya for SMEs | Boonifu – Promotions, Alerts & Reminders",
    seoDescription:
      "Reliable bulk SMS services for SMEs in Kenya. Send promotions, reminders, and alerts quickly to your customer base.",
    keywords: [
      "bulk SMS services Kenya",
      "SMS marketing Kenya",
      "customer alerts Kenya",
      "SME communication tools Kenya",
    ],
    hook:
      "Deliver your message to thousands of customers instantly with reliable bulk SMS campaigns across Kenya.",
    audience:
      "SMEs, schools, SACCOs, clinics, and organizations that need high-delivery, high-visibility messaging.",
    benefits: [
      "Very high open rates compared to email.",
      "Fast, reliable delivery even on basic phones and feature phones.",
      "Ideal for time-sensitive alerts, reminders, and offers.",
      "Easy to combine with WhatsApp and social media campaigns.",
    ],
    useCases: [
      "Payment and renewal reminders for services and subscriptions.",
      "One-time passwords (OTPs) and verification codes.",
      "Event, class, or appointment reminders.",
      "Promotional SMS blasts for major campaigns.",
    ],
  },

  "marketing-posters-packs": {
    slug: "marketing-posters-packs",
    name: "Marketing Posters Packs",
    category: "Content Design for SMEs in Kenya",
    seoTitle:
      "Marketing Poster Packs for SMEs in Kenya | Boonifu – Branded, Ready-to-Post Graphics",
    seoDescription:
      "Poster design packs for Kenyan SMEs. Branded marketing posters for social media, WhatsApp, print, and in-store promotions.",
    keywords: [
      "marketing posters Kenya",
      "social media posters Kenya",
      "graphic design for SMEs Kenya",
    ],
    hook:
      "Always have something good-looking and on-brand to post or print – without starting from scratch each time.",
    audience:
      "Businesses that want professional visuals for campaigns, holidays, and regular promotions but don’t have in-house designers.",
    benefits: [
      "Consistent, on-brand visuals that make your business look credible.",
      "Templates you can reuse across different campaigns and platforms.",
      "Poster packs tuned for WhatsApp, Instagram, Facebook, and print.",
      "Supports both English and Swahili / Sheng where suitable.",
    ],
    useCases: [
      "Monthly promotion calendars for shops and restaurants.",
      "Holiday and seasonal posters (Christmas, Easter, Black Friday, etc.).",
      "In-store and window posters for offers and new products.",
      "Announcement posters for events, classes, and services.",
    ],
  },

  "marketing-video-packs": {
    slug: "marketing-video-packs",
    name: "Marketing Video Packs (UGC, Skits, Promos, AI Videos)",
    category: "Video Marketing in Kenya",
    seoTitle:
      "Marketing Video Packs in Kenya | UGC, Skits, Promotional & AI-Powered Videos",
    seoDescription:
      "Video content packs for Kenyan SMEs: UGC-style videos, skits, promotional clips, and AI-powered marketing videos optimized for social media.",
    keywords: [
      "UGC marketing videos Kenya",
      "promotional videos Kenya",
      "AI marketing videos Kenya",
      "video content for SMEs Kenya",
    ],
    hook:
      "Short, punchy videos that stop the scroll and move people to ask, visit, or buy.",
    audience:
      "SMEs that want more engaging video content for Reels, TikTok, Shorts, and ads – but lack in-house video teams.",
    benefits: [
      "Mix of UGC-style videos, skits, and direct promo videos tuned for Kenyan audiences.",
      "AI-powered videos for fast variations and creative testing.",
      "Optimized formats and lengths for major platforms.",
      "Can be mapped to specific campaigns, offers, or product launches.",
    ],
    useCases: [
      "Product demo videos and explainer clips.",
      "Story-based skits that highlight a problem and your solution.",
      "UGC-style testimonial-style videos for social proof.",
      "Ad creatives for Meta Ads, TikTok Ads, and YouTube campaigns.",
    ],
  },

  "e-commerce-solutions": {
    slug: "e-commerce-solutions",
    name: "E-commerce Solutions",
    category: "Online Selling in Kenya",
    seoTitle:
      "E-commerce Solutions for Kenyan SMEs | Boonifu – Simple Online Stores",
    seoDescription:
      "Lightweight e-commerce solutions for SMEs in Kenya. Simple online stores, catalog sites, and order flows designed for local customers.",
    keywords: [
      "e-commerce solutions Kenya",
      "online store for small business Kenya",
      "sell online Kenya",
    ],
    hook:
      "Sell online without needing a massive, complex e-commerce system – just what your Kenyan customers actually need.",
    audience:
      "Businesses ready to accept orders online but overwhelmed by big, complex e-commerce platforms.",
    benefits: [
      "Simple, mobile-first product catalog and ordering flows.",
      "Optimized for Kenyan users and payment preferences.",
      "Integrations with WhatsApp inquiries and delivery workflows.",
      "Flexible enough to grow with you as orders increase.",
    ],
    useCases: [
      "Boutiques and shops listing products with WhatsApp or checkout links.",
      "Food and delivery businesses managing online orders.",
      "B2B suppliers providing catalogs and quote requests.",
      "Subscription or package-based services offering online sign-ups.",
    ],
  },

  "website-design-development": {
    slug: "website-design-development",
    name: "Website Design & Development",
    category: "Web Design in Kenya",
    seoTitle:
      "Website Design & Development in Kenya | Boonifu – Fast, Modern SME Websites",
    seoDescription:
      "Modern, fast, and mobile-first websites for SMEs in Kenya. Designed to convert visitors into WhatsApp inquiries and customers.",
    keywords: [
      "website design Kenya",
      "SME website Kenya",
      "business website development Kenya",
      "landing pages for SMEs Kenya",
    ],
    hook:
      "Your website should be more than an online poster – it should be a 24/7 salesperson for your business.",
    audience:
      "SMEs, professionals, and organizations that need a modern, credible online presence that actually converts.",
    benefits: [
      "Clean, mobile-first designs that load fast even on slower connections.",
      "Clear calls-to-action to drive WhatsApp chats, calls, and bookings.",
      "SEO-optimized structure to support search ranking and LLM discovery.",
      "Integration with your social media, WhatsApp, and mailing tools.",
    ],
    useCases: [
      "Corporate profile sites for service businesses and agencies.",
      "Landing pages for campaigns, events, or product launches.",
      "Portfolio sites for creatives, consultants, and professionals.",
      "Simple multi-page sites for schools, clinics, and NGOs.",
    ],
  },

  "search-engine-llm-keyword-optimization": {
    slug: "search-engine-llm-keyword-optimization",
    name: "Search Engine & LLM Keyword Optimization",
    category: "SEO & AI Search Optimization",
    seoTitle:
      "Search Engine & LLM Keyword Optimization in Kenya | Boonifu – Be Discoverable",
    seoDescription:
      "SEO and LLM keyword optimization for Kenyan SMEs. Structure your content so you show up in Google, ChatGPT, Perplexity, and other AI search tools.",
    keywords: [
      "SEO services Kenya",
      "LLM keyword optimization Kenya",
      "rank on Google Kenya",
      "digital marketing services in Kenya",
    ],
    hook:
      "Make it easy for both Google and AI tools like ChatGPT and Perplexity to understand and recommend your business.",
    audience:
      "Businesses that want to be found when customers search online or ask AI tools for recommendations in Kenya.",
    benefits: [
      "Keyword research focused on how Kenyan customers actually search.",
      "On-page SEO structure (headings, metadata, internal links).",
      "Content topics that answer real questions and buying intent.",
      "LLM-friendly formatting so AI tools can extract and present your value clearly.",
    ],
    useCases: [
      "Optimizing existing websites that are getting low organic traffic.",
      "Launching new pages around high-intent keywords.",
      "Structuring FAQ and support content for better AI search visibility.",
      "Supporting ongoing content strategies for blogs and landing pages.",
    ],
  },

  "animations-motion-graphics": {
    slug: "animations-motion-graphics",
    name: "Animations & Motion Graphics",
    category: "Creative Motion for Marketing",
    seoTitle:
      "Animations & Motion Graphics for Kenyan SMEs | Boonifu – Stand Out Visually",
    seoDescription:
      "Custom animations and motion graphics for SMEs in Kenya. Enhance your videos, ads, and social content with compelling motion.",
    keywords: [
      "motion graphics Kenya",
      "animated marketing videos Kenya",
      "GIFs and animations for social media Kenya",
    ],
    hook:
      "Make your content impossible to ignore with clean, modern animations that match your brand.",
    audience:
      "Brands that want to elevate their video ads, explainers, and social content with motion graphics.",
    benefits: [
      "Explaining complex products or services visually in seconds.",
      "Higher attention and engagement rates across social and ads.",
      "On-brand animated elements that can be reused across content.",
      "Flexible formats for social media, websites, and presentations.",
    ],
    useCases: [
      "Animated explainer videos for new products and services.",
      "Motion intros and outros for video content.",
      "Animated posts and stories for campaigns.",
      "Branded GIFs and stickers for social media.",
    ],
  },

  "business-profiles-brochures-flyers-business-cards-packs": {
    slug: "business-profiles-brochures-flyers-business-cards-packs",
    name: "Business Profiles, Brochures, Flyers & Business Cards Packs",
    category: "Brand Collateral for SMEs in Kenya",
    seoTitle:
      "Business Profiles, Brochures, Flyers & Business Cards in Kenya | Boonifu",
    seoDescription:
      "Professional business profiles, brochures, flyers, and business cards for SMEs in Kenya. Make a strong impression online and offline.",
    keywords: [
      "business profile design Kenya",
      "brochures and flyers Kenya",
      "business cards for SMEs Kenya",
      "company profile Kenya",
    ],
    hook:
      "Give customers and partners something professional to hold, share, and remember – both online and offline.",
    audience:
      "SMEs and organizations that want credible, well-designed brand documents and print materials.",
    benefits: [
      "Clear, well-structured business profiles that communicate your value.",
      "Brochures and flyers tailored for events, sales teams, and walk-in clients.",
      "On-brand business cards that match your digital presence.",
      "Digital and print-ready files for flexible use.",
    ],
    useCases: [
      "Company profiles for pitches, tenders, and partnership meetings.",
      "Event brochures and handouts for expos and conferences.",
      "Flyers for door-to-door distribution or in-store placement.",
      "Business card designs for founders, sales teams, and staff.",
    ],
  },
};

// Dynamic metadata based on slug
export async function generateMetadata({ params }) {
  const service = SERVICES[params.slug];

  if (!service) {
    return {
      title: "Service Not Found | Boonifu – Be Seen",
      description: "The service you are looking for does not exist or has moved.",
    };
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    keywords: service.keywords,
    alternates: {
      // TODO: replace this with your real production domain
      canonical: `https://https://boonifu-site.vercel.app/services/${service.slug}`,
    },
  };
}

// Static params for pre-rendering all service pages
export function generateStaticParams() {
  return Object.values(SERVICES).map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }) {
  const service = SERVICES[params.slug];

  if (!service) {
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
            <p className="mt-3 text-sm text-slate-300">
              We focus on outcomes: visibility, inquiries, and revenue growth –
              not just activities.
            </p>
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
            <p className="mt-3 text-sm text-slate-300">
              Common ways SMEs in Kenya use this service to grow.
            </p>
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

      {/* Social Media Plans Special Section */}
      {hasPricing && (
        <Section className="bg-slate-950/60 border-y border-slate-800">
          <Container>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              {pricingTitle}
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Choose a package that matches your current stage. You can always
              upgrade as your visibility and revenue grow.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {plans.map((plan) => (
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
                  {plan.positioning && (
                    <p className="mt-3 text-xs text-slate-400">
                      {plan.positioning}
                    </p>
                  )}
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
              whether you bundle services like ads, video, or WhatsApp
              campaigns. Get a custom quote on WhatsApp in a few minutes.
            </p>
          </Container>
        </Section>
      )}

      {/* Final WhatsApp CTA */}
      <Section className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-sky-400">
        <Container className="flex flex-col items-start justify-between gap-4 text-slate-950 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold sm:text-2xl">
              Let’s see if {name} is right for your business
            </h2>
            <p className="mt-2 text-sm sm:text-base">
              Send us a quick WhatsApp message about your business and goals.
              We’ll reply with a simple recommendation – no pressure.
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
console.log("Available service keys:", Object.keys(SERVICES));
console.log("Requested slug:", params.slug);