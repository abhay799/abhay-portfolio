import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhay Kumar | AI/ML Engineer & Data Scientist",
  description:
    "Portfolio of Abhay Kumar — AI/ML engineering, data science, graph intelligence, reliability systems and distributed AI infrastructure.",
  keywords: [
    "Abhay Kumar",
    "AI Engineer",
    "ML Engineer",
    "Data Scientist",
    "Machine Learning",
    "Portfolio",
  ],
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
