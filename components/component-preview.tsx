"use client";

import { Check, Code2, Copy, Eye } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

interface ComponentPreviewProps extends React.ComponentProps<"div"> {
  code: string;
  children: React.ReactNode;
  title?: string;
  align?: "center" | "start" | "end";
}

export function ComponentPreview({
  code,
  children,
  title,
  align = "center",
  className,
  ...props
}: ComponentPreviewProps) {
  const [tab, setTab] = React.useState<"preview" | "code">("preview");
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col w-full max-w-full min-w-0 rounded-xl border border-border/40 bg-card text-card-foreground shadow-xl overflow-hidden my-6",
        className,
      )}
      {...props}
    >
      {/* Header bar with tabs and actions */}
      <div className="flex flex-wrap gap-2.5 items-center justify-between border-b border-border/30 px-3.5 sm:px-4 py-2.5 bg-muted/30">
        <div className="flex flex-wrap items-center gap-2">
          {title && (
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-500/90 mr-2">
              {title}
            </span>
          )}
          <div className="inline-flex rounded-lg border border-border/40 bg-muted/50 p-0.5 text-xs">
            <button
              type="button"
              onClick={() => setTab("preview")}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-all cursor-pointer",
                tab === "preview"
                  ? "bg-amber-500/20 text-amber-600 dark:text-amber-300 shadow-sm font-semibold"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Eye className="size-3.5" />
              <span>Preview</span>
            </button>
            <button
              type="button"
              onClick={() => setTab("code")}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-all cursor-pointer",
                tab === "code"
                  ? "bg-amber-500/20 text-amber-600 dark:text-amber-300 shadow-sm font-semibold"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Code2 className="size-3.5" />
              <span>Code</span>
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 rounded-md border border-border/40 bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-300 hover:border-amber-500/40 cursor-pointer shrink-0"
          aria-label="Copy snippet"
        >
          {copied ? (
            <>
              <Check className="size-3.5 text-emerald-500" />
              <span className="text-emerald-500 font-medium">Copied</span>
            </>
          ) : (
            <>
              <Copy className="size-3.5" />
              <span>Copy Code</span>
            </>
          )}
        </button>
      </div>

      {/* Content Area */}
      {tab === "preview" ? (
        <div
          className={cn(
            "min-h-[140px] w-full max-w-full min-w-0 bg-muted/15 p-4 sm:p-6 md:p-10 flex flex-col justify-center overflow-x-auto",
            align === "center" && "items-center",
            align === "start" && "items-start",
            align === "end" && "items-end",
          )}
        >
          <div className="w-full max-w-4xl min-w-0">{children}</div>
        </div>
      ) : (
        <div className="overflow-x-auto bg-neutral-950 p-3.5 sm:p-4 text-xs font-mono leading-relaxed text-neutral-200 dark:bg-[#0d0c0a] dark:text-[#d4cfc9]">
          <pre className="m-0 font-mono text-xs">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
