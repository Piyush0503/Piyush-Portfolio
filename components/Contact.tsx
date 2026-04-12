import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";

export function Contact() {
  const mailto = `mailto:${site.email}`;

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="glass-panel cta-glow-border rounded-3xl px-6 py-14 text-center sm:px-12 sm:py-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s Build Something <span className="text-gradient">Together</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-400">
            Tell me about your product, timeline, and stack—I&apos;ll follow up shortly.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#contact-form"
              className="inline-flex w-full items-center justify-center rounded-xl bg-[var(--color-accent)] px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_28px_-6px_rgba(0,229,255,0.45)] transition hover:bg-[var(--color-accent-dim)] sm:w-auto"
            >
              Start a Conversation →
            </Link>
            <Link
              href={mailto}
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-[var(--color-accent)]/45 hover:bg-white/[0.04] sm:w-auto"
            >
              Send Email Directly
            </Link>
          </div>
        </div>
        </Reveal>

        <Reveal delay={0.12} className="mt-14 block">
          <div
            id="contact-form"
            className="scroll-mt-28 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-1)]/60 p-6 sm:p-10"
          >
          <h3 className="text-lg font-semibold text-white">Or use the form</h3>
          <p className="mt-2 text-sm text-slate-500">
            Requires <code className="font-mono text-[var(--color-accent)]">MONGODB_URI</code> in{" "}
            <code className="font-mono text-slate-400">.env.local</code>.
          </p>
          <ContactForm />
        </div>
        </Reveal>
      </div>
    </section>
  );
}
