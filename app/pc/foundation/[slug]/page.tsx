import { notFound } from "next/navigation";
import { ReferenceDocTemplate } from "../../../components/docs/ReferenceDocTemplate";
import { formatEyebrow } from "../../../components/shell/navigation-utils";
import { pcNav } from "../../data/navigation";
import { pcFoundation } from "../../data/foundation";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = pcNav.find((category) => category.id === "foundation")?.items.find((entry) => entry.slug === slug);
  return { title: item?.label ?? "파운데이션" };
}

export default async function PcFoundationDetail({ params }: PageProps) {
  const { slug } = await params;
  const category = pcNav.find((entry) => entry.id === "foundation")!;
  const item = category.items.find((entry) => entry.slug === slug);
  const entry = pcFoundation[slug];

  if (!item || !entry) {
    notFound();
  }

  return (
    <ReferenceDocTemplate
      eyebrow={formatEyebrow("pc", "foundation")}
      category={entry.category}
      title={item.label}
      description={item.description}
      specimen={entry.specimen}
      usageNotes={entry.usageNotes}
      accessibilityNotes={entry.accessibilityNotes}
    />
  );
}
