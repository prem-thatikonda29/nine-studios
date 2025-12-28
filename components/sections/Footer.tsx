"use client";
import { FOOTER_CONTENT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="py-section-y px-section">
      <div className="max-w-container-lg mx-auto">
        <div className="text-center pt-12 border-t border-border">
          <p className="text-xl font-semibold mb-2">
            {FOOTER_CONTENT.brandName}
          </p>
          <p className="text-muted-foreground mb-4">{FOOTER_CONTENT.tagline}</p>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {FOOTER_CONTENT.brandName}. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
