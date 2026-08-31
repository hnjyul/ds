import type { Metadata } from "next";
import { CategoryIndexTemplate } from "../../components/docs/CategoryIndexTemplate";
import { pcNav } from "../data/navigation";

export const metadata: Metadata = { title: "컴포넌트" };

export default function PcComponentsIndex() {
  const category = pcNav.find((item) => item.id === "components")!;
  return <CategoryIndexTemplate surface="pc" category={category} />;
}
