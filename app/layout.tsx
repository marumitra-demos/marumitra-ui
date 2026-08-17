import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "MaruMitra UI — Open Component Registry",
    template: "%s | MaruMitra UI",
  },
  description:
    "An open shadcn/ui component registry for Next.js & Tailwind CSS v4 with zero hydration overhead and automated UTM attribution.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full w-full max-w-full flex flex-col bg-background text-foreground font-sans selection:bg-amber-500/30 selection:text-amber-700 dark:selection:text-amber-200 transition-colors duration-200 overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <SiteHeader />
          <main className="flex-1 w-full max-w-full min-w-0">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
