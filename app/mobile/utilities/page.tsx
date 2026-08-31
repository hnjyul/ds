import type { Metadata } from "next";
import { CategoryIndexTemplate } from "../../components/docs/CategoryIndexTemplate";
import { mobileNav } from "../data/navigation";

export const metadata: Metadata = { title: "유틸리티" };

export default function MobileUtilitiesIndex() {
  const category = mobileNav.find((item) => item.id === "utilities")!;
  return <CategoryIndexTemplate surface="mobile" category={category} />;
}
