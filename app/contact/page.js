// app/contact/page.js
"use client";

import { useState } from "react";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

const WHATSAPP_URL = "https://wa.me/254759293030";

export default function ContactPage() {
  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "submitted"

  function handleSubmit(e) {
    e.preventDefault();
    // Placeholder – you can wire this to Formspree or an API route later.
    setStatus("submitted");
  }

  return (
    <main>
      <Section className="bg-slate-950 pb-10 pt-20 sm:pt-24">
        <Container className="max-w-3xl">
          <header>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-400">
              Contact
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Let’s talk about your business
            </h1>
            <p className="mt-4 text-sm text-slate-300 sm:text-base">
              Share a few details and we’ll recommend simple next steps for your
              visibility and growth. You can also message us directly on
              WhatsApp if you prefer.
            </p>
            <a
              href={WHATSAPP_URL}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
            >
              Chat on WhatsApp instead
            </a>
          </header>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-200"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold text-slate-300"
                >
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none ring-emerald-500/0 transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="business"
                  className="block text-xs font-semibold text-slate-300"
                >
                  Business name
                </label>
                <input
                  id="business"
                  name="business"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none ring-emerald-500/0 transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30"
                  placeholder="Your company / shop / clinic"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-slate-300"
                >
                  Email (or WhatsApp number)
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none ring-emerald-500/0 transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30"
                  placeholder="you@example.com / 07xx xxx xxx"
                />
              </div>
              <div>
                <label
                  htmlFor="businessType"
                  className="block text-xs font-semibold text-slate-300"
                >
                  Business type
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none ring-emerald-500/0 transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="retail">Retail / shop</option>
                  <option value="service">Service business</option>
                  <option value="health">Health / clinic / pharmacy</option>
                  <option value="real-estate">Real estate / property</option>
                  <option value="education">School / training / academy</option>
                  <option value="other">Other / not listed</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="goal"
                className="block text-xs font-semibold text-slate-300"
              >
                Main goal
              </label>
              <select
                id="goal"
                name="goal"
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none ring-emerald-500/0 transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30"
                defaultValue=""
              >
                <option value="" disabled>
                  Select one
                </option>
                <option value="look-professional">
                  Look professional online (website / brand)
                </option>
                <option value="more-inquiries">
                  Get more inquiries / walk‑ins
                </option>
                <option value="sell-online">
                  Sell more online (e‑commerce / campaigns)
                </option>
                <option value="automation">
                  Automate replies (AI chatbot / WhatsApp)
                </option>
                <option value="other">Other / not sure</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="details"
                className="block text-xs font-semibold text-slate-300"
              >
                Anything else we should know?
              </label>
              <textarea
                id="details"
                name="details"
                rows={4}
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none ring-emerald-500/0 transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30"
                placeholder="Current challenges, what you’ve tried, or timelines..."
              />
            </div>

            <div className="flex items-center justify-between gap-3">
              <button
                type="submit"
                disabled={status === "submitting" || status === "submitted"}
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitted"
                  ? "Thanks, we’ll contact you soon"
                  : "Send details"}
              </button>
              <p className="text-[11px] text-slate-500">
                We’ll usually reply within{" "}
                <span className="font-semibold text-slate-300">
                  24 business hours
                </span>{" "}
                via WhatsApp or email.
              </p>
            </div>
          </form>
        </Container>
      </Section>
    </main>
  );
}