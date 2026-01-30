// app/layout.js
import "./globals.css";
import Header from "./components/layout/Header";
import WhatsAppFloatingButton from "./components/layout/WhatsAppFloatingButton";

export const metadata = {
  metadataBase: new URL("https://boonifu-site.vercel.app"), // update if you have custom domain
  title: {
    default: "Boonifu – Be Seen | Digital Marketing & Growth Solutions in Kenya",
    template: "%s | Boonifu – Be Seen",
  },
  description:
    "Boonifu helps SMEs in Kenya get seen, get customers, and grow revenue using digital marketing, AI, and automation.",
  keywords: [
    "digital marketing services in Kenya",
    "SME marketing solutions Kenya",
    "AI chatbot for businesses Kenya",
    "WhatsApp marketing Kenya",
    "social media management Kenya",
  ],
  openGraph: {
    title: "Boonifu – Be Seen | Digital Marketing & Growth Solutions in Kenya",
    description:
      "Visibility and growth solutions for SMEs in Kenya. Get seen, get customers, and grow faster with digital marketing, AI, and automation.",
    url: "https://boonifu-site.vercel.app",
    siteName: "Boonifu – Be Seen",
    locale: "en_KE",
    type: "website",
  },
  alternates: {
    canonical: "https://boonifu-site.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-50 antialiased">
        <Header />
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}