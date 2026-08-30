import { notFound } from "next/navigation";
import { ReferenceDocTemplate } from "../../../components/docs/ReferenceDocTemplate";
import { formatEyebrow } from "../../../components/shell/navigation-utils";
import { pcNav } from "../../data/navigation";
import { pcUtilities } from "../../data/utilities";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = pcNav.find((category) => category.id === "utilities")?.items.find((entry) => entry.slug === slug);
  return { title: item?.label ?? "유틸리티" };
}

export default async function PcUtilityDetail({ params }: PageProps) {
  const { slug } = await params;
  const category = pcNav.find((entry) => entry.id === "utilities")!;
  const item = category.items.find((entry) => entry.slug === slug);
  const entry = pcUtilities[slug];

  if (!item || !entry) {
    notFound();
  }

  return (
    <ReferenceDocTemplate
      eyebrow={formatEyebrow("pc", "utilities")}
      category={entry.category}
      title={item.label}
      description={item.description}
      specimen={entry.specimen}
      usageNotes={entry.usageNotes}
      accessibilityNotes={entry.accessibilityNotes}
    />
  );
}
