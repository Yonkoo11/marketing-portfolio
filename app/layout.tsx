import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "dr. alex | Security Researcher",
  description:
    "Smart contract auditor & security researcher. MD turned code surgeon. Finding critical vulnerabilities in DeFi protocols.",
  openGraph: {
    title: "dr. alex | Security Researcher",
    description:
      "Smart contract auditor finding critical vulnerabilities in DeFi protocols. Clinical precision applied to code.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "dr. alex - Security Researcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "dr. alex | Security Researcher",
    description: "Smart contract auditor. MD turned code surgeon.",
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
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased grid-bg">{children}</body>
    </html>
  );
}
