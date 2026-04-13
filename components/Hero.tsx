import { HeroCodeShell } from "@/components/HeroCodeShell";
import { HeroCodePanel } from "@/components/HeroCodePanel";
import { HeroIntro } from "@/components/HeroIntro";

export function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden pt-hero-pt pb-hero-pb sm:pt-hero-pt-lg sm:pb-hero-pb-lg"
    >
      <div
        className="pointer-events-none absolute -left-40 top-24 h-80 w-80 animate-pulse rounded-full bg-[var(--color-accent)] glow-orb [animation-duration:5s]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-32 h-96 w-96 animate-pulse rounded-full bg-[var(--color-violet)] glow-orb [animation-duration:6s]"
        aria-hidden
      />
      <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-8">
          <HeroIntro />
          <HeroCodeShell>
            <HeroCodePanel />
          </HeroCodeShell>
        </div>
      </div>
    </section>
  );
}
