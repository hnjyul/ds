import { notFound } from "next/navigation";
import { ReferenceDocTemplate } from "../../../components/docs/ReferenceDocTemplate";
import { formatEyebrow } from "../../../components/shell/navigation-utils";
import { mobileNav } from "../../data/navigation";
import { mobileUtilities } from "../../data/utilities";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = mobileNav.find((category) => category.id === "utilities")?.items.find((entry) => entry.slug === slug);
  return { title: item?.label ?? "유틸리티" };
}

export default async function MobileUtilityDetail({ params }: PageProps) {
  const { slug } = await params;
  const category = mobileNav.find((entry) => entry.id === "utilities")!;
  const item = category.items.find((entry) => entry.slug === slug);
  const entry = mobileUtilities[slug];

  if (!item || !entry) {
    notFound();
  }

  return (
    <ReferenceDocTemplate
      eyebrow={formatEyebrow("mobile", "utilities")}
      category={entry.category}
      title={item.label}
      description={item.description}
      specimen={entry.specimen}
      usageNotes={entry.usageNotes}
      accessibilityNotes={entry.accessibilityNotes}
    />
  );
}
