import type { Metadata } from "next";
import { CategoryIndexTemplate } from "../../components/docs/CategoryIndexTemplate";
import { mobileNav } from "../data/navigation";

export const metadata: Metadata = { title: "컴포넌트" };

export default function MobileComponentsIndex() {
  const category = mobileNav.find((item) => item.id === "components")!;
  return <CategoryIndexTemplate surface="mobile" category={category} />;
}
