import { notFound } from "next/navigation";
import { StandardDocTemplate } from "../../../components/docs/StandardDocTemplate";
import { formatEyebrow } from "../../../components/shell/navigation-utils";
import { mobileNav } from "../../data/navigation";
import { mobileComponents } from "../../data/components";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = mobileNav.find((category) => category.id === "components")?.items.find((entry) => entry.slug === slug);
  return { title: item?.label ?? "컴포넌트" };
}

export default async function MobileComponentDetail({ params }: PageProps) {
  const { slug } = await params;
  const category = mobileNav.find((entry) => entry.id === "components")!;
  const item = category.items.find((entry) => entry.slug === slug);
  const entry = mobileComponents[slug];

  if (!item || !entry) {
    notFound();
  }

  return (
    <StandardDocTemplate
      eyebrow={formatEyebrow("mobile", "components")}
      category={entry.category}
      title={item.label}
      description={item.description}
      guidelines={entry.guidelines}
      tokenRows={entry.tokenRows}
      accessibilityNotes={entry.accessibilityNotes}
    />
  );
}
