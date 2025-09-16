import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { SelectField } from "~/components/molecules/select-field";
import { TextAreaField } from "~/components/molecules/textarea-field";
import { useIndustries } from "~/hooks/useIndustries";
import { useProjectTypes } from "~/hooks/useProjectTypes";
import type { FilterData } from "~/types/api";

interface FilterCardProps {
  onGenerate: (filters: FilterData) => void;
  isLoading?: boolean;
}

const COMPLEXITY_OPTIONS = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
  { value: "expert", label: "Expert" },
] as const;

export function FilterCard({ onGenerate, isLoading = false }: FilterCardProps) {
  const [filters, setFilters] = useState<FilterData>({
    industry: "",
    projectType: "",
    complexity: "intermediate",
    userInterest: "",
  });

  const { industries, loading: loadingIndustries } = useIndustries();
  const { projectTypes, loading: loadingProjectTypes } = useProjectTypes();

  useEffect(() => {
    if (industries.length > 0 && !filters.industry) {
      setFilters(prev => ({ ...prev, industry: industries[0].value }));
    }
  }, [industries, filters.industry]);

  useEffect(() => {
    if (projectTypes.length > 0 && !filters.projectType) {
      setFilters(prev => ({ ...prev, projectType: projectTypes[0].value }));
    }
  }, [projectTypes, filters.projectType]);

  const handleGenerate = () => {
    onGenerate(filters);
  };

  const updateFilter = (key: keyof FilterData, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const isFormValid = filters.industry && filters.projectType && !loadingIndustries && !loadingProjectTypes;

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>
          <Text variant="primary" size="lg" weight="semibold">
            Filters
          </Text>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <SelectField
          label="Industry"
          value={filters.industry}
          options={industries}
          onValueChange={(value) => updateFilter("industry", value)}
          placeholder={loadingIndustries ? "Loading..." : "Select Industry"}
        />
        
        <SelectField
          label="Project Type"
          value={filters.projectType}
          options={projectTypes}
          onValueChange={(value) => updateFilter("projectType", value)}
          placeholder={loadingProjectTypes ? "Loading..." : "Select Project Type"}
        />
        
        <SelectField
          label="Complexity"
          value={filters.complexity}
          options={COMPLEXITY_OPTIONS}
          onValueChange={(value) => updateFilter("complexity", value)}
        />
        
        <TextAreaField
          label="User Interest"
          value={filters.userInterest}
          onChange={(value) => updateFilter("userInterest", value)}
          placeholder="Input text"
          rows={3}
        />
        
        <Button 
          onClick={handleGenerate}
          disabled={isLoading || !isFormValid}
          className="w-full"
        >
          {isLoading ? "Generating..." : "Generate"}
        </Button>
      </CardContent>
    </Card>
  );
}