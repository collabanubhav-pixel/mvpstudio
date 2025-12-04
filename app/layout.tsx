import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MVP Studio",
  description: "MVP Studio",
  icons: {
    icon: [
      { url: "/logomvp.png", type: "image/png" }
    ],
    apple: "/logomvp.png",
  },
  openGraph: {
    title: "MVP Studio",
    description: "MVP Studio",
    url: "https://www.mvpstudio.in/, http://localhost:3000",
    siteName: "MVP Studio",
    images: [
      {
        url: "/logomvp.png",
        width: 1200,
        height: 630,
        alt: "MVP Studio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MVP Studio",
    description: "MVP Studio",
    images: ["/logomvp.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" type="image/png" href="/logomvp.png" />
        <link rel="apple-touch-icon" href="/logomvp.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
