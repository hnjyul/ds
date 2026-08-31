import type { Metadata } from "next";
import { CategoryIndexTemplate } from "../../components/docs/CategoryIndexTemplate";
import { pcNav } from "../data/navigation";

export const metadata: Metadata = { title: "패턴" };

export default function PcPatternsIndex() {
  const category = pcNav.find((item) => item.id === "patterns")!;
  return <CategoryIndexTemplate surface="pc" category={category} />;
}
