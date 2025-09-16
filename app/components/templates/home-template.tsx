import { useState } from "react";
import { HeroSection } from "~/components/organisms/hero-section";
import { FilterCard } from "~/components/organisms/filter-card";
import { IdeaDisplay } from "~/components/organisms/idea-display";
import { useIdeas } from "~/hooks/useIdeas";
import type { FilterData, IdeaResponse } from "~/types/api";

export function HomeTemplate() {
  const [generatedIdea, setGeneratedIdea] = useState<IdeaResponse | null>(null);
  const { generateIdea, loading, error } = useIdeas();

  const handleGenerate = async (filters: FilterData) => {
    const idea = await generateIdea(filters);
    if (idea) {
      setGeneratedIdea(idea);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <HeroSection
          title="INNOVATIVE SPHERE"
          subtitle="Your next big idea, in orbit"
          creator="Created by gj1342"
        />
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
          <div className="flex justify-center lg:justify-end self-start">
            <FilterCard onGenerate={handleGenerate} isLoading={loading} />
          </div>
          
          <div className="lg:col-span-2">
            <IdeaDisplay 
              idea={generatedIdea} 
              loading={loading} 
              error={error} 
            />
          </div>
        </div>
      </div>
    </main>
  );
}
