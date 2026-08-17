import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import {
  CopyrightAttribution,
  CopyrightNotice,
  CopyrightText,
} from "@/components/ui/copyright-text";

export const metadata = {
  title: "Copyright Text",
  description:
    "A composable copyright and UTM attribution bar with customizable company name, year ranges, logo, and rights statement.",
};

export default function CopyrightTextDocPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
        <Link
          href="/components"
          className="transition-colors hover:text-amber-600 dark:hover:text-amber-300"
        >
          Components
        </Link>
        <ChevronRight className="size-3.5" />
        <span className="text-foreground">Copyright Text</span>
      </div>

      {/* Header Section */}
      <div className="flex flex-col gap-4 border-b border-border/40 pb-8">
        <div className="flex items-center gap-2">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            Copyright Text
          </h1>
          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-medium text-amber-600 dark:text-amber-400">
            registry:ui
          </span>
        </div>

        <p className="max-w-2xl text-sm text-muted-foreground leading-relaxed">
          A composable, zero-hydration React Server Component (RSC) that renders
          a standardized copyright line with dynamic year calculation, company
          name, rights statement, and customizable MaruMitra logo UTM
          attribution.
        </p>

        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="rounded-md border border-border/40 bg-card px-2.5 py-1 text-xs text-muted-foreground">
            React Server Component (RSC)
          </span>
          <span className="rounded-md border border-border/40 bg-card px-2.5 py-1 text-xs text-muted-foreground">
            Tailwind CSS v4 &amp; v3
          </span>
          <span className="rounded-md border border-border/40 bg-card px-2.5 py-1 text-xs text-muted-foreground">
            Zero Dependencies
          </span>
        </div>
      </div>

      {/* Main Interactive Preview & Code */}
      <section className="mt-10">
        <h2 className="font-serif text-xl font-semibold text-foreground mb-2">
          Preview
        </h2>
        <p className="text-xs text-muted-foreground mb-4">
          Live render of the component with default configuration.
        </p>

        <ComponentPreview
          title="Default Preview"
          code={`import {
  CopyrightText,
  CopyrightNotice,
  CopyrightAttribution,
} from "@/components/ui/copyright-text"

export function FooterCopyright() {
  return (
    <CopyrightText>
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
  )
}`}
        >
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
        </ComponentPreview>
      </section>

      {/* Installation Section */}
      <section className="mt-14 flex flex-col gap-6">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            Installation
          </h2>
          <p className="text-xs text-muted-foreground mt-1">
            Install the component directly into your project using the shadcn
            CLI.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-500/90">
            Via Registry Namespace (Recommended)
          </h3>
          <p className="text-xs text-muted-foreground">
            With{" "}
            <code className="text-amber-600 dark:text-amber-400">
              @marumitra
            </code>{" "}
            configured in your{" "}
            <code className="text-amber-600 dark:text-amber-400">
              components.json
            </code>{" "}
            registries:
          </p>
          <CodeBlock
            code="npx shadcn@latest add @marumitra/copyright-text"
            language="bash"
            filename="Terminal"
          />

          <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-500/90 mt-4">
            Via Direct URL
          </h3>
          <CodeBlock
            code="npx shadcn@latest add https://ui.marumitra.com/r/copyright-text.json"
            language="bash"
            filename="Terminal"
          />

          <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-500/90 mt-4">
            Via GitHub Registry Shorthand
          </h3>
          <CodeBlock
            code="npx shadcn@latest add marumitra/marumitra-ui/copyright-text"
            language="bash"
            filename="Terminal"
          />
        </div>
      </section>

      {/* Examples Section */}
      <section className="mt-16 flex flex-col gap-10">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            Examples
          </h2>
          <p className="text-xs text-muted-foreground mt-1">
            Explore different configuration patterns and layout overrides.
          </p>
        </div>

        {/* Example 1: Date Range & Custom Rights */}
        <div className="flex flex-col gap-3">
          <h3 className="font-serif text-lg font-semibold text-foreground">
            1. Date Range &amp; Custom Rights Text
          </h3>
          <p className="text-xs text-muted-foreground">
            Specify{" "}
            <code className="text-amber-600 dark:text-amber-300">
              startYear
            </code>{" "}
            and{" "}
            <code className="text-amber-600 dark:text-amber-300">endYear</code>{" "}
            to display a range (e.g., &quot;1984–2026&quot;).
          </p>

          <ComponentPreview
            code={`<CopyrightText showBorder={false}>
  <CopyrightNotice
    companyName="Heritage Stones Ltd"
    startYear={1984}
    endYear={2026}
    rightsText="Crafting natural stone since 1984."
  />
  <CopyrightAttribution
    clientId="heritage-stones"
    label="Powered by"
    brandName="MARUMITRA"
  />
</CopyrightText>`}
          >
            <CopyrightText showBorder={false}>
              <CopyrightNotice
                companyName="Heritage Stones Ltd"
                startYear={1984}
                endYear={2026}
                rightsText="Crafting natural stone since 1984."
              />
              <CopyrightAttribution
                clientId="heritage-stones"
                label="Powered by"
                brandName="MARUMITRA"
              />
            </CopyrightText>
          </ComponentPreview>
        </div>

        {/* Example 2: Custom SVG ReactNode Logo */}
        <div className="flex flex-col gap-3">
          <h3 className="font-serif text-lg font-semibold text-foreground">
            2. Custom Inline SVG Logo
          </h3>
          <p className="text-xs text-muted-foreground">
            Pass any React component or SVG element directly to the{" "}
            <code className="text-amber-600 dark:text-amber-300">logo</code>{" "}
            prop.
          </p>

          <ComponentPreview
            code={`<CopyrightText showBorder={false}>
  <CopyrightNotice
    companyName="Acme Cloud Solutions"
    endYear={2026}
  />
  <CopyrightAttribution
    clientId="acme-cloud"
    label="Built with"
    brandName="MARUMITRA"
    logo={
      <svg className="size-4 text-amber-500 dark:text-amber-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    }
  />
</CopyrightText>`}
          >
            <CopyrightText showBorder={false}>
              <CopyrightNotice
                companyName="Acme Cloud Solutions"
                endYear={2026}
              />
              <CopyrightAttribution
                clientId="acme-cloud"
                label="Built with"
                brandName="MARUMITRA"
                logo={
                  <svg
                    className="size-4 text-amber-500 dark:text-amber-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                }
              />
            </CopyrightText>
          </ComponentPreview>
        </div>
      </section>

      {/* Props Reference Section */}
      <section className="mt-16 flex flex-col gap-8">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            Props Reference
          </h2>
          <p className="text-xs text-muted-foreground mt-1">
            Comprehensive property descriptions and default values.
          </p>
        </div>

        {/* CopyrightText Table */}
        <div className="flex flex-col gap-3">
          <h3 className="font-serif text-base font-semibold text-amber-600 dark:text-amber-400">
            &lt;CopyrightText /&gt;
          </h3>
          <div className="overflow-x-auto rounded-xl border border-border/40 bg-card text-card-foreground shadow-lg">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-border/30 bg-muted/40 text-muted-foreground">
                <tr>
                  <th className="p-3 font-semibold">Prop</th>
                  <th className="p-3 font-semibold">Type</th>
                  <th className="p-3 font-semibold">Default</th>
                  <th className="p-3 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/20 text-foreground">
                <tr>
                  <td className="p-3 font-mono text-amber-600 dark:text-amber-300">
                    showBorder
                  </td>
                  <td className="p-3 font-mono text-muted-foreground">
                    boolean
                  </td>
                  <td className="p-3 font-mono text-emerald-600 dark:text-emerald-400">
                    true
                  </td>
                  <td className="p-3">
                    Whether to render a subtle top divider border and top
                    padding.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-amber-600 dark:text-amber-300">
                    className
                  </td>
                  <td className="p-3 font-mono text-muted-foreground">
                    string
                  </td>
                  <td className="p-3 font-mono text-muted-foreground">-</td>
                  <td className="p-3">
                    Additional CSS utility classes merged using `cn()`.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CopyrightNotice Table */}
        <div className="flex flex-col gap-3">
          <h3 className="font-serif text-base font-semibold text-amber-600 dark:text-amber-400">
            &lt;CopyrightNotice /&gt;
          </h3>
          <div className="overflow-x-auto rounded-xl border border-border/40 bg-card text-card-foreground shadow-lg">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-border/30 bg-muted/40 text-muted-foreground">
                <tr>
                  <th className="p-3 font-semibold">Prop</th>
                  <th className="p-3 font-semibold">Type</th>
                  <th className="p-3 font-semibold">Default</th>
                  <th className="p-3 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/20 text-foreground">
                <tr>
                  <td className="p-3 font-mono text-amber-600 dark:text-amber-300">
                    companyName
                  </td>
                  <td className="p-3 font-mono text-muted-foreground">
                    string
                  </td>
                  <td className="p-3 font-mono text-muted-foreground">-</td>
                  <td className="p-3">The company or organization name.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-amber-600 dark:text-amber-300">
                    endYear
                  </td>
                  <td className="p-3 font-mono text-muted-foreground">
                    number
                  </td>
                  <td className="p-3 font-mono text-emerald-600 dark:text-emerald-400">
                    new Date().getFullYear()
                  </td>
                  <td className="p-3">Ending year for the copyright notice.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-amber-600 dark:text-amber-300">
                    startYear
                  </td>
                  <td className="p-3 font-mono text-muted-foreground">
                    number
                  </td>
                  <td className="p-3 font-mono text-muted-foreground">-</td>
                  <td className="p-3">
                    Optional start year to render a range (e.g., 1984–2026).
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-amber-600 dark:text-amber-300">
                    rightsText
                  </td>
                  <td className="p-3 font-mono text-muted-foreground">
                    string
                  </td>
                  <td className="p-3 font-mono text-emerald-600 dark:text-emerald-400">
                    &quot;All rights reserved.&quot;
                  </td>
                  <td className="p-3">Rights statement suffix.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-amber-600 dark:text-amber-300">
                    symbol
                  </td>
                  <td className="p-3 font-mono text-muted-foreground">
                    string
                  </td>
                  <td className="p-3 font-mono text-emerald-600 dark:text-emerald-400">
                    &quot;©&quot;
                  </td>
                  <td className="p-3">Copyright symbol prefix.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CopyrightAttribution Table */}
        <div className="flex flex-col gap-3">
          <h3 className="font-serif text-base font-semibold text-amber-600 dark:text-amber-400">
            &lt;CopyrightAttribution /&gt;
          </h3>
          <div className="overflow-x-auto rounded-xl border border-border/40 bg-card text-card-foreground shadow-lg">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-border/30 bg-muted/40 text-muted-foreground">
                <tr>
                  <th className="p-3 font-semibold">Prop</th>
                  <th className="p-3 font-semibold">Type</th>
                  <th className="p-3 font-semibold">Default</th>
                  <th className="p-3 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/20 text-foreground">
                <tr>
                  <td className="p-3 font-mono text-amber-600 dark:text-amber-300">
                    label
                  </td>
                  <td className="p-3 font-mono text-muted-foreground">
                    string
                  </td>
                  <td className="p-3 font-mono text-emerald-600 dark:text-emerald-400">
                    &quot;Developed by&quot;
                  </td>
                  <td className="p-3">Prefix label preceding the brand.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-amber-600 dark:text-amber-300">
                    brandName
                  </td>
                  <td className="p-3 font-mono text-muted-foreground">
                    string
                  </td>
                  <td className="p-3 font-mono text-emerald-600 dark:text-emerald-400">
                    &quot;MARUMITRA&quot;
                  </td>
                  <td className="p-3">Anchor text for the branding link.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-amber-600 dark:text-amber-300">
                    logo
                  </td>
                  <td className="p-3 font-mono text-muted-foreground">
                    string | ReactNode
                  </td>
                  <td className="p-3 font-mono text-emerald-600 dark:text-emerald-400">
                    &quot;https://marumitra.com/logo.png&quot;
                  </td>
                  <td className="p-3">
                    Image URL, static path, or React SVG element.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-amber-600 dark:text-amber-300">
                    clientId
                  </td>
                  <td className="p-3 font-mono text-muted-foreground">
                    string
                  </td>
                  <td className="p-3 font-mono text-muted-foreground">-</td>
                  <td className="p-3">
                    Client slug used as default `utm_source`.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-amber-600 dark:text-amber-300">
                    baseUrl
                  </td>
                  <td className="p-3 font-mono text-muted-foreground">
                    string
                  </td>
                  <td className="p-3 font-mono text-emerald-600 dark:text-emerald-400">
                    &quot;https://marumitra.com&quot;
                  </td>
                  <td className="p-3">Destination website URL.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
