import { HeroIntro } from "@/components/HeroIntro";
import { HeroVisual } from "@/components/HeroVisual";
import { FloatingParticles } from "@/components/animations/FloatingParticles";

export function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden pt-hero-pt pb-hero-pb sm:pt-hero-pt-lg sm:pb-hero-pb-lg"
    >
      {/* Glow orbs */}
      <div
        className="pointer-events-none absolute -left-40 top-24 h-80 w-80 animate-pulse rounded-full bg-[var(--color-accent)] glow-orb [animation-duration:5s]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-32 h-96 w-96 animate-pulse rounded-full bg-[var(--color-violet)] glow-orb [animation-duration:6s]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-[var(--color-violet)] glow-orb opacity-10 [animation-duration:8s]"
        aria-hidden
      />

      <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />
      <FloatingParticles />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-4">
          <HeroIntro />
          <div className="flex items-center justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
