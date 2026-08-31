import { notFound } from "next/navigation";
import { ReferenceDocTemplate } from "../../../components/docs/ReferenceDocTemplate";
import { formatEyebrow } from "../../../components/shell/navigation-utils";
import { mobileNav } from "../../data/navigation";
import { mobileFoundation } from "../../data/foundation";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = mobileNav.find((category) => category.id === "foundation")?.items.find((entry) => entry.slug === slug);
  return { title: item?.label ?? "파운데이션" };
}

export default async function MobileFoundationDetail({ params }: PageProps) {
  const { slug } = await params;
  const category = mobileNav.find((entry) => entry.id === "foundation")!;
  const item = category.items.find((entry) => entry.slug === slug);
  const entry = mobileFoundation[slug];

  if (!item || !entry) {
    notFound();
  }

  return (
    <ReferenceDocTemplate
      eyebrow={formatEyebrow("mobile", "foundation")}
      category={entry.category}
      title={item.label}
      description={item.description}
      specimen={entry.specimen}
      usageNotes={entry.usageNotes}
      accessibilityNotes={entry.accessibilityNotes}
    />
  );
}
