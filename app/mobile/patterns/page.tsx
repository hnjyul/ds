import type { Metadata } from "next";
import { CategoryIndexTemplate } from "../../components/docs/CategoryIndexTemplate";
import { mobileNav } from "../data/navigation";

export const metadata: Metadata = { title: "패턴" };

export default function MobilePatternsIndex() {
  const category = mobileNav.find((item) => item.id === "patterns")!;
  return <CategoryIndexTemplate surface="mobile" category={category} />;
}
