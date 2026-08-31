import type { Metadata } from "next";
import { CategoryIndexTemplate } from "../../components/docs/CategoryIndexTemplate";
import { mobileNav } from "../data/navigation";

export const metadata: Metadata = { title: "파운데이션" };

export default function MobileFoundationIndex() {
  const category = mobileNav.find((item) => item.id === "foundation")!;
  return <CategoryIndexTemplate surface="mobile" category={category} />;
}
