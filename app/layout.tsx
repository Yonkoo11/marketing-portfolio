import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "THE DAILY DISPATCH — Dr. Alex | Marketing & Growth",
  description:
    "Builder who ships. I make things people actually use, and I know how to get eyes on them. Currently accepting new clients.",
  openGraph: {
    title: "THE DAILY DISPATCH — Dr. Alex | Marketing & Growth",
    description:
      "Builder who ships. Technical depth combined with marketing instinct. 12% engagement rate.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Dr. Alex - Marketing & Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Alex | Marketing & Growth",
    description: "Builder who ships. Technical depth combined with marketing instinct.",
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
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
