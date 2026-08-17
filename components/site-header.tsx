import { Layers, Sparkles } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
          >
            <div className="flex size-8 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-500 dark:text-amber-400">
              <Sparkles className="size-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
                MaruMitra{" "}
                <span className="text-amber-600 dark:text-amber-400">UI</span>
              </span>
            </div>
          </Link>

          {/* Navigation links */}
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <Link
              href="/components"
              className="transition-colors hover:text-foreground"
            >
              Components
            </Link>
            <Link
              href="/components/copyright-text"
              className="transition-colors hover:text-foreground"
            >
              Copyright Text
            </Link>
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          <a
            href="/r/copyright-text.json"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-lg border border-border/40 bg-muted/40 px-3 py-1.5 text-xs font-mono text-amber-600 dark:text-amber-300 transition-colors hover:bg-amber-500/10 hover:border-amber-500/40 sm:inline-flex"
          >
            <Layers className="size-3.5" />
            <span>registry.json</span>
          </a>

          <a
            href="https://github.com/marumitra/marumitra-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-8 items-center justify-center rounded-lg border border-border/40 bg-muted/40 text-foreground transition-all duration-200 hover:border-amber-500/40 hover:bg-amber-500/10 hover:text-amber-500 dark:hover:text-amber-400 active:scale-95"
          >
            <svg
              className="size-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span className="sr-only">GitHub Repository</span>
          </a>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
