import { Text } from "~/components/ui/text";

interface TitleGroupProps {
  title: string;
  subtitle: string;
  creator: string;
}

export function TitleGroup({ title, subtitle, creator }: TitleGroupProps) {
  return (
    <header className="flex flex-col items-center gap-3 px-4">
      <Text
        as="h1"
        variant="primary"
        size="4xl"
        className="font-aboreto text-center sm:text-5xl md:text-6xl leading-tight"
      >
        {title}
      </Text>
      <Text
        variant="secondary"
        size="base"
        className="text-center sm:text-lg md:text-xl"
      >
        {subtitle}
      </Text>
      <Text
        variant="caption"
        size="xs"
        weight="bold"
        className="text-center sm:text-sm"
      >
        {creator}
      </Text>
    </header>
  );
}
