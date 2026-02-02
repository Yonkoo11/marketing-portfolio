import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Alex | Marketing Profile",
  description:
    "Medical Innovator & Creative Marketer. Bridging healthcare expertise with strategic marketing, content creation, and meme-driven engagement.",
  openGraph: {
    title: "Dr. Alex | Marketing Profile",
    description:
      "Medical Innovator & Creative Marketer. Strategic marketing, content creation, and community growth.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Dr. Alex - Marketing Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Alex | Marketing Profile",
    description: "Medical Innovator & Creative Marketer",
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
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
