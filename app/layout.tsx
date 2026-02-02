import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "dr. alex | Web3 Growth Marketer",
  description:
    "Web3 growth strategist specializing in viral content, community building, and campaign strategy. MD turned marketer.",
  openGraph: {
    title: "dr. alex | Web3 Growth Marketer",
    description:
      "Web3 growth strategist. Viral content creator. Community builder. 400%+ engagement rates.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "dr. alex - Web3 Growth Marketer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "dr. alex | Web3 Growth Marketer",
    description: "Web3 growth strategist. Viral content. Community building.",
    creator: "@soligxbt",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
