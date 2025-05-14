import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ishavthinks | Thoughts on Life, Finance & the Mind",
  description:
    "ishavthinks is a personal blog that explores life musings, finance, self-awareness, and deep thinking about the modern world.",
  keywords: [
    "ishavthinks",
    "personal blog",
    "finance insights",
    "life lessons",
    "self-awareness",
    "philosophy",
    "personal growth",
    "thinking",
    "investment",
    "lifestyle",
    "blog",
    "ishav",
    "ishavthinks.com",
  ],
  metadataBase: new URL("https://ishavthinks.com"),
  openGraph: {
    title: "ishavthinks | Thoughts on Life, Finance & the Mind",
    description:
      "Read thought-provoking articles on personal growth, finance, and navigating modern life with depth and clarity.",
    url: "https://ishavthinks.com",
    siteName: "ishavthinks",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "ishavthinks - Personal Blog on Life, Finance, and Thought",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ishavthinks | Personal Blog on Life, Finance & Growth",
    description:
      "Articles that challenge your thinking and expand your perspective — from life lessons to financial wisdom.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/DevFavicon/favicon.ico", sizes: "any" },
      { url: "/DevFavicon/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/DevFavicon/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/DevFavicon/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/DevFavicon/favicon-16x16.png",
        color: "#2563EB",
      },
    ],
  },
  manifest: "/DevFavicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-background">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
