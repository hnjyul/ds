import { notFound } from "next/navigation";
import { PatternDocTemplate } from "../../../components/docs/PatternDocTemplate";
import { formatEyebrow } from "../../../components/shell/navigation-utils";
import { pcNav } from "../../data/navigation";
import { pcPatterns } from "../../data/patterns";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = pcNav.find((category) => category.id === "patterns")?.items.find((entry) => entry.slug === slug);
  return { title: item?.label ?? "패턴" };
}

export default async function PcPatternDetail({ params }: PageProps) {
  const { slug } = await params;
  const category = pcNav.find((entry) => entry.id === "patterns")!;
  const item = category.items.find((entry) => entry.slug === slug);
  const entry = pcPatterns[slug];

  if (!item || !entry) {
    notFound();
  }

  return (
    <PatternDocTemplate
      eyebrow={formatEyebrow("pc", "patterns")}
      category={entry.category}
      title={item.label}
      description={item.description}
      whenToUse={entry.whenToUse}
      steps={entry.steps}
      guidelines={entry.guidelines}
      accessibilityNotes={entry.accessibilityNotes}
    />
  );
}
