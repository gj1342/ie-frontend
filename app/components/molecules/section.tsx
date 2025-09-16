import { Text } from "~/components/ui/text";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <div>
      <Text variant="primary" size="lg" weight="semibold" className="mb-3">
        {title}
      </Text>
      {children}
    </div>
  );
}


