import { TitleGroup } from "~/components/molecules/title-group";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  creator: string;
}

export function HeroSection({ title, subtitle, creator }: HeroSectionProps) {
  return (
    <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
      <TitleGroup title={title} subtitle={subtitle} creator={creator} />
    </div>
  );
}
