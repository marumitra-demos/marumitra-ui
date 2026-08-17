import { ArrowRight, Cpu, Layers, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import { CodeBlock } from "@/components/code-block";
import {
  CopyrightAttribution,
  CopyrightNotice,
  CopyrightText,
} from "@/components/ui/copyright-text";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 py-12 md:py-20">
      {/* Hero Section */}
      <section className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-medium text-amber-600 dark:text-amber-400 mb-6">
          <Sparkles className="size-3.5" />
          <span>shadcn/ui Open Component Registry</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-foreground max-w-4xl leading-[1.1]">
          Crafted Components for{" "}
          <span className="italic font-light text-amber-600 dark:text-amber-400">
            Next.js &amp; Tailwind
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          Production-ready, composable React Server Components with zero
          hydration overhead, Tailwind CSS v4 support, and automated UTM
          attribution links.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/components/copyright-text"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-neutral-950 shadow-lg shadow-amber-500/20 transition-transform hover:-translate-y-0.5 hover:bg-amber-400 active:translate-y-0"
          >
            <span>Explore Copyright Text</span>
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/components"
            className="inline-flex items-center gap-2 rounded-xl border border-border/50 bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted hover:border-amber-500/30"
          >
            <span>Component Catalog</span>
          </Link>
        </div>

        {/* Quick Setup with Registry & Namespace */}
        <div className="mt-12 w-full max-w-2xl text-left">
          <div className="flex flex-col gap-4 rounded-2xl border border-border/40 bg-card p-6 shadow-xl text-card-foreground">
            <div className="flex items-center justify-between border-b border-border/30 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="flex size-6 items-center justify-center rounded-full bg-amber-500/20 text-xs font-bold text-amber-600 dark:text-amber-400">
                  1
                </span>
                <span className="text-xs font-semibold text-foreground">
                  Add{" "}
                  <code className="text-amber-600 dark:text-amber-400">
                    @marumitra
                  </code>{" "}
                  registry to{" "}
                  <code className="text-amber-600 dark:text-amber-400">
                    components.json
                  </code>
                </span>
              </div>
            </div>

            <CodeBlock
              code={`{
  "registries": {
    "@marumitra": "https://ui.marumitra.com/r/{name}.json"
  }
}`}
              language="json"
              filename="components.json"
            />

            <div className="flex items-center justify-between border-b border-border/30 pt-3 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="flex size-6 items-center justify-center rounded-full bg-amber-500/20 text-xs font-bold text-amber-600 dark:text-amber-400">
                  2
                </span>
                <span className="text-xs font-semibold text-foreground">
                  Install components using the namespace
                </span>
              </div>
            </div>

            <CodeBlock
              code="npx shadcn@latest add @marumitra/copyright-text"
              language="bash"
              filename="Terminal"
            />
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="mx-auto w-full max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-3 rounded-2xl border border-border/40 bg-card p-6 shadow-xl text-card-foreground">
            <div className="flex size-10 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <Cpu className="size-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-foreground">
              Zero Hydration Lag
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              100% React Server Component (RSC) compatible. Emits clean semantic
              HTML with zero JavaScript payload shipped to your users.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-2xl border border-border/40 bg-card p-6 shadow-xl text-card-foreground">
            <div className="flex size-10 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <Zap className="size-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-foreground">
              Tailwind CSS v4
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Native Tailwind CSS v4 and v3 compatibility. Relies on semantic
              design tokens and standard shadcn utility conventions.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-2xl border border-border/40 bg-card p-6 shadow-xl text-card-foreground sm:col-span-2 lg:col-span-1">
            <div className="flex size-10 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <Layers className="size-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-foreground">
              Direct UTM Tracking
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Formats clean destination links with marketing UTM parameters
              without tracking endpoint bottlenecks or prefetch pollution.
            </p>
          </div>
        </div>
      </section>

      {/* Live Featured Preview Section */}
      <section className="mx-auto w-full max-w-5xl px-6">
        <div className="flex flex-col gap-6 rounded-2xl border border-border/40 bg-card p-8 shadow-2xl text-card-foreground">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border/30 pb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-500/90">
                Featured Component
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mt-1">
                Copyright Text
              </h2>
            </div>
            <Link
              href="/components/copyright-text"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-600 dark:text-amber-400 transition-colors hover:text-amber-500 dark:hover:text-amber-300"
            >
              <span>View Full Documentation &amp; Examples</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            A flexible copyright line supporting dynamic company name, year
            ranges, custom rights text, and MaruMitra logo UTM attribution.
          </p>

          <div className="rounded-xl border border-border/30 bg-muted/20 p-6 sm:p-8">
            <CopyrightText showBorder={false}>
              <CopyrightNotice
                companyName="Ashwini Marble & Granites"
                endYear={2026}
                rightsText="All rights reserved."
              />
              <CopyrightAttribution
                clientId="ashwini-marbles"
                label="Developed by"
                brandName="MARUMITRA"
                baseUrl="https://marumitra.com"
                logo="https://marumitra.com/logo.png"
              />
            </CopyrightText>
          </div>
        </div>
      </section>
    </div>
  );
}
