import { ArrowRight, Layers } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Components Catalog",
  description: "Browse all available components in the MaruMitra UI registry.",
};

const components = [
  {
    name: "Copyright Text",
    slug: "copyright-text",
    description:
      "A composable copyright and UTM attribution bar with customizable company name, year ranges, logo (URL/file/SVG), and rights statement.",
    tags: ["RSC", "Tailwind v4", "Footer", "Attribution"],
    command: "npx shadcn@latest add @marumitra/copyright-text",
  },
];

export default function ComponentsCatalogPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
      <div className="flex flex-col gap-4 border-b border-border/40 pb-8">
        <div className="inline-flex items-center gap-2 self-start rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-medium text-amber-600 dark:text-amber-400">
          <Layers className="size-3.5" />
          <span>Registry Directory</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
          Components
        </h1>

        <p className="max-w-2xl text-sm text-muted-foreground leading-relaxed">
          Explore all open components distributed via the MaruMitra UI shadcn
          registry. Install directly into your application using the shadcn CLI.
        </p>
      </div>

      {/* Component Cards Grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {components.map((item) => (
          <Link
            key={item.slug}
            href={`/components/${item.slug}`}
            className="group flex flex-col justify-between rounded-2xl border border-border/40 bg-card p-6 shadow-xl text-card-foreground transition-all duration-200 hover:-translate-y-1 hover:border-amber-500/40 hover:bg-muted/40"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-xl font-semibold text-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {item.name}
                </h2>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground group-hover:text-amber-600 dark:group-hover:text-amber-300">
                  <span>Docs</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>

              <div className="mt-2 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border/40 bg-muted/50 px-2.5 py-0.5 text-[11px] font-medium text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-border/30 pt-3 font-mono text-[11px] text-muted-foreground truncate">
              <code>{item.command}</code>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
