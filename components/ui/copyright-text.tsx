import type * as React from "react";
import { cn } from "@/lib/utils";

export interface UtmOptions {
  baseUrl?: string;
  clientId?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  customParams?: Record<string, string>;
}

/**
 * Builds a deterministic destination URL with UTM tracking parameters.
 */
export function buildUtmUrl({
  baseUrl = "https://marumitra.com",
  clientId,
  utmSource,
  utmMedium = "referral",
  utmCampaign = "footer_attribution",
  utmContent = "developed_by",
  customParams,
}: UtmOptions = {}): string {
  try {
    const url = new URL(baseUrl);
    const source = utmSource || clientId || "footer";

    url.searchParams.set("utm_source", source);
    if (utmMedium) url.searchParams.set("utm_medium", utmMedium);
    if (utmCampaign) url.searchParams.set("utm_campaign", utmCampaign);
    if (utmContent) url.searchParams.set("utm_content", utmContent);

    if (customParams) {
      for (const [key, value] of Object.entries(customParams)) {
        if (value) url.searchParams.set(key, value);
      }
    }

    return url.toString();
  } catch {
    return baseUrl;
  }
}

interface CopyrightTextProps extends React.ComponentProps<"div"> {
  showBorder?: boolean;
}

function CopyrightText({
  className,
  showBorder = true,
  ...props
}: CopyrightTextProps) {
  return (
    <div
      data-slot="copyright-text"
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-muted-foreground",
        showBorder && "border-t border-border/40 pt-8",
        className,
      )}
      {...props}
    />
  );
}

interface CopyrightNoticeProps extends React.ComponentProps<"p"> {
  companyName?: string;
  endYear?: number;
  startYear?: number;
  rightsText?: string;
  symbol?: string;
}

function CopyrightNotice({
  className,
  companyName,
  endYear = new Date().getFullYear(),
  startYear,
  rightsText = "All rights reserved.",
  symbol = "©",
  children,
  ...props
}: CopyrightNoticeProps) {
  const yearDisplay =
    startYear && startYear !== endYear
      ? `${startYear}–${endYear}`
      : `${endYear}`;

  return (
    <p
      data-slot="copyright-notice"
      className={cn("m-0 leading-normal", className)}
      {...props}
    >
      {children ?? (
        <>
          {symbol} {yearDisplay}
          {companyName ? ` ${companyName}.` : ""} {rightsText}
        </>
      )}
    </p>
  );
}

interface CopyrightAttributionProps
  extends Omit<React.ComponentProps<"div">, "children">,
    UtmOptions {
  label?: string;
  brandName?: string;
  logo?: string | React.ReactNode;
  logoAlt?: string;
  logoClassName?: string;
  linkClassName?: string;
}

function CopyrightAttribution({
  className,
  linkClassName,
  label = "Developed by",
  brandName = "MARUMITRA",
  baseUrl = "https://marumitra.com",
  logo = "https://marumitra.com/logo.png",
  logoAlt,
  logoClassName,
  clientId,
  utmSource,
  utmMedium = "referral",
  utmCampaign = "footer_attribution",
  utmContent = "developed_by",
  customParams,
  ...props
}: CopyrightAttributionProps) {
  const destinationUrl = buildUtmUrl({
    baseUrl,
    clientId,
    utmSource,
    utmMedium,
    utmCampaign,
    utmContent,
    customParams,
  });

  const renderedLogo =
    typeof logo === "string" ? (
      // biome-ignore lint/performance/noImgElement: standard framework-agnostic img element for open registry
      <img
        src={logo}
        alt={logoAlt || `${brandName} logo`}
        className={cn(
          "size-4 shrink-0 rounded-sm object-contain",
          logoClassName,
        )}
        loading="lazy"
      />
    ) : (
      logo
    );

  return (
    <div
      data-slot="copyright-attribution"
      className={cn("flex items-center gap-1.5 leading-normal", className)}
      {...props}
    >
      {label && <span>{label}</span>}
      <a
        href={destinationUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-slot="branding-anchor"
        className={cn(
          "inline-flex items-center gap-1.5 font-semibold text-foreground underline underline-offset-4 decoration-foreground/40 transition-colors duration-200 hover:text-amber-600 dark:hover:text-amber-400 hover:decoration-current",
          linkClassName,
        )}
      >
        {logo && renderedLogo}
        <span>{brandName}</span>
      </a>
    </div>
  );
}

export { CopyrightText, CopyrightNotice, CopyrightAttribution };
