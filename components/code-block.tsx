"use client";

import { Check, Copy } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

interface CodeBlockProps extends React.ComponentProps<"div"> {
  code: string;
  language?: string;
  filename?: string;
}

export function CodeBlock({
  code,
  language = "tsx",
  filename,
  className,
  ...props
}: CodeBlockProps) {
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
        "relative w-full max-w-full min-w-0 rounded-xl border border-border/40 bg-neutral-950 text-neutral-200 dark:bg-[#0d0c0a] dark:text-[#d4cfc9] font-mono text-xs overflow-hidden shadow-lg",
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between border-b border-border/30 bg-neutral-900 px-3.5 sm:px-4 py-2 text-xs text-neutral-400 dark:bg-[#161412] dark:text-[#8c857c]">
        <span className="truncate max-w-[180px] sm:max-w-none">
          {filename || language}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 rounded-md border border-border/40 bg-neutral-800 px-2.5 py-1 text-[11px] text-neutral-300 dark:bg-[#1f1b18] dark:text-[#c4beb8] transition-colors hover:bg-amber-500/10 hover:text-amber-400 hover:border-amber-500/40 cursor-pointer shrink-0"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="size-3.5 text-emerald-400" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="size-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="w-full max-w-full min-w-0 overflow-x-auto p-3.5 sm:p-4 leading-relaxed text-neutral-200 dark:text-[#d4cfc9]">
        <pre className="m-0 font-mono text-xs">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
