import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://jah-solar-energy.vercel.app"), // Update this when custom domain is added
  title: {
    default: "Jah Solar Energy & Electrical | Solar Installation Lagos, Nigeria",
    template: "%s | Jah Solar Energy & Electrical",
  },
  description:
    "Professional solar installation and electrical services in Lagos, Nigeria. Licensed engineer providing reliable solar panels, inverter systems, house wiring, and industrial electrical works. Get a free quote today.",
  keywords: [
    "solar installation lagos",
    "solar panels nigeria",
    "inverter installation lagos",
    "electrical services lagos",
    "house wiring lagos",
    "solar energy company nigeria",
    "electrician near me lagos",
    "industrial electrical works",
    "solar maintenance lagos",
    "off-grid solar nigeria",
    "jah solar energy",
    "solar installer in lagos",
  ],
  authors: [{ name: "Jah Solar Energy & Electrical" }],
  creator: "Jah Solar Energy & Electrical",
  publisher: "Jah Solar Energy & Electrical",
  formatDetection: {
    telephone: "+2347035362804",
    email: "jaholaomo@gmail.com",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://jah-solar-energy.vercel.app",
    siteName: "Jah Solar Energy & Electrical",
    title: "Jah Solar Energy & Electrical | Solar Installation Lagos",
    description:
      "Professional solar installation and electrical services in Lagos, Nigeria. Licensed engineer. Free consultation.",
    images: [
      {
        url: "/images/og-image.png", // We'll create this
        width: 1200,
        height: 630,
        alt: "Jah Solar Energy & Electrical - Solar Installation Lagos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jah Solar Energy & Electrical | Solar Installation Lagos",
    description:
      "Professional solar installation and electrical services in Lagos, Nigeria. Free quote available.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add these when you set them up (free)
    // google: "your-google-site-verification-code",
  },
  alternates: {
    canonical: "https://jah-solar-energy.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}