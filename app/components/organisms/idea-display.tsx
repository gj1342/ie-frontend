import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import { Section } from "~/components/molecules/section";
import type { IdeaResponse } from "~/types/api";

interface IdeaDisplayProps {
  idea: IdeaResponse | null;
  loading?: boolean;
  error?: string | null;
}

export function IdeaDisplay({ idea, loading = false, error = null }: IdeaDisplayProps) {
  if (loading) {
    return (
      <Card className="bg-card border rounded-lg p-8 shadow-sm h-[700px] flex flex-col">
        <CardContent className="flex items-center justify-center h-full flex-1">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <Text variant="secondary" size="lg">
              Generating your innovative idea...
            </Text>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="bg-card border rounded-lg p-8 shadow-sm h-[700px] flex flex-col">
        <CardContent className="flex items-center justify-center h-full flex-1">
          <div className="text-center">
            <Text variant="primary" size="lg" weight="semibold" className="mb-2">
              Error generating idea
            </Text>
            <Text variant="secondary" size="sm">
              {error}
            </Text>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!idea) {
    return (
      <Card className="bg-card border rounded-lg p-8 shadow-sm h-[700px] flex flex-col">
        <CardContent className="flex items-center justify-center h-full flex-1">
          <div className="text-center text-muted-foreground">
            <Text variant="secondary" size="lg">
              Generated project ideas will appear here
            </Text>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-card border rounded-lg p-8 shadow-sm h-[700px] flex flex-col">
      <CardHeader className="pb-4 flex-none">
        <CardTitle>
          <Text
            variant="primary"
            size="xl"
            weight="bold"
            className="mb-2 italic font-afacad-flux"
          >
            "{idea.title}"
          </Text>
          <Text variant="secondary" size="sm">
            Estimated Duration: {idea.estimatedDuration}
          </Text>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6 overflow-y-auto flex-1">
        <Section title="Description">
          <Text variant="body" size="base" className="leading-relaxed text-justify">
            {idea.description}
          </Text>
        </Section>

        <Section title="Features">
          <ul className="space-y-2">
            {idea.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <Text variant="body" size="base">
                  {feature}
                </Text>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Objectives">
          <ul className="space-y-2">
            {idea.objectives.map((objective, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <Text variant="body" size="base">
                  {objective}
                </Text>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Challenges">
          <ul className="space-y-2">
            {idea.challenges.map((challenge, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <Text variant="body" size="base">
                  {challenge}
                </Text>
              </li>
            ))}
          </ul>
        </Section>
      </CardContent>
    </Card>
  );
}
