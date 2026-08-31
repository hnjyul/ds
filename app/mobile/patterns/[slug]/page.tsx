import { notFound } from "next/navigation";
import { PatternDocTemplate } from "../../../components/docs/PatternDocTemplate";
import { formatEyebrow } from "../../../components/shell/navigation-utils";
import { mobileNav } from "../../data/navigation";
import { mobilePatterns } from "../../data/patterns";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = mobileNav.find((category) => category.id === "patterns")?.items.find((entry) => entry.slug === slug);
  return { title: item?.label ?? "패턴" };
}

export default async function MobilePatternDetail({ params }: PageProps) {
  const { slug } = await params;
  const category = mobileNav.find((entry) => entry.id === "patterns")!;
  const item = category.items.find((entry) => entry.slug === slug);
  const entry = mobilePatterns[slug];

  if (!item || !entry) {
    notFound();
  }

  return (
    <PatternDocTemplate
      eyebrow={formatEyebrow("mobile", "patterns")}
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
