import type { Metadata } from "next";
import "./globals.css";

const title = "Abhay Kumar | AI/ML Engineer, Data Scientist & AI Systems Builder";
const description =
  "Portfolio of Abhay Kumar — AI/ML engineering, data science, graph intelligence, reliability systems and distributed AI infrastructure.";

export const metadata: Metadata = {
  metadataBase: new URL("https://abhay-portfolio-delta-five.vercel.app"),
  title,
  description,
  keywords: [
    "Abhay Kumar",
    "AI/ML Engineer",
    "Data Scientist",
    "AI Systems",
    "Graph Intelligence",
    "Reliability Engineering",
    "Distributed Systems",
  ],
  authors: [
    {
      name: "Abhay Kumar",
      url: "https://abhay-portfolio-delta-five.vercel.app",
    },
  ],
  creator: "Abhay Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Abhay Kumar Portfolio",
    title,
    description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Abhay Kumar — AI/ML Engineer, Data Scientist and AI Systems Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
