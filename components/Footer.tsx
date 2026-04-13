import Link from "next/link";
import { site } from "@/data/site";

const displayBrand =
  site.lastName.trim().length > 0
    ? `${site.firstName} ${site.lastName}`.trim()
    : site.firstName;

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-500 sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {displayBrand}. Built with Next.js &amp; ♥
        </p>
        <Link
          href="#home"
          className="text-slate-400 transition hover:text-[var(--color-accent)]"
        >
          Back to top ↑
        </Link>
      </div>
    </footer>
  );
}
