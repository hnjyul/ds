import type { Metadata } from "next";
import { CategoryIndexTemplate } from "../../components/docs/CategoryIndexTemplate";
import { pcNav } from "../data/navigation";

export const metadata: Metadata = { title: "유틸리티" };

export default function PcUtilitiesIndex() {
  const category = pcNav.find((item) => item.id === "utilities")!;
  return <CategoryIndexTemplate surface="pc" category={category} />;
}
