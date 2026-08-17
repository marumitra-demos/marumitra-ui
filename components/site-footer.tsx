import {
  CopyrightAttribution,
  CopyrightNotice,
  CopyrightText,
} from "@/components/ui/copyright-text";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border/40 bg-muted/20 px-6 py-8 md:px-12">
      <div className="mx-auto max-w-6xl">
        <CopyrightText showBorder={false}>
          <CopyrightNotice
            companyName="MaruMitra"
            endYear={new Date().getFullYear()}
            rightsText="Open component registry. All rights reserved."
          />
          <CopyrightAttribution
            label="Maintained by"
            brandName="MARUMITRA"
            clientId="marumitra-ui-docs"
            baseUrl="https://marumitra.com"
            logo="https://marumitra.com/logo.png"
          />
        </CopyrightText>
      </div>
    </footer>
  );
}
