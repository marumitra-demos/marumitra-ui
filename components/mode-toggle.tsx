"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      disabled={!mounted}
      aria-label="Toggle theme"
      className="relative inline-flex size-8 items-center justify-center rounded-lg border border-border/40 bg-muted/40 text-foreground transition-all duration-200 hover:border-amber-500/40 hover:bg-amber-500/10 hover:text-amber-400 active:scale-95 cursor-pointer disabled:opacity-50"
    >
      <Sun className="size-4 rotate-0 scale-100 transition-transform duration-300 dark:-rotate-90 dark:scale-0 text-amber-600 dark:text-amber-400" />
      <Moon className="absolute size-4 rotate-90 scale-0 transition-transform duration-300 dark:rotate-0 dark:scale-100 text-amber-600 dark:text-amber-400" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
