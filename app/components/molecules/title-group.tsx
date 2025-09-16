import { Text } from "~/components/ui/text";

interface TitleGroupProps {
  title: string;
  subtitle: string;
  creator: string;
}

export function TitleGroup({ title, subtitle, creator }: TitleGroupProps) {
  return (
    <header className="flex flex-col items-center gap-4">
      <Text
        as="h1"
        variant="primary"
        size="6xl"
        className="font-aboreto text-center"
      >
        {title}
      </Text>
      <Text
        variant="secondary"
        size="xl"
        className="text-center"
      >
        {subtitle}
      </Text>
      <Text
        variant="caption"
        size="sm"
        weight="bold"
        className="text-center"
      >
        {creator}
      </Text>
    </header>
  );
}
