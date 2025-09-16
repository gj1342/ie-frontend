import { HeroSection } from "~/components/organisms/hero-section";

export function HomeTemplate() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <HeroSection
        title="INNOVATIVE SPHERE"
        subtitle="Your next big idea, in orbit"
        creator="Created by Gene Joshua Bañaga"
      />
    </main>
  );
}
