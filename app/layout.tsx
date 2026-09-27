import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://saqib-portfolio-87708.web.app"),
  title: {
    default: "Muhammad Saqib Rafique | Senior Software Engineer",
    template: "%s | Muhammad Saqib Rafique",
  },
  description:
    "Senior Software Engineer focused on scalable frontend architecture, React, Next.js, Angular, TypeScript, testing, and high-quality product engineering.",
  keywords: [
    "Muhammad Saqib Rafique",
    "Senior Software Engineer",
    "Frontend Engineer",
    "React",
    "Next.js",
    "Angular",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: "Muhammad Saqib Rafique" }],
  creator: "Muhammad Saqib Rafique",
  openGraph: {
    title: "Muhammad Saqib Rafique | Senior Software Engineer",
    description:
      "Building scalable, user-focused software with modern frontend architecture and strong engineering practices.",
    url: "/",
    siteName: "Muhammad Saqib Rafique",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Muhammad Saqib Rafique | Senior Software Engineer",
    description:
      "Building scalable, user-focused software with modern frontend architecture and strong engineering practices.",
  },
  alternates: {
    canonical: "/",
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
