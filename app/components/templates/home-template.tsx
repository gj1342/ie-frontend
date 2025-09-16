import { HeroSection } from "~/components/organisms/hero-section";
import { FilterCard } from "~/components/organisms/filter-card";

export function HomeTemplate() {
  const handleGenerate = (filters: any) => {
    console.log("Generated with filters:", filters);
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <HeroSection
          title="INNOVATIVE SPHERE"
          subtitle="Your next big idea, in orbit"
          creator="Created by Gene Joshua Bañaga"
        />
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="flex justify-center lg:justify-end">
            <FilterCard onGenerate={handleGenerate} />
          </div>
          
        </div>
      </div>
    </main>
  );
}
