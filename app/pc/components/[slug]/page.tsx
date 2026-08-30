import { notFound } from "next/navigation";
import { StandardDocTemplate } from "../../../components/docs/StandardDocTemplate";
import { formatEyebrow } from "../../../components/shell/navigation-utils";
import { pcNav } from "../../data/navigation";
import { pcComponents } from "../../data/components";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = pcNav.find((category) => category.id === "components")?.items.find((entry) => entry.slug === slug);
  return { title: item?.label ?? "컴포넌트" };
}

export default async function PcComponentDetail({ params }: PageProps) {
  const { slug } = await params;
  const category = pcNav.find((entry) => entry.id === "components")!;
  const item = category.items.find((entry) => entry.slug === slug);
  const entry = pcComponents[slug];

  if (!item || !entry) {
    notFound();
  }

  return (
    <StandardDocTemplate
      eyebrow={formatEyebrow("pc", "components")}
      category={entry.category}
      title={item.label}
      description={item.description}
      guidelines={entry.guidelines}
      tokenRows={entry.tokenRows}
      accessibilityNotes={entry.accessibilityNotes}
    />
  );
}
